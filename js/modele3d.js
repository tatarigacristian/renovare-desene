/* Modelele 3D detaliate ale pieselor din camere, pentru js/vedere3d.js: televizorul, panoul de rocă, dulapurile și
   corpurile (fronturi, rosturi, mânere, rafturi deschise, vitrina), riflajele, oglinzile, WC-ul suspendat și clapeta,
   lavoarele și chiuveta (cuva văzută prin blat), bateriile, dușul (peretele de sticlă, rigola, capul de duș, para),
   electrocasnicele care se văd (cuptorul, plita, viziera hotei), centrala, șemineul, placarea lui, capacele cu lamele,
   pernele, patul, panourile tapițate, biroul și soclurile retrase.
   Folosire: modeleaza(e, { els, A, H }) → THREE.Group sau null (null = vedere3d.js desenează forma lui simplă).
   Coordonatele grupului sunt în cm, cu originea în colțul stânga-jos al elementului, pe fața pe care stă (fataLa din
   vedere3d.js, copiată aici): x de-a lungul peretelui, y în sus, z spre cameră. Piesele care stau ÎN elementul care
   dă fața (cuptorul în corp, cuva în blat, focarul în M11, capacele și clapele frontului) au z negativ.
   Formele vin din câmpurile elementului (lat, inalt, adanc, fronturi, finisaj, lamela, rost, decupaje) și din notă
   (sertare, mânere, rafturi, poziția bateriei, culoarea profilului); ce nu spun datele e ales aici și scris în comentarii.
   Geometria unei piese se unește într-o singură plasă pe material, ca să rămână puține desenări pe telefon. */
import * as THREE from './vendor/three/three.module.min.js';
import { RoundedBoxGeometry } from './vendor/three/RoundedBoxGeometry.js';
import { materialPiesa } from './materiale3d.js';

const mat = n => materialPiesa(n);
const fin = f => materialPiesa('f:' + (f || 'lemn'));
const FR = 1.8;   // grosimea fronturilor și a plăcilor de PAL (18 mm)
const ROST = .3;  // rostul dintre fronturi (3 mm)

// adâncimea implicită pe tip, ca în js/vedere3d.js (ADANC)
const ADANC = { plinta: 1.5, 'banda-led': 1, faianta: 1.2, masca: 10, mobilier: 2, corp: 40, dulap: 55, riflaj: 2, tv: 5,
  calorifer: 10, ac: 20, electrocasnic: 55, sanitar: 20, stalp: 20, grinda: 20, roca: 4, usa: 4, fereastra: 3, cutie: 6, tub: 2,
  teava: 3, birou: 60, 'birou-capat': 60, semineu: 30 };
const adancim = e => e.adanc != null ? e.adanc : (ADANC[e.tip] != null ? ADANC[e.tip] : 2);
const nr = s => parseFloat(String(s).replace(',', '.'));
const txt = e => e ? `${e.nume || ''} ${e.nota || ''}` : '';
const NUMERE = { un: 1, o: 1, două: 2, doua: 2, trei: 3, patru: 4, cinci: 5, șase: 6 };
const numar = s => NUMERE[String(s).toLowerCase()] || parseInt(s, 10) || 1;

// ---------------------------------------------------------------- unde stă elementul
const GAZDE_FATA = ['masca', 'mobilier', 'corp', 'dulap', 'riflaj', 'roca', 'birou'];
const cuprinde = (c, e) => {
  const x0 = e.lat ? e.x : e.x - .1, x1 = e.lat ? e.x + e.lat : e.x + .1, y0 = e.inalt ? e.h : e.h - .1, y1 = e.inalt ? e.h + e.inalt : e.h + .1;
  return c.x <= x0 + .01 && c.x + c.lat >= x1 - .01 && c.h <= y0 + .01 && c.h + c.inalt >= y1 - .01;
};
// Fața pe care stă elementul: aceeași regulă ca fataLa din js/vedere3d.js (care așază grupul la acest z).
function fataLa(e, els) {
  return gazdaFetei(e, els).z;
}
function gazdaFetei(e, els) {
  if (e.in) { const c = els.find(x => x.id === e.in); if (c && c.adanc) return { z: c.adanc, c }; }
  let z = 0, g = null;
  for (const c of els) {
    if (c === e || !c.lat || !c.inalt || !c.adanc || !GAZDE_FATA.includes(c.tip) || c.ascuns) continue;
    if (cuprinde(c, e) && c.adanc > z) { z = c.adanc; g = c; }
  }
  return { z, c: g };
}
const suprapune = (a, b, m = .2) => Math.min(a.x + a.lat, b.x + b.lat) - Math.max(a.x, b.x) > m && Math.min(a.h + a.inalt, b.h + b.inalt) - Math.max(a.h, b.h) > m;
// grosimea placărilor subțiri (riflaj, faianță) de pe aceeași față, peste care se montează piesa (WC-ul, clapeta, bateria)
function relief(e, els, z0) {
  let r = 0;
  for (const c of els) {
    if (c === e || !['riflaj', 'faianta'].includes(c.tip) || !c.lat || !c.inalt || c.ascuns || c.vedereaPrincipala) continue;
    const d = adancim(c);
    if (d < 6 && suprapune(c, e) && Math.abs(fataLa(c, els) - z0) < .3) r = Math.max(r, d);
  }
  return r;
}
// finisajul: câmpul „finisaj”; fără el, codul materialului scris în notă (H1775 Nuc Parona, U156 Bej nisip, P751, P722)
function finisaj(e) {
  if (e.finisaj && e.finisaj !== 'incastrat') return e.finisaj;
  const t = txt(e);
  if (/H1775|Nuc Parona/i.test(t)) return 'nuc';
  if (/U156|Bej nisip/i.test(t)) return 'bej';
  if (/P751/.test(t)) return 'p751';
  if (/P722/.test(t)) return 'p722';
  return null;
}
const metal = e => ['negru', 'antracit'].includes(e.finisaj) ? mat('negru-mat') : mat('crom');
// un decalaj al texturii pe piesă, ca fronturile vecine să nu aibă aceeași fibră
const decalaj = (...k) => { let s = 7; for (const v of k) s = (s * 31 + Math.round(v * 10)) % 9973; return [(s * 13) % 110, (s * 29) % 260]; };

// ---------------------------------------------------------------- piesa: geometriile unite pe material
function uvCm(g, o) {
  if (!g.attributes.normal) g.computeVertexNormals();
  const p = g.attributes.position, n = g.attributes.normal, uv = new Float32Array(p.count * 2);
  const du = o.uvOff ? o.uvOff[0] : 0, dv = o.uvOff ? o.uvOff[1] : 0, fx = o.fibra === 'x';
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i), ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
    let u, v;
    if (ax >= ay && ax >= az) { u = z; v = y; }
    else if (ay >= az) { u = fx ? z : x; v = fx ? x : z; }
    else { u = fx ? y : x; v = fx ? x : y; }
    uv[2 * i] = u + du; uv[2 * i + 1] = v + dv;
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}
function uneste(geos) {
  let nv = 0, ni = 0;
  for (const g of geos) { nv += g.attributes.position.count; ni += g.index ? g.index.count : g.attributes.position.count; }
  const P = new Float32Array(nv * 3), N = new Float32Array(nv * 3), U = new Float32Array(nv * 2), I = nv > 65535 ? new Uint32Array(ni) : new Uint16Array(ni);
  let ov = 0, oi = 0;
  for (const g of geos) {
    if (!g.attributes.normal) g.computeVertexNormals();
    const c = g.attributes.position.count;
    P.set(g.attributes.position.array, ov * 3); N.set(g.attributes.normal.array, ov * 3);
    if (g.attributes.uv) U.set(g.attributes.uv.array, ov * 2);
    if (g.index) { const a = g.index.array; for (let i = 0; i < a.length; i++) I[oi + i] = a[i] + ov; oi += a.length; }
    else { for (let i = 0; i < c; i++) I[oi + i] = ov + i; oi += c; }
    ov += c; g.dispose();
  }
  const m = new THREE.BufferGeometry();
  m.setAttribute('position', new THREE.BufferAttribute(P, 3));
  m.setAttribute('normal', new THREE.BufferAttribute(N, 3));
  m.setAttribute('uv', new THREE.BufferAttribute(U, 2));
  m.setIndex(new THREE.BufferAttribute(I, 1));
  m.computeBoundingBox(); m.computeBoundingSphere();
  return m;
}
class Piesa {
  constructor() { this.loturi = new Map(); this.extra = []; }
  lot(m, o) {
    const k = m.uuid + (o.faraUmbra ? ':u' : '') + (o.inchis ? ':i' : '') + (o.ordine ? ':' + o.ordine : '');
    let l = this.loturi.get(k);
    if (!l) this.loturi.set(k, l = { m, geos: [], faraUmbra: !!o.faraUmbra, inchis: !!o.inchis, ordine: o.ordine || 0 });
    return l;
  }
  geo(m, g, o = {}) { if (!o.uvPropriu) uvCm(g, o); this.lot(m, o).geos.push(g); return g; }
  cutie(m, x0, x1, y0, y1, z0, z1, o = {}) {
    const w = x1 - x0, h = y1 - y0, d = z1 - z0;
    if (!(w > .01 && h > .01 && d > .01)) return null;
    const r = o.r ? Math.min(o.r, w / 2.05, h / 2.05, d / 2.05) : 0;
    const g = r > .03 ? new RoundedBoxGeometry(w, h, d, 1, r) : new THREE.BoxGeometry(w, h, d);
    g.translate(x0 + w / 2, y0 + h / 2, z0 + d / 2);
    return this.geo(m, g, o);
  }
  // cilindru cu axa pe 'x', 'y' sau 'z'; (x, y, z) e centrul capătului de început (jos, stânga sau dinspre perete)
  cilindru(m, r, L, x, y, z, ax = 'y', o = {}) {
    if (!(L > .01)) return null;
    const g = new THREE.CylinderGeometry(o.r2 != null ? o.r2 : r, r, L, o.seg || 20, 1, !!o.deschis);
    if (ax === 'y') g.translate(x, y + L / 2, z);
    else if (ax === 'z') { g.rotateX(Math.PI / 2); g.translate(x, y, z + L / 2); }
    else { g.rotateZ(-Math.PI / 2); g.translate(x + L / 2, y, z); }
    return this.geo(m, g, Object.assign({ uvPropriu: true }, o));
  }
  tub(m, puncte, r, o = {}) {
    const c = new THREE.CatmullRomCurve3(puncte.map(p => new THREE.Vector3(...p)), false, 'centripetal');
    return this.geo(m, new THREE.TubeGeometry(c, o.seg || 32, r, o.radial || 10, false), Object.assign({ uvPropriu: true }, o));
  }
  plasa(x) { this.extra.push(x); return x; }
  grup() {
    const g = new THREE.Group();
    for (const l of this.loturi.values()) {
      if (!l.geos.length) continue;
      const m = new THREE.Mesh(uneste(l.geos), l.m);
      m.castShadow = !l.faraUmbra && !l.m.transparent; m.receiveShadow = true;
      if (l.faraUmbra) m.userData.faraUmbra = true;
      if (l.ordine) m.renderOrder = l.ordine;
      // piesele din interiorul altui element desenat plin (cuva din cutia blatului) ar sta toate în umbra lui: nu
      // primesc umbre, nici dacă cine așază modelul le cere
      if (l.inchis) Object.defineProperty(m, 'receiveShadow', { get: () => false, set: () => {} });
      g.add(m);
    }
    this.extra.forEach(x => g.add(x));
    return g;
  }
}

