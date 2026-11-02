/* Desene renovare — desfășurarea pereților din datele camerelor (window.CAMERE, din desene/data/).
   Unități: cm. Pe desen y = H − h, deci pardoseala e jos. Etichetele și cotele au mărime fixă pe ecran:
   la fiecare zoom desenul se reface cu u = cm pe pixel de ecran. La tipar u = 0,5 (scara 1:20).
   Tavanul (S.per.tip === 'tavan') se desenează cu același cod, ca plan văzut de sus: x de la peretele cu
   fereastra, h = y de la peretele TV, „H” = adâncimea camerei. La tipar, tavanul iese la scara 1:30. */
(function () {
  'use strict';

  const NS = 'http://www.w3.org/2000/svg';
  const STRATURI = [
    { id: 'gips', nume: 'Gips-carton și rocă', scurt: 'Gips', culoare: '#6f737a' },
    { id: 'mobila', nume: 'Mobilă', scurt: 'Mobilă', culoare: '#93622f' },
    { id: 'electric', nume: 'Prize, cabluri, tuburi', scurt: 'Electric', culoare: '#c0392b' },
    { id: 'led', nume: 'Lumini LED', scurt: 'LED', culoare: '#b07800' },
    { id: 'finisaje', nume: 'Faianță', scurt: 'Faianță', culoare: '#8d8270' },
    { id: 'sanitare', nume: 'Apă, scurgere și gaz', scurt: 'Apă', culoare: '#2f6f9f' },
  ];
  const STARI = {
    proiect: { nume: 'din proiect', culoare: '#6b7280' },
    propunere: { nume: 'propunere', culoare: '#2563eb' },
    'de-verificat': { nume: 'de verificat', culoare: '#d97706' },
    confirmat: { nume: 'confirmat', culoare: '#15803d' },
    masurat: { nume: 'măsurat pe șantier', culoare: '#0f766e' },
  };
  const TIPURI = {
    masca: 'mască gips-carton', nisa: 'nișă', roca: 'rocă', plinta: 'plintă', 'tavan-fals': 'tavan fals',
    placare: 'placare gips-carton', dulap: 'dulap', 'birou-capat': 'birou', birou: 'birou', mobilier: 'mobilier',
    priza: 'priză', intrerupator: 'întrerupător', 'iesire-cablu': 'capăt de cablu', tub: 'tub', 'banda-led': 'bandă LED',
    usa: 'ușă', fereastra: 'fereastră', sina: 'șină magnetică', suspendat: 'corp suspendat', spot: 'spot', scafa: 'scafă',
    grinda: 'grindă', stalp: 'stâlp', ac: 'unitate AC', doza: 'doză', calorifer: 'calorifer',
    corp: 'corp de mobilier', riflaj: 'riflaj', tv: 'televizor', semineu: 'șemineu', perforatii: 'perforații', cutie: 'cutie încastrată',
    faianta: 'faianță', sanitar: 'obiect sanitar', racord: 'racord', teava: 'țeavă', electrocasnic: 'electrocasnic',
  };
  // racordurile și țevile, după fluid
  const FLUIDE = {
    rece: { nume: 'apă rece', culoare: '#1f6fd1' },
    calda: { nume: 'apă caldă', culoare: '#d1453b' },
    scurgere: { nume: 'scurgere', culoare: '#6b5e55' },
    gaz: { nume: 'gaz', culoare: '#d9a400' },
  };
  // Detaliile cu pași de montaj vin din desene/data/detalii/ (window.DETALII) și se arată cu js/pasi.js.
  const pasiDetaliu = e => e.detaliu && window.Pasi && window.DETALII && window.DETALII[e.detaliu];
  const ETAPA = 2;          // pereții cu "etapa" mai mare sunt încă în lucru
  const LS = 'desene:';
  const STRUCTURA = { id: 'structura', nume: 'Uși și ferestre', culoare: '#57534e' };
  // ordinea în care primesc loc codurile pe desen, după cele selectate
  const PRIORITATE = { electric: 5, sanitare: 4.5, led: 4, mobila: 3, gips: 2, finisaje: 1.5, structura: 1 };
  const ic = d => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
  const ICON = {
    inapoi: ic('<path d="M15 18l-6-6 6-6"/>'),
    ajutor: ic('<circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.1-2.4 3.6"/><path d="M12 17.2h.01"/>'),
    tipar: ic('<path d="M7 8V3h10v5"/><rect x="3" y="8" width="18" height="9" rx="2"/><path d="M7 14h10v7H7z"/>'),
    plus: ic('<path d="M12 5v14M5 12h14"/>'),
    minus: ic('<path d="M5 12h14"/>'),
    tot: ic('<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>'),
    rigla: ic('<path d="M3.5 16.5l13-13 4 4-13 13z"/><path d="M8 12l2 2M11 9l2 2M14 6l2 2"/>'),
    inchide: ic('<path d="M6 6l12 12M18 6L6 18"/>'),
    cauta: ic('<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>'),
    sus: ic('<path d="M6 15l6-6 6 6"/>'),
    mesaj: ic('<path d="M20 12a8 8 0 0 1-11.8 7L4 20l1.1-4A8 8 0 1 1 20 12z"/>'),
    reda: ic('<path d="M7 5l12 7-12 7z"/>'),
    mai: ic('<circle cx="5.5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="18.5" cy="12" r="1.3"/>'),
    straturi: ic('<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>'),
    jos: ic('<path d="M6 9l6 6 6-6"/>'),
    bifa: ic('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    revizie: ic('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    soare: ic('<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>'),
    luna: ic('<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>'),
    automat: ic('<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor"/>'),
  };

  const f = n => (Math.round(n * 100) / 100).toString().replace('.', ',');
  // vedere: 'tot' (tot peretele), 'sel' (încadrat pe selecție) sau 'liber' (mutat de utilizator); contează la redimensionare
  // masura: modul „Măsoară”: primul element ales e punctul de pornire, următorul ales dă distanța
  // meniu: meniul deschis din bară ('pereti', 'straturi', 'mai') sau null
  const S = { cam: null, per: null, viz: {}, sel: [], masura: false, view: null, vedere: 'tot', dim: null, print: false, svg: null, fitS: 1, raf: 0,
    panou: 'mic', cauta: '', selPanou: '', var: {}, meniu: null };
  // adresa publică a desenelor, pentru linkurile trimise echipei
  const SITE = 'https://tatarigacristian.github.io/renovare-desene/';

  function el(tag, a, parent, text) {
    const e = document.createElementNS(NS, tag);
    for (const k in a) if (a[k] !== undefined && a[k] !== null) e.setAttribute(k, a[k]);
    if (text !== undefined) e.textContent = text;
    if (parent) parent.appendChild(e);
    return e;
  }
  function h(tag, a, parent, html) {
    const e = document.createElement(tag);
    for (const k in a) e.setAttribute(k, a[k]);
    if (html !== undefined) e.innerHTML = html;
    if (parent) parent.appendChild(e);
    return e;
  }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const NSS = { 'vector-effect': 'non-scaling-stroke' };
  const cunoscut = e => e.pozitie !== 'necunoscuta';
  // „inFata”: codul sau lista de coduri ale elementelor din spatele acestuia (nu se raportează ca suprapunere)
  const inFataDe = (m, id) => [].concat(m.inFata || []).includes(id);
  const strat = id => STRATURI.find(s => s.id === id);
  // doar straturile care au elemente în cameră (în living nu apar „Faianță” și „Apă”)
  const straturiCamera = () => STRATURI.filter(s => vederi().some(v => v.elemente.some(e => e.strat === s.id)));

  // ---------------------------------------------------------------- modele de umplere
  function defs(svg) {
    const d = el('defs', {}, svg);
    const pat = (id, w, hh, kids) => { const p = el('pattern', { id, width: w, height: hh, patternUnits: 'userSpaceOnUse' }, d); kids(p); };
    pat('p-zid', 4, 4, p => { el('rect', { width: 4, height: 4, fill: '#d6d3cd' }, p); el('path', { d: 'M0,4 L4,0', stroke: '#9b968d', 'stroke-width': .5 }, p); });
    pat('p-tavan', 3, 3, p => { el('rect', { width: 3, height: 3, fill: '#eceae6' }, p); el('path', { d: 'M0,3 L3,0', stroke: '#b5b0a7', 'stroke-width': .35 }, p); });
    pat('p-roca', 26, 22, p => {
      el('rect', { width: 26, height: 22, fill: '#d8cdbd' }, p);
      ['M0,5 C6,2 10,9 17,5 S24,3 26,6', 'M0,14 C5,11 9,17 15,13 S22,12 26,15', 'M3,20 C8,18 12,22 19,19'].forEach(dd =>
        el('path', { d: dd, fill: 'none', stroke: '#b3a48d', 'stroke-width': .8 }, p));
    });
    // faianța cu model liniar (Sand Moon STR): striații fine pe verticală
    pat('p-str', 3, 10, p => { el('rect', { width: 3, height: 10, fill: '#e3dbcd' }, p); el('line', { x1: 1, y1: 0, x2: 1, y2: 10, stroke: '#cfc4b2', 'stroke-width': .35 }, p); });
    pat('p-lemn', 30, 7, p => { el('rect', { width: 30, height: 7, fill: '#b98b55' }, p); el('path', { d: 'M0,3 C10,2 20,4.5 30,3', fill: 'none', stroke: '#a3773f', 'stroke-width': .5 }, p); });
    pat('p-riflaj', 2.6, 10, p => { el('rect', { width: 2.6, height: 10, fill: '#a99080' }, p); el('line', { x1: .3, y1: 0, x2: .3, y2: 10, stroke: '#7c6556', 'stroke-width': .6 }, p); });
    // PAL H1775 ST12 Nuc Parona (legenda A.16): fibra pe verticală la panourile înalte, pe orizontală la fronturile late
    pat('p-nuc-v', 16, 64, p => {
      el('rect', { width: 16, height: 64, fill: '#c9a57b' }, p);
      ['M3,0 C2,20 4.5,40 3,64', 'M8.5,0 C9.5,22 7.5,42 9,64', 'M13,0 C12.2,18 14,44 12.6,64'].forEach(dd =>
        el('path', { d: dd, fill: 'none', stroke: '#b08a5e', 'stroke-width': .45 }, p));
      el('ellipse', { cx: 6, cy: 30, rx: .5, ry: 1.1, fill: '#8e6a44', opacity: .3 }, p);
    });
    pat('p-nuc-o', 64, 12, p => {
      el('rect', { width: 64, height: 12, fill: '#c9a57b' }, p);
      ['M0,3 C20,2 40,4.5 64,3', 'M0,8.5 C22,9.5 42,7.5 64,9'].forEach(dd =>
        el('path', { d: dd, fill: 'none', stroke: '#b08a5e', 'stroke-width': .45 }, p));
      el('ellipse', { cx: 30, cy: 6, rx: 1.1, ry: .5, fill: '#8e6a44', opacity: .3 }, p);
    });
    pat('p-granit', 7, 7, p => {
      el('rect', { width: 7, height: 7, fill: '#141414' }, p);
      [[1, 1.5, '#4d4d4d'], [4.5, 2.6, '#2f2f2f'], [2.6, 5, '#5c5c5c'], [6, 6, '#3a3a3a']].forEach(([cx, cy, c]) => el('circle', { cx, cy, r: .45, fill: c }, p));
    });
    const grad = (id, a, stops) => { const gr = el('linearGradient', Object.assign({ id }, a), d); stops.forEach(([o, c, op]) => el('stop', { offset: o, 'stop-color': c, 'stop-opacity': op === undefined ? 1 : op }, gr)); };
    grad('g-ecran', { x1: 0, y1: 0, x2: 1, y2: 1 }, [[0, '#2b3038'], [.55, '#0e1013'], [1, '#050607']]);
    grad('g-inox', { x1: 0, y1: 0, x2: 1, y2: 0 }, [[0, '#d5d8db'], [.5, '#eef0f1'], [1, '#c4c8cc']]);
    grad('g-oglinda', { x1: 0, y1: 0, x2: 1, y2: 1 }, [[0, '#eef3f6'], [.5, '#cfd9df'], [1, '#e3eaee']]);
    grad('g-flacara', { x1: 0, y1: 1, x2: 0, y2: 0 }, [[0, '#ff6a00'], [.45, '#ffb347'], [1, '#ffe08a', 0]]);
    const fl = el('filter', { id: 'f-glow', x: '-200%', y: '-10%', width: '500%', height: '120%' }, d);
    el('feGaussianBlur', { stdDeviation: 2.4 }, fl);
  }

  // ---------------------------------------------------------------- elemente
  // finisajele din legendele arhitectei; „lat” alege direcția fibrei la Nuc Parona
  const FINISAJE = {
    nuc: { nume: 'PAL H1775 ST12 Nuc Parona', stroke: '#7a5a3a' },
    bej: { nume: 'U156 Bej nisip, mat', fill: '#ebe2d3', stroke: '#a8987f' },
    alb: { nume: 'alb', fill: '#f4f2ee', stroke: '#a39d93' },
    negru: { nume: 'negru', fill: '#1f1f1f', stroke: '#000' },
    oglinda: { nume: 'oglindă', fill: 'url(#g-oglinda)', stroke: '#7d8a93' },
    inox: { nume: 'inox', fill: 'url(#g-inox)', stroke: '#6b7280' },
    p751: { nume: 'MDF vopsit San Marco P751 Paris', fill: '#8a7b75', stroke: '#5e524d' },
    p722: { nume: 'vopsit San Marco P722 Alloro (profil ORAC W109 Valley)', fill: '#929f8e', stroke: '#6b7768' },
    'sand-moon': { nume: 'NOVABELL Sand Moon', fill: '#e9e3d8', stroke: '#a89c88' },
    blat: { nume: 'blatul bucătăriei', fill: '#d8ccb9', stroke: '#8f8170' },
  };
  function finisaj(e, lat) {
    const fz = FINISAJE[e.finisaj] || FINISAJE.alb;
    const fill = e.finisaj === 'nuc' ? ((lat || e.lat) > e.inalt ? 'url(#p-nuc-o)' : 'url(#p-nuc-v)') : fz.fill;
    return { fill, stroke: fz.stroke, 'stroke-width': .9 };
  }
  function rect(g, x, h0, w, hh, H, a) {
    return el('rect', Object.assign({ x, y: H - h0 - hh, width: w, height: hh }, NSS, a), g);
  }
  const DESEN = {
    masca(g, e, H) { rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: '#ebe7e0', stroke: '#a39d93', 'stroke-width': 1 }); },
    placare(g, e, H) { rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: 'url(#p-zid)', 'fill-opacity': .6, stroke: '#8f8a82', 'stroke-width': 1, 'stroke-dasharray': '5 3' }); },
    nisa(g, e, H) {
      [e.x, e.x + e.lat].forEach(x => el('line', Object.assign({ x1: x, y1: H - e.h, x2: x, y2: H - e.h - e.inalt, stroke: '#57534e', 'stroke-width': 1.1, 'stroke-dasharray': '7 4' }, NSS), g));
    },
    roca(g, e, H) { rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: 'url(#p-roca)', stroke: '#8a6d63', 'stroke-width': 1.2 }); },
    plinta(g, e, H) { rect(g, e.x, e.h, e.lat, Math.max(e.inalt, 1.5), H, e.finisaj ? finisaj(e) : { fill: '#1f1f1f' }); },
    'tavan-fals'(g, e, H) {
      rect(g, e.x, e.h, e.lat, e.inalt, H, S.per.tip === 'tavan'
        ? { fill: '#ece9e4', 'fill-opacity': .45, stroke: '#8f8a82', 'stroke-width': 1.1, 'stroke-dasharray': '7 4' }
        : { fill: 'url(#p-tavan)', stroke: '#a39d93', 'stroke-width': 1 });
    },
    dulap(g, e, H) {
      let x = e.x;
      for (const fr of e.fronturi || [{ lat: e.lat, tip: 'lemn' }]) {
        const a = fr.tip === 'sticla' ? { fill: '#2b1d24', 'fill-opacity': .92 } : fr.tip === 'lateral' ? { fill: '#7d5e3b' } : { fill: 'url(#p-lemn)' };
        rect(g, x, e.h, fr.lat, e.inalt, H, Object.assign({ stroke: '#5c4630', 'stroke-width': .8 }, a));
        if (fr.tip === 'lemn') {   // semnul de ușă, ca în planșele arhitectei
          el('path', Object.assign({ d: `M${x},${H - e.h} L${x + fr.lat},${H - e.h - e.inalt / 2} L${x},${H - e.h - e.inalt}`, fill: 'none', stroke: '#7a3b2e', 'stroke-width': .7, 'stroke-dasharray': '6 4', opacity: .6 }, NSS), g);
        }
        x += fr.lat;
      }
    },
    'birou-capat'(g, e, H) { rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: 'url(#p-riflaj)', stroke: '#5f4a3c', 'stroke-width': 1 }); },
    birou(g, e, H) { DESEN['birou-capat'](g, e, H); },
    mobilier(g, e, H) {
      rect(g, e.x, e.h, e.lat, e.inalt, H, e.finisaj ? finisaj(e) : { fill: '#cdb79c', stroke: '#6b5440', 'stroke-width': 1 });
      if (e.finisaj !== 'oglinda') return;
      // reflexii: două linii oblice paralele, în treimea de sus
      const y0 = H - e.h - e.inalt, k = Math.min(e.lat, e.inalt) * .5;
      [[.3, 1], [.42, .55]].forEach(([f, op]) => el('line', { x1: e.x + e.lat * f, y1: y0 + e.inalt * .12, x2: e.x + e.lat * f + k * .5, y2: y0 + e.inalt * .12 + k * .5,
        stroke: '#fff', 'stroke-width': 1.6, opacity: op, 'vector-effect': 'non-scaling-stroke', 'pointer-events': 'none' }, g));
    },
    // corp de mobilier cu fronturi fără mâner, de la stânga
    corp(g, e, H) {
      let x = e.x;
      for (const fr of e.fronturi || [{ lat: e.lat }]) {
        rect(g, x, e.h, fr.lat, e.inalt, H, finisaj(e, fr.lat));
        x += fr.lat;
      }
    },
    // lamele verticale, distribuite egal pe lățime; între ele se vede umbra
    riflaj(g, e, H) {
      const lam = e.lamela || 3, rost = e.rost || 2;
      const n = Math.max(1, Math.round((e.lat + rost) / (lam + rost))), pas = n > 1 ? (e.lat - lam) / (n - 1) : 0;
      // cu finisaj: lamelele în culoarea lui, rosturile în culoarea mai închisă a conturului
      const fz = e.finisaj && FINISAJE[e.finisaj], lamA = fz ? finisaj(e, lam) : { fill: '#ddd0bc', stroke: '#bfae95' };
      rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: fz ? fz.stroke : '#a8967d' });
      for (let i = 0; i < n; i++) rect(g, e.x + i * pas, e.h, lam, e.inalt, H, Object.assign({}, lamA, { 'stroke-width': .5 }));
      rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: 'none', stroke: '#8a7861', 'stroke-width': 1 });
    },
    tv(g, e, H) {
      const b = Math.min(1.2, e.lat / 20), y = H - e.h - e.inalt;
      rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: '#0b0b0c', stroke: '#000', 'stroke-width': 1.2, rx: .8 });
      rect(g, e.x + b, e.h + b, e.lat - 2 * b, e.inalt - 2 * b, H, { fill: 'url(#g-ecran)' });
      el('path', { d: `M${e.x + b},${y + b} L${e.x + b + e.lat * .34},${y + b} L${e.x + b + e.lat * .1},${H - e.h - b} L${e.x + b},${H - e.h - b} Z`, fill: '#fff', opacity: .05 }, g);
    },
    semineu(g, e, H) {
      const m = Math.min(5, e.lat / 8), x0 = e.x + m, x1 = e.x + e.lat - m, jos = H - e.h - 6, sus = H - e.h - e.inalt + 5;
      rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: 'url(#p-granit)', stroke: '#000', 'stroke-width': 1.1 });
      el('rect', Object.assign({ x: x0, y: sus, width: x1 - x0, height: jos - sus, fill: '#070707', stroke: '#3d3d3d', 'stroke-width': .8 }, NSS), g);
      // flăcările arzătorului, ca să se recunoască focarul
      const w = x1 - x0, fl = [[.18, .55], [.36, .85], [.52, 1], [.68, .8], [.84, .5]];
      const d = fl.map(([k, s]) => { const cx = x0 + w * k, hh = (jos - sus) * .5 * s, r = w * .06;
        return `M${cx - r},${jos} C${cx - r},${jos - hh * .45} ${cx - r * .2},${jos - hh * .6} ${cx},${jos - hh} C${cx + r * .2},${jos - hh * .6} ${cx + r},${jos - hh * .45} ${cx + r},${jos} Z`; }).join(' ');
      el('path', { d, fill: 'url(#g-flacara)', opacity: .9 }, g);
      el('rect', Object.assign({ x: x0 + w * .1, y: jos - 1.2, width: w * .8, height: 1.2, fill: '#5b5b5b' }, NSS), g);
    },
    perforatii(g, e, H) {
      const n = e.n || 1, r = (e.diam || 3) / 2, pas = n > 1 ? (e.lat - 2 * r) / (n - 1) : 0, cy = H - e.h - e.inalt / 2;
      rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: 'transparent' });
      for (let i = 0; i < n; i++) el('circle', { cx: e.x + r + i * pas, cy, r, fill: '#2a2119' }, g);
    },
    // cutie încastrată în perete (de exemplu suportul TV): se vede și peste televizor
    cutie(g, e, H) { rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: '#fff', 'fill-opacity': .06, stroke: '#a1a1aa', 'stroke-width': 1.1, 'stroke-dasharray': '4 3' }); },
    // tub încastrat: două linii întrerupte pe lungime
    tub(g, e, H) {
      rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: 'transparent' });
      const vert = e.inalt >= e.lat, a = { stroke: '#c0392b', 'stroke-width': .9, 'stroke-dasharray': '6 4' };
      if (vert) [e.x, e.x + e.lat].forEach(x => linie(g, x, H - e.h, x, H - e.h - e.inalt, a.stroke, a['stroke-width']).setAttribute('stroke-dasharray', a['stroke-dasharray']));
      else [e.h, e.h + e.inalt].forEach(hh => linie(g, e.x, H - hh, e.x + e.lat, H - hh, a.stroke, a['stroke-width']).setAttribute('stroke-dasharray', a['stroke-dasharray']));
    },
    // "sticla": true = ușă cu geam (ușa de balcon): rama de ~6 cm, cu geamul în interior
    usa(g, e, H) {
      rect(g, e.x, 0, e.lat, e.inalt, H, { fill: '#f3f0ea', stroke: '#4b4b4b', 'stroke-width': 1.2 });
      if (e.sticla) { const r = Math.min(6, e.lat / 8); rect(g, e.x + r, r, e.lat - 2 * r, e.inalt - 2 * r, H, { fill: '#dce9f4', stroke: '#4b4b4b', 'stroke-width': .8 }); }
      el('path', Object.assign({ d: `M${e.x},${H} L${e.x + e.lat / 2},${H - e.inalt} L${e.x + e.lat},${H}`, fill: 'none', stroke: '#777', 'stroke-width': .8, 'stroke-dasharray': '6 4' }, NSS), g);
    },
    // "canaturi": câte geamuri are fereastra (implicit 2, cu montantul la mijloc); 1 = un singur geam
    fereastra(g, e, H) {
      rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: '#dce9f4', stroke: '#4b4b4b', 'stroke-width': 1.2 });
      const n = e.canaturi || 2;
      for (let i = 1; i < n; i++) el('line', Object.assign({ x1: e.x + e.lat * i / n, y1: H - e.h, x2: e.x + e.lat * i / n, y2: H - e.h - e.inalt, stroke: '#4b4b4b', 'stroke-width': .8 }, NSS), g);
    },
    priza(g, e, H, u) {
      const da = e.pozitie === 'aprox' ? '3 2' : null;
      el('rect', Object.assign({ x: e.x - 4, y: H - e.h - 4, width: 8, height: 8, fill: '#fff', stroke: '#c0392b', 'stroke-width': 1.4, 'stroke-dasharray': da }, NSS), g);
      el('circle', Object.assign({ cx: e.x, cy: H - e.h, r: 2.6, fill: 'none', stroke: '#c0392b', 'stroke-width': 1.2 }, NSS), g);
    },
    intrerupator(g, e, H) {
      el('rect', Object.assign({ x: e.x - 3.5, y: H - e.h - 4.5, width: 7, height: 9, fill: '#fff', stroke: '#c0392b', 'stroke-width': 1.4 }, NSS), g);
      el('line', Object.assign({ x1: e.x, y1: H - e.h - 2.5, x2: e.x, y2: H - e.h + 2.5, stroke: '#c0392b', 'stroke-width': 1.2 }, NSS), g);
    },
    'iesire-cablu'(g, e, H) {
      el('circle', Object.assign({ cx: e.x, cy: H - e.h, r: 3, fill: '#fff', stroke: '#c0392b', 'stroke-width': 1.3 }, NSS), g);
      el('path', Object.assign({ d: `M${e.x - 2},${H - e.h - 2} L${e.x + 2},${H - e.h + 2} M${e.x + 2},${H - e.h - 2} L${e.x - 2},${H - e.h + 2}`, stroke: '#c0392b', 'stroke-width': 1.1 }, NSS), g);
    },
    // planul tavanului
    sina(g, e, H) {
      rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: '#2b2622', stroke: '#111', 'stroke-width': 1 });
      const vert = e.inalt > e.lat, n = e.spoturi || 0;
      for (let i = 0; i < n; i++) {
        const k = (i + .5) / n, cx = vert ? e.x + e.lat / 2 : e.x + e.lat * k, cy = H - (vert ? e.h + e.inalt * k : e.h + e.inalt / 2);
        el('circle', Object.assign({ cx, cy, r: 4.5, fill: '#ffd76e', stroke: '#a66f00', 'stroke-width': 1.2 }, NSS), g);
      }
    },
    suspendat(g, e, H) {
      el('circle', Object.assign({ cx: e.x, cy: H - e.h, r: 9, fill: '#fff8e6', stroke: '#a66f00', 'stroke-width': 1.6 }, NSS), g);
      el('path', Object.assign({ d: `M${e.x - 6.4},${H - e.h - 6.4} L${e.x + 6.4},${H - e.h + 6.4} M${e.x + 6.4},${H - e.h - 6.4} L${e.x - 6.4},${H - e.h + 6.4}`, stroke: '#a66f00', 'stroke-width': 1.2 }, NSS), g);
    },
    spot(g, e, H) {
      el('circle', Object.assign({ cx: e.x, cy: H - e.h, r: 4, fill: '#ffd76e', stroke: '#a66f00', 'stroke-width': 1.3 }, NSS), g);
    },
    scafa(g, e, H) { rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: 'url(#p-tavan)', stroke: '#7d7870', 'stroke-width': 1.1 }); },
    grinda(g, e, H) { rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: '#8f8a82', 'fill-opacity': .12, stroke: '#57534e', 'stroke-width': 1.2, 'stroke-dasharray': '8 4' }); },
    stalp(g, e, H) { rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: 'url(#p-zid)', stroke: '#8f8a82', 'stroke-width': 1 }); },
    calorifer(g, e, H) {
      rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: '#f4f4f2', stroke: '#6b7280', 'stroke-width': 1.1 });
      for (let x = e.x + 4; x < e.x + e.lat - 1; x += 4) el('line', Object.assign({ x1: x, y1: H - e.h - 1, x2: x, y2: H - e.h - e.inalt + 1, stroke: '#9ca3af', 'stroke-width': .7 }, NSS), g);
    },
    ac(g, e, H) {
      rect(g, e.x, e.h, e.lat, e.inalt, H, e.ascuns
        ? { fill: '#fff', 'fill-opacity': .35, stroke: '#3f3f46', 'stroke-width': 1.1, 'stroke-dasharray': '5 3' }
        : { fill: '#fff', stroke: '#4b4b4b', 'stroke-width': 1.2 });
      el('text', { x: e.x + e.lat / 2, y: H - e.h - e.inalt / 2 + 2.5, 'font-size': Math.min(8, e.inalt * .8), 'text-anchor': 'middle', fill: '#4b4b4b', 'font-weight': 700 }, g, 'AC');
    },
    doza(g, e, H) {
      el('rect', Object.assign({ x: e.x - 3.5, y: H - e.h - 3.5, width: 7, height: 7, fill: '#fff', stroke: '#c0392b', 'stroke-width': 1.3 }, NSS), g);
      el('path', Object.assign({ d: `M${e.x - 3.5},${H - e.h - 3.5} L${e.x + 3.5},${H - e.h + 3.5} M${e.x + 3.5},${H - e.h - 3.5} L${e.x - 3.5},${H - e.h + 3.5}`, stroke: '#c0392b', 'stroke-width': 1 }, NSS), g);
    },
    // faianța: suprafața, fără goluri, cu rosturile plăcilor pornind din colțul dat de „pornire”
    faianta(g, e, H) {
      const [pl, ph] = e.placa || [60, 60], r = e.rost || .3, p0 = e.pornire || { x: e.x, h: e.h };
      const id = 'm-' + S.per.id + '-' + String(e.id).replace(/[^\w-]/g, '_');
      const m = el('mask', { id, maskUnits: 'userSpaceOnUse', x: e.x - 1, y: H - e.h - e.inalt - 1, width: e.lat + 2, height: e.inalt + 2 }, g);
      el('rect', { x: e.x, y: H - e.h - e.inalt, width: e.lat, height: e.inalt, fill: '#fff' }, m);
      for (const o of e.goluri || []) el('rect', { x: o.x, y: H - o.h - o.inalt, width: o.lat, height: o.inalt, fill: '#000' }, m);
      const gm = el('g', { mask: `url(#${id})` }, g);
      el('rect', { x: e.x, y: H - e.h - e.inalt, width: e.lat, height: e.inalt, fill: e.finisaj === 'sand-moon-str' ? 'url(#p-str)' : '#e9e3d8' }, gm);
      const rost = { stroke: '#a89c88', 'stroke-width': .7 };
      const px = pl + r, ph2 = ph + r;
      for (let x = p0.x - Math.ceil((p0.x - e.x) / px) * px; x <= e.x + e.lat + .01; x += px)
        if (x >= e.x - .01) el('line', Object.assign({ x1: x, y1: H - e.h, x2: x, y2: H - e.h - e.inalt }, rost, NSS), gm);
      for (let hh = p0.h - Math.ceil((p0.h - e.h) / ph2) * ph2; hh <= e.h + e.inalt + .01; hh += ph2)
        if (hh >= e.h - .01) el('line', Object.assign({ x1: e.x, y1: H - hh, x2: e.x + e.lat, y2: H - hh }, rost, NSS), gm);
      // colțul de pornire al stereotomiei: un semn mic în unghi
      if (e.pornire) el('path', Object.assign({ d: `M${p0.x},${H - p0.h - 9} L${p0.x},${H - p0.h} L${p0.x + 9},${H - p0.h}`, fill: 'none', stroke: '#8d5a1f', 'stroke-width': 2 }, NSS), g);
      el('rect', Object.assign({ x: e.x, y: H - e.h - e.inalt, width: e.lat, height: e.inalt, fill: 'none', stroke: '#8d8270', 'stroke-width': .9 }, NSS), g);
    },
    // obiecte sanitare, în vedere din față
    sanitar(g, e, H) {
      const x0 = e.x, x1 = e.x + e.lat, jos = H - e.h, sus = H - e.h - e.inalt, w = e.lat, hh = e.inalt;
      const alb = { fill: '#fdfdfc', stroke: '#5f6b75', 'stroke-width': 1.1 }, metal = { fill: 'url(#g-inox)', stroke: '#5f6b75', 'stroke-width': 1 };
      const P = (d, a) => el('path', Object.assign({ d }, a, NSS), g);
      const T = t => { if (w > 14 && hh > 6) el('text', { x: x0 + w / 2, y: sus + hh / 2 + 2.2, 'font-size': Math.min(6.5, hh * .45), 'text-anchor': 'middle', fill: '#4b5563', 'font-weight': 600, 'pointer-events': 'none' }, g, t); };
      switch (e.obiect) {
        case 'wc':        // vas suspendat: capacul sus, vasul rotunjit spre perete
          P(`M${x0},${sus} H${x1} V${sus + hh * .35} C${x1},${jos} ${x0 + w * .75},${jos} ${x0 + w * .5},${jos} C${x0 + w * .25},${jos} ${x0},${jos} ${x0},${sus + hh * .35} Z`, alb);
          P(`M${x0},${sus + hh * .14} H${x1}`, { stroke: '#5f6b75', 'stroke-width': .8 }); break;
        case 'lavoar':
          P(`M${x0},${sus} H${x1} V${sus + hh * .3} C${x1},${jos} ${x0 + w * .8},${jos} ${x0 + w * .5},${jos} C${x0 + w * .2},${jos} ${x0},${jos} ${x0},${sus + hh * .3} Z`, alb); break;
        case 'chiuveta': rect(g, x0, e.h, w, hh, H, metal); break;
        case 'cada': rect(g, x0, e.h, w, hh, H, alb); P(`M${x0 + 3},${sus + 3} H${x1 - 3}`, { stroke: '#9aa5ae', 'stroke-width': .8 }); T('cadă'); break;
        case 'dus': rect(g, x0, e.h, w, hh, H, { fill: '#e3eef6', 'fill-opacity': .55, stroke: '#5f8bb0', 'stroke-width': 1, 'stroke-dasharray': '6 4' }); T('duș'); break;
        case 'rigola': rect(g, x0, e.h, w, Math.max(hh, 1.5), H, { fill: '#4b5563', stroke: '#1f2937', 'stroke-width': .8 }); break;
        case 'rezervor': rect(g, x0, e.h, w, hh, H, { fill: '#fff', 'fill-opacity': .15, stroke: '#5f6b75', 'stroke-width': 1.1, 'stroke-dasharray': '6 4' }); break;
        case 'clapeta':
          rect(g, x0, e.h, w, hh, H, metal);
          rect(g, x0 + w * .12, e.h + hh * .2, w * .34, hh * .6, H, { fill: '#fff', stroke: '#5f6b75', 'stroke-width': .7 });
          rect(g, x0 + w * .54, e.h + hh * .2, w * .34, hh * .6, H, { fill: '#fff', stroke: '#5f6b75', 'stroke-width': .7 }); break;
        case 'para-dus': { const r = Math.min(w, hh) / 2; el('circle', Object.assign({ cx: x0 + w / 2, cy: sus + hh / 2, r }, metal, NSS), g); break; }
        case 'ventilator': {
          const r = Math.min(w, hh) / 2, cx = x0 + w / 2, cy = sus + hh / 2;
          el('circle', Object.assign({ cx, cy, r, fill: '#fff', stroke: '#5f6b75', 'stroke-width': 1.1 }, NSS), g);
          for (const k of [-.5, 0, .5]) P(`M${cx - r * .8},${cy + k * r} H${cx + r * .8}`, { stroke: '#9aa5ae', 'stroke-width': .8 });
          break;
        }
        case 'apometru': rect(g, x0, e.h, w, hh, H, { fill: '#f6f5f2', stroke: '#5f6b75', 'stroke-width': 1.1, 'stroke-dasharray': '4 3' }); T('vizitare'); break;
        case 'centrala': rect(g, x0, e.h, w, hh, H, alb); T('centrală'); break;
        case 'boiler': rect(g, x0, e.h, w, hh, H, Object.assign({}, alb, { rx: Math.min(w, hh) * .2 })); T('boiler'); break;
        default: rect(g, x0, e.h, w, hh, H, metal);
      }
    },
    // racord: capătul țevii în perete; cerc în culoarea fluidului
    racord(g, e, H) {
      const c = (FLUIDE[e.fluid] || FLUIDE.rece).culoare, r = e.diam ? Math.max(2.4, e.diam / 2) : 3.2;
      el('circle', Object.assign({ cx: e.x, cy: H - e.h, r, fill: '#fff', stroke: c, 'stroke-width': 1.6, 'stroke-dasharray': e.pozitie === 'aprox' ? '3 2' : null }, NSS), g);
      el('circle', Object.assign({ cx: e.x, cy: H - e.h, r: r * .45, fill: c }, NSS), g);
    },
    // traseu de țeavă: o linie groasă pe axa dreptunghiului
    teava(g, e, H) {
      const c = (FLUIDE[e.fluid] || FLUIDE.rece).culoare, vert = e.inalt >= e.lat;
      rect(g, e.x, e.h, e.lat, e.inalt, H, { fill: 'transparent' });
      const a = { stroke: c, 'stroke-width': 2.4, 'stroke-linecap': 'round', opacity: .85, 'stroke-dasharray': e.ascuns ? '7 4' : null };
      if (vert) el('line', Object.assign({ x1: e.x + e.lat / 2, y1: H - e.h, x2: e.x + e.lat / 2, y2: H - e.h - e.inalt }, a, NSS), g);
      else el('line', Object.assign({ x1: e.x, y1: H - e.h - e.inalt / 2, x2: e.x + e.lat, y2: H - e.h - e.inalt / 2 }, a, NSS), g);
    },
    // electrocasnic: carcasa, cu numele aparatului; „incastrat” = în spatele unui front (linie întreruptă)
    electrocasnic(g, e, H) {
      const NUME = { frigider: 'frigider', congelator: 'congelator', cuptor: 'cuptor', microunde: 'microunde', plita: 'plită', hota: 'hotă',
        msv: 'MSV', msr: 'MSR', uscator: 'uscător', espressor: 'espressor' };
      const inc = e.finisaj === 'incastrat' || e.ascuns, negru = e.finisaj === 'negru';
      rect(g, e.x, e.h, e.lat, e.inalt, H, inc
        ? { fill: '#fff', 'fill-opacity': .2, stroke: '#3f3f46', 'stroke-width': 1.1, 'stroke-dasharray': '6 4' }
        : negru ? { fill: '#1f1f1f', stroke: '#000', 'stroke-width': 1.1 } : { fill: 'url(#g-inox)', stroke: '#6b7280', 'stroke-width': 1.1 });
      if (!inc && (e.aparat === 'cuptor' || e.aparat === 'microunde') && e.lat > 20 && e.inalt > 15) {
        const m = Math.min(e.lat, e.inalt) * .14;
        rect(g, e.x + m, e.h + m, e.lat - 2 * m, e.inalt - 2.6 * m, H, { fill: negru ? '#40454d' : '#111827', 'fill-opacity': .85 });
      }
      if (e.lat > 16 && e.inalt > 8) el('text', { x: e.x + e.lat / 2, y: H - e.h - e.inalt / 2 + 2.4, 'font-size': Math.min(7, e.inalt * .4, e.lat / 5), 'text-anchor': 'middle',
        fill: negru || (!inc && (e.aparat === 'cuptor' || e.aparat === 'microunde')) ? '#f3f4f6' : '#374151', 'font-weight': 600, 'pointer-events': 'none' }, g, NUME[e.aparat] || e.aparat || '');
    },
    'banda-led'(g, e, H) {
      const vert = e.inalt >= e.lat;
      const w = vert ? Math.max(e.lat, 1.4) : e.lat, hh = vert ? e.inalt : Math.max(e.inalt, 1.4);
      const x = vert ? e.x + e.lat / 2 - w / 2 : e.x;
      el('rect', { x: vert ? x - 3 : x, y: H - e.h - hh - (vert ? 0 : 3), width: vert ? w + 6 : w, height: vert ? hh : hh + 6, fill: '#ffc94d', opacity: .7, filter: 'url(#f-glow)', class: 'glow' }, g);
      rect(g, x, e.h, w, hh, H, e.ascuns
        ? { fill: '#ffd76e', 'fill-opacity': .55, stroke: '#a66f00', 'stroke-width': 1.1, 'stroke-dasharray': '5 3' }
        : { fill: '#f5b330', stroke: '#a66f00', 'stroke-width': 1, 'stroke-dasharray': e.pozitie === 'aprox' ? '5 3' : null });
    },
  };

  // ---------------------------------------------------------------- etichete (ID) și cote
  // locurile posibile ale codului unui element, în ordinea preferinței; primul e locul obișnuit
  function locuriEticheta(e, H, u, w, hh) {
    const L = [];
    if (e.eticheta) L.push([e.eticheta.x + 2 * u, H - e.eticheta.h - hh / 2]);
    if (e.punct) {
      const d = 6 + 3 * u, y = H - e.h;
      L.push([e.x + d, y - hh / 2], [e.x - d - w, y - hh / 2], [e.x - w / 2, y - d - hh], [e.x - w / 2, y + d]);
    } else if ((e.tip === 'banda-led' || e.tip === 'sina') && e.inalt >= e.lat) {
      const xd = e.x + e.lat + 3 * u, xs = e.x - 3 * u - w, ys = H - e.h - e.inalt + 2 * u, yj = H - e.h - 2 * u - hh;
      L.push([xd, ys], [xs, ys], [xd, yj], [xs, yj]);
    } else {
      const sus = H - e.h - e.inalt, jos = H - e.h;
      L.push([e.x + 3 * u, sus + 3 * u], [e.x + e.lat - 3 * u - w, sus + 3 * u], [e.x + 3 * u, jos - 3 * u - hh],
        [e.x + 3 * u, sus - 3 * u - hh], [e.x + 3 * u, jos + 3 * u]);
    }
    return L.map(([x, y]) => ({ x, y, w, h: hh }));
  }
  const seSuprapun = (a, b, m) => a.x < b.x + b.w + m && b.x < a.x + a.w + m && a.y < b.y + b.h + m && b.y < a.y + a.h + m;

  // semnul elementelor cu pași de montaj: un cerc cu triunghi, în dreapta codului, cu 2 px între ele
  const SEMN_PASI = 18;  // px de ecran, cât se adaugă la lățimea codului
  const SEMN_R = 7;      // raza semnului, px de ecran
  function semnPasi(g, cx, cy, u) {
    const k = SEMN_R / 5.6;
    el('circle', { cx, cy, r: SEMN_R * u, fill: '#8a5a2b', stroke: '#fff', 'stroke-width': 1.1 * u }, g);
    el('path', { d: `M${cx - 1.7 * k * u},${cy - 2.6 * k * u} L${cx + 2.9 * k * u},${cy} L${cx - 1.7 * k * u},${cy + 2.6 * k * u} Z`, fill: '#fff' }, g);
  }
  const semnPasiHtml = '<span class="semn-pasi" title="Are pași de montaj: „Cum se montează”" aria-label="are pași de montaj"><svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="5.2"/><path d="M4.8 3.5 L8.7 6 L4.8 8.5 Z"/></svg></span>';

  function eticheta(g, e, r, u) {
    const b = el('g', { class: 'eticheta', 'data-id': e.id }, g), extra = pasiDetaliu(e) ? SEMN_PASI * u : 0, w = r.w - extra;
    el('rect', { x: r.x, y: r.y, width: w, height: r.h, rx: 3 * u, fill: (STARI[e.stare] || STARI.proiect).culoare, stroke: '#fff', 'stroke-width': .8 * u }, b);
    el('text', { x: r.x + w / 2, y: r.y + r.h * .72, 'font-size': 10.5 * u, 'text-anchor': 'middle', fill: '#fff', 'font-weight': 700 }, b, e.id);
    if (extra) {
      // semnul e un buton separat, lângă cod: deschide direct pașii; codul alege în continuare elementul
      const cx = r.x + w + (2 + SEMN_R) * u, cy = r.y + r.h / 2;
      const p = S.print ? b : el('g', { class: 'semn-pasi-btn', 'data-pasi': e.detaliu }, b);
      if (!S.print) el('circle', { cx, cy, r: (SEMN_R + 2) * u, fill: 'transparent' }, p);
      semnPasi(p, cx, cy, u);
    }
    return b;
  }

  // Codurile primesc loc în ordinea: selectate, electric, LED, mobilă, gips, structură. Un cod care s-ar suprapune
  // peste altul încearcă locurile următoare; dacă nu încape nicăieri, nu se desenează (apare când se mărește desenul).
  // Pe ecran îngust, cât desenul e aproape de „tot peretele”, rămân doar codurile elementelor mari, ale celor alese
  // și ale celor cu pași de montaj; celelalte apar la mărire (S.ascunse = câte au rămas pe dinafară). La măsurare
  // apar toate, ca al doilea element să se poată găsi.
  function etichete(g, els, H, u, cls) {
    const puse = [], pr = e => (S.sel.includes(e.id) ? 10 : 0) + (PRIORITATE[e.strat] || 0);
    const rar = !S.print && !S.masura && ingust() && S.view && S.view.s < S.fitS * 1.6;
    const mare = e => !e.punct && Math.max(e.lat, e.inalt) / u >= 44 && e.lat * e.inalt / (u * u) >= 900;
    S.ascunse = 0;
    for (const e of els.slice().sort((a, b) => pr(b) - pr(a))) {
      if (rar && !S.sel.includes(e.id) && !pasiDetaliu(e) && !mare(e)) { S.ascunse++; continue; }
      const locuri = locuriEticheta(e, H, u, (e.id.length * 6.6 + 8 + (pasiDetaliu(e) ? SEMN_PASI : 0)) * u, 15 * u);
      const r = locuri.find(c => !puse.some(q => seSuprapun(c, q, 1.5 * u))) || (S.sel.includes(e.id) ? locuri[0] : null);
      if (!r) continue;
      puse.push(r);
      eticheta(g, e, r, u).setAttribute('class', 'eticheta' + cls(e));
    }
  }


  function linie(g, x1, y1, x2, y2, c, w) {
    return el('line', Object.assign({ x1, y1, x2, y2, stroke: c, 'stroke-width': w || 1 }, NSS), g);
  }
  // ---------------------------------------------------------------- cotele elementelor selectate
  const CUL_SEL = '#b42318', CUL_INTRE = '#1d4ed8', CUL_CADRU = '#57534e';

  // text cu contur alb, ca să se citească peste texturi
  function txt(g, x, y, s, u, c, rot) {
    return el('text', { x, y, 'font-size': 11 * u, fill: c, 'text-anchor': 'middle', 'font-weight': 700,
      style: `paint-order:stroke;stroke:#fff;stroke-width:${3.4 * u}px;stroke-linejoin:round`,
      transform: rot ? `rotate(-90 ${x} ${y})` : null }, g, s);
  }
  const latText = (s, u) => (s.length * 6.4 + 6) * u;

  function cotaOriz(g, x0, x1, y, s, u, c) {
    linie(g, x0, y, x1, y, c, 1.1);
    [x0, x1].forEach(x => linie(g, x - 3 * u, y + 3 * u, x + 3 * u, y - 3 * u, c, 1.6));
    const incape = (x1 - x0) >= latText(s, u) + 4 * u;
    txt(g, (x0 + x1) / 2 + (incape ? 0 : latText(s, u) / 2 + 3 * u), y - (incape ? 4 : 16) * u, s, u, c);
  }
  function cotaVert(g, x, h0, h1, s, u, c, H) {
    linie(g, x, H - h0, x, H - h1, c, 1.1);
    [h0, h1].forEach(v => linie(g, x - 3 * u, H - v + 3 * u, x + 3 * u, H - v - 3 * u, c, 1.6));
    const incape = (h1 - h0) >= latText(s, u) + 4 * u;
    txt(g, x - (incape ? 4 : 16) * u, H - (h0 + h1) / 2 - (incape ? 0 : latText(s, u) / 2 + 3 * u), s, u, c, true);
  }
  function martor(g, x1, y1, x2, y2, c) {
    if (Math.hypot(x2 - x1, y2 - y1) < .3) return;
    el('line', Object.assign({ x1, y1, x2, y2, stroke: c, 'stroke-width': .8, 'stroke-dasharray': '3 3', opacity: .75 }, NSS), g);
  }
  const intX = e => e.punct ? [e.x, e.x] : [e.x, e.x + e.lat];
  const intH = e => e.punct ? [e.h, e.h] : [e.h, e.h + e.inalt];

  // un element: lanț orizontal (colț stânga → element → colț dreapta) și vertical (pardoseală → element → tavan)
  function coteElement(g, e, H, L, u) {
    const [x0, x1] = intX(e), [b0, b1] = intH(e);
    const ap = e.pozitie === 'aprox' ? '~' : '', apT = aproxH();
    const sus = e.punct ? true : (H - b1) - 24 * u >= -12;
    const yl = e.punct ? H - b0 - 16 * u : sus ? H - b1 - 24 * u : H - b0 + (b0 < .5 ? 3 : 0) + 24 * u;
    [[0, x0, ap], [x0, x1, ''], [x1, L, ap]].forEach(([a, b, p]) => { if (b - a >= .5) cotaOriz(g, a, b, yl, p + f(b - a), u, CUL_SEL); });
    const yMuchie = e.punct ? H - b0 : sus ? H - b1 : H - b0;
    [x0, x1].forEach(x => martor(g, x, yMuchie, x, yl, CUL_SEL));
    const dr = !e.punct && x1 + 60 * u < L + 12;
    const xl = e.punct ? e.x - 6 - 16 * u : dr ? x1 + 24 * u : x0 - 24 * u;
    [[0, b0, ap], [b0, b1, ''], [b1, H, apT || ap]].forEach(([a, b, p]) => { if (b - a >= .5 && b <= H + .01) cotaVert(g, xl, a, b, p + f(b - a), u, CUL_SEL, H); });
    const xMuchie = e.punct ? e.x : dr ? x1 : x0;
    [b0, b1].forEach(v => { if (v <= H) martor(g, xMuchie, H - v, xl, H - v, CUL_SEL); });
  }

  // două elemente: distanța liberă dintre ele sau, dacă se suprapun pe o direcție, decalajul marginilor
  function segmenteIntre(ia, ib) {
    if (ia[1] <= ib[0]) return { gol: true, seg: [[ia[1], ib[0], 0, 1]] };
    if (ib[1] <= ia[0]) return { gol: true, seg: [[ib[1], ia[0], 1, 0]] };
    const seg = [];
    const o0 = ia[0] <= ib[0] ? 0 : 1, o1 = ia[1] <= ib[1] ? 0 : 1;
    if (Math.abs(ia[0] - ib[0]) >= .5) seg.push([Math.min(ia[0], ib[0]), Math.max(ia[0], ib[0]), o0, 1 - o0]);
    if (Math.abs(ia[1] - ib[1]) >= .5) seg.push([Math.min(ia[1], ib[1]), Math.max(ia[1], ib[1]), o1, 1 - o1]);
    return { gol: false, seg };
  }
  function masuratori(A, B) {
    return { oriz: segmenteIntre(intX(A), intX(B)), vert: segmenteIntre(intH(A), intH(B)) };
  }
  function coteIntre(g, A, B, H, u) {
    const m = masuratori(A, B), ia = intX(A), ib = intX(B), va = intH(A), vb = intH(B);
    const ap = A.pozitie === 'aprox' || B.pozitie === 'aprox' ? '~' : '';
    // linia orizontală: în zona comună pe verticală sau la mijlocul golului vertical
    const hl = m.vert.gol ? (m.vert.seg[0][0] + m.vert.seg[0][1]) / 2 : (Math.max(va[0], vb[0]) + Math.min(va[1], vb[1])) / 2;
    const xl = m.oriz.gol ? (m.oriz.seg[0][0] + m.oriz.seg[0][1]) / 2 : (Math.max(ia[0], ib[0]) + Math.min(ia[1], ib[1])) / 2;
    const yl = H - hl;
    for (const [a, b] of m.oriz.seg) {
      cotaOriz(g, a, b, yl, ap + f(b - a), u, CUL_INTRE);
      for (const [E, v] of [[A, va], [B, vb]]) for (const x of [a, b]) {
        const [e0, e1] = intX(E);
        if (Math.abs(x - e0) < .01 || Math.abs(x - e1) < .01) martor(g, x, H - Math.min(Math.max(hl, v[0]), v[1]), x, yl, CUL_INTRE);
      }
    }
    for (const [a, b] of m.vert.seg) {
      cotaVert(g, xl, a, b, ap + f(b - a), u, CUL_INTRE, H);
      for (const [E, ix] of [[A, ia], [B, ib]]) for (const v of [a, b]) {
        const [e0, e1] = intH(E);
        if (Math.abs(v - e0) < .01 || Math.abs(v - e1) < .01) martor(g, Math.min(Math.max(xl, ix[0]), ix[1]), H - v, xl, H - v, CUL_INTRE);
      }
    }
  }

  function contur(g, e, H, u, c) {
    const [x0, x1] = intX(e), [b0, b1] = intH(e), p = 4 * u;
    if (e.punct) el('circle', Object.assign({ cx: e.x, cy: H - e.h, r: 6 + 3 * u, fill: 'none', stroke: c, 'stroke-width': 2 }, NSS), g);
    else el('rect', Object.assign({ x: x0 - p, y: H - b1 - p, width: x1 - x0 + 2 * p, height: b1 - b0 + 2 * p, fill: 'none', stroke: c, 'stroke-width': 2, 'stroke-dasharray': '6 3' }, NSS), g);
  }


  // ---------------------------------------------------------------- desenul peretelui
  const MARG_LAT = { st: 64, dr: 52, sus: 40, jos: 70 }, MARG_INGUST = { st: 34, dr: 20, sus: 30, jos: 56 };
  const ingust = () => S.svg.getBoundingClientRect().width < 640;
  // panoul e foaie de jos: ecran îngust, dar nu telefonul ținut orizontal (acolo panoul stă în dreapta)
  const foaie = () => matchMedia('(max-width: 899px)').matches && !matchMedia('(orientation: landscape) and (max-height: 500px)').matches;
  let MARG = MARG_LAT;
  const vizibil = e => e.strat === 'structura' || S.viz[e.strat];
  // varianta aleasă (de ex. poziția panoului 2 până la răspunsul R10); elementele fără „varianta” apar mereu
  const varAleasa = () => S.per.variante ? (S.var[S.per.id] || S.per.variante.implicit) : null;
  const elemente = () => S.per.elemente.filter(e => !e.varianta || e.varianta === varAleasa());
  const gaseste = id => elemente().find(e => e.id === id);
  const eTavan = () => S.per.tip === 'tavan';
  const inaltimeV = () => eTavan() ? S.per.adancime : S.cam.inaltime.valoare;
  const aproxH = () => !eTavan() && S.cam.inaltime.stare === 'de-verificat' ? '~' : '';
  // ce cuprinde desenul în afară de elemente: zidăria de la capete și pardoseala; la tavan, zidăria de pe toate laturile
  const cadru = (L, H) => eTavan() ? { x0: -12, x1: L + 12, y0: -12, y1: H + 12 } : { x0: -12, x1: L + 12, y0: -14, y1: H + 3 };
  // tavanul la 1:30; dacă nu încape pe înălțimea foii A3 (planul are ~27 mm de cote și scară grafică), la 1:40
  const scara = () => {
    if (!eTavan()) return 20;
    const c = cadru(S.per.lungime, S.per.adancime);
    return (c.y1 - c.y0) / 3 + 27 > 262 ? 40 : 30;
  };
  const vederi = () => S.cam.pereti.concat(S.cam.tavan && S.cam.tavan.tip === 'tavan' ? [S.cam.tavan] : []);
  // numele pereților după latura planului: st = x 0, dr = x lățimea, jos = y 0, sus = y adâncimea
  function laturi() {
    const W = S.cam.plan.latime, D = S.cam.plan.adancime, n = {};
    for (const p of S.cam.pereti) {
      const [[ax, ay], [bx, by]] = p.plan, nume = p.nume.replace(/^Peretele/, 'peretele');
      // pe o latură cu mai multe vederi (de ex. peretele de est al holului, în trepte) dă numele cea mai lungă
      const k = ax === bx ? (ax < W / 2 ? 'st' : 'dr') : (ay < D / 2 ? 'jos' : 'sus');
      if (!n[k] || p.lungime > n[k].L) n[k] = { L: p.lungime, nume };
    }
    for (const k in n) n[k] = n[k].nume;
    return n;
  }
  // cum se numesc direcțiile în fișă, în tabel și în cote
  function axe() {
    if (!eTavan()) return { o: 'Orizontal', v: 'Vertical', st: 'de la colțul stâng', dr: 'până la colțul drept', jos: 'de la pardoseală', sus: 'până la tavan',
      h: 'h', thX: 'x de la colț', thH: 'h', m: ['marginea stângă', 'marginea dreaptă', 'marginea de jos', 'marginea de sus'] };
    const n = laturi();
    return { o: 'Pe x', v: 'Pe y', st: 'de la ' + n.st, dr: 'până la ' + n.dr, jos: 'de la ' + n.jos, sus: 'până la ' + n.sus,
      h: 'y', thX: 'x, de la ' + n.st, thH: 'y, de la ' + n.jos, m: [n.st, n.dr, n.jos, n.sus].map(s => 'marginea dinspre ' + s) };
  }

  function deseneaza() {
    const svg = S.svg, cam = S.cam, p = S.per, H = inaltimeV(), L = p.lungime, c = cadru(L, H);
    const u = S.print ? scara() / 40 : 1 / S.view.s;   // la tipar 1 px = 0,25 mm; la 1:20, 0,25 mm = 0,5 cm reali
    svg.textContent = '';
    defs(svg);
    const root = el('g', {}, svg);

    el('rect', { x: 0, y: 0, width: L, height: H, fill: '#fbfaf7' }, root);
    if (eTavan()) {
      // zidăria de jur împrejur, cu numele pereților
      const z = Object.assign({ fill: 'url(#p-zid)', stroke: '#8f8a82', 'stroke-width': 1 }, NSS);
      [[-12, -12, L + 24, 12], [-12, H, L + 24, 12], [-12, 0, 12, H], [L, 0, 12, H]].forEach(([x, y, w, hh]) => el('rect', Object.assign({ x, y, width: w, height: hh }, z), root));
      const n = laturi(), fs = 9.5 * u, st = `paint-order:stroke;stroke:#fff;stroke-width:${3 * u}px`;
      const t = (x, y, s, rot) => el('text', { x, y, 'font-size': fs, 'text-anchor': 'middle', fill: '#57534e', style: st, transform: rot ? `rotate(${rot} ${x} ${y})` : null }, root, s);
      t(L / 2, -6 + fs * .35, n.sus); t(L / 2, H + 6 + fs * .35, n.jos); t(-6 + fs * .35, H / 2, n.st, -90); t(L + 6 - fs * .35, H / 2, n.dr, 90);
    } else {
      // peretele, zidăria de la capete, pardoseala, linia tavanului
      el('rect', { x: 0, y: 0, width: L, height: H, fill: '#f8f6f1' }, root);
      [[-12, 0], [L, 0]].forEach(([x]) => el('rect', Object.assign({ x, y: -14, width: 12, height: H + 14, fill: 'url(#p-zid)', stroke: '#8f8a82', 'stroke-width': 1 }, NSS), root));
      el('rect', { x: -12, y: H, width: L + 24, height: 3, fill: '#8b8378' }, root);
      linie(root, 0, 0, L, 0, '#9b968d', 1).setAttribute('stroke-dasharray', '6 4');
    }

    // selecția poate conține și elemente fără poziție: au fișă, dar nu apar pe desen
    S.sel = S.sel.filter(id => { const e = gaseste(id); return e && vizibil(e); });
    const sel = S.sel.map(gaseste).filter(cunoscut);
    const vizibile = elemente().filter(e => cunoscut(e) && vizibil(e));
    // cu un element ales, celelalte se estompează, dar rămân de ales pentru distanță
    const stins = e => sel.length && !S.sel.includes(e.id) ? ' stins' : '';
    const gEl = el('g', {}, root);
    for (const st of ['finisaje', 'structura', 'gips', 'mobila', 'sanitare', 'electric', 'led']) {
      for (const e of vizibile.filter(x => x.strat === st)) {
        const g = el('g', { class: 'elem' + stins(e), 'data-id': e.id }, gEl);
        (DESEN[e.tip] || (e.punct ? DESEN.doza : DESEN.mobilier))(g, e, H, u);
        if (e.punct) el('rect', { x: e.x - 13 * u, y: H - e.h - 13 * u, width: 26 * u, height: 26 * u, fill: 'transparent' }, g);
      }
    }
    etichete(el('g', {}, root), vizibile, H, u, stins);
    const ca = document.getElementById('coduri-ascunse');
    if (ca) { ca.hidden = S.print || !S.ascunse; ca.textContent = `${S.ascunse} coduri ascunse · mărește`; }

    const gC = el('g', { class: 'cote' }, root);
    if (sel.length === 0) {
      // doar cotele peretelui: lungimea, deasupra, și înălțimea liberă, în stânga (la tavan: cele două laturi ale camerei)
      cotaOriz(gC, 0, L, c.y0 - 16 * u, f(L), u, CUL_CADRU);
      cotaVert(gC, -12 - 18 * u, 0, H, aproxH() + f(H) + (eTavan() ? '' : ' liber'), u, CUL_CADRU, H);
    } else {
      sel.forEach(e => contur(gC, e, H, u, sel.length === 2 ? CUL_INTRE : CUL_SEL));
      if (sel.length === 2) coteIntre(gC, sel[0], sel[1], H, u);
      else coteElement(gC, sel[0], H, L, u);
    }

    // scara grafică: 1 m, împărțit la 20 cm
    const ys = c.y1 + 46 * u;
    const gS = el('g', {}, root);
    for (let i = 0; i < 5; i++) el('rect', { x: i * 20, y: ys, width: 20, height: 5 * u, fill: i % 2 ? '#fff' : '#3f3a35', stroke: '#3f3a35', 'stroke-width': .6 * u }, gS);
    el('text', { x: 0, y: ys + 16 * u, 'font-size': 9 * u, fill: '#3f3a35' }, gS, '0');
    el('text', { x: 100, y: ys + 16 * u, 'font-size': 9 * u, fill: '#3f3a35', 'text-anchor': 'middle' }, gS, '1 m');
    if (S.print) el('text', { x: 112, y: ys + 4.5 * u, 'font-size': 9 * u, fill: '#3f3a35' }, gS, 'scara 1:' + scara());

    if (S.print) {
      const x0 = c.x0 - MARG.st * u, y0 = c.y0 - MARG.sus * u, w = c.x1 - c.x0 + (MARG.st + MARG.dr) * u, hh = ys + 22 * u - y0;
      svg.setAttribute('viewBox', `${x0} ${y0} ${w} ${hh}`);
      svg.style.width = (w * 10 / scara()) + 'mm';     // la 1:20, 1 cm real = 0,5 mm pe hârtie
      svg.style.height = (hh * 10 / scara()) + 'mm';
    } else {
      svg.style.width = ''; svg.style.height = '';
      seteazaViewBox();
    }
  }

  function seteazaViewBox() {
    const r = S.svg.getBoundingClientRect(), v = S.view;
    S.dim = { w: r.width, h: r.height };
    S.svg.setAttribute('viewBox', `${v.x} ${v.y} ${r.width / v.s} ${r.height / v.s}`);
  }

  // vederea cu tot peretele, cu margini în pixeli pentru cote
  function incadrare() {
    const r = S.svg.getBoundingClientRect(), H = inaltimeV(), L = S.per.lungime, c = cadru(L, H), W = c.x1 - c.x0, D = c.y1 - c.y0;
    MARG = r.width < 640 ? MARG_INGUST : MARG_LAT;
    const px = MARG.st + MARG.dr, py = MARG.sus + MARG.jos;
    const s = Math.max(.05, Math.min((r.width - px) / W, (r.height - py) / D));
    const v = { s, x: c.x0 - MARG.st / s, y: c.y0 - MARG.sus / s };
    const liberaX = r.width / s - (W + px / s), liberaY = r.height / s - (D + py / s);
    if (liberaX > 0) v.x -= liberaX / 2;
    if (liberaY > 0) v.y -= liberaY / 2;
    return v;
  }
  function potriveste() {
    S.view = incadrare(); S.fitS = S.view.s; S.vedere = 'tot';
    deseneaza();
  }

  function programeaza(refa) {
    S.refa = S.refa || refa;
    if (S.raf) return;
    S.raf = requestAnimationFrame(() => {
      S.raf = 0;
      if (S.refa) deseneaza(); else seteazaViewBox();
      S.refa = false;
    });
  }

  function zoomLa(px, py, k) {
    const v = S.view, s = Math.min(60, Math.max(S.fitS * .5, v.s * k));
    const wx = v.x + px / v.s, wy = v.y + py / v.s;
    S.view = { s, x: wx - px / s, y: wy - py / s };
    S.vedere = 'liber';
    programeaza(true);
  }
  function zoomCentru(k) { const r = S.svg.getBoundingClientRect(); zoomLa(r.width / 2, r.height / 2, k); }

  // încadrează elementele selectate, cu loc pentru cote; nu mai departe decât tot peretele, nu mai aproape de 4×
  function zoomPe(ids) {
    const els = ids.map(gaseste).filter(e => e && cunoscut(e));
    if (!els.length) return deseneaza();
    S.fitS = incadrare().s;
    const r = S.svg.getBoundingClientRect(), H = inaltimeV(), pad = 64;
    const x0 = Math.min(...els.map(e => intX(e)[0])), x1 = Math.max(...els.map(e => intX(e)[1]));
    const b0 = Math.min(...els.map(e => intH(e)[0])), b1 = Math.max(...els.map(e => intH(e)[1]));
    let s = Math.min((r.width - 2 * pad) / Math.max(x1 - x0, 24), (r.height - 2 * pad) / Math.max(b1 - b0, 24));
    s = Math.min(Math.max(s, S.fitS), S.fitS * 4);
    const cx = (x0 + x1) / 2, cy = H - (b0 + b1) / 2;
    S.view = { s, x: cx - r.width / 2 / s, y: cy - r.height / 2 / s };
    S.vedere = 'sel';
    deseneaza();
  }
  // dacă elementele se văd întregi în vederea de acum
  function inVedere(els) {
    const v = S.view, d = S.dim, H = inaltimeV();
    if (!v || !d) return false;
    const vx1 = v.x + d.w / v.s, vy1 = v.y + d.h / v.s;
    return els.every(e => { const [a, b] = intX(e), [c, dd] = intH(e); return a >= v.x && b <= vx1 && H - dd >= v.y && H - c <= vy1; });
  }

  // la schimbarea mărimii desenului (fereastră, foaia de jos): aceeași încadrare, sau același centru dacă vederea e liberă
  function laRedimensionare() {
    if (S.print || !S.view) return;
    const r = S.svg.getBoundingClientRect();
    if (!r.width || !r.height || (S.dim && S.dim.w === r.width && S.dim.h === r.height)) return;
    if (S.vedere === 'sel' && S.sel.map(gaseste).some(e => e && cunoscut(e))) return zoomPe(S.sel);
    if (S.vedere !== 'liber') return potriveste();
    const v = S.view, d = S.dim || { w: r.width, h: r.height };
    S.fitS = incadrare().s;
    S.view = { s: v.s, x: v.x + (d.w - r.width) / 2 / v.s, y: v.y + (d.h - r.height) / 2 / v.s };
    deseneaza();
  }

  // ---------------------------------------------------------------- pan / zoom cu mouse și degete (Pointer Events)
  function initZoom(svg) {
    const pts = new Map();
    let g0 = null, mutat = false, tinta = null, shift = false;
    const gest = () => {
      const a = [...pts.values()], n = a.length;
      const cx = a.reduce((s, p) => s + p.x, 0) / n, cy = a.reduce((s, p) => s + p.y, 0) / n;
      return { n, cx, cy, d: n > 1 ? Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y) : 0, view: Object.assign({}, S.view) };
    };
    svg.addEventListener('pointerdown', e => {
      if (pts.size === 0) { mutat = false; tinta = e.target.closest('[data-pasi]') || e.target.closest('[data-id]'); shift = e.shiftKey; }
      try { svg.setPointerCapture(e.pointerId); } catch (_) { /* evenimente sintetice */ }
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      g0 = gest();
    });
    svg.addEventListener('pointermove', e => {
      if (!pts.has(e.pointerId)) return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      const g = gest();
      if (g.n !== g0.n) { g0 = g; return; }
      if (!mutat && Math.hypot(g.cx - g0.cx, g.cy - g0.cy) < 5 && Math.abs(g.d - g0.d) < 5) return;
      mutat = true;
      S.vedere = 'liber';
      const r = svg.getBoundingClientRect(), v0 = g0.view;
      const s = g.n > 1 && g0.d > 0 ? Math.min(60, Math.max(S.fitS * .5, v0.s * g.d / g0.d)) : v0.s;
      const wx = v0.x + (g0.cx - r.left) / v0.s, wy = v0.y + (g0.cy - r.top) / v0.s;
      S.view = { s, x: wx - (g.cx - r.left) / s, y: wy - (g.cy - r.top) / s };
      programeaza(s !== S.lastS);
      S.lastS = s;
    });
    const sus = e => {
      if (!pts.has(e.pointerId)) return;
      pts.delete(e.pointerId);
      if (pts.size === 0 && !mutat) {
        if (tinta && tinta.dataset.pasi) deschidePasi(tinta.dataset.pasi, tinta.closest('[data-id]').dataset.id);
        else apasare(tinta ? tinta.dataset.id : null, shift);
      }
      if (pts.size) g0 = gest();
    };
    svg.addEventListener('pointerup', sus);
    svg.addEventListener('pointercancel', sus);
    svg.addEventListener('wheel', e => {
      e.preventDefault();
      const r = svg.getBoundingClientRect();
      zoomLa(e.clientX - r.left, e.clientY - r.top, Math.exp(-e.deltaY * .0015));
    }, { passive: false });
  }

  // numele elementului de sub mouse
  function initHover(svg) {
    const tip = document.getElementById('eticheta-hover'), box = svg.parentNode;
    svg.addEventListener('pointermove', ev => {
      const t = ev.pointerType === 'mouse' && !ev.buttons && ev.target.closest('[data-id]'), e = t && gaseste(t.dataset.id);
      if (!e) { tip.hidden = true; return; }
      const peSemn = !!ev.target.closest('[data-pasi]'), prim = S.sel.length && gaseste(S.sel[0]);
      const dist = prim && cunoscut(prim) && cunoscut(e) && !S.sel.includes(e.id) ? (S.masura ? 'clic' : 'Shift + clic') : '';
      tip.innerHTML = `<b>${esc(e.id)}</b>${esc(e.nume)}` +
        (pasiDetaliu(e) ? `<span class="tp-pasi">${peSemn ? 'clic: pașii de montaj' : 'are pași de montaj: clic pe ▶'}</span>` : '') +
        (dist && !peSemn ? `<em>${dist}: distanța față de ${esc(prim.id)}</em>` : '');
      tip.hidden = false;
      const r = box.getBoundingClientRect();
      let x = ev.clientX - r.left + 14;
      const y = ev.clientY - r.top + 16;
      if (x + tip.offsetWidth > r.width - 8) x = ev.clientX - r.left - tip.offsetWidth - 10;
      tip.style.transform = `translate(${x}px, ${y}px)`;
    });
    svg.addEventListener('pointerleave', () => { tip.hidden = true; });
  }

  // ---------------------------------------------------------------- verificări automate
  function verificari() {
    const p = S.per, L = p.lungime, H = inaltimeV(), out = [];
    const els = elemente();
    const x1 = e => e.punct ? e.x : e.x + e.lat, h1 = e => e.punct ? e.h : e.h + e.inalt;
    for (const e of els) {
      if (!STARI[e.stare]) out.push({ nivel: 'atentie', text: `${e.id}: fără stare.`, ids: [e.id] });
      if (!e.sursa) out.push({ nivel: 'atentie', text: `${e.id}: fără sursă (planșă sau decizie).`, ids: [e.id] });
      if (cunoscut(e) && (e.x < -.05 || x1(e) > L + .05)) out.push({ nivel: 'atentie', text: `${e.id} iese din perete: x ${f(e.x)}–${f(x1(e))}, peretele are ${f(L)} cm.`, ids: [e.id] });
      if (cunoscut(e) && eTavan() && (e.h < -.05 || h1(e) > H + .05)) out.push({ nivel: 'atentie', text: `${e.id} iese din cameră: y ${f(e.h)}–${f(h1(e))}, camera are ${f(H)} cm.`, ids: [e.id] });
    }
    const mob = els.filter(e => e.strat === 'mobila' && cunoscut(e));
    const gips = els.filter(e => ['roca', 'nisa', 'masca'].includes(e.tip) && cunoscut(e));
    for (const m of mob) for (const g of gips) {
      if (inFataDe(m, g.id)) continue;
      const ox = Math.min(x1(m), x1(g)) - Math.max(m.x, g.x), oh = Math.min(h1(m), h1(g)) - Math.max(m.h, g.h);
      if (ox > .5 && oh > .5) out.push({ nivel: 'atentie', text: `${m.id} (${m.nume}) se suprapune cu ${g.id} (${g.nume}) pe x ${f(Math.max(m.x, g.x))}–${f(Math.min(x1(m), x1(g)))}.`, ids: [m.id, g.id] });
    }
    for (const e of els.filter(x => x.strat === 'electric' && x.punct && cunoscut(x))) {
      for (const m of mob) {
        if (e.x > m.x && e.x < x1(m) && e.h > m.h && e.h < h1(m) && e.in !== m.id && !inFataDe(m, e.id))
          out.push({ nivel: 'atentie', text: `${e.id} e în dreptul lui ${m.id}, dar nu e marcat ca montat în mobilier.`, ids: [e.id, m.id] });
      }
    }
    const nec = els.filter(e => !cunoscut(e));
    if (nec.length) out.push({ nivel: 'info', text: `${nec.length} elemente nu au încă poziție pe desen. Se măsoară pe șantier și se trec în date.`, ids: nec.map(e => e.id) });
    const dv = els.filter(e => e.stare === 'de-verificat');
    if (dv.length) out.push({ nivel: 'info', text: `${dv.length} elemente sunt de verificat.`, ids: dv.map(e => e.id) });
    if (!eTavan() && S.cam.inaltime.stare === 'de-verificat') out.push({ nivel: 'info', text: S.cam.inaltime.nota });
    return out.concat(p.avertismente || []);
  }

  // ---------------------------------------------------------------- texte despre un element
  function pozitieText(e) {
    if (!cunoscut(e)) return 'de măsurat pe șantier';
    const ap = e.pozitie === 'aprox' ? '~' : '';
    const h = axe().h;
    return e.punct ? `axa la x = ${ap}${f(e.x)}, ${h} = ${ap}${f(e.h)}` : `x = ${ap}${f(e.x)}–${ap}${f(e.x + e.lat)}, ${h} = ${ap}${f(e.h)}–${ap}${f(e.h + e.inalt)}`;
  }
  function scurtPozitie(e) {
    if (!cunoscut(e)) return 'fără poziție, de măsurat';
    const ap = e.pozitie === 'aprox' ? '~' : '';
    const h = axe().h;
    return e.punct ? `x ${ap}${f(e.x)} · ${h} ${ap}${f(e.h)}` : `x ${ap}${f(e.x)}–${f(e.x + e.lat)} · ${h} ${ap}${f(e.h)}–${f(e.h + e.inalt)}`;
  }
  function dimText(e) {
    if (e.punct || !cunoscut(e)) return '';
    if (e.tip === 'banda-led' || e.tip === 'sina') return `lungime ${f(Math.max(e.lat, e.inalt))} cm`;
    return [e.lat, e.inalt].map(f).join(' × ') + (e.adanc ? ' × ' + f(e.adanc) : '') + ' cm';
  }
  function linkRaport(e) {
    const msg = `${S.cam.nume} — ${S.per.nume} — ${e.id} (${e.nume}): ${pozitieText(e)}. Corectură: `;
    return 'https://wa.me/?text=' + encodeURIComponent(msg);
  }
  function detaliuHtml(e) {
    if (!e.detaliu) return '';
    const d = pasiDetaliu(e);
    return d ? `${esc(e.detaliu)} — ${esc(d.nume)}` : `Detaliul ${esc(e.detaliu)}: pașii de montaj urmează (etapa 3).`;
  }
  const culoareStare = e => (STARI[e.stare] || STARI.proiect).culoare;
  const badge = e => `<span class="badge" style="background:${culoareStare(e)}">${esc(e.id)}</span>`;
  const badgeBtn = (e, act) => `<button type="button" class="badge" style="background:${culoareStare(e)}" data-act="${act}" data-id="${esc(e.id)}" title="${esc(e.id)}: ${esc(e.nume)}">${esc(e.id)}</button>`;

  // ---------------------------------------------------------------- selecția
  // O atingere alege elementul (altul îl înlocuiește; același îl deselectează). Distanța se cere explicit:
  // „Măsoară” din fișă, sau Shift + clic pe al doilea element. În modul de măsurare, primul element rămâne
  // punctul de pornire și fiecare element ales după el dă distanța până la el, până la „Gata”, ✕, Înapoi sau Esc.
  function urmatoarea(id, masoara) {
    const e = id && gaseste(id);
    if (!e) return [];
    const prim = S.sel.length ? gaseste(S.sel[0]) : null;
    if (masoara && prim) {
      if (prim.id === id) return S.sel;
      return cunoscut(prim) && cunoscut(e) ? [prim.id, id] : [id];
    }
    if (S.sel.length === 1 && S.sel[0] === id) return [];
    return [id];
  }
  // după o schimbare a selecției: modul de măsurare rămâne doar cât timp punctul de pornire e același
  function aplicaSelectia(urm, masoara) {
    const prim = S.sel[0];
    S.sel = urm;
    S.masura = !!masoara && urm.length > 0 && urm[0] === prim && (urm.length === 2 || S.masura);
  }
  // click sau atingere pe desen
  function apasare(id, shift) {
    const masoara = !!id && S.sel.length > 0 && (S.masura || (shift && S.sel.length === 1));
    aplicaSelectia(urmatoarea(id, masoara), masoara);
    document.getElementById('eticheta-hover').hidden = true;
    // pe ecran îngust, vederea se mută singură pe selecție și înapoi pe tot peretele
    if (ingust()) { if (S.sel.length) zoomPe(S.sel); else potriveste(); } else deseneaza();
    panou();
  }
  // din listă, tabel sau verificări; pornește stratul elementului dacă era ascuns. Două coduri = distanța dintre ele.
  function selecteaza(ids, zoom) {
    const els = ids.map(gaseste).filter(Boolean).slice(0, 2);
    const ascunse = els.filter(e => !vizibil(e));
    ascunse.forEach(e => { S.viz[e.strat] = true; });
    if (ascunse.length) { salveaza(); comenziStraturi(); lista(); tabel(); }
    S.sel = els.length === 2 && !els.every(cunoscut) ? [els[0].id] : els.map(e => e.id);
    S.masura = S.sel.length === 2;
    const desenate = S.sel.map(gaseste).filter(cunoscut);
    if (zoom && desenate.length && (ingust() || !inVedere(desenate))) zoomPe(S.sel); else deseneaza();
    panou();
  }
  function dinLista(id) {
    const prim = S.sel[0], masoara = S.masura && S.sel.length > 0;
    const urm = urmatoarea(id, masoara);
    selecteaza(urm, true);
    // a ales din nou punctul de pornire: rămâne în modul de măsurare
    if (masoara && urm.length === 1 && urm[0] === prim) { S.masura = true; panou(); }
  }
  // „Măsoară”: elementul ales rămâne punctul de pornire
  function incepeMasura() {
    const prim = S.sel.length && gaseste(S.sel[0]);
    if (!prim || !cunoscut(prim)) return;
    S.sel = [prim.id]; S.masura = true;
    if (ingust()) potriveste(); else deseneaza();
    panou();
  }
  // „Anulează” (încă nu e ales al doilea element): rămâne ales doar primul
  function anuleazaMasura() { S.masura = false; selecteaza(S.sel.slice(0, 1), true); }

  // pașii de montaj: se deschid peste desen; elementul de pe care s-au deschis rămâne ales
  function linkPasi(id, k) {
    const pag = (location.pathname.split('/').pop() || 'index.html'), are = v => v.elemente.some(e => e.detaliu === id);
    const v = are(S.per) ? S.per : vederi().find(are) || S.per;
    return `${SITE}${pag}#${encodeURIComponent(v.id)}?pasi=${encodeURIComponent(id).replace(/'/g, '%27')}&pas=${k}`;
  }
  // „Se aplică la”: elementele detaliului din toată camera. Un cod închide fereastra și arată elementul pe peretele
  // lui; mutarea se face după ce fereastra și-a scos intrarea din istoric (S.dupaPasi).
  function deschidePasi(id, elId, pas) {
    if (elId && !S.sel.includes(elId)) { S.masura = false; S.sel = [elId]; deseneaza(); panou(); }
    const d = detaliiCamera().find(x => x.id === id);
    const elemente = d ? d.els.map(({ e, v, et }) => ({ id: e.id, et, perete: v.id, nume: e.nume, unde: v.nume, culoare: culoareStare(e) })) : [];
    const arata = (perete, elId2) => { S.dupaPasi = () => laElement(perete, elId2); };
    if (!window.Pasi || !window.Pasi.deschide(id, { pas, link: k => linkPasi(id, k), elemente, arata })) return;
    const dlg = window.Pasi.dialog();
    if (!dlg.dataset.istoric) {
      dlg.dataset.istoric = '1';
      dlg.addEventListener('close', () => iesi('pasi', () => { montaj(); const f = S.dupaPasi; S.dupaPasi = null; if (f) f(); }));
    }
    intra('pasi', () => dlg.close());
  }

  // ---------------------------------------------------------------- panoul: fișa, distanțele, rezumatul
  function coteGrid(e) {
    const H = inaltimeV(), L = S.per.lungime, [x0, x1] = intX(e), [b0, b1] = intH(e), a = axe();
    const ap = e.pozitie === 'aprox' ? '~' : '', apT = aproxH() || ap;
    const c = (v, et, cls) => `<span class="c${cls ? ' ' + cls : ''}"><b>${v}</b><small>${et}</small></span>`;
    const oriz = e.punct ? [c(ap + f(x0), a.st), c(ap + f(L - x0), a.dr)]
      : [c(ap + f(x0), a.st), c(f(x1 - x0), 'lățime', 'el'), c(ap + f(L - x1), a.dr)];
    const vert = [c(ap + f(b0), a.jos)].concat(e.punct ? [] : [c(f(b1 - b0), eTavan() ? 'adâncime' : 'înălțime', 'el')])
      .concat(b1 <= H + .01 ? [c(apT + f(H - b1), a.sus)] : []);
    return `<div class="cote-titlu">Cote în cm${e.punct ? ', la axa elementului' : ''}</div><div class="cote-grid">
      <div class="cote-rand n${oriz.length}"><span class="cote-et">${a.o}</span>${oriz.join('')}</div>
      <div class="cote-rand n${vert.length}"><span class="cote-et">${a.v}</span>${vert.join('')}</div></div>`;
  }
  // Fișa are două forme. Scurtă (foaia de jos pe telefon, după o atingere): codul, numele, trei cote și acțiunile,
  // cu „Detalii” care deschide foaia. Întreagă (panoul, foaia deschisă): toate cele șase cote, acțiunile, nota, iar
  // ce este, stratul, dimensiunile, finisajul și sursa într-o secțiune care se deschide la cerere.
  const fisaScurta = () => foaie() && S.panou === 'scurt';
  const capFisa = (e, sub) => {
    const st = STARI[e.stare] || STARI.proiect;
    return `<div class="fisa-cap">${badge(e)}<div class="fisa-titlu"><b>${esc(e.nume)}</b>
        <span class="stare-text" style="--c:${st.culoare}"><i></i>${sub || st.nume + (e.pozitie === 'aprox' ? ' · poziție aproximativă' : '')}</span></div>
        <button type="button" class="buton-icon" data-act="inchide" title="Anulează selecția (Esc)" aria-label="Anulează selecția">${ICON.inchide}</button></div>`;
  };
  function coteScurte(e) {
    const a = axe(), ap = e.pozitie === 'aprox' ? '~' : '', [x0] = intX(e), [b0] = intH(e);
    const c = (v, et, cls) => `<span class="c${cls ? ' ' + cls : ''}"><b>${v}</b><small>${et}</small></span>`;
    const cote = [c(ap + f(x0), a.st), c(ap + f(b0), a.jos)];
    if (!e.punct) cote.push(c(`${f(e.lat)} × ${f(e.inalt)}`, eTavan() ? 'lățime × adâncime' : 'lățime × înălțime', 'el'));
    return `<div class="cote-scurte n${cote.length}">${cote.join('')}</div>`;
  }
  function fisaHtml(e) {
    if (fisaScurta()) {
      if (S.masura) return `<div class="fisa scurta">${capFisa(e, 'punctul de pornire al măsurătorii')}<p class="indiciu">Alege al doilea element, pe desen sau în listă.</p></div>`;
      return `<div class="fisa scurta">${capFisa(e)}${cunoscut(e) ? coteScurte(e) : '<p class="fara-poz">Poziția nu e cunoscută încă: se măsoară pe șantier.</p>'}${actiuniFisa(e, true)}</div>`;
    }
    const sr = strat(e.strat), gazda = e.in && gaseste(e.in);
    const rows = [
      ['Ce este', esc(TIPURI[e.tip] || e.tip)],
      ['Strat', esc(sr ? sr.nume : 'structură')],
      ['Dimensiuni', esc(dimText(e))],
      ['Finisaj', esc(e.finisaj ? (FINISAJE[e.finisaj] || { nume: e.finisaj }).nume : '')],
      ['Montat în', gazda ? `${badgeBtn(gazda, 'arata')} ${esc(gazda.nume)}` : esc(e.in || '')],
      ['Sursa', esc(e.sursa || '—')],
      ['Detaliu', detaliuHtml(e)],
    ].filter(r => r[1]);
    return `<div class="fisa">${capFisa(e)}
      ${cunoscut(e) ? coteGrid(e) : '<p class="fara-poz">Poziția nu e cunoscută încă: se măsoară pe șantier și se trece în date.</p>'}
      ${actiuniFisa(e)}
      ${e.nota ? `<p class="fisa-nota">${esc(e.nota)}</p>` : ''}
      <details class="fisa-mai"${S.fisaMai ? ' open' : ''}><summary>Sursa, stratul, dimensiunile</summary>
        <dl class="detalii">${rows.map(r => `<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join('')}</dl></details>
      <div class="actiuni"><a class="buton whatsapp" href="${linkRaport(e)}" target="_blank" rel="noopener">${ICON.mesaj}Raportează o corectură</a></div></div>`;
  }
  // acțiunile fișei: pașii de montaj (dacă are), măsurarea până la alt element și, la fișa scurtă, „Detalii”
  function actiuniFisa(e, scurta) {
    const b = [];
    if (pasiDetaliu(e)) b.push(`<button type="button" class="buton pasi-btn" data-act="pasi" data-id="${esc(e.detaliu)}">${ICON.reda}Cum se montează · ${window.Pasi.numar(e.detaliu)} pași</button>`);
    const al = [];
    if (cunoscut(e)) al.push(S.masura
      ? `<button type="button" class="buton activ" data-act="anuleaza-masura">${ICON.rigla}Anulează măsurarea</button>`
      : `<button type="button" class="buton" data-act="masoara" title="Sau Shift + clic pe al doilea element">${ICON.rigla}${scurta ? 'Măsoară' : 'Măsoară până la…'}</button>`);
    if (scurta) al.push(`<button type="button" class="buton" data-act="detalii" aria-label="Toate cotele, nota și sursa">Detalii${ICON.sus}</button>`);
    if (al.length) b.push(`<div class="fisa-actiuni-rand">${al.join('')}</div>`);
    return b.length ? `<div class="fisa-actiuni">${b.join('')}</div>` : '';
  }
  function muchie(E, v, dir) {
    if (E.punct) return `axa lui ${E.id}`;
    const [v0] = dir === 'x' ? intX(E) : intH(E), jos = Math.abs(v - v0) < .01;
    const m = axe().m;
    return `${dir === 'x' ? (jos ? m[0] : m[1]) : (jos ? m[2] : m[3])} a lui ${E.id}`;
  }
  function intreHtml(A, B) {
    const m = masuratori(A, B), ap = A.pozitie === 'aprox' || B.pozitie === 'aprox' ? '~' : '';
    const linii = (seg, dir) => seg.map(([a, b, oa, ob]) => `<li><b>${ap}${f(b - a)}</b> cm între ${muchie([A, B][oa], a, dir)} și ${muchie([A, B][ob], b, dir)}</li>`).join('');
    return `<div class="fisa">
      <div class="fisa-cap"><span class="pereche">${badgeBtn(A, 'doar')}↔${badgeBtn(B, 'doar')}</span><div class="fisa-titlu"><b>Distanța dintre ele</b></div>
        <button type="button" class="buton-icon" data-act="inchide" title="Anulează selecția (Esc)" aria-label="Anulează selecția">${ICON.inchide}</button></div>
      ${fisaScurta() ? '' : `<p class="intre">${esc(A.id)}: ${esc(A.nume)}<br>${esc(B.id)}: ${esc(B.nume)}</p>`}
      <div class="masuri"><h4>Pe orizontală</h4><ul>${linii(m.oriz.seg, 'x') || '<li>aceeași poziție</li>'}</ul>
        <h4>Pe verticală</h4><ul>${linii(m.vert.seg, 'h') || '<li>aceeași înălțime</li>'}</ul></div>
      ${fisaScurta() ? '' : `<p class="indiciu">Alege alt element: măsori de la ${esc(A.id)} până la el. ✕, „Gata” sau Esc închide măsurarea. Un cod de mai sus îl lasă ales doar pe el.</p>`}</div>`;
  }
  // distanța principală dintre două elemente, pentru rezumat și pentru banda de sus
  function distantaPrincipala(A, B) {
    const m = masuratori(A, B), ap = A.pozitie === 'aprox' || B.pozitie === 'aprox' ? '~' : '';
    const t = (seg, dir) => `${ap}${f(seg[1] - seg[0])} cm ${dir}`;
    const parti = [];
    if (m.oriz.gol) parti.push(t(m.oriz.seg[0], 'pe orizontală'));
    if (m.vert.gol) parti.push(t(m.vert.seg[0], 'pe verticală'));
    if (!parti.length && m.oriz.seg.length) parti.push(t(m.oriz.seg[0], 'între margini, pe orizontală'));
    if (!parti.length && m.vert.seg.length) parti.push(t(m.vert.seg[0], 'între margini, pe verticală'));
    return parti.join(' · ') || 'aceeași poziție';
  }
  // banda albastră de deasupra desenului, cât timp e pornit modul de măsurare
  function banda() {
    const b = document.getElementById('banda-masura'), sel = S.sel.map(gaseste).filter(Boolean);
    b.hidden = !S.masura || !sel.length;
    if (b.hidden) { b.innerHTML = ''; return; }
    b.innerHTML = sel.length === 1
      ? `<span class="bm-text"><b>Măsori de la ${badge(sel[0])}</b><small>Alege al doilea element, pe desen sau în listă</small></span>
         <button type="button" class="bm-buton" data-act="anuleaza-masura">Anulează</button>`
      : `<span class="bm-text"><b>${badge(sel[0])} ↔ ${badge(sel[1])}</b><small>${distantaPrincipala(sel[0], sel[1])}</small></span>
         <button type="button" class="bm-buton" data-act="inchide">${ICON.inchide}Gata</button>`;
  }
  // rândul de sus al foii de jos (telefon): ce e selectat sau câte elemente are peretele
  function rezumat() {
    const r = document.getElementById('panou-rezumat'), sel = S.sel.map(gaseste).filter(Boolean);
    let st = '', txt, sub;
    if (sel.length === 1 && S.masura) { st = badge(sel[0]); txt = `Măsori de la ${esc(sel[0].id)}`; sub = 'alege al doilea element'; }
    else if (sel.length === 1) { st = badge(sel[0]); txt = esc(sel[0].nume); sub = scurtPozitie(sel[0]); }
    else if (sel.length === 2) {
      st = badge(sel[0]) + '<span class="rz-sag">↔</span>' + badge(sel[1]);
      txt = distantaPrincipala(sel[0], sel[1]);
      sub = 'toate distanțele în fișă';
    } else {
      const at = verificari().filter(v => v.nivel === 'atentie').length;
      txt = `${elemente().length} elemente ${eTavan() ? 'pe tavan' : 'pe acest perete'}`;
      sub = (at ? `${at} atenționări · ` : '') + 'lista și verificările';
    }
    r.innerHTML = `${st}<span class="rz-text"><b>${txt}</b><small>${sub}</small></span><span class="rz-sageata">${ICON.sus}</span>`;
    // acțiunile de lângă rezumat: se văd și cu foaia închisă
    const a = [], e = sel.length === 1 ? sel[0] : null;
    if (e && pasiDetaliu(e)) a.push(`<button type="button" class="rz-buton pasi" data-act="pasi" data-id="${esc(e.detaliu)}" title="Cum se montează: ${window.Pasi.numar(e.detaliu)} pași" aria-label="Cum se montează">${ICON.reda}</button>`);
    if (e && cunoscut(e) && !S.masura) a.push(`<button type="button" class="rz-buton" data-act="masoara" title="Măsoară până la alt element" aria-label="Măsoară până la alt element">${ICON.rigla}</button>`);
    if (sel.length) a.push(`<button type="button" class="rz-buton" data-act="inchide" title="Anulează selecția" aria-label="Anulează selecția">${ICON.inchide}</button>`);
    document.getElementById('rezumat-actiuni').innerHTML = a.join('');
  }
  // Foaia de jos (telefon ținut vertical) are trei stări: „mic” (rândul de rezumat și pașii peretelui), „scurt” (fișa
  // scurtă a elementului ales) și „mare” (fișa întreagă și filele). O selecție nouă trece foaia din „mic” în „scurt”;
  // fără selecție, „scurt” revine la „mic”. Foaia deschisă („mare”) are o intrare în istoric: „Înapoi” o strânge.
  function stareFoaie(stare) {
    S.panou = stare;
    document.getElementById('panou').dataset.stare = stare;
    document.getElementById('panou-rezumat').setAttribute('aria-expanded', stare === 'mare');
  }
  function seteazaPanou(stare) {
    const era = S.panou;
    stareFoaie(stare);
    if (stare === 'mare' && era !== 'mare') intra('foaie', () => { stareFoaie(S.sel.length ? 'scurt' : 'mic'); panou(); });
    else if (stare !== 'mare' && era === 'mare') iesi('foaie');
    panou();
  }
  function panou() {
    const box = document.getElementById('selectie'), sel = S.sel.map(gaseste).filter(Boolean);
    if (foaie() && sel.length && S.panou === 'mic') stareFoaie('scurt');
    else if (!sel.length && S.panou === 'scurt') stareFoaie('mic');
    box.className = 'selectie' + (sel.length ? '' : ' gol');
    box.innerHTML = sel.length === 1 ? fisaHtml(sel[0]) : sel.length === 2 ? intreHtml(sel[0], sel[1])
      : `<p><b>${esc(S.per.nume)}</b> · ${esc(S.per.subtitlu)}</p>
         <p class="indiciu">Alege un element pe desen sau din listă: apar cotele lui. „Măsoară” din fișa lui dă distanța până la alt element.</p>`;
    const pp = pasiPereteHtml();
    document.getElementById('pasi-foaie').innerHTML = pp;
    document.getElementById('pasi-lista').innerHTML = pp;
    document.getElementById('panou').classList.toggle('cu-selectie', sel.length > 0);
    rezumat();
    banda();
    sincIstoric();
    document.querySelectorAll('#lista .rand, #santier .rand').forEach(b => b.classList.toggle('ales', S.sel.includes(b.dataset.id)));
    // la o selecție nouă, fișa trebuie să se vadă
    const cheie = S.sel.join(',');
    if (cheie && cheie !== S.selPanou) document.getElementById('panou-corp').scrollTo({ top: 0, behavior: 'smooth' });
    S.selPanou = cheie;
  }

  // echipele care lucrează la un detaliu, din „cine” al pașilor („echipa de gips-carton, după…” → „gips-carton”)
  const echipe = d => [...new Set(d.pasi.map(p => p.cine.split(/,| sau /)[0].trim().replace(/^echipa de /, ''))
    .filter(c => !/^(toată echipa|noi|beneficiarul)$/.test(c)))];
  // detaliile cu pași de pe peretele ales: în foaia închisă (telefon) și sus în fila Elemente
  function pasiPereteHtml() {
    const els = elemente().filter(pasiDetaliu), ids = [...new Set(els.map(e => e.detaliu))];
    if (!ids.length) return '';
    return `<div class="pp-titlu">Pași de montaj ${eTavan() ? 'pe tavan' : 'pe acest perete'}</div><div class="pp-carduri">${ids.map(id => {
      const d = window.DETALII[id], n = window.Pasi.numar(id), cod = els.filter(e => e.detaliu === id).map(e => e.id);
      return `<button type="button" class="pp-card" data-act="pasi" data-id="${esc(id)}" title="${esc(id)} — ${esc(d.nume)}: ${n} pași (${esc(cod.join(', '))})">
        <span class="pp-semn">${ICON.reda}</span><span class="pp-text"><b>${esc(id)} · ${esc(d.nume)}</b><small>${n} pași · ${esc(echipe(d).join(', '))} · ${esc(cod.join(', '))}</small></span></button>`;
    }).join('')}</div>`;
  }

  // ---------------------------------------------------------------- lista elementelor și verificările
  function lista() {
    const box = document.getElementById('lista'), q = S.cauta.trim().toLowerCase();
    // coloana codurilor, cât cel mai lung cod din cameră (bucătăria are coduri ca M01-DC0)
    box.style.setProperty('--cod', Math.max(50, 14 + 8 * Math.max(...vederi().flatMap(v => v.elemente.map(e => e.id.length)))) + 'px');
    const gasit = e => !q || `${e.id} ${e.nume} ${TIPURI[e.tip] || ''}`.toLowerCase().includes(q);
    const els = elemente().filter(gasit);
    const grupuri = straturiCamera().concat([STRUCTURA])
      .map(s => ({ s, els: els.filter(e => e.strat === s.id && cunoscut(e)).sort((a, b) => a.x - b.x) }))
      .concat([{ s: { id: 'fara', nume: 'Fără poziție, de măsurat', culoare: STARI['de-verificat'].culoare }, els: els.filter(e => !cunoscut(e)) }])
      .filter(g => g.els.length);
    box.innerHTML = grupuri.map(({ s, els: ge }) => {
      const ascuns = STRATURI.includes(s) && !S.viz[s.id];
      return `<div class="grup${ascuns ? ' ascuns' : ''}"><h3 style="--c:${s.culoare}"><i></i>${esc(s.nume)} <span class="nr">${ge.length}</span>${ascuns ? '<em>· ascuns pe desen</em>' : ''}</h3>
        <ul>${ge.map(e => `<li><button type="button" class="rand${S.sel.includes(e.id) ? ' ales' : ''}" data-act="rand" data-id="${esc(e.id)}">${badge(e)}<span class="nume">${esc(e.nume)}${pasiDetaliu(e) ? semnPasiHtml : ''}</span><span class="poz">${scurtPozitie(e)}</span></button></li>`).join('')}</ul></div>`;
    }).join('') || '<p class="gol-lista">Niciun element nu se potrivește căutării.</p>';
    document.getElementById('nr-elemente').textContent = elemente().length;
  }

  // Verificările, în două grupuri: „De rezolvat” (atenționările, deschis) și „Note și informații” (închis).
  // Fiecare text se vede pe 3 rânduri; o atingere pe el îl arată întreg, cu sursa.
  function listaVerificari() {
    const v = verificari(), at = v.filter(x => x.nivel === 'atentie'), inf = v.filter(x => x.nivel !== 'atentie');
    // pe filă: numărul atenționărilor sau, dacă nu sunt, totalul (patru file trebuie să încapă pe 320 px)
    document.getElementById('nr-verificari').outerHTML = `<span id="nr-verificari">${at.length ? `<span class="nr atentie" title="${at.length} atenționări din ${v.length} verificări">${at.length}</span>` : `<span class="nr" title="verificări">${v.length}</span>`}</span>`;
    const item = x => {
      const ids = (x.ids || []).filter(gaseste), clic = ids.length && ids.length <= 2;
      return `<li class="${x.nivel}"><i class="v-ic">${x.nivel === 'atentie' ? '!' : 'i'}</i>
        <div class="v-corp"><p class="v-text" role="button" tabindex="0" aria-expanded="false" data-act="v-text">${esc(x.text)}</p>
        ${x.sursa ? `<small class="v-sursa">Sursa: ${esc(x.sursa)}</small>` : ''}
        ${ids.length > 2 ? `<div class="v-ids">${ids.map(id => badgeBtn(gaseste(id), 'arata')).join('')}</div>` : ''}
        ${clic ? `<button type="button" class="v-arata" data-act="arata" data-id="${ids.join(',')}">Arată pe desen${ids.length === 2 ? ', cu distanța' : ''} →</button>` : ''}</div></li>`;
    };
    const grup = (titlu, lista, deschis, cls) => lista.length ? `<details class="v-grup ${cls}"${deschis ? ' open' : ''}><summary>${titlu} <span class="nr">${lista.length}</span></summary><ul class="verif">${lista.map(item).join('')}</ul></details>` : '';
    document.getElementById('verificari').innerHTML = (grup('De rezolvat', at, true, 'v-atentie') + grup('Note și informații', inf, !at.length, 'v-info')) || '<p class="gol-lista">Nicio problemă găsită.</p>';
    document.getElementById('verificari-tipar').innerHTML = at.concat(inf).map(x => `<li>${x.nivel === 'atentie' ? '⚠️ ' : ''}${esc(x.text)}${x.ids && x.ids.length > 2 ? ` (${x.ids.map(esc).join(', ')})` : ''}${x.sursa ? ` <span class="sursa">(${esc(x.sursa)})</span>` : ''}</li>`).join('');
  }
  // ---------------------------------------------------------------- fila „Montaj”: toate detaliile din cameră
  // numele pereților unui detaliu: „Pereții cu dulapul M12 și cu biroul”, „Peretele cu fereastra și tavanul”
  function numePereti(ps) {
    const lista = a => a.length > 1 ? a.slice(0, -1).join(', ') + ' și ' + a[a.length - 1] : a[0];
    const pe = ps.filter(p => /^Peretele /.test(p.nume)).map(p => p.nume.replace(/^Peretele /, ''));
    const alt = ps.filter(p => !/^Peretele /.test(p.nume)).map(p => p.nume.toLowerCase());
    let t = pe.length > 1 ? 'Pereții ' + lista(pe) : pe.length ? 'Peretele ' + pe[0] : '';
    if (alt.length) t = t ? t + ' și ' + lista(alt) : lista(alt)[0].toUpperCase() + lista(alt).slice(1);
    return t;
  }
  const arePasi = id => !!(window.Pasi && window.DETALII && window.DETALII[id]);
  // detaliile din toată camera, cu elementele și pereții lor: întâi cele cu pași de pe peretele ales, apoi
  // celelalte cu pași, apoi cele fără pași
  function detaliiCamera() {
    const m = new Map();
    for (const v of vederi()) for (const e of v.elemente) {
      if (!e.detaliu) continue;
      if (!m.has(e.detaliu)) m.set(e.detaliu, { id: e.detaliu, els: [], pereti: [] });
      const d = m.get(e.detaliu);
      if (!d.els.some(x => x.e.id === e.id && x.v === v)) d.els.push({ e, v });
      if (!d.pereti.includes(v)) d.pereti.push(v);
    }
    const rang = d => arePasi(d.id) ? (d.pereti.includes(S.per) ? 0 : 1) : 2;
    // același cod pe mai mulți pereți (plinta G3 pe N și pe E): eticheta are și litera peretelui
    for (const d of m.values()) for (const x of d.els) x.et = d.els.filter(y => y.e.id === x.e.id).length > 1 ? `${x.e.id} · ${x.v.id}` : x.e.id;
    return [...m.values()].sort((a, b) => rang(a) - rang(b));
  }
  function montaj() {
    const L = detaliiCamera(), tab = document.querySelector('.file [data-id="montaj"]'), box = document.getElementById('montaj');
    tab.hidden = !L.length;
    document.getElementById('nr-montaj').textContent = L.filter(d => arePasi(d.id)).length || '';
    if (!L.length) { box.innerHTML = ''; if (tab.classList.contains('on')) arataFila('elemente'); return; }
    box.innerHTML = `<p class="nota">Detaliile din ${esc(S.cam.nume.toLowerCase())}, întâi cele de pe ${eTavan() ? 'tavan' : 'peretele ales'}. Un cod te duce la elementul lui, pe peretele lui.</p>` + L.map(d => {
      const det = arePasi(d.id) && window.DETALII[d.id], n = det ? window.Pasi.numar(d.id) : 0, pr = det && window.Pasi.progres(d.id);
      const vazut = pr && pr.vazute ? ` · ${pr.vazute >= n ? 'le-ai văzut pe toate' : `ai văzut ${pr.vazute} din ${n}`}` : '';
      const els = d.els.map(({ e, v, et }) => `<button type="button" class="badge" style="background:${culoareStare(e)}" data-act="la-element" data-id="${esc(v.id)}|${esc(e.id)}" title="${esc(e.id)}: ${esc(e.nume)} (${esc(v.nume)})">${esc(et)}</button>`).join('');
      const cap = `<span class="pp-semn${det ? '' : ' gol'}">${det ? ICON.reda : ''}</span><span class="pp-text"><b>${esc(d.id)}${det ? ' · ' + esc(det.nume) : ''}</b>
        <small>${det ? n + ' pași' : 'pașii urmează'} · ${esc(numePereti(d.pereti))}${vazut}</small></span>`;
      return `<div class="mj-card${det ? '' : ' fara'}">${det ? `<button type="button" class="pp-card" data-act="pasi" data-id="${esc(d.id)}">${cap}</button>` : `<div class="pp-card">${cap}</div>`}
        <div class="mj-els">${els}</div></div>`;
    }).join('');
  }
  // un cod din fila Montaj: elementul se alege pe peretele lui (peretele se schimbă dacă e nevoie)
  function laElement(perId, id) {
    if (perId === S.per.id) return selecteaza([id], true);
    alegePerete(perId, () => selecteaza([id], true));
  }

  function arataFila(id) {
    document.querySelectorAll('.file button').forEach(b => { const on = b.dataset.id === id; b.classList.toggle('on', on); b.setAttribute('aria-selected', on); });
    ['elemente', 'verificari', 'montaj', 'santier'].forEach(f => { const x = document.getElementById('fila-' + f); if (x) x.hidden = id !== f; });
  }

  // ---------------------------------------------------------------- tabelul complet (și pentru tipar)
  function tabel() {
    const tb = document.getElementById('tabel');
    const els = elemente().filter(vizibil)
      .sort((a, b) => (cunoscut(a) ? a.x : 1e9) - (cunoscut(b) ? b.x : 1e9));
    const key = cheieBifa;
    tb.innerHTML = `<table><thead><tr><th title="Bifează ce e făcut pe șantier">✓</th><th>ID</th><th>Ce</th><th>${esc(axe().thX)}</th><th>${esc(axe().thH)}</th><th>Dimensiuni</th><th>Stare</th><th>Sursa</th><th class="nu-print"></th></tr></thead><tbody>${
      els.map(e => {
        const st = STARI[e.stare] || STARI.proiect, ap = e.pozitie === 'aprox' ? '~' : '';
        const x = !cunoscut(e) ? 'de măsurat' : e.punct ? ap + f(e.x) : `${ap}${f(e.x)} – ${ap}${f(e.x + e.lat)}`;
        const hh = !cunoscut(e) ? '' : e.punct ? ap + f(e.h) : `${ap}${f(e.h)} – ${ap}${f(e.h + e.inalt)}`;
        return `<tr><td><input type="checkbox" data-k="${key(e)}" aria-label="${esc(e.id)} gata" ${localStorage.getItem(key(e)) ? 'checked' : ''}></td>
          <td>${badgeBtn(e, 'tabel')}</td>
          <td>${esc(e.nume)}${pasiDetaliu(e) ? semnPasiHtml : ''}</td><td class="num">${x}</td><td class="num">${hh}</td><td class="num">${dimText(e)}</td>
          <td style="color:${st.culoare}">${st.nume}</td><td class="sursa">${esc(e.sursa || '')}</td>
          <td class="nu-print"><a href="${linkRaport(e)}" target="_blank" rel="noopener" title="Raportează pe WhatsApp">raportează</a></td></tr>`;
      }).join('')}</tbody></table>`;
    tb.querySelectorAll('input[data-k]').forEach(c => c.onchange = () => { bifeaza(c.dataset.k, c.checked); santier(); });
    santier();
  }
  const cheieBifa = e => `${LS}${S.cam.id}:${S.per.id}:${e.id}`;
  function bifeaza(k, da) { if (da) localStorage.setItem(k, '1'); else localStorage.removeItem(k); }

  // fila „Șantier”: aceleași bife ca tabelul complet, cu coloanele esențiale
  function santier() {
    const box = document.getElementById('santier');
    if (!box) return;
    const els = elemente().filter(vizibil).sort((a, b) => (cunoscut(a) ? a.x : 1e9) - (cunoscut(b) ? b.x : 1e9));
    const gata = els.filter(e => localStorage.getItem(cheieBifa(e))).length;
    document.getElementById('nr-santier').textContent = `${gata}/${els.length}`;
    box.style.setProperty('--cod', document.getElementById('lista').style.getPropertyValue('--cod'));
    box.innerHTML = `<p class="nota">Bifează ce e gata. Bifele rămân salvate în acest browser.</p>
      <ul class="bife">${els.map(e => `<li class="${localStorage.getItem(cheieBifa(e)) ? 'gata' : ''}">
        <input type="checkbox" data-k="${cheieBifa(e)}" aria-label="${esc(e.id)} gata" ${localStorage.getItem(cheieBifa(e)) ? 'checked' : ''}>
        <button type="button" class="rand${S.sel.includes(e.id) ? ' ales' : ''}" data-act="rand" data-id="${esc(e.id)}">${badge(e)}<span class="nume">${esc(e.nume)}</span><span class="poz">${scurtPozitie(e)}</span></button></li>`).join('')}</ul>`;
    box.querySelectorAll('input[data-k]').forEach(c => c.onchange = () => { bifeaza(c.dataset.k, c.checked); tabel(); });
  }

  // ---------------------------------------------------------------- butonul Înapoi al telefonului și al browserului
  // Selecția, fereastra cu pași, ajutorul și tabelul complet pun câte o intrare în istoric: „Înapoi” le închide
  // pe rând, în loc să părăsească pagina. Când se închid din pagină (✕, Esc), intrarea se scoate cu history.back().
  const ISTORIC = [];
  let popIgnorat = 0, dupaPop = null;
  const inIstoric = cheie => ISTORIC.some(x => x.cheie === cheie);
  function intra(cheie, inchide) {
    if (inIstoric(cheie)) return;
    ISTORIC.push({ cheie, inchide });
    history.pushState({ desen: cheie }, '', location.href);
  }
  function iesi(cheie, apoi) {
    const i = ISTORIC.findIndex(x => x.cheie === cheie);
    if (i < 0) { if (apoi) apoi(); return; }
    ISTORIC.splice(i, 1);
    popIgnorat++; dupaPop = apoi || null;
    history.back();
  }
  function laPop() {
    if (popIgnorat) { popIgnorat--; const fn = dupaPop; dupaPop = null; if (fn) fn(); return; }
    const x = ISTORIC.pop();
    if (x) x.inchide();
  }
  // selecția are o singură intrare, oricâte elemente se aleg una după alta
  function sincIstoric() {
    if (S.sel.length && !inIstoric('sel')) intra('sel', () => { S.sel = []; S.masura = false; if (ingust()) potriveste(); else deseneaza(); panou(); });
    else if (!S.sel.length && inIstoric('sel')) iesi('sel');
  }
  function deschideTabel() {
    document.body.classList.add('tabel-deschis');
    intra('tabel', () => document.body.classList.remove('tabel-deschis'));
    document.querySelector('.sub').scrollTop = 0;
  }
  function inchideTabel(apoi) {
    document.body.classList.remove('tabel-deschis');
    iesi('tabel', apoi);
  }

  // ---------------------------------------------------------------- planul mic al camerei și pereții
  // Planul apare în trei locuri: în bară (calculator), în butonul „Alege peretele” (telefon) și în lista pereților.
  // „activ”: pereții se aleg cu click pe plan. Fiecare plan are săgeata lui (id-urile din SVG trebuie să difere).
  function desenPlan(box, activ) {
    const cam = S.cam, W = cam.plan.latime, D = cam.plan.adancime, m = 50, sag = 'sag-' + box.id;
    box.textContent = '';
    const svg = el('svg', { viewBox: `${-m} ${-m} ${W + 2 * m} ${D + 2 * m}`, role: 'img', 'aria-label': `Planul camerei, peretele ales: ${S.per.nume}` }, box);
    const mk = el('marker', { id: sag, viewBox: '0 0 10 10', refX: 5, refY: 5, markerWidth: 2.6, markerHeight: 2.6, orient: 'auto' }, el('defs', {}, svg));
    el('path', { d: 'M0,0 L10,5 L0,10 z', fill: '#8a5a2b' }, mk);
    const tav = activ && vederi().find(v => v.tip === 'tavan');
    const camera = el('rect', { x: 0, y: 0, width: W, height: D, fill: eTavan() ? '#e7d3bb' : '#fbfaf7', 'data-act': tav ? 'perete' : null, 'data-id': tav ? tav.id : null, class: tav ? 'activ' : null }, svg);
    if (tav) el('title', {}, camera, tav.nume);
    const Y = y => D - y;
    for (const p of cam.pereti) {
      const [[ax, ay], [bx, by]] = p.plan, poate = activ && p.etapa <= ETAPA, ales = p.id === S.per.id;
      const g = el('g', { class: poate ? 'activ' : null, 'data-act': poate ? 'perete' : null, 'data-id': poate ? p.id : null }, svg);
      if (activ) el('title', {}, g, p.nume + (p.etapa <= ETAPA ? '' : ` (în lucru, etapa ${p.etapa})`));
      el('line', { x1: ax, y1: Y(ay), x2: bx, y2: Y(by), stroke: ales ? '#8a5a2b' : p.etapa <= ETAPA ? '#6d635a' : '#a8a092', 'stroke-width': ales ? 64 : 34, 'stroke-linecap': 'square' }, g);
      if (poate) el('line', { x1: ax, y1: Y(ay), x2: bx, y2: Y(by), stroke: 'transparent', 'stroke-width': 120 }, g);
    }
    // privitorul: din mijlocul camerei spre peretele ales; la tavan, un cerc cu punct (privirea în sus)
    const cx = W / 2, cy = D / 2;
    if (S.per.plan) {
      const [[ax, ay], [bx, by]] = S.per.plan, mx = (ax + bx) / 2, my = (ay + by) / 2, k = .55;
      el('line', { x1: cx, y1: Y(cy), x2: cx + (mx - cx) * k, y2: Y(cy + (my - cy) * k), stroke: '#8a5a2b', 'stroke-width': 26, 'marker-end': `url(#${sag})` }, svg);
    }
    el('circle', { cx, cy: Y(cy), r: eTavan() ? 70 : 40, fill: '#fff', stroke: '#8a5a2b', 'stroke-width': 18 }, svg);
    if (eTavan()) el('circle', { cx, cy: Y(cy), r: 18, fill: '#8a5a2b' }, svg);
  }

  // codurile detaliilor cu pași de montaj de pe o vedere (toate variantele), pentru file și lista pereților
  const detaliiVedere = p => [...new Set(p.elemente.filter(pasiDetaliu).map(e => e.detaliu))];
  const tagPasi = id => `<span class="tag-pasi">${ICON.reda}${esc(id)}</span>`;

  function plan() {
    const v = vederi(), i = v.indexOf(S.per) + 1;
    desenPlan(document.getElementById('plan'), true);

    // pe calculator: filele pereților, cu ▶ la pereții care au pași de montaj
    const scurt = p => { const n = p.nume.replace(/^Peretele /, ''); return n[0].toUpperCase() + n.slice(1); };
    document.getElementById('pereti').innerHTML = v.map(p => {
      const activ = p.etapa <= ETAPA, ales = p.id === S.per.id, det = detaliiVedere(p);
      return `<button type="button" role="tab" aria-selected="${ales}" class="${ales ? 'on' : ''}" data-act="perete" data-id="${p.id}" ${activ ? '' : 'disabled'}
        title="${esc(p.nume)} — ${activ ? esc(p.subtitlu) : 'în lucru (etapa ' + p.etapa + ')'}${det.length ? ' · pași de montaj: ' + esc(det.join(', ')) : ''}">${esc(scurt(p))}${det.length ? `<span class="tab-pasi" aria-label="are pași de montaj">${ICON.reda}</span>` : ''}${activ ? '' : `<small>etapa ${p.etapa}</small>`}</button>`;
    }).join('');

    // pe telefon: butonul cu peretele ales, care deschide lista pereților
    document.getElementById('alege-perete').innerHTML = `<span id="plan-buton" class="ap-plan" aria-hidden="true"></span>
      <span class="ap-text"><b>${esc(S.per.nume)}</b><small>${esc(S.cam.nume)} · ${i} din ${v.length}</small></span>${ICON.jos}`;
    document.getElementById('alege-perete').title = `Alege peretele (${S.per.nume}, ${i} din ${v.length})`;
    desenPlan(document.getElementById('plan-buton'), false);
    document.getElementById('meniu-pereti').innerHTML = `<div class="meniu-cap">Alege peretele <small>${esc(S.cam.nume)} · ${v.length} vederi</small></div>
      <div class="mp-corp"><div id="plan-meniu" class="mp-plan"></div><ul class="mp-lista">${v.map(p => {
        const activ = p.etapa <= ETAPA, ales = p.id === S.per.id, det = detaliiVedere(p);
        return `<li><button type="button" class="mp-rand${ales ? ' on' : ''}" data-act="perete" data-id="${p.id}" ${activ ? '' : 'disabled'} aria-current="${ales}">
          <span class="mp-nume">${esc(p.nume)}</span><span class="mp-sub">${esc(activ ? p.subtitlu : 'în lucru, etapa ' + p.etapa)}</span>
          ${det.length ? `<span class="mp-pasi">${det.map(tagPasi).join('')}</span>` : ''}</button></li>`;
      }).join('')}</ul></div>`;
    desenPlan(document.getElementById('plan-meniu'), true);
  }

  // Pe calculator, dacă filele pereților nu încap în bară (holul are 6 vederi), bara folosește butonul „Alege peretele”,
  // ca pe telefon. Se verifică după ce bara are tot conținutul și la fiecare redimensionare.
  function potrivesteBara() {
    const bara = document.querySelector('.bara'), file = document.getElementById('pereti');
    bara.classList.remove('strans');
    if (file.offsetParent && file.scrollWidth > file.clientWidth + 1) bara.classList.add('strans');
    aseazaMeniu();
  }

  // ---------------------------------------------------------------- tema: Automat (ca sistemul), Luminos sau Întunecat
  // Alegerea se salvează în „desene:tema”; un script din <head> o pune pe <html> înainte de prima afișare.
  const TEME = [{ id: 'auto', nume: 'Automat', lung: 'Automat, ca telefonul sau calculatorul', ic: 'automat' },
    { id: 'luminos', nume: 'Luminos', lung: 'Luminos', ic: 'soare' }, { id: 'intunecat', nume: 'Întunecat', lung: 'Întunecat', ic: 'luna' }];
  const temaAleasa = () => { const t = document.documentElement.dataset.tema; return t === 'luminos' || t === 'intunecat' ? t : 'auto'; };
  function comenziTema() {
    const t = temaAleasa(), x = TEME.find(o => o.id === t);
    const b = document.getElementById('buton-tema');
    b.innerHTML = ICON[x.ic];
    b.title = `Tema: ${x.lung.toLowerCase()}`;
    b.setAttribute('aria-label', b.title);
    document.getElementById('meniu-tema').innerHTML = '<div class="meniu-cap">Tema</div>' + TEME.map(o =>
      `<button type="button" class="meniu-rand" data-act="tema" data-id="${o.id}" role="menuitemradio" aria-checked="${o.id === t}">${ICON[o.ic]}${esc(o.lung)}</button>`).join('');
    document.getElementById('tema-mai').innerHTML = TEME.map(o =>
      `<button type="button" class="${o.id === t ? 'on' : ''}" data-act="tema" data-id="${o.id}" aria-pressed="${o.id === t}" title="${esc(o.lung)}">${esc(o.nume)}</button>`).join('');
  }
  function aplicaTema(t) {
    if (t === 'luminos' || t === 'intunecat') document.documentElement.dataset.tema = t;
    else delete document.documentElement.dataset.tema;
    try { if (t === 'luminos' || t === 'intunecat') localStorage.setItem(LS + 'tema', t); else localStorage.removeItem(LS + 'tema'); } catch (_) { /* fără localStorage: tema ține până la reîncărcare */ }
    comenziTema();
  }

  // ---------------------------------------------------------------- meniurile din bară: pereții (telefon), straturile, „mai mult”
  // Un singur meniu e deschis odată și are o intrare în istoric, deci „Înapoi” îl închide. Fundalul de sub meniu
  // prinde atingerea din afară: ea închide meniul și nu ajunge la desen.
  const butonMeniu = id => [...document.querySelectorAll(`[data-act="meniu"][data-id="${id}"]`)].find(b => b.offsetParent);
  function deschideMeniu(id) {
    const era = S.meniu;
    if (era) ascundeMeniu();
    if (era === id) return iesi('meniu');
    const m = document.getElementById('meniu-' + id), b = butonMeniu(id), fundal = document.querySelector('.meniu-fundal');
    if (!m || !b) return;
    S.meniu = id;
    m.hidden = false; fundal.hidden = false;
    fundal.classList.toggle('intunecat', id === 'pereti');
    b.setAttribute('aria-expanded', 'true');
    aseazaMeniu();
    intra('meniu', ascundeMeniu);
    const prim = m.querySelector('button.on, button[aria-checked="true"], button:not(:disabled)');
    if (prim) prim.focus({ preventScroll: true });
  }
  function ascundeMeniu() {
    if (!S.meniu) return;
    document.getElementById('meniu-' + S.meniu).hidden = true;
    document.querySelector('.meniu-fundal').hidden = true;
    document.querySelectorAll('[data-act="meniu"]').forEach(b => b.setAttribute('aria-expanded', 'false'));
    S.meniu = null;
  }
  function inchideMeniu(apoi) { ascundeMeniu(); iesi('meniu', apoi); }
  // meniul stă sub butonul lui: lista pereților la stânga, celelalte aliniate la dreapta butonului
  function aseazaMeniu() {
    if (!S.meniu) return;
    const m = document.getElementById('meniu-' + S.meniu), b = butonMeniu(S.meniu);
    if (!b) return ascundeMeniu();
    const r = b.getBoundingClientRect(), bara = document.querySelector('.bara').getBoundingClientRect();
    m.style.top = Math.round(bara.bottom + 6) + 'px';
    if (S.meniu === 'pereti') { m.style.right = 'auto'; m.style.left = Math.max(8, Math.min(Math.round(r.left), innerWidth - m.offsetWidth - 8)) + 'px'; }
    else { m.style.right = Math.max(8, Math.round(innerWidth - r.right)) + 'px'; m.style.left = 'auto'; }
    m.style.maxHeight = Math.round(innerHeight - bara.bottom - 14) + 'px';
  }

  // ---------------------------------------------------------------- variantele (de ex. poziția panoului 2, R10)
  function comenziVariante() {
    const box = document.getElementById('variante'), v = S.per.variante;
    box.hidden = !v;
    if (!v) { box.innerHTML = ''; return; }
    const ales = varAleasa();
    box.innerHTML = `<span class="var-et" title="${esc(v.nota || v.nume)}">${esc(v.nume)}</span><span class="segmente">${v.optiuni.map(o =>
      `<button type="button" class="${o.id === ales ? 'on' : ''}" data-act="varianta" data-id="${esc(o.id)}" aria-pressed="${o.id === ales}" title="${esc(o.nota || o.nume)}">${esc(o.scurt || o.nume)}</button>`).join('')}</span>`;
  }

  // ---------------------------------------------------------------- straturi, legendă, antet
  // meniul straturilor: fiecare rând arată sau ascunde un strat; numărul e câte elemente are stratul pe acest perete
  function comenziStraturi() {
    const st = straturiCamera(), vazute = st.filter(s => S.viz[s.id]).length;
    document.getElementById('straturi').innerHTML = st.map(s => {
      const n = elemente().filter(e => e.strat === s.id).length, on = !!S.viz[s.id];
      return `<button type="button" class="strat-rand${on ? ' on' : ''}" style="--c:${s.culoare}" data-act="strat" data-id="${s.id}" role="menuitemcheckbox" aria-checked="${on}"
        title="${esc(s.nume)}: ${on ? 'ascunde' : 'arată'}"><i></i><span class="sr-nume">${esc(s.nume)}</span><span class="sr-n">${n}</span>${ICON.bifa}</button>`;
    }).join('') + (vazute < st.length ? '<button type="button" class="meniu-rand toate" data-act="straturi-toate">Arată toate straturile</button>' : '');
    const b = document.getElementById('buton-straturi');
    b.classList.toggle('partial', vazute < st.length);
    b.title = `Straturile de pe desen: ${vazute} din ${st.length} arătate`;
    b.setAttribute('aria-label', b.title);
    b.innerHTML = `${ICON.straturi}<span class="sb-lung">Straturi · ${vazute} din ${st.length}</span><span class="sb-scurt">${vazute < st.length ? vazute + '/' + st.length : vazute}</span>${ICON.jos}`;
    if (S.per) potrivesteBara();
  }
  function salveaza() { localStorage.setItem(LS + 'straturi', JSON.stringify({ viz: S.viz, var: S.var })); }

  function legendaHtml() {
    return `<div class="leg-rand"><b>Straturi</b>${straturiCamera().concat([STRUCTURA]).map(s => `<span class="leg"><i style="background:${s.culoare}"></i>${s.nume}</span>`).join('')}</div>
${straturiCamera().some(s => s.id === 'sanitare') ? `
      <div class="leg-rand"><b>Racorduri și țevi</b>${Object.values(FLUIDE).map(f => `<span class="leg"><i style="background:${f.culoare};border-radius:50%"></i>${f.nume}</span>`).join('')}</div>` : ''}
      <div class="leg-rand"><b>Starea (culoarea codului)</b>${Object.values(STARI).map(s => `<span class="leg"><span class="badge mic" style="background:${s.culoare}">ID</span>${s.nume}</span>`).join('')}</div>
${vederi().some(v => v.elemente.some(pasiDetaliu)) ? `
      <div class="leg-rand"><b>Pași de montaj</b><span class="leg"><span class="badge mic" style="background:${STARI.proiect.culoare}">ID</span>${semnPasiHtml} = are pași de montaj animați: „Cum se montează” în fișă</span></div>` : ''}
      <div class="leg-rand"><b>Linii</b>Linie întreruptă = ascuns după alt element sau poziție aproximativă. „~” în fața unei cote = aproximativ.</div>
      <div class="leg-rand nu-print"><b>Cote</b><span class="t-sel">Roșu</span> = elementul selectat, față de colțuri, pardoseală și tavan (pe planul tavanului: față de pereți).
        <span class="t-intre">Albastru</span> = distanța dintre două elemente selectate.</div>`;
  }

  function antet() {
    const cam = S.cam, p = S.per, r = cam.revizie, data = r.data.split('-').reverse().join('.');
    document.title = `${cam.nume} — ${p.nume}`;
    document.body.classList.toggle('vedere-tavan', eTavan());
    document.getElementById('titlu').innerHTML = `${esc(cam.nume)}<span class="sep"> / </span><span class="h1-perete">${esc(p.nume)}</span>`;
    const v = p.variante, opt = v && v.optiuni.find(o => o.id === varAleasa());
    document.getElementById('subtitlu').textContent = p.subtitlu + (opt ? ` · ${v.nume}: ${opt.nume}` : '');
    document.getElementById('meta').innerHTML = `Revizia ${r.nr} · ${data}<span class="doar-print"> · cote în cm · scara 1:${scara()} (A3 orizontal)</span>`;
    const n = laturi(), ref = eTavan()
      ? `<p><b>În plan.</b> x de la fața zidăriei: ${esc(n.st)}. y de la fața zidăriei: ${esc(n.jos)}. Planul e văzut de sus, ca în A.05.</p>`
      : `<p><b>Pe orizontală.</b> ${esc(cam.referinte.orizontal.replace('în colțul din stânga (privind peretele din cameră)', `în ${p.origine} (colțul din stânga, privind peretele din cameră)`))}</p><p><b>Pe verticală.</b> ${esc(cam.referinte.vertical)}</p>`;
    document.querySelectorAll('.referinte').forEach(d => { d.innerHTML = ref; });
    document.querySelectorAll('.legenda').forEach(d => { d.innerHTML = legendaHtml(); });
    document.getElementById('modificari').innerHTML = `<b>Ce s-a schimbat în revizia ${r.nr}:</b> ${r.modificari.map(esc).join(' ')}`;
    document.getElementById('meta-meniu').textContent = `Revizia ${r.nr} · ${data}: ce s-a schimbat`;
    const ma = document.getElementById('modificari-ajutor');
    if (ma) ma.innerHTML = `<b>Revizia ${r.nr}, ${data}.</b> ${r.modificari.map(esc).join(' ')}`;
  }

  function alegePerete(id, apoi) {
    const p = vederi().find(x => x.id === id);
    if (!p || p.etapa > ETAPA) return;
    // intrarea selecției din istoric se scoate înainte de schimbarea adresei, ca „Înapoi” să nu ducă la peretele vechi
    if (inIstoric('sel')) { S.sel = []; S.masura = false; return iesi('sel', () => alegePerete(id, apoi)); }
    S.per = p;
    history.replaceState(history.state, '', '#' + id);
    S.sel = []; S.masura = false; S.cauta = '';
    document.getElementById('cauta').value = '';
    antet(); plan(); comenziVariante(); comenziStraturi(); potrivesteBara(); lista(); listaVerificari(); montaj(); tabel(); panou(); potriveste();
    if (typeof apoi === 'function') apoi();
  }

  function tipar(da) {
    S.print = da;
    if (da) deseneaza(); else potriveste();
  }

  // butoanele paginii au data-act; un singur ascultător pentru toate
  const ACTIUNI = {
    inchide: () => selecteaza([]),
    doar: id => selecteaza([id]),
    arata: ids => selecteaza(ids.split(','), true),
    rand: id => dinLista(id),
    tabel: id => inchideTabel(() => selecteaza([id], true)),
    'la-element': v => { const [per, id] = v.split('|'); laElement(per, id); },
    'tabel-complet': deschideTabel,
    'inchide-tabel': () => inchideTabel(),
    masoara: incepeMasura,
    'anuleaza-masura': anuleazaMasura,
    fila: arataFila,
    panou: () => seteazaPanou(S.panou === 'mare' ? (S.sel.length ? 'scurt' : 'mic') : 'mare'),
    detalii: () => seteazaPanou('mare'),
    perete: alegePerete,
    strat: id => { S.viz[id] = !S.viz[id]; salveaza(); comenziStraturi(); deseneaza(); lista(); tabel(); panou(); },
    'straturi-toate': () => { straturiCamera().forEach(s => { S.viz[s.id] = true; }); salveaza(); comenziStraturi(); deseneaza(); lista(); tabel(); panou(); },
    meniu: deschideMeniu,
    tema: aplicaTema,
    'inchide-meniu': () => {},
    'v-text': (_, ev) => { const t = ev.target.closest('.v-text'), li = t.closest('li'); li.classList.toggle('deschis'); t.setAttribute('aria-expanded', li.classList.contains('deschis')); },
    'zoom-plus': () => zoomCentru(1.4),
    'zoom-minus': () => zoomCentru(1 / 1.4),
    'zoom-tot': potriveste,
    'zoom-coduri': () => zoomCentru(1.8),
    ajutor: unde => {
      const dlg = document.getElementById('dialog-ajutor');
      dlg.showModal();
      intra('ajutor', () => dlg.close());
      const t = unde === 'modificari' && document.getElementById('modificari-ajutor');
      dlg.scrollTop = 0;
      if (t) t.previousElementSibling.scrollIntoView({ block: 'start' });
    },
    'inchide-dialog': () => document.getElementById('dialog-ajutor').close(),
    tipareste: () => { tipar(true); setTimeout(() => window.print(), 50); },
    pasi: id => deschidePasi(id),
    varianta: id => { S.var[S.per.id] = id; S.sel = []; S.masura = false; salveaza(); antet(); comenziVariante(); comenziStraturi(); lista(); listaVerificari(); tabel(); panou(); deseneaza(); },
  };

  // ---------------------------------------------------------------- pornire
  function pagina(cameraId) {
    S.cam = window.CAMERE[cameraId];
    document.documentElement.classList.add('aplicatie');   // pagina nu derulează pe ecran (css: „pagina aplicației”)
    const salvat = JSON.parse(localStorage.getItem(LS + 'straturi') || 'null');
    STRATURI.forEach(s => { S.viz[s.id] = salvat ? salvat.viz[s.id] !== false : true; });
    S.var = (salvat && salvat.var) || {};
    S.svg = document.getElementById('desen');
    // adresa: #PERETE sau #PERETE?pasi=D-06&pas=4 (linkul direct spre un pas de montaj)
    const [dorit, q] = location.hash.slice(1).split('?');
    const cer = new URLSearchParams(q || '');
    S.per = vederi().find(x => x.id === decodeURIComponent(dorit) && x.etapa <= ETAPA) || vederi().find(x => x.etapa <= ETAPA);
    document.querySelectorAll('[data-icon]').forEach(b => b.insertAdjacentHTML('afterbegin', ICON[b.dataset.icon]));

    document.addEventListener('click', ev => {
      const b = ev.target.closest('[data-act]');
      if (!b || b.disabled || !ACTIUNI[b.dataset.act]) return;
      const act = b.dataset.act, id = b.dataset.id;
      if (S.meniu && !['meniu', 'strat', 'straturi-toate', 'tema'].includes(act)) return inchideMeniu(() => ACTIUNI[act](id, ev));
      ACTIUNI[act](id, ev);
    });
    document.addEventListener('keydown', ev => {
      if ((ev.key === 'Enter' || ev.key === ' ') && ev.target.matches('[data-act][role="button"]')) { ev.preventDefault(); ev.target.click(); return; }
      if (ev.key === 'Escape' && S.meniu) { const b = butonMeniu(S.meniu); inchideMeniu(); if (b) b.focus(); return; }
      if (ev.key === 'Escape' && !document.querySelector('dialog[open]')) {
        if (document.body.classList.contains('tabel-deschis')) inchideTabel();
        else if (S.masura && S.sel.length === 1) anuleazaMasura();
        else if (S.sel.length) selecteaza([]);
      }
    });
    const dlg = document.getElementById('dialog-ajutor');
    dlg.addEventListener('click', ev => { if (ev.target === dlg) dlg.close(); });
    dlg.addEventListener('close', () => iesi('ajutor'));
    window.addEventListener('popstate', laPop);
    window.addEventListener('resize', potrivesteBara);
    // secțiunea „Sursa, stratul, dimensiunile” rămâne deschisă sau închisă de la un element la altul
    document.addEventListener('toggle', ev => { if (ev.target.classList && ev.target.classList.contains('fisa-mai')) S.fisaMai = ev.target.open; }, true);
    // fișa scurtă există doar în foaia de jos: la rotirea telefonului sau la redimensionare, panoul se reface
    ['(max-width: 899px)', '(orientation: landscape) and (max-height: 500px)'].forEach(q => matchMedia(q).addEventListener('change', () => panou()));
    document.getElementById('cauta').addEventListener('input', ev => { S.cauta = ev.target.value; lista(); });

    initZoom(S.svg);
    initHover(S.svg);
    comenziTema();
    antet(); plan(); comenziVariante(); comenziStraturi(); potrivesteBara(); lista(); listaVerificari(); montaj(); tabel(); stareFoaie('mic'); panou(); potriveste();
    // adresa curată (#PERETE); dacă linkul cere un pas de montaj, fereastra se deschide direct la el
    history.replaceState(null, '', '#' + S.per.id);
    // fără „pas” în adresă (linkurile din pagina camerelor), fereastra se deschide de unde s-a rămas
    if (cer.get('pasi')) deschidePasi(cer.get('pasi'), null, cer.has('pas') ? +cer.get('pas') || 0 : undefined);

    window.addEventListener('beforeprint', () => tipar(true));
    window.addEventListener('afterprint', () => tipar(false));
    let t = 0;
    new ResizeObserver(() => { cancelAnimationFrame(t); t = requestAnimationFrame(laRedimensionare); }).observe(S.svg.parentNode);
  }

  window.Desen = { pagina, verificari: () => verificari(), stare: S, tipar, selecteaza };
})();
