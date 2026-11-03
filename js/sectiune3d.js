/* Secțiunile detaliilor (window.DETALII, din data/detalii/*.js) în 3D: formele 2D ale secțiunii, extrudate pe o
   adâncime, ca un bloc tăiat, cu materialele lor (js/materiale3d.js, materialUmplere). Unitățile sunt cm.
   Modulul nu creează renderer, nu atinge DOM-ul (în afară de texturile canvas) și nu face nimic la import.

   Coordonatele (câmpul „sectiune3d” din detaliu, descris în desene/README.md):
   - secțiune verticală: X = x, Y = −y, Z = adâncimea, de la −adancime/2 la +adancime/2; fața tăieturii e la
     Z = +adancime/2, normala e +Z;
   - secțiune orizontală (D-06, privită de sus): X = x, Z = y, Y = înălțimea; fața tăieturii e sus, la
     Y = +adancime/2, normala e +Y.
   Pe formă: „adanc3d” (lungimea piesei pe adâncime), „z3d” (la ce adâncime începe, de la fața tăieturii; la cabluri și
   țevi, adâncimea axei), „repeta3d” (copii pe adâncime: montanți, lamele), „umplere3d” (alt material în 3D),
   „corp3d” (altă formă în 3D), „cilindru3d”, „tub3d”, „rotund3d”, „puncte3d”.

   Folosire: const s = construieste(window.DETALII['D-06']); scena.add(s.grup);
   const { pozitie, tinta } = s.vedere(det.vedere, latime / inaltime); ... s.elibereaza(); */
import * as THREE from './vendor/three/three.module.min.js';
import { RoundedBoxGeometry } from './vendor/three/RoundedBoxGeometry.js';
import { materialUmplere, canvasTex } from './materiale3d.js';

// formele fără volum: le desenează motorul pașilor, cu punct()
const FARA_VOLUM = new Set(['cota', 'eticheta', 'text', 'ochi', 'contur']);
// animația implicită pe tip, ca în animeaza() din js/pasi.js
const ANIM = { structura: 'din-perete', dreptunghi: 'din-perete', roca: 'creste', linie: 'deseneaza', tub: 'pop', profil: 'din-camera',
  lumina: 'lumina', ochi: 'apare', contur: 'apare', cota: 'apare', eticheta: 'apare', text: 'apare', focar: 'din-dreapta', flacara: 'lumina',
  poligon: 'din-perete', fir: 'deseneaza', cerc: 'pop', simbol: 'pop' };
// culorile izolației firelor (aceleași chei ca FIRE din js/pasi.js)
const CABLURI = { faza: '#8b5a2b', nul: '#2563eb', pamant: '#65a30d', comanda: '#7c3aed', 'v24-plus': '#c0392b', 'v24-minus': '#1f1f1f' };
const TEVI = { apa: .8, calda: .8, gaz: 1.5 };
const TRANSPARENTE = new Set(['zona', 'sablon']);
const RAD = Math.PI / 180;
// lumina benzilor LED și a flăcării (candela, cu distanțele în cm)
const LUMINA_LED = 110, LUMINA_FOC = 700;

