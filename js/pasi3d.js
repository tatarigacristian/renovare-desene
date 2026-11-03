/* Pașii de montaj în 3D: motorul ferestrei cu pași din js/pasi.js. Modul ES, încărcat de pasi.js doar când un detaliu
   are 3D (import la cerere, fără efecte la import). Unitățile sunt cm; y în sus.
   Scena vine din una din două surse, cu aceeași structură { grup, piese, punct, normala, cutie, vedere, elibereaza }:
   - „scena3d” din datele detaliului (formatul e în desene/README.md, „Pașii de montaj în 3D”), construită aici;
   - js/sectiune3d.js, pentru detaliile fără „scena3d” care nu sunt scheme: secțiunea 2D ridicată în 3D.
   Motorul face restul: randarea, luminile, umbrele, mediul, vizibilitatea pe pași (aceleași reguli ca în 2D),
   animațiile pieselor noi, conturul albastru, mișcările (capacul pe balamale, clapa pe glisiere, butonul apăsat),
   particulele de aer, benzile LED care se aprind, impulsul pe un fir, camera fiecărui pas și cotele și etichetele,
   puse în HTML peste desen și mutate la fiecare cadru. */
import * as THREE from './vendor/three/three.module.min.js';
import { OrbitControls } from './vendor/three/OrbitControls.js';
import { RoomEnvironment } from './vendor/three/RoomEnvironment.js';
import { RoundedBoxGeometry } from './vendor/three/RoundedBoxGeometry.js';
import { material } from './materiale3d.js';

const V3 = THREE.Vector3;
const NS = 'http://www.w3.org/2000/svg';
const rad = d => d * Math.PI / 180;
const ease = k => k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const TEMP = new Set(['cota', 'eticheta']);
// formele 2D fără volum: în 3D devin linii și texte peste desen, nu piese
const FARA_VOLUM = new Set(['cota', 'eticheta', 'text', 'ochi', 'contur', 'fir', 'linie']);
const DUR = { 'din-perete': 850, 'din-camera': 850, 'din-stanga': 850, 'din-dreapta': 1100, 'de-sus': 850, 'de-jos': 850, creste: 1300, pop: 850, lumina: 1500, deseneaza: 1200, apare: 850 };
// animația implicită: după primitiva din „scena3d” sau după forma 2D (aceleași ca în pasi.js)
const ANIM = { cutie: 'din-camera', prisma: 'din-camera', panou: 'apare', cilindru: 'pop', teava: 'deseneaza', led: 'lumina', aer: 'apare', grup: 'din-camera',
  structura: 'din-perete', dreptunghi: 'din-perete', poligon: 'din-perete', roca: 'creste', tub: 'pop', profil: 'din-camera', focar: 'din-dreapta',
  flacara: 'lumina', lumina: 'lumina', cerc: 'pop', simbol: 'pop' };
const FIRE = { faza: '#8b5a2b', nul: '#2563eb', pamant: '#65a30d', comanda: '#7c3aed', 'v24-plus': '#dc2626', 'v24-minus': '#111827',
  apa: '#2563eb', calda: '#dc2626', scurgere: '#78716c', gaz: '#ca8a04' };
const AER = { cald: '#ff5a2a', rece: '#2a8cff' };
// materialele pașilor care nu sunt în materiale3d.js (culorile din prototipul aprobat)
const MAT = {
  ac: { color: '#f3f3f1', roughness: .32 },
  acgrila: { color: '#4b4f55', roughness: .6 },
  bl: { color: '#8fb3cf', roughness: .7 },
  garnitura: { color: '#1b1b1b', roughness: .9 },
  panou: { color: '#dcd8cf', roughness: .8 },
  tub: { color: '#e5e7eb', roughness: .5 },
  fundal: { color: '#141210', roughness: 1 },
  ciment: { color: '#bdbab3', roughness: .95 },
  gips: { color: '#ece9e4', roughness: .9 },
  otel: { color: '#b8bcc2', metalness: .7, roughness: .4 },
  aluminiu: { color: '#c9ccd1', metalness: .8, roughness: .35 },
  cupru: { color: '#b87333', metalness: .85, roughness: .35 },
  plastic: { color: '#f2f2ef', roughness: .45 },
  filtru: { color: '#cfd6dc', roughness: .9 },
  'de-confirmat': { color: '#e0533d', roughness: .6, transparent: true, opacity: .6, emissive: '#7a1d10', emissiveIntensity: .5 },
  fantoma: { color: '#2563eb', roughness: 1, transparent: true, opacity: .12, depthWrite: false },
  'tub-transparent': { color: '#d6d3d1', roughness: .4, transparent: true, opacity: .42, depthWrite: false },
  wago: { color: '#f59e0b', roughness: .5 },
  schita: { color: '#2563eb', roughness: .8, transparent: true, opacity: .3, depthWrite: false, emissive: '#1d4ed8', emissiveIntensity: .35 },
  tencuiala: { color: '#efece6', roughness: .95, transparent: true, opacity: .55, depthWrite: false },
};
function mat(cheie, w = 50, h = 50) {
  if (cheie && cheie.startsWith('fir:')) return new THREE.MeshStandardMaterial({ color: FIRE[cheie.slice(4)] || cheie.slice(4), roughness: .5, envMapIntensity: .55 });
  if (cheie && MAT[cheie]) return new THREE.MeshStandardMaterial(Object.assign({ envMapIntensity: .55 }, MAT[cheie]));
  return material(cheie || 'alb', w, h);
}
const reducere = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

// numere pseudo-aleatoare, aceleași la fiecare deschidere
function aleator(s) { let x = s || 7; return () => (x = (x * 16807) % 2147483647) / 2147483647; }

// ---------------------------------------------------------------- traseele: linii drepte cu coturi rotunjite
class Bucata extends THREE.Curve {
  constructor(c, a, b) { super(); this.c = c; this.a = a; this.b = b; }
  getPoint(t, o = new V3()) { return this.c.getPointAt(this.a + (this.b - this.a) * t, o); }
}
function traseu(pts, cot) {
  const v = pts.map(p => new V3(...p)), c = new THREE.CurvePath();
  if (v.length === 2) { c.add(new THREE.LineCurve3(v[0], v[1])); return c; }
  let a = v[0].clone();
  for (let i = 1; i < v.length - 1; i++) {
    const p = v[i], d1 = p.clone().sub(v[i - 1]), d2 = v[i + 1].clone().sub(p);
    const r = Math.min(cot, d1.length() / 2, d2.length() / 2);
    const b = p.clone().addScaledVector(d1.normalize(), -r), e = p.clone().addScaledVector(d2.normalize(), r);
    if (a.distanceTo(b) > 1e-3) c.add(new THREE.LineCurve3(a.clone(), b));
    if (r > 1e-3) c.add(new THREE.QuadraticBezierCurve3(b, p.clone(), e));
    a = e;
  }
  c.add(new THREE.LineCurve3(a, v[v.length - 1]));
  return c;
}

