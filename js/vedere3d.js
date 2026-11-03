/* Vederea 3D a unui perete: aceleași elemente ca desenul 2D, cu adâncimea lor („adanc”), privite din față,
   oblic din stânga, oblic din dreapta sau de sus. Se încarcă doar la primul clic pe „3D” (js/desen.js), cu
   three.js din js/vendor/three. Unitățile sunt cm: x de-a lungul peretelui (ca în desen), y în sus de la
   pardoseala finită, z spre cameră (0 = fața peretelui).
   Folosire: const v = creeaza(cutie, { ales(id, shift), peste(id, ev) }); v.arata(date); v.unghi('st').
   date = { cheie, vedere, L, H, A, elemente, sel, cote }; „cote” e lista cotelor sau o funcție fata(id) → listă,
   chemată după ce scena e gata (fata(id) = z-ul feței din față a elementului, în cm). O cotă:
   { a: [x, y, z], b: [x, y, z], text, tip: 'element' | 'intre' }. */
import * as THREE from './vendor/three/three.module.min.js';
import { OrbitControls } from './vendor/three/OrbitControls.js';
import { RoomEnvironment } from './vendor/three/RoomEnvironment.js';
import { RoundedBoxGeometry } from './vendor/three/RoundedBoxGeometry.js';

import { CULORI, FLUIDE, STRAT, ORDINE, canvasTex, texPerforatii, texFaianta, material, finisajMat } from './materiale3d.js';
import { modeleaza } from './modele3d.js';

// adâncimea implicită pe tip, când elementul nu are „adanc” (cm)
export const ADANC = { plinta: 1.5, 'banda-led': 1, faianta: 1.2, masca: 10, mobilier: 2, corp: 40, dulap: 55, riflaj: 2, tv: 5,
  calorifer: 10, ac: 20, electrocasnic: 55, sanitar: 20, stalp: 20, grinda: 20, roca: 4, usa: 4, fereastra: 3, cutie: 6, tub: 2,
  teava: 3, birou: 60, 'birou-capat': 60, semineu: 30 };
// piesele pe care stă un element mai subțire decât ele (oglinda pe mască, televizorul pe riflaj, faianța pe mască)
const GAZDE = ['masca', 'placare', 'mobilier', 'corp', 'dulap', 'riflaj', 'roca', 'birou', 'birou-capat', 'stalp', 'calorifer', 'tv', 'faianta'];
// încastrate: fața lor stă la fața gazdei (cuptorul în corpul de jos, focarul în mască)
const SPRE_FATA = ['semineu', 'electrocasnic'];
// piese care, montate în alt element („in”) și acoperite de el, rămân ascunse: se arată doar conturul
const NU_INCHISE = ['semineu', 'electrocasnic', 'nisa', 'banda-led', 'perforatii', 'faianta', 'tub', 'cutie', 'teava'];
// culorile 2D ale pieselor fără finisaj (js/desen.js, DESEN)
const CUL2D = { mobilier: CULORI.mobilier, dulap: '#b98b55', corp: CULORI.alb, riflaj: '#ddd0bc', rost: '#a8967d', birou: '#a99080', semineu: '#1c1c1c', doza: '#f4f2ee' };
const CUL_SEL = '#b42318', CUL_INTRE = '#1d4ed8';

const adancim = e => e.adanc != null ? e.adanc : (ADANC[e.tip] != null ? ADANC[e.tip] : 2);
const solid = e => !e.ascuns && !e.punct && e.lat && e.inalt && e.finisaj !== 'incastrat';
// dreptunghiul elementului pe perete; punctele au 6 × 6 cm
const dr = e => e.punct || !e.lat || !e.inalt ? [e.x - 3, e.x + 3, e.h - 3, e.h + 3] : [e.x, e.x + e.lat, e.h, e.h + e.inalt];
const acopera = (c, e) => { const a = dr(c), b = dr(e); return a[0] <= b[0] + .01 && a[1] >= b[1] - .01 && a[2] <= b[2] + .01 && a[3] >= b[3] - .01; };
const atinge = (c, e) => { const a = dr(c), b = dr(e); return Math.min(a[1], b[1]) - Math.max(a[0], b[0]) > .2 && Math.min(a[3], b[3]) - Math.max(a[2], b[2]) > .2; };

// Fața pe care stă elementul (z, cm). Gazdele: elementul în care e montat („in”), cele din spatele lui („inFata”),
// care îl ating, și piesele de mobilă, gips sau faianță care îl acoperă întreg. Un element subțire (cel mult 8 cm)
// stă pe fața gazdei (oglinda pe mască, faianța pe mască, riflajul pe calorifer); unul mai adânc pornește de la
// perete (dulapul din fața stâlpului); cuptorul și șemineul sunt încastrate, cu fața la fața gazdei.
export function fataGazdei(e, els, memo = new Map()) {
  if (memo.has(e)) return memo.get(e);
  memo.set(e, 0);
  const ids = [].concat(e.inFata || []);
  let z = 0;
  for (const c of els) {
    // un element care îl are pe e în „inFata” stă în fața lui, deci nu îi poate fi gazdă (oglinda OG1 pe masca MO1)
    if (c === e || !solid(c) || !GAZDE.includes(c.tip) || c.vedereaPrincipala || [].concat(c.inFata || []).includes(e.id)) continue;
    const gazda = c.id === e.in || (ids.includes(c.id) && atinge(c, e)) || (!e.inFata && acopera(c, e) && c.tip !== 'tv' && c.tip !== 'calorifer');
    if (gazda) z = Math.max(z, baza(c, els, memo) + zFata(c));
  }
  memo.set(e, z);
  return z;
}
// Fața pe care stă un model detaliat (js/modele3d.js): elementul în care e montat („in”) sau cel mai adânc element
// de mobilă sau gips care îl acoperă întreg. Modelele care stau în acel element au z negativ față de fața lui.
export const fataLa = (e, els) => {
  if (e.in) { const c = els.find(x => x.id === e.in); if (c && c.adanc) return c.adanc; }
  let z = 0;
  for (const c of els) {
    if (c === e || !c.lat || !c.inalt || !c.adanc || !['masca', 'mobilier', 'corp', 'dulap', 'riflaj', 'roca', 'birou'].includes(c.tip) || c.ascuns) continue;
    const x0 = e.lat ? e.x : e.x - .1, x1 = e.lat ? e.x + e.lat : e.x + .1, y0 = e.inalt ? e.h : e.h - .1, y1 = e.inalt ? e.h + e.inalt : e.h + .1;
    if (c.x <= x0 + .01 && c.x + c.lat >= x1 - .01 && c.h <= y0 + .01 && c.h + c.inalt >= y1 - .01) z = Math.max(z, c.adanc);
  }
  // caloriferul din spatele unui element („inFata”) nu îl acoperă, dar îl împinge în față: riflajul RF2 din bucătărie
  // stă în fața caloriferului CF1, nu în spatele lui
  const ids = [].concat(e.inFata || []);
  for (const c of els) if (c.tip === 'calorifer' && ids.includes(c.id) && atinge(c, e)) z = Math.max(z, zFata(c));
  return z;
};
// z-ul de la care pornește elementul și cât iese în față
const zFata = c => c.tip === 'calorifer' ? 4 + Math.min(adancim(c), 12) : adancim(c);
export function baza(e, els, memo = new Map()) {
  const hf = fataGazdei(e, els, memo);
  if (!hf) return 0;
  if (e.punct || !e.lat || !e.inalt) return hf;
  const d = adancim(e), g = e.in && els.find(x => x.id === e.in);
  if (g && !acopera(g, e)) return 0;     // „in” fără să fie acoperit (chiuveta trece prin blat): pornește de la perete
  if (SPRE_FATA.includes(e.tip)) return Math.max(0, hf + .2 - d);
  return d <= 8 && d < hf - .5 ? hf : 0;
}
// un element montat în altul care îl acoperă întreg (centrala în dulap): z-ul feței gazdei, altfel null
function inchisIn(e, els) {
  const g = e.in && els.find(x => x.id === e.in);
  if (!g || !solid(g) || e.punct || !e.lat || !e.inalt || NU_INCHISE.includes(e.tip) || !acopera(g, e)) return null;
  return baza(g, els) + zFata(g);
}