export function construieste(det, opt = {}) {
  const cfg = Object.assign({}, det.sectiune3d || {}, opt);
  const oriz = cfg.plan === 'orizontal';
  const A = +cfg.adancime || 60, F = A / 2;
  const privire = cfg.privire || (oriz ? [12, -30] : [25, 12]);
  const cuLumini = cfg.lumini !== false, cuContur = cfg.contur !== false;
  const grup = new THREE.Group();
  grup.name = `sectiune3d ${det.id}`;
  const piese = new Map(), geos = new Set(), mats = new Set(), texs = new Set();
  // totul se construiește în reperul secțiunii verticale; la secțiunea orizontală se rotește apoi cu −90° în jurul lui X
  const rot = oriz ? new THREE.Matrix4().makeRotationX(-Math.PI / 2) : null;
  const normala = oriz ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(0, 0, 1);
  const W = (x, y, d = 0) => { const v = new THREE.Vector3(x, -y, F - d); return rot ? v.applyMatrix4(rot) : v; };
  const punct = (x, y) => W(x, y, 0);

  // ---------------------------------------------------------------- resursele
  const reg = m => { mats.add(m); for (const k of ['map', 'emissiveMap', 'alphaMap']) if (m[k]) texs.add(m[k]); return m; };
  const M = nume => reg(materialUmplere(nume));
  const lista = m => (Array.isArray(m) ? m : [m]);
  function mesh(geo, mat, o = {}) {
    geos.add(geo); lista(mat).forEach(reg);
    const m = new THREE.Mesh(geo, mat), transp = lista(mat).some(x => x.transparent || x.blending === THREE.AdditiveBlending);
    m.castShadow = o.umbra ?? !transp; m.receiveShadow = !transp;
    m.userData.uv = o.uv !== false;
    if (o.ordine) m.renderOrder = o.ordine;
    return m;
  }
  const dublu = m => { m.side = THREE.DoubleSide; return m; };

  // ---------------------------------------------------------------- geometriile, în reperul vertical (y din 2D, d = adâncimea de la față)
  const geoCutie = (x0, x1, y0, y1, d0, d1) => {
    const g = new THREE.BoxGeometry(Math.max(.02, x1 - x0), Math.max(.02, y1 - y0), Math.max(.02, d1 - d0));
    g.translate((x0 + x1) / 2, -(y0 + y1) / 2, F - (d0 + d1) / 2);
    return g;
  };
  const geoPrisma = (pts, d0, d1) => {
    const sh = new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x, -y)));
    const g = new THREE.ExtrudeGeometry(sh, { depth: Math.max(.02, d1 - d0), bevelEnabled: false, curveSegments: 4 });
    g.translate(0, 0, F - d1);
    return g;
  };
  // conturul piesei pe fața tăieturii, ca linia din desenul 2D
  const matContur = () => reg(new THREE.LineBasicMaterial({ color: '#2f2a25', transparent: true, opacity: .42 }));
  function conturFata(pts, eps = 0, dashed = false) {
    const g = new THREE.BufferGeometry().setFromPoints(pts.map(([x, y]) => new THREE.Vector3(x, -y, F + eps + .03)));
    geos.add(g);
    const m = dashed ? reg(new THREE.LineDashedMaterial({ color: '#77736c', dashSize: .9, gapSize: .6, transparent: true, opacity: .7 })) : matContur();
    const l = new THREE.LineLoop(g, m);
    if (dashed) l.computeLineDistances();
    l.userData.uv = false;
    return l;
  }
  const dreptunghiPts = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];

  // linia frântă cu colțurile rotunjite (pentru țevi și cabluri)
  function rotunjeste(pts, raza) {
    if (pts.length < 3 || !raza) return pts.map(p => p.slice());
    const out = [pts[0].slice()];
    for (let i = 1; i < pts.length - 1; i++) {
      const a = pts[i - 1], p = pts[i], b = pts[i + 1];
      const la = Math.hypot(a[0] - p[0], a[1] - p[1]), lb = Math.hypot(b[0] - p[0], b[1] - p[1]);
      const d = Math.min(raza, la / 2, lb / 2);
      if (d < 1e-3) { out.push(p.slice()); continue; }
      const pa = [p[0] + (a[0] - p[0]) / la * d, p[1] + (a[1] - p[1]) / la * d], pb = [p[0] + (b[0] - p[0]) / lb * d, p[1] + (b[1] - p[1]) / lb * d];
      for (let k = 0; k <= 6; k++) {
        const t = k / 6, u = 1 - t;
        out.push([u * u * pa[0] + 2 * u * t * p[0] + t * t * pb[0], u * u * pa[1] + 2 * u * t * p[1] + t * t * pb[1]]);
      }
    }
    out.push(pts[pts.length - 1].slice());
    return out.filter((p, i, a) => !i || Math.hypot(p[0] - a[i - 1][0], p[1] - a[i - 1][1]) > 1e-4);
  }
  // normalele (cu îmbinare în colț) ale unei linii frânte din plan
  function normale(P) {
    const n = P.length, dir = (a, b) => { const x = b[0] - a[0], y = b[1] - a[1], l = Math.hypot(x, y) || 1; return [x / l, y / l]; };
    return P.map((p, i) => {
      const t1 = i ? dir(P[i - 1], p) : dir(p, P[1]), t2 = i < n - 1 ? dir(p, P[i + 1]) : t1;
      let tx = t1[0] + t2[0], ty = t1[1] + t2[1];
      const l = Math.hypot(tx, ty) || 1; tx /= l; ty /= l;
      const c = Math.max(.35, t1[0] * tx + t1[1] * ty);
      return [-ty / c, tx / c];
    });
  }
  // o linie frântă îngroșată la grosimea t: profilele de tablă, foile
  function ingroasa(pts, t) {
    const N = normale(pts), st = pts.map((p, i) => [p[0] + N[i][0] * t / 2, p[1] + N[i][1] * t / 2]);
    const dr = pts.map((p, i) => [p[0] - N[i][0] * t / 2, p[1] - N[i][1] * t / 2]);
    return st.concat(dr.reverse());
  }
  // țeava sau cablul pe o linie din planul secțiunii, cu axa la adâncimea dc; cu dc < r/2, țeava e tăiată pe jumătate
  function geoTeava(puncte, r, dc, ri = 0, raza) {
    const P = rotunjeste(puncte, raza ?? r * 2.2), n = P.length, N = normale(P);
    const jum = dc < r * .5, seg = 20, th1 = jum ? Math.PI : Math.PI * 2, dcc = jum ? Math.min(0, dc) : dc;
    const pos = [], idx = [];
    const v = (x, y, d) => { pos.push(x, -y, F - d); return pos.length / 3 - 1; };
    const pe = (i, rad, j) => { const th = th1 * j / seg, c = Math.cos(th); return [P[i][0] + N[i][0] * rad * c, P[i][1] + N[i][1] * rad * c, dcc + rad * Math.sin(th)]; };
    const suprafata = rad => {
      const b = pos.length / 3;
      for (let i = 0; i < n; i++) for (let j = 0; j <= seg; j++) v(...pe(i, rad, j));
      for (let i = 0; i < n - 1; i++) for (let j = 0; j < seg; j++) { const a = b + i * (seg + 1) + j, c = a + seg + 1; idx.push(a, c, a + 1, a + 1, c, c + 1); }
    };
    const patrulater = (p1, p2, p3, p4) => { const a = v(...p1), b = v(...p2), c = v(...p3), d = v(...p4); idx.push(a, b, c, a, c, d); };
    suprafata(r);
    if (ri > 0) suprafata(ri);
    // capetele
    for (const i of [0, n - 1]) for (let j = 0; j < seg; j++) {
      if (ri > 0) patrulater(pe(i, r, j), pe(i, r, j + 1), pe(i, ri, j + 1), pe(i, ri, j));
      else { const c = v(P[i][0], P[i][1], dcc), a = v(...pe(i, r, j)), b = v(...pe(i, r, j + 1)); idx.push(c, a, b); }
    }
    // tăietura, pe fața secțiunii
    if (jum) for (let i = 0; i < n - 1; i++) {
      for (const j of [0, seg]) {
        if (ri > 0) patrulater(pe(i, r, j), pe(i + 1, r, j), pe(i + 1, ri, j), pe(i, ri, j));
      }
      if (!ri) patrulater(pe(i, r, 0), pe(i + 1, r, 0), pe(i + 1, r, seg), pe(i, r, seg));
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
    return g;
  }
  // țeavă pe adâncime (cercul din secțiune), plină sau goală, cu riduri la tubul gofrat
  function geoTeavaAdanc(x, y, r, ri, d0, d1, gofrat = false) {
    const len = Math.max(.05, d1 - d0), out = [];
    const ext = new THREE.CylinderGeometry(r, r, len, 24, gofrat ? Math.ceil(len / .25) : 1, ri > 0);
    if (gofrat) {
      const p = ext.attributes.position;
      for (let i = 0; i < p.count; i++) { const k = 1 - .07 * (1 + Math.sin(p.getY(i) * Math.PI * 2 / .5)) / 2; p.setX(i, p.getX(i) * k); p.setZ(i, p.getZ(i) * k); }
      ext.computeVertexNormals();
    }
    out.push(ext);
    if (ri > 0) {
      out.push(new THREE.CylinderGeometry(ri, ri, len, 24, 1, true));
      for (const h of [len / 2, -len / 2]) { const c = new THREE.RingGeometry(ri, r, 24); c.rotateX(h > 0 ? -Math.PI / 2 : Math.PI / 2); c.translate(0, h, 0); out.push(c); }
    }
    for (const g of out) { g.rotateX(Math.PI / 2); g.translate(x, -y, F - (d0 + d1) / 2); }
    return out;
  }
  // corpul „rotunjit” în plan: profilul din secțiune se strânge spre axa ax pe măsură ce intră în adâncime (vasul WC, lavoarul)
  function geoLoft(pts, ax, R, dc, p = 2.5, m = 16) {
    const n = pts.length, pos = [], idx = [];
    for (let k = 0; k <= m; k++) {
      const t = R * k / m, f = k === m ? 0 : Math.pow(1 - Math.pow(t / R, p), 1 / p);
      for (const [x, y] of pts) pos.push(ax + (x - ax) * f, -y, F - (dc + t));
    }
    for (let k = 0; k < m; k++) for (let i = 0; i < n; i++) { const a = k * n + i, b = k * n + (i + 1) % n; idx.push(a, a + n, b, b, a + n, b + n); }
    const tri = THREE.ShapeUtils.triangulateShape(pts.map(([x, y]) => new THREE.Vector2(x, -y)), []);
    const b0 = pos.length / 3;
    for (const [x, y] of pts) pos.push(x, -y, F - dc);
    for (const [a, b, c] of tri) idx.push(b0 + a, b0 + b, b0 + c);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
    return g;
  }
  // fața rocii: aceeași funcție ca fataRocii() din js/pasi.js la fața tăieturii, cu relief care variază pe adâncime
  function fataRocii(s, x, d) {
    const v = .35 + .3 * Math.sin(x * 1.7 + .9 * Math.sin(.23 * d)) + .25 * Math.sin(x * .6 + 1 + .8 * Math.sin(.17 * d)) + .12 * (Math.sin(.45 * d + 1.3 * x) - Math.sin(1.3 * x));
    return s.y1 - Math.max(0, Math.min(.9, v)) * s.amp / .9;
  }
  function geoRoca(s, d0, d1, plus = 0) {
    const nx = Math.max(8, Math.ceil((s.x1 - s.x0) / .25)), nd = Math.max(4, Math.ceil((d1 - d0) / .6));
    const sg = Math.sign(s.y1 - s.y0) || 1, ys = (x, d) => fataRocii(s, x, d) + plus * sg;
    const pos = [], idx = [];
    const v = (x, y, d) => { pos.push(x, -y, F - d); return pos.length / 3 - 1; };
    for (let k = 0; k <= nd; k++) for (let i = 0; i <= nx; i++) { const x = s.x0 + (s.x1 - s.x0) * i / nx, d = d0 + (d1 - d0) * k / nd; v(x, ys(x, d), d); }
    for (let k = 0; k < nd; k++) for (let i = 0; i < nx; i++) { const a = k * (nx + 1) + i, c = a + nx + 1; idx.push(a, c, a + 1, a + 1, c, c + 1); }
    const supr = new THREE.BufferGeometry();
    supr.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); supr.setIndex(idx); supr.computeVertexNormals();
    // capetele și spatele: plane, cu normalele lor
    const p2 = [], i2 = [];
    const w = (x, y, d) => { p2.push(x, -y, F - d); return p2.length / 3 - 1; };
    for (const d of [d0, d1]) {
      const pts = [[s.x0, s.y0], [s.x1, s.y0]];
      for (let i = nx; i >= 0; i--) { const x = s.x0 + (s.x1 - s.x0) * i / nx; pts.push([x, ys(x, d)]); }
      const tri = THREE.ShapeUtils.triangulateShape(pts.map(([x, y]) => new THREE.Vector2(x, -y)), []);
      const b = p2.length / 3;
      for (const [x, y] of pts) w(x, y, d);
      for (const [a, bb, c] of tri) i2.push(b + a, b + bb, b + c);
    }
    { const a = w(s.x0, s.y0, d0), b = w(s.x1, s.y0, d0), c = w(s.x1, s.y0, d1), d = w(s.x0, s.y0, d1); i2.push(a, b, c, a, c, d); }
    for (const x of [s.x0, s.x1]) for (let k = 0; k < nd; k++) {
      const da = d0 + (d1 - d0) * k / nd, db = d0 + (d1 - d0) * (k + 1) / nd;
      const a = w(x, s.y0, da), b = w(x, ys(x, da), da), c = w(x, ys(x, db), db), d = w(x, s.y0, db); i2.push(a, b, c, a, c, d);
    }
    const cap = new THREE.BufferGeometry();
    cap.setAttribute('position', new THREE.Float32BufferAttribute(p2, 3)); cap.setIndex(i2); cap.computeVertexNormals();
    return [supr, cap];
  }

  // ---------------------------------------------------------------- materialele unei forme: fețele și tăietura
  function perechi(s, implicit) {
    const u = s.umplere3d || s.umplere || implicit;
    let fata = M(u);
    let cap = fata;
    if (u === 'zid' || u === 'ciment') { cap = fata; fata = M(u === 'zid' ? 'tencuiala' : 'ciment-neted'); }
    else if (/^gips/.test(s.umplere || '') && /^gips/.test(u)) cap = M('gips-miez');
    else if (s.umplere === 'pal' && u !== 'pal') cap = M('pal');
    else if (u === 'faianta') cap = M('faianta-miez');
    return { u, fata, cap };
  }
  // pozițiile pe adâncime ale unei forme: [[d0, d1], ...]
  function adancimi(s, lung) {
    const z = +s.z3d || 0, r = s.repeta3d;
    if (!r) return [[z, Math.min(A, s.adanc3d ? z + +s.adanc3d : A)]];
    const L = +s.adanc3d || lung || 5, pas = +r.pas || 40, st = r.start ?? z;
    const n = r.n || Math.max(1, Math.floor((A - st - L) / pas + 1e-6) + 1);
    return Array.from({ length: n }, (_, i) => [st + i * pas, st + i * pas + L]);
  }

  // ---------------------------------------------------------------- piesele, pe tipuri
  const C = {};
  C.dreptunghi = (s, ctx) => {
    const x0 = s.x, x1 = s.x + s.w, y0 = s.y, y1 = s.y + s.h, u = s.umplere3d || s.umplere;
    if (s.tub3d) return teava3d(s, s.tub3d, ctx);
    if (s.cilindru3d) {
      const ax = s.cilindru3d === 'x', r = (ax ? s.h : s.w) / 2;
      return teava3d(s, { axa: ax ? [[x0, y0 + r], [x1, y0 + r]] : [[x0 + r, y0], [x0 + r, y1]], r }, ctx);
    }
    if (TRANSPARENTE.has(u)) return volumTransparent(s, dreptunghiPts(x0, y0, x1, y1), ctx);
    if (s.corp3d === 'ascuns') return [];
    if (s.rotund3d) return C.poligon(Object.assign({}, s, { puncte: dreptunghiPts(x0, y0, x1, y1) }), ctx);
    if (u === 'ac') return unitateAC(s, ctx);
    if (/^u-/.test(s.corp3d || '')) return canalU(s, ctx, s.corp3d.slice(2));
    if (s.corp3d === 'carcasa') return carcasa(s, ctx);
    const prof = s.repeta3d && (s.repeta3d.profil || (s.umplere === 'otel' ? 'C' : 'plin'));
    const out = [];
    for (const [d0, d1] of ctx.poz) {
      if (prof === 'C' || prof === 'U') { out.push(...profilTabla(s, prof, d0, d1)); continue; }
      // peste o formă de dinainte (ca în desenul 2D): piesa e mai mare cu eps pe toate laturile, ca fețele ei să o acopere
      const { fata, cap } = perechi(s), e = ctx.eps;
      out.push(mesh(geoCutie(x0 - e, x1 + e, y0 - e, y1 + e, d0 - (d0 === 0 ? e : 0), d1), [fata, fata, fata, fata, cap, cap]));
    }
    if (cuContur && ctx.poz[0][0] === 0 && prof !== 'C' && prof !== 'U') out.push(conturFata(dreptunghiPts(x0, y0, x1, y1), ctx.eps));
    return out;
  };
  // profilele de tablă repetate pe adâncime: „C” = montant (tălpile paralele cu plăcile, inima în spate), „U” = profil de tavan
  function profilTabla(s, prof, d0, d1, t = .1) {
    // retras cu 0,15 mm în zona lui, ca fețele să nu cadă peste fețele pieselor vecine (fără pâlpâire)
    const q = .015, x0 = s.x + q, x1 = s.x + s.w - q, y0 = s.y + q, y1 = s.y + s.h - q, lungX = s.w >= s.h, m = M(s.umplere3d || 'otel'), out = [];
    const B = (a0, a1, b0, b1, e0, e1) => out.push(mesh(geoCutie(a0, a1, b0, b1, e0, e1), m));
    if (prof === 'C') {
      if (lungX) { B(x0, x1, y0, y0 + t, d0, d1); B(x0, x1, y1 - t, y1, d0, d1); B(x0, x1, y0, y1, d1 - t, d1); }
      else { B(x0, x0 + t, y0, y1, d0, d1); B(x1 - t, x1, y0, y1, d0, d1); B(x0, x1, y0, y1, d1 - t, d1); }
    } else if (lungX) { B(x0, x1, y1 - t, y1, d0, d1); B(x0, x1, y0, y1, d0, d0 + t); B(x0, x1, y0, y1, d1 - t, d1); }
    else { B(x1 - t, x1, y0, y1, d0, d1); B(x0, x1, y0, y1, d0, d0 + t); B(x0, x1, y0, y1, d1 - t, d1); }
    return out;
  }
  // canal deschis pe o latură (profilele benzilor LED): „jos”, „sus”, „st”, „dr”
  function canalU(s, ctx, deschis, m) {
    const x0 = s.x, x1 = s.x + s.w, y0 = s.y, y1 = s.y + s.h, t = +s.grosime3d || Math.min(.12, s.w / 4, s.h / 4), out = [];
    m = m || M(s.umplere3d || s.umplere || 'alb');
    for (const [d0, d1] of ctx.poz) {
      const B = (a0, a1, b0, b1) => out.push(mesh(geoCutie(a0, a1, b0, b1, d0 - (d0 === 0 ? ctx.eps : 0), d1), m));
      if (deschis !== 'sus') B(x0, x1, y0, y0 + t);
      if (deschis !== 'jos') B(x0, x1, y1 - t, y1);
      if (deschis !== 'st') B(x0, x0 + t, y0, y1);
      if (deschis !== 'dr') B(x1 - t, x1, y0, y1);
    }
    return out;
  }
  // carcasa unui dulap tăiat: capacul, fundul, spatele și latura din capăt
  function carcasa(s, ctx) {
    const x0 = s.x, x1 = s.x + s.w, y0 = s.y, y1 = s.y + s.h, t = +s.grosime3d || 1.8, m = M(s.umplere3d || s.umplere || 'alb'), out = [];
    for (const [d0, d1] of ctx.poz) {
      const B = (a0, a1, b0, b1, e0, e1) => out.push(mesh(geoCutie(a0, a1, b0, b1, e0, e1), m));
      B(x0, x1, y0, y0 + t, d0, d1); B(x0, x1, y1 - t, y1, d0, d1); B(x0, x0 + t, y0, y1, d0, d1); B(x0, x1, y0, y1, d1 - t, d1);
    }
    if (cuContur) out.push(conturFata(dreptunghiPts(x0, y0, x1, y1), ctx.eps));
    return out;
  }
  function volumTransparent(s, pts, ctx) {
    const u = s.umplere3d || s.umplere, out = [];
    for (const [d0, d1] of ctx.poz) {
      const g = geoPrisma(pts, d0, d1);
      out.push(mesh(g, M(u), { umbra: false, ordine: 3 }));
      const eg = new THREE.EdgesGeometry(g, 20); geos.add(eg);
      const l = new THREE.LineSegments(eg, reg(new THREE.LineBasicMaterial({ color: u === 'zona' ? '#b42318' : '#1d4ed8', transparent: true, opacity: .55 })));
      l.userData.uv = false; out.push(l);
    }
    return out;
  }
  function unitateAC(s, ctx) {
    const x0 = s.x, x1 = s.x + s.w, y0 = s.y, y1 = s.y + s.h, out = [], gri = M('#4b4f55');
    for (const [d0, d1] of ctx.poz) {
      const r = Math.min(1.6, s.w / 4, s.h / 4), g = new RoundedBoxGeometry(s.w, s.h, d1 - d0 - .4, 3, r);
      g.translate((x0 + x1) / 2, -(y0 + y1) / 2, F - (d0 + d1) / 2);
      out.push(mesh(g, M('ac')));
      out.push(mesh(geoCutie(x0 + 1.2, x1 - 1.2, y0 - .15, y0 + .2, d0 + 1, d1 - 1), gri));
      out.push(mesh(geoCutie(x1 - .25, x1 + .05, y1 - 5, y1 - 1.2, d0 + 1, d1 - 1), gri));
    }
    if (cuContur) out.push(conturFata(dreptunghiPts(x0, y0, x1, y1), 0));
    return out;
  }
  // țeavă pe o axă din plan (câmpurile „tub3d” sau „cilindru3d”): goală, tăiată pe jumătate dacă axa e la față
  function teava3d(s, t, ctx) {
    // tăiată la față peste o formă de dinainte (coloana prin placă): tăietura iese cu eps în față, ca să se vadă
    const r = +t.r || 1, ri = t.plin ? 0 : r - (+t.perete || Math.max(.25, r * .12)), dc = +(t.z3d ?? s.z3d ?? 0) - (ctx ? ctx.eps : 0);
    const m = dublu(M(s.umplere3d || s.umplere || 'pvc'));
    return [mesh(geoTeava(t.axa, r, dc, ri, t.raza), m)];
  }

  C.structura = (s, ctx) => {
    const out = [];
    if (s.profile && s.profile.length) {
      // montanții, în secțiune: inima perpendiculară pe perete, tălpile spre dreapta (ca în FORME.structura din js/pasi.js)
      const m = M('otel');
      for (const p of s.profile) for (const [d0, d1] of ctx.poz) {
        const pts = [[p + 5, s.y + .3], [p, s.y + .3], [p, s.y + s.h - .1], [p + 5, s.y + s.h - .1]];
        out.push(mesh(geoPrisma(ingroasa(pts, .1), d0, d1), m));
      }
      return out;
    }
    if (s.repeta3d) {
      // montanți pe adâncime, lipiți de latura „parte” (implicit dreapta, spre placa de gips-carton)
      const lat = Math.min(s.w, +s.repeta3d.lat || 5), dr = (s.repeta3d.parte || 'dr') === 'dr';
      const f = { x: dr ? s.x + s.w - lat : s.x, y: s.y, w: lat, h: s.h };
      for (const [d0, d1] of adancimi(s, 5)) out.push(...profilTabla(f, 'C', d0, d1));
    }
    if (cuContur) out.push(conturFata(dreptunghiPts(s.x, s.y, s.x + s.w, s.y + s.h), 0, true));
    return out;
  };
  C.tub = (s, ctx) => {
    const out = [], m = dublu(M(s.umplere3d || 'tub-gofrat'));
    for (const [d0, d1] of ctx.poz) for (const g of geoTeavaAdanc(s.x, s.y, s.r, s.r * .72, d0, d1, true)) out.push(mesh(g, m, { uv: false }));
    return out;
  };
  C.cerc = (s, ctx) => {
    const out = [], m = dublu(M(s.umplere3d || s.umplere || 'pvc')), ri = s.r >= 1.2 ? s.r - Math.max(.25, s.r * .1) : 0;
    for (const [d0, d1] of ctx.poz) for (const g of geoTeavaAdanc(s.x, s.y, s.r, ri, d0, d1)) out.push(mesh(g, m, { uv: false }));
    return out;
  };
  C.profil = (s, ctx) => {
    // profilul de aluminiu al benzii, deschis spre rocă, cu difuzorul opal pe deschidere
    const out = canalU(s, ctx, 'st', M(s.umplere3d || 'inox'));
    for (const [d0, d1] of ctx.poz) out.push(mesh(geoCutie(s.x - .12, s.x + .12, s.y + .12, s.y + s.h - .12, d0, d1), M('opal'), { umbra: false }));
    return out;
  };
  C.roca = (s, ctx) => {
    const out = [], m = M(s.umplere3d || s.umplere || 'roca-final'), plus = (s.umplere3d || s.umplere) === 'roca-final' ? .06 : 0;
    for (const [d0, d1] of ctx.poz) for (const g of geoRoca(s, d0 - (d0 === 0 ? ctx.eps : 0), d1, plus)) out.push(mesh(g, m));
    if (cuContur && ctx.poz[0][0] === 0) {
      const pts = [[s.x0, s.y0], [s.x1, s.y0]];
      for (let x = s.x1; x >= s.x0 - .01; x -= .5) pts.push([x, fataRocii(s, x, 0) + plus]);
      out.push(conturFata(pts, ctx.eps));
    }
    return out;
  };
  C.poligon = (s, ctx) => {
    const pts = s.puncte3d || s.puncte, u = s.umplere3d || s.umplere || 'gips';
    if (s.tub3d) return teava3d(s, s.tub3d, ctx);
    if (TRANSPARENTE.has(u)) return volumTransparent(s, pts, ctx);
    if (s.corp3d === 'ascuns') return [];
    if (s.rotund3d) {
      const r = s.rotund3d, m = dublu(M(u));
      return [mesh(geoLoft(pts, +r.ax, +r.r, +s.z3d || 0, +r.p || 2.5), m)];
    }
    const out = [], { fata, cap } = perechi(s, 'gips');
    for (const [d0, d1] of ctx.poz) out.push(mesh(geoPrisma(pts, d0 - (d0 === 0 ? ctx.eps : 0), d1), [cap, fata]));
    if (cuContur && ctx.poz[0][0] === 0) out.push(conturFata(pts, ctx.eps));
    return out;
  };
  C.linie = (s, ctx) => {
    if (s.temporar) return laser(s, ctx);
    const cablu = s.stil === 'cablu', r = +s.r3d || (cablu ? .3 : 1);
    const m = dublu(M(s.umplere3d || (cablu ? 'cablu' : 'tub-gofrat')));
    return [mesh(geoTeava(s.puncte, r, +(s.z3d ?? r + .5), cablu ? 0 : r * .72), m, { uv: false })];
  };
  C.fir = (s, ctx) => {
    const c = s.culoare || '';
    if (s.corp3d === 'draperie') return draperie(s, ctx);
    if (s.corp3d === 'bara') {
      const r = +s.r3d || (s.gros || 2) / 6;
      return [mesh(geoTeava(s.puncte, r, +(s.z3d ?? r + .5)), dublu(M(s.umplere3d || 'inox')), { uv: false })];
    }
    if (CABLURI[c]) {
      const r = +s.r3d || (c.startsWith('v24') ? .15 : .3);
      return [mesh(geoTeava(s.puncte, r, +(s.z3d ?? r + .5), 0, r * 3), dublu(M(s.umplere3d || CABLURI[c])), { uv: false })];
    }
    if (TEVI[c] || c === 'scurgere') {
      const r = +s.r3d || TEVI[c] || (s.gros || 4) * .32;
      return [mesh(geoTeava(s.puncte, r, +(s.z3d ?? r + .3), r * .8), dublu(M(s.umplere3d || c)), { uv: false })];
    }
    // profil de tablă în secțiune (CD, UD): linia îngroșată, extrudată pe adâncime
    const out = [], m = M(s.umplere3d || 'otel'), pts = ingroasa(s.puncte, +s.grosime3d || .1);
    for (const [d0, d1] of ctx.poz) out.push(mesh(geoPrisma(pts, d0, d1), m));
    return out;
  };
  // reperul trasat (linia temporară): planul laserului, foarte transparent, și linia roșie pe fața tăieturii
  function laser(s, ctx) {
    const plan = reg(new THREE.MeshBasicMaterial({ color: '#ff3b2f', transparent: true, opacity: .06, depthWrite: false, side: THREE.DoubleSide }));
    const g = geoPrisma(ingroasa(s.puncte, .04), 0, A);
    return [mesh(g, plan, { umbra: false, ordine: 3, uv: false }), mesh(geoPrisma(ingroasa(s.puncte, .18), -.04, .2), M('laser'), { umbra: false, uv: false })];
  }
  // perdeaua și draperia: o foaie cu pliuri verticale, agățată de canalul șinei
  function draperie(s, ctx) {
    const P = s.puncte, xs = P.slice(2).map(p => p[0]), x0 = Math.min(...xs), x1 = Math.max(...xs);
    const xc = (x0 + x1) / 2, amp = (x1 - x0) / 2, yS = P[1][1], yJ = P[P.length - 1][1], per = +s.pliu3d || (amp > 1.1 ? 12 : 8);
    const [[d0, d1]] = ctx.poz, nd = Math.ceil((d1 - d0) / .5), pos = [], idx = [];
    for (let k = 0; k <= nd; k++) {
      const d = d0 + (d1 - d0) * k / nd, x = xc + amp * Math.sin(Math.PI * 2 * d / per);
      pos.push(x, -yS, F - d, x, -yJ, F - d);
    }
    for (let k = 0; k < nd; k++) { const a = 2 * k; idx.push(a, a + 1, a + 2, a + 2, a + 1, a + 3); }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
    const out = [mesh(g, M(s.umplere3d || 'voal'), { uv: false })];
    // cârligele, la fiecare pliu
    const mc = M('inox');
    for (let d = d0 + per / 4; d < d1; d += per) {
      const x = xc + amp * Math.sin(Math.PI * 2 * d / per);
      out.push(mesh(geoTeava([[P[0][0], P[0][1]], [x, yS]], .07, d, 0, 0), dublu(mc), { uv: false }));
    }
    return out;
  }
  C.lumina = (s, ctx) => {
    const pts = s.puncte, n = pts.length, out = [];
    // sursa: latura cea mai scurtă a poligonului (fața difuzorului); lumina pleacă spre centrul poligonului
    let ia = 0, lmin = Infinity;
    for (let i = 0; i < n; i++) { const a = pts[i], b = pts[(i + 1) % n], l = Math.hypot(b[0] - a[0], b[1] - a[1]); if (l < lmin) { lmin = l; ia = i; } }
    const pa = pts[ia], pb = pts[(ia + 1) % n], m = [(pa[0] + pb[0]) / 2, (pa[1] + pb[1]) / 2];
    const cx = pts.reduce((a, p) => a + p[0], 0) / n, cy = pts.reduce((a, p) => a + p[1], 0) / n;
    let nx = -(pb[1] - pa[1]), ny = pb[0] - pa[0];
    const ln = Math.hypot(nx, ny) || 1; nx /= ln; ny /= ln;
    if (nx * (cx - m[0]) + ny * (cy - m[1]) < 0) { nx = -nx; ny = -ny; }
    let dmax = 1;
    for (const p of pts) dmax = Math.max(dmax, Math.hypot(p[0] - m[0], p[1] - m[1]));
    const [[d0, d1]] = ctx.poz;
    // fasciculul: volum aditiv, care se stinge cu distanța de la sursă
    const g = geoPrisma(pts, d0, d1), p = g.attributes.position, col = new Float32Array(p.count * 4);
    for (let i = 0; i < p.count; i++) {
      const dd = Math.hypot(p.getX(i) - m[0], -p.getY(i) - m[1]) / dmax, a = .16 * Math.pow(Math.max(0, 1 - dd), 1.8);
      col.set([1, .78, .45, a], i * 4);
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 4));
    out.push(mesh(g, reg(new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })), { umbra: false, ordine: 4, uv: false }));
    // fața aprinsă a difuzorului
    const fat = [pa, pb, [pb[0] + nx * .08, pb[1] + ny * .08], [pa[0] + nx * .08, pa[1] + ny * .08]];
    out.push(mesh(geoPrisma(fat, d0, d1), M('led'), { umbra: false, uv: false }));
    if (cuLumini) {
      let unghi = .4;
      for (const q of pts) { const vx = q[0] - m[0], vy = q[1] - m[1], l = Math.hypot(vx, vy); if (l > .5) unghi = Math.max(unghi, Math.acos(Math.max(-1, Math.min(1, (vx * nx + vy * ny) / l)))); }
      const k = Math.max(2, Math.min(5, Math.round((d1 - d0) / 14)));
      for (let i = 0; i < k; i++) {
        const d = d0 + (d1 - d0) * (i + .5) / k;
        const l = new THREE.SpotLight('#ffc98a', LUMINA_LED, dmax * 4, Math.min(1.35, unghi * 1.15), .75, 1.6);
        l.position.set(m[0] + nx * .3, -(m[1] + ny * .3), F - d);
        l.target.position.set(m[0] + nx * 10, -(m[1] + ny * 10), F - d);
        l.userData.intensitate = LUMINA_LED;
        out.push(l);
      }
    }
    return out;
  };
  C.focar = (s, ctx) => {
    const x0 = s.x, x1 = s.x + s.w, y0 = s.y, y1 = s.y + s.h, p = Math.min(2, s.w / 10), out = [];
    const negru = M('focar'), int = M('focar-interior'), arz = M('arzator');
    for (const [d0, d1] of ctx.poz) {
      const B = (m, a0, a1, b0, b1, e0, e1) => out.push(mesh(geoCutie(a0, a1, b0, b1, e0, e1), m));
      B(negru, x0, x0 + p, y0, y1, d0, d1); B(negru, x0, x1, y0, y0 + p, d0, d1); B(negru, x0, x1, y1 - p, y1, d0, d1); B(negru, x0, x1, y0, y1, d1 - p, d1);
      B(int, x0 + p, x0 + p + .3, y0 + p, y1 - p, d0, d1 - p); B(int, x0 + p, x1, y0 + p, y0 + p + .3, d0, d1 - p);
      // rama de la fața măștii
      B(negru, x1 - .6, x1, y0, y0 + p + 2, d0, d1); B(negru, x1 - .6, x1, y1 - p - 2, y1, d0, d1);
      // arzătorul, cu fanta lui
      B(arz, x0 + s.w * .3, x0 + s.w * .8, y1 - p - 3.5, y1 - p, d0 + 2, d1 - 3);
      B(negru, x0 + s.w * .45, x0 + s.w * .65, y1 - p - 3.62, y1 - p - 3.4, d0 + 2.5, d1 - 3.5);
    }
    if (cuContur) out.push(conturFata(dreptunghiPts(x0, y0, x1, y1), 0));
    return out;
  };
  let texFlacara = null;
  C.flacara = (s, ctx) => {
    if (!texFlacara) {
      texFlacara = canvasTex(64, 128, (g, w, h) => {
        const gr = g.createLinearGradient(0, h, 0, 0);
        gr.addColorStop(0, 'rgba(255,110,20,1)'); gr.addColorStop(.45, 'rgba(255,170,60,.95)'); gr.addColorStop(1, 'rgba(255,225,140,0)');
        g.fillStyle = gr; g.beginPath(); g.moveTo(w * .12, h);
        g.bezierCurveTo(w * .05, h * .55, w * .42, h * .35, w * .5, 0); g.bezierCurveTo(w * .58, h * .35, w * .95, h * .55, w * .88, h); g.closePath(); g.fill();
      });
      texFlacara.wrapS = texFlacara.wrapT = THREE.ClampToEdgeWrapping;
    }
    const out = [], [[d0, d1]] = ctx.poz, jos = s.y + s.h;
    const mf = reg(new THREE.MeshBasicMaterial({ map: texFlacara.clone(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
    mf.map.needsUpdate = true; texs.add(mf.map);
    let k = 0;
    for (let d = d0 + 1.5; d < d1 - 1; d += 2.6, k++) for (const fx of [.36, .62]) {
      const h = s.h * (.55 + .45 * Math.abs(Math.sin(k * 1.9 + fx * 7))), w = s.w * .32, x = s.x + s.w * fx + Math.sin(k * 2.3) * .8;
      for (const rotY of [0, Math.PI / 2]) {
        const g = new THREE.PlaneGeometry(w, h); g.rotateY(rotY); g.translate(x, -(jos - h / 2), F - d);
        out.push(mesh(g, mf, { umbra: false, ordine: 4, uv: false }));
      }
    }
    if (cuLumini) {
      const l = new THREE.PointLight('#ff9a3c', LUMINA_FOC, 160, 1.6);
      l.position.set(s.x + s.w / 2, -(jos - s.h * .45), F - (d0 + d1) / 2);
      l.userData.intensitate = LUMINA_FOC;
      out.push(l);
    }
    return out;
  };
  C.simbol = (s, ctx) => {
    const x0 = s.x, x1 = s.x + s.w, y0 = s.y, y1 = s.y + s.h, out = [];
    const k = 24, tex = canvasTex(Math.max(16, Math.round(s.w * k)), Math.max(16, Math.round(s.h * k)), (g, w, h) => {
      g.fillStyle = s.umplere === 'negru' ? '#1f1f1f' : '#f7f7f5'; g.fillRect(0, 0, w, h);
      const rs = String(s.text || '').split('\n'), fs = Math.min(h / (rs.length * 1.5), w / Math.max(...rs.map(r => r.length)) * 1.6);
      g.fillStyle = s.umplere === 'negru' ? '#fff' : '#1f2937'; g.font = `600 ${fs}px system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
      rs.forEach((r, i) => g.fillText(r, w / 2, h / 2 + (i - (rs.length - 1) / 2) * fs * 1.2));
    });
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    const fata = reg(new THREE.MeshStandardMaterial({ map: tex, roughness: .5 })), alb = M(s.umplere3d || s.umplere || 'alb');
    for (const [d0, d1] of ctx.poz) out.push(mesh(geoCutie(x0, x1, y0, y1, d0, d1), [alb, alb, alb, alb, fata, alb], { uv: false }));
    return out;
  };

  // ---------------------------------------------------------------- piesele, în ordinea din desen
  const UV = (geo) => {
    const p = geo.attributes.position, n = geo.attributes.normal, uv = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
      if (ax >= ay && ax >= az) uv.set([p.getZ(i), p.getY(i)], 2 * i);
      else if (ay >= az) uv.set([p.getX(i), p.getZ(i)], 2 * i);
      else uv.set([p.getX(i), p.getY(i)], 2 * i);
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  };
  // formele care se suprapun în 2D cu altele de dinainte ies cu câteva sutimi de mm în fața tăieturii, ca să se vadă peste ele
  const cutii2 = [];
  const cutie2 = s => {
    if (s.tip === 'roca') return [s.x0, Math.min(s.y0, s.y1), s.x1, Math.max(s.y0, s.y1)];
    if ('w' in s) return [s.x, s.y, s.x + s.w, s.y + s.h];
    if ('r' in s) return [s.x - s.r, s.y - s.r, s.x + s.r, s.y + s.r];
    const pts = s.puncte3d || s.puncte || [];
    if (!pts.length) return null;
    return [Math.min(...pts.map(p => p[0])), Math.min(...pts.map(p => p[1])), Math.max(...pts.map(p => p[0])), Math.max(...pts.map(p => p[1]))];
  };
  for (const s of det.schema ? [] : det.forme) {
    if (FARA_VOLUM.has(s.tip) || !C[s.tip]) continue;
    const b = cutie2(s);
    let rang = 0;
    if (b && !s.z3d) for (const c of cutii2) if (b[0] < c[2] - 1e-3 && c[0] < b[2] - 1e-3 && b[1] < c[3] - 1e-3 && c[1] < b[3] - 1e-3) rang++;
    if (b && !s.z3d && !TRANSPARENTE.has(s.umplere3d || s.umplere) && !['lumina', 'flacara', 'linie', 'fir'].includes(s.tip)) cutii2.push(b);
    const ctx = { eps: rang * .012, poz: adancimi(s) };
    const obiecte = C[s.tip](s, ctx) || [];
    const g = new THREE.Group(), box = new THREE.Box3();
    g.name = s.id;
    for (const o of obiecte) {
      if (o.isLight) { if (rot) { o.position.applyMatrix4(rot); o.target?.position.applyMatrix4(rot); } continue; }
      if (rot) o.geometry.applyMatrix4(rot);
      if (o.isMesh && o.userData.uv) UV(o.geometry);
      o.geometry.computeBoundingBox(); box.union(o.geometry.boundingBox);
    }
    if (box.isEmpty() && b) {
      // piesă fără corp vizibil (de exemplu cavitatea unui lavoar): o cutie invizibilă, pentru încadrare
      const geo = geoCutie(b[0], b[2], b[1], b[3], ctx.poz[0][0], ctx.poz[0][1]);
      if (rot) geo.applyMatrix4(rot);
      geo.computeBoundingBox(); box.union(geo.boundingBox);
      obiecte.push(mesh(geo, reg(new THREE.MeshBasicMaterial({ visible: false })), { umbra: false, uv: false }));
    }
    const c = box.isEmpty() ? new THREE.Vector3() : box.getCenter(new THREE.Vector3());
    for (const o of obiecte) {
      if (o.isLight) { o.position.sub(c); if (o.target) { o.target.position.sub(c); g.add(o.target); } }
      else o.geometry.translate(-c.x, -c.y, -c.z);
      g.add(o);
    }
    g.position.copy(c);
    g.userData = { id: s.id, tip: s.tip, anim: s.anim || ANIM[s.tip] || 'apare', temporar: !!s.temporar };
    grup.add(g);
    piese.set(s.id, g);
  }
  grup.updateMatrixWorld(true);
  const cutie = new THREE.Box3().setFromObject(grup);

  // ---------------------------------------------------------------- camera: încadrează dreptunghiul v, privit oblic
  // privire = [az, el], în grade: az spre dreapta desenului, el spre partea de sus a desenului (la secțiunea orizontală,
  // el < 0 înseamnă dinspre cameră, ca peretele să rămână sus pe ecran)
  function vedere(v, aspect = 1.5) {
    v = v || det.vedere;
    const [az, el] = privire.map(a => a * RAD), X = new THREE.Vector3(1, 0, 0);
    const sus = oriz ? new THREE.Vector3(0, 0, -1) : new THREE.Vector3(0, 1, 0);
    const dir = normala.clone().multiplyScalar(Math.cos(el)).addScaledVector(sus, Math.sin(el)).multiplyScalar(Math.cos(az)).addScaledVector(X, Math.sin(az)).normalize();
    const dv = Math.min(A, .45 * Math.max(v.x1 - v.x0, v.y1 - v.y0)), pts = [];
    for (const [x, y] of [[v.x0, v.y0], [v.x1, v.y0], [v.x0, v.y1], [v.x1, v.y1]]) pts.push(W(x, y, 0), W(x, y, dv));
    const t = pts.reduce((a, p) => a.add(p), new THREE.Vector3()).divideScalar(pts.length);
    const f = dir.clone().negate(), r = new THREE.Vector3().crossVectors(f, new THREE.Vector3(0, 1, 0)).normalize(), u = new THREE.Vector3().crossVectors(r, f);
    const tv = Math.tan(17.5 * RAD) / 1.06, th = tv * (aspect || 1.5);
    let D = 1;
    for (const p of pts) { const q = p.clone().sub(t), z = q.dot(dir); D = Math.max(D, z + Math.abs(q.dot(r)) / th, z + Math.abs(q.dot(u)) / tv); }
    return { pozitie: t.clone().addScaledVector(dir, D), tinta: t };
  }

  function elibereaza() {
    grup.traverse(o => { if (o.isLight && o.dispose) o.dispose(); });
    for (const g of geos) g.dispose();
    for (const m of mats) m.dispose();
    for (const t of texs) t.dispose();
    if (texFlacara) texFlacara.dispose();
    geos.clear(); mats.clear(); texs.clear();
    grup.removeFromParent(); grup.clear(); piese.clear();
  }

  return { grup, piese, punct, normala, cutie, vedere, elibereaza, adancime: A, plan: oriz ? 'orizontal' : 'vertical' };
}