// ---------------------------------------------------------------- primitivele din „scena3d” (coordonate de cameră)
function capete(p) {
  if (p.min && p.max) return [new V3(...p.min), new V3(...p.max)];
  const c = new V3(...p.poz), d = new V3(...p.dim).multiplyScalar(.5);
  return [c.clone().sub(d), c.clone().add(d)];
}
// fiecare primitivă dă o listă de obiecte, cu poziția în coordonatele camerei (centrul lor)
function primitiva(p, rnd) {
  const out = [], rep = p.repeta || { n: 1, pas: [0, 0, 0] }, pasR = new V3(...(rep.pas || [0, 0, 0]));
  const multiplica = (geo, mt, centru, rot) => {
    for (let i = 0; i < (rep.n || 1); i++) {
      const m = new THREE.Mesh(geo, mt);
      m.position.copy(centru).addScaledVector(pasR, i);
      if (rot) m.rotation.set(rad(rot[0] || 0), rad(rot[1] || 0), rad(rot[2] || 0));
      out.push(m);
    }
  };
  if (p.tip === 'cutie' || p.tip === 'led') {
    const [a, b] = capete(p), w = b.x - a.x, h = b.y - a.y, d = b.z - a.z;
    const geo = p.raza ? new RoundedBoxGeometry(w, h, d, 3, Math.min(p.raza, w / 2, h / 2, d / 2)) : new THREE.BoxGeometry(w, h, d);
    const mt = p.tip === 'led' ? new THREE.MeshStandardMaterial({ color: p.culoare || '#ffdca6', emissive: p.culoare || '#ffc070', emissiveIntensity: 3 }) : mat(p.mat, Math.max(w, d), h);
    multiplica(geo, mt, a.clone().add(b).multiplyScalar(.5), p.rot);
  } else if (p.tip === 'panou') {
    const [a, b] = capete(p), s = b.clone().sub(a), c = a.clone().add(b).multiplyScalar(.5);
    const ax = Math.abs(s.x) < 1e-6 ? 'x' : Math.abs(s.y) < 1e-6 ? 'y' : 'z';
    const geo = ax === 'z' ? new THREE.PlaneGeometry(s.x, s.y) : ax === 'x' ? new THREE.PlaneGeometry(s.z, s.y).rotateY(Math.PI / 2) : new THREE.PlaneGeometry(s.x, s.z).rotateX(-Math.PI / 2);
    const mt = mat(p.mat, Math.max(s.x, s.z), s.y || s.z); mt.side = THREE.DoubleSide;
    multiplica(geo, mt, c, p.rot);
  } else if (p.tip === 'prisma') {
    // poligonul e în planul „plan” (de exemplu „zy”: coordonatele sunt [z, y]), extrudat pe a treia axă, de la „de” la „la”
    const AX = { x: new V3(1, 0, 0), y: new V3(0, 1, 0), z: new V3(0, 0, 1) };
    const [cu, cv] = p.plan.split(''), cw = 'xyz'.replace(cu, '').replace(cv, '');
    const U = AX[cu], V = AX[cv], W = AX[cw].clone();
    let start = p.de;
    if (new THREE.Matrix4().makeBasis(U, V, W).determinant() < 0) { W.negate(); start = p.la; }
    const geo = new THREE.ExtrudeGeometry(new THREE.Shape(p.puncte.map(([u, v]) => new THREE.Vector2(u, v))), { depth: p.la - p.de, bevelEnabled: false });
    geo.applyMatrix4(new THREE.Matrix4().makeBasis(U, V, W).setPosition(AX[cw].clone().multiplyScalar(start)));
    geo.computeBoundingBox();
    const c = geo.boundingBox.getCenter(new V3()), sz = geo.boundingBox.getSize(new V3()), m = Math.max(sz.x, sz.y, sz.z) || 1;
    geo.translate(-c.x, -c.y, -c.z);
    const uv = geo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / m, uv.getY(i) / m);
    multiplica(geo, mat(p.mat, m, m), c, null);
  } else if (p.tip === 'cilindru') {
    const A = new V3(...p.a), B = new V3(...p.b), L = A.distanceTo(B);
    const m = new THREE.Mesh(new THREE.CylinderGeometry(p.r, p.r2 === undefined ? p.r : p.r2, L, 24), mat(p.mat, 2 * Math.PI * p.r, L));
    m.position.copy(A).lerp(B, .5);
    m.quaternion.setFromUnitVectors(new V3(0, 1, 0), B.clone().sub(A).normalize());
    out.push(m);
  } else if (p.tip === 'teava') {
    const c = traseu(p.traseu, p.cot === undefined ? p.r * 3 : p.cot), L = c.getLength(), mt = mat(p.mat, 10, L);
    const tub = cc => new THREE.TubeGeometry(cc, Math.max(4, Math.min(400, Math.ceil(cc.getLength() / 1.2))), p.r, 12, false);
    if (p.intrerupt) {
      // linia întreruptă: bucăți de 4 cm, cu 2,5 cm între ele
      for (let s = 0; s < L; s += 6.5) out.push(new THREE.Mesh(tub(new Bucata(c, s / L, Math.min(L, s + 4) / L)), mt));
    } else out.push(new THREE.Mesh(tub(c), mt));
    out.forEach(m => { m.geometry.computeBoundingBox(); const k = m.geometry.boundingBox.getCenter(new V3()); m.geometry.translate(-k.x, -k.y, -k.z); m.position.copy(k); });
    out.curba = c;
  } else if (p.tip === 'aer') {
    // particulele: fiecare urmează „drum”, deplasat cu un decalaj aleator în limitele „imprastiere”
    const n = p.n || 80, r = p.raza || .8;
    const im = new THREE.InstancedMesh(new THREE.SphereGeometry(r, 10, 8), new THREE.MeshBasicMaterial({ color: p.culoare || AER[p.fel] || AER.rece }), n);
    im.frustumCulled = false;
    const sp = p.imprastiere || [0, 0, 0], drum = p.drum.map(q => new V3(...q));
    im.userData.particule = Array.from({ length: n }, () => {
      const o = new V3((rnd() - .5) * sp[0], (rnd() - .5) * sp[1], (rnd() - .5) * sp[2]);
      const v = drum.map(q => q.clone().add(o)), L = [0];
      for (let i = 1; i < v.length; i++) L.push(L[i - 1] + v[i].distanceTo(v[i - 1]));
      return { v, L, T: L[L.length - 1], f: rnd() };
    });
    im.userData.viteza = p.viteza || 60;
    out.push(im);
  }
  return out;
}

// ---------------------------------------------------------------- sursa „scena3d”: aceeași structură ca js/sectiune3d.js
export function construiesteScena(det) {
  const S = det.scena3d, grup = new THREE.Group(), piese = new Map(), def = new Map(), orig = new Map(), rnd = aleator(11);
  for (const p of S.piese) def.set(p.id, p);
  // 1. fiecare piesă: un grup, cu originea în pivot sau în centrul ei; obiectele, relative la origine
  for (const p of S.piese) {
    const g = new THREE.Group(); g.name = p.id;
    const ob = p.tip === 'grup' ? [] : primitiva(p, rnd);
    let o = p.pivot ? new V3(...p.pivot) : null;
    if (!o && ob.length) { const b = new THREE.Box3(); ob.forEach(m => { m.updateMatrixWorld(true); b.expandByObject(m); }); o = b.getCenter(new V3()); }
    for (const m of ob) {
      m.position.sub(o || new V3());
      if (!m.isInstancedMesh) { m.castShadow = p.tip !== 'led' && p.tip !== 'panou' && !m.material.transparent && p.umbra !== false; m.receiveShadow = true; }
      if (m.isInstancedMesh) m.position.set(0, 0, 0);
      g.add(m);
    }
    if (p.tip === 'aer') o = new V3();
    g.userData = { id: p.id, tip: p.tip, anim: p.anim, temporar: !!p.temporar, tata: p.in || null, miscari: p.miscari || null, lipseste: p.lipseste || null,
      dupaMiscari: !!p.dupaMiscari, aprins: p.aprins === undefined ? 1 : p.aprins, contur: p.contur !== false, curba: ob.curba || null, curbaO: ob.curba ? o.clone() : null, sursa: p };
    if (p.tip === 'led' && p.lumina) {
      // luminile benzii: câteva lumini punctuale de-a lungul ei, sub ea
      const [a, b] = capete(p), L = p.lumina, n = L.n || 2, dir = new V3(...(L.spre || [0, -1, 0]));
      g.userData.lumini = [];
      for (let i = 0; i < n; i++) {
        const q = a.clone().lerp(b, (i + .5) / n).addScaledVector(dir, L.dist || 3).sub(o);
        // „spot”: lumină îndreptată pe direcția „spre”, cu atenuare („decay”), ca o bandă sub corpuri; altfel punctuală
        const cul = L.culoare || p.culoare || '#ffc070';
        const l = L.tip === 'spot' ? new THREE.SpotLight(cul, L.intensitate || 2, L.raza || 60, rad(L.unghi || 60), L.penumbra === undefined ? 1 : L.penumbra, L.decay === undefined ? 1 : L.decay)
          : new THREE.PointLight(cul, L.intensitate || 2, L.raza || 60, L.decay || 0);
        l.position.copy(q); g.add(l); g.userData.lumini.push([l, l.intensity]);
        if (l.isSpotLight) { l.target.position.copy(q).addScaledVector(dir, 10); g.add(l.target); }
      }
    }
    orig.set(p.id, o);
    piese.set(p.id, g);
  }
  // 2. grupurile fără pivot: originea în centrul pieselor din ele (pozițiile sunt încă în coordonatele camerei)
  const copii = id => S.piese.filter(q => q.in === id);
  const cutieLume = id => {
    const b = new THREE.Box3(), g = piese.get(id), o = orig.get(id);
    if (o) g.children.forEach(m => { if (!m.geometry || m.isInstancedMesh) return; m.updateMatrix(); m.geometry.computeBoundingBox(); b.union(m.geometry.boundingBox.clone().applyMatrix4(m.matrix).translate(o)); });
    for (const q of copii(id)) b.union(cutieLume(q.id));
    return b;
  };
  for (const p of S.piese) if (p.tip === 'grup' && !p.pivot) { const b = cutieLume(p.id); orig.set(p.id, b.isEmpty() ? new V3() : b.getCenter(new V3())); }
  // 3. ierarhia: poziția fiecărui grup e relativă la părinte (părinții nu sunt rotiți în poziția de bază)
  for (const p of S.piese) {
    const g = piese.get(p.id), o = orig.get(p.id) || new V3();
    const t = p.in && piese.get(p.in) ? piese.get(p.in) : grup;
    g.position.copy(o).sub(p.in && orig.get(p.in) ? orig.get(p.in) : new V3());
    t.add(g);
  }
  const T = S.taietura || { o: [0, 0, 0], x: [1, 0, 0], y: [0, -1, 0] };
  const O = new V3(...T.o), X = new V3(...T.x), Y = new V3(...T.y);
  const punct = (x, y) => O.clone().addScaledVector(X, x).addScaledVector(Y, y);
  const normala = T.normala ? new V3(...T.normala).normalize() : X.clone().cross(Y).normalize();
  grup.updateMatrixWorld(true);
  const cutie = new THREE.Box3().setFromObject(grup);
  return {
    grup, piese, punct, normala, cutie, scena3d: true,
    // vederea dintr-un dreptunghi 2D, când pasul nu are „vedere3d”
    vedere(v, aspect) { return vedereDreptunghi(punct, normala, v, aspect); },
    elibereaza() { elibereazaObiect(grup); },
  };
}

