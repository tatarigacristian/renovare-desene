// Detaliul D03' (A.29) — pașii de montaj ai măștii șemineului, pentru fereastra animată din desene/js/pasi.js.
// Format: JSON strict după „= ”. Secțiune verticală, în cm: x de la peretele dintre pilaștri spre cameră,
// y = −h (h de la pardoseala finită). Câmpurile sunt descrise în desene/README.md.
window.DETALII = window.DETALII || {};
window.DETALII["D03'"] = {
 "id": "D03'",
 "nume": "Masca șemineului și nișa focarului",
 "subtitlu": "Secțiune verticală prin focar, privită din lateral, ca D03' din A.29",
 "orientare": "Stânga: peretele dintre pilaștri. Dreapta: camera.",
 "sursa": "A.29 (D03, D03', vederea 3D); specs/04, specs/07, specs/09; analiza/01",
 "revizie": {
  "nr": 2,
  "data": "2026-11-03"
 },
 "nota": "Ordinea pașilor e propunerea noastră, după A.29 și analiza/01. Se confirmă cu arhitecta, cu echipa de gips-carton și cu manualul șemineului.",
 "vedere": {
  "x0": -14,
  "x1": 104,
  "y0": -140,
  "y1": -42
 },
 "forme": [
  {
   "id": "placa",
   "tip": "dreptunghi",
   "x": -12,
   "y": -262,
   "w": 124,
   "h": 12,
   "umplere": "ciment"
  },
  {
   "id": "zid",
   "tip": "dreptunghi",
   "x": -12,
   "y": -250,
   "w": 12,
   "h": 250,
   "umplere": "zid"
  },
  {
   "id": "pardoseala",
   "tip": "dreptunghi",
   "x": -12,
   "y": 0,
   "w": 124,
   "h": 4,
   "umplere": "ciment"
  },
  {
   "id": "grinda",
   "tip": "dreptunghi",
   "x": 0,
   "y": -250,
   "w": 15,
   "h": 45,
   "umplere": "ciment"
  },
  {
   "id": "tavan-fals",
   "tip": "dreptunghi",
   "x": 50,
   "y": -250,
   "w": 62,
   "h": 7,
   "umplere": "gips"
  },
  {
   "id": "ac",
   "tip": "dreptunghi",
   "x": 25,
   "y": -225.2,
   "w": 19,
   "h": 29,
   "umplere": "ac"
  },
  {
   "id": "ac-suport",
   "tip": "dreptunghi",
   "x": 23,
   "y": -240.4,
   "w": 2,
   "h": 44.2,
   "umplere": "pal"
  },
  {
   "id": "fantoma",
   "tip": "contur",
   "dreptunghiuri": [
    [
     0,
     -242.2,
     50,
     242.2
    ],
    [
     22,
     -113,
     28,
     48
    ]
   ],
   "temporar": true
  },
  {
   "id": "str-jos",
   "tip": "structura",
   "x": 0,
   "y": -60.75,
   "w": 46.95,
   "h": 60.75,
   "profile": []
  },
  {
   "id": "str-spate",
   "tip": "structura",
   "x": 0,
   "y": -117.25,
   "w": 9.75,
   "h": 56.5,
   "profile": []
  },
  {
   "id": "str-sus",
   "tip": "structura",
   "x": 0,
   "y": -189.2,
   "w": 46.95,
   "h": 71.95,
   "profile": []
  },
  {
   "id": "m-fata-jos",
   "tip": "dreptunghi",
   "x": 41.95,
   "y": -60.75,
   "w": 5,
   "h": 60.75,
   "umplere": "otel"
  },
  {
   "id": "m-fata-sus",
   "tip": "dreptunghi",
   "x": 41.95,
   "y": -189.2,
   "w": 5,
   "h": 71.95,
   "umplere": "otel"
  },
  {
   "id": "m-spate",
   "tip": "dreptunghi",
   "x": 4.75,
   "y": -117.25,
   "w": 5,
   "h": 56.5,
   "umplere": "otel"
  },
  {
   "id": "o-jos",
   "tip": "dreptunghi",
   "x": 9.75,
   "y": -60.75,
   "w": 32.2,
   "h": 5,
   "umplere": "otel"
  },
  {
   "id": "o-sus",
   "tip": "dreptunghi",
   "x": 9.75,
   "y": -122.25,
   "w": 32.2,
   "h": 5,
   "umplere": "otel"
  },
  {
   "id": "g-fata-jos",
   "tip": "dreptunghi",
   "x": 46.95,
   "y": -60.75,
   "w": 1.25,
   "h": 60.75,
   "umplere": "gips-rf"
  },
  {
   "id": "g-fata-sus",
   "tip": "dreptunghi",
   "x": 46.95,
   "y": -189.2,
   "w": 1.25,
   "h": 71.95,
   "umplere": "gips-rf"
  },
  {
   "id": "g-jos",
   "tip": "dreptunghi",
   "x": 9.75,
   "y": -62,
   "w": 38.45,
   "h": 1.25,
   "umplere": "gips-rf"
  },
  {
   "id": "g-sus",
   "tip": "dreptunghi",
   "x": 9.75,
   "y": -117.25,
   "w": 38.45,
   "h": 1.25,
   "umplere": "gips-rf"
  },
  {
   "id": "g-spate",
   "tip": "dreptunghi",
   "x": 9.75,
   "y": -116,
   "w": 1.25,
   "h": 54,
   "umplere": "gips-rf"
  },
  {
   "id": "s-jos",
   "tip": "dreptunghi",
   "x": 11,
   "y": -65,
   "w": 37.2,
   "h": 3,
   "umplere": "silicat"
  },
  {
   "id": "s-sus",
   "tip": "dreptunghi",
   "x": 11,
   "y": -116,
   "w": 37.2,
   "h": 3,
   "umplere": "silicat"
  },
  {
   "id": "s-spate",
   "tip": "dreptunghi",
   "x": 11,
   "y": -113,
   "w": 3,
   "h": 48,
   "umplere": "silicat"
  },
  {
   "id": "p-jos",
   "tip": "dreptunghi",
   "x": 48.2,
   "y": -65,
   "w": 1.8,
   "h": 65,
   "umplere": "pal"
  },
  {
   "id": "p-sus",
   "tip": "dreptunghi",
   "x": 48.2,
   "y": -189.2,
   "w": 1.8,
   "h": 76.2,
   "umplere": "pal"
  },
  {
   "id": "p-capac",
   "tip": "dreptunghi",
   "x": 48.2,
   "y": -242.2,
   "w": 1.8,
   "h": 35,
   "umplere": "pal"
  },
  {
   "id": "p-clapa",
   "tip": "dreptunghi",
   "x": 48.2,
   "y": -207.2,
   "w": 1.8,
   "h": 18,
   "umplere": "pal"
  },
  {
   "id": "focar",
   "tip": "focar",
   "x": 22,
   "y": -113,
   "w": 28,
   "h": 48
  },
  {
   "id": "flacara",
   "tip": "flacara",
   "x": 27,
   "y": -92,
   "w": 18,
   "h": 22
  },
  {
   "id": "zona-caldura",
   "tip": "dreptunghi",
   "x": 50.5,
   "y": -205,
   "w": 26,
   "h": 92,
   "umplere": "zona",
   "temporar": true
  },
  {
   "id": "t-zid",
   "tip": "text",
   "x": -13.5,
   "y": -45,
   "text": "perete"
  },
  {
   "id": "t-camera",
   "tip": "text",
   "x": 103,
   "y": -45,
   "text": "camera →",
   "anc": "end"
  },
  {
   "id": "c-50",
   "tip": "cota",
   "a": [
    0,
    8
   ],
   "b": [
    50,
    8
   ],
   "text": "50",
   "parte": "jos"
  },
  {
   "id": "c-65",
   "tip": "cota",
   "a": [
    58,
    0
   ],
   "b": [
    58,
    -65
   ],
   "text": "65"
  },
  {
   "id": "c-48",
   "tip": "cota",
   "a": [
    58,
    -65
   ],
   "b": [
    58,
    -113
   ],
   "text": "48"
  },
  {
   "id": "c-922",
   "tip": "cota",
   "a": [
    58,
    -113
   ],
   "b": [
    58,
    -189.2
   ],
   "text": "76,2"
  },
  {
   "id": "c-2422",
   "tip": "cota",
   "a": [
    68,
    0
   ],
   "b": [
    68,
    -242.2
   ],
   "text": "242,2"
  },
  {
   "id": "c-39",
   "tip": "cota",
   "a": [
    11,
    -126
   ],
   "b": [
    50,
    -126
   ],
   "text": "39",
   "martori": [
    [
     11,
     -126,
     11,
     -117.25
    ],
    [
     50,
     -126,
     50,
     -117.25
    ]
   ]
  },
  {
   "id": "c-565",
   "tip": "cota",
   "a": [
    30,
    -60.75
   ],
   "b": [
    30,
    -117.25
   ],
   "text": "56,5"
  },
  {
   "id": "c-3",
   "tip": "cota",
   "a": [
    11,
    -104
   ],
   "b": [
    14,
    -104
   ],
   "text": "3"
  },
  {
   "id": "c-28",
   "tip": "cota",
   "a": [
    22,
    -56
   ],
   "b": [
    50,
    -56
   ],
   "text": "28",
   "parte": "jos"
  },
  {
   "id": "c-8",
   "tip": "cota",
   "a": [
    14,
    -56
   ],
   "b": [
    22,
    -56
   ],
   "text": "~8",
   "parte": "jos"
  },
  {
   "id": "c-368",
   "tip": "cota",
   "a": [
    58,
    -189.2
   ],
   "b": [
    58,
    -242.2
   ],
   "text": "53"
  },
  {
   "id": "e0-masca",
   "tip": "eticheta",
   "x": 78,
   "y": -175,
   "text": "masca șemineului și a AC-ului: structură, gips-carton RF, PAL",
   "spre": [
    40,
    -160
   ]
  },
  {
   "id": "e0-focar",
   "tip": "eticheta",
   "x": 78,
   "y": -95,
   "text": "focarul DELTA, 70 × 48 × 28 cm",
   "spre": [
    36,
    -89
   ]
  },
  {
   "id": "e0-ac",
   "tip": "eticheta",
   "x": 78,
   "y": -228,
   "text": "unitatea AC, în compartimentul de sus",
   "spre": [
    34,
    -212
   ]
  },
  {
   "id": "e1-profile",
   "tip": "eticheta",
   "x": 64,
   "y": -130,
   "text": "profile metalice: montanți și rama nișei",
   "spre": [
    44.5,
    -100
   ]
  },
  {
   "id": "e1-nisa",
   "tip": "eticheta",
   "x": 64,
   "y": -56,
   "text": "nișa brută: 56,5 cm înălțime, 78,5 cm lățime",
   "spre": [
    26,
    -89
   ]
  },
  {
   "id": "e2-fata",
   "tip": "eticheta",
   "x": 64,
   "y": -130,
   "text": "gips-carton RF pe fața măștii",
   "spre": [
    47.6,
    -125
   ]
  },
  {
   "id": "e2-nisa",
   "tip": "eticheta",
   "x": 64,
   "y": -56,
   "text": "gips-carton RF pe fundul, tavanul și podeaua nișei",
   "spre": [
    10.4,
    -89
   ]
  },
  {
   "id": "e3-silicat",
   "tip": "eticheta",
   "x": 64,
   "y": -130,
   "text": "plăci de silicat de calciu, 30 mm, pe toate fețele nișei",
   "spre": [
    12.5,
    -100
   ]
  },
  {
   "id": "e3-jos",
   "tip": "eticheta",
   "x": 64,
   "y": -56,
   "text": "focarul va sta pe placa de jos",
   "spre": [
    30,
    -63.5
   ]
  },
  {
   "id": "e4-pal",
   "tip": "eticheta",
   "x": 64,
   "y": -165,
   "text": "PAL Nuc Parona, pe gips-carton",
   "spre": [
    49,
    -160
   ]
  },
  {
   "id": "e4-capac",
   "tip": "eticheta",
   "x": 64,
   "y": -232,
   "text": "capacul de sus al AC-ului, cu lamele (~40% gol); sub el, clapa fantei",
   "spre": [
    49,
    -224
   ]
  },
  {
   "id": "e4-gol",
   "tip": "eticheta",
   "x": 64,
   "y": -76,
   "text": "golul focarului: 70 × 48 cm; PAL-ul nu intră în nișă",
   "spre": [
    49,
    -89
   ]
  },
  {
   "id": "e5-focar",
   "tip": "eticheta",
   "x": 64,
   "y": -130,
   "text": "focarul, cu rama la fața măștii",
   "spre": [
    45,
    -100
   ]
  },
  {
   "id": "e5-spate",
   "tip": "eticheta",
   "x": 64,
   "y": -56,
   "text": "~8 cm liberi în spate: de confirmat (LV5)",
   "spre": [
    18,
    -89
   ]
  },
  {
   "id": "e6-caldura",
   "tip": "eticheta",
   "x": 82,
   "y": -130,
   "text": "aerul cald urcă pe fața măștii, spre capacul AC-ului",
   "spre": [
    70,
    -125
   ]
  },
  {
   "id": "e6-arzator",
   "tip": "eticheta",
   "x": 64,
   "y": -56,
   "text": "arzătorul: bioetanol doar cu focul stins și arzătorul rece",
   "spre": [
    36,
    -70
   ]
  }
 ],
 "pasi": [
  {
   "titlu": "Ce se construiește",
   "cine": "toată echipa",
   "stare": "proiect",
   "vedere": {
    "x0": -16,
    "x1": 170,
    "y0": -262,
    "y1": 12
   },
   "apar": [
    "placa",
    "zid",
    "pardoseala",
    "grinda",
    "tavan-fals",
    "ac",
    "ac-suport",
    "fantoma",
    "t-zid",
    "t-camera",
    "c-50",
    "c-65",
    "c-48",
    "c-922",
    "c-2422",
    "e0-masca",
    "e0-focar",
    "e0-ac"
   ],
   "text": "Masca șemineului are 50 cm adâncime de la peretele dintre pilaștri și urcă până sub tavanul fals (242,2 cm). Focarul DELTA (70 × 48 × 28 cm) stă într-o nișă de 39 cm, cu partea de jos la 65 cm de pardoseală. Deasupra, în același corp, e unitatea AC, sub capacul de vizitare.",
   "puncte": [
    "Straturile, de la perete spre cameră: structura de prindere, gips-carton RF (rezistent la foc), placa PAL de finisaj (A.29).",
    "Nișa focarului e căptușită cu plăci de silicat de calciu de 30 mm, peste gips-cartonul RF (A.29, vederea 3D)."
   ],
   "verifica": [
    "Șemineul cumpărat e „DELTA colț dreapta”, iar desenul are latura deschisă spre televizor (întrebarea LV4).",
    "Distanțele minime față de materiale inflamabile, din manualul șemineului (LV6).",
    "Grosimea plăcii de silicat: 30 mm în A.29, „EnclosureBoard 2,5” în lista de achiziții (LV7)."
   ],
   "sursa": "A.29 (D03, D03', vederea 3D, desenul focarului); A.16; specs/04 rândurile 17–18; specs/09 M11"
  },
  {
   "titlu": "Structura de prindere",
   "cine": "echipa de gips-carton",
   "stare": "propunere",
   "apar": [
    "str-jos",
    "str-spate",
    "str-sus",
    "m-fata-jos",
    "m-fata-sus",
    "m-spate",
    "o-jos",
    "o-sus",
    "c-565",
    "e1-profile",
    "e1-nisa"
   ],
   "text": "Profile metalice de la pardoseală până la grindă, cu rama nișei: profile orizontale sub și deasupra nișei și montanți în spatele ei. Nișa brută are 56,5 cm înălțime și 78,5 cm lățime: focarul (48 × 70), plus 3 cm silicat și 1,25 cm gips-carton pe fiecare față.",
   "puncte": [
    "Cotele nișei brute le-am calculat noi din straturile din A.29; se confirmă cu dimensiunile reale ale focarului.",
    "Traseele AC (freon, condens, cablul de alimentare) se pozează acum, înainte să se închidă masca (LV3)."
   ],
   "verifica": [
    "Fundul nișei brute e la 9,75 cm de perete, iar rama e în plan (dreptar).",
    "Unitatea AC are loc în compartimentul de sus (189,2–242,2), cu ~15 cm liberi deasupra."
   ],
   "atentie": "Focarul trece ~20 cm prin dreptul pilastrului PI2, care iese 15 cm din perete. Acolo fundul nișei ar intra în pilastru. Adâncimea reală se stabilește cu arhitecta înainte de structură (LV5).",
   "sursa": "A.29 (vederea 3D: „Structura de prindere”); calculul nostru pentru nișa brută"
  },
  {
   "titlu": "Gips-carton RF",
   "cine": "echipa de gips-carton",
   "stare": "proiect",
   "apar": [
    "g-fata-jos",
    "g-fata-sus",
    "g-jos",
    "g-sus",
    "g-spate",
    "e2-fata",
    "e2-nisa"
   ],
   "text": "Plăci de gips-carton rezistente la foc (RF) pe fața măștii și pe fundul, tavanul și podeaua nișei.",
   "puncte": [
    "În nișă, gips-cartonul RF e suportul plăcilor de silicat.",
    "Pe restul măștii, e suportul plăcilor PAL."
   ],
   "verifica": [
    "Plăcile sunt RF (tip F sau DF după EN 520), nu plăci obișnuite. Tipul e tipărit pe placă."
   ],
   "sursa": "A.29 (vederea 3D: „Perete gips carton – RF”); specs/07; analiza/01 pasul 4.1"
  },
  {
   "titlu": "Plăcile de silicat de calciu",
   "cine": "echipa de gips-carton",
   "stare": "proiect",
   "apar": [
    "s-jos",
    "s-sus",
    "s-spate",
    "c-3",
    "e3-silicat",
    "e3-jos"
   ],
   "text": "Plăci de silicat de calciu de 30 mm pe toate fețele nișei: jos, sus, în spate și pe cele două laturi. Focarul stă direct pe placa de jos.",
   "puncte": [
    "Se lipesc cu adezivul pentru plăci de silicat din lista de achiziții (0,9 kg); rosturile dintre plăci se umplu cu același adeziv.",
    "Laturile nu se văd în această secțiune: se montează la fel, iar între ele rămân 70 cm."
   ],
   "verifica": [
    "Interiorul nișei: 70 × 48 cm, adânc de cel puțin 28 cm (adâncimea focarului).",
    "Grosimea plăcilor cumpărate (LV7).",
    "Timpul de uscare al adezivului, de pe ambalaj, înainte de pasul următor."
   ],
   "sursa": "A.29 („Placă izolatoare silicat de calciu 30 mm”); specs/04 rândul 18 (3 plăci EnclosureBoard 2,5 și adeziv 0,9 kg)"
  },
  {
   "titlu": "Placarea din PAL (M11)",
   "cine": "tâmplar",
   "stare": "proiect",
   "vedere": {
    "x0": -14,
    "x1": 104,
    "y0": -250,
    "y1": -40
   },
   "apar": [
    "p-jos",
    "p-sus",
    "p-capac",
    "p-clapa",
    "c-368",
    "e4-pal",
    "e4-capac",
    "e4-gol"
   ],
   "text": "Plăcile PAL H1775 ST12 Nuc Parona pe fața de gips-carton, cu golul focarului de 70 × 48 cm. Sus, compartimentul AC-ului (53 cm): capacul de sus cu lamele verticale (35 cm) și, sub el, clapa fantei (18 cm), fără găuri, care vara intră sub unitate.",
   "puncte": [
    "PAL-ul se oprește la marginea nișei. În nișă sunt doar plăcile de silicat.",
    "Capacul de sus se rabatează în jos pentru filtre (balamale jos, opritor); vara clapa de jos se rabatează și intră sub unitate, ca aerul rece să iasă liber."
   ],
   "verifica": [
    "Distanța dintre PAL și flacără respectă manualul șemineului (LV6).",
    "Aerul cald intră printre lamelele capacului (≥ 40% gol), cel rece iese prin fantă (LV2)."
   ],
   "sursa": "A.29 (D03 și D03'); A.16 (legenda); specs/09 M11; analiza/01 pasul 11.6; compartimentul AC: propunerea din 03.11.2026, ca în dormitorul mic (de confirmat cu arhitecta, LV2)"
  },
  {
   "titlu": "Montajul focarului",
   "cine": "montatorul, după tâmplar",
   "stare": "proiect",
   "apar": [
    "focar",
    "c-39",
    "c-28",
    "c-8",
    "e5-focar",
    "e5-spate"
   ],
   "text": "Focarul DELTA (70 × 48 × 28 cm) intră în nișă din față și stă pe placa de silicat de jos, cu rama la fața măștii.",
   "puncte": [
    "Se montează după masca M11 (analiza/01: pașii 11.6 și 11.7).",
    "Se pune la nivel, verificat cu bula, ca bioetanolul să stea uniform în arzător."
   ],
   "verifica": [
    "Latura deschisă (cu sticlă) e pe partea corectă (LV4).",
    "Rama acoperă marginea PAL-ului de jur împrejur."
   ],
   "atentie": "Nișa de 39 cm e mai adâncă decât focarul de 28 cm plus silicatul de 3 cm: în spate rămân ~8 cm. Spațiul se confirmă cu arhitecta (LV5).",
   "sursa": "A.29 (D03'; desenul focarului: 700 × 480, adâncime 280 mm); specs/04 rândul 17; analiza/01 pasul 11.7"
  },
  {
   "titlu": "Prima aprindere",
   "cine": "beneficiarul",
   "stare": "propunere",
   "apar": [
    "flacara",
    "zona-caldura",
    "e6-caldura",
    "e6-arzator"
   ],
   "text": "Focul se aprinde după ce adezivul s-a uscat și masca e gata. Aerul cald urcă pe fața măștii, spre capacul AC-ului.",
   "puncte": [
    "Bioetanolul se toarnă doar cu focul stins și arzătorul rece.",
    "Camera se aerisește: arderea consumă aer."
   ],
   "verifica": [
    "Distanțele față de televizor (46 cm, cu latura deschisă spre el) și față de unitatea AC (~83 cm deasupra), din manual (LV6)."
   ],
   "sursa": "propunerea noastră; manualul șemineului DELTA (de citit înainte de montaj)"
  }
 ]
};
