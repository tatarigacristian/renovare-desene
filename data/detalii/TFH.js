// Tavanul fals din hol (TFH) — pașii de montaj, pentru fereastra animată din desene/js/pasi.js.
// Format: JSON strict după „= ”. Secțiune verticală în cm, perpendiculară pe peretele cu oglinda: x ca în planul tavanului
// holului (de la fața peretelui de vest din zona de mijloc, spre est); y de la fața de jos a plăcii de beton în jos
// (y = 250 − h). Câmpurile sunt descrise în desene/README.md.
window.DETALII = window.DETALII || {};
window.DETALII["TFH"] = {
 "id": "TFH",
 "nume": "Tavanul fals din hol cu fanta de lumină",
 "subtitlu": "Secțiune verticală perpendiculară pe peretele cu oglinda, prin fanta SC2 și masca țevii de gaz MG2, lângă fața de sud a grinzii GR1, privită spre grindă. La nord de grindă (SC1, C1, MG1) secțiunea e la fel",
 "orientare": "Sus: placa. Jos: holul. Dreapta: peretele cu oglinda (est).",
 "camera": "hol",
 "perete": "T",
 "sursa": "A.05 (detaliul hol tavan fals, 1:5; planul tavanului); A.06; A.17; specs/04, specs/06 G, specs/08 D; analiza/01; analiza/11 (HL, L6, L7)",
 "revizie": {
  "nr": 1,
  "data": "2026-11-02"
 },
 "nota": "Materialele și cotele sunt din A.05 și din planul tavanului holului. Ordinea pașilor și felul în care se demontează masca de gaz sunt propunerea noastră. Se confirmă cu arhitecta, cu echipa de gips-carton și cu firma autorizată ANRE.",
 "vedere": {
  "x0": 94,
  "x1": 148,
  "y0": -4,
  "y1": 18
 },
 "forme": [
  {
   "id": "grinda",
   "tip": "contur",
   "dreptunghiuri": [
    [
     56,
     0,
     88,
     45
    ]
   ],
   "temporar": true
  },
  {
   "id": "placa",
   "tip": "dreptunghi",
   "x": 56,
   "y": -8,
   "w": 96,
   "h": 8,
   "umplere": "ciment"
  },
  {
   "id": "zid",
   "tip": "dreptunghi",
   "x": 144,
   "y": 0,
   "w": 8,
   "h": 60,
   "umplere": "zid"
  },
  {
   "id": "fantoma",
   "tip": "contur",
   "dreptunghiuri": [
    [
     56,
     5.75,
     53.3,
     1.25
    ],
    [
     106.1,
     0,
     1.2,
     5.75
    ],
    [
     124.3,
     5.75,
     19.700000000000003,
     1.25
    ]
   ],
   "temporar": true
  },
  {
   "id": "reper",
   "tip": "linie",
   "puncte": [
    [
     56,
     7
    ],
    [
     144,
     7
    ]
   ],
   "temporar": true
  },
  {
   "id": "str-tf",
   "tip": "structura",
   "x": 56,
   "y": 0,
   "w": 50.099999999999994,
   "h": 5.75,
   "profile": []
  },
  {
   "id": "str-mg",
   "tip": "structura",
   "x": 124.3,
   "y": 0,
   "w": 19.700000000000003,
   "h": 5.75,
   "profile": []
  },
  {
   "id": "cablu",
   "tip": "fir",
   "puncte": [
    [
     56,
     0.7
    ],
    [
     116.8,
     0.7
    ],
    [
     116.8,
     1.5
    ]
   ],
   "culoare": "faza",
   "gros": 2
  },
  {
   "id": "cb",
   "tip": "cerc",
   "x": 116.8,
   "y": 2.2,
   "r": 0.75,
   "umplere": "alb"
  },
  {
   "id": "zona-mg",
   "tip": "dreptunghi",
   "x": 124.3,
   "y": 0,
   "w": 19.700000000000003,
   "h": 5.75,
   "umplere": "zona",
   "temporar": true
  },
  {
   "id": "d8",
   "tip": "simbol",
   "x": 94.5,
   "y": 1.2,
   "w": 9,
   "h": 3.6,
   "text": "D8",
   "umplere": "alb",
   "temporar": true
  },
  {
   "id": "teava",
   "tip": "cerc",
   "x": 139,
   "y": 3,
   "r": 1.5,
   "umplere": "banda"
  },
  {
   "id": "cd-tf",
   "tip": "fir",
   "puncte": [
    [
     95,
     0.15
    ],
    [
     95,
     2.75
    ],
    [
     101,
     2.75
    ],
    [
     101,
     0.15
    ]
   ],
   "culoare": "#52525b",
   "gros": 1.8
  },
  {
   "id": "cd2-tf",
   "tip": "dreptunghi",
   "x": 56,
   "y": 2.75,
   "w": 47.45,
   "h": 3.0,
   "umplere": "otel"
  },
  {
   "id": "ud-tf",
   "tip": "fir",
   "puncte": [
    [
     103.45,
     2.85
    ],
    [
     106.0,
     2.85
    ],
    [
     106.0,
     5.65
    ],
    [
     103.45,
     5.65
    ]
   ],
   "culoare": "#52525b",
   "gros": 1.8
  },
  {
   "id": "placa-v",
   "tip": "dreptunghi",
   "x": 106.1,
   "y": 0,
   "w": 1.2,
   "h": 5.75,
   "umplere": "gips"
  },
  {
   "id": "placa-tf",
   "tip": "dreptunghi",
   "x": 56,
   "y": 5.75,
   "w": 53.3,
   "h": 1.25,
   "umplere": "gips",
   "anim": "din-camera"
  },
  {
   "id": "cd-mg",
   "tip": "fir",
   "puncte": [
    [
     130.5,
     0.15
    ],
    [
     130.5,
     2.75
    ],
    [
     136.5,
     2.75
    ],
    [
     136.5,
     0.15
    ]
   ],
   "culoare": "#52525b",
   "gros": 1.8
  },
  {
   "id": "c-mg-st",
   "tip": "fir",
   "puncte": [
    [
     130.2,
     2.85
    ],
    [
     127.6,
     2.85
    ],
    [
     127.6,
     5.65
    ],
    [
     130.2,
     5.65
    ]
   ],
   "culoare": "#52525b",
   "gros": 1.8
  },
  {
   "id": "c-mg-dr",
   "tip": "fir",
   "puncte": [
    [
     141.4,
     2.85
    ],
    [
     143.9,
     2.85
    ],
    [
     143.9,
     5.65
    ],
    [
     141.4,
     5.65
    ]
   ],
   "culoare": "#52525b",
   "gros": 1.8
  },
  {
   "id": "placa-mg",
   "tip": "dreptunghi",
   "x": 124.3,
   "y": 5.75,
   "w": 19.700000000000003,
   "h": 1.25,
   "umplere": "gips",
   "anim": "din-camera"
  },
  {
   "id": "glet-tf",
   "tip": "dreptunghi",
   "x": 56,
   "y": 7,
   "w": 53.449999999999996,
   "h": 0.15,
   "umplere": "glet"
  },
  {
   "id": "glet-buza",
   "tip": "dreptunghi",
   "x": 109.3,
   "y": 5.75,
   "w": 0.15,
   "h": 1.25,
   "umplere": "glet"
  },
  {
   "id": "vopsea-fanta",
   "tip": "dreptunghi",
   "x": 107.3,
   "y": 0,
   "w": 17.0,
   "h": 0.15,
   "umplere": "glet"
  },
  {
   "id": "vopsea-v",
   "tip": "dreptunghi",
   "x": 107.3,
   "y": 0.15,
   "w": 0.15,
   "h": 5.6,
   "umplere": "glet"
  },
  {
   "id": "glet-mg",
   "tip": "dreptunghi",
   "x": 124.3,
   "y": 7,
   "w": 19.700000000000003,
   "h": 0.15,
   "umplere": "glet"
  },
  {
   "id": "profil",
   "tip": "dreptunghi",
   "x": 107.3,
   "y": 0.4,
   "w": 0.9,
   "h": 2.35,
   "umplere": "alb",
   "anim": "din-dreapta"
  },
  {
   "id": "banda",
   "tip": "dreptunghi",
   "x": 107.42,
   "y": 0.78,
   "w": 0.635,
   "h": 1.59,
   "umplere": "banda",
   "anim": "din-dreapta"
  },
  {
   "id": "difuzor",
   "tip": "dreptunghi",
   "x": 108.2,
   "y": 0.45,
   "w": 0.15,
   "h": 2.25,
   "umplere": "glet",
   "anim": "din-dreapta"
  },
  {
   "id": "lumina",
   "tip": "lumina",
   "puncte": [
    [
     108.4,
     0.55
    ],
    [
     124.3,
     0.15
    ],
    [
     124.3,
     5.6
    ],
    [
     119,
     17
    ],
    [
     108.4,
     2.65
    ]
   ]
  },
  {
   "id": "ochi",
   "tip": "ochi",
   "x": 94,
   "y": 24,
   "linie": [
    [
     94.6,
     23.5
    ],
    [
     109.45,
     7.15
    ],
    [
     113.5,
     2.7
    ]
   ]
  },
  {
   "id": "t-placa",
   "tip": "text",
   "x": 87,
   "y": -2.6,
   "text": "placa de beton"
  },
  {
   "id": "t-hol",
   "tip": "text",
   "x": 87,
   "y": 35,
   "text": "holul ↓"
  },
  {
   "id": "t-perete",
   "tip": "text",
   "x": 143.4,
   "y": 35,
   "text": "peretele cu oglinda →",
   "anc": "end"
  },
  {
   "id": "c-7",
   "tip": "cota",
   "a": [
    89,
    0
   ],
   "b": [
    89,
    7
   ],
   "text": "7"
  },
  {
   "id": "c-15",
   "tip": "cota",
   "a": [
    109.3,
    9.8
   ],
   "b": [
    124.3,
    9.8
   ],
   "text": "15",
   "parte": "jos",
   "martori": [
    [
     109.3,
     7.2,
     109.3,
     10.4
    ],
    [
     124.3,
     7.2,
     124.3,
     10.4
    ]
   ]
  },
  {
   "id": "c-20",
   "tip": "cota",
   "a": [
    124.3,
    9.8
   ],
   "b": [
    144,
    9.8
   ],
   "text": "~19,7",
   "parte": "jos",
   "martori": [
    [
     124.3,
     7.2,
     124.3,
     10.4
    ]
   ]
  },
  {
   "id": "c-buza",
   "tip": "cota",
   "a": [
    107.3,
    13.6
   ],
   "b": [
    109.3,
    13.6
   ],
   "text": "2",
   "parte": "jos",
   "martori": [
    [
     107.3,
     5.75,
     107.3,
     14.2
    ],
    [
     109.3,
     7.2,
     109.3,
     14.2
    ]
   ]
  },
  {
   "id": "c-38",
   "tip": "cota",
   "a": [
    66,
    7
   ],
   "b": [
    66,
    45
   ],
   "text": "38"
  },
  {
   "id": "c-teava",
   "tip": "cota",
   "a": [
    139,
    12.5
   ],
   "b": [
    144,
    12.5
   ],
   "text": "~5",
   "parte": "jos",
   "martori": [
    [
     139,
     4.5,
     139,
     13.1
    ]
   ]
  },
  {
   "id": "c-s3",
   "tip": "cota",
   "a": [
    105.2,
    0.4
   ],
   "b": [
    105.2,
    2.75
   ],
   "text": "23,5 mm",
   "parte": "st"
  },
  {
   "id": "c-adanc",
   "tip": "cota",
   "a": [
    107.3,
    4.3
   ],
   "b": [
    108.35,
    4.3
   ],
   "text": "10 mm",
   "parte": "jos",
   "martori": [
    [
     108.35,
     2.75,
     108.35,
     4.9
    ]
   ]
  },
  {
   "id": "e0-tf",
   "tip": "eticheta",
   "x": 87,
   "y": 12,
   "lat": 16,
   "text": "TF1: tavan fals de 7 cm, cu fața la 243 cm",
   "spre": [
    98,
    6.4
   ]
  },
  {
   "id": "e0-fanta",
   "tip": "eticheta",
   "x": 104,
   "y": 19.5,
   "lat": 22,
   "text": "fanta SC2 de 15 cm, deschisă până la placă; banda C2 stă sus pe placa verticală",
   "spre": [
    116.8,
    3.5
   ]
  },
  {
   "id": "e0-masca",
   "tip": "eticheta",
   "x": 128,
   "y": 19.5,
   "lat": 21,
   "text": "masca MG2 a țevii de gaz: demontabilă și ventilată",
   "spre": [
    136,
    6.4
   ]
  },
  {
   "id": "e1-reper",
   "tip": "eticheta",
   "x": 70,
   "y": 15,
   "lat": 26,
   "text": "fața tavanului fals: 243 cm, adică 7 cm sub placă",
   "spre": [
    80,
    7
   ]
  },
  {
   "id": "e1-margini",
   "tip": "eticheta",
   "x": 99,
   "y": 22,
   "lat": 44,
   "text": "buza se termină la 109,3 cm de peretele de vest; urmează fanta de 15 cm și masca până la perete",
   "spre": [
    109.3,
    7
   ]
  },
  {
   "id": "e1-grinda",
   "tip": "eticheta",
   "x": 99,
   "y": 30,
   "lat": 44,
   "text": "grinda GR1, în spatele secțiunii: fața de jos la 205 cm; fanta, banda și masca se opresc la fața ei",
   "spre": [
    95,
    44.6
   ]
  },
  {
   "id": "e2-teava",
   "tip": "eticheta",
   "x": 108,
   "y": 21,
   "lat": 36,
   "text": "țeava de gaz: Ø ~3 cm, cu axa la ~5 cm de perete și ~3 cm sub placă (A.05)",
   "spre": [
    139,
    3
   ]
  },
  {
   "id": "e2-anre",
   "tip": "eticheta",
   "x": 87,
   "y": 30,
   "lat": 52,
   "text": "o montează numai firma autorizată ANRE, înainte de scheletul tavanului"
  },
  {
   "id": "e3-d8",
   "tip": "eticheta",
   "x": 87,
   "y": 13.5,
   "lat": 24,
   "text": "D8: sursa Push-DIM a GS-ului, în golul tavanului, mai spre intrare; se ajunge doar prin trapă",
   "spre": [
    96.2,
    4.5
   ]
  },
  {
   "id": "e3-cablu",
   "tip": "eticheta",
   "x": 104,
   "y": 24,
   "lat": 23,
   "text": "CB-C2: capătul cablului de 230 V, în fantă, lângă grindă",
   "spre": [
    116.8,
    2.6
   ]
  },
  {
   "id": "e3-zona",
   "tip": "eticheta",
   "x": 129,
   "y": 15,
   "lat": 20,
   "text": "în golul măștii: fără doze, prize sau surse",
   "spre": [
    137,
    4.6
   ]
  },
  {
   "id": "e4-profile",
   "tip": "eticheta",
   "x": 87,
   "y": 14.5,
   "lat": 24,
   "text": "profile prinse direct de placă, pe două niveluri",
   "spre": [
    98,
    2
   ]
  },
  {
   "id": "e4-margine",
   "tip": "eticheta",
   "x": 100,
   "y": 23,
   "lat": 26,
   "text": "profilul de margine, pe care se prinde placa verticală",
   "spre": [
    104.7,
    4.2
   ]
  },
  {
   "id": "e5-placa",
   "tip": "eticheta",
   "x": 100,
   "y": 16,
   "lat": 30,
   "text": "placa verticală: de la placă până la plăcile tavanului, cu fața la 107,3 cm de peretele de vest",
   "spre": [
    106.7,
    3.2
   ]
  },
  {
   "id": "e5-gol",
   "tip": "eticheta",
   "x": 87,
   "y": 27,
   "lat": 34,
   "text": "închide golul tavanului spre fantă: ce stă în gol se ajunge doar prin trapă",
   "spre": [
    96,
    1.8
   ]
  },
  {
   "id": "e6-buza",
   "tip": "eticheta",
   "x": 112,
   "y": 19,
   "lat": 18,
   "text": "buza de 2 cm ascunde profilul benzii",
   "spre": [
    108.3,
    6.4
   ]
  },
  {
   "id": "e6-placi",
   "tip": "eticheta",
   "x": 87,
   "y": 28,
   "lat": 30,
   "text": "plăcile de 1,25 cm, cu fața la 243 cm",
   "spre": [
    96,
    6.4
   ]
  },
  {
   "id": "e7-schelet",
   "tip": "eticheta",
   "x": 128,
   "y": 17,
   "lat": 21,
   "text": "scheletul măștii: profil la perete, profil de margine și profile prinse de placă",
   "spre": [
    133.5,
    2
   ]
  },
  {
   "id": "e7-gol",
   "tip": "eticheta",
   "x": 99,
   "y": 15,
   "lat": 17,
   "text": "golul de deasupra profilului de margine rămâne deschis spre fantă",
   "spre": [
    125.9,
    3.4
   ]
  },
  {
   "id": "e8-placa",
   "tip": "eticheta",
   "x": 118,
   "y": 16.5,
   "lat": 30,
   "text": "placa măștii, în bucăți care se scot: șuruburi aparente, rosturi fără glet (propunere)",
   "spre": [
    134,
    6.4
   ]
  },
  {
   "id": "e9-glet",
   "tip": "eticheta",
   "x": 101,
   "y": 15,
   "lat": 20,
   "text": "glet și vopsea pe tavan și pe muchia buzei",
   "spre": [
    104,
    7.1
   ]
  },
  {
   "id": "e9-fanta",
   "tip": "eticheta",
   "x": 112,
   "y": 20,
   "lat": 26,
   "text": "vopsea și pe placă și pe placa verticală, în fantă",
   "spre": [
    116,
    0.1
   ]
  },
  {
   "id": "e9-masca",
   "tip": "eticheta",
   "x": 126,
   "y": 26.5,
   "lat": 21,
   "text": "masca: vopsită, cu rosturile goale",
   "spre": [
    134,
    7.1
   ]
  },
  {
   "id": "e10-profil",
   "tip": "eticheta",
   "x": 110.5,
   "y": 13.2,
   "lat": 16,
   "text": "profil S3 de aluminiu alb, 23,5 × 10 mm",
   "spre": [
    107.75,
    2.6
   ]
  },
  {
   "id": "e10-banda",
   "tip": "eticheta",
   "x": 110.5,
   "y": 9.2,
   "lat": 16,
   "text": "banda Hue Flux C2, lipită pe fundul profilului",
   "spre": [
    107.75,
    1.5
   ]
  },
  {
   "id": "e10-difuzor",
   "tip": "eticheta",
   "x": 110.5,
   "y": 5.2,
   "lat": 16,
   "text": "difuzorul opal, spre mască",
   "spre": [
    108.3,
    1.0
   ]
  },
  {
   "id": "e11-lumina",
   "tip": "eticheta",
   "x": 118,
   "y": 22,
   "lat": 31,
   "text": "lumina cade pe mască și pe placă",
   "spre": [
    121,
    3
   ]
  },
  {
   "id": "e11-ochi",
   "tip": "eticheta",
   "x": 87,
   "y": 31,
   "lat": 30,
   "text": "din hol: fanta luminată; profilul rămâne după buză"
  }
 ],
 "pasi": [
  {
   "titlu": "Ce se construiește",
   "cine": "toată echipa",
   "stare": "proiect",
   "vedere": {
    "x0": 86,
    "x1": 150,
    "y0": -5,
    "y1": 38
   },
   "apar": [
    "placa",
    "zid",
    "fantoma",
    "t-placa",
    "t-hol",
    "t-perete",
    "c-7",
    "c-15",
    "c-20",
    "c-buza",
    "e0-tf",
    "e0-fanta",
    "e0-masca"
   ],
   "text": "Tavanul fals TF1 are 7 cm, cu fața la 243 cm (placa la 250). Pe latura de est, spre peretele cu oglinda, urmează buza de ~2 cm a tavanului fals, fanta de 15 cm deschisă până la placă și masca țevii de gaz, de 20 cm. Banda Hue Flux stă într-un profil S3 prins sus pe placa verticală de la marginea fantei, cu lumina spre mască. Privit de jos, profilul e ascuns de buză.",
   "puncte": [
    "Grinda GR1 (fața de jos la 205 cm) întrerupe fanta, banda și masca: la nord de ea sunt SC1, C1 și MG1 (312 cm), la sud SC2, C2 și MG2 (~199 cm).",
    "Desenul e la sud de grindă. La nord e la fel, cu buza la 113 cm de peretele de vest din zona de nord și masca de 20 cm.",
    "Lângă peretele cu ușa de intrare, tavanul fals se oprește la 8,9 cm de perete: fâșia FS rămâne deschisă până la placă."
   ],
   "verifica": [
    "Grosimea tavanului fals: 7 cm în detaliul din A.05 (fața la 243), fața la 242 în A.17 și A.18, 10 cm în legenda A.05 (L6).",
    "Cum se demontează masca de gaz și pe unde se ventilează (HL5). Pe unde trece țeava de grinda GR1 și pe unde iese spre bucătărie (HL4, BC13).",
    "Ce închide fâșia FS de 8,9 cm și unde vine tabloul electric nou (HL1, HL2).",
    "Trape de vizitare pentru sursele D8 și D9 și, eventual, pentru sursele benzilor C1 și C2 (HL9, L7)."
   ],
   "sursa": "A.05 (detaliul hol tavan fals, 1:5; cotele 109,3 + 15 + 20, 113 + 15 + 20, 312, 200, 8,9); A.17 D04 și D05; specs/08 D; planul tavanului holului (TF1, SC1, SC2, MG1, MG2, C1, C2, FS)"
  },
  {
   "titlu": "Trasarea și grinda GR1",
   "cine": "echipa de gips-carton",
   "stare": "proiect",
   "vedere": {
    "x0": 62,
    "x1": 152,
    "y0": -6,
    "y1": 52
   },
   "apar": [
    "grinda",
    "reper",
    "c-7",
    "c-38",
    "e1-reper",
    "e1-margini",
    "e1-grinda"
   ],
   "text": "Pe pereți se trasează fața tavanului fals la 243 cm, adică 7 cm sub placă. Pe placă se trasează marginea buzei și marginea măștii: la sud de grindă buza se termină la 109,3 cm de peretele de vest, la nord la 113 cm de peretele de vest din zona de nord (care e cu 4 cm mai spre vest). De la buză urmează fanta de 15 cm, apoi masca până la perete.",
   "puncte": [
    "Grinda GR1 coboară la 205 cm, cu 38 cm sub tavanul fals. Fanta, banda și masca se opresc la fețele ei.",
    "C1 și C2 sunt trasee separate, fiecare cu kitul Hue Flux al lui."
   ],
   "verifica": [
    "Placa la 250 cm și fața de jos a grinzii la 205 cm, măsurate acum în mai multe puncte.",
    "Lungimea fantei de la sud de grindă: 200 cm în cotă, 198,9 cm pe desen (HL8). De ea depinde banda C2."
   ],
   "atentie": "A.05 hașurează tavanul fals și peste grindă, iar A.17 și randarea A.20 o arată aparentă, albă ca pereții (HL6). Se hotărăște înainte de schelet.",
   "sursa": "A.01 (Hu 2,50; 140 + 213,9 + 25); A.05 (109,3, 113, 15, 20; detaliul hol: 7); A.17 D05 (205); A.20"
  },
  {
   "titlu": "Țeava de gaz",
   "cine": "instalatorul de gaz, firma autorizată ANRE",
   "stare": "proiect",
   "vedere": {
    "x0": 86,
    "x1": 150,
    "y0": -5,
    "y1": 38
   },
   "apar": [
    "teava",
    "c-teava",
    "e2-teava",
    "e2-anre"
   ],
   "text": "Țeava de gaz trece prin fâșia de lângă peretele cu oglinda, unde vine masca. În detaliul din A.05 are Ø ~3 cm, cu axa la ~5 cm de perete și ~3 cm sub placă. Traseul îl face numai firma autorizată ANRE, cu proiect și aviz de la Delgaz Grid, înainte de scheletul tavanului fals.",
   "puncte": [
    "Masca M06 de pe perete nu se mai face (decizia din 02.11.2026): țeava nu mai coboară pe grindă și nu se mai vede.",
    "Pe unde trece țeava de grinda GR1 și pe unde iese spre bucătărie nu e desenat (HL4, BC13)."
   ],
   "verifica": [
    "Firma ANRE a confirmat traseul și diametrul țevii înainte de schelet.",
    "Firma ANRE a spus ce verifică înainte să se închidă masca."
   ],
   "atentie": "Țeava nu se îngroapă și nu se închide etanș: masca trebuie să fie demontabilă și ventilată. În golul măștii nu se pun doze, prize sau surse.",
   "sursa": "A.05 (detaliul hol: „Teava gaz”, măsurat pe desen); specs/08 D (regulile 1 și 2, decizia din 02.11.2026); analiza/01, pașii 0.2 și 2.2"
  },
  {
   "titlu": "Cablurile din tavan",
   "cine": "electricianul",
   "stare": "propunere",
   "vedere": {
    "x0": 86,
    "x1": 150,
    "y0": -5,
    "y1": 38
   },
   "apar": [
    "cablu",
    "cb",
    "zona-mg",
    "d8",
    "e3-d8",
    "e3-cablu",
    "e3-zona"
   ],
   "text": "Cablurile se pozează pe placă înainte de schelet. Cablul de 230 V pentru banda C2 iese în fantă lângă fața de sud a grinzii (CB-C2, marcajul C din A.06); cel pentru C1 iese lângă fața de nord (CB-C1).",
   "puncte": [
    "Curentul benzilor e permanent: clapa C din întrerupătoarele ABC nu taie curentul, iar în doză se pune Hue Wall Switch Module. Dozele ABC sunt adânci, la ambele întrerupătoare.",
    "Sursa fiecărui kit se bagă într-o priză (PH), iar locul ei nu e hotărât: priză dublă în mobilierul M04 de lângă grindă, cu cabluri prelungitoare Flux de 5 m prin tavanul fals, sau priză lângă grindă, cu sursa în fantă (se vede de jos).",
    "Sursele Push-DIM D8 (benzile din GS) și D9 (benzile din baie) stau în golul tavanului fals, la vest de fantă. Se ajung numai printr-o trapă de vizitare (HL9, L7)."
   ],
   "verifica": [
    "În golul măștii de gaz nu e niciun cablu, doză sau sursă.",
    "Locul prizei PH e hotărât înainte de pozare.",
    "Firele de 230 V care rămân nefolosite se leagă în doze cu capac, accesibile, sau se scot din circuit."
   ],
   "sursa": "A.06 (marcajul C); specs/06 G4, G6 și G7; specs/04 (29.10.2026: sursele GS și băii în tavanul fals din hol); planul tavanului holului (CB-C1, CB-C2, PH, D8, D9)"
  },
  {
   "titlu": "Scheletul tavanului fals",
   "cine": "echipa de gips-carton",
   "stare": "proiect",
   "vedere": {
    "x0": 86,
    "x1": 150,
    "y0": -5,
    "y1": 38
   },
   "apar": [
    "str-tf",
    "cd-tf",
    "cd2-tf",
    "ud-tf",
    "e4-profile",
    "e4-margine"
   ],
   "text": "Profilele se prind direct de placă, pe două niveluri, ca în detaliul din A.05: sus, profilele lipite de placă; dedesubt, profilele pe care se înșurubează plăcile. La marginea fantei se pune profilul de margine, pe care se prinde placa verticală.",
   "puncte": [
    "Tavanul fals se oprește la fețele grinzii GR1, la stâlpul ST1 și la 8,9 cm de peretele cu ușa de intrare (FS).",
    "Între 8,9 și 155 cm de la peretele cu ușa de intrare nu e fantă: tavanul fals merge până la peretele de est."
   ],
   "verifica": [
    "Fața de jos a profilelor e la 5,75 cm sub placă, la nivel (laser), ca fața plăcilor să ajungă la 243 cm.",
    "Scheletul măștii de gaz e separat (pasul 7)."
   ],
   "atentie": "Marginea tavanului fals de la fâșia FS nu e desenată în planșe (HL1). Se hotărăște înainte de schelet.",
   "sursa": "A.05 (detaliul hol: profilele și cota 7); planul tavanului holului (TF1, FS)"
  },
  {
   "titlu": "Placa verticală de la marginea fantei",
   "cine": "echipa de gips-carton",
   "stare": "proiect",
   "vedere": {
    "x0": 86,
    "x1": 150,
    "y0": -5,
    "y1": 38
   },
   "apar": [
    "placa-v",
    "e5-placa",
    "e5-gol"
   ],
   "text": "Pe profilul de margine se prinde o fâșie verticală de gips-carton, de la placă până la nivelul plăcilor tavanului. Fața ei dinspre fantă stă cu 2 cm în spatele marginii buzei: la 107,3 cm de peretele de vest, la sud de grindă. Pe această față se prinde profilul benzii.",
   "puncte": [
    "Merge pe toată lungimea fantei: ~199 cm la sud de grindă (SC2), 312 cm la nord (SC1).",
    "Prin ea trec cablul CB-C2 și, dacă priza PH e în M04, cablul prelungitor Flux."
   ],
   "verifica": [
    "Placa e verticală și dreaptă pe toată lungimea, cu fața la 2 cm în spatele liniei buzei."
   ],
   "atentie": "Placa închide golul tavanului spre fantă. Ce se pune în gol (D8, D9, eventual sursele benzilor) nu se mai ajunge prin fantă, ci numai printr-o trapă (HL9).",
   "sursa": "A.05 (detaliul hol: placa verticală; buza de ~2 cm, măsurată pe desen); planul tavanului holului (SC1, SC2; C2 la x = 107,3)"
  },
  {
   "titlu": "Plăcile tavanului și buza de 2 cm",
   "cine": "echipa de gips-carton",
   "stare": "proiect",
   "vedere": {
    "x0": 86,
    "x1": 150,
    "y0": -5,
    "y1": 38
   },
   "apar": [
    "placa-tf",
    "c-7",
    "c-15",
    "c-buza",
    "e6-buza",
    "e6-placi"
   ],
   "text": "Plăcile de 1,25 cm se înșurubează pe profile și trec cu 2 cm peste placa verticală, spre fantă. Buza ascunde profilul benzii când e privit de jos. Fanta are 15 cm, de la marginea buzei la marginea măștii.",
   "verifica": [
    "Buza are 2 cm pe toată lungimea, iar muchia ei e dreaptă.",
    "Fanta are 15 cm pe toată lungimea.",
    "Fața plăcilor e la 243 cm."
   ],
   "sursa": "A.05 (detaliul hol: cotele 7 și 15; buza măsurată pe desen)"
  },
  {
   "titlu": "Scheletul măștii de gaz",
   "cine": "echipa de gips-carton, după instalatorul de gaz",
   "stare": "proiect",
   "vedere": {
    "x0": 86,
    "x1": 150,
    "y0": -5,
    "y1": 38
   },
   "apar": [
    "str-mg",
    "cd-mg",
    "c-mg-st",
    "c-mg-dr",
    "e7-schelet",
    "e7-gol"
   ],
   "text": "Masca are scheletul ei, cu țeava între profile: un profil lipit de perete, un profil de margine spre fantă și profile prinse de placă (A.05). Profilul de margine stă la ~3 cm în spatele marginii măștii, iar golul de deasupra lui rămâne deschis spre fantă.",
   "puncte": [
    "Prin golul deschis spre fantă se aerisește masca. Dacă firma ANRE cere grile, ele se fac în placa măștii (HL5).",
    "Propunerea noastră: profilele nu ating țeava, ca masca să se poată scoate fără să se miște țeava."
   ],
   "verifica": [
    "Țeava e montată de firma ANRE, iar traseul e cel confirmat, înainte de schelet.",
    "Golul de deasupra profilului de margine nu e închis."
   ],
   "sursa": "A.05 (detaliul hol: profilele măștii, măsurate pe desen); specs/08 D; analiza/01, pasul 4.1"
  },
  {
   "titlu": "Placa demontabilă a măștii",
   "cine": "echipa de gips-carton",
   "stare": "propunere",
   "vedere": {
    "x0": 86,
    "x1": 150,
    "y0": -5,
    "y1": 38
   },
   "apar": [
    "placa-mg",
    "c-15",
    "c-20",
    "e8-placa"
   ],
   "text": "Placa măștii se prinde pe scheletul măștii în bucăți care se pot scoate. Propunerea noastră: șuruburi lăsate aparente, fără glet pe rosturi și pe muchia dinspre perete, ca masca să se deschidă fără tăiere.",
   "puncte": [
    "A.05 cotează 109,3 + 15 + 20 = 144,3 cm pe un hol de 144 cm: la sud de grindă masca are ~19,7 cm, la nord 20 cm.",
    "Lungimea bucăților și felul prinderii se stabilesc cu arhitecta și cu firma ANRE (HL5)."
   ],
   "verifica": [
    "O bucată se scoate și se pune la loc fără să se strice placa.",
    "Pe placa măștii nu se prinde nimic: spoturi, doze sau cabluri."
   ],
   "atentie": "Detaliul din A.05 arată o placă fixă, fără grile și fără prinderi demontabile, iar specs/08 cere mască demontabilă și ventilată. Până la răspunsul arhitectei (HL5), aceasta e doar propunerea noastră.",
   "sursa": "propunerea noastră; specs/08 D (regula 2); A.05; planul tavanului holului (MG1, MG2)"
  },
  {
   "titlu": "Glet și vopsea",
   "cine": "finisorul",
   "stare": "propunere",
   "vedere": {
    "x0": 99,
    "x1": 149,
    "y0": -3,
    "y1": 31
   },
   "apar": [
    "glet-tf",
    "glet-buza",
    "vopsea-fanta",
    "vopsea-v",
    "glet-mg",
    "e9-glet",
    "e9-fanta",
    "e9-masca"
   ],
   "text": "Tavanul și muchia buzei se gletuiesc și se vopsesc ca restul tavanelor (San Marco P344 alb). În fantă se vopsesc și placa de beton și fața plăcii verticale: pe ele cade lumina benzii. Placa măștii se vopsește, dar rosturile ei rămân goale.",
   "verifica": [
    "După vopsit, muchia buzei e dreaptă: e linia care se vede din hol.",
    "Bucățile măștii se scot și după vopsit."
   ],
   "atentie": "În analiza/01, profilele LED sunt la pasul 4.9, înainte de glet. Pentru profilul aplicat S3 propunem montajul după vopsit, ca profilul și locul lui să rămână curate.",
   "sursa": "analiza/01, pașii 4.9, 5.4 și 7.2 (P344 alb); propunerea noastră"
  },
  {
   "titlu": "Profilul S3 și banda C2",
   "cine": "electricianul",
   "stare": "propunere",
   "vedere": {
    "x0": 101,
    "x1": 127,
    "y0": -2,
    "y1": 18
   },
   "apar": [
    "profil",
    "banda",
    "difuzor",
    "c-s3",
    "c-adanc",
    "e10-profil",
    "e10-banda",
    "e10-difuzor"
   ],
   "text": "Profilul S3 de aluminiu alb (23,5 × 10 mm, interior 20 × ~8 mm) se prinde sus pe fața plăcii verticale, cu deschiderea spre mască. Banda Hue Flux (15,9 × 6,35 mm) se lipește pe fundul profilului, curățat cu alcool. La sfârșit se pune difuzorul opal.",
   "puncte": [
    "C2: o bară de 2 m. Banda are 12 segmente (~199 cm) dacă în fanta măsurată au loc și capacele și conectorul controllerului; altfel 11 segmente (~183 cm) (HL8).",
    "C1: două bare de 2 m îmbinate; banda are 18 segmente (~299 cm) pe traseul de 312 cm.",
    "Capătul alimentat e lângă grindă (CB-C1, CB-C2). Prinderea profilului: după fișa produsului."
   ],
   "verifica": [
    "Banda se aprinde înainte să se pună difuzorul.",
    "Profilul nu iese de sub buză: are ~1 cm adâncime, iar buza are 2 cm."
   ],
   "sursa": "specs/04, „Profile pentru Flux” și planul de tăiere (29.10.2026); specs/06 G6; planul tavanului holului (C1, C2)"
  },
  {
   "titlu": "Alimentarea și proba de lumină",
   "cine": "electricianul, apoi noi",
   "stare": "propunere",
   "vedere": {
    "x0": 86,
    "x1": 150,
    "y0": -5,
    "y1": 38
   },
   "apar": [
    "lumina",
    "ochi",
    "e11-lumina",
    "e11-ochi"
   ],
   "text": "Sursa kitului se bagă în priza PH. Cablul sursei (1,5 m) sau cablul prelungitor Flux de 5 m ajunge la controllerul de la capătul benzii. Lumina iese din profil spre mască și spre placă: din hol se vede fanta luminată, iar profilul rămâne după buză.",
   "puncte": [
    "Calculat pe secțiune, cu ochii la 160 cm: marginea difuzorului se poate vedea doar de lângă peretele cu oglinda, de la mai puțin de ~15 cm de el.",
    "În aplicația Hue, benzile din hol se folosesc pe alb, cu „Comportament la pornire” setat."
   ],
   "verifica": [
    "Lumina e uniformă pe toată fanta, fără puncte vizibile.",
    "Până la montarea modulelor Hue Wall Switch Module, clapa C rămâne aprinsă; altfel banda nu primește curent."
   ],
   "sursa": "specs/06 G4, G6 și G7; specs/04 (29.10.2026: în hol, benzile numai pe alb); A.05 (lumina spre mască); calculul nostru pe secțiune"
  }
 ]
};