// camera care încadrează dreptunghiul 2D v, privit oblic față de normala tăieturii (fov 35°)
function vedereDreptunghi(punct, normala, v, aspect, fov = 35) {
  const a = punct(v.x0, v.y0), b = punct(v.x1, v.y1), tinta = a.clone().lerp(b, .5);
  const ax = punct(1, 0).sub(punct(0, 0)).normalize(), ay = punct(0, 1).sub(punct(0, 0)).normalize();
  const w = Math.abs(v.x1 - v.x0), h = Math.abs(v.y1 - v.y0);
  const dir = normala.clone().addScaledVector(ax, -.42).addScaledVector(ay, -.3).normalize();
  return { pozitie: tinta.clone().addScaledVector(dir, distanta(w, h, fov, aspect)), tinta, fov };
}
function distanta(w, h, fov, aspect) {
  const t = Math.tan(rad(fov) / 2);
  return Math.max(h / 2 / t, w / 2 / (t * aspect)) * 1.08;
}
function elibereazaObiect(o) {
  const vazute = new Set();
  o.traverse(x => {
    if (x.geometry && !vazute.has(x.geometry)) { vazute.add(x.geometry); x.geometry.dispose(); }
    const ms = Array.isArray(x.material) ? x.material : x.material ? [x.material] : [];
    for (const m of ms) {
      if (vazute.has(m)) continue;
      vazute.add(m);
      for (const k in m) if (m[k] && m[k].isTexture && !vazute.has(m[k])) { vazute.add(m[k]); m[k].dispose(); }
      m.dispose();
    }
  });
}

// ---------------------------------------------------------------- sursa: „scena3d” sau js/sectiune3d.js
let SECTIUNE = null;
function modulSectiune() {
  return SECTIUNE || (SECTIUNE = import(new URL('./sectiune3d.js', import.meta.url).href).catch(() => null));
}
// detaliul are scenă 3D? „scena3d” da; altfel js/sectiune3d.js, doar pentru detaliile care nu sunt scheme
export async function areScena(det) {
  if (det.scena3d) return true;
  if (det.schema) return false;
  const m = await modulSectiune();
  return !!(m && typeof m.construieste === 'function');
}
async function sursa(det) {
  if (det.scena3d) return construiesteScena(det);
  if (det.schema) return null;
  const m = await modulSectiune();
  if (!m || typeof m.construieste !== 'function') return null;
  return m.construieste(det, { THREE });
}