// normalele netezite ale unei geometrii fără index (ExtrudeGeometry le are pe fețe): media normalelor din același
// punct, doar între fețe cu unghi mai mic de ~65°, ca muchiile vii să rămână vii
function neteda(g) {
  const p = g.attributes.position, n = g.attributes.normal, grup = new Map(), out = new Float32Array(n.array.length);
  for (let i = 0; i < p.count; i++) {
    const k = `${Math.round(p.getX(i) * 500)},${Math.round(p.getY(i) * 500)},${Math.round(p.getZ(i) * 500)}`;
    (grup.get(k) || grup.set(k, []).get(k)).push(i);
  }
  for (const L of grup.values()) for (const i of L) {
    let x = 0, y = 0, z = 0;
    for (const j of L) if (n.getX(i) * n.getX(j) + n.getY(i) * n.getY(j) + n.getZ(i) * n.getZ(j) > .42) { x += n.getX(j); y += n.getY(j); z += n.getZ(j); }
    const l = Math.hypot(x, y, z) || 1; out[3 * i] = x / l; out[3 * i + 1] = y / l; out[3 * i + 2] = z / l;
  }
  g.setAttribute('normal', new THREE.BufferAttribute(out, 3));
}

// ---------------------------------------------------------------- dreptunghiuri și intervale
function dreptunghiuriFara(x0, x1, y0, y1, gauri) {
  let R = [[x0, x1, y0, y1]];
  for (const g of gauri) {
    const N = [];
    for (const [a, b, c, d] of R) {
      const gx0 = Math.max(a, g.x0), gx1 = Math.min(b, g.x1), gy0 = Math.max(c, g.y0), gy1 = Math.min(d, g.y1);
      if (gx1 <= gx0 || gy1 <= gy0) { N.push([a, b, c, d]); continue; }
      if (gy0 > c) N.push([a, b, c, gy0]);
      if (gy1 < d) N.push([a, b, gy1, d]);
      if (gx0 > a) N.push([a, gx0, gy0, gy1]);
      if (gx1 < b) N.push([gx1, b, gy0, gy1]);
    }
    R = N;
  }
  return R.filter(r => r[1] - r[0] > .05 && r[3] - r[2] > .05);
}
function scadeInterval(L, a, b) {
  const N = [];
  for (const [p, q] of L) {
    if (b <= p || a >= q) { N.push([p, q]); continue; }
    if (a > p) N.push([p, a]);
    if (b < q) N.push([b, q]);
  }
  return N.filter(([p, q]) => q - p > .2);
}
const relativ = (c, e) => ({ x0: c.x - e.x, x1: c.x - e.x + c.lat, y0: c.h - e.h, y1: c.h - e.h + c.inalt });

// ---------------------------------------------------------------- dulapuri și corpuri
// Rafturile scrise în notă, în cm de la baza elementului: „Polițe de 1,8 cm la ~0, 41, 81 …”, „rafturi la ~5–7, ~43–45
// și ~82–84 cm, capacul la 118–120”.
function polite(e) {
  const t = e.nota || '', R = [];
  const m = t.match(/(?:[Pp]olițe(?: de (\d+(?:,\d+)?) cm)?|[Rr]afturi) la ((?:~?\d+(?:,\d+)?(?:–~?\d+(?:,\d+)?)?(?:, | și )?)+)/);
  if (m) {
    const g = m[1] ? nr(m[1]) : FR;
    for (const x of m[2].matchAll(/~?(\d+(?:,\d+)?)(?:–~?(\d+(?:,\d+)?))?/g)) {
      const a = nr(x[1]), b = x[2] ? nr(x[2]) : a + g;
      R.push([a - e.h, Math.max(b, a + 1) - e.h]);
    }
  }
  const c = t.match(/[Cc]apac(?:ul)? la (\d+(?:,\d+)?)–(\d+(?:,\d+)?)/);
  if (c) R.push([nr(c[1]) - e.h, nr(c[2]) - e.h]);
  return R.filter(([a, b]) => b > -.5 && a < e.inalt + .5).map(([a, b]) => [Math.max(0, a), Math.min(e.inalt, b)]);
}
// compartiment deschis: spatele, lateralele cerute, jos, sus și rafturile (în cm de la y0)
function compartiment(P, M, a, b, y0, y1, D, rafturi, o = {}) {
  const sp = .8, H = y1 - y0;
  P.cutie(M, a, b, y0, y1, 0, sp);
  if (o.st) P.cutie(M, a, a + FR, y0, y1, 0, D);
  if (o.dr) P.cutie(M, b - FR, b, y0, y1, 0, D);
  const ia = a + (o.st ? FR : 0), ib = b - (o.dr ? FR : 0);
  if (!rafturi.some(r => r[0] < 1)) P.cutie(M, ia, ib, y0, y0 + FR, sp, D, { fibra: 'x' });
  if (!rafturi.some(r => r[1] > H - 1)) P.cutie(M, ia, ib, y1 - FR, y1, sp, D, { fibra: 'x' });
  for (const [r0, r1] of rafturi) P.cutie(M, ia, ib, y0 + r0, y0 + Math.max(r1, r0 + 1.2), sp, D - .3, { fibra: 'x' });
}
const rafturiEgale = (H, n) => Array.from({ length: n }, (_, i) => { const y = H * (i + 1) / (n + 1); return [y - FR / 2, y + FR / 2]; });

