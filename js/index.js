/* Pagina camerelor, în două file: „Camere” (cardurile camerelor, cu semnul ▶ la cele cu pași și revizia fiecăreia)
   și „Pași de montaj” (un card pe detaliu, cu desenul lui). Fila aleasă stă în adresă (#pasi), ca butonul Înapoi
   de pe pagina unei camere să ducă tot la ea. Citește datele camerelor (window.CAMERE) și ale detaliilor
   (window.DETALII), aceleași fișiere ca paginile camerelor; desenul detaliului îl face Pasi.miniatura (js/pasi.js).
   Fără JavaScript, pagina rămâne lista statică a camerelor, cu randările, fără file. */
(function () {
  'use strict';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reda = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5l12 7-12 7z"/></svg>';
  const C = window.CAMERE || {}, D = window.DETALII || {};
  const vederi = c => c.pereti.concat(c.tavan && c.tavan.tip === 'tavan' ? [c.tavan] : []);
  const progres = id => { try { const st = JSON.parse(localStorage.getItem('desene:pasi:' + id)); return st ? st.vazute.filter(k => k > 0).length : 0; } catch (_) { return 0; } };
  const data = s => /^\d{4}-\d\d-\d\d$/.test(s || '') ? s.split('-').reverse().join('.') : s;

  // pentru fiecare detaliu cu pași: camerele și pereții pe care apare; un singur card pe detaliu, chiar dacă e în mai multe camere
  const lista = [], dupa = {};
  for (const [cid, c] of Object.entries(C)) {
    const n = {};
    for (const v of vederi(c)) for (const e of v.elemente) {
      if (!e.detaliu || !D[e.detaliu]) continue;
      (n[e.detaliu] = n[e.detaliu] || []).includes(v) || n[e.detaliu].push(v);
    }
    for (const [id, pereti] of Object.entries(n)) {
      if (!dupa[id]) lista.push(dupa[id] = { id, d: D[id], locuri: [] });
      dupa[id].locuri.push({ cid, c, pereti });
    }
    const a = document.querySelector(`.camere a[href^="${cid}.html"]`);
    if (!a) continue;
    const rev = a.querySelector('.card-rev');
    if (rev && c.revizie && c.revizie.nr) rev.textContent = `Revizia ${c.revizie.nr} · ${data(c.revizie.data)}`;
    const k = Object.keys(n).length;
    if (k) a.querySelector('.card-vizual').insertAdjacentHTML('beforeend', `<span class="tag-pasi">${reda}${k} ${k === 1 ? 'detaliu' : 'detalii'} cu pași</span>`);
  }
  if (!lista.length) return;
  // camera și peretele desenate în detaliu (câmpurile `camera`, `perete` din fișierul lui) vin primele: acolo duce cardul
  for (const x of lista) {
    const i = x.locuri.findIndex(l => l.cid === x.d.camera);
    if (i > 0) x.locuri.unshift(x.locuri.splice(i, 1)[0]);
    const l = x.locuri[0], j = l.pereti.findIndex(v => v.id === x.d.perete);
    if (j > 0) l.pereti.unshift(l.pereti.splice(j, 1)[0]);
  }
  const unde = x => {
    if (x.locuri.length > 1) return x.locuri.map(l => l.c.nume).join(', ');
    const l = x.locuri[0];
    return l.pereti.length === 1 ? `${l.c.nume}, ${l.pereti[0].nume.replace(/^Peretele/, 'peretele').replace(/^Tavanul/, 'tavanul')}` : `${l.c.nume}, ${l.pereti.length} pereți`;
  };
  const html = lista.map(x => {
    const n = x.d.pasi.length - 1, v = progres(x.id);
    const l = x.locuri[0], href = `${l.cid}.html#${encodeURIComponent(l.pereti[0].id)}?pasi=${encodeURIComponent(x.id).replace(/'/g, '%27')}`;
    return `<a class="card card-pasi" href="${href}" data-id="${esc(x.id)}">
      <span class="card-vizual"><svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Secțiunea detaliului ${esc(x.id)}"></svg>
        <span class="pp-semn">${reda}</span></span>
      <span class="card-text"><b>${esc(x.d.nume)}</b><small><span class="badge">${esc(x.id)}</span> ${esc(unde(x))}</small>
        <span class="card-rev">${n} pași${v ? ` · ai văzut ${v >= n ? 'tot' : v + ' din ' + n}` : ''}</span></span></a>`;
  }).join('');
  const panou = document.getElementById('panou-pasi');
  panou.innerHTML = `<p class="index-nota">Fiecare card deschide pașii detaliului, cu animații: ce se montează, în ce ordine și ce se verifică.</p><div class="carduri">${html}</div>`;

  // filele: un click, săgețile stânga-dreapta, Home și End; adresa primește #pasi sau rămâne fără hash
  const file = [...document.querySelectorAll('.file-index [role="tab"]')];
  file[1].querySelector('.nr').textContent = lista.length;
  if (window.Pasi && Pasi.miniatura) for (const a of panou.querySelectorAll('.card-pasi')) Pasi.miniatura(a.dataset.id, a.querySelector('svg'));
  function alege(i, focus) {
    file.forEach((f, j) => {
      const on = i === j;
      f.setAttribute('aria-selected', on);
      f.tabIndex = on ? 0 : -1;
      document.getElementById(f.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) file[i].focus();
    const h = i === 1 ? '#pasi' : '';
    if (location.hash !== h) history.replaceState(null, '', location.pathname + location.search + h);
  }
  file.forEach((f, i) => {
    f.addEventListener('click', () => alege(i));
    f.addEventListener('keydown', ev => {
      const k = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: file.length - 1 }[ev.key];
      if (k === undefined) return;
      ev.preventDefault();
      alege((k + file.length) % file.length, true);
    });
  });
  document.querySelector('.file-index').hidden = false;
  alege(location.hash === '#pasi' ? 1 : 0);
  addEventListener('hashchange', () => alege(location.hash === '#pasi' ? 1 : 0));
})();