// ---------------------------------------------------------------- vederea
export function creeaza(cutie, api) {
  const canvas = document.createElement('canvas');
  canvas.className = 'v3d-canvas';
  canvas.setAttribute('aria-label', 'Vederea 3D a peretelui');
  cutie.appendChild(canvas);
  const strat2 = document.createElement('div');
  strat2.className = 'v3d-etichete';
  cutie.appendChild(strat2);
  // fundalul transparent lasă să se vadă culoarea din CSS (.v3d), cu varianta pentru tema întunecată
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
  const camera = new THREE.PerspectiveCamera(45, 1.6, 5, 8000);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = .08;
  controls.maxPolarAngle = Math.PI * .62; controls.minDistance = 25; controls.maxDistance = 7000;
  controls.zoomToCursor = true;

  const soare = new THREE.DirectionalLight('#fff1dc', 1.7);
  soare.castShadow = true; soare.shadow.mapSize.set(2048, 2048);
  soare.shadow.bias = -0.0004; soare.shadow.normalBias = .6;
  scene.add(soare, soare.target);
  scene.add(new THREE.HemisphereLight('#ffffff', '#ddd6cb', 1.1), new THREE.AmbientLight('#ffffff', .5));

  const lume = new THREE.Group(); scene.add(lume);
  const marcaj = new THREE.Group(); scene.add(marcaj);
  const gCote = new THREE.Group(); scene.add(gCote);
  const S = { cheie: '', vedere: '', L: 400, H: 250, A: 300, Z: 60, unghi: 'st', grupuri: new Map(), anim: [], sel: [], cote: [], semnCote: '', liber: false };
  let laterale = [], tavane = [], tavanFals = [];
  let murdar = true;
  const cere = () => { murdar = true; };

  // ---------------------------------------------------------------- piesele
  function cutieMesh(parinte, mat, x0, x1, y0, y1, z0, z1, opt = {}) {
    const w = Math.max(.05, x1 - x0), h = Math.max(.05, y1 - y0), d = Math.max(.05, z1 - z0);
    const r = opt.rotunjit ? Math.min(opt.rotunjit, w / 2.2, h / 2.2, d / 2.2) : 0;
    const geo = r > .05 ? new RoundedBoxGeometry(w, h, d, 3, r) : new THREE.BoxGeometry(w, h, d);
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x0 + w / 2, y0 + h / 2, z0 + d / 2);
    m.castShadow = opt.umbra !== false; m.receiveShadow = true;
    parinte.add(m);
    return m;
  }
  const cilindru = (g, r, L, mat, x, y, z, ax) => {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(r, r, L, 24), mat);
    if (ax === 'z') c.rotation.x = Math.PI / 2; else if (ax === 'x') c.rotation.z = Math.PI / 2;
    c.position.set(x, y, z); c.castShadow = true; c.receiveShadow = true; g.add(c);
    return c;
  };
  // un element ascuns (în spatele mobilei sau în perete): doar conturul, văzut prin piesele din fața lui
  function fantoma(g, e, z0, z1) {
    const w = e.lat || 6, h = e.inalt || 6, x0 = e.lat ? e.x : e.x - 3, y0 = e.inalt ? e.h : e.h - 3;
    const geo = new THREE.BoxGeometry(w, h, Math.max(.5, z1 - z0));
    const l = new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: STRAT[e.strat] || '#57534e', transparent: true, opacity: .75, depthTest: false }));
    l.position.set(x0 + w / 2, y0 + h / 2, (z0 + z1) / 2); l.renderOrder = 5; g.add(l);
    const p = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ visible: false })); p.position.copy(l.position); g.add(p);
    g.userData.fantoma = true;
  }
  // oglinda: gradientul din desenul 2D, cu reflexii slabe; oglinda metalică ar reflecta camera de mediu, închisă la culoare
  let texOglinda = null;
  function matOglinda() {
    if (!texOglinda) texOglinda = canvasTex(64, 64, (c, W, H) => {
      const gr = c.createLinearGradient(0, H, W, 0);
      gr.addColorStop(0, '#eef3f6'); gr.addColorStop(.5, '#cfd9df'); gr.addColorStop(1, '#e3eaee');
      c.fillStyle = gr; c.fillRect(0, 0, W, H);
    });
    return new THREE.MeshStandardMaterial({ map: texOglinda, metalness: .3, roughness: .1, envMapIntensity: 1.5 });
  }
  // Nișa: o adâncitură în fața gazdei. Gura ei scrie în stencil, iar fețele dinăuntru (cele din spate ale cutiei
  // nișei) se desenează doar acolo, peste fața gazdei; o cutie convexă privită din afară nu are fețe suprapuse.
  let stencil = 0;
  function nisa(g, e, zf, d) {
    const w = e.lat, h = e.inalt, dd = Math.max(1, Math.min(d, zf + 13)), ref = (stencil = stencil % 250 + 1);
    const gura = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false,
      stencilWrite: true, stencilRef: ref, stencilFunc: THREE.AlwaysStencilFunc, stencilZPass: THREE.ReplaceStencilOp }));
    gura.position.set(e.x + w / 2, e.h + h / 2, zf + .04); gura.renderOrder = 1; g.add(gura);
    const mat = new THREE.MeshStandardMaterial({ color: '#c4bcae', roughness: .9, side: THREE.BackSide, depthTest: false, depthWrite: false,
      stencilWrite: true, stencilRef: ref, stencilFunc: THREE.EqualStencilFunc, stencilZPass: THREE.KeepStencilOp });
    const inaun = new THREE.Mesh(new THREE.BoxGeometry(w, h, dd), mat);
    inaun.position.set(e.x + w / 2, e.h + h / 2, zf - dd / 2); inaun.renderOrder = 2; g.add(inaun);
    g.userData.portal = true;
  }
  // faianța: bucăți dreptunghiulare în jurul golurilor (nișe, ferestre), fiecare cu rosturile aliniate la „pornire”
  function bucatiFaianta(e) {
    const x0 = e.x, x1 = e.x + e.lat, y0 = e.h, y1 = e.h + e.inalt, gol = e.goluri || [], out = [];
    const ys = [...new Set([y0, y1, ...gol.flatMap(o => [o.h, o.h + o.inalt])].filter(y => y >= y0 && y <= y1))].sort((a, b) => a - b);
    for (let i = 0; i + 1 < ys.length; i++) {
      const a = ys[i], b = ys[i + 1]; if (b - a < .05) continue;
      const ocupat = gol.filter(o => o.h < b - .01 && o.h + o.inalt > a + .01).map(o => [Math.max(x0, o.x), Math.min(x1, o.x + o.lat)]).filter(([p, q]) => q > p).sort((p, q) => p[0] - q[0]);
      let x = x0;
      for (const [p, q] of ocupat) { if (p > x + .05) out.push([x, p, a, b]); x = Math.max(x, q); }
      if (x1 > x + .05) out.push([x, x1, a, b]);
    }
    return out;
  }
  const contur = (m, c = '#8f897f') => { const l = new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry), new THREE.LineBasicMaterial({ color: c, transparent: true, opacity: .8 })); m.add(l); return m; };
  // fața din lateral a unei piese văzute din față pe alt perete („vedereaPrincipala”): doar volumul, în culoarea ei
  function matLateral(e, w, h) {
    if (e.tip === 'tv' || e.tip === 'semineu') return material('negru');
    if (e.tip === 'sanitar') return e.finisaj && CULORI[e.finisaj] ? material(e.finisaj) : e.obiect === 'chiuveta' || e.obiect === 'baterie' ? material('inox') : material('ceramica');
    if (e.tip === 'electrocasnic') return e.finisaj === 'negru' ? material('negru') : material('inox');
    if (['masca', 'grinda', 'stalp', 'placare'].includes(e.tip)) return material('perete', w, h);
    if (e.tip === 'roca') return material('roca', w, h);
    return matMobila(e, w, h);
  }
  // mobila: cu finisaj, culoarea lui; fără finisaj, culoarea din desenul 2D
  function matMobila(e, w, h) {
    if (e.finisaj === 'oglinda') return matOglinda();
    if (e.finisaj && e.finisaj !== 'incastrat') return finisajMat(e, w, h);
    if (e.tip === 'dulap' || e.tip === 'birou' || e.tip === 'birou-capat') { const m = material('lemn', w, h); m.color.set(nuanta('#cdb38f', e.tip === 'dulap' ? CUL2D.dulap : CUL2D.birou)); return m; }
    if (e.tip === 'corp') return material('alb');
    return material(CUL2D.mobilier);
  }
  // nuanța care, înmulțită cu culoarea de bază a texturii, dă culoarea dorită
  function nuanta(baza, tinta) {
    const a = new THREE.Color(baza), b = new THREE.Color(tinta);
    return new THREE.Color(Math.min(1, b.r / a.r), Math.min(1, b.g / a.g), Math.min(1, b.b / a.b));
  }

  // Modelele detaliate (js/modele3d.js), cerute o dată pentru toate elementele peretelui; o eroare într-un model
  // lasă forma simplă. Se cer și pentru elementele ascunse sau încastrate: modelul e partea care se vede (cuva din
  // blat, sticla plitei); fără model, rămâne conturul.
  function modele(els) {
    const M = new Map();
    for (const e of els) {
      let m = null;
      try { m = modeleaza(e, { els, A: S.A, H: S.H }); } catch (err) { console.warn('modele3d:', e.id, err); }
      if (m) M.set(e, m);
    }
    return M;
  }
  // O mască plină cu exact cutia unui element modelat din fața ei (M11 pe D03) ar umple golurile modelului (focarul,
  // compartimentul AC) și i-ar acoperi fața: nu se desenează. Toleranța e 0,5 cm, iar modelul e cel puțin la fel de adânc.
  // Rezultatul: masca → elementul modelat; selecția și cotele măștii folosesc cutia modelului.
  function mastiAcoperite(els, M) {
    const ap = (a, b) => Math.abs((a || 0) - (b || 0)) <= .5, out = new Map();
    for (const [e] of M) for (const id of [].concat(e.inFata || [])) {
      const c = els.find(x => x.id === id);
      if (c && c.tip === 'masca' && ap(c.x, e.x) && ap(c.lat, e.lat) && ap(c.h, e.h) && ap(c.inalt, e.inalt) && adancim(e) >= adancim(c)) out.set(c, e);
    }
    return out;
  }

  function element(e, els, model) {
    const g = new THREE.Group(); g.userData.id = e.id; g.userData.tip = e.tip;
    const eps = (ORDINE[e.strat] || 0) * .04;
    const d = adancim(e), z0 = baza(e, els);
    const x0 = (e.x || 0) - eps, x1 = (e.x || 0) + (e.lat || 0) + eps, y0 = (e.h || 0) - eps, y1 = (e.h || 0) + (e.inalt || 0) + eps;
    const w = e.lat || 0, h = e.inalt || 0;
    const C = (mat, a, b, c, dd, za, zb, opt) => cutieMesh(g, mat, a, b, c, dd, z0 + za, z0 + zb, opt);
    const ascuns = e.ascuns || e.finisaj === 'incastrat';
    // modelul detaliat, în coordonatele elementului: originea în colțul stânga-jos, pe fața dată de fataLa; așezarea
    // față de gazdă (de exemplu mobila la fel de adâncă, mutată înapoi la perete) o face modelul
    if (model) {
      model.position.set(e.x || 0, e.h || 0, fataLa(e, els));
      model.traverse(o => { if (o.isMesh) { o.receiveShadow = true; if (!o.material.transparent && !o.userData.faraUmbra) o.castShadow = true; } });
      g.add(model); g.userData.model = true;
      return g;
    }
    if (e.punct || !e.lat || !e.inalt) {
      const x = e.x, y = e.h;
      if (ascuns) { fantoma(g, e, z0, z0 + 2); return g; }
      if (e.tip === 'priza') { C(material('alb'), x - 4, x + 4, y - 4, y + 4, 0, 1, { rotunjit: .6 }); const s = cilindru(g, 2.4, .4, material('#d9d6d0'), x, y, z0 + 1.1, 'z'); s.castShadow = false; }
      else if (e.tip === 'intrerupator') { C(material('alb'), x - 3.5, x + 3.5, y - 4.5, y + 4.5, 0, 1, { rotunjit: .6 }); C(material('#e7e4de'), x - 2.6, x + 2.6, y - 3.4, y + 3.4, 1, 1.4); }
      else if (e.tip === 'racord') { const r = e.diam ? Math.max(1.2, e.diam / 2) : 1.6; cilindru(g, r, 3, material(FLUIDE[e.fluid] || FLUIDE.rece), x, y, z0 + 1.5, 'z'); }
      else if (e.tip === 'iesire-cablu') cilindru(g, 3, .8, material('alb'), x, y, z0 + .4, 'z');
      else if (e.tip === 'spot') cilindru(g, 3, .8, material('led'), x, y, z0 + .4, 'z');
      else if (e.tip === 'doza') C(material(CUL2D.doza), x - 3.5, x + 3.5, y - 3.5, y + 3.5, 0, .6);
      else C(material('#d4d4d8'), x - 3.5, x + 3.5, y - 3.5, y + 3.5, 0, .6);
      return g;
    }
    if (ascuns && !['banda-led', 'tavan-fals'].includes(e.tip)) { fantoma(g, e, z0, z0 + Math.max(1, d)); return g; }
    const zi = inchisIn(e, els);
    if (zi != null) { fantoma(g, e, Math.max(0, zi - 2 - d), zi - 2); return g; }
    if (e.vedereaPrincipala && !['tavan-fals', 'faianta', 'banda-led', 'teava', 'tub', 'cutie'].includes(e.tip)) {
      C(matLateral(e, d, h), x0, x1, y0, y1, 0, d);
      return g;
    }
    switch (e.tip) {
      case 'tavan-fals': { const m = C(matTavan(), x0, x1, y0, y1, 0, Math.min(e.adanc || S.A, S.A), { umbra: false }); m.receiveShadow = false; tavanFals.push(m); break; }
      case 'scafa': break;   // fanta dintre grindă și tavanul fals: un gol
      case 'masca': case 'grinda': case 'stalp': case 'placare': C(material('perete', w, h), x0, x1, y0, y1, 0, d); break;
      case 'roca': C(material('roca', w, h), x0, x1, y0, y1, 0, d); break;
      case 'nisa': nisa(g, e, fataGazdei(e, els), d); break;
      case 'plinta': C(e.finisaj ? finisajMat(e, w, h) : material('negru'), x0, x1, y0, Math.max(y1, y0 + 1.5), 0, d); break;
      case 'dulap': case 'corp': {
        const fata = Math.min(1.8, d / 3), mat = (a, b) => matMobila(e, a, b);
        C(mat(w, h), x0, x1, y0, y1, 0, d - fata);
        let x = e.x;
        for (const fr of e.fronturi || [{ lat: e.lat }]) {
          const a = x, b = x + fr.lat; x = b;
          if (fr.tip === 'lateral') { C(e.finisaj ? mat(fr.lat, h) : material(e.tip === 'dulap' ? '#7d5e3b' : CULORI.alb), a, b, y0, y1, 0, d); continue; }
          C(fr.tip === 'sticla' ? material('ecran') : mat(fr.lat, h), a + .15, b - .15, y0 + .2, y1 - .2, d - fata, d);
        }
        break;
      }
      case 'riflaj': {
        const lam = e.lamela || 3, rost = e.rost || 2, n = Math.max(1, Math.round((e.lat + rost) / (lam + rost))), pas = n > 1 ? (e.lat - lam) / (n - 1) : 0;
        // rosturile: culoarea finisajului, mai închisă (ca în 2D); fără finisaj, culorile din 2D
        const fund = e.finisaj && CULORI[e.finisaj] ? material('#' + new THREE.Color(CULORI[e.finisaj]).multiplyScalar(.55).getHexString()) : material(CUL2D.rost);
        // un riflaj adânc (de exemplu cutia de sub tavan, îmbrăcată în lamele) e o cutie cu lamelele de 2 cm pe față
        const zl = d > 6 ? d - 2 : 0;
        C(fund, x0, x1, y0, y1, 0, zl || Math.min(.4, d / 3), { umbra: zl > 0 });
        const mat = e.finisaj ? finisajMat(e, lam, h) : material(CUL2D.riflaj);
        // lamelele de sub un decupaj (de exemplu sub o grindă) se opresc mai jos
        const sus = (a, b) => Math.min(e.h + e.inalt, ...(e.decupaje || []).filter(q => q.x < b && q.x + q.lat > a).map(q => q.sus));
        for (let i = 0; i < n; i++) { const a = e.x + i * pas; C(mat, a, a + lam, y0, sus(a, a + lam) + eps, zl, d); }
        break;
      }
      case 'perforatii': {
        const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: texPerforatii(e), transparent: true, depthWrite: false }));
        p.position.set(e.x + w / 2, e.h + h / 2, z0 + .15); g.add(p);
        break;
      }
      case 'faianta': {
        const p0 = e.pornire || { x: e.x, h: e.h };
        for (const [a, b, c, dd] of bucatiFaianta(e)) {
          const m = new THREE.MeshStandardMaterial({ map: texFaianta(Object.assign({}, e, { x: a, lat: b - a, h: c, inalt: dd - c, pornire: p0 })), roughness: .35, envMapIntensity: .7 });
          C(m, a, b, c, dd, 0, d, { umbra: false });
        }
        break;
      }
      case 'tv': C(material('negru'), x0, x1, y0, y1, .5, d, { rotunjit: .6 }); C(material('ecran'), e.x + .8, e.x + w - .8, e.h + .8, e.h + h - .8, d, d + .1); break;
      case 'semineu': {
        C(material(CUL2D.semineu), x0, x1, y0, y1, 0, d);
        const m = Math.min(5, w / 8);
        C(material('#070707'), e.x + m, e.x + w - m, e.h + 6, e.h + h - 5, d, d + .1);
        C(material('flacara'), e.x + w * .2, e.x + w * .8, e.h + 7, e.h + 7 + (h - 12) * .35, d + .1, d + .2, { umbra: false });
        break;
      }
      case 'ac': C(material('ac'), x0, x1, y0, y1, Math.max(0, d - 20), d, { rotunjit: 2.5 }); break;
      case 'calorifer': C(material('calorifer', w, h), x0, x1, y0, y1, 4, 4 + Math.min(d, 12), { rotunjit: .8 }); break;
      case 'electrocasnic': {
        const negru = e.finisaj === 'negru';
        C(negru ? material('negru') : material('inox'), x0, x1, y0, y1, 0, d, { rotunjit: .8 });
        if (e.aparat === 'cuptor' || e.aparat === 'microunde') { const k = Math.min(w, h) * .14; C(material('ecran'), e.x + k, e.x + w - k, e.h + k, e.h + h - 1.6 * k, d, d + .15); }
        break;
      }
      case 'sanitar': {
        const ob = e.obiect, cer = e.finisaj && CULORI[e.finisaj] ? material(e.finisaj) : material('ceramica');
        if (ob === 'wc' || ob === 'lavoar' || ob === 'boiler') C(cer, x0, x1, y0, y1, 0, d, { rotunjit: Math.min(6, h / 3) });
        else if (ob === 'chiuveta') C(e.finisaj ? finisajMat(e, w, h) : material('inox'), x0, x1, y0, y1, 0, d);
        else if (ob === 'cada' || ob === 'centrala') C(material('ceramica'), x0, x1, y0, y1, 0, d, { rotunjit: 1.5 });
        else if (ob === 'dus') C(material('sticla'), x0, x1, y0, y1, 0, Math.max(1, d), { umbra: false });
        else if (ob === 'rigola') C(material('#3a3f46'), x0, x1, y0, Math.max(y1, y0 + 1.5), 0, d);
        else if (ob === 'para-dus' || ob === 'ventilator') cilindru(g, Math.min(w, h) / 2, 2, ob === 'ventilator' ? material('alb') : material('inox'), e.x + w / 2, e.h + h / 2, z0 + 1 + (e.adanc || 0), 'z');
        else if (ob === 'clapeta') C(e.finisaj ? finisajMat(e, w, h) : material('inox'), x0, x1, y0, y1, 0, Math.max(.8, Math.min(d, 1.2)));
        else if (ob === 'rezervor' || ob === 'apometru') fantoma(g, e, z0, z0 + Math.max(1, d));
        else C(e.finisaj ? finisajMat(e, w, h) : material('inox'), x0, x1, y0, y1, 0, d);
        break;
      }
      case 'usa': {
        // tocul și foaia au contur subțire, ca liniile din 2D: altfel ușa albă nu se vede pe peretele alb
        contur(C(material('#f3f0ea'), x0, x1, 0, e.inalt, 0, 3));
        const fo = e.foaie, fx = fo ? e.x + (e.lat - fo.lat) / 2 : e.x + 4, fl = fo ? fo.lat : e.lat - 8, fi = fo ? fo.inalt : e.inalt - 4;
        if (e.sticla) { const r = Math.min(6, e.lat / 8); contur(C(material('#f6f4f0'), fx, fx + fl, 0, fi, 3, 4.2)); C(material('cer'), e.x + r, e.x + e.lat - r, r, e.inalt - r, 4.2, 4.4, { umbra: false }); }
        else contur(C(material('#faf8f4'), fx, fx + fl, 0, fi, 3, 4.2));
        C(material('negru'), fx + fl - 10, fx + fl - 4, 100, 102, 4.2, 6.5, { umbra: false });
        break;
      }
      case 'fereastra': {
        contur(C(material('alb'), x0, x1, y0, y1, 0, 3));
        const n = e.canaturi || 2, r = 5;
        for (let i = 0; i < n; i++) { const a = e.x + i * w / n, b = e.x + (i + 1) * w / n; C(material('cer'), a + r, b - r, e.h + r, e.h + h - r, 3, 3.2, { umbra: false }); }
        break;
      }
      case 'banda-led': {
        const z = Math.max(z0 - 1.5, 0) - z0;
        C(material('led'), x0, x1, y0, Math.max(y1, y0 + 1), z, z + Math.min(d, 1.5), { umbra: false });
        break;
      }
      case 'tub': case 'cutie': fantoma(g, e, z0, z0 + Math.max(1, d)); break;
      case 'teava': {
        const vert = h >= w, L = vert ? h : w;
        cilindru(g, 1.4, L, material(FLUIDE[e.fluid] || FLUIDE.rece), e.x + w / 2, e.h + h / 2, z0 + (e.adanc || 3) / 2, vert ? 'y' : 'x');
        break;
      }
      case 'birou': case 'birou-capat': C(matMobila(e, w, h), x0, x1, y0, y1, 0, d); break;
      default: C(matMobila(e, w, h), x0, x1, y0, y1, 0, d);
    }
    return g;
  }

  // Două piese cu o față în același plan și în același loc (ușa M16-S peste coloana M16, clapa peste mască) ar
  // pâlpâi. Piesa desenată mai târziu (stratul de deasupra, apoi ordinea din date) iese în față cu 0,25 cm și se
  // lărgește cu 0,12 cm pe fiecare latură, pentru fiecare piesă cu care se suprapune astfel. Modelele nu se mută.
  function despartePlanuri(lista) {
    // modelele detaliate nu se mută (își fac singure așezarea): intră primele, iar piesele simple se mută față de ele
    const ord = lista.filter(g => g.userData.model).concat(lista.filter(g => !g.userData.model));
    const cut = ord.map(g => ({ g, b: new THREE.Box3().setFromObject(g), n: 0 })).filter(x => !x.b.isEmpty() && !x.g.userData.fantoma && !x.g.userData.portal);
    const ap = (a, b) => Math.abs(a - b) < .12;
    const peste = (a0, a1, b0, b1) => Math.min(a1, b1) - Math.max(a0, b0) > .3;
    for (let i = 1; i < cut.length; i++) {
      const B = cut[i].b;
      for (let j = 0; j < i; j++) {
        const A = cut[j].b;
        const ox = peste(A.min.x, A.max.x, B.min.x, B.max.x), oy = peste(A.min.y, A.max.y, B.min.y, B.max.y), oz = peste(A.min.z, A.max.z, B.min.z, B.max.z);
        const fata = ox && oy && ap(A.max.z, B.max.z);
        const lat = oy && oz && (ap(A.min.x, B.min.x) || ap(A.max.x, B.max.x));
        const sj = ox && oz && (ap(A.min.y, B.min.y) || ap(A.max.y, B.max.y));
        if (fata || lat || sj) cut[i].n = Math.max(cut[i].n, cut[j].n + 1);
      }
      const n = cut[i].n; if (!n || cut[i].g.userData.model) { cut[i].n = 0; continue; }
      const g = cut[i].g, s = B.getSize(new THREE.Vector3()), c = B.getCenter(new THREE.Vector3());
      const kx = (s.x + .24 * n) / Math.max(s.x, .01), ky = (s.y + .24 * n) / Math.max(s.y, .01);
      g.scale.set(kx, ky, 1);
      g.position.set(c.x * (1 - kx), c.y * (1 - ky), .25 * n);
      g.updateMatrixWorld(true);
      cut[i].b.setFromObject(g);
    }
  }

  // tavanul, văzut de jos: fără umbre și cu emisie mai mare, ca să rămână deschis la culoare (lumina vine de sus)
  const matTavan = () => { const m = material('tavan'); m.emissiveIntensity = .95; return m; };

  // ---------------------------------------------------------------- camera: peretele, pardoseala, capetele, tavanul
  function camera3(L, H, A) {
    const g = new THREE.Group();
    cutieMesh(g, material('perete', L + 24, H), -12, L + 12, 0, H, -14, 0, { umbra: false });
    cutieMesh(g, material('parchet', L + 24, A), -12, L + 12, -4, 0, 0, A, { umbra: false });
    // capetele nu aruncă umbre: camera e deschisă spre privitor, lumina vine și din față
    const st = cutieMesh(g, material('perete', A, H), -12, 0, 0, H, 0, A, { umbra: false });
    const drp = cutieMesh(g, material('perete', A, H), L, L + 12, 0, H, 0, A, { umbra: false });
    const t = cutieMesh(g, matTavan(), -12, L + 12, H, H + 10, 0, A, { umbra: false });
    t.receiveShadow = false;
    laterale = [st, drp]; tavane = [t];
    return g;
  }

  function goleste(o) {
    o.traverse(x => {
      if (x.geometry) x.geometry.dispose();
      if (x.material) [].concat(x.material).forEach(m => { if (m.map) m.map.dispose(); m.dispose(); });
    });
    o.clear();
  }

  // ---------------------------------------------------------------- unghiurile: din față, oblic, de sus
  // Direcția de la țintă spre cameră și unghiul de vedere; distanța se calculează ca peretele întreg (cu capetele,
  // până la tavan și cu mobila cea mai adâncă) să încapă în cadru, cu margine pentru butoanele de peste desen.
  const UNGHIURI = { fata: [[0, 0, 1], 20], st: [[-.62, .3, 1], 45], dr: [[.62, .3, 1], 45], sus: [[0, 1.55, .78], 40] };
  function presetare(u) {
    const [dv, fov] = UNGHIURI[u] || UNGHIURI.st, dir = new THREE.Vector3(...dv).normalize();
    const { L, H, A } = S, Z = Math.min(A, Math.max(S.Z, u === 'sus' ? Math.min(A, 120) : 20));
    const T = new THREE.Vector3(L / 2, H / 2, u === 'fata' ? 0 : Z / 2);
    const vede = dir.clone().negate(), dreapta = new THREE.Vector3().crossVectors(vede, new THREE.Vector3(0, 1, 0)).normalize(), sus = new THREE.Vector3().crossVectors(dreapta, vede);
    const tY = Math.tan(fov * Math.PI / 360), tX = tY * Math.max(.4, camera.aspect), ty = tY * .86, tx = tX * .94;
    const colturi = [];
    for (const x of [-12, L + 12]) for (const y of [0, H]) for (const z of [0, Z]) colturi.push(new THREE.Vector3(x, y, z));
    // de două ori: distanța la care încap toate colțurile, apoi ținta mutată în planul ecranului, ca peretele să stea
    // la mijlocul cadrului (puțin mai sus, deasupra butoanelor de jos), nu doar să încapă
    let d = 0;
    for (let k = 0; k < 2; k++) {
      d = 0;
      for (const c of colturi) { const r = c.clone().sub(T), dz = r.dot(dir); d = Math.max(d, dz + Math.abs(r.dot(dreapta)) / tx, dz + Math.abs(r.dot(sus)) / ty); }
      d *= 1.02;
      let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
      for (const c of colturi) {
        const r = c.clone().sub(T), z = d - r.dot(dir), nx = r.dot(dreapta) / (z * tX), ny = r.dot(sus) / (z * tY);
        x0 = Math.min(x0, nx); x1 = Math.max(x1, nx); y0 = Math.min(y0, ny); y1 = Math.max(y1, ny);
      }
      T.addScaledVector(dreapta, (x0 + x1) / 2 * d * tX).addScaledVector(sus, ((y0 + y1) / 2 - .05) * d * tY);
    }
    return { p: T.clone().addScaledVector(dir, d), t: T, fov };
  }
  function unghi(u, fara) {
    S.unghi = u; S.liber = false;
    const c = presetare(u), p0 = camera.position.clone(), t0 = controls.target.clone(), f0 = camera.fov;
    if (fara || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      S.anim = []; camera.position.copy(c.p); controls.target.copy(c.t); camera.fov = c.fov; camera.updateProjectionMatrix(); controls.update(); cere(); return;
    }
    S.anim = [k => { camera.position.lerpVectors(p0, c.p, k); controls.target.lerpVectors(t0, c.t, k); camera.fov = f0 + (c.fov - f0) * k; camera.updateProjectionMatrix(); }];
    S.animStart = performance.now(); cere();
  }
  controls.addEventListener('start', () => { S.liber = true; S.anim = []; });
  controls.addEventListener('change', cere);

  // ---------------------------------------------------------------- datele peretelui
  // scena se reface doar când se schimbă cheia (peretele, straturile, varianta); camera revine la unghiul ales
  // doar când se schimbă peretele („vedere”)
  function arata(date) {
    if (date.cheie !== S.cheie) {
      S.cheie = date.cheie; S.L = date.L; S.H = date.H; S.A = date.A;
      goleste(lume); tavanFals = []; S.grupuri.clear();
      lume.add(camera3(S.L, S.H, S.A));
      const els = date.elemente, gr = [], M = modele(els), fara = mastiAcoperite(els, M);
      for (const e of els) {
        if (fara.has(e)) continue;
        const g = element(e, els, M.get(e)); lume.add(g); S.grupuri.set(e.id, g); gr.push(g);
      }
      for (const [c, e] of fara) S.grupuri.set(c.id, S.grupuri.get(e.id));
      lume.updateMatrixWorld(true);
      despartePlanuri(gr);
      // cât iese în față mobila cea mai adâncă, pentru încadrare (fără grinzile și tavanele false, care traversează camera)
      S.Z = 20;
      for (const g of gr) {
        if (['grinda', 'tavan-fals', 'scafa'].includes(g.userData.tip)) continue;
        const b = new THREE.Box3().setFromObject(g);
        if (!b.isEmpty() && b.max.z - b.min.z < S.A - 1) S.Z = Math.max(S.Z, Math.min(b.max.z, S.A));
      }
      // soarele vine din fața peretelui, din stânga, de sus; umbra acoperă tot peretele
      soare.position.set(S.L * .2 - 300, 520, 700); soare.target.position.set(S.L / 2, 80, 40);
      Object.assign(soare.shadow.camera, { left: -S.L * .8 - 150, right: S.L * .8 + 150, top: 420, bottom: -420, near: 50, far: 3000 });
      soare.shadow.camera.updateProjectionMatrix();
      marime();
      if (date.vedere !== S.vedere || !S.vedere) { S.vedere = date.vedere; unghi(S.unghi, true); }
      S.semnCote = null;
    }
    selectie(date.sel || []);
    coteaza(typeof date.cote === 'function' ? date.cote(fata) : date.cote || []);
    cere();
  }
  // z-ul feței din față a unui element, din scena construită
  function fata(id) {
    const g = S.grupuri.get(id); if (!g) return 0;
    const b = new THREE.Box3().setFromObject(g);
    return b.isEmpty() ? 0 : b.max.z;
  }
  function selectie(ids) {
    const semn = ids.join(',') + '|' + S.cheie;
    if (semn === S.semnSel) return;
    S.semnSel = semn; S.sel = ids;
    goleste(marcaj);
    const col = ids.length === 2 ? CUL_INTRE : CUL_SEL;
    ids.forEach(id => {
      const g = S.grupuri.get(id); if (!g) return;
      const b = new THREE.Box3().setFromObject(g); if (b.isEmpty()) return;
      const s = b.getSize(new THREE.Vector3()), c = b.getCenter(new THREE.Vector3());
      const geo = new THREE.BoxGeometry(s.x + 2, s.y + 2, s.z + 2);
      const f = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: .12, depthTest: false, depthWrite: false }));
      const l = new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: col, depthTest: false }));
      f.position.copy(c); l.position.copy(c); f.renderOrder = l.renderOrder = 9;
      marcaj.add(f, l);
    });
    cere();
  }

  // ---------------------------------------------------------------- cotele: linii peste tot, cu etichete HTML
  // Liniile au grosime fixă pe ecran (cilindri scalați la fiecare cadru); capetele sunt bare scurte, perpendiculare.
  const UNIT = new THREE.CylinderGeometry(1, 1, 1, 8, 1, true);
  function coteaza(lista) {
    const semn = JSON.stringify(lista);
    if (semn === S.semnCote) return;
    S.semnCote = semn;
    gCote.traverse(x => { if (x.material) x.material.dispose(); });
    gCote.clear(); strat2.textContent = ''; S.cote = [];
    for (const c of lista) {
      const a = new THREE.Vector3(...c.a), b = new THREE.Vector3(...c.b), L = a.distanceTo(b);
      const mat = new THREE.MeshBasicMaterial({ color: c.tip === 'intre' ? CUL_INTRE : CUL_SEL, depthTest: false, depthWrite: false, transparent: true });
      // o cotă de 0 cm (două elemente care se ating) are doar capătul și eticheta, ca în panou
      const ax = L < .1 ? new THREE.Vector3(1, 0, 0) : b.clone().sub(a).normalize();
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), ax);
      const bara = new THREE.Mesh(UNIT, mat); bara.quaternion.copy(q); bara.position.copy(a).add(b).multiplyScalar(.5); bara.renderOrder = 12;
      // capetele: perpendiculare pe cotă, în planul peretelui (pentru cotele de adâncime, pe verticală)
      const p = Math.abs(ax.y) > .9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
      const qp = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), p);
      const capete = [a, b].map(v => { const m = new THREE.Mesh(UNIT, mat); m.quaternion.copy(qp); m.position.copy(v); m.renderOrder = 12; return m; });
      bara.visible = L >= .1;
      gCote.add(bara, ...capete);
      const div = document.createElement('div');
      div.className = 'v3d-cota' + (c.tip === 'intre' ? ' intre' : '');
      div.textContent = c.text;
      strat2.appendChild(div);
      S.cote.push({ a, b, L, mij: a.clone().add(b).multiplyScalar(.5), bara, capete, div });
    }
    cere();
  }
  const pv = new THREE.Vector3(), pa = new THREE.Vector3(), pb = new THREE.Vector3(), pc = new THREE.Vector3();
  // cm pe pixel de ecran, la un punct din scenă
  const cmPePx = v => { pc.copy(v).applyMatrix4(camera.matrixWorldInverse); return Math.max(.01, -pc.z) * 2 * Math.tan(camera.fov * Math.PI / 360) / Math.max(1, canvas.clientHeight); };
  function aseazaCote() {
    const w = canvas.clientWidth, h = canvas.clientHeight, puse = [];
    for (const c of S.cote) {
      const k = cmPePx(c.mij);
      c.bara.scale.set(1.1 * k, c.L, 1.1 * k);
      c.capete.forEach(m => { const kk = cmPePx(m.position); m.scale.set(1.1 * kk, 12 * kk, 1.1 * kk); });
      pv.copy(c.mij).project(camera); pa.copy(c.a).project(camera); pb.copy(c.b).project(camera);
      // eticheta stă lângă mijlocul cotei, deplasată perpendicular pe ea, spre sus sau spre stânga
      const x = (pv.x + 1) / 2 * w, y = (1 - pv.y) / 2 * h;
      let nx = -(pb.y - pa.y) * h, ny = -(pb.x - pa.x) * w;
      const n = Math.hypot(nx, ny) || 1; nx /= n; ny /= n;
      if (ny > 0 || (Math.abs(ny) < .2 && nx > 0)) { nx = -nx; ny = -ny; }
      const vizibil = pv.z < 1 && pv.z > -1 && x > -20 && x < w + 20 && y > -20 && y < h + 20;
      c.div.hidden = !vizibil;
      if (!vizibil) continue;
      // o etichetă care s-ar suprapune peste una pusă deja se mută mai departe, perpendicular pe cota ei
      if (!c.mw) { c.mw = c.div.offsetWidth || 40; c.mh = c.div.offsetHeight || 18; }
      let d = 13, r;
      for (let i = 0; i < 6; i++) {
        r = { x: x + nx * d - c.mw / 2, y: y + ny * d - c.mh / 2, w: c.mw, h: c.mh };
        if (!puse.some(q => r.x < q.x + q.w + 3 && q.x < r.x + r.w + 3 && r.y < q.y + q.h + 3 && q.y < r.y + r.h + 3)) break;
        d += Math.abs(nx) > Math.abs(ny) ? c.mw * .6 + 4 : c.mh + 4;
      }
      puse.push(r);
      c.div.style.transform = `translate(${Math.round(r.x)}px, ${Math.round(r.y)}px)`;
    }
  }

  // ---------------------------------------------------------------- clic și hover: raza de la cursor
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  const seVede = o => { for (let x = o; x; x = x.parent) if (!x.visible) return false; return true; };
  function laPunct(ev) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    for (const h of ray.intersectObjects(lume.children, true)) {
      if (!seVede(h.object)) continue;
      let o = h.object; while (o && !o.userData.id) o = o.parent;
      if (o) return o.userData.id;
    }
    return null;
  }
  // clic = apăsare și ridicare cu un singur deget sau cursor, fără mișcare
  let jos = null, degete = 0;
  canvas.addEventListener('pointerdown', ev => {
    degete++;
    jos = degete === 1 ? { x: ev.clientX, y: ev.clientY, unul: true } : (jos && Object.assign(jos, { unul: false }));
    cutie.classList.add('v3d-folosit');
  });
  const ridica = ev => {
    degete = Math.max(0, degete - 1);
    if (!jos) return;
    const clic = jos.unul && ev.type === 'pointerup' && Math.hypot(ev.clientX - jos.x, ev.clientY - jos.y) <= 6;
    if (degete === 0) jos = null;
    if (clic) api.ales(laPunct(ev), ev.shiftKey);
  };
  canvas.addEventListener('pointerup', ridica);
  canvas.addEventListener('pointercancel', ridica);
  let hov = 0;
  canvas.addEventListener('pointermove', ev => {
    if (ev.pointerType !== 'mouse' || ev.buttons) return api.peste(null, ev);
    cancelAnimationFrame(hov);
    hov = requestAnimationFrame(() => { const id = laPunct(ev); canvas.style.cursor = id ? 'pointer' : ''; api.peste(id, ev); });
  });
  canvas.addEventListener('pointerleave', ev => { cancelAnimationFrame(hov); api.peste(null, ev); });

  // ---------------------------------------------------------------- desenarea
  // Se desenează doar când se schimbă ceva (camera, scena, selecția, cotele, mărimea); bucla rămâne pornită cât
  // timp vederea 3D e deschisă și se oprește cu opreste().
  function marime() {
    const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    // dacă nu s-a rotit încă, cadrul rămâne cel al unghiului ales
    if (S.cheie && !S.liber && !S.anim.length) unghi(S.unghi, true);
    cere();
  }
  const ro = new ResizeObserver(() => marime());
  ro.observe(canvas);
  let ruleaza = false;
  function bucla(now) {
    if (!ruleaza) return;
    if (S.anim.length) { const k = Math.min(1, (now - S.animStart) / 900), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; S.anim.forEach(f => f(e)); if (k >= 1) S.anim = []; murdar = true; }
    if (controls.update()) murdar = true;
    if (murdar) {
      murdar = false;
      const p = camera.position, dist = p.distanceTo(controls.target);
      camera.near = Math.max(2, dist * .06); camera.far = dist * 4 + 3000; camera.updateProjectionMatrix();
      // capetele și tavanul nu stau între cameră și perete: se ascund când camera e dincolo de ele
      if (laterale.length) { laterale[0].visible = p.x > 0; laterale[1].visible = p.x < S.L; }
      tavane.forEach(t => { t.visible = p.y < S.H - 1 && p.z < S.A && p.x > -12 && p.x < S.L + 12; });
      tavanFals.forEach(t => { t.visible = p.y < t.position.y - t.geometry.parameters.height / 2 - 1; });
      camera.updateMatrixWorld();
      aseazaCote();
      renderer.render(scene, camera);
      cutie.dataset.cadre = (+cutie.dataset.cadre || 0) + 1;
    }
    requestAnimationFrame(bucla);
  }
  function porneste() { if (ruleaza) return; ruleaza = true; marime(); murdar = true; requestAnimationFrame(bucla); }
  function opreste() { ruleaza = false; }
  // punctul de pe ecran al unui element (pentru teste și pentru etichete): mijlocul feței din față
  function proiecteaza(id) {
    const g = S.grupuri.get(id); if (!g) return null;
    const b = new THREE.Box3().setFromObject(g); if (b.isEmpty()) return null;
    const c = b.getCenter(new THREE.Vector3()); c.z = b.max.z; c.project(camera);
    const r = canvas.getBoundingClientRect();
    return { x: r.left + (c.x + 1) / 2 * r.width, y: r.top + (1 - c.y) / 2 * r.height };
  }
  // elementul de sub un punct de pe ecran (clientX, clientY), ca la clic
  const peEcran = (x, y) => laPunct({ clientX: x, clientY: y });
  return { arata, unghi, selectie, coteaza, porneste, opreste, proiecteaza, peEcran, fata, ruleaza: () => ruleaza, stare: S, canvas };
}
