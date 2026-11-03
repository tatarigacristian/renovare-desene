// Plinta ascunsă (G3) — pașii de montaj, pentru fereastra animată din desene/js/pasi.js.
// Format: JSON strict după „= ”. Secțiune verticală, în cm: x de la structura măștii spre cameră,
// y = −h (h de la pardoseala finită). Câmpurile sunt descrise în desene/README.md.
window.DETALII = window.DETALII || {};
window.DETALII["G3"] = {
 "id": "G3",
 "nume": "Plinta ascunsă (fanta de la baza gips-cartonului)",
 "subtitlu": "Secțiune verticală la baza măștii de gips-carton, privită din lateral",
 "orientare": "Stânga: peretele și structura măștii. Dreapta: camera.",
 "sursa": "A.09; specs/03, specs/04, specs/06, specs/07; analiza/02",
 "revizie": {
  "nr": 1,
  "data": "2026-11-02"
 },
 "nota": "Materialele și locurile sunt din proiect. Metoda de montaj e propunerea noastră: producătorul nu are instrucțiuni publice, deci se confirmă cu fișa tehnică de la vânzător.",
 "vedere": {
  "x0": -4,
  "x1": 32,
  "y0": -12,
  "y1": 5
 },
 "sectiune3d": {"plan": "vertical", "adancime": 30, "privire": [30, 18]},
 "forme": [
  {
   "id": "zid",
   "tip": "dreptunghi",
   "x": -5,
   "y": -60,
   "w": 5,
   "h": 67,
   "umplere": "zid"
  },
  {
   "id": "sapa",
   "tip": "dreptunghi",
   "x": -5,
   "y": 1,
   "w": 70,
   "h": 6,
   "umplere": "sapa"
  },
  {
   "id": "str",
   "tip": "structura",
   "x": 0,
   "y": -60,
   "w": 5,
   "h": 61,
   "profile": [],
   "repeta3d": {"pas": 40}
  },
  {
   "id": "uw",
   "tip": "dreptunghi",
   "x": 0,
   "y": 0.4,
   "w": 5,
   "h": 0.6,
   "umplere": "otel"
  },
  {
   "id": "fantoma",
   "tip": "contur",
   "dreptunghiuri": [
    [
     5,
     -60,
     1.25,
     58
    ],
    [
     4.8,
     -2.15,
     1.45,
     3.15
    ]
   ],
   "temporar": true
  },
  {
   "id": "reper",
   "tip": "linie",
   "puncte": [
    [
     -4,
     0
    ],
    [
     40,
     0
    ]
   ],
   "temporar": true
  },
  {
   "id": "al-flansa",
   "tip": "dreptunghi",
   "x": 4.8,
   "y": -9,
   "w": 0.2,
   "h": 6.85,
   "umplere": "aluminiu"
  },
  {
   "id": "al-buza",
   "tip": "dreptunghi",
   "x": 4.8,
   "y": -2.15,
   "w": 1.45,
   "h": 0.15,
   "umplere": "aluminiu"
  },
  {
   "id": "al-fund",
   "tip": "dreptunghi",
   "x": 4.8,
   "y": -2.15,
   "w": 0.2,
   "h": 3.15,
   "umplere": "aluminiu"
  },
  {
   "id": "gips",
   "tip": "dreptunghi",
   "x": 5,
   "y": -60,
   "w": 1.25,
   "h": 57.85,
   "umplere": "gips"
  },
  {
   "id": "glet",
   "tip": "dreptunghi",
   "x": 6.25,
   "y": -60,
   "w": 0.15,
   "h": 57.85,
   "umplere": "glet"
  },
  {
   "id": "banda",
   "tip": "dreptunghi",
   "x": 6.4,
   "y": -2.15,
   "w": 0.35,
   "h": 2.15,
   "umplere": "banda-hartie",
   "temporar": true
  },
  {
   "id": "folie",
   "tip": "dreptunghi",
   "x": 5.4,
   "y": 0.8,
   "w": 59.6,
   "h": 0.2,
   "umplere": "folie"
  },
  {
   "id": "parchet",
   "tip": "dreptunghi",
   "x": 5.6,
   "y": 0,
   "w": 59.4,
   "h": 0.8,
   "umplere": "parchet"
  },
  {
   "id": "t-zid",
   "tip": "text",
   "x": -3.8,
   "y": -10.5,
   "text": "perete"
  },
  {
   "id": "t-camera",
   "tip": "text",
   "x": 31.5,
   "y": -10.5,
   "text": "camera →",
   "anc": "end"
  },
  {
   "id": "c-fanta",
   "tip": "cota",
   "a": [
    9,
    0
   ],
   "b": [
    9,
    -2
   ],
   "text": "2",
   "martori": [
    [
     6.4,
     -2,
     9,
     -2
    ]
   ]
  },
  {
   "id": "c-1",
   "tip": "cota",
   "a": [
    11.5,
    1
   ],
   "b": [
    11.5,
    0
   ],
   "text": "1"
  },
  {
   "id": "c-3",
   "tip": "cota",
   "a": [
    11.5,
    1
   ],
   "b": [
    11.5,
    -2
   ],
   "text": "3",
   "martori": [
    [
     6.4,
     -2,
     11.5,
     -2
    ],
    [
     5,
     1,
     11.5,
     1
    ]
   ]
  },
  {
   "id": "e0-masca",
   "tip": "eticheta",
   "x": 16,
   "y": -32,
   "text": "masca nouă de gips-carton: peretele cu M12 și peretele cu biroul",
   "spre": [
    5.6,
    -30
   ]
  },
  {
   "id": "e0-fanta",
   "tip": "eticheta",
   "x": 16,
   "y": -12,
   "text": "fanta neagră de 20 mm dintre pardoseală și placă",
   "spre": [
    5.6,
    -1
   ]
  },
  {
   "id": "e1-reper",
   "tip": "eticheta",
   "x": 13,
   "y": -8,
   "text": "reperul: pardoseala finită = șapa + 1 cm (folie 2 mm, parchet 8 mm)",
   "spre": [
    11.5,
    0
   ]
  },
  {
   "id": "e2-profil",
   "tip": "eticheta",
   "x": 13,
   "y": -9,
   "text": "profilul de aluminiu, prins pe structură înainte de placă",
   "spre": [
    4.9,
    -6
   ]
  },
  {
   "id": "e3-placa",
   "tip": "eticheta",
   "x": 13,
   "y": -9,
   "text": "placa de gips-carton stă pe buza profilului",
   "spre": [
    5.6,
    -4
   ]
  },
  {
   "id": "e4-glet",
   "tip": "eticheta",
   "x": 13,
   "y": -9,
   "text": "glet până la muchia profilului; fanta acoperită cu bandă de hârtie",
   "spre": [
    6.55,
    -1.2
   ]
  },
  {
   "id": "e5-parchet",
   "tip": "eticheta",
   "x": 13,
   "y": -7,
   "text": "parchetul intră sub fantă; rostul de dilatare rămâne ascuns",
   "spre": [
    6,
    0.4
   ]
  }
 ],
 "pasi": [
  {
   "titlu": "Ce se construiește",
   "cine": "toată echipa",
   "stare": "proiect",
   "vedere": {
    "x0": -5,
    "x1": 62,
    "y0": -46,
    "y1": 8
   },
   "apar": [
    "zid",
    "sapa",
    "str",
    "uw",
    "fantoma",
    "t-zid",
    "t-camera",
    "e0-masca",
    "e0-fanta"
   ],
   "text": "La baza măștilor noi de gips-carton rămâne o fantă neagră de 20 mm între pardoseală și placă, în loc de plintă. Pe peretele cu M12 (G3, 100–310 cm) și pe peretele cu biroul (G3, 55–435 cm).",
   "puncte": [
    "Profil de aluminiu vopsit negru FSPRO F1.2015B, bare de 2,5 m; 3 bare pentru 7,5 ml (antemăsurători).",
    "Doar pe construcțiile noi de gips-carton (A.09). Pe pereții vechi se pune plinta duropolimer."
   ],
   "verifica": [
    "Fișa tehnică a profilului, de la Premier Decor: cum se prinde și pe ce grosime de placă. Pașii de mai jos sunt metoda obișnuită pentru acest tip de profil, nu instrucțiunile producătorului.",
    "Lungimea barelor: 2,5 m (specs/07 și fișa produsului) sau 3 m (lista de achiziții)?",
    "Fanta continuă și sub rocă? (R18)"
   ],
   "sursa": "A.09 (plan plinte); specs/07; specs/04 rândul 14; specs/03 (7,5 ml); fișa F1.2015B la Epicentr"
  },
  {
   "titlu": "Reperul pardoselii finite",
   "cine": "echipa de gips-carton",
   "stare": "propunere",
   "apar": [
    "reper",
    "c-1",
    "e1-reper"
   ],
   "text": "Înainte de plăci se trasează pe structură nivelul pardoselii finite: șapa plus 1 cm (folie 2 mm și parchet 8 mm). Fanta de 20 mm începe de la acest nivel.",
   "verifica": [
    "Reperul e la nivel pe toată lungimea, verificat cu laserul, nu măsurat din șapă în fiecare punct."
   ],
   "sursa": "specs/07 (parchet EGGER EL2935 8 mm, folie silenzio EASY SD 2 mm)"
  },
  {
   "titlu": "Profilul pe structură",
   "cine": "echipa de gips-carton",
   "stare": "propunere",
   "apar": [
    "al-flansa",
    "al-buza",
    "al-fund",
    "c-3",
    "e2-profil"
   ],
   "text": "Profilul se prinde pe structură, cu buza de sus la 3 cm deasupra șapei: 1 cm pentru pardoseală și 2 cm de fantă. Se pune înainte de plăcile de gips-carton.",
   "puncte": [
    "Barele se îmbină cap la cap, fără trepte.",
    "Capetele se termină curat la stâlpul ST1, la nișe, la M12 și la ușă."
   ],
   "verifica": [
    "Profilul e drept și la nivel pe toată lungimea (dreptar de 2 m)."
   ],
   "atentie": "În graficul de lucrări (analiza/02, săptămâna 12) plinta ascunsă e trecută odată cu parchetul. Cu această metodă, profilul se pune înaintea plăcilor, deci mult mai devreme. Regula din A.09, „plinta după mobilier”, e pentru plinta duropolimer.",
   "sursa": "metoda obișnuită pentru profilele de fantă la gips-carton; de confirmat cu fișa produsului"
  },
  {
   "titlu": "Placa de gips-carton",
   "cine": "echipa de gips-carton",
   "stare": "propunere",
   "apar": [
    "gips",
    "e3-placa"
   ],
   "text": "Placa se sprijină pe buza profilului și se înșurubează în structură ca de obicei. Muchia de jos a plăcii e muchia de sus a fantei.",
   "verifica": [
    "Între placă și buza profilului nu rămâne rost."
   ],
   "sursa": "metoda obișnuită; de confirmat cu fișa produsului"
  },
  {
   "titlu": "Glet și vopsea",
   "cine": "finisorul",
   "stare": "propunere",
   "apar": [
    "glet",
    "banda",
    "e4-glet"
   ],
   "text": "Gletul se trage până la muchia profilului, ca la un colț. Fanta se acoperă cu bandă de hârtie până după vopsit, ca să rămână neagră și curată.",
   "verifica": [
    "După vopsit, muchia de deasupra fantei e dreaptă, fără glet în fantă."
   ],
   "sursa": "metoda obișnuită; de confirmat cu fișa produsului"
  },
  {
   "titlu": "Parchetul",
   "cine": "echipa de parchet",
   "stare": "propunere",
   "apar": [
    "folie",
    "parchet",
    "c-fanta",
    "e5-parchet"
   ],
   "text": "Folia și parchetul intră sub fantă până aproape de profil. Rostul de dilatare cerut de Egger rămâne în fantă și nu se vede.",
   "verifica": [
    "Fanta rămasă deasupra parchetului e egală pe toată lungimea (~2 cm)."
   ],
   "atentie": "Dacă pe aici trec cablurile benzilor M3 și M4 (specs/06), loc pentru ele se lasă înainte de parchet. Fanta e mică: se verifică pe profil dacă intră cablul.",
   "sursa": "specs/07 (parchetul); specs/06 (cablurile pe sub plinta ascunsă); metoda obișnuită"
  }
 ]
};