// tipul fiecărei coloane din notă: deschisă (nișă, rafturi deschise) sau dulap cu una sau două uși.
// Frazele cu lățimea în paranteză („nișă deschisă (~25)”) se potrivesc pe lățime; altfel, în ordine, de la stânga.
function tipColoane(e, col) {
  const t = e.nota || '', lemn = col.filter(c => c.tip !== 'lateral');
  if (lemn.length === 1 && /fără uși|deschisă spre cameră/i.test(t)) { lemn[0].deschis = true; return; }
  const fraze = t.split(/[;.]|,(?!\d)/).map(s => {
    const usa = /(?<!\p{L})(uș[ăaie]|uși|dulap)(?!\p{L})/iu.test(s.replace(/fără uși/gi, '')), deschis = !usa && /deschis|nișă|nișa|fără uși/i.test(s);
    if (!deschis && !usa) return null;
    const n = s.match(/\(~?(\d+(?:,\d+)?)\)/), r = s.match(/\((două|trei|patru|\d+) rafturi\)/);
    return { deschis, usi: /dulap cu două uși/i.test(s) ? 2 : 1, lat: n ? nr(n[1]) : null, rafturi: r ? numar(r[1]) : 0 };
  }).filter(Boolean);
  if (lemn.length < 2) return;
  const cuLat = fraze.filter(f => f.lat);
  const aplica = (c, f) => { c.deschis = f.deschis; c.usi = f.deschis ? 1 : f.usi; c.rafturi = f.rafturi; };
  if (cuLat.length) for (const f of cuLat) { const c = lemn.find(k => Math.abs((k.b - k.a) - f.lat) < 2); if (c) aplica(c, f); }
  else if (fraze.length === lemn.length) fraze.forEach((f, i) => aplica(lemn[i], f));
}
// mânerele scrise în notă: aplicat pe muchia de sus, pe muchia din stânga sau din dreapta la h dată, în pereche la mijloc
function manere(t) {
  const L = [];
  if (/[Mm]âner (?:aplicat )?la mijlocul muchiei de sus/.test(t)) { const m = t.match(/muchiei de sus \([^)]*?~(\d+) cm/); L.push({ tip: 'sus', L: m ? nr(m[1]) : 20 }); }
  for (const m of t.matchAll(/[Mm]âner(?:e)? pe muchia din (stânga|dreapta)(?:, la h ~?|\s*\(h ~?)(\d+(?:,\d+)?)–(\d+(?:,\d+)?)(?: și ~?(\d+(?:,\d+)?)–(\d+(?:,\d+)?))?/g)) {
    const y = [[nr(m[2]), nr(m[3])]]; if (m[4]) y.push([nr(m[4]), nr(m[5])]);
    L.push({ tip: m[1] === 'stânga' ? 'st' : 'dr', y });
  }
  const p = t.match(/[Uu]șa de (\d+(?:,\d+)?) are mâner vertical pe muchia din (stânga|dreapta)/);
  const q = t.match(/ușile de (\d+(?:,\d+)?) se deschid în pereche, cu mânerele la mijloc(?: \(~?(\d+(?:,\d+)?) × (\d+(?:,\d+)?))?/);
  const lung = q && q[3] ? nr(q[3]) : 120, lat = q && q[2] ? nr(q[2]) : 2.4;
  if (p) L.push({ tip: 'coloana', lat: nr(p[1]), latura: p[2] === 'stânga' ? 'st' : 'dr', L: lung, w: lat });
  if (q) L.push({ tip: 'pereche', lat: nr(q[1]), L: lung, w: lat });
  return L;
}
// mânerul aplicat: profil negru pe fața frontului, lipit de muchie
function maner(P, x0, x1, y0, y1, zf) {
  P.cutie(mat('metal-negru'), x0, x1, y0, y1, zf, zf + 1.5, { r: .3 });
}
// fronturile cu riflaj („două uși cu riflaj, ca M09-P”): lamela și rostul din elementul numit, altfel 1,1 / 1,1
function riflajRef(e, els) {
  const m = (e.nota || '').match(/ca (M[\w-]+)/), c = m && els.find(x => x.id === m[1] && x.tip === 'riflaj');
  return c ? { lam: c.lamela || 3, rost: c.rost != null ? c.rost : 2 } : { lam: 1.1, rost: 1.1 };
}
function frontPlin(P, M, x0, x1, y0, y1, z0, z1, o) {
  const uvOff = decalaj(x0, y0);
  if (o.J) {                       // mânerul frezat tip J: canalul de sus al frontului, retras
    const g = Math.min(2.2, (y1 - y0) / 4);
    P.cutie(M, x0, x1, y0, y1 - g, z0, z1, { uvOff });
    P.cutie(M, x0, x1, y1 - g, y1, z0, z0 + .6, { uvOff });
    return;
  }
  if (o.pull) {                    // mânerul pull-out: canal vertical pe muchia liberă (dreapta)
    const g = Math.min(1.6, (x1 - x0) / 8);
    P.cutie(M, x0, x1 - g, y0, y1, z0, z1, { uvOff });
    P.cutie(M, x1 - g, x1, y0, y1, z0, z0 + .6, { uvOff });
    return;
  }
  if (o.rif) {                     // frontul cu riflaj: placa și lamelele de pe ea
    const { lam, rost } = o.rif, w = x1 - x0, n = Math.max(1, Math.round((w + rost) / (lam + rost))), pas = n > 1 ? (w - lam) / (n - 1) : 0, c = 1;
    P.cutie(M, x0, x1, y0, y1, z0, z1 - c - .2, { uvOff });
    P.cutie(o.fund, x0 + .05, x1 - .05, y0 + .05, y1 - .05, z1 - c - .2, z1 - c, { faraUmbra: true });   // fundul canelurilor
    for (let i = 0; i < n; i++) P.cutie(M, x0 + i * pas, x0 + i * pas + lam, y0, y1, z1 - c, z1, { uvOff: decalaj(x0, i) });
    return;
  }
  P.cutie(M, x0, x1, y0, y1, z0, z1, { uvOff });
}
const fronturiMostenite = (e, els) => {
  const c = els.find(k => (k.tip === 'dulap' || k.tip === 'corp') && Math.abs(k.x - e.x) < 1 && Math.abs(k.lat - e.lat) < 1 && Math.abs(k.h + k.inalt - e.h) < 1 && k.fronturi);
  return c ? c.fronturi : null;
};

function corp(e, els) {
  const t = txt(e), W = e.lat, H = e.inalt, D = adancim(e), M = fin(finisaj(e)), P = new Piesa();
  if (/\(latura|capătul|în secțiune|văzut din lateral/i.test(e.nume || '')) return null;
  const zc = D - FR;
  const lista = e.fronturi && e.fronturi.length ? e.fronturi : (fronturiMostenite(e, els) || [{ lat: W }]);
  let x = 0;
  const col = lista.map(f => { const c = { a: x, b: x + f.lat, tip: f.tip || (f.lat <= 2.5 ? 'lateral' : 'lemn') }; x += f.lat; return c; });
  if (Math.abs(x - W) > .3) col.forEach(c => { c.a *= W / x; c.b *= W / x; });
  tipColoane(e, col);
  const goluri = els.filter(c => c !== e && c.tip === 'mobilier' && [].concat(c.inFata || []).includes(e.id) && /^Gol/i.test(c.nume || '')).map(c => relativ(c, e));
  const aparate = els.filter(c => c.tip === 'electrocasnic' && ['cuptor', 'microunde'].includes(c.aparat) && c.finisaj !== 'incastrat' && c.lat && c.inalt).map(c => relativ(c, e));
  const lung = /frontul cu 1 cm mai lung/i.test(t) ? 1 : 0;
  const J = /frezat tip J/i.test(t), pull = /pull-out/i.test(t);
  const retras = /retras/i.test(t) && t.match(/front de ~?(\d+(?:,\d+)?) × (\d+(?:,\d+)?)/);
  const rif = /uși cu riflaj|fronturi cu riflaj/i.test(t) ? riflajRef(e, els) : null;
  const sert = t.match(/(două|trei|patru|cinci|\d+) sertare \(~?(\d+(?:,\d+)?)/);
  const pic = t.match(/[Pp]e picioare de (\d+(?:,\d+)?) cm/);
  const MN = manere(t);
  const inchis = c => c && c.tip !== 'lateral' && !c.deschis && c.tip !== 'sticla';
  const fronturi = [];   // { x0, x1, y0, y1, col }
  col.forEach((c, i) => {
    if (c.tip === 'lateral') { P.cutie(M, c.a, c.b, 0, H, 0, D, { uvOff: decalaj(c.a, 1) }); return; }
    const st = !col[i - 1] || !inchis(col[i - 1]) && col[i - 1].tip !== 'lateral', dr = !col[i + 1] || !inchis(col[i + 1]) && col[i + 1].tip !== 'lateral';
    if (c.deschis) {
      compartiment(P, M, c.a, c.b, 0, H, D, c.rafturi ? rafturiEgale(H, c.rafturi) : polite(e), { st: !col[i - 1], dr: !col[i + 1] });
      return;
    }
    if (c.tip === 'sticla') {        // vitrina: rafturi în spate, rama neagră și sticla fumurie (rafturile la ~40 cm, alese aici)
      compartiment(P, M, c.a, c.b, 0, H, zc - .2, rafturiEgale(H, Math.max(1, Math.round(H / 40) - 1)), { st, dr });
      const r = 1.6, me = mat('metal-negru'), a = c.a + ROST / 2, b = c.b - ROST / 2;
      P.cutie(me, a, b, H - r - ROST / 2, H - ROST / 2, zc, D); P.cutie(me, a, b, ROST / 2, r + ROST / 2, zc, D);
      P.cutie(me, a, a + r, ROST / 2, H - ROST / 2, zc, D); P.cutie(me, b - r, b, ROST / 2, H - ROST / 2, zc, D);
      P.cutie(mat('sticla-fumurie'), a + r, b - r, r, H - r, zc + .5, zc + 1.1, { faraUmbra: true });
      return;
    }
    // corpul, fără golurile fără front (de exemplu golul robotului de sub M07); umbra din spatele rosturilor
    let blocuri = [[0, H]];
    for (const g of goluri) if (g.x0 < c.b - 1 && g.x1 > c.a + 1) blocuri = scadeInterval(blocuri, g.y0, g.y1);
    for (const [y0, y1] of blocuri) {
      P.cutie(M, c.a, c.b, y0, y1, 0, zc, { uvOff: decalaj(c.a, 2) });
      P.cutie(mat('rost'), c.a + .02, c.b - .02, y0 + .02, y1 - .02, zc, zc + .04, { faraUmbra: true });
    }
    if (retras) {                    // frontul retras în corp: rama corpului se vede în jurul lui
      const fw = Math.min(nr(retras[1]), c.b - c.a - 2), fh = Math.min(nr(retras[2]), H - 2);
      const a = c.a + (c.b - c.a - fw) / 2, b = a + fw, y0 = (H - fh) / 2, y1 = y0 + fh;
      for (const r of dreptunghiuriFara(c.a, c.b, 0, H, [{ x0: a, x1: b, y0, y1 }])) P.cutie(M, r[0], r[1], r[2], r[3], zc, D, { uvOff: decalaj(r[0], r[2]) });
      frontPlin(P, M, a + ROST / 2, b - ROST / 2, y0 + ROST / 2, y1 - ROST / 2, zc, D - .4, {});
      fronturi.push({ x0: a, x1: b, y0, y1, col: c, z: D - .4 });
      return;
    }
    // fronturile coloanei: fără golurile și fără aparatele încastrate vizibile (cuptorul), apoi sertarele din notă
    let bucati = [[0, H]];
    for (const g of goluri) if (g.x0 < c.b - 1 && g.x1 > c.a + 1) bucati = scadeInterval(bucati, g.y0, g.y1);
    for (const a of aparate) {
      const s = Math.min(c.b, a.x1) - Math.max(c.a, a.x0);
      if (s > (c.b - c.a) * .5 && a.y1 > 0 && a.y0 < H) bucati = scadeInterval(bucati, a.y0 - ROST / 2, a.y1 + ROST / 2);
    }
    if (sert && Math.abs(nr(sert[2]) - (c.b - c.a)) < 1.5) {
      const n = numar(sert[1]);
      bucati = bucati.flatMap(([p, q]) => Array.from({ length: n }, (_, k) => [p + (q - p) * k / n, p + (q - p) * (k + 1) / n]));
    }
    const xa = c.a + (col[i - 1] ? ROST / 2 : 0), xb = c.b - (col[i + 1] ? ROST / 2 : 0);   // la marginile corpului frontul e la fața lateralei
    const usi = c.usi || 1;
    for (const [p, q] of bucati) {
      const y0 = p + ROST / 2 - (p < .01 ? lung : 0), y1 = q - ROST / 2;
      for (let k = 0; k < usi; k++) {
        const a = usi > 1 ? xa + (xb - xa) * k / usi + (k ? ROST / 2 : 0) : xa, b = usi > 1 ? xa + (xb - xa) * (k + 1) / usi - (k < usi - 1 ? ROST / 2 : 0) : xb;
        frontPlin(P, M, a, b, y0, y1, zc, D, { J, pull, rif, fund: mat('fund:' + (finisaj(e) || 'lemn')) });
        fronturi.push({ x0: a, x1: b, y0, y1, col: c, z: D });
      }
    }
  });
  // mânerele aplicate
  for (const m of MN) {
    if (m.tip === 'sus') for (const f of fronturi) { const L = Math.min(m.L, f.x1 - f.x0 - 6), cx = (f.x0 + f.x1) / 2; maner(P, cx - L / 2, cx + L / 2, f.y1 - 2.2, f.y1, f.z); }
    if (m.tip === 'st' || m.tip === 'dr') for (const f of fronturi) {
      const yr = m.y.map(([a, b]) => [a - e.h, b - e.h]).find(([a, b]) => a >= f.y0 - 1 && b <= f.y1 + 1);
      if (!yr) continue;
      m.tip === 'st' ? maner(P, f.x0, f.x0 + 2.2, yr[0], yr[1], f.z) : maner(P, f.x1 - 2.2, f.x1, yr[0], yr[1], f.z);
    }
    if (m.tip === 'coloana') for (const f of fronturi) if (Math.abs(f.x1 - f.x0 - m.lat) < 1.5) {
      const L = Math.min(m.L, f.y1 - f.y0 - 10), cy = (f.y0 + f.y1) / 2;
      m.latura === 'st' ? maner(P, f.x0, f.x0 + m.w, cy - L / 2, cy + L / 2, f.z) : maner(P, f.x1 - m.w, f.x1, cy - L / 2, cy + L / 2, f.z);
    }
    if (m.tip === 'pereche') {
      const fs = fronturi.filter(f => Math.abs(f.x1 - f.x0 - m.lat) < 1.5).sort((a, b) => a.x0 - b.x0);
      for (let i = 0; i + 1 < fs.length; i += 2) {
        const L = Math.min(m.L, fs[i].y1 - fs[i].y0 - 10), cy = (Math.max(fs[i].y0, fs[i + 1].y0) + Math.min(fs[i].y1, fs[i + 1].y1)) / 2;
        maner(P, fs[i].x1 - m.w, fs[i].x1, cy - L / 2, cy + L / 2, fs[i].z);
        maner(P, fs[i + 1].x0, fs[i + 1].x0 + m.w, cy - L / 2, cy + L / 2, fs[i + 1].z);
      }
    }
  }
  // picioarele scrise în notă („pe picioare de 3 cm”): patru picioare negre, retrase de la colțuri
  if (pic) { const p = nr(pic[1]); for (const [a, b] of [[4, 4], [W - 7, 4], [4, D - 7], [W - 7, D - 7]]) P.cutie(mat('metal-negru'), a, a + 3, -p, 0, b, b + 3); }
  return P;
}

// ---------------------------------------------------------------- riflaje
// lamelele verticale, cu lățimea și rostul din date; se opresc la decupaje și în jurul clapetei sau bateriei de pe ele
function riflaj(e, els) {
  if (/capătul|secțiune/i.test(e.nume || '')) return null;
  const t = txt(e), W = e.lat, H = e.inalt, d0 = adancim(e), f = finisaj(e) || 'lemn', M = fin(f), P = new Piesa();
  const lam = e.lamela || 3, rost = e.rost != null ? e.rost : 2, orac = /ORAC/.test(t);
  // lamelele din rama unui capac („Capacul de sus cu lamele”) stau în planul ramei, cu z negativ
  const inRama = els.some(c => c !== e && c.tip === 'mobilier' && c.lat && /lamele/i.test(c.nume || '') && cuprinde(c, e));
  let zA = 0, zB = d0;
  if (inRama) { zA = -FR; zB = 0; }
  else if (d0 > 6) {               // cutia îmbrăcată în lamele: corpul în finisaj, fundul închis la culoare în spatele lamelelor
    zA = d0 - 2; P.cutie(M, 0, W, 0, H, 0, zA - .6); P.cutie(mat('fund:' + f), .1, W - .1, .1, H - .1, zA - .6, zA - .2, { faraUmbra: true });
  }
  const dec = (e.decupaje || []).map(k => ({ x0: k.x - e.x, x1: k.x - e.x + k.lat, sus: k.sus - e.h }));
  const gauri = els.filter(c => c.tip === 'sanitar' && ['clapeta', 'baterie'].includes(c.obiect) && c.lat && c.inalt && suprapune(c, e))
    .map(c => { const r = relativ(c, e); return { x0: r.x0 - .4, x1: r.x1 + .4, y0: r.y0 - .4, y1: r.y1 + .4 }; });
  if (orac) {                      // profilul ORAC: placa de 0,6 cm cu caneluri; nervurile din „lamela” și „rost”
    for (const r of dreptunghiuriFara(0, W, 0, H, gauri)) P.cutie(M, r[0], r[1], r[2], r[3], zA, zA + .6);
    zA += .6;
  } else if (!inRama && d0 <= 6 && !/calorifer/i.test(t)) P.cutie(mat('fund:' + f), 0, W, 0, H, 0, Math.min(.4, d0 / 3), { faraUmbra: true });
  const n = Math.max(1, Math.round((W + rost) / (lam + rost))), pas = n > 1 ? (W - lam) / (n - 1) : 0;
  for (let i = 0; i < n; i++) {
    const a = i * pas, b = a + lam;
    let sus = H;
    for (const k of dec) if (a < k.x1 && b > k.x0) sus = Math.min(sus, k.sus);
    let seg = [[0, sus]];
    for (const k of gauri) if (a < k.x1 && b > k.x0) seg = scadeInterval(seg, k.y0, k.y1);
    for (const [y0, y1] of seg) P.cutie(M, a, b, y0, y1, zA + (orac ? 0 : Math.min(.4, d0 / 3) * (inRama ? 0 : 1)), zB, { uvOff: decalaj(e.x + a, 3) });
  }
  if (/șipcă orizontală/i.test(t)) P.cutie(M, 0, W, H - lam, H, zB, zB + .8, { fibra: 'x' });   // șipca de sus (RF1 din bucătărie)
  return P;
}

// ---------------------------------------------------------------- mobilier (după nume)
function mobilier(e, els) {
  const n = e.nume || '';
  if (e.ascuns || /capătul|în secțiune|văzut din lateral|latura dinspre cameră|\(latura/i.test(n)) return null;
  if (e.finisaj === 'oglinda') return oglinda(e);
  if (/^Pern/i.test(n)) return perne(e, els);
  if (/^Patul/i.test(n)) return pat(e);
  if (/^Panoul tapițat/i.test(n)) return tapitat(e);
  if (/^Tăblia/i.test(n)) return tablie(e);
  if (/^Biroul/i.test(n) && e.h > 20) return birou(e);
  if (/^Blatul/i.test(n) && e.adanc) return blat(e);
  if (/^Capacul de sus cu lamele/i.test(n)) return capacLamele(e, els);
  if (/^Clapa/i.test(n)) return clapa(e, els);
  if (/^Ușa de sus/i.test(n)) return corp(e, els);
  if (/^Gol/i.test(n)) return gol(e, els);
  if (/rafturi(le)? deschise|[Cc]oloana deschisă|[Cc]ompartimentul deschis/i.test(n)) return deschis(e);
  if (els.some(c => c.tip === 'semineu' && c.in === e.id)) return placareSemineu(e, els);
  return null;
}
// oglinda: sticla de 5 mm cu muchia șlefuită și fața metalică; distanța până la perete (adanc − 0,5) e prinderea
function oglinda(e) {
  const W = e.lat, H = e.inalt, d = e.adanc != null ? Math.max(.5, e.adanc) : .6, P = new Piesa(), g = Math.min(.5, d), z0 = d - g;
  if (z0 > .3) P.cutie(mat('metal-negru'), 4, W - 4, 4, H - 4, 0, z0, { faraUmbra: true });
  P.cutie(mat('muchie-oglinda'), 0, W, 0, H, z0, d - .04);
  P.geo(mat('oglinda-piesa'), new THREE.PlaneGeometry(W - .06, H - .06).translate(W / 2, H / 2, d), { uvPropriu: true });
  return P;
}
// pernele: lățimile din frontul corpului de sub ele („fronturile urmează pernele”) sau din notă; bouclé alb
function perne(e, els) {
  const W = e.lat, H = e.inalt, D = adancim(e), P = new Piesa();
  const sub = els.find(c => c.tip === 'corp' && Math.abs(c.h + c.inalt - e.h) < 1 && Math.abs(c.x - e.x) < 1 && c.fronturi && c.fronturi.length > 1);
  let L = sub && Math.abs(sub.fronturi.reduce((s, f) => s + f.lat, 0) - W) < 1 ? sub.fronturi.map(f => f.lat) : null;
  const m = !L && (e.nota || '').match(/perne \(([\d,\s]+)\)/);
  if (m) { const v = m[1].split(/,\s+/).map(nr); if (Math.abs(v.reduce((s, x) => s + x, 0) - W) < 1) L = v; }
  L = L || [W];
  let x = 0;
  for (const w of L) { P.cutie(mat('boucle'), x + .3, x + w - .3, 0, H + .8, .6, D - .3, { r: Math.min(2.4, (H + .8) / 2.1) }); x += w; }
  return P;
}
// patul tapițat (se cumpără): baza, salteaua, pilota, pătura și două perne la capul dinspre peretele cu ușa (dreapta)
function pat(e) {
  const W = e.lat, H = e.inalt, D = adancim(e), P = new Piesa(), tx = mat('textil'), cs = mat('cearceaf');
  P.cutie(mat('rost'), 5, W - 5, 0, 6, 5, D - 5);
  P.cutie(tx, 0, W, 6, H - 13, 0, D, { r: 3 });
  P.cutie(cs, 1.5, W - 1.5, H - 13, H, 1.5, D - 1.5, { r: 4.5 });
  P.cutie(cs, .5, W - 42, H - 1.5, H + 2, .5, D + 1.5, { r: 1.6 });
  P.cutie(cs, .5, W - 42, H - 22, H + 2, D + .3, D + 2.3, { r: .9 });
  P.cutie(mat('patura'), W * .3, W * .52, H + 1.8, H + 3, .5, D + 2.6, { r: .5 });
  P.cutie(mat('patura'), W * .3, W * .52, H - 24, H + 3, D + 2.3, D + 3.4, { r: .5 });
  P.cutie(cs, W - 36, W - 6, H, H + 12, 6, D / 2 - 2, { r: 5 });
  P.cutie(cs, W - 36, W - 6, H, H + 12, D / 2 + 2, D - 6, { r: 5 });
  P.cutie(mat('textil'), W - 40, W - 26, H + 1, H + 11, 20, D - 20, { r: 4 });
  return P;
}
function tapitat(e) {
  const P = new Piesa();
  P.cutie(mat('textil'), 0, e.lat, 0, e.inalt, 0, adancim(e), { r: Math.min(2.2, adancim(e) / 2.1) });
  return P;
}
// tăblia încastrată: corpul, fața tapițată și polița de sus (h 75 = sus)
function tablie(e) {
  const W = e.lat, H = e.inalt, D = adancim(e), P = new Piesa(), M = fin(finisaj(e));
  P.cutie(mat('rost'), 1, W - 1, 0, 4, 0, D - 4);
  P.cutie(M, 0, W, 4, H - 2.5, 0, D - 5);
  P.cutie(mat('textil'), .5, W - .5, 4.5, H - 3, D - 5, D, { r: 2 });
  P.cutie(M, 0, W, H - 2.5, H, 0, D + .5, { fibra: 'x' });
  return P;
}
// biroul reglabil: blatul din date și cadrul negru cu două picioare telescopice până la pardoseală (nota: picioare negre)
function birou(e) {
  const W = e.lat, H = e.inalt, D = adancim(e), P = new Piesa(), me = mat('metal-negru'), y0 = -e.h;
  P.cutie(fin(finisaj(e)), 0, W, 0, H, 0, D, { r: .4, fibra: 'x' });
  for (const c of [12, W - 12]) {
    P.cutie(me, c - 3.5, c + 3.5, y0 + 3, -14, D / 2 - 2.5, D / 2 + 2.5, { r: .4 });
    P.cutie(me, c - 3, c + 3, -14, -2.5, D / 2 - 2, D / 2 + 2, { r: .4 });
    P.cutie(me, c - 3, c + 3, y0, y0 + 3, 4, D - 4, { r: .6 });
    P.cutie(me, c - 2.5, c + 2.5, -2.5, 0, 5, D - 5);
  }
  P.cutie(me, 12, W - 12, -5, -2.5, D / 2 - 1.5, D / 2 + 1.5);
  return P;
}
function blat(e) {
  const P = new Piesa(), f = finisaj(e) || 'blat';
  P.cutie(fin(f), 0, e.lat, 0, e.inalt, 0, adancim(e), { r: f === 'blat' ? .25 : 0, fibra: 'x' });
  return P;
}
// capacul de sus al compartimentului AC: rama din jurul lamelelor; singur (fără gazdă) are și lateralele, capacul de
// sus și interiorul negru („fundul compartimentului se vopsește negru”)
function capacLamele(e, els) {
  const W = e.lat, H = e.inalt, D = adancim(e), M = fin(finisaj(e) || 'nuc'), P = new Piesa(), z0 = fataLa(e, els);
  const lm = els.find(c => c.tip === 'riflaj' && c.lat && cuprinde(e, c));
  const gol = lm ? relativ(lm, e) : { x0: 2, x1: W - 2, y0: 1, y1: H - 1 };
  const [za, zb] = z0 > 0 ? [-FR, 0] : [D - FR, D];
  for (const r of dreptunghiuriFara(0, W, 0, H, [gol])) P.cutie(M, r[0], r[1], r[2], r[3], za, zb, { uvOff: decalaj(r[0], r[2]) });
  if (z0 <= 0 && e.adanc) {
    P.cutie(M, 0, FR, 0, H, 0, za); P.cutie(M, W - FR, W, 0, H, 0, za); P.cutie(M, FR, W - FR, H - FR, H, 0, za);
    P.cutie(mat('interior-negru'), FR, W - FR, 0, H - FR, 0, za - 3, { faraUmbra: true });
  }
  return P;
}
// clapa fantei AC: panou plin în planul frontului; singură are și lateralele compartimentului
function clapa(e, els) {
  const W = e.lat, H = e.inalt, D = adancim(e), M = fin(finisaj(e) || 'nuc'), P = new Piesa(), z0 = fataLa(e, els);
  const [za, zb] = z0 > 0 ? [-FR, 0] : [D - FR, D];
  P.cutie(M, 0, W, ROST / 2, H - ROST / 2, za, zb);
  if (z0 <= 0 && e.adanc) { P.cutie(M, 0, FR, 0, H, 0, za); P.cutie(M, W - FR, W, 0, H, 0, za); P.cutie(mat('interior-negru'), FR, W - FR, 0, H, 0, za - 3, { faraUmbra: true }); }
  return P;
}
// golul fără front de sub un dulap (robotul de aspirat): spatele, plafonul și lateralele, în culoarea din date
function gol(e, els) {
  const W = e.lat, H = e.inalt, D = adancim(e), M = fin(e.finisaj || 'alb'), P = new Piesa(), z0 = fataLa(e, els);
  const [za, zb] = z0 > 0 ? [-D + 1.8, 0] : [1.8, D];
  P.cutie(M, 0, W, 0, H, za, za + .8);
  P.cutie(M, 0, W, H - FR, H, za, zb - FR);
  P.cutie(M, -FR / 2, FR / 2, 0, H, za, zb); P.cutie(M, W - FR / 2, W + FR / 2, 0, H, za, zb);
  return P;
}
// rafturile deschise (fără front): lateralele, spatele, soclul retras din notă și rafturile la cotele din notă
function deschis(e) {
  const W = e.lat, H = e.inalt, D = adancim(e), M = fin(finisaj(e)), P = new Piesa(), t = e.nota || '';
  const s = t.match(/[Ss]oclu de ~?(\d+(?:,\d+)?) cm/), y0 = s ? nr(s[1]) : 0;
  if (y0) P.cutie(M, FR, W - FR, 0, y0, 0, D - 4);
  compartiment(P, M, 0, W, y0, H, D, polite(e).map(([a, b]) => [a - y0, b - y0]).filter(([a]) => a >= -.5), { st: true, dr: true });
  return P;
}
// placarea șemineului (M11): carcasa de PAL cu golul focarului în față și în latura deschisă a focarului; deasupra,
// compartimentul AC închis de capacul cu lamele și de clapă (elementele lor), cu interiorul negru
function placareSemineu(e, els) {
  const W = e.lat, H = e.inalt, D = adancim(e), M = fin(finisaj(e) || 'nuc'), P = new Piesa();
  const sem = els.find(c => c.tip === 'semineu' && c.in === e.id);
  const fete = els.filter(c => c !== e && c.tip === 'mobilier' && /^(Capacul|Clapa)/i.test(c.nume || '') && c.lat && cuprinde(e, c));
  const ySus = fete.length ? Math.min(...fete.map(c => c.h - e.h)) : H;
  const gs = sem ? relativ(sem, e) : null;
  for (const r of dreptunghiuriFara(0, W, 0, ySus, gs ? [gs] : [])) P.cutie(M, r[0], r[1], r[2], r[3], D - FR, D, { uvOff: decalaj(r[0], r[2]) });
  const golSt = gs && gs.x0 < .5 ? [{ x0: D - adancim(sem), x1: D, y0: gs.y0, y1: gs.y1 }] : [];
  const golDr = gs && gs.x1 > W - .5 ? [{ x0: D - adancim(sem), x1: D, y0: gs.y0, y1: gs.y1 }] : [];
  for (const r of dreptunghiuriFara(0, D - FR, 0, H, golSt)) P.cutie(M, 0, FR, r[2], r[3], r[0], r[1]);
  for (const r of dreptunghiuriFara(0, D - FR, 0, H, golDr)) P.cutie(M, W - FR, W, r[2], r[3], r[0], r[1]);
  P.cutie(M, FR, W - FR, H - FR, H, 0, D - FR, { fibra: 'x' });
  if (ySus < H - 1) {
    P.cutie(M, FR, W - FR, ySus - FR, ySus, 0, D - FR, { fibra: 'x' });
    P.cutie(mat('interior-negru'), FR, W - FR, ySus, H - FR, 0, D - FR - 4, { faraUmbra: true });
  }
  return P;
}

// ---------------------------------------------------------------- televizorul
// panoul subțire cu rama îngustă, ecranul negru lucios, carcasa din spate și suportul de perete; stă în fața
// riflajului sau a placării peste care trece (câți cm au acestea), altfel are adâncimea din date
function tv(e, els) {
  const W = e.lat, H = e.inalt, d = adancim(e), P = new Piesa(), z0 = fataLa(e, els);
  let zs = 0;
  for (const c of els) if (c !== e && ['riflaj', 'faianta', 'roca'].includes(c.tip) && c.lat && c.inalt && !c.ascuns && !c.vedereaPrincipala && adancim(c) < 8 && suprapune(c, e, 1)) zs = Math.max(zs, fataLa(c, els) + adancim(c) - z0);
  const fata = Math.max(d, zs + 3.6), zp = fata - 1.1, zh = fata - 2.6;
  const me = mat('metal-negru');
  P.cutie(me, W / 2 - 22, W / 2 + 22, H / 2 - 10, H / 2 + 10, 0, .4);
  for (const s of [-1, 1]) P.cutie(me, W / 2 + s * 16 - 1.5, W / 2 + s * 16 + 1.5, H * .28, H * .72, 0, zh);
  P.cutie(mat('spate-tv'), W * .07, W * .93, H * .1, H * .86, zh, zp + .1, { r: .8 });
  P.cutie(mat('rama-tv'), 0, W, 0, H, zp, fata, { r: .25 });
  const b = Math.min(1.1, Math.max(.6, W * .005)), bj = b + .5;
  P.geo(mat('ecran-tv'), new THREE.PlaneGeometry(W - 2 * b, H - b - bj).translate(W / 2, bj + (H - b - bj) / 2, fata + .02), { uvPropriu: true });
  P.cutie(mat('crom'), W / 2 - 2.5, W / 2 + 2.5, .2, .5, fata - .1, fata + .05, { faraUmbra: true });
  return P;
}

// ---------------------------------------------------------------- panoul de rocă
// Rocă manuală (D-06): relief sculptat de ~2,6 cm peste o bază, în straturi orizontale de 5–18 cm, despărțite de
// rosturi adânci și tăiate de rosturi verticale rare; fața straturilor e cioplită (zgomot cu creste). Culoarea e
// apropiată de a pereților (nota), cu tonuri diferite pe blocuri și mai închisă în rosturi.
function zgomot(seed) {
  const h = (i, j) => { let n = Math.imul(i, 374761393) ^ Math.imul(j, 668265263) ^ Math.imul(seed, 982451653); n = Math.imul(n ^ (n >>> 13), 1274126177); return ((n ^ (n >>> 16)) >>> 0) / 4294967295; };
  const s = t => t * t * (3 - 2 * t);
  const v = (x, y) => { const i = Math.floor(x), j = Math.floor(y), fx = s(x - i), fy = s(y - j), a = h(i, j), b = h(i + 1, j), c = h(i, j + 1), d = h(i + 1, j + 1); return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy; };
  const f = (x, y, o = 4) => { let t = 0, a = 1, k = 0; for (let i = 0; i < o; i++) { t += v(x * (1 << i) + i * 17.3, y * (1 << i) - i * 9.1) * a; k += a; a *= .5; } return t / k; };
  f.h = h;
  return f;
}
function roca(e, els) {
  const W = e.lat, H = e.inalt, d = adancim(e), P = new Piesa(), z0 = fataLa(e, els);
  // în nișa din mască, fața rocii e în spatele feței măștii: cota din notă („fața rocii e la ~8,75 cm de zidărie”) sau,
  // după D-06, cu 4,25 cm mai în spate (3 cm pentru profilul LED și 1,25 cm buza de gips-carton)
  const fz = (e.nota || '').match(/fața rocii e la ~?(\d+(?:,\d+)?) cm de zidărie/), nisa = els.some(c => c.tip === 'nisa' && c.lat && cuprinde(c, e));
  const zF = fz ? nr(fz[1]) - z0 : nisa && z0 > 4.25 + d ? -4.25 : d, zS = zF - d;
  let seed = 17; for (const ch of String(e.id)) seed = (seed * 31 + ch.charCodeAt(0)) | 0;
  const N = zgomot(seed);
  let k = 0; const rnd = () => N.h(k++, 7);
  const straturi = [];
  for (let y = 0; y < H;) {
    const h = Math.min(5 + rnd() * 13, H - y < 7 ? H - y : 99), bl = [];
    for (let x = -rnd() * 30; x < W;) { const w = 25 + rnd() * 45; bl.push({ x0: x, x1: x + w, dz: rnd(), ton: rnd(), panta: (rnd() - .5) * .9 }); x += w; }
    straturi.push({ y0: y, y1: y + h, bl }); y += h;
  }
  const zb = zS + Math.max(1, d - 2.6), amp = zF - zb;
  const nx = Math.max(8, Math.round(W / 1.5)), ny = Math.max(8, Math.round(H / 1.5));
  const creasta = (x, y) => 1 - Math.abs(2 * N(x, y, 3) - 1);
  const zLa = (x, y) => {
    const s = straturi.find(q => y <= q.y1 + 1e-6) || straturi[straturi.length - 1], b = s.bl.find(q => x <= q.x1 + 1e-6) || s.bl[s.bl.length - 1];
    const ty = (y - s.y0) / Math.max(1, s.y1 - s.y0);
    // fața blocului: înclinată puțin, cioplită, cu muchia de sus ieșită (straturile se văd ca trepte)
    let t = .42 + .3 * b.dz + .14 * (ty - .5) * b.panta * 2 + .3 * (creasta(x / 6, y / 4) - .5) + .18 * (N(x / 18, y / 10) - .5);
    const dy = Math.min(y - s.y0, s.y1 - y), dx = Math.min(x - b.x0, b.x1 - x);
    if (dy < 1.4) t -= .55 * Math.pow(1 - dy / 1.4, 1.6);
    if (dx < 1.1 && s.y1 - s.y0 > 4) t -= .4 * Math.pow(1 - dx / 1.1, 1.6);
    t = Math.min(1, Math.max(0, t));
    return { z: zb + amp * t, t, ton: b.ton, n: N(x / 3, y / 3, 2) };
  };
  const g = new THREE.PlaneGeometry(W, H, nx, ny); g.translate(W / 2, H / 2, 0);
  const p = g.attributes.position, col = new Float32Array(p.count * 3), baza = new THREE.Color('#d6cab9'), c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), q = zLa(x, y);
    p.setZ(i, q.z);
    c.copy(baza).multiplyScalar(.74 + q.ton * .16 + (q.n - .5) * .14 + q.t * .18);
    col.set([c.r, c.g, c.b], i * 3);
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.computeVertexNormals(); uvCm(g, {});
  // marginile: de la perete până la relief, pe cele patru laturi
  const pz = [], cz = [], un = (x0, y0, za, x1, y1, zb2) => { pz.push(x0, y0, zS, x1, y1, zS, x1, y1, zb2, x0, y0, zS, x1, y1, zb2, x0, y0, za); for (let j = 0; j < 6; j++) cz.push(baza.r * .8, baza.g * .8, baza.b * .8); };
  const latura = pts => { for (let i = 0; i + 1 < pts.length; i++) un(...pts[i], ...pts[i + 1]); };
  const L = (n, f) => Array.from({ length: n + 1 }, (_, i) => f(i / n));
  latura(L(nx, t => [W * (1 - t), 0, zLa(W * (1 - t), 0).z]));
  latura(L(nx, t => [W * t, H, zLa(W * t, H).z]));
  latura(L(ny, t => [0, H * t, zLa(0, H * t).z]));
  latura(L(ny, t => [W, H * (1 - t), zLa(W, H * (1 - t)).z]));
  const gm = new THREE.BufferGeometry(); gm.setAttribute('position', new THREE.Float32BufferAttribute(pz, 3)); gm.setAttribute('color', new THREE.Float32BufferAttribute(cz, 3)); gm.computeVertexNormals(); uvCm(gm, {});
  const adanc = zF < -.5;     // roca e în spatele feței măștii: se vede prin golul nișei
  for (const x of [g, gm]) { const m = new THREE.Mesh(x, mat('roca-relief')); m.castShadow = m.receiveShadow = true; if (adanc) m.renderOrder = -2; P.plasa(m); }
  if (adanc) {
    // Masca (desenată separat, plină) nu se poate tăia: pereții golului se desenează înaintea ei, iar o placă invizibilă
    // care scrie doar adâncimea (ca la cuve), puțin în fața măștii și a umbrei nișei din vedere3d.js, o ascunde în gol.
    const o = { ordine: -2 }, M = mat('#ebe7e0');
    P.cutie(M, -.6, 0, 0, H, zF, .3, o); P.cutie(M, W, W + .6, 0, H, zF, .3, o); P.cutie(M, 0, W, H, H + .6, zF, .3, o);
    // banda LED de pe latura nișei (din elementele „banda-led” ale nișei): o dungă luminoasă în spatele buzei
    for (const b of els.filter(c => c.tip === 'banda-led' && c.x != null && c.h < H + e.h && c.h + (c.inalt || 0) > e.h)) {
      const xb = b.x - e.x;
      if (xb >= W - .5 && xb <= W + 8) P.cutie(mat('led'), W, W + .25, 1, H - 1, zF + .4, zF + 1.4, { faraUmbra: true, ordine: -2 });
      else if (xb + (b.lat || 1) <= .5 && xb >= -8) P.cutie(mat('led'), -.25, 0, 1, H - 1, zF + .4, zF + 1.4, { faraUmbra: true, ordine: -2 });
    }
    P.cutie(mat('masca-gol'), 0, W, 0, H, .4, .45, { ordine: -1, faraUmbra: true, uvPropriu: true });
  }
  return P;
}

// ---------------------------------------------------------------- obiectele sanitare
function sanitar(e, els) {
  switch (e.obiect) {
    case 'wc': return wc(e, els);
    case 'clapeta': return clapeta(e, els);
    case 'lavoar': case 'chiuveta': return cuva(e, els);
    case 'baterie': return baterie(e, els);
    case 'dus': return peretDus(e);
    case 'para-dus': return e.inalt > e.lat * 1.5 ? paraMana(e, els) : capDus(e);
    case 'rigola': return rigola(e);
    case 'sifon': return sifon(e);
    case 'centrala': return centrala(e, els);
    case 'ventilator': return ventilator(e, els);
    case 'apometru': return usaVizitare(e, els);
    default: return null;
  }
}
// Vasul WC suspendat (NOVELA): conturul văzut de sus e plat la perete și rotunjit în față (superelipsă); corpul se
// îngustează spre jos și spre perete, ca la vasele suspendate. Capacul (închis) și colacul sunt în ultimii 3,2 cm.
// Proporțiile secțiunilor sunt alese aici; lățimea, înălțimea și adâncimea vin din date.
function conturWC(W, D, z0 = 0, n = 48) {
  const zc = D * .42, P = [];
  for (let i = 0; i < n; i++) {
    const t = i / n * Math.PI * 2, c = Math.cos(t), s = Math.sin(t), e = s >= 0 ? 2 / 2.3 : 2 / 4.5;
    P.push([W / 2 * Math.sign(c) * Math.pow(Math.abs(c), e), z0 + zc + (s >= 0 ? D - zc : zc) * Math.sign(s) * Math.pow(Math.abs(s), e)]);
  }
  return P;
}
function wc(e, els) {
  const W = e.lat, H = e.inalt, D = adancim(e), P = new Piesa(), z0 = fataLa(e, els), zr = relief(e, els, z0);
  const cer = e.finisaj === 'negru' ? mat('ceramica-neagra') : mat('ceramica'), cap = e.finisaj === 'negru' ? mat('capac-negru') : mat('ceramica');
  const Dv = D - zr, yv = H - 3.2, cx = W / 2;
  const NIV = [[0, .55, .6], [.04, .66, .72], [.12, .78, .83], [.25, .87, .9], [.42, .93, .95], [.6, .97, .98], [.78, .99, .995], [.92, 1, 1], [1, 1, 1]];
  const C = conturWC(W, Dv), n = C.length, pos = [], idx = [];
  for (const [ty, sx, sz] of NIV) for (const [x, z] of C) pos.push(cx + x * sx, ty * yv, zr + z * sz);
  for (let j = 0; j + 1 < NIV.length; j++) for (let i = 0; i < n; i++) {
    const a = j * n + i, b = j * n + (i + 1) % n, c = a + n, d = b + n;
    idx.push(a, c, b, b, c, d);
  }
  const jos = pos.length / 3; pos.push(cx, 0, zr + Dv * .3);
  for (let i = 0; i < n; i++) idx.push(jos, i, (i + 1) % n);
  const sus = pos.length / 3, u = (NIV.length - 1) * n; pos.push(cx, yv, zr + Dv * .45);
  for (let i = 0; i < n; i++) idx.push(sus, u + (i + 1) % n, u + i);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  P.geo(cer, g, { uvPropriu: true });
  // colacul și capacul: plăci extrudate pe contur, cu muchii rotunjite; între ele și vas, un rost închis
  const placa = (W2, D2, zz, y, gros, bev, m) => {
    const sh = new THREE.Shape(conturWC(W2, D2, zz, 64).map(([x, z]) => new THREE.Vector2(x, z)));
    const x = new THREE.ExtrudeGeometry(sh, { depth: gros, bevelEnabled: true, bevelThickness: bev, bevelSize: bev, bevelSegments: 2, curveSegments: 4 });
    x.rotateX(Math.PI / 2); x.translate(cx, y + gros + bev, zr); neteda(x);
    P.geo(m, x, { uvPropriu: true });
  };
  placa(W - 1.6, Dv - 2.4, .9, yv + .1, .5, .3, cap);              // colacul, puțin retras de la marginea vasului
  placa(W - 1.4, Dv - 6, 5.2, yv + 1.45, .75, .5, cap);           // capacul, de la balamale în față
  for (const s of [-1, 1]) P.cilindru(cap, .9, 2.6, cx + s * W * .27, yv + 2.2, zr + 2.2, 'x', { seg: 12 });
  return P;
}
// clapeta: placa cu două butoane (dublă acționare), în planul riflajului sau al placării din jur (nota WC: „fața
// clapetei e în planul riflajului”); în spate umple decupajul
function clapeta(e, els) {
  const W = e.lat, H = e.inalt, P = new Piesa(), z0 = fataLa(e, els), zr = relief(e, els, z0), M = metal(e);
  if (zr > .5) P.cutie(mat('rost'), .3, W - .3, .3, H - .3, 0, zr - .3, { faraUmbra: true });
  P.cutie(M, 0, W, 0, H, zr - .3, zr + .35, { r: .35 });
  const m = 1.1, xm = m + (W - 2 * m) * .42;
  P.cutie(M, m, xm - .15, m, H - m, zr + .35, zr + .55, { r: .15 });
  P.cutie(M, xm + .15, W - m, m, H - m, zr + .35, zr + .55, { r: .15 });
  return P;
}
// Golul din blat, prin stencil (ca nișa din vedere3d.js, care folosește referințele 1–250; golurile cuvelor iau
// 251–254). Blatul e desenat separat și nu se poate tăia, iar vedere3d.js îl poate ridica cu câteva zecimi de cm
// (despartePlanuri), așa că:
//   1. gura: planul golului, la GURA cm peste blat, scrie referința unde se vede (după tot restul scenei);
//   2. fundul: fețele din spate ale unei cutii care cuprinde cuva readuc adâncimea la fundul cuvei, doar în gură;
//   3. cuva se desenează apoi normal, tot doar în gură.
const GURA = .6;
let refGol = 250;
const matStencil = new Map();
function stencil(m, ref, rol) {
  const k = `${m.uuid}:${ref}:${rol}`;
  let s = matStencil.get(k);
  if (s) return s;
  s = rol === 'cuva' ? m.clone() : new THREE.MeshBasicMaterial({ colorWrite: false });
  Object.assign(s, { stencilWrite: true, stencilRef: ref, stencilFunc: THREE.EqualStencilFunc, stencilZPass: THREE.KeepStencilOp });
  if (rol === 'gura') Object.assign(s, { depthWrite: false, stencilFunc: THREE.AlwaysStencilFunc, stencilZPass: THREE.ReplaceStencilOp });
  if (rol === 'fund') Object.assign(s, { depthFunc: THREE.AlwaysDepth, side: THREE.BackSide });
  matStencil.set(k, s);
  return s;
}
// lavoarul sau chiuveta: cuva văzută prin golul din blat (stencil, mai sus). Poziția pe adâncime: decupajul din notă
// sau centrată pe blat, la ~8 cm de muchie.
function blatSub(e, els) {
  const top = e.h + e.inalt; let b = null;
  for (const c of els) {
    if (c === e || !c.lat || !c.inalt || !c.adanc || !['faianta', 'mobilier', 'corp'].includes(c.tip) || c.vedereaPrincipala) continue;
    const ct = c.h + c.inalt;
    if (ct < top - .5 || ct > top + 4 || c.x > e.x + .5 || c.x + c.lat < e.x + e.lat - .5) continue;
    if (!b || c.adanc > b.adanc) b = c;
  }
  return b;
}
function cuvaZ(e, els) {
  const d = e.adanc || 40, b = blatSub(e, els), m = `${txt(b)} ${txt(e)}`.match(/Decupajul lavoarului: (\d+(?:,\d+)?) cm pe adâncime, la (\d+(?:,\d+)?) cm de perete/);
  if (m) { const c = nr(m[2]) + nr(m[1]) / 2; return [c - d / 2, c + d / 2, b, [nr(m[2]), nr(m[2]) + nr(m[1])]]; }
  const D = b ? b.adanc : d + 16, f = Math.min(8, (D - d) / 2);
  return [D - f - d, D - f, b, null];
}
function cuva(e, els) {
  const W = e.lat, H = e.inalt, P = new Piesa(), z0 = fataLa(e, els), [cz0, cz1, b, dec] = cuvaZ(e, els);
  const yT = b ? b.h + b.inalt - e.h : H;                     // fața blatului, în coordonatele piesei
  // montată sub blat: scris ca atare („(sub blat)”, „montat sub blat”) sau cu fața de sus sub blat; „o descrie și pe
  // blat, și sub blat” (montaj neconfirmat) rămâne pe blat
  const sub = /\(sub blat\)|montat\w*\s+sub\s+blat/i.test(txt(e)) || (b && yT - H > 1);
  const chiuveta = e.obiect === 'chiuveta';
  const M = e.finisaj === 'antracit' ? mat('granit') : e.finisaj === 'negru' ? mat('ceramica-neagra') : e.finisaj ? fin(e.finisaj) : mat('ceramica');
  const za = cz0 - z0, zb = cz1 - z0;                          // cuva, pe adâncime, în coordonatele piesei
  // golul din blat: decupajul (sub blat), marginea cuvei (încastrată) sau cuva cu bordură peste blat (chiuveta)
  const ram = chiuveta ? 3.2 : sub ? 0 : 1;
  const g = sub ? { x0: 2, x1: W - 2, z0: dec ? dec[0] - z0 : za + 2, z1: dec ? dec[1] - z0 : zb - 2 } : { x0: ram, x1: W - ram, z0: za + (chiuveta ? .4 : ram), z1: zb - (chiuveta ? .4 : ram) };
  const yF = sub ? 0 : Math.max(0, yT - (H - 1));               // fundul cuvei: adâncimea interioară e inalt − 1
  // pereții și fundul cuvei (în blat, se văd doar prin gol). Pereții urcă până la gură, în planul feței interioare a
  // bordurii: muchia din spate a golului rămâne închisă la culoare și când blatul e ridicat, iar fața de sus a
  // pereților (peste care s-ar desena altfel, fiindcă fundul șterge adâncimea din gură) nu se mai vede prin gură
  const ref = refGol = refGol >= 254 ? 251 : refGol + 1;
  const S = m => stencil(m, ref, 'cuva'), ord = { ordine: 3, inchis: true }, Mi = S(e.finisaj === 'negru' ? mat('ceramica-neagra-cuva') : M);
  const ci = sub ? { x0: 0, x1: W, z0: za, z1: zb } : g;
  const yJ = sub ? 0 : yF, yS = sub ? H : yT + GURA;
  P.cutie(Mi, ci.x0, ci.x1, yJ, yJ + .8, ci.z0, ci.z1, ord);
  P.cutie(Mi, ci.x0 - .8, ci.x0, yJ, yS, ci.z0, ci.z1, ord); P.cutie(Mi, ci.x1, ci.x1 + .8, yJ, yS, ci.z0, ci.z1, ord);
  P.cutie(Mi, ci.x0 - .8, ci.x1 + .8, yJ, yS, ci.z0 - .8, ci.z0, ord); P.cutie(Mi, ci.x0 - .8, ci.x1 + .8, yJ, yS, ci.z1, ci.z1 + .8, ord);
  P.cilindru(S(mat('crom')), 2.2, .25, (ci.x0 + ci.x1) / 2, yJ + .8, chiuveta ? (ci.z0 + ci.z1) / 2 : ci.z0 + (ci.z1 - ci.z0) * .35, 'y', Object.assign({ seg: 24 }, ord));
  if (sub) {                                                   // marginea tăiată a blatului, între cuvă și fața lui
    const bm = S(fin(finisaj(b) || 'sand-moon')), y2 = yT + GURA;
    P.cutie(bm, g.x0 - .8, g.x1 + .8, H, y2, g.z0 - .8, g.z0, ord); P.cutie(bm, g.x0 - .8, g.x1 + .8, H, y2, g.z1, g.z1 + .8, ord);
    P.cutie(bm, g.x0 - .8, g.x0, H, y2, g.z0, g.z1, ord); P.cutie(bm, g.x1, g.x1 + .8, H, y2, g.z0, g.z1, ord);
  }
  // marginea vizibilă: bordura chiuvetei peste blat (cu loc pentru baterie în spate) sau rama subțire a lavoarului,
  // cu 0,5 cm peste blat (rămâne la vedere și când blatul e ridicat)
  if (chiuveta && !sub) {
    const r0 = za - 6.5, r1 = zb + 1.3;
    for (const r of dreptunghiuriFara(0, W, r0, r1, [{ x0: g.x0, x1: g.x1, y0: g.z0, y1: g.z1 }])) P.cutie(M, r[0], r[1], yT, yT + .8, r[2], r[3]);
  } else if (!sub) {
    for (const r of dreptunghiuriFara(0, W, za, zb, [{ x0: g.x0, x1: g.x1, y0: g.z0, y1: g.z1 }])) P.cutie(M, r[0], r[1], yT - .3, yT + .5, r[2], r[3]);
  }
  // gura (scrie referința) și fundul (readuce adâncimea); fără umbre, fiindcă nu se văd
  const fara = { faraUmbra: true, uvPropriu: true };
  const gura = new THREE.PlaneGeometry(g.x1 - g.x0, g.z1 - g.z0); gura.rotateX(-Math.PI / 2); gura.translate((g.x0 + g.x1) / 2, yT + GURA, (g.z0 + g.z1) / 2);
  P.geo(stencil(M, ref, 'gura'), gura, Object.assign({ ordine: 1 }, fara));
  P.cutie(stencil(M, ref, 'fund'), ci.x0 - 1, ci.x1 + 1, yJ - .5, yT + GURA + 1, Math.min(ci.z0, g.z0) - 1, Math.max(ci.z1, g.z1) + 1, Object.assign({ ordine: 2 }, fara));
  return P;
}
// bateriile: pe blat (pipa spre cuvă, cu robinete sau cu manetă), aparentă pe perete (dușul igienic) sau încastrată
function baterie(e, els) {
  const P = new Piesa(), M = metal(e), t = txt(e), z0 = fataLa(e, els);
  const cv = els.find(c => c.tip === 'sanitar' && ['lavoar', 'chiuveta'].includes(c.obiect) && Math.abs(c.h + c.inalt - e.h) < 3.5 && Math.abs(c.x + c.lat / 2 - (e.x + e.lat / 2)) < 70);
  if (cv) {
    const [cz0, cz1] = cuvaZ(cv, els), ccx = cv.x + cv.lat / 2 - e.x, ccz = (cz0 + cz1) / 2;
    const mz = t.match(/la ~?(\d+(?:,\d+)?) cm de perete(?!le)/);
    const wz = Math.max(mz ? nr(mz[1]) : cz0 - 3.6, z0 + 3.2);
    const ax = e.lat / 2, az = wz - z0, trei = /două robinete|trei găuri/i.test(t), H = e.inalt;
    let dx = ccx - ax, dz = ccz - wz; const L = Math.hypot(dx, dz) || 1; dx /= L; dz /= L;
    const reach = Math.min(L, 16), r = trei ? 1.05 : 1.25, yS = H - 1.5;
    P.cilindru(M, trei ? 2.4 : 2.8, .5, ax, 0, az, 'y', { seg: 24 });
    if (!trei) P.cilindru(M, 2.3, Math.min(9, H * .4), ax, .5, az, 'y', { seg: 24 });
    P.tub(M, [[ax, .4, az], [ax, yS - 5, az], [ax + dx * 1.6, yS - .6, az + dz * 1.6], [ax + dx * 4.8, yS, az + dz * 4.8], [ax + dx * (reach - 1.8), yS - 1.4, az + dz * (reach - 1.8)], [ax + dx * reach, yS - 5, az + dz * reach]], r, { seg: 40 });
    P.cilindru(M, r * 1.15, 1.2, ax + dx * reach, yS - 6.2, az + dz * reach, 'y', { seg: 16 });
    if (trei) for (const s of [-1, 1]) {
      const x = ax + s * (e.lat / 2 - 3);
      P.cilindru(M, 2.4, .5, x, 0, az, 'y', { seg: 20 }); P.cilindru(M, 1.6, 5, x, .5, az, 'y', { seg: 20 });
      P.cutie(M, x - .5, x + .5, 4.8, 5.8, az - .5, az + 5.5, { r: .3 });
    } else {
      const yb = .5 + Math.min(9, H * .4);
      P.cutie(M, ax - .6, ax + .6, yb - .6, yb + .6, az - 1.2, az + 6.5, { r: .4 });
    }
    return P;
  }
  const zr = relief(e, els, z0), W = e.lat, H = e.inalt;
  if (/igienic|aparent/i.test(t)) {
    // bateria aparentă: corpul orizontal, racordurile în S cu rozete pe perete, maneta sus și ieșirea furtunului jos
    const rac = els.filter(c => c.tip === 'racord' && c.x != null && c.x >= e.x - 2 && c.x <= e.x + W + 2 && Math.abs(c.h - (e.h + H / 2)) < H).map(c => [c.x - e.x, c.h - e.h]);
    const pr = rac.length >= 2 ? rac.slice(0, 2) : [[1.8, H / 2], [W - 1.8, H / 2]], yc = pr[0][1], zc = zr + 4.5;
    for (const [x, y] of pr) { P.cilindru(M, 2.8, .6, x, y, zr, 'z', { seg: 24 }); P.cilindru(M, .9, zc - zr - .5, x, y, zr + .5, 'z', { seg: 14 }); }
    P.cilindru(M, 2.2, W - 1, .5, yc, zc, 'x', { seg: 24 });
    P.cutie(M, W / 2 - .6, W / 2 + .6, yc + 2, yc + 3, zc - 1, zc + 4.5, { r: .35 });
    P.cilindru(M, 1, 2.5, W / 2, yc - 4.7, zc, 'y', { seg: 14 });
    return P;
  }
  // bateria încastrată: placa, termostatul sus, comutatorul jos și ieșirea pentru furtun
  P.cutie(M, 0, W, 0, H, zr, zr + .8, { r: .5 });
  P.cilindru(M, Math.min(2.8, W * .17), 3.8, W / 2, H * .68, zr + .8, 'z', { seg: 28 });
  P.cutie(M, W / 2 - .5, W / 2 + .5, H * .68 - .5, H * .68 + 3.2, zr + 4, zr + 5, { r: .3 });
  P.cilindru(M, Math.min(2.5, W * .15), 3.2, W / 2, H * .32, zr + .8, 'z', { seg: 28 });
  P.cilindru(M, 1, 2.2, W / 2, 3, zr + .8, 'z', { seg: 14 });
  return P;
}
// capul de duș (ploaie): placa pătrată din date, pe un braț din perete de ~38 cm (nota: „la ~40 cm de masca WC”)
function capDus(e) {
  const W = e.lat, H = e.inalt, D = adancim(e), P = new Piesa(), M = metal(e), s = Math.min(W, D), cz = 38, cx = W / 2, ya = H - 1.3;
  P.cilindru(M, 3.2, .7, cx, ya, 0, 'z', { seg: 28 });
  P.cilindru(M, 1, cz, cx, ya, .7, 'z', { seg: 16 });
  P.cilindru(M, 1, ya - .9, cx, .9, cz, 'y', { seg: 16 });
  P.cutie(M, cx - s / 2, cx + s / 2, 0, .9, cz - s / 2, cz + s / 2, { r: .4 });
  P.cutie(mat('rost'), cx - s / 2 + 1.5, cx + s / 2 - 1.5, -.02, .02, cz - s / 2 + 1.5, cz + s / 2 - 1.5, { faraUmbra: true });
  return P;
}
// para cu agățătoarea: suportul pe perete, para înclinată spre cameră și furtunul până la ieșirea bateriei de sub ea
function paraMana(e, els) {
  const W = e.lat, H = e.inalt, P = new Piesa(), M = metal(e), z0 = fataLa(e, els), zr = relief(e, els, z0), cx = W / 2;
  const ag = (e.nota || '').match(/[Aa]gățătoarea la (\d+(?:,\d+)?) cm/), ya = ag ? nr(ag[1]) - e.h : H * .2;
  P.cutie(M, cx - 1.6, cx + 1.6, ya - 1.5, ya + 2, zr, zr + 2.6, { r: .5 });
  P.tub(M, [[cx, 0, zr + 3.2], [cx, H * .55, zr + 3.4], [cx, H * .66, zr + 3.6]], 1.25, { seg: 10 });
  P.cilindru(M, W / 2, 2, cx, H * .66, zr + 3.6, 'y', { r2: W / 2, seg: 28 });
  P.cutie(mat('rost'), cx - W * .35, cx + W * .35, H * .66 + 2, H * .66 + 2.05, zr + 3.6 - W * .35, zr + 3.6 + W * .35, { faraUmbra: true });
  const bt = els.find(c => c.tip === 'sanitar' && c.obiect === 'baterie' && c.lat && Math.abs(c.x + c.lat / 2 - (e.x + cx)) < 15 && c.h < e.h);
  if (bt) {
    const bx = bt.x + bt.lat / 2 - e.x, by = bt.h + bt.inalt / 2 - 4.7 - e.h, bz = relief(bt, els, fataLa(bt, els)) + 4.5 + fataLa(bt, els) - z0, jos = Math.min(by - 14, -45);
    P.tub(M, [[cx, 0, zr + 3.2], [cx - .5, -12, zr + 5], [cx - 2.5, jos + 10, zr + 8], [(cx + bx) / 2 - 1, jos, zr + 9], [bx + 2.5, jos + 6, bz + 4], [bx + .5, by - 4, bz + 1], [bx, by, bz]], .7, { seg: 56, radial: 8 });
  }
  return P;
}
// peretele de sticlă walk-in: profilul de perete, rama îngustă pe celelalte laturi (negru mat, din numele produsului)
// și sticla clară de 8 mm
function peretDus(e) {
  const W = e.lat, H = e.inalt, D = adancim(e), P = new Piesa(), pr = /negru/i.test(txt(e)) || e.finisaj === 'negru' ? mat('metal-negru') : mat('crom');
  const cx = W / 2, r = 1.4;
  P.cutie(pr, cx - 1.1, cx + 1.1, 0, H, 0, 2.4);
  P.cutie(pr, cx - .7, cx + .7, H - r, H, 2.4, D); P.cutie(pr, cx - .7, cx + .7, 0, r, 2.4, D); P.cutie(pr, cx - .7, cx + .7, 0, H, D - r, D);
  P.cutie(mat('sticla-dus'), cx - .4, cx + .4, r, H - r, 2.4, D - r, { faraUmbra: true });
  return P;
}
// rigola: rama de inox, rostul închis și grătarul cu fante, la fața pardoselii
function rigola(e) {
  const W = e.lat, D = adancim(e), P = new Piesa(), M = e.finisaj === 'negru' ? mat('metal-negru') : mat('inox'), y = .2, f = .5;
  for (const r of dreptunghiuriFara(0, W, 0, D, [{ x0: f, x1: W - f, y0: f, y1: D - f }])) P.cutie(M, r[0], r[1], 0, y, r[2], r[3]);
  P.cutie(mat('rost'), f, W - f, 0, y - .08, f, D - f, { faraUmbra: true });
  P.cutie(mat('gratar'), f + .3, W - f - .3, 0, y - .03, f + .3, D - f - .3);
  return P;
}
// sifonul de pardoseală: grătar pătrat; distanța de perete din notă („la 26,8–36,8 cm de peretele …”)
function sifon(e) {
  const W = e.lat, D = adancim(e), P = new Piesa(), m = (e.nota || '').match(/la (\d+(?:,\d+)?)–(\d+(?:,\d+)?) cm de peretele/), z0 = m ? nr(m[1]) : 0;
  for (const r of dreptunghiuriFara(0, W, z0, z0 + D, [{ x0: .6, x1: W - .6, y0: z0 + .6, y1: z0 + D - .6 }])) P.cutie(mat('inox'), r[0], r[1], 0, .2, r[2], r[3]);
  P.cutie(mat('gratar'), .9, W - .9, 0, .17, z0 + .9, z0 + D - .9);
  return P;
}
// centrala murală: carcasa albă cu muchii rotunjite și panoul de comandă închis la culoare, jos
function centrala(e, els) {
  const W = e.lat, H = e.inalt, D = adancim(e), P = new Piesa(), z0 = fataLa(e, els), m = (e.nota || '').match(/~?(\d+(?:,\d+)?) cm până la ușă/);
  const zf = z0 > 0 ? -(m ? nr(m[1]) : 8) - FR : D, za = zf - D;      // în dulap: fața la distanța din notă de ușă
  P.cutie(mat('alb-lucios'), 0, W, 0, H, za, zf, { r: 2 });
  P.cutie(mat('cuptor-sticla'), W * .2, W * .8, H * .08, H * .2, zf - .1, zf + .2, { r: .4 });
  P.cutie(mat('display'), W * .45, W * .55, H * .12, H * .16, zf + .2, zf + .25, { faraUmbra: true });
  return P;
}
function ventilator(e, els) {
  const W = e.lat, H = e.inalt, P = new Piesa(), z0 = fataLa(e, els), zr = relief(e, els, z0), M = mat('alb-lucios');
  P.cutie(M, 0, W, 0, H, zr, zr + 1.2, { r: .6 });
  for (let i = 0; i < 5; i++) { const y = H * (.22 + i * .14); P.cutie(mat('rost'), W * .2, W * .8, y, y + H * .05, zr + 1.2, zr + 1.25, { faraUmbra: true }); }
  return P;
}
// ușa de vizitare: panou în finisajul placării în care stă, cu rostul de jur împrejur
function usaVizitare(e, els) {
  const W = e.lat, H = e.inalt, P = new Piesa();
  const g = els.find(c => c !== e && c.tip === 'mobilier' && c.lat && cuprinde(c, e)), d = g ? adancim(g) : 1.2;
  P.cutie(mat('rost'), 0, W, 0, H, d - .7, d - .6, { faraUmbra: true });
  P.cutie(fin(g ? finisaj(g) : 'alb'), .3, W - .3, .3, H - .3, d - .6, d + .1);
  return P;
}

// ---------------------------------------------------------------- electrocasnice
function electrocasnic(e, els) {
  if (e.aparat === 'cuptor' || e.aparat === 'microunde') return e.finisaj === 'incastrat' ? null : cuptor(e, els);
  if (e.aparat === 'plita') return plita(e, els);
  if (e.aparat === 'hota' && e.finisaj === 'incastrat') return viziera(e, els);
  return null;
}
// cuptorul încastrat: ușa de sticlă neagră cu fereastra, mânerul, panoul de comandă cu afișaj și butoane; în corp,
// fața e în planul fronturilor (z = 0)
function cuptor(e, els) {
  const W = e.lat, H = e.inalt, P = new Piesa(), z0 = fataLa(e, els), zf = z0 > 0 ? 0 : adancim(e);
  const negru = e.finisaj !== 'inox', cm = mat(negru ? 'negru-mat' : 'inox'), st = mat('cuptor-sticla'), mm = mat(negru ? 'metal-negru' : 'inox');
  const yp = H - Math.min(9.5, H * .17);
  P.cutie(cm, 1, W - 1, 1, H - 1, zf - 54, zf - FR);
  P.cutie(cm, 0, W, 0, H, zf - FR, zf - FR + .6);
  P.cutie(st, .3, W - .3, .3, yp - .2, zf - FR + .6, zf + .4, { r: .2 });
  P.geo(mat('cuptor-fereastra'), new THREE.PlaneGeometry(W - 14, Math.max(4, yp - 20)).translate(W / 2, (yp - .2) / 2 - 1.5, zf + .42), { uvPropriu: true });
  P.cutie(mm, 5, W - 5, yp - 5.6, yp - 3.6, zf + 2.2, zf + 3.4, { r: .5 });
  for (const x of [7, W - 8.5]) P.cutie(mm, x, x + 1.5, yp - 5.4, yp - 3.8, zf + .4, zf + 2.2);
  P.cutie(st, .3, W - .3, yp, H - .3, zf - FR + .6, zf + .2, { r: .2 });
  P.cutie(mat('display'), W / 2 - 4, W / 2 + 4, (yp + H) / 2 - .9, (yp + H) / 2 + .9, zf + .2, zf + .25, { faraUmbra: true });
  for (const x of [9, W - 9]) P.cilindru(mat('crom'), 1.7, 1.2, x, (yp + H) / 2, zf + .2, 'z', { seg: 20 });
  return P;
}
// plita cu inducție: sticla neagră cu zonele, puțin peste fața blatului în care e încastrată („in”)
function plita(e, els) {
  const W = e.lat, P = new Piesa(), z0 = fataLa(e, els), b = e.in ? els.find(c => c.id === e.in) : null;
  const Db = b ? adancim(b) : 60, pd = Math.min(52, Db - 8), zc = Db / 2 - z0, yT = b ? b.h + b.inalt - e.h : e.inalt;
  P.cutie(mat('negru-mat'), 2, W - 2, 0, yT, zc - pd / 2 + 2, zc + pd / 2 - 2);
  P.cutie(mat('plita'), 0, W, yT, yT + .45, zc - pd / 2, zc + pd / 2, { r: .2, uvPropriu: true });
  return P;
}
// hota telescopică încastrată: se vede doar viziera, sub corpul suspendat, ca o bandă de lemn mai închisă (nota)
function viziera(e, els) {
  const W = e.lat, P = new Piesa(), z0 = fataLa(e, els), g = gazdaFetei(e, els).c, zf = z0 > 0 ? 0 : (g ? adancim(g) : 35);
  P.cutie(mat('lemn-inchis'), .5, W - .5, -3.5, 0, zf - 30, zf - FR - .4, { fibra: 'x' });
  P.cutie(mat('inox'), 1.5, W - 1.5, -3.62, -3.5, zf - 28.5, zf - FR - 1.6, { faraUmbra: true });
  return P;
}

// ---------------------------------------------------------------- șemineul
// focarul bio DELTA: carcasa de oțel negru, rama din față, latura deschisă spre partea dată de notă (spre TV: marginea
// lipită de marginea măștii), arzătorul de inox și flacăra (planuri încrucișate, emisive, fără umbră)
function semineu(e, els) {
  const W = e.lat, H = e.inalt, D = adancim(e), P = new Piesa(), { z: z0, c: g } = gazdaFetei(e, els);
  const zA = z0 > 0 ? -D : 0, zB = zA + D, ot = mat('focar'), t = 1.2;
  const st = g ? Math.abs(e.x - g.x) < .5 : true, dr = g ? Math.abs(e.x + W - g.x - g.lat) < .5 && !st : false;
  P.cutie(ot, 0, W, 0, H, zA, zA + t);
  P.cutie(ot, 0, W, 0, 4, zA, zB); P.cutie(ot, 0, W, H - 3, H, zA, zB);
  if (!st) P.cutie(ot, 0, t, 0, H, zA, zB);
  if (!dr) P.cutie(ot, W - t, W, 0, H, zA, zB);
  P.cutie(ot, 0, W, H - 3, H, zB - .2, zB + .4); P.cutie(ot, 0, W, 0, 4, zB - .2, zB + .4);
  if (!st) P.cutie(ot, 0, 3, 0, H, zB - .2, zB + .4);
  if (!dr) P.cutie(ot, W - 3, W, 0, H, zB - .2, zB + .4);
  P.cutie(mat('focar-interior'), t, W - t, 4, H - 3, zA + t, zA + t + .3);
  const bx0 = W * .18, bx1 = W * .82, bz = (zA + zB) / 2 - 2;
  P.cutie(mat('inox'), bx0, bx1, 4, 6, bz - 5, bz + 5);
  P.cutie(mat('jar'), bx0 + 2, bx1 - 2, 6, 6.15, bz - 1, bz + 1, { faraUmbra: true });
  const fw = (bx1 - bx0) * .95, fh = Math.min(H - 12, 26);
  for (const [dz, rot] of [[0, 0], [-1.5, .45], [1.5, -.45]]) {
    const q = new THREE.PlaneGeometry(fw, fh); q.rotateY(rot); q.translate((bx0 + bx1) / 2, 6 + fh / 2, bz + dz);
    P.geo(mat('flacara'), q, { uvPropriu: true, faraUmbra: true });
  }
  return P;
}

// ---------------------------------------------------------------- soclurile
// soclul corpurilor: retras cu 5 cm față de fronturi, în finisajul corpului de deasupra
function soclu(e, els) {
  if (!/^Soclul/i.test(e.nume || '') || !e.adanc || e.vedereaPrincipala || /capătul/i.test(e.nume)) return null;
  const sus = els.find(c => (c.tip === 'corp' || c.tip === 'dulap') && Math.abs(c.h - (e.h + e.inalt)) < 1 && c.x < e.x + e.lat - 1 && c.x + c.lat > e.x + 1);
  const P = new Piesa();
  P.cutie(fin((sus && finisaj(sus)) || e.finisaj || 'negru'), 0, e.lat, 0, e.inalt, 0, e.adanc - 5);
  return P;
}

// ---------------------------------------------------------------- intrarea
// Întoarce grupul piesei sau null. Elementele ascunse și cele încastrate întorc null (rămâne conturul din
// vedere3d.js), în afară de cuvele din blat și de plita și viziera hotei, care se văd.
export function modeleaza(e, ctx = {}) {
  if (!e || e.punct || !(e.lat > 0) || !(e.inalt > 0) || e.vedereaPrincipala) return null;
  const els = ctx.els && ctx.els.length ? ctx.els : [e];
  const vazut = e.tip === 'sanitar' && ['lavoar', 'chiuveta'].includes(e.obiect) || e.tip === 'electrocasnic' && ['plita', 'hota'].includes(e.aparat);
  if (e.ascuns && !vazut) return null;
  let P = null;
  switch (e.tip) {
    case 'tv': P = tv(e, els); break;
    case 'roca': P = roca(e, els); break;
    case 'dulap': case 'corp': P = corp(e, els); break;
    case 'riflaj': P = riflaj(e, els); break;
    case 'mobilier': P = mobilier(e, els); break;
    case 'sanitar': P = sanitar(e, els); break;
    case 'electrocasnic': P = electrocasnic(e, els); break;
    case 'semineu': P = semineu(e, els); break;
    case 'plinta': P = soclu(e, els); break;
    default: P = null;
  }
  if (!P) return null;
  const g = P.grup();
  if (!g.children.length) return null;
  // Mobila cel puțin la fel de adâncă precum gazda care o cuprinde (M09-D pe masca MS1, M11 pe masca D03) nu stă pe
  // fața gazdei, ci pornește de la perete, ca în desenul 2D: modelul se mută înapoi cu z-ul feței (vedere3d.js îl
  // așază la fataLa). Capacele, clapele frontului și golurile fără front rămân în planul feței.
  // Fața ei rămâne în planul riflajului vecin de pe aceeași gazdă (M09-D deasupra riflajului M09-P) sau puțin în fața
  // gazdei, ca fețele să nu se suprapună.
  const { z: z0, c: gz } = gazdaFetei(e, els);
  if (z0 > 0 && gz && !e.in && ['corp', 'dulap', 'mobilier', 'riflaj'].includes(e.tip) && adancim(e) >= gz.adanc - .5 && !/^(Capacul|Clapa|Gol)/i.test(e.nume || '')) {
    const vecin = (c, m = .5) => Math.min(c.x + c.lat, e.x + e.lat) - Math.max(c.x, e.x) > -m && Math.min(c.h + c.inalt, e.h + e.inalt) - Math.max(c.h, e.h) > -m;
    let lip = .15;
    for (const c of els) if (c !== e && c.tip === 'riflaj' && c.lat && c.inalt && adancim(c) < 6 && vecin(c) && gazdaFetei(c, els).c === gz) lip = Math.max(lip, adancim(c));
    g.children.forEach(c => { c.position.z += lip - z0; });
  }
  g.name = 'model-' + e.id; g.userData.model = e.tip;
  return g;
}