// ---------------------------------------------------------------- motorul
// gazda: elementul în care stă desenul 3D (canvasul, liniile și etichetele). Întoarce null fără WebGL.
export function creeaza(gazda) {
  const canvas = document.createElement('canvas');
  canvas.className = 'ps-canvas';
  canvas.setAttribute('aria-label', 'Desenul 3D al pasului. Trage ca să rotești, rotița sau două degete măresc.');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch (e) { console.warn('Pașii de montaj în 3D: WebGL nu merge pe acest dispozitiv.', e); return null; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const svg = document.createElementNS(NS, 'svg'), et = document.createElement('div'), asteapta = document.createElement('div');
  svg.setAttribute('class', 'ps-linii3d'); svg.setAttribute('aria-hidden', 'true');
  et.className = 'ps-et3d';
  asteapta.className = 'ps-asteapta'; asteapta.textContent = 'Se încarcă desenul 3D…';
  gazda.append(canvas, svg, et, asteapta);

  const scena = new THREE.Scene(), camera = new THREE.PerspectiveCamera(35, 1.6, 1, 5000);
  const pmrem = new THREE.PMREMGenerator(renderer), odaie = new RoomEnvironment(renderer);
  const env = pmrem.fromScene(odaie, .04).texture;
  odaie.dispose(); pmrem.dispose();
  scena.environment = env;
  const soare = new THREE.DirectionalLight('#fff1dc', 1.7), cer = new THREE.HemisphereLight('#ffffff', '#ddd6cb', 1.1), amb = new THREE.AmbientLight('#ffffff', .5);
  soare.castShadow = true;
  soare.shadow.mapSize.set(innerWidth < 700 ? 1024 : 2048, innerWidth < 700 ? 1024 : 2048);
  soare.shadow.bias = -.0004; soare.shadow.normalBias = .6;
  scena.add(soare, soare.target, cer, amb);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = .08; controls.rotateSpeed = .8; controls.screenSpacePanning = true;

  const st = { det: null, src: null, k: 0, gata: false, noduri: new Map(), prima: {}, anims: [], eti: [], cont: [], raf: 0, cadre: 0, randari: 0,
    murdar: true, atins: false, vedere: null, aer: [], camAnim: null, ax: null, ay: null, impulsuri: new Map(), gen: 0, t0: performance.now(), mort: false };
  controls.addEventListener('start', () => { st.atins = true; st.camAnim = null; });
  controls.addEventListener('change', () => { st.murdar = true; });

  function marime() {
    const w = gazda.clientWidth, h = gazda.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    if (st.gata) { st.coloana = coloana(); decalaj(); }
    camera.updateProjectionMatrix();
    if (st.gata && !st.atins && !st.camAnim) laVedere(false);
    st.murdar = true;
  }
  const ro = new ResizeObserver(marime); ro.observe(gazda);
  canvas.addEventListener('webglcontextlost', ev => { ev.preventDefault(); if (st.inchis) return; st.mort = true; gazda.dispatchEvent(new CustomEvent('ps3d-eroare')); });

  // ---------------------------------------------------------------- încărcarea detaliului
  async function incarca(det) {
    const gen = ++st.gen;
    goleste();
    st.det = det; st.gata = false; asteapta.hidden = false; st.zCote = null;
    let src;
    try { src = await sursa(det); } catch (e) { console.warn('Pașii de montaj în 3D: scena nu s-a construit.', e); src = null; }
    if (gen !== st.gen || st.mort) { if (src) src.elibereaza(); return false; }
    if (!src) { asteapta.hidden = true; return false; }
    st.src = src;
    scena.add(src.grup);
    src.grup.updateMatrixWorld(true);
    const o = src.punct(0, 0);
    st.ax = src.punct(1, 0).sub(o).normalize(); st.ay = src.punct(0, 1).sub(o).normalize();
    st.prima = {};
    det.pasi.forEach((p, i) => pas3(i).apar.forEach(id => { if (!(id in st.prima)) st.prima[id] = i; }));
    const forme = new Map((det.forme || []).map(s => [s.id, s]));
    st.noduri = new Map();
    for (const [id, g] of src.piese) {
      const u = g.userData = Object.assign({ id }, g.userData);
      // în secțiune, o piesă lipsește la pașii la care lipsește forma ei 2D; în „scena3d” piesa se mișcă și nu lipsește
      if (!src.scena3d && !u.lipseste && forme.get(id) && forme.get(id).lipseste) u.lipseste = forme.get(id).lipseste;
      u.baza = { pos: g.position.clone(), rot: g.rotation.clone(), scale: g.scale.clone() };
      u.cutie = cutieLocala(g);
      u.mats = new Map();
      g.traverse(x => { if (x.material && !u.mats.has(x.material)) u.mats.set(x.material, { opacity: x.material.opacity, transparent: x.material.transparent, emissive: x.material.emissiveIntensity }); });
      g.traverse(x => { if (x.isInstancedMesh && x.userData.particule) st.aer.push([g, x]); });
      st.noduri.set(id, g);
    }
    // lumina: soarele vine din dreapta-sus-față, umbrele acoperă toată scena
    const b = src.cutie && !src.cutie.isEmpty() ? src.cutie : new THREE.Box3().setFromObject(src.grup);
    const c = b.getCenter(new V3()), diag = b.getSize(new V3()).length() || 100;
    const ds = new V3(...((det.scena3d && det.scena3d.soare) || [1, .55, .5])).normalize();
    soare.position.copy(c).addScaledVector(ds, diag * 2); soare.target.position.copy(c);
    Object.assign(soare.shadow.camera, { left: -diag / 1.6, right: diag / 1.6, top: diag / 1.6, bottom: -diag / 1.6, near: diag * .2, far: diag * 4 });
    soare.shadow.camera.updateProjectionMatrix();
    camera.near = Math.max(.3, diag / 400); camera.far = diag * 30; camera.updateProjectionMatrix();
    st.diag = diag;
    // shaderele se compilează înainte de prima afișare; cât durează, secțiunea 2D rămâne la vedere
    camera.position.copy(c).add(new V3(-diag, diag * .3, diag)); camera.lookAt(c); camera.updateMatrixWorld();
    if (renderer.compileAsync) { try { await renderer.compileAsync(scena, camera); } catch (_) { /* se compilează la prima randare */ } }
    if (gen !== st.gen || st.mort) return false;
    asteapta.hidden = true;
    st.gata = true;
    marime();
    porneste();
    return true;
  }
  function goleste() {
    st.anims = []; st.camAnim = null;
    stergeEtichete();
    for (const [, sf] of st.impulsuri) { sf.geometry.dispose(); sf.material.dispose(); sf.removeFromParent(); }
    st.impulsuri.clear();
    if (st.src) { scena.remove(st.src.grup); try { st.src.elibereaza(); } catch (_) { /* scena deja eliberată */ } }
    st.src = null; st.noduri = new Map(); st.aer = []; st.gata = false;
  }
  // cutia piesei în coordonatele grupului ei (pentru „creste”, „pop” și conturul albastru)
  function cutieLocala(g) {
    g.updateMatrixWorld(true);
    const inv = g.matrixWorld.clone().invert(), b = new THREE.Box3();
    g.traverse(x => {
      if (!x.isMesh || x.isInstancedMesh || !x.geometry) return;
      x.geometry.computeBoundingBox();
      b.union(x.geometry.boundingBox.clone().applyMatrix4(inv.clone().multiply(x.matrixWorld)));
    });
    return b.isEmpty() ? null : b;
  }

  // ---------------------------------------------------------------- vizibilitatea pe pași (aceleași reguli ca în 2D)
  // pasul în 3D: „apar”, „misca” și „vedere3d” din pas, completate de „scena3d.pasi[k]”, pentru detaliile ale căror pași
  // nu se schimbă (de exemplu PUSH)
  function pas3(k) {
    const p = st.det.pasi[k], q = (st.det.scena3d && st.det.scena3d.pasi && st.det.scena3d.pasi[k]) || {};
    // piesele în plus din 3D intră înaintea celor din pas (de exemplu mobila, înaintea sursei din ea)
    return Object.assign({}, p, { apar: (q.apar || []).concat(p.apar), misca: q.misca || p.misca, vedere3d: q.vedere3d || p.vedere3d, doar2d: !!q.doar2d,
      expunere: q.expunere || 1, vederi: q.vederi || null });
  }
  const listat = id => id in st.prima;
  function vizibil(g, k) {
    const u = g.userData, pas = pas3(k);
    if (u.lipseste && u.lipseste.includes(k)) return false;
    if (u.temporar) return pas.apar.includes(u.id);
    if (listat(u.id)) return st.prima[u.id] <= k;
    return !!u.tata;      // piesele dintr-un grup apar cu grupul, dacă nu sunt listate separat
  }
  const nou = (g, k) => { const u = g.userData, pas = pas3(k); return pas.apar.includes(u.id) && (u.temporar || st.prima[u.id] === k); };

  function reseteaza(g) {
    const u = g.userData;
    g.position.copy(u.baza.pos); g.rotation.copy(u.baza.rot); g.scale.copy(u.baza.scale);
    for (const [m, o] of u.mats) { m.opacity = o.opacity; m.transparent = o.transparent; if (o.emissive !== undefined) m.emissiveIntensity = o.emissive; m.needsUpdate = true; }
    g.traverse(x => { if (x.isMesh && x.geometry && x.geometry.index && x.userData.tot) x.geometry.setDrawRange(0, Infinity); });
    if (u.tip === 'led') lumina(g, u.aprins);
    u.virt = { rot: [0, 0, 0], muta: [0, 0, 0], lumina: u.aprins, vizibil: true };
  }
  function opacitate(g, k) {
    for (const [m, o] of g.userData.mats) { m.transparent = k < 1 || o.transparent; m.opacity = o.opacity * k; m.needsUpdate = true; }
  }
  function lumina(g, f) {
    const u = g.userData;
    for (const [m, o] of u.mats) if (o.emissive !== undefined) m.emissiveIntensity = o.emissive * f;
    for (const [l, i] of u.lumini || []) l.intensity = i * f;
  }

  // ---------------------------------------------------------------- animațiile
  function tw(dur, delay, fn, gata) {
    if (reducere() || dur <= 0) { fn(1); if (gata) gata(); return; }
    st.anims.push({ t0: performance.now() + delay, dur, fn, gata, pornit: false });
  }
  function bifeaza(now) {
    if (!st.anims.length) return false;
    st.anims = st.anims.filter(a => {
      if (now < a.t0) return true;
      const k = Math.min(1, (now - a.t0) / a.dur);
      a.fn(ease(k));
      if (k >= 1) { if (a.gata) a.gata(); return false; }
      return true;
    });
    return true;
  }
  // direcția din care vine piesa: în „scena3d” axele camerei (peretele spre z mic), în secțiune axele desenului 2D
  function directie(tip) {
    const s3 = st.src && st.src.scena3d, ax = st.ax, ay = st.ay;
    const D = s3 ? { 'din-perete': new V3(0, 0, -1), 'din-camera': new V3(0, 0, 1), 'din-stanga': new V3(-1, 0, 0), 'din-dreapta': new V3(1, 0, 0), 'de-sus': new V3(0, 1, 0), 'de-jos': new V3(0, -1, 0) }
      : { 'din-perete': ay.clone().negate(), 'din-camera': ay.clone(), 'din-stanga': ax.clone().negate(), 'din-dreapta': ax.clone(), 'de-sus': ay.clone().negate(), 'de-jos': ay.clone() };
    return D[tip];
  }
  // animația de intrare: piesa e pusă imediat în starea de pornire, apoi se mișcă după întârziere
  const porneste_ = (dur, delay, fn) => { fn(0); tw(dur, delay, fn); };
  function intra(g, i) {
    const u = g.userData, a = typeof u.anim === 'object' && u.anim ? u.anim : { tip: u.anim };
    let tip = reducere() ? 'apare' : a.tip || ANIM[u.tip] || 'apare';
    const dur = a.ms || DUR[tip] || 850, delay = 120 + i * 380, b = u.cutie, baza = u.baza;
    const d0 = a.d || Math.max(4, Math.min(30, (st.diag || 100) * .12));
    const dir = directie(tip);
    if (dir) {
      porneste_(dur, delay, k => { g.position.copy(baza.pos).addScaledVector(dir, d0 * (1 - k)); opacitate(g, k); });
    } else if (tip === 'creste' && b) {
      // crește pe axa principală a direcției, cu marginea de pornire fixă
      const gr = st.src.scena3d ? new V3(0, 1, 0) : st.ay.clone();
      const i0 = Math.abs(gr.x) > Math.abs(gr.y) ? (Math.abs(gr.x) > Math.abs(gr.z) ? 'x' : 'z') : (Math.abs(gr.y) > Math.abs(gr.z) ? 'y' : 'z');
      const fix = gr[i0] > 0 ? b.min[i0] : b.max[i0];
      porneste_(dur, delay, k => { const s = Math.max(.001, k); g.scale[i0] = baza.scale[i0] * s; g.position.copy(baza.pos); g.position[i0] += fix * (1 - s); });
    } else if (tip === 'pop' && b) {
      const c = b.getCenter(new V3());
      porneste_(dur, delay, k => { const s = .2 + .8 * k; g.scale.copy(baza.scale).multiplyScalar(s); g.position.copy(baza.pos).addScaledVector(c, 1 - s); opacitate(g, k); });
    } else if (tip === 'deseneaza') {
      const ms = []; g.traverse(x => { if (x.isMesh && x.geometry && x.geometry.index) { x.userData.tot = x.geometry.index.count; ms.push(x); } });
      if (ms.length) porneste_(dur, delay, k => ms.forEach((x, j) => {
        const f = Math.max(0, Math.min(1, k * ms.length - j));
        x.geometry.setDrawRange(0, Math.floor(x.userData.tot * f / 6) * 6);
      }));
      else porneste_(dur, delay, k => opacitate(g, k));
    } else if (tip === 'lumina') {
      porneste_(dur, delay, k => { opacitate(g, Math.min(1, k * 2)); if (u.tip === 'led') lumina(g, u.aprins * k); });
    } else porneste_(dur, delay, k => opacitate(g, k));
    return delay + dur;
  }
  // mișcările pasului („misca”): „piesa:mișcare”, una după alta; o listă în listă merge în paralel
  function programeaza(lista, t) {
    for (const it of lista || []) {
      if (Array.isArray(it)) { let fin = t; for (const x of it) fin = Math.max(fin, programeaza([x], t)); t = fin; continue; }
      const [id, nume] = String(it).split(':'), g = st.noduri.get(id), m = g && g.userData.miscari && g.userData.miscari[nume];
      if (!m) { console.warn('Pașii de montaj în 3D: mișcarea lipsește', it); continue; }
      for (const e of m) t = intrare(g, e, t);
    }
    return t;
  }
  function intrare(g, e, t) {
    const u = g.userData, de = Object.assign({}, u.virt), la = Object.assign({}, u.virt), ms = e.ms === undefined ? 900 : e.ms;
    t += e.pauza || 0;
    if (e.roteste) la.rot = e.roteste.slice();
    if (e.muta) la.muta = e.muta.slice();
    if (e.lumina !== undefined) la.lumina = e.lumina;
    if (e.ascunde) la.vizibil = false;
    if (e.arata) la.vizibil = true;
    u.virt = la;
    tw(ms, t, k => poza(g, de, la, k));
    if (e.impuls) tw(ms, t, k => impuls(g, k, e.impuls), () => impuls(g, -1));
    return t + ms;
  }
  function poza(g, de, la, k) {
    const u = g.userData, L = (a, b) => a + (b - a) * k;
    g.rotation.set(u.baza.rot.x + rad(L(de.rot[0], la.rot[0])), u.baza.rot.y + rad(L(de.rot[1], la.rot[1])), u.baza.rot.z + rad(L(de.rot[2], la.rot[2])));
    g.position.set(u.baza.pos.x + L(de.muta[0], la.muta[0]), u.baza.pos.y + L(de.muta[1], la.muta[1]), u.baza.pos.z + L(de.muta[2], la.muta[2]));
    if (u.tip === 'led' && de.lumina !== la.lumina) lumina(g, L(de.lumina, la.lumina));
    if (de.vizibil !== la.vizibil) {
      if (la.vizibil) { g.visible = true; opacitate(g, k); } else { opacitate(g, 1 - k); if (k >= 1) g.visible = false; }
    }
  }
  // impulsul: un punct luminos care merge pe traseul unui fir (de exemplu comanda de la buton la sursă)
  function impuls(g, k, opt) {
    const c = g.userData.curba;
    if (!c) return;
    let sf = st.impulsuri.get(g);
    if (!sf) {
      const cul = (opt && opt.culoare) || '#c4b5fd';
      sf = new THREE.Mesh(new THREE.SphereGeometry((opt && opt.raza) || 1, 14, 10), new THREE.MeshBasicMaterial({ color: cul }));
      st.impulsuri.set(g, sf); st.src.grup.add(sf);
    }
    sf.visible = k >= 0 && g.visible;
    if (k >= 0) sf.position.copy(g.localToWorld(c.getPointAt(Math.min(1, k)).sub(g.userData.curbaO || new V3())));
  }

  // ---------------------------------------------------------------- pasul
  function pas(k, cuAnimatie = true) {
    if (!st.gata) { st.k = k; return 0; }
    const p = pas3(k);
    st.k = k; st.anims = []; st.atins = false;
    for (const [, sf] of st.impulsuri) sf.visible = false;
    const noi = [];
    for (const g of st.noduri.values()) {
      reseteaza(g);
      g.visible = vizibil(g, k);
      if (g.visible && nou(g, k)) noi.push(g);
    }
    // piesele noi intră în ordinea din „apar”; piesele dintr-un grup nou intră cu grupul
    noi.sort((a, b) => p.apar.indexOf(a.userData.id) - p.apar.indexOf(b.userData.id));
    let sfarsit = 0, j = 0;
    const anim = cuAnimatie && !reducere();
    for (const g of noi) {
      if (anim && !(g.userData.tata && noi.some(x => x.userData.id === g.userData.tata))) sfarsit = Math.max(sfarsit, intra(g, j++));
    }
    // mișcările încep după ce au intrat piesele; particulele cu „dupaMiscari” pornesc la sfârșit
    let t = programeaza(p.misca, anim ? (sfarsit ? sfarsit + 150 : 250) : 0);
    if (!anim) { st.anims.slice().forEach(a => { a.fn(1); if (a.gata) a.gata(); }); st.anims = []; t = 0; }
    for (const g of st.noduri.values()) if (g.visible && g.userData.dupaMiscari) { g.visible = false; tw(1, t, () => { g.visible = true; }); }
    sfarsit = Math.max(sfarsit, t);
    // „expunere” sub 1: camera se întunecă (de exemplu la proba benzii LED, ca lumina ei să se vadă)
    const e0 = renderer.toneMappingExposure, e1 = 1.05 * p.expunere;
    if (Math.abs(e0 - e1) > 1e-3) { if (anim) tw(900, 0, f => { renderer.toneMappingExposure = e0 + (e1 - e0) * f; }); else renderer.toneMappingExposure = e1; }
    contururi(k, noi, anim);
    st.coloana = coloana(); decalaj(); camera.updateProjectionMatrix();
    etichete(k);
    // „vederi”: camera pasului se mută la alte vederi, la momentele „la” (ms); fără animații, rămâne ultima
    st.v3 = p.vederi ? p.vederi[0] : null;
    laVedere(cuAnimatie);
    if (anim) (p.vederi || []).slice(1).forEach(v => tw(1, v.la || 0, f => { if (f >= 1) { st.v3 = v; if (!st.atins) laVedere(true); } }));
    else if (p.vederi) { st.v3 = p.vederi[p.vederi.length - 1]; laVedere(false); }
    st.murdar = true;
    return sfarsit;
  }
  // etichetele din „scena3d” stau într-o coloană pe o latură a desenului; camera mută modelul în restul desenului
  function coloana() {
    const det = st.det, p = pas3(st.k), s3 = det.scena3d;
    if (!s3 || s3.etichete === 'sectiune' || !(det.forme || []).some(s => s.tip === 'eticheta' && det.pasi[st.k].apar.includes(s.id))) return null;
    const W = gazda.clientWidth || 600, numere = W < 520;
    const parte = (p.vedere3d && p.vedere3d.etichete) || (s3.vedere && s3.vedere.etichete) || 'dreapta';
    return { parte, w: numere ? 26 : Math.round(Math.max(150, Math.min(230, W * .28))), pad: 10 };
  }
  function decalaj() {
    const W = gazda.clientWidth, H = gazda.clientHeight, c = st.coloana;
    if (c && W && H) camera.setViewOffset(W, H, (c.parte === 'stanga' ? -1 : 1) * (c.w + c.pad) / 2, 0, W, H);
    else camera.clearViewOffset();
  }
  // distanța la care cutia „cadru” încape toată în desen, privită din direcția dir spre tinta
  const camProba = new THREE.PerspectiveCamera();
  function incadreaza(b, tinta, dir, fov) {
    const C = camProba, colt = [];
    C.fov = fov; C.aspect = camera.aspect; C.near = camera.near; C.far = camera.far * 4;
    if (camera.view && camera.view.enabled) C.setViewOffset(camera.view.fullWidth, camera.view.fullHeight, camera.view.offsetX, 0, camera.view.width, camera.view.height); else C.clearViewOffset();
    C.updateProjectionMatrix();
    for (let i = 0; i < 8; i++) colt.push(new V3(i & 1 ? b.max[0] : b.min[0], i & 2 ? b.max[1] : b.min[1], i & 4 ? b.max[2] : b.min[2]));
    let lo = 1, hi = 40000;
    for (let it = 0; it < 36; it++) {
      const d = (lo + hi) / 2;
      C.position.copy(tinta).addScaledVector(dir, d); C.lookAt(tinta); C.updateMatrixWorld();
      const ok = colt.every(q => { const v = q.clone().project(C); return v.z < 1 && Math.abs(v.x) <= .94 && Math.abs(v.y) <= .9; });
      if (ok) hi = d; else lo = d;
    }
    return hi;
  }
  // camera pasului: „vedere3d” din pas sau din scenă; altfel dreptunghiul 2D al pasului, prin sursă
  function vederePas() {
    const det = st.det, p = pas3(st.k), s3 = det.scena3d || {};
    const v3 = st.v3 || p.vedere3d || s3.vedere;
    const aspect = camera.aspect || 1.6;
    if (v3) {
      const fov = v3.fov || 38, tinta = new V3(...v3.tinta), dir = new V3(...v3.dir).normalize(), cd = v3.cadru || [100, 60];
      const d = Array.isArray(cd) ? distanta(cd[0], cd[1], fov, aspect) : incadreaza(cd, tinta, dir, fov);
      return { pozitie: tinta.clone().addScaledVector(dir, d), tinta, fov };
    }
    const r = p.vedere || det.vedere, v = st.src.vedere(r, aspect), fov = v.fov || 35;
    // în secțiune: aceeași direcție a camerei, dar încadrată strâns pe piesele care se văd în dreptunghiul pasului
    const b = cutieVizibila(r);
    if (b) {
      const dir = v.pozitie.clone().sub(v.tinta).normalize(), tinta = b.getCenter(new V3());
      const d = incadreaza({ min: b.min.toArray(), max: b.max.toArray() }, tinta, dir, fov);
      if (d > 1 && d < v.pozitie.distanceTo(v.tinta) * 1.05) return { pozitie: tinta.clone().addScaledVector(dir, d), tinta, fov };
    }
    return { pozitie: v.pozitie, tinta: v.tinta, fov };
  }
  // cutia pieselor vizibile la pasul curent (în poziția lor de bază), tăiată la dreptunghiul 2D r al pasului
  function cutieVizibila(r) {
    if (!st.src || st.src.scena3d || !r) return null;
    const u = new THREE.Box3(), m = new THREE.Matrix4();
    for (const g of st.noduri.values()) {
      const d = g.userData;
      if (!g.visible || !d.cutie || d.tip === 'aer') continue;
      let v = true, q = g.parent; while (v && q && q !== st.src.grup) { v = q.visible; q = q.parent; }
      if (!v) continue;
      g.parent.updateMatrixWorld(true);
      m.compose(d.baza.pos, new THREE.Quaternion().setFromEuler(d.baza.rot), d.baza.scale).premultiply(g.parent.matrixWorld);
      u.union(d.cutie.clone().applyMatrix4(m));
    }
    if (u.isEmpty()) return null;
    const z = new THREE.Box3().setFromPoints([st.src.punct(r.x0, r.y0), st.src.punct(r.x1, r.y1), st.src.punct(r.x0, r.y1), st.src.punct(r.x1, r.y0)]);
    // pe direcția normalei, dreptunghiul ține toată adâncimea scenei
    const n = st.src.normala, ax = Math.abs(n.x) > .9 ? 'x' : Math.abs(n.y) > .9 ? 'y' : Math.abs(n.z) > .9 ? 'z' : null;
    if (!ax) return null;
    z.min[ax] = -Infinity; z.max[ax] = Infinity;
    u.intersect(z);
    if (u.isEmpty()) return null;
    const s = u.getSize(new V3());
    return Math.max(s.x, s.y, s.z) > 2 ? u : null;
  }
  function laVedere(animat) {
    const v = vederePas(), d = v.pozitie.distanceTo(v.tinta);
    v.min = d * .25; v.max = d * 3.5;
    controls.minDistance = 0; controls.maxDistance = Infinity;
    // inerția rotirii de dinainte se oprește, ca să nu se bată cu mișcarea camerei
    controls.enableDamping = false; controls.update(); controls.enableDamping = true;
    if (!animat || reducere()) {
      camera.position.copy(v.pozitie); controls.target.copy(v.tinta); camera.fov = v.fov; camera.updateProjectionMatrix();
      controls.minDistance = v.min; controls.maxDistance = v.max; controls.update();
      st.camAnim = null; st.murdar = true; return;
    }
    st.camAnim = { t0: performance.now(), dur: 950, p0: camera.position.clone(), t0v: controls.target.clone(), f0: camera.fov, v };
  }
  function bifeazaCamera(now) {
    const a = st.camAnim;
    if (!a) return false;
    const k = ease(Math.min(1, (now - a.t0) / a.dur));
    camera.position.lerpVectors(a.p0, a.v.pozitie, k); controls.target.lerpVectors(a.t0v, a.v.tinta, k);
    camera.fov = a.f0 + (a.v.fov - a.f0) * k; camera.updateProjectionMatrix();
    if (k >= 1) { st.camAnim = null; controls.minDistance = a.v.min; controls.maxDistance = a.v.max; }
    return true;
  }

  // ---------------------------------------------------------------- conturul albastru, cotele și etichetele (peste desen)
  function stergeEtichete() { et.textContent = ''; svg.textContent = ''; st.eti = []; st.cont = []; }
  const el = (tag, a, p) => { const e = document.createElementNS(NS, tag); for (const k in a) e.setAttribute(k, a[k]); if (p) p.appendChild(e); return e; };
  function contururi(k, noi, anim) {
    st.cont.forEach(c => c.e.remove()); st.cont = [];
    if (!k) return;
    let i = 0;
    for (const g of noi) {
      const u = g.userData;
      if (u.temporar || u.contur === false || u.tip === 'aer' || (u.tata && noi.some(x => x.userData.id === u.tata))) { i++; continue; }
      const e = el('path', { class: 'ps-nou3d' }, svg);
      if (anim) e.style.animationDelay = (120 + i * 380 + 700) + 'ms';
      st.cont.push({ g, e, curba: u.curba });
      i++;
    }
  }
  // punctele 3D ale formelor 2D: punct(x, y) al sursei sau, dacă forma le are, „spre3d”, „la3d”, „a3d”, „b3d”
  const P3 = (s, cheie, xy) => s[cheie] ? new V3(...s[cheie]) : xy ? st.src.punct(xy[0], xy[1]) : null;
  function etichete(k) {
    et.textContent = ''; svg.querySelectorAll('.ps-e3l').forEach(e => e.remove()); st.eti = [];
    const det = st.det, pas = det.pasi[k], v = pas.vedere || det.vedere, numere = gazda.clientWidth < 520, s3 = !!(st.src && st.src.scena3d);
    const viz = s => (TEMP.has(s.tip) || s.temporar) ? pas.apar.includes(s.id) : st.prima[s.id] !== undefined && st.prima[s.id] <= k && !(s.lipseste && s.lipseste.includes(k));
    let nr = 0;
    const aj = (det.scena3d && det.scena3d.etichete3d) || {};
    for (const s0 of det.forme || []) {
      if (!viz(s0)) continue;
      const s = aj[s0.id] ? Object.assign({}, s0, aj[s0.id]) : s0;
      if (s.tip === 'eticheta') {
        nr++;
        const d = document.createElement('div');
        d.className = numere ? 'ps-n3' : 'ps-e3' + (s.anc === 'end' ? ' end' : '');
        d.textContent = numere ? String(nr) : s.text;
        if (!numere) d.title = s.text;
        et.appendChild(d);
        const x = { tip: 'e', d, la: P3(s, 'la3d', [s.x, s.y]), spre: s.spre3d === false ? null : s.spre || s.spre3d ? P3(s, 'spre3d', s.spre) : null, end: s.anc === 'end', numere,
          lat: s.lat || (s.anc === 'end' ? s.x - v.x0 : v.x1 - s.x) - .5 };
        if (x.spre) { x.l = el('line', { class: 'ps-e3l ps-lider' }, svg); x.c = el('circle', { class: 'ps-e3l ps-punct', r: 3 }, svg); }
        st.eti.push(x);
      } else if (s.tip === 'cota') {
        const d = document.createElement('div');
        d.className = 'ps-c3' + (s.culoare === 'intre' ? ' intre' : ''); d.textContent = s.text; et.appendChild(d);
        const z = s3 ? 0 : adancimeCota(s), sp = (u, v) => st.src.punct(u, v).addScaledVector(st.src.normala, -z);
        const x = { tip: 'c', d, a: s.a3d ? P3(s, 'a3d') : sp(s.a[0], s.a[1]), b: s.b3d ? P3(s, 'b3d') : sp(s.b[0], s.b[1]), parte: s.parte, intre: s.culoare === 'intre',
          martori: (s.martori || []).map(m => [sp(m[0], m[1]), sp(m[2], m[3])]) };
        if (s.a3d || s.b3d) x.martori = [];
        x.l = el('path', { class: 'ps-e3l ps-cota3d' + (x.intre ? ' intre' : '') }, svg);
        x.m = el('path', { class: 'ps-e3l ps-martor3d' + (x.intre ? ' intre' : '') }, svg);
        st.eti.push(x);
      } else if (s.tip === 'text' && (!s3 || s.la3d)) {
        const d = document.createElement('div');
        d.className = 'ps-t3' + (s.anc === 'end' ? ' end' : ''); d.textContent = s.text; et.appendChild(d);
        st.eti.push({ tip: 't', d, la: P3(s, 'la3d', [s.x, s.y]), end: s.anc === 'end', pxcm: s.pxcm || 0 });
      } else if (!s3 && (s.tip === 'contur' || ((s.tip === 'linie' || s.tip === 'fir') && !st.noduri.has(s.id)))) {
        // în secțiune: contururile rămân linii peste desen; liniile și firele, doar dacă nu au piesă 3D
        const pts = s.tip === 'contur' ? s.dreptunghiuri.map(([x0, y0, w, h]) => [[x0, y0], [x0 + w, y0], [x0 + w, y0 + h], [x0, y0 + h], [x0, y0]]) : [s.puncte];
        const e = el('path', { class: 'ps-e3l ps-' + s.tip + '3d' }, svg);
        if (s.tip === 'fir') e.style.stroke = FIRE[s.culoare] || s.culoare || '#1f2937';
        st.eti.push({ tip: 'l', e, pts: pts.map(r => r.map(q => st.src.punct(q[0], q[1]))) });
      }
    }
    st.murdar = true;
  }
  // adâncimea cotei în secțiune, de la fața tăieturii: „z3d” din cotă, „z3d” al piesei din „piesa3d” sau, altfel, a piesei
  // din spatele tăieturii (z3d > 5) la a cărei margine se oprește cota (de exemplu peretele de sticlă S8 din DUS)
  function adancimeCota(s) {
    if (typeof s.z3d === 'number') return s.z3d;
    const forme = st.det.forme || [];
    if (s.piesa3d) { const p = forme.find(q => q.id === s.piesa3d); return p && typeof p.z3d === 'number' ? p.z3d : 0; }
    if (!st.zCote) st.zCote = new Map();
    if (st.zCote.has(s.id)) return st.zCote.get(s.id);
    const ad = (st.det.sectiune3d && st.det.sectiune3d.adancime) || 60, tol = .6, piese = [];
    for (const q of forme) {
      if (q.temporar || FARA_VOLUM.has(q.tip)) continue;
      let b = null;
      if (typeof q.w === 'number' && typeof q.x === 'number') b = [q.x, q.y, q.x + q.w, q.y + q.h];
      else if (q.puncte && (q.tip === 'poligon' || q.tip === 'roca')) { const xs = q.puncte.map(p => p[0]), ys = q.puncte.map(p => p[1]); b = [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)]; }
      if (b) piese.push({ id: q.id, b, z0: q.z3d || 0, z1: (q.z3d || 0) + (q.adanc3d || ad) });
    }
    let z = 0;
    const i = Math.abs(s.a[1] - s.b[1]) < 1e-6 ? 0 : Math.abs(s.a[0] - s.b[0]) < 1e-6 ? 1 : -1;
    if (i >= 0) {
      const capat = v => piese.filter(q => Math.abs(q.b[i] - v) <= tol || Math.abs(q.b[i + 2] - v) <= tol);
      const A = capat(s.a[i]), B = capat(s.b[i]);
      // întâi o piesă din spate care atinge ambele capete; apoi un capăt care atinge doar piese din spate
      const ambele = A.filter(q => q.z0 > 5 && B.includes(q));
      if (ambele.length) z = Math.min(...ambele.map(q => q.z0));
      else for (const [E, O] of [[A, B], [B, A]]) {
        if (!E.length || !E.every(q => q.z0 > 5)) continue;
        const zz = Math.min(...E.map(q => q.z0));
        if (O.some(q => q.z0 - 6 <= zz && zz <= q.z1 + 6)) z = z ? Math.min(z, zz) : zz;
      }
    }
    st.zCote.set(s.id, z);
    return z;
  }
  const pv = new V3(), cd = new V3();
  function proiecteaza(p, W, H) {
    pv.copy(p).project(camera);
    return { x: (pv.x + 1) / 2 * W, y: (1 - pv.y) / 2 * H, ok: pv.z > -1 && pv.z < 1 };
  }
  // câți pixeli are un cm la distanța punctului p (pentru lățimea etichetelor)
  function pxcm(p, H) {
    camera.getWorldDirection(cd);
    const z = Math.max(1, p.clone().sub(camera.position).dot(cd));
    return (H / 2) / (Math.tan(rad(camera.fov) / 2) * z);
  }
  const lin = pts => pts.filter(q => q.ok).map((q, i) => `${i ? 'L' : 'M'}${q.x.toFixed(1)},${q.y.toFixed(1)}`).join(' ');
  function deseneazaPeste() {
    const W = gazda.clientWidth, H = gazda.clientHeight;
    for (const c of st.cont) {
      const g = c.g, u = g.userData;
      if (!g.visible) { c.e.setAttribute('d', ''); continue; }
      if (c.curba) {
        const pts = c.curba.getSpacedPoints(40).map(q => proiecteaza(g.localToWorld(q.clone().sub(u.curbaO || new V3())), W, H));
        c.e.setAttribute('d', lin(pts)); continue;
      }
      const b = u.cutie;
      if (!b) continue;
      // cele 12 muchii ale cutiei piesei, în coordonatele grupului ei
      const k = [];
      for (let i = 0; i < 8; i++) k.push(proiecteaza(g.localToWorld(new V3(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z)), W, H));
      const M = [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]];
      c.e.setAttribute('d', M.filter(([a, z]) => k[a].ok && k[z].ok).map(([a, z]) => `M${k[a].x.toFixed(1)},${k[a].y.toFixed(1)}L${k[z].x.toFixed(1)},${k[z].y.toFixed(1)}`).join(''));
    }
    const ocupat = [], col = st.coloana;
    if (col) {
      // coloana: etichetele în ordinea înălțimii țintei lor pe ecran, fără suprapuneri, cu linia spre țintă
      const L = st.eti.filter(x => x.tip === 'e');
      for (const x of L) {
        x.ts = x.spre ? proiecteaza(x.spre, W, H) : null;
        if (!x.numere && Math.abs((x.mw || 0) - col.w) > 1) { x.mw = col.w; x.d.style.maxWidth = col.w + 'px'; x.w = 0; }
        x.d.hidden = false;
        if (!x.w) { x.w = x.d.offsetWidth; x.h = x.d.offsetHeight; }
      }
      L.sort((a, b) => (a.ts && a.ts.ok ? a.ts.y : -1e9) - (b.ts && b.ts.ok ? b.ts.y : -1e9));
      const gap = 6, pos = [];
      let y = col.pad;
      for (const x of L) { const t = Math.max(y, x.ts && x.ts.ok ? x.ts.y - x.h / 2 : y); pos.push(t); y = t + x.h + gap; }
      let lim = H - col.pad;
      for (let i = L.length - 1; i >= 0; i--) { pos[i] = Math.max(col.pad, Math.min(pos[i], lim - L[i].h)); lim = pos[i] - gap; }
      L.forEach((x, i) => {
        const l = col.parte === 'stanga' ? col.pad : W - col.pad - (x.numere ? x.w : col.w), t = pos[i];
        x.d.style.transform = `translate(${l.toFixed(1)}px, ${t.toFixed(1)}px)`;
        if (!x.l) return;
        const s = x.ts, ok = s && s.ok, lx = col.parte === 'stanga' ? l + x.w : l;
        x.l.setAttribute('x1', ok ? lx : -99); x.l.setAttribute('y1', t + x.h / 2); x.l.setAttribute('x2', ok ? s.x : -99); x.l.setAttribute('y2', ok ? s.y : 0);
        x.c.setAttribute('cx', ok ? s.x : -99); x.c.setAttribute('cy', ok ? s.y : 0);
      });
    }
    for (const x of st.eti) {
      if (col && x.tip === 'e') continue;
      if (x.tip === 'e' || x.tip === 't') {
        const q = proiecteaza(x.la, W, H);
        // un text al cărui punct e în afara desenului sau, în „scena3d”, e prea mic față de „pxcm” nu se arată
        if (x.tip === 't' && (q.x < 0 || q.x > W || q.y < 0 || q.y > H || (x.pxcm && pxcm(x.la, H) < x.pxcm))) q.ok = false;
        x.d.hidden = !q.ok;
        if (!q.ok) { if (x.l) { x.l.setAttribute('x1', -99); x.l.setAttribute('x2', -99); x.c.setAttribute('cx', -99); } continue; }
        if (x.tip === 'e' && !x.numere && x.lat) { const mw = Math.max(110, Math.min(260, x.lat * pxcm(x.la, H))); if (Math.abs((x.mw || 0) - mw) > 4) { x.mw = mw; x.d.style.maxWidth = mw + 'px'; x.w = 0; } }
        if (!x.w) { x.w = x.d.offsetWidth; x.h = x.d.offsetHeight; }
        let l = x.numere ? q.x - x.w / 2 : x.end ? q.x - x.w : q.x, t = x.numere ? q.y - x.h / 2 : q.y - x.h * .7;
        l = Math.max(2, Math.min(W - x.w - 2, l));
        // etichetele nu se suprapun: o etichetă care ar acoperi alta coboară sub ea
        const peste = () => ocupat.find(z => l < z[0] + z[2] && l + x.w > z[0] && t < z[1] + z[3] && t + x.h > z[1]);
        // în „scena3d”, un text care ar acoperi altul nu se arată (reperele mici, ca bornele, la vederile de ansamblu)
        if (x.tip === 't' && st.src.scena3d && peste()) { x.d.hidden = true; continue; }
        for (let r = 0; r < 6; r++) {
          const o = peste();
          if (!o) break;
          t = o[1] + o[3] + 3;
        }
        t = Math.max(2, Math.min(H - x.h - 2, t));
        ocupat.push([l, t, x.w, x.h]);
        x.d.style.transform = `translate(${l.toFixed(1)}px, ${t.toFixed(1)}px)`;
        if (x.spre) {
          const s = proiecteaza(x.spre, W, H), ok = s.ok;
          const lx = Math.max(l, Math.min(l + x.w, s.x)), ly = Math.max(t, Math.min(t + x.h, s.y));
          x.l.setAttribute('x1', ok ? lx : -99); x.l.setAttribute('y1', ly); x.l.setAttribute('x2', ok ? s.x : -99); x.l.setAttribute('y2', s.y);
          x.c.setAttribute('cx', ok ? s.x : -99); x.c.setAttribute('cy', s.y);
        }
      } else if (x.tip === 'c') {
        const a = proiecteaza(x.a, W, H), b = proiecteaza(x.b, W, H);
        if (!a.ok || !b.ok) { x.d.hidden = true; x.l.setAttribute('d', ''); continue; }
        x.d.hidden = false;
        const dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L, s = 4;
        const tic = q => `M${(q.x - s * (dx / L + nx)).toFixed(1)},${(q.y - s * (dy / L + ny)).toFixed(1)}L${(q.x + s * (dx / L + nx)).toFixed(1)},${(q.y + s * (dy / L + ny)).toFixed(1)}`;
        x.l.setAttribute('d', `M${a.x.toFixed(1)},${a.y.toFixed(1)}L${b.x.toFixed(1)},${b.y.toFixed(1)}${tic(a)}${tic(b)}`);
        x.m.setAttribute('d', x.martori.map(([m0, m1]) => lin([proiecteaza(m0, W, H), proiecteaza(m1, W, H)])).join(''));
        if (!x.w) { x.w = x.d.offsetWidth; x.h = x.d.offsetHeight; }
        // textul cotei: lângă mijlocul ei; implicit deasupra (cota orizontală) sau în dreapta (cota verticală), ca în 2D
        let sx = nx, sy = ny;
        const oriz = Math.abs(ny) > Math.abs(nx);
        if (oriz ? (x.parte === 'jos' ? sy < 0 : sy > 0) : (x.parte === 'st' ? sx > 0 : sx < 0)) { sx = -sx; sy = -sy; }
        const off = 5 + (oriz ? x.h / 2 : x.w / 2);
        const mx = (a.x + b.x) / 2 + sx * off - x.w / 2, my = (a.y + b.y) / 2 + sy * off - x.h / 2;
        x.d.style.transform = `translate(${mx.toFixed(1)}px, ${my.toFixed(1)}px)`;
      } else if (x.tip === 'l') {
        x.e.setAttribute('d', x.pts.map(r => lin(r.map(q => proiecteaza(q, W, H)))).join(''));
      }
    }
  }

  // ---------------------------------------------------------------- bucla: randare doar cât fereastra e deschisă
  const mt = new THREE.Object3D(), pa = new V3();
  function particule(now) {
    let viu = false;
    const t = (now - st.t0) / 1000;
    for (const [g, im] of st.aer) {
      if (!g.visible) continue;
      viu = true;
      if (reducere() && im.userData.oprit) continue;
      const v = im.userData.viteza;
      im.userData.particule.forEach((q, i) => {
        const s = reducere() ? q.f : (t * v / q.T + q.f) % 1, L = s * q.T;
        let j = 1; while (j < q.L.length - 1 && q.L[j] < L) j++;
        const u = (L - q.L[j - 1]) / (q.L[j] - q.L[j - 1] || 1);
        pa.lerpVectors(q.v[j - 1], q.v[j], u);
        mt.position.copy(pa); mt.scale.setScalar(Math.min(1, s * 8, (1 - s) * 8)); mt.updateMatrix(); im.setMatrixAt(i, mt.matrix);
      });
      im.instanceMatrix.needsUpdate = true;
      im.userData.oprit = reducere();
    }
    return viu && !reducere();
  }
  function cadru(now) {
    st.raf = requestAnimationFrame(cadru);
    st.cadre++;
    let m = bifeaza(now);
    m = bifeazaCamera(now) || m;
    m = controls.update() || m;
    m = particule(now) || m;
    if (!m && !st.murdar) return;
    st.murdar = false;
    renderer.render(scena, camera);
    st.randari++;
    deseneazaPeste();
  }
  function porneste() { if (!st.raf && !st.mort) { st.murdar = true; st.raf = requestAnimationFrame(cadru); } }
  function opreste() { cancelAnimationFrame(st.raf); st.raf = 0; }
  function elibereaza() {
    st.inchis = true;
    opreste();
    st.gen++;
    goleste();
    ro.disconnect();
    controls.dispose();
    env.dispose();
    soare.shadow.map && soare.shadow.map.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
    gazda.textContent = '';
  }
  // pentru teste: ce se vede și câți pixeli desenați are canvasul
  function stare() {
    const vizibile = [];
    for (const [id, g] of st.noduri) { let v = g.visible, p = g.parent; while (v && p && st.src && p !== st.src.grup) { v = p.visible; p = p.parent; } if (v) vizibile.push(id); }
    return { gata: st.gata, sursa: st.src ? (st.src.scena3d ? 'scena3d' : 'sectiune3d') : null, pas: st.k, piese: [...st.noduri.keys()], vizibile,
      contururi: st.cont.length, etichete: st.eti.filter(x => x.tip === 'e').length, cote: st.eti.filter(x => x.tip === 'c').length,
      cadre: st.cadre, randari: st.randari, activ: !!st.raf, animatii: st.anims.length, aer: st.aer.filter(([g]) => g.visible).length,
      camera: camera.position.toArray().map(x => Math.round(x)), tinta: controls.target.toArray().map(x => Math.round(x)),
      aprinse: [...st.noduri.values()].filter(g => g.userData.tip === 'led' && g.visible && [...g.userData.mats.keys()].some(m => m.emissiveIntensity > .3)).map(g => g.userData.id),
      lumina: Object.fromEntries([...st.noduri.values()].filter(g => g.userData.tip === 'led').map(g => [g.userData.id, Math.round(Math.max(0, ...[...g.userData.mats].map(([m, o]) => o.emissive ? m.emissiveIntensity / o.emissive : 0)) * 100) / 100])),
      poze: Object.fromEntries([...st.noduri.values()].filter(g => g.userData.miscari).map(g => { const u = g.userData, r = x => Math.round(x * 10) / 10;
        return [u.id, { rot: ['x', 'y', 'z'].map(a => r((g.rotation[a] - u.baza.rot[a]) * 180 / Math.PI)), muta: ['x', 'y', 'z'].map(a => r(g.position[a] - u.baza.pos[a])), vizibil: g.visible }]; })) };
  }
  function masoara() {
    if (!st.gata) return null;
    renderer.render(scena, camera);
    const gl = renderer.getContext(), w = gl.drawingBufferWidth, h = gl.drawingBufferHeight, px = new Uint8Array(w * h * 4);
    gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, px);
    let plin = 0; const culori = new Set();
    for (let i = 0; i < px.length; i += 16) { if (px[i + 3] > 0) { plin++; culori.add((px[i] >> 4) << 8 | (px[i + 1] >> 4) << 4 | px[i + 2] >> 4); } }
    return { acoperit: plin / (px.length / 16), culori: culori.size, w, h };
  }
  return { incarca, pas, porneste, opreste, elibereaza, stare, masoara, canvas, get gata() { return st.gata; } };
}
