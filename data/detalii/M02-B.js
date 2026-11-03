// Blatul lavoarului din GS (M02-B) — pașii de montaj, pentru fereastra animată din desene/js/pasi.js.
// Format: JSON strict după „= ”. Secțiune verticală prin axa lavoarului, perpendiculară pe peretele lavoarului, în cm:
// x de la fața zidului spre cameră, y = −h (h de la pardoseala finită). La pasul benzii E1, detaliul în plan din A.24
// e desenat separat, în stânga zidului (x < −30). Câmpurile sunt descrise în desene/README.md.
window.DETALII = window.DETALII || {};
window.DETALII["M02-B"] = {
 "id": "M02-B",
 "nume": "Blatul lavoarului din GS",
 "subtitlu": "Secțiune verticală prin axa lavoarului, perpendiculară pe peretele lavoarului, ca secțiunea blatului din A.24",
 "orientare": "Stânga: peretele cu lavoarul. Dreapta: GS-ul. Pasul benzii E1 arată detaliul în plan din A.24.",
 "camera": "gs",
 "perete": "S",
 "sursa": "A.24 (secțiunea blatului, detaliul plan LED oglindă, observația); A.25 B05; A.03; specs/04, specs/07 D, specs/09; gs.js",
 "revizie": {
  "nr": 1,
  "data": "2026-11-02"
 },
 "nota": "Blatul înaintea peretelui-suport e cerința din A.24; restul ordinii e din gs.js și propunerea noastră. Se confirmă cu arhitecta, cu echipa de gips-carton, cu instalatorul și cu tâmplarul.",
 "vedere": {
  "x0": -12,
  "x1": 48,
  "y0": -98,
  "y1": 4
 },
 "sectiune3d": {"plan": "vertical", "adancime": 60, "privire": [28, 14]},
 "forme": [
  {
   "id": "tavan",
   "tip": "dreptunghi",
   "x": -10,
   "y": -262,
   "w": 160,
   "h": 12,
   "umplere": "ciment"
  },
  {
   "id": "zid",
   "tip": "dreptunghi",
   "x": -10,
   "y": -250,
   "w": 10,
   "h": 256,
   "umplere": "zid"
  },
  {
   "id": "sapa",
   "tip": "dreptunghi",
   "x": 0,
   "y": 0.8,
   "w": 150,
   "h": 5.2,
   "umplere": "sapa"
  },
  {
   "id": "gresie",
   "tip": "dreptunghi",
   "x": 0,
   "y": 0,
   "w": 150,
   "h": 0.8,
   "umplere": "faianta"
  },
  {
   "id": "f3",
   "tip": "dreptunghi",
   "x": 0,
   "y": -35,
   "w": 0.8,
   "h": 35,
   "umplere": "faianta"
  },
  {
   "id": "cornier",
   "tip": "dreptunghi",
   "x": 0.3,
   "y": -83,
   "w": 37.4,
   "h": 2,
   "umplere": "otel",
   "z3d": 19.5,
   "adanc3d": 3
  },
  {
   "id": "uw-perete",
   "tip": "poligon",
   "puncte": [
    [
     0,
     -83
    ],
    [
     4,
     -83
    ],
    [
     4,
     -82.7
    ],
    [
     0.3,
     -82.7
    ],
    [
     0.3,
     -73.3
    ],
    [
     4,
     -73.3
    ],
    [
     4,
     -73
    ],
    [
     0,
     -73
    ]
   ],
   "umplere": "otel"
  },
  {
   "id": "uw-fata",
   "tip": "poligon",
   "puncte": [
    [
     38,
     -83
    ],
    [
     34,
     -83
    ],
    [
     34,
     -82.7
    ],
    [
     37.7,
     -82.7
    ],
    [
     37.7,
     -73.3
    ],
    [
     34,
     -73.3
    ],
    [
     34,
     -73
    ],
    [
     38,
     -73
    ]
   ],
   "umplere": "otel"
  },
  {
   "id": "s4",
   "tip": "poligon",
   "puncte": [
    [
     5.95,
     -84.25
    ],
    [
     34.05,
     -84.25
    ],
    [
     34.05,
     -82.95
    ],
    [
     33.3,
     -82.95
    ],
    [
     33,
     -80.5
    ],
    [
     32,
     -77.5
    ],
    [
     30,
     -75
    ],
    [
     27.5,
     -73.6
    ],
    [
     26,
     -73.3
    ],
    [
     26,
     -70.15
    ],
    [
     14,
     -70.15
    ],
    [
     14,
     -73.3
    ],
    [
     12.5,
     -73.6
    ],
    [
     10,
     -75
    ],
    [
     8,
     -77.5
    ],
    [
     7,
     -80.5
    ],
    [
     6.7,
     -82.95
    ],
    [
     5.95,
     -82.95
    ]
   ],
   "umplere": "negru",
   "puncte3d": [[5.95, -84.25], [7.5, -84.25], [7.9, -81.5], [9.1, -78.6], [11.2, -76.2], [14.5, -74.6], [17.8, -74.25], [22.2, -74.25], [25.5, -74.6], [28.8, -76.2], [30.9, -78.6], [32.1, -81.5], [32.5, -84.25], [34.05, -84.25], [34.05, -82.95], [33.3, -82.95], [33, -80.5], [32, -77.5], [30, -75], [27.5, -73.6], [26, -73.3], [26, -70.15], [14, -70.15], [14, -73.3], [12.5, -73.6], [10, -75], [8, -77.5], [7, -80.5], [6.7, -82.95], [5.95, -82.95]],
   "rotund3d": {"ax": 20, "r": 20.15, "p": 2.2}
  },
  {
   "id": "s4-int",
   "tip": "poligon",
   "puncte": [
    [
     7.5,
     -84.25
    ],
    [
     32.5,
     -84.25
    ],
    [
     32.1,
     -81.5
    ],
    [
     30.9,
     -78.6
    ],
    [
     28.8,
     -76.2
    ],
    [
     25.5,
     -74.6
    ],
    [
     22.2,
     -74.25
    ],
    [
     17.8,
     -74.25
    ],
    [
     14.5,
     -74.6
    ],
    [
     11.2,
     -76.2
    ],
    [
     9.1,
     -78.6
    ],
    [
     7.9,
     -81.5
    ]
   ],
   "umplere": "alb",
   "corp3d": "ascuns"
  },
  {
   "id": "s4-ventil",
   "tip": "dreptunghi",
   "x": 17.8,
   "y": -74.25,
   "w": 4.4,
   "h": 4.1,
   "umplere": "pvc",
   "rotund3d": {"ax": 20, "r": 2.2, "p": 2}
  },
  {
   "id": "placa-sus-perete",
   "tip": "dreptunghi",
   "x": 0,
   "y": -84.25,
   "w": 4.2,
   "h": 1.25,
   "umplere": "gips",
   "umplere3d": "gips-ru"
  },
  {
   "id": "placa-sus-fata",
   "tip": "dreptunghi",
   "x": 36,
   "y": -84.25,
   "w": 2,
   "h": 1.25,
   "umplere": "gips",
   "umplere3d": "gips-ru"
  },
  {
   "id": "placa-fata",
   "tip": "dreptunghi",
   "x": 38,
   "y": -84.25,
   "w": 1.25,
   "h": 11.25,
   "umplere": "gips",
   "umplere3d": "gips-ru"
  },
  {
   "id": "ps1-a",
   "tip": "dreptunghi",
   "x": 0,
   "y": -250,
   "w": 1.25,
   "h": 165.75,
   "umplere": "gips",
   "umplere3d": "gips-ru"
  },
  {
   "id": "ps1-b",
   "tip": "dreptunghi",
   "x": 1.25,
   "y": -250,
   "w": 1.25,
   "h": 165.75,
   "umplere": "gips",
   "umplere3d": "gips-ru"
  },
  {
   "id": "faianta-sus-a",
   "tip": "dreptunghi",
   "x": 32,
   "y": -85,
   "w": 8,
   "h": 0.75,
   "umplere": "faianta"
  },
  {
   "id": "faianta-sus-b",
   "tip": "dreptunghi",
   "x": 2.5,
   "y": -85,
   "w": 5.5,
   "h": 0.75,
   "umplere": "faianta"
  },
  {
   "id": "faianta-fata",
   "tip": "dreptunghi",
   "x": 39.25,
   "y": -84.25,
   "w": 0.75,
   "h": 11.25,
   "umplere": "faianta"
  },
  {
   "id": "og1",
   "tip": "dreptunghi",
   "x": 2.5,
   "y": -250,
   "w": 0.5,
   "h": 165,
   "umplere": "sticla",
   "umplere3d": "oglinda"
  },
  {
   "id": "r5",
   "tip": "dreptunghi",
   "x": 0,
   "y": -57,
   "w": 3,
   "h": 4,
   "umplere": "pvc",
   "cilindru3d": "x"
  },
  {
   "id": "sifon",
   "tip": "fir",
   "puncte": [
    [
     20,
     -70.15
    ],
    [
     20,
     -51.5
    ],
    [
     18.5,
     -49.5
    ],
    [
     15.5,
     -49.5
    ],
    [
     14,
     -51.5
    ],
    [
     14,
     -55
    ],
    [
     3,
     -55
    ]
   ],
   "culoare": "scurgere",
   "gros": 5,
   "z3d": 0
  },
  {
   "id": "m02-front",
   "tip": "dreptunghi",
   "x": 38,
   "y": -73,
   "w": 2,
   "h": 38,
   "umplere": "pal",
   "umplere3d": "nuc"
  },
  {
   "id": "m02-fund",
   "tip": "dreptunghi",
   "x": 2,
   "y": -36.8,
   "w": 36,
   "h": 1.8,
   "umplere": "pal"
  },
  {
   "id": "zona-sertar",
   "tip": "dreptunghi",
   "x": 13,
   "y": -73,
   "w": 14,
   "h": 24.5,
   "umplere": "zona",
   "temporar": true
  },
  {
   "id": "fantoma",
   "tip": "contur",
   "dreptunghiuri": [
    [
     0,
     -85,
     40,
     12
    ],
    [
     5.95,
     -84.25,
     28.1,
     14.1
    ],
    [
     0,
     -250,
     3,
     165
    ],
    [
     0,
     -73,
     40,
     38
    ]
   ],
   "temporar": true
  },
  {
   "id": "s5-contur",
   "tip": "contur",
   "dreptunghiuri": [
    [
     18,
     -101,
     4,
     16
    ]
   ],
   "temporar": true
  },
  {
   "id": "i-zid",
   "tip": "dreptunghi",
   "x": -54,
   "y": -200,
   "w": 6,
   "h": 14,
   "umplere": "zid",
   "temporar": true,
   "adanc3d": 12
  },
  {
   "id": "i-ps1a",
   "tip": "dreptunghi",
   "x": -48,
   "y": -200,
   "w": 1.25,
   "h": 8,
   "umplere": "gips",
   "temporar": true,
   "adanc3d": 12,
   "umplere3d": "gips-ru"
  },
  {
   "id": "i-ps1b",
   "tip": "dreptunghi",
   "x": -46.75,
   "y": -200,
   "w": 1.25,
   "h": 8,
   "umplere": "gips",
   "temporar": true,
   "adanc3d": 12,
   "umplere3d": "gips-ru"
  },
  {
   "id": "i-oglinda",
   "tip": "dreptunghi",
   "x": -45.5,
   "y": -200,
   "w": 0.5,
   "h": 9.1,
   "umplere": "sticla",
   "temporar": true,
   "adanc3d": 12,
   "umplere3d": "oglinda"
  },
  {
   "id": "i-faianta",
   "tip": "dreptunghi",
   "x": -48,
   "y": -192,
   "w": 1,
   "h": 6,
   "umplere": "faianta",
   "temporar": true,
   "adanc3d": 12
  },
  {
   "id": "i-profil",
   "tip": "dreptunghi",
   "x": -46.8,
   "y": -191.95,
   "w": 1.07,
   "h": 0.88,
   "umplere": "alb",
   "temporar": true,
   "adanc3d": 12
  },
  {
   "id": "i-banda",
   "tip": "dreptunghi",
   "x": -46.6,
   "y": -191.66,
   "w": 0.67,
   "h": 0.3,
   "umplere": "banda",
   "temporar": true,
   "adanc3d": 12
  },
  {
   "id": "i-t-plan",
   "tip": "text",
   "x": -55.5,
   "y": -201,
   "text": "plan, văzut de sus (A.24)",
   "temporar": true
  },
  {
   "id": "i-t-spalet",
   "tip": "text",
   "x": -55.5,
   "y": -184.6,
   "text": "↓ spre spalet",
   "temporar": true
  },
  {
   "id": "t-zid",
   "tip": "text",
   "x": -0.6,
   "y": -28,
   "text": "zidărie",
   "anc": "end"
  },
  {
   "id": "t-camera",
   "tip": "text",
   "x": 108,
   "y": -2,
   "text": "camera →",
   "anc": "end"
  },
  {
   "id": "c-85",
   "tip": "cota",
   "a": [
    52,
    0
   ],
   "b": [
    52,
    -85
   ],
   "text": "85",
   "martori": [
    [
     40,
     -85,
     52.6,
     -85
    ]
   ]
  },
  {
   "id": "c-12",
   "tip": "cota",
   "a": [
    44,
    -73
   ],
   "b": [
    44,
    -85
   ],
   "text": "12",
   "martori": [
    [
     40,
     -73,
     44.6,
     -73
    ]
   ]
  },
  {
   "id": "c-38",
   "tip": "cota",
   "a": [
    44,
    -35
   ],
   "b": [
    44,
    -73
   ],
   "text": "38",
   "martori": [
    [
     40,
     -35,
     44.6,
     -35
    ]
   ]
  },
  {
   "id": "c-35",
   "tip": "cota",
   "a": [
    44,
    0
   ],
   "b": [
    44,
    -35
   ],
   "text": "35"
  },
  {
   "id": "c-8a",
   "tip": "cota",
   "a": [
    0,
    -88
   ],
   "b": [
    8,
    -88
   ],
   "text": "8",
   "martori": [
    [
     8,
     -88.6,
     8,
     -85
    ]
   ]
  },
  {
   "id": "c-24",
   "tip": "cota",
   "a": [
    8,
    -88
   ],
   "b": [
    32,
    -88
   ],
   "text": "24",
   "martori": [
    [
     32,
     -88.6,
     32,
     -85
    ]
   ]
  },
  {
   "id": "c-8b",
   "tip": "cota",
   "a": [
    32,
    -88
   ],
   "b": [
    40,
    -88
   ],
   "text": "8",
   "martori": [
    [
     40,
     -88.6,
     40,
     -85
    ]
   ]
  },
  {
   "id": "c-40",
   "tip": "cota",
   "a": [
    0,
    -100
   ],
   "b": [
    40,
    -100
   ],
   "text": "40",
   "martori": [
    [
     0,
     -100.6,
     0,
     -88.6
    ],
    [
     40,
     -100.6,
     40,
     -88.6
    ]
   ]
  },
  {
   "id": "c-10",
   "tip": "cota",
   "a": [
    20,
    -73
   ],
   "b": [
    20,
    -83
   ],
   "text": "10"
  },
  {
   "id": "c-20",
   "tip": "cota",
   "a": [
    0,
    -66
   ],
   "b": [
    20,
    -66
   ],
   "text": "20",
   "parte": "jos",
   "martori": [
    [
     20,
     -70.15,
     20,
     -65.4
    ]
   ]
  },
  {
   "id": "c-25",
   "tip": "cota",
   "a": [
    0,
    -140
   ],
   "b": [
    2.5,
    -140
   ],
   "text": "2,5"
  },
  {
   "id": "c-165",
   "tip": "cota",
   "a": [
    10,
    -85
   ],
   "b": [
    10,
    -250
   ],
   "text": "165",
   "martori": [
    [
     3,
     -250,
     10.6,
     -250
    ],
    [
     3,
     -85,
     10.6,
     -85
    ]
   ]
  },
  {
   "id": "i-c15",
   "tip": "cota",
   "a": [
    -47,
    -188
   ],
   "b": [
    -45.5,
    -188
   ],
   "text": "1,5",
   "parte": "jos",
   "martori": [
    [
     -47,
     -188.6,
     -47,
     -191.9
    ],
    [
     -45.5,
     -188.6,
     -45.5,
     -190.9
    ]
   ]
  },
  {
   "id": "e0-oglinda",
   "tip": "eticheta",
   "x": 60,
   "y": -135,
   "text": "peretele-suport PS1, oglinda OG1 de 85 × 165 și banda E1",
   "spre": [
    2,
    -125
   ]
  },
  {
   "id": "e0-blat",
   "tip": "eticheta",
   "x": 60,
   "y": -112,
   "text": "blatul M02-B: profile UW 100 × 40, placă RU, faianță; 120 × 40 cm, gros de 12",
   "spre": [
    30,
    -79
   ]
  },
  {
   "id": "e0-lavoar",
   "tip": "eticheta",
   "x": 60,
   "y": -60,
   "text": "lavoarul S4, sub blat; bateria S5, pe blat",
   "spre": [
    20,
    -78
   ]
  },
  {
   "id": "e0-sertar",
   "tip": "eticheta",
   "x": 60,
   "y": -30,
   "text": "sertarul M02 și, spre spalet, compartimentul deschis M02-D",
   "spre": [
    30,
    -50
   ]
  },
  {
   "id": "e1-cablu",
   "tip": "eticheta",
   "x": 62,
   "y": -100,
   "text": "cablul benzii E1 (CB-E1): din colțul S-V până la capătul de sus al benzii"
  },
  {
   "id": "e1-r5",
   "tip": "eticheta",
   "x": 62,
   "y": -62,
   "text": "R5: scurgerea lavoarului, Ø 40, la 55 cm (propunerea noastră)",
   "spre": [
    1.5,
    -55
   ]
  },
  {
   "id": "e1-apa",
   "tip": "eticheta",
   "x": 62,
   "y": -40,
   "text": "R6 și R7 (apa caldă și rece), tot la 55 cm, dar în M02-D, spre spalet"
  },
  {
   "id": "e2-uw-p",
   "tip": "eticheta",
   "x": 62,
   "y": -100,
   "text": "UW 100 × 40 lângă perete, cu tălpile spre cameră",
   "spre": [
    2,
    -78
   ]
  },
  {
   "id": "e2-uw-f",
   "tip": "eticheta",
   "x": 62,
   "y": -80,
   "text": "UW 100 × 40 la muchie, cu tălpile spre perete",
   "spre": [
    37.8,
    -78
   ]
  },
  {
   "id": "e3-cornier",
   "tip": "eticheta",
   "x": 62,
   "y": -100,
   "text": "2 corniere sub capetele lavoarului, în spatele secțiunii",
   "spre": [
    36,
    -82
   ]
  },
  {
   "id": "e3-lavoar",
   "tip": "eticheta",
   "x": 62,
   "y": -62,
   "text": "lavoarul Shell M+: 40,3 × 28,1 cm, adânc de 14,1 cm; buza de 13 mm",
   "spre": [
    27,
    -76
   ]
  },
  {
   "id": "e4-placa",
   "tip": "eticheta",
   "x": 62,
   "y": -100,
   "text": "placa RU sus; golul ei e puțin mai mare decât buza lavoarului",
   "spre": [
    2,
    -83.6
   ]
  },
  {
   "id": "e4-fata",
   "tip": "eticheta",
   "x": 62,
   "y": -80,
   "text": "placa RU pe față, până la 73",
   "spre": [
    38.6,
    -78
   ]
  },
  {
   "id": "e5-ps1",
   "tip": "eticheta",
   "x": 30,
   "y": -132,
   "text": "PS1: două plăci RU, ~2,5 cm, până la placă (250)",
   "spre": [
    1.25,
    -120
   ]
  },
  {
   "id": "e5-pe-blat",
   "tip": "eticheta",
   "x": 30,
   "y": -104,
   "text": "stă pe placa blatului; faianța vine după, până la el",
   "spre": [
    1.5,
    -84.6
   ]
  },
  {
   "id": "e6-sus",
   "tip": "eticheta",
   "x": 62,
   "y": -104,
   "text": "faianța Sand Moon sus; decupajul de 24 cm, la 8 cm de perete și de muchie",
   "spre": [
    36,
    -84.6
   ]
  },
  {
   "id": "e6-fata",
   "tip": "eticheta",
   "x": 62,
   "y": -78,
   "text": "faianța pe fața de 12 cm",
   "spre": [
    39.6,
    -78
   ]
  },
  {
   "id": "e6-f3",
   "tip": "eticheta",
   "x": 62,
   "y": -22,
   "text": "F3: faianța de sub mobilier (0–35 cm)",
   "spre": [
    0.4,
    -20
   ]
  },
  {
   "id": "e7-baterie",
   "tip": "eticheta",
   "x": 62,
   "y": -104,
   "text": "bateria S5: la 24 cm de secțiune, spre spalet (aici, proiectată)",
   "spre": [
    22,
    -95
   ]
  },
  {
   "id": "e7-sifon",
   "tip": "eticheta",
   "x": 62,
   "y": -50,
   "text": "sifonul, de la ventilul Ø 44 la R5",
   "spre": [
    15.5,
    -49.5
   ]
  },
  {
   "id": "e8-oglinda",
   "tip": "eticheta",
   "x": 60,
   "y": -170,
   "text": "oglinda OG1, 85 × 165, lipită pe PS1, de pe blat până la placă",
   "spre": [
    2.75,
    -160
   ]
  },
  {
   "id": "e9-ps1",
   "tip": "eticheta",
   "x": -43,
   "y": -197.5,
   "text": "PS1 (două plăci RU) și oglinda",
   "spre": [
    -45.3,
    -197
   ]
  },
  {
   "id": "e9-profil",
   "tip": "eticheta",
   "x": -43,
   "y": -192.4,
   "text": "profil slim 10,7 × 8,8 mm (max. 12 mm), cu banda E1",
   "spre": [
    -45.9,
    -191.5
   ]
  },
  {
   "id": "e9-placa",
   "tip": "eticheta",
   "x": -43,
   "y": -187.2,
   "text": "lângă oglindă: faianță (A.24) sau ORAC (A.25)? GS2",
   "spre": [
    -47.5,
    -186.8
   ]
  },
  {
   "id": "e10-zona",
   "tip": "eticheta",
   "x": 62,
   "y": -86,
   "text": "lavoarul și sifonul intră în sertar: GS3",
   "spre": [
    24,
    -62
   ]
  },
  {
   "id": "e10-sertar",
   "tip": "eticheta",
   "x": 62,
   "y": -58,
   "text": "sertarul M02, front Nuc, de la 35 la 73",
   "spre": [
    39,
    -55
   ]
  }
 ],
 "pasi": [
  {
   "titlu": "Ce se construiește",
   "cine": "toată echipa",
   "stare": "proiect",
   "vedere": {
    "x0": -20,
    "x1": 110,
    "y0": -150,
    "y1": 12
   },
   "apar": [
    "tavan",
    "zid",
    "sapa",
    "gresie",
    "fantoma",
    "t-zid",
    "t-camera",
    "c-85",
    "c-12",
    "c-8a",
    "c-24",
    "c-8b",
    "c-40",
    "e0-oglinda",
    "e0-blat",
    "e0-lavoar",
    "e0-sertar"
   ],
   "text": "Blatul lavoarului se construiește pe loc: două profile de oțel zincat UW 100 × 40 mm, 2 corniere pe care stă lavoarul, placă de gips-carton RU și faianță Sand Moon sus și pe față. Are 120 × 40 cm și 12 cm grosime, cu fața de sus la 85 cm. Lavoarul Omnires Shell M+ stă sub blat, iar bateria S5, pe blat.",
   "puncte": [
    "Ordinea din A.24: întâi blatul, apoi peretele-suport PS1 al oglinzii. După el vin faianța, oglinda OG1 și banda E1 (gs.js).",
    "Sub blat: sertarul M02 (35–73 cm) și, spre spalet, compartimentul deschis M02-D. Le montează tâmplarul, la final."
   ],
   "verifica": [
    "Lavoarul Omnires Shell M+ (SHELL380UPBLV) e pe șantier: interior 38 × 25 cm, exterior 40,3 × 28,1 cm, adânc de 141 mm (fișa din A.24). Lungimea decupajului se măsoară pe el.",
    "Răspunsul la GS3: cum ocolește sertarul lavoarul și sifonul. Tâmplarul comandă M02 după răspuns.",
    "Placă simplă sau dublă pe blat: A.24 desenează una, gs.js și specs/07 D scriu „placă dublă”."
   ],
   "sursa": "A.24; A.25 B05 (120, 12, 85); A.08 (120 × 40); specs/04 (lavoarul, bateria); specs/07 D; specs/09"
  },
  {
   "titlu": "Țevile și cablul, înainte de blat",
   "cine": "instalatorul și electricianul",
   "stare": "propunere",
   "vedere": {
    "x0": -14,
    "x1": 110,
    "y0": -112,
    "y1": 8
   },
   "apar": [
    "r5",
    "e1-cablu",
    "e1-r5",
    "e1-apa"
   ],
   "text": "Țevile lavoarului și cablul benzii E1 se pozează înainte de blat. Planșele nu desenează racordurile lavoarului. Propunerea noastră: scurgerea R5 (Ø 40) pe axa lavoarului, la 55 cm, și apa caldă și rece (R6, R7) tot la 55 cm, în compartimentul deschis M02-D, sub baterie.",
   "puncte": [
    "Cablul de 24 V al benzii E1 (CB-E1) vine din colțul S-V, pe după PS1, până la capătul de sus al benzii (propunerea noastră). PS1 are doar ~2,5 cm, două plăci lipite de perete (A.24): fără șliț în perete, cablul nu are loc. De stabilit înainte de PS1.",
    "Sursa benzii e D8, în tavanul fals din hol, comună cu banda D1."
   ],
   "verifica": [
    "Proba de presiune la apă, min. 6 bar, 2 ore, înainte să se închidă (analiza/01, 2.11).",
    "Poze la trasee, cu ruleta în cadru (analiza/01, 2.12)."
   ],
   "atentie": "Locul racordurilor se confirmă cu instalatorul și cu tâmplarul: sertarul M02 trebuie să ocolească sifonul (GS3).",
   "sursa": "gs.js R5, R6, R7, CB-E1 și avertismentul de ordine; A.24 (observația); analiza/01 2.11–2.12"
  },
  {
   "titlu": "Profilele UW 100 × 40",
   "cine": "echipa de gips-carton",
   "stare": "proiect",
   "vedere": {
    "x0": -14,
    "x1": 110,
    "y0": -112,
    "y1": 8
   },
   "apar": [
    "uw-perete",
    "uw-fata",
    "c-10",
    "c-12",
    "c-85",
    "e2-uw-p",
    "e2-uw-f"
   ],
   "text": "Blatul stă pe două profile de oțel zincat UW 100 × 40 mm, cu inima verticală: unul prins în peretele lavoarului, cu tălpile spre cameră, și unul la muchia din față, cu tălpile spre perete. Profilul are 10 cm înălțime; deasupra lui vin placa și faianța, ~2 cm, până la 85.",
   "puncte": [
    "Fața de jos a profilelor la 73 cm, cea de sus la ~83 cm.",
    "Blatul merge de la spalet până la ~1,9 cm de peretele cu ușa, unde iese pervazul. Cum se prind capetele profilelor nu e desenat: de stabilit cu echipa de gips-carton."
   ],
   "verifica": [
    "Profilele sunt la nivel pe toată lungimea (~118 cm).",
    "Sub profile rămân 38 cm, până la 35, pentru sertarul M02 (35 + 38 + 12 = 85)."
   ],
   "sursa": "A.24 (secțiunea blatului: profil oțel zincat UW 100 × 40 mm; 12, 38, 35, 85); A.25 B05; gs.js M02-B"
  },
  {
   "titlu": "Cornierele și lavoarul",
   "cine": "echipa de gips-carton, cu instalatorul",
   "stare": "propunere",
   "vedere": {
    "x0": -14,
    "x1": 110,
    "y0": -112,
    "y1": 8
   },
   "apar": [
    "cornier",
    "s4",
    "s4-int",
    "s4-ventil",
    "c-20",
    "e3-cornier",
    "e3-lavoar"
   ],
   "text": "Pe profilele UW se prind două corniere, sub capetele lavoarului. Lavoarul se așază pe ele acum: are 40,3 × 28,1 cm la exterior și nu mai trece prin decupajul de 24 cm de după placare.",
   "puncte": [
    "Axa lavoarului: la 61 cm de peretele cu ușa (59 cm de spalet) și la 20 cm de perete (A.03, A.24).",
    "Buza lavoarului (13 mm) stă în grosimea plăcii de sus, iar deasupra ei vine direct faianța (A.24).",
    "A.24 nu dă mărimea cornierelor și nici direcția lor. Propunerea noastră: de la profilul de lângă perete la cel din față, sub capetele lavoarului; pe desen sunt în spatele secțiunii."
   ],
   "verifica": [
    "Lavoarul e centrat pe axă și nu se mișcă pe corniere.",
    "Buza e în același plan cu fața de sus a plăcii (pasul 4), ca faianța să stea plan."
   ],
   "atentie": "Cu buza sub faianță (A.24) și adâncimea de 141 mm, fundul lavoarului ajunge la ~70 cm, cu ~3 cm sub blat, în sertar. gs.js scrie ~4–5 cm. Se verifică cu lavoarul în mână.",
   "sursa": "A.24 (profil cornier susținere lavoar ×2; fișa lavoarului: 380 × 250, 403 × 281, 141 și 13 mm); A.03 (axa); specs/04 (SHELL380UPBLV); gs.js S4"
  },
  {
   "titlu": "Placa RU, sus și pe față",
   "cine": "echipa de gips-carton",
   "stare": "proiect",
   "vedere": {
    "x0": -14,
    "x1": 110,
    "y0": -112,
    "y1": 8
   },
   "apar": [
    "placa-sus-perete",
    "placa-sus-fata",
    "placa-fata",
    "e4-placa",
    "e4-fata"
   ],
   "text": "Placa de gips-carton RU închide blatul sus și pe față. Sus, golul din placă e puțin mai mare decât buza lavoarului, ca buza să intre în grosimea plăcii (A.24). Pe față, placa coboară până la 73 cm.",
   "puncte": [
    "Gaura bateriei S5: la 85 cm de peretele cu ușa și la 20 cm de perete (A.03). Diametrul, din fișa bateriei.",
    "A.24 desenează o singură placă (10 cm profil + 1,25 cm placă + faianța = 12 cm). gs.js, specs/07 D și specs/09 scriu „placă dublă”: cu două plăci, blatul ar avea ~13,5 cm."
   ],
   "verifica": [
    "Fața de sus a plăcii e la nivel și în același plan cu buza lavoarului.",
    "Fața plăcii din față e dreaptă și verticală; cu faianța și adezivul, muchia finită ajunge la 40 cm de perete."
   ],
   "sursa": "A.24 (Placa gips-carton RU); A.03 (bateria: 35 cm de spalet, 20 cm de perete); specs/07 D; gs.js M02-B"
  },
  {
   "titlu": "Peretele-suport PS1",
   "cine": "echipa de gips-carton",
   "stare": "proiect",
   "vedere": {
    "x0": -14,
    "x1": 70,
    "y0": -150,
    "y1": -62
   },
   "apar": [
    "ps1-a",
    "ps1-b",
    "c-25",
    "e5-ps1",
    "e5-pe-blat"
   ],
   "text": "Peretele-suport al oglinzii: două plăci de gips-carton RU (~2,5 cm) pe peretele lavoarului, de pe blat până la placă (250 cm), pe lățimea oglinzii (85 cm de la peretele cu ușa). Se face după blat, pentru că stă pe el (observația din A.24).",
   "puncte": [
    "Cum se prind plăcile de perete nu e desenat.",
    "Latura dinspre spalet rămâne dreaptă: la ea stă profilul benzii E1."
   ],
   "verifica": [
    "PS1 e vertical și plan: pe el se lipește oglinda de 85 × 165 cm.",
    "Cablul benzii E1 (pasul 1) iese la capătul de sus al laturii dinspre spalet."
   ],
   "atentie": "A.24 desenează PS1 așezat pe faianța blatului, iar gs.js pune faianța după PS1. De confirmat cu arhitecta. Dacă PS1 stă pe faianță, faianța de sus se pune înaintea lui.",
   "sursa": "A.24 (Perete suport; Placa dubla gips carton rezistent la umezeala; observația); A.25 B05 (85 × 165); gs.js PS1"
  },
  {
   "titlu": "Faianța pe blat și pe față",
   "cine": "faianțarul",
   "stare": "proiect",
   "vedere": {
    "x0": -14,
    "x1": 110,
    "y0": -112,
    "y1": 8
   },
   "apar": [
    "faianta-sus-a",
    "faianta-sus-b",
    "faianta-fata",
    "f3",
    "c-8a",
    "c-24",
    "c-8b",
    "e6-sus",
    "e6-fata",
    "e6-f3"
   ],
   "text": "Faianța Sand Moon acoperă fața de sus și fața de 12 cm a blatului. Decupajul lavoarului are 24 cm pe adâncime, la 8 cm de perete și la 8 cm de muchie; pe lungime, după fișa lavoarului. Faianța acoperă buza lavoarului.",
   "puncte": [
    "Pe față, rostul vertical e în axa lavoarului, la ~60,7 cm de peretele cu ușa (A.25), nu în dreptul rosturilor din pardoseală.",
    "Sub mobilier (0–35 cm) vine faianța F3, pe toată lungimea."
   ],
   "verifica": [
    "Muchiile decupajului sunt drepte și la aceeași distanță de jur împrejur.",
    "Fața de sus e la 85 cm și la nivel.",
    "Gaura bateriei e la 85 cm de peretele cu ușa și la 20 cm de perete."
   ],
   "sursa": "A.24 (8 + 24 + 8 = 40; Faianta); A.25 B05 (rostul din axa lavoarului; F3); specs/07 B; gs.js M02-B, F3"
  },
  {
   "titlu": "Bateria S5 și sifonul",
   "cine": "instalatorul",
   "stare": "proiect",
   "vedere": {
    "x0": -14,
    "x1": 110,
    "y0": -112,
    "y1": 8
   },
   "apar": [
    "sifon",
    "s5-contur",
    "e7-baterie",
    "e7-sifon"
   ],
   "text": "Bateria stativă Cersanit Zen se prinde pe blat, la 85 cm de peretele cu ușa și la 20 cm de perete. Furtunurile ei coboară prin blat în compartimentul deschis M02-D, la robinetele de colț R6 și R7. Sifonul leagă scurgerea lavoarului (Ø 44) de R5.",
   "puncte": [
    "Bateria e la 24 cm de axa lavoarului, spre spalet, deci nu e în secțiune: pe desen e proiectată, cu linie întreruptă.",
    "Racordurile R5–R7 sunt propunerea noastră (pasul 1)."
   ],
   "verifica": [
    "Robinetele de colț și sifonul nu curg, cu lavoarul umplut și golit.",
    "Bateria e strânsă și nu se rotește pe faianță."
   ],
   "atentie": "Sifonul trece prin locul sertarului M02 (35–73 cm). Tipul lui, obișnuit sau plat, se alege odată cu forma sertarului (GS3).",
   "sursa": "A.03 (35 cm de spalet, 20 cm de perete); specs/04 (Cersanit Zen S951-595); A.24 (fișa lavoarului: Ø 44); gs.js S5, R5–R7"
  },
  {
   "titlu": "Oglinda OG1",
   "cine": "firma de mobilă sau montatorul oglinzii (de stabilit)",
   "stare": "proiect",
   "vedere": {
    "x0": -20,
    "x1": 150,
    "y0": -258,
    "y1": 12
   },
   "apar": [
    "og1",
    "c-165",
    "e8-oglinda"
   ],
   "text": "Oglinda de 85 × 165 cm se lipește pe peretele-suport PS1, de pe blat (85) până la placă (250), de la peretele cu ușa până la banda E1.",
   "puncte": [
    "Oglinda nu e în lista de achiziții (specs/04). Oferta MobConcept din 02.11.2026 o include; dacă are și profilul LED e întrebarea 13 din analiza/14. Se comandă pe măsură, după ce PS1 e gata.",
    "Fața oglinzii iese cu ~1,5 cm în fața faianței de lângă ea (A.24)."
   ],
   "verifica": [
    "Oglinda stă pe faianța blatului, fără rost vizibil.",
    "La latura dinspre spalet rămâne loc pentru profilul benzii E1 (max. 12 mm)."
   ],
   "sursa": "A.25 B05 (85 × 165); A.24 (detaliul plan LED oglindă); gs.js OG1; analiza/14 (oferta MobConcept)"
  },
  {
   "titlu": "Banda E1 la oglindă",
   "cine": "electricianul",
   "stare": "proiect",
   "vedere": {
    "x0": -56,
    "x1": -28,
    "y0": -202.5,
    "y1": -184
   },
   "apar": [
    "i-zid",
    "i-ps1a",
    "i-ps1b",
    "i-oglinda",
    "i-faianta",
    "i-profil",
    "i-banda",
    "i-t-plan",
    "i-t-spalet",
    "i-c15",
    "e9-ps1",
    "e9-profil",
    "e9-placa"
   ],
   "text": "Banda E1 (24 V, 3000K, CRI90, IP65) stă într-un profil slim cu difuzor, de max. 12 mm, pe latura oglinzii dinspre spalet, de pe blat până la placă (~165 cm). Desenul e detaliul în plan din A.24, văzut de sus.",
   "puncte": [
    "Profilul din specs/04: slim încastrat, 10,7 × 8,8 mm, bare de 2 m.",
    "Sursa e D8, în tavanul fals din hol, comună cu banda D1; butonul e DE (I3 din hol).",
    "Lângă oglindă, până la spalet (35 cm): profil ORAC în A.25 și A.26, faianță în A.24 (întrebarea GS2)."
   ],
   "verifica": [
    "Banda se aprinde înainte să se pună difuzorul.",
    "Lungimea benzii nu e cotată în planșe (L2): aici e pe toată înălțimea oglinzii."
   ],
   "sursa": "A.24 (Profil led slim cu difuzor max12mm; 1,5); A.06 (E); specs/04 (29.10.2026); gs.js E1, CB-E1, OR3"
  },
  {
   "titlu": "Mobilierul M02 sub blat",
   "cine": "tâmplarul / firma de mobilă",
   "stare": "proiect",
   "vedere": {
    "x0": -14,
    "x1": 110,
    "y0": -112,
    "y1": 8
   },
   "apar": [
    "m02-front",
    "m02-fund",
    "zona-sertar",
    "c-38",
    "c-35",
    "c-12",
    "e10-sertar",
    "e10-zona"
   ],
   "text": "Sertarul M02 (front Nuc, 85 × 38 cm) stă sub blat, de la 35 la 73 cm, iar compartimentul deschis M02-D (35 cm) e lângă spalet. Le montează tâmplarul la final, sub blatul gata făcut (analiza/01, 11.3).",
   "puncte": [
    "Fundul lavoarului și sifonul intră în sertar.",
    "Frontul: MDF Egger Nuc în A.24, PAL H1775 ST12 Nuc Parona în legenda A.25. Decorul e același."
   ],
   "verifica": [
    "Sertarul se deschide fără să atingă lavoarul și sifonul.",
    "Prin M02-D se ajunge la robinetele de colț R6 și R7."
   ],
   "atentie": "Planșele nu arată cum ocolește sertarul lavoarul și sifonul: sertar în U, sertar mai scurt sau sifon plat (GS3). Se hotărăște înainte de comanda lui M02.",
   "sursa": "A.24 (Sertar, Front MDF Egger Nuc); A.25 B05 (85, 38, 35); specs/09 M02; gs.js M02-S, M02-D"
  }
 ]
};
