// Circuitul cu buton cu revenire (Push-DIM) pentru benzile LED de 24 V — pașii de montaj, pentru fereastra
// animată din desene/js/pasi.js. Format: JSON strict după „= ”. Schemă electrică, nu la scară: x spre dreapta,
// y în jos, în unități arbitrare. Câmpurile sunt descrise în desene/README.md.
window.DETALII = window.DETALII || {};
window.DETALII["PUSH"] = {
 "id": "PUSH",
 "nume": "Circuitul cu buton cu revenire pentru benzile LED de 24 V",
 "subtitlu": "Schema legăturilor pentru banda G din bucătărie: butonul G din I2 (hol), sursa Push-DIM din corpul de 40 (D2) și banda G1. La fel în baie (banda H, sursa D9) și în GS (benzile D și E, sursa D8)",
 "orientare": "Schemă electrică, nu la scară.",
 "camera": "bucatarie",
 "perete": "N",
 "schema": true,
 "sursa": "specs/04 (29.10.2026); specs/06 A, E, F, G; analiza/11 BC17, L7, HL9, HL12, BA11, GS6; analiza/13 (3); fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf); manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf)",
 "revizie": {
  "nr": 1,
  "data": "2026-11-02"
 },
 "nota": "Schema e propunerea noastră, după fișa sursei. Se confirmă cu electricianul și cu LedHome.",
 "vedere": {
  "x0": -18,
  "x1": 168,
  "y0": -9,
  "y1": 104
 },
 "forme": [
  {
   "id": "corp",
   "tip": "dreptunghi",
   "x": 80,
   "y": 0,
   "w": 87,
   "h": 54,
   "umplere": "faianta"
  },
  {
   "id": "fantoma",
   "tip": "contur",
   "temporar": true,
   "dreptunghiuri": [
    [
     0,
     0,
     46,
     50
    ],
    [
     84,
     4,
     10,
     40
    ],
    [
     104,
     4,
     50,
     46
    ],
    [
     30,
     72,
     90,
     12
    ],
    [
     140,
     72,
     24,
     12
    ]
   ]
  },
  {
   "id": "t-hol",
   "tip": "text",
   "x": -16,
   "y": -3,
   "text": "hol: doza I2"
  },
  {
   "id": "t-buc",
   "tip": "text",
   "x": 166,
   "y": -3,
   "text": "bucătărie: corpul de 40",
   "anc": "end"
  },
  {
   "id": "doza-i2",
   "tip": "dreptunghi",
   "x": 0,
   "y": 0,
   "w": 46,
   "h": 50,
   "umplere": "alb"
  },
  {
   "id": "tub",
   "tip": "dreptunghi",
   "x": 46,
   "y": 6,
   "w": 38,
   "h": 36,
   "umplere": "pvc"
  },
  {
   "id": "d2",
   "tip": "dreptunghi",
   "x": 84,
   "y": 4,
   "w": 10,
   "h": 40,
   "umplere": "alb"
  },
  {
   "id": "t-d2",
   "tip": "text",
   "x": 89,
   "y": 49.5,
   "text": "D2",
   "anc": "middle"
  },
  {
   "id": "w-l",
   "tip": "fir",
   "puncte": [
    [
     -18,
     24
    ],
    [
     90,
     24
    ]
   ],
   "culoare": "faza"
  },
  {
   "id": "w-n",
   "tip": "fir",
   "puncte": [
    [
     -18,
     31
    ],
    [
     90,
     31
    ]
   ],
   "culoare": "nul"
  },
  {
   "id": "w-pe",
   "tip": "fir",
   "puncte": [
    [
     -18,
     38
    ],
    [
     89,
     38
    ]
   ],
   "culoare": "pamant"
  },
  {
   "id": "t-230",
   "tip": "text",
   "x": -17,
   "y": 21,
   "text": "230 V"
  },
  {
   "id": "buton",
   "tip": "simbol",
   "x": 4,
   "y": 4,
   "w": 38,
   "h": 13,
   "text": "Buton G",
   "umplere": "pvc"
  },
  {
   "id": "w-lb",
   "tip": "fir",
   "puncte": [
    [
     12,
     24
    ],
    [
     12,
     17
    ]
   ],
   "culoare": "faza"
  },
  {
   "id": "dot-l",
   "tip": "cerc",
   "x": 12,
   "y": 24,
   "r": 1.1,
   "umplere": "negru"
  },
  {
   "id": "w-cmd",
   "tip": "fir",
   "puncte": [
    [
     42,
     10.5
    ],
    [
     90,
     10.5
    ]
   ],
   "culoare": "comanda"
  },
  {
   "id": "sursa",
   "tip": "simbol",
   "x": 104,
   "y": 4,
   "w": 50,
   "h": 46,
   "text": "Sursa\nPush-DIM",
   "umplere": "alb"
  },
  {
   "id": "t-push",
   "tip": "text",
   "x": 105.6,
   "y": 11.6,
   "text": "PUSH"
  },
  {
   "id": "t-l",
   "tip": "text",
   "x": 105.6,
   "y": 25.1,
   "text": "L"
  },
  {
   "id": "t-n",
   "tip": "text",
   "x": 105.6,
   "y": 32.1,
   "text": "N"
  },
  {
   "id": "t-n1",
   "tip": "text",
   "x": 105.6,
   "y": 45.1,
   "text": "N"
  },
  {
   "id": "t-minus",
   "tip": "text",
   "x": 152.6,
   "y": 23.1,
   "text": "−",
   "anc": "end"
  },
  {
   "id": "t-plus",
   "tip": "text",
   "x": 152.6,
   "y": 33.1,
   "text": "+",
   "anc": "end"
  },
  {
   "id": "c-cmd",
   "tip": "fir",
   "puncte": [
    [
     90,
     10.5
    ],
    [
     104,
     10.5
    ]
   ],
   "culoare": "comanda"
  },
  {
   "id": "c-l",
   "tip": "fir",
   "puncte": [
    [
     90,
     24
    ],
    [
     104,
     24
    ]
   ],
   "culoare": "faza"
  },
  {
   "id": "c-n",
   "tip": "fir",
   "puncte": [
    [
     90,
     31
    ],
    [
     104,
     31
    ]
   ],
   "culoare": "nul"
  },
  {
   "id": "c-n1",
   "tip": "fir",
   "puncte": [
    [
     98,
     31
    ],
    [
     98,
     44
    ],
    [
     104,
     44
    ]
   ],
   "culoare": "nul"
  },
  {
   "id": "dot-n",
   "tip": "cerc",
   "x": 98,
   "y": 31,
   "r": 1.1,
   "umplere": "negru"
  },
  {
   "id": "wago",
   "tip": "cerc",
   "x": 90,
   "y": 38,
   "r": 1.8,
   "umplere": "banda"
  },
  {
   "id": "tz-push",
   "tip": "text",
   "x": 116,
   "y": 11.6,
   "text": "(LTECH: L1 · 1-light: DA)",
   "temporar": true
  },
  {
   "id": "tz-n1",
   "tip": "text",
   "x": 116,
   "y": 45.1,
   "text": "(LTECH: N1 · 1-light: DA)",
   "temporar": true
  },
  {
   "id": "g1",
   "tip": "simbol",
   "x": 30,
   "y": 72,
   "w": 90,
   "h": 12,
   "text": "Banda G1 · 145 cm",
   "umplere": "banda"
  },
  {
   "id": "g3",
   "tip": "simbol",
   "x": 140,
   "y": 72,
   "w": 24,
   "h": 12,
   "text": "G3",
   "umplere": "banda-hartie"
  },
  {
   "id": "o-minus",
   "tip": "fir",
   "puncte": [
    [
     154,
     22
    ],
    [
     162,
     22
    ],
    [
     162,
     62
    ],
    [
     116,
     62
    ],
    [
     116,
     72
    ]
   ],
   "culoare": "v24-minus",
   "gros": 2.4
  },
  {
   "id": "o-plus",
   "tip": "fir",
   "puncte": [
    [
     154,
     32
    ],
    [
     158,
     32
    ],
    [
     158,
     58
    ],
    [
     112,
     58
    ],
    [
     112,
     72
    ]
   ],
   "culoare": "v24-plus",
   "gros": 2.4
  },
  {
   "id": "l3-plus",
   "tip": "fir",
   "puncte": [
    [
     120,
     75.5
    ],
    [
     140,
     75.5
    ]
   ],
   "culoare": "v24-plus",
   "gros": 2.4,
   "intrerupt": true
  },
  {
   "id": "l3-minus",
   "tip": "fir",
   "puncte": [
    [
     120,
     80.5
    ],
    [
     140,
     80.5
    ]
   ],
   "culoare": "v24-minus",
   "gros": 2.4,
   "intrerupt": true
  },
  {
   "id": "t-hota",
   "tip": "text",
   "x": 130,
   "y": 70.5,
   "text": "hota",
   "anc": "middle"
  },
  {
   "id": "t8-baie",
   "tip": "text",
   "x": -14,
   "y": 136,
   "text": "baie: banda H"
  },
  {
   "id": "bh",
   "tip": "simbol",
   "x": -14,
   "y": 144,
   "w": 32,
   "h": 13,
   "text": "Buton H",
   "umplere": "pvc"
  },
  {
   "id": "s9",
   "tip": "simbol",
   "x": 52,
   "y": 141,
   "w": 46,
   "h": 19,
   "text": "Push-DIM\nD9",
   "umplere": "alb"
  },
  {
   "id": "h1",
   "tip": "simbol",
   "x": 126,
   "y": 139,
   "w": 40,
   "h": 10,
   "text": "H1 · nișa",
   "umplere": "banda"
  },
  {
   "id": "h2",
   "tip": "simbol",
   "x": 126,
   "y": 154,
   "w": 40,
   "h": 10,
   "text": "H2 · oglinda",
   "umplere": "banda"
  },
  {
   "id": "f9-cmd",
   "tip": "fir",
   "puncte": [
    [
     18,
     150.5
    ],
    [
     52,
     150.5
    ]
   ],
   "culoare": "comanda",
   "gros": 3
  },
  {
   "id": "f9-230",
   "tip": "fir",
   "puncte": [
    [
     75,
     133
    ],
    [
     75,
     141
    ]
   ],
   "culoare": "faza",
   "gros": 3
  },
  {
   "id": "t9-230",
   "tip": "text",
   "x": 78,
   "y": 136.5,
   "text": "230 V"
  },
  {
   "id": "f9-24",
   "tip": "fir",
   "puncte": [
    [
     98,
     150.5
    ],
    [
     114,
     150.5
    ]
   ],
   "culoare": "v24-plus",
   "gros": 3
  },
  {
   "id": "f9-24b",
   "tip": "fir",
   "puncte": [
    [
     126,
     144
    ],
    [
     114,
     144
    ],
    [
     114,
     159
    ],
    [
     126,
     159
    ]
   ],
   "culoare": "v24-plus",
   "gros": 3
  },
  {
   "id": "dot-9",
   "tip": "cerc",
   "x": 114,
   "y": 150.5,
   "r": 1.1,
   "umplere": "negru"
  },
  {
   "id": "t9-cmd",
   "tip": "text",
   "x": 35,
   "y": 148.3,
   "text": "comandă",
   "anc": "middle"
  },
  {
   "id": "t9-24",
   "tip": "text",
   "x": 106,
   "y": 148.3,
   "text": "24 V",
   "anc": "middle"
  },
  {
   "id": "t8-gs",
   "tip": "text",
   "x": -14,
   "y": 179,
   "text": "GS: benzile D și E"
  },
  {
   "id": "bde",
   "tip": "simbol",
   "x": -14,
   "y": 186,
   "w": 32,
   "h": 13,
   "text": "Buton DE",
   "umplere": "pvc"
  },
  {
   "id": "s8",
   "tip": "simbol",
   "x": 52,
   "y": 183,
   "w": 46,
   "h": 19,
   "text": "Push-DIM\nD8",
   "umplere": "alb"
  },
  {
   "id": "d1",
   "tip": "simbol",
   "x": 126,
   "y": 181,
   "w": 40,
   "h": 10,
   "text": "D1 · tavan",
   "umplere": "banda"
  },
  {
   "id": "e1",
   "tip": "simbol",
   "x": 126,
   "y": 196,
   "w": 40,
   "h": 10,
   "text": "E1 · oglinda",
   "umplere": "banda"
  },
  {
   "id": "f8-cmd",
   "tip": "fir",
   "puncte": [
    [
     18,
     192.5
    ],
    [
     52,
     192.5
    ]
   ],
   "culoare": "comanda",
   "gros": 3
  },
  {
   "id": "f8-230",
   "tip": "fir",
   "puncte": [
    [
     75,
     175
    ],
    [
     75,
     183
    ]
   ],
   "culoare": "faza",
   "gros": 3
  },
  {
   "id": "t8-230",
   "tip": "text",
   "x": 78,
   "y": 178.5,
   "text": "230 V"
  },
  {
   "id": "f8-24",
   "tip": "fir",
   "puncte": [
    [
     98,
     192.5
    ],
    [
     114,
     192.5
    ]
   ],
   "culoare": "v24-plus",
   "gros": 3
  },
  {
   "id": "f8-24b",
   "tip": "fir",
   "puncte": [
    [
     126,
     186
    ],
    [
     114,
     186
    ],
    [
     114,
     201
    ],
    [
     126,
     201
    ]
   ],
   "culoare": "v24-plus",
   "gros": 3
  },
  {
   "id": "dot-8",
   "tip": "cerc",
   "x": 114,
   "y": 192.5,
   "r": 1.1,
   "umplere": "negru"
  },
  {
   "id": "t8-cmd",
   "tip": "text",
   "x": 35,
   "y": 190.3,
   "text": "comandă",
   "anc": "middle"
  },
  {
   "id": "t8-24",
   "tip": "text",
   "x": 106,
   "y": 190.3,
   "text": "24 V",
   "anc": "middle"
  },
  {
   "id": "e0-buton",
   "tip": "eticheta",
   "x": -14,
   "y": 62,
   "text": "butonul G, cu revenire, în întrerupătorul I2 din hol",
   "spre": [
    23,
    44
   ],
   "lat": 44
  },
  {
   "id": "e0-sursa",
   "tip": "eticheta",
   "x": 40,
   "y": 60,
   "text": "sursa Push-DIM, în corpul suspendat de 40, lângă doza D2",
   "spre": [
    129,
    50
   ],
   "lat": 56
  },
  {
   "id": "e0-banda",
   "tip": "eticheta",
   "x": 40,
   "y": 96,
   "text": "banda G1 sub trei corpuri; G3, opțională, sub corpul din colț",
   "spre": [
    75,
    84
   ],
   "lat": 110
  },
  {
   "id": "e1-i2",
   "tip": "eticheta",
   "x": -14,
   "y": 62,
   "text": "doza I2: peretele cu oglinda din hol, x 289,8, h 110 (presupusă)",
   "spre": [
    23,
    50
   ],
   "lat": 44
  },
  {
   "id": "e1-tub",
   "tip": "eticheta",
   "x": 48,
   "y": 58,
   "text": "tubul de la I2 la D2, înainte de tencuială",
   "spre": [
    62,
    42
   ],
   "lat": 44
  },
  {
   "id": "e1-d2",
   "tip": "eticheta",
   "x": 100,
   "y": 64,
   "text": "doza D2: peretele cu chiuveta, x 187, h 196, în spatele corpului de 40",
   "spre": [
    89,
    44
   ],
   "lat": 66
  },
  {
   "id": "e2-230",
   "tip": "eticheta",
   "x": -14,
   "y": 62,
   "text": "230 V tot timpul: faza, nulul și pământul",
   "spre": [
    -8,
    38
   ],
   "lat": 42
  },
  {
   "id": "e2-capete",
   "tip": "eticheta",
   "x": 100,
   "y": 64,
   "text": "capetele rămân în D2 până se montează mobila",
   "spre": [
    90,
    31
   ],
   "lat": 66
  },
  {
   "id": "e3-buton",
   "tip": "eticheta",
   "x": -14,
   "y": 62,
   "text": "butonul G: la apăsare, faza trece pe firul de comandă",
   "spre": [
    20,
    17
   ],
   "lat": 42
  },
  {
   "id": "e3-cmd",
   "tip": "eticheta",
   "x": 42,
   "y": 18.5,
   "text": "firul de comandă (L′), la 230 V",
   "spre": [
    52,
    10.5
   ],
   "lat": 40
  },
  {
   "id": "e4-sursa",
   "tip": "eticheta",
   "x": 40,
   "y": 60,
   "text": "se vede și se scoate când se deschide frontul corpului",
   "spre": [
    120,
    50
   ],
   "lat": 56
  },
  {
   "id": "e4-aer",
   "tip": "eticheta",
   "x": 100,
   "y": 64,
   "text": "aer în jur; la min. 15 cm de altă sursă (LTECH)",
   "spre": [
    154,
    46
   ],
   "lat": 66
  },
  {
   "id": "e5-pe",
   "tip": "eticheta",
   "x": 80,
   "y": 56,
   "text": "pământul: izolat în D2, într-o clemă",
   "spre": [
    90,
    39.8
   ],
   "lat": 30
  },
  {
   "id": "e5-dim",
   "tip": "eticheta",
   "x": 118,
   "y": 56,
   "text": "LTECH: DIM+ și DIM− rămân libere",
   "spre": [
    146,
    50
   ],
   "lat": 46
  },
  {
   "id": "e6-g1",
   "tip": "eticheta",
   "x": -14,
   "y": 96,
   "text": "banda G1 în profil, sub corpuri (h 142)",
   "spre": [
    40,
    84
   ],
   "lat": 44
  },
  {
   "id": "e6-pol",
   "tip": "eticheta",
   "x": 108,
   "y": 69,
   "text": "plus la plus, minus la minus",
   "spre": [
    112,
    66
   ],
   "lat": 56,
   "anc": "end"
  },
  {
   "id": "e6-g3",
   "tip": "eticheta",
   "x": 100,
   "y": 97,
   "text": "G3, opțională: cablul trece pe lângă corpul hotei",
   "spre": [
    152,
    84
   ],
   "lat": 66
  },
  {
   "id": "e7-buton",
   "tip": "eticheta",
   "x": -14,
   "y": 62,
   "text": "apăsare scurtă: aprins sau stins; apăsare lungă: reglajul intensității",
   "spre": [
    23,
    17
   ],
   "lat": 44
  },
  {
   "id": "e7-mem",
   "tip": "eticheta",
   "x": 40,
   "y": 60,
   "text": "sursa ține minte ultimul nivel (LTECH, specs/04)",
   "spre": [
    129,
    50
   ],
   "lat": 56
  },
  {
   "id": "e8-ih",
   "tip": "eticheta",
   "x": -14,
   "y": 169,
   "text": "butonul H: în IH (codul I1, peretele holului spre baie)",
   "spre": [
    2,
    157
   ],
   "lat": 62
  },
  {
   "id": "e8-h",
   "tip": "eticheta",
   "x": 104,
   "y": 174,
   "text": "H1 IP67 în duș, H2 IP65 la oglindă",
   "spre": [
    128,
    164
   ],
   "lat": 62
  },
  {
   "id": "e8-de",
   "tip": "eticheta",
   "x": -14,
   "y": 215,
   "text": "butonul DE: în I3 (peretele cu oglinda din hol)",
   "spre": [
    2,
    199
   ],
   "lat": 50
  },
  {
   "id": "e8-tav",
   "tip": "eticheta",
   "x": 40,
   "y": 215,
   "text": "D8 și D9: în tavanul fals din hol, cu trapă de vizitare",
   "spre": [
    75,
    202
   ],
   "lat": 60
  },
  {
   "id": "e8-un",
   "tip": "eticheta",
   "x": 104,
   "y": 215,
   "text": "o sursă și un buton pentru D1 și E1 (HL12)",
   "spre": [
    114,
    192.5
   ],
   "lat": 62
  }
 ],
 "scena3d": {
  "orientare": "Bucătăria, peretele cu chiuveta; în stânga, holul cu doza I2.",
  "nota": "Distanțele sunt comprimate, ca toate să încapă în cadru: între I2 și D2 sunt ~5–8 m de fir.",
  "taietura": {"o": [-10, 205, 2.2], "x": [1.25, 0, 0], "y": [0, -1, 0], "normala": [0, 0, 1]},
  "vedere": {"tinta": [150, 150, 12], "dir": [-0.3, 0.22, 1], "cadru": {"min": [-10, 86, 0], "max": [325, 212, 40]}, "fov": 38},
  "soare": [0.7, 0.8, 1],
  "piese": [
   {"id": "perete-hol", "tip": "cutie", "mat": "ciment", "min": [-10, 80, -12], "max": [42, 215, 0], "anim": "din-perete"},
   {"id": "corp", "tip": "cutie", "mat": "ciment", "min": [52, 80, -12], "max": [325, 215, 0], "anim": "din-perete"},
   {"id": "fantoma", "tip": "grup", "temporar": true, "contur": false, "anim": "apare"},
   {"id": "f-buton", "tip": "cutie", "mat": "schita", "min": [11.7, 105.7, 0], "max": [20.3, 114.3, 3], "in": "fantoma"},
   {"id": "f-tub", "tip": "teava", "mat": "schita", "traseu": [[16, 113.4, 1.1], [16, 196, 1.1], [183.6, 196, 1.1]], "r": 1, "in": "fantoma"},
   {"id": "f-corpuri", "tip": "cutie", "mat": "schita", "min": [62, 143, 2.2], "max": [321, 203.2, 37.2], "in": "fantoma"},
   {"id": "f-sursa", "tip": "cutie", "mat": "schita", "min": [169.4, 183.85, 3], "max": [204.6, 188.15, 6], "in": "fantoma"},
   {"id": "f-g1", "tip": "cutie", "mat": "schita", "min": [62, 142, 31], "max": [207, 143, 32.7], "in": "fantoma"},
   {"id": "f-g3", "tip": "cutie", "mat": "schita", "min": [266, 142, 31], "max": [321, 143, 32.7], "in": "fantoma"},
   {"id": "doza-i2", "tip": "grup", "anim": "pop"},
   {"id": "doza-i2-corp", "tip": "cilindru", "mat": "#c9c6bf", "a": [16, 110, -3], "b": [16, 110, 2.2], "r": 3.4, "in": "doza-i2"},
   {"id": "doza-i2-gol", "tip": "cilindru", "mat": "#57534e", "a": [16, 110, 1.7], "b": [16, 110, 2.22], "r": 2.9, "in": "doza-i2"},
   {"id": "d2", "tip": "grup", "anim": "pop"},
   {"id": "d2-corp", "tip": "cilindru", "mat": "#c9c6bf", "a": [187, 196, -3], "b": [187, 196, 2.2], "r": 3.4, "in": "d2"},
   {"id": "d2-gol", "tip": "cilindru", "mat": "#57534e", "a": [187, 196, 1.7], "b": [187, 196, 2.22], "r": 2.9, "in": "d2"},
   {"id": "tub", "tip": "teava", "mat": "tub-transparent", "traseu": [[16, 113, 1.1], [16, 196, 1.1], [183.9, 196, 1.1]], "r": 1, "cot": 6},
   {"id": "tub-circuit", "tip": "teava", "mat": "tub-transparent", "traseu": [[-10, 110, 1.1], [12.9, 110, 1.1]], "r": 1},
   {"id": "w-l", "tip": "teava", "mat": "fir:faza", "traseu": [[-10, 110.45, 1.1], [15.55, 110.45, 1.1], [15.55, 196.45, 1.1], [185.8, 196.45, 1.1], [185.8, 196.45, 3.6]], "r": 0.17, "cot": 0.6},
   {"id": "w-n", "tip": "teava", "mat": "fir:nul", "traseu": [[-10, 110.15, 1.1], [15.85, 110.15, 1.1], [15.85, 196.15, 1.1], [186.6, 196.15, 1.1], [186.6, 196.15, 3.6]], "r": 0.17, "cot": 0.6},
   {"id": "w-pe", "tip": "teava", "mat": "fir:pamant", "traseu": [[-10, 109.85, 1.1], [16.15, 109.85, 1.1], [16.15, 195.85, 1.1], [189.2, 195.85, 1.1], [189.2, 195.85, 3.6]], "r": 0.17, "cot": 0.6},
   {"id": "buton", "tip": "grup", "anim": {"tip": "din-camera", "d": 8}},
   {"id": "rama", "tip": "cutie", "mat": "alb", "min": [11.7, 105.7, 2.2], "max": [20.3, 114.3, 3], "raza": 0.6, "in": "buton"},
   {"id": "clapa-f", "tip": "cutie", "mat": "alb", "min": [12.4, 106.4, 3], "max": [15.85, 113.6, 3.6], "raza": 0.3, "in": "buton"},
   {"id": "clapa-g", "tip": "grup", "pivot": [17.875, 110, 3], "in": "buton", "miscari": {"asteapta": [{"ms": 1000}], "scurt": [{"roteste": [7, 0, 0], "ms": 140}, {"roteste": [0, 0, 0], "ms": 220}], "lung": [{"roteste": [7, 0, 0], "ms": 140}, {"roteste": [7, 0, 0], "ms": 2300}, {"roteste": [0, 0, 0], "ms": 220}]}},
   {"id": "clapa-g-fata", "tip": "cutie", "mat": "alb", "min": [16.15, 106.4, 3], "max": [19.6, 113.6, 3.6], "raza": 0.3, "in": "clapa-g"},
   {"id": "w-cmd", "tip": "teava", "mat": "fir:comanda", "traseu": [[18.2, 110, 2], [16.45, 111.6, 1.1], [16.45, 195.55, 1.1], [185, 195.55, 1.1], [185, 195.55, 3.6]], "r": 0.17, "cot": 0.6, "miscari": {"impuls": [{"impuls": {"culoare": "#a78bfa", "raza": 1.1}, "ms": 1000}]}},
   {"id": "tencuiala", "tip": "grup", "anim": "apare", "contur": false},
   {"id": "tencuiala-hol", "tip": "cutie", "mat": "tencuiala", "min": [-10, 80, 0], "max": [42, 215, 2], "in": "tencuiala"},
   {"id": "tencuiala-buc", "tip": "cutie", "mat": "tencuiala", "min": [52, 80, 0], "max": [325, 215, 2], "in": "tencuiala"},
   {"id": "mobila", "tip": "grup", "anim": {"tip": "din-camera", "d": 25}, "contur": false},
   {"id": "blat", "tip": "cutie", "mat": "blat", "min": [62, 88, 2.2], "max": [321, 91.5, 64.2], "in": "mobila"},
   {"id": "corp-45", "tip": "cutie", "mat": "nuc", "min": [62.1, 143, 2.2], "max": [106.9, 203.2, 39], "in": "mobila"},
   {"id": "corp-60", "tip": "cutie", "mat": "nuc", "min": [107.1, 143, 2.2], "max": [166.9, 203.2, 39], "in": "mobila"},
   {"id": "corp-hota", "tip": "cutie", "mat": "nuc", "min": [207.1, 143, 2.2], "max": [265.9, 203.2, 39], "in": "mobila"},
   {"id": "corp-colt", "tip": "cutie", "mat": "nuc", "min": [266.1, 143, 2.2], "max": [320.9, 203.2, 39], "in": "mobila"},
   {"id": "hota-viziera", "tip": "cutie", "mat": "#5b4636", "min": [208.5, 142.6, 34.2], "max": [263.5, 145.5, 39.1], "in": "mobila"},
   {"id": "corp-40", "tip": "grup", "in": "mobila"},
   {"id": "c40-st", "tip": "cutie", "mat": "nuc", "min": [167, 143, 2.2], "max": [168.8, 203.2, 37.2], "in": "corp-40"},
   {"id": "c40-dr", "tip": "cutie", "mat": "nuc", "min": [205.2, 143, 2.2], "max": [207, 203.2, 37.2], "in": "corp-40"},
   {"id": "c40-sus", "tip": "cutie", "mat": "nuc", "min": [168.8, 201.4, 2.2], "max": [205.2, 203.2, 37.2], "in": "corp-40"},
   {"id": "c40-jos", "tip": "cutie", "mat": "nuc", "min": [168.8, 143, 2.2], "max": [205.2, 144.8, 37.2], "in": "corp-40"},
   {"id": "c40-spate-st", "tip": "cutie", "mat": "nuc", "min": [168.8, 144.8, 2.2], "max": [181, 201.4, 3], "in": "corp-40"},
   {"id": "c40-spate-dr", "tip": "cutie", "mat": "nuc", "min": [193, 144.8, 2.2], "max": [205.2, 201.4, 3], "in": "corp-40"},
   {"id": "c40-spate-jos", "tip": "cutie", "mat": "nuc", "min": [181, 144.8, 2.2], "max": [193, 190.5, 3], "in": "corp-40"},
   {"id": "front-40", "tip": "cutie", "mat": "nuc", "poz": [163.76, 173.1, 57.6], "dim": [39.6, 59.8, 1.8], "rot": [0, -100, 0], "in": "mobila"},
   {"id": "sursa", "tip": "grup", "anim": {"tip": "din-camera", "d": 14}},
   {"id": "sursa-corp", "tip": "cutie", "mat": "#d4d4d8", "min": [169.4, 183.85, 3], "max": [204.6, 188.15, 6], "raza": 0.4, "in": "sursa"},
   {"id": "sursa-borne-in", "tip": "cutie", "mat": "#f5f5f4", "min": [169.9, 185.6, 6], "max": [178.8, 187.8, 6.6], "in": "sursa"},
   {"id": "sursa-suruburi-in", "tip": "cutie", "mat": "otel", "min": [170.25, 186.7, 6.6], "max": [170.95, 187.4, 6.8], "repeta": {"n": 6, "pas": [1.5, 0, 0]}, "in": "sursa"},
   {"id": "sursa-borne-out", "tip": "cutie", "mat": "#f5f5f4", "min": [200.9, 185.6, 6], "max": [203.8, 187.8, 6.6], "in": "sursa"},
   {"id": "sursa-suruburi-out", "tip": "cutie", "mat": "otel", "min": [201.25, 186.7, 6.6], "max": [201.95, 187.4, 6.8], "repeta": {"n": 2, "pas": [1.5, 0, 0]}, "in": "sursa"},
   {"id": "c-cmd", "tip": "teava", "mat": "fir:comanda", "traseu": [[185, 195.55, 3.6], [185, 190.9, 7], [170.6, 190.9, 7], [170.6, 187.9, 6.7]], "r": 0.17, "cot": 0.6, "miscari": {"impuls": [{"pauza": 1000, "impuls": {"culoare": "#a78bfa", "raza": 1.1}, "ms": 300}]}},
   {"id": "c-l", "tip": "teava", "mat": "fir:faza", "traseu": [[185.8, 196.45, 3.6], [185.8, 190.3, 7.4], [172.1, 190.3, 7.4], [172.1, 187.9, 6.7]], "r": 0.17, "cot": 0.6},
   {"id": "c-n", "tip": "teava", "mat": "fir:nul", "traseu": [[186.6, 196.15, 3.6], [186.6, 189.7, 7.8], [173.6, 189.7, 7.8], [173.6, 187.9, 6.7]], "r": 0.17, "cot": 0.6},
   {"id": "c-n1", "tip": "teava", "mat": "fir:nul", "traseu": [[173.6, 187.9, 6.7], [173.6, 189, 7.1], [175.1, 189, 7.1], [175.1, 187.9, 6.7]], "r": 0.17, "cot": 0.4},
   {"id": "wago", "tip": "cutie", "mat": "wago", "min": [188.7, 194.95, 3.6], "max": [189.7, 196.75, 4.4], "raza": 0.15, "anim": "pop"},
   {"id": "o-plus", "tip": "teava", "mat": "fir:v24-plus", "traseu": [[203.1, 187.9, 6.7], [203.1, 188.6, 7.6], [204, 188.6, 7.6], [204, 141.6, 7.6], [204, 141.6, 31.45], [206.4, 142.3, 31.45]], "r": 0.17, "cot": 0.8},
   {"id": "o-minus", "tip": "teava", "mat": "fir:v24-minus", "traseu": [[201.6, 187.9, 6.7], [201.6, 189, 7], [204.6, 189, 7], [204.6, 141.2, 7], [204.6, 141.2, 32.25], [206.4, 142.3, 32.25]], "r": 0.17, "cot": 0.8},
   {"id": "g1", "tip": "grup", "anim": {"tip": "de-jos", "d": 10}},
   {"id": "g1-profil", "tip": "cutie", "mat": "aluminiu", "min": [62, 142.15, 31], "max": [207, 143, 32.7], "in": "g1"},
   {"id": "g1-led", "tip": "led", "culoare": "#ffd9a0", "min": [62.2, 142, 31.2], "max": [206.8, 142.15, 32.5], "aprins": 0, "in": "g1", "lumina": {"tip": "spot", "n": 6, "spre": [0, -1, -0.25], "dist": 1, "raza": 160, "unghi": 65, "decay": 1, "penumbra": 0.4, "intensitate": 300, "culoare": "#ff9a3c"}, "miscari": {"aprinde": [{"pauza": 1300, "lumina": 1, "ms": 400}], "scade": [{"pauza": 1300, "lumina": 0.25, "ms": 1300}], "creste": [{"pauza": 1300, "lumina": 1, "ms": 1300}], "stinge": [{"pauza": 1300, "lumina": 0, "ms": 400}]}},
   {"id": "g3", "tip": "grup", "anim": {"tip": "de-jos", "d": 10}},
   {"id": "g3-profil", "tip": "cutie", "mat": "aluminiu", "min": [266, 142.15, 31], "max": [321, 143, 32.7], "in": "g3"},
   {"id": "g3-led", "tip": "led", "culoare": "#ffd9a0", "min": [266.2, 142, 31.2], "max": [320.8, 142.15, 32.5], "aprins": 0, "in": "g3", "lumina": {"tip": "spot", "n": 2, "spre": [0, -1, -0.25], "dist": 1, "raza": 160, "unghi": 65, "decay": 1, "penumbra": 0.4, "intensitate": 300, "culoare": "#ff9a3c"}, "miscari": {"aprinde": [{"pauza": 1300, "lumina": 1, "ms": 400}], "scade": [{"pauza": 1300, "lumina": 0.25, "ms": 1300}], "creste": [{"pauza": 1300, "lumina": 1, "ms": 1300}], "stinge": [{"pauza": 1300, "lumina": 0, "ms": 400}]}},
   {"id": "l3-plus", "tip": "teava", "mat": "fir:v24-plus", "traseu": [[206.6, 142.3, 31.45], [207.6, 141.6, 5.8], [265, 141.6, 5.8], [266.4, 142.3, 31.45]], "r": 0.17, "cot": 1, "intrerupt": true},
   {"id": "l3-minus", "tip": "teava", "mat": "fir:v24-minus", "traseu": [[206.6, 142.3, 32.25], [207.6, 141.6, 6.6], [265, 141.6, 6.6], [266.4, 142.3, 32.25]], "r": 0.17, "cot": 1, "intrerupt": true}
  ],
  "pasi": [
   {"apar": ["perete-hol"], "vedere3d": {"tinta": [150, 152, 12], "dir": [-0.3, 0.2, 1], "cadru": {"min": [-10, 102, 0], "max": [325, 208, 38]}, "fov": 38}},
   {"vedere3d": {"tinta": [100, 152, 2], "dir": [-0.2, 0.12, 1], "cadru": {"min": [8, 104, 0], "max": [195, 202, 3]}, "fov": 38}},
   {"apar": ["tub-circuit"], "vedere3d": {"tinta": [92, 152, 2], "dir": [-0.25, 0.12, 1], "cadru": {"min": [-10, 104, 0], "max": [195, 202, 3]}, "fov": 38}},
   {"vedere3d": {"tinta": [18, 126, 2], "dir": [-0.35, 0.12, 1], "cadru": {"min": [-4, 100, 0], "max": [40, 156, 4]}, "fov": 38}},
   {"apar": ["tencuiala", "mobila"], "vedere3d": {"tinta": [188, 174, 18], "dir": [0.5, -0.06, 1], "cadru": {"min": [158, 140, 0], "max": [214, 206, 50]}, "fov": 38}},
   {"vedere3d": {"tinta": [181, 191, 5], "dir": [0.35, 0.12, 1], "cadru": {"min": [168, 183, 2], "max": [192, 199, 8]}, "fov": 38}},
   {"vedere3d": {"tinta": [212, 156, 20], "dir": [0.42, -0.3, 1], "cadru": {"min": [150, 138, 0], "max": [300, 192, 38]}, "fov": 38}},
   {"vedere3d": {"tinta": [105, 146, 15], "dir": [-0.22, -0.14, 1], "cadru": {"min": [-10, 88, 0], "max": [215, 206, 40]}, "fov": 38}, "vederi": [{"la": 0, "tinta": [17, 116, 3], "dir": [-0.3, 0.1, 1], "cadru": {"min": [0, 99, 0], "max": [36, 134, 4]}, "fov": 38}, {"tinta": [105, 146, 15], "dir": [-0.22, -0.14, 1], "cadru": {"min": [-10, 88, 0], "max": [215, 206, 40]}, "fov": 38, "la": 1700}], "expunere": 0.5, "misca": ["clapa-g:asteapta", ["clapa-g:scurt", "w-cmd:impuls", "c-cmd:impuls", "g1-led:aprinde", "g3-led:aprinde"], ["clapa-g:lung", "w-cmd:impuls", "c-cmd:impuls", "g1-led:scade", "g3-led:scade"], ["clapa-g:lung", "w-cmd:impuls", "c-cmd:impuls", "g1-led:creste", "g3-led:creste"]]},
   {"doar2d": true, "nota": "Baia și GS-ul nu au desen 3D: la acest pas se vede schema."}
  ],
  "etichete3d": {
   "t-hol": {"la3d": [-8, 208, 2.2]},
   "t-buc": {"la3d": [324, 208, 2.2]},
   "t-d2": {"la3d": [187, 201, 2.2], "pxcm": 3},
   "t-230": {"la3d": [-8, 112.6, 1.1]},
   "t-push": {"la3d": [170.6, 184.6, 6.7], "pxcm": 9},
   "t-l": {"la3d": [172.1, 184.6, 6.7], "pxcm": 9},
   "t-n": {"la3d": [173.6, 184.6, 6.7], "pxcm": 9},
   "t-n1": {"la3d": [175.1, 184.6, 6.7], "pxcm": 9},
   "t-minus": {"la3d": [201.6, 184.6, 6.7], "pxcm": 9},
   "t-plus": {"la3d": [203.1, 184.6, 6.7], "pxcm": 9},
   "tz-push": {"la3d": [167.8, 192.4, 6.7], "pxcm": 9},
   "tz-n1": {"la3d": [167.8, 182.6, 6.7], "pxcm": 9},
   "t-hota": {"la3d": [236.5, 147, 39.2]},
   "e0-buton": {"spre3d": [17.9, 110, 3.2]},
   "e0-sursa": {"spre3d": [187, 186, 6]},
   "e0-banda": {"spre3d": [130, 142, 31.85]},
   "e1-i2": {"spre3d": [16, 106.6, 2.2]},
   "e1-tub": {"spre3d": [16, 160, 2.1]},
   "e1-d2": {"spre3d": [187, 192.6, 2.2]},
   "e2-230": {"spre3d": [2, 110, 2.1]},
   "e2-capete": {"spre3d": [186.2, 196, 3.6]},
   "e3-buton": {"spre3d": [17.9, 108, 3.6]},
   "e3-cmd": {"spre3d": [16.45, 150, 1.1]},
   "e4-sursa": {"spre3d": [187, 186, 6]},
   "e4-aer": {"spre3d": [190, 176, 16]},
   "e5-pe": {"spre3d": [189.2, 195.85, 4.4]},
   "e5-dim": {"spre3d": [177.35, 187, 6.8]},
   "e6-g1": {"spre3d": [180, 142, 31.85]},
   "e6-pol": {"spre3d": [204.3, 141.6, 20]},
   "e6-g3": {"spre3d": [293, 142, 31.85]},
   "e7-buton": {"spre3d": [17.9, 110, 3.6]},
   "e7-mem": {"spre3d": [187, 186, 6]}
  }
 },
 "pasi": [
  {
   "titlu": "Ce se construiește",
   "cine": "electricianul, cu firma de mobilă",
   "stare": "propunere",
   "apar": [
    "corp",
    "fantoma",
    "t-hol",
    "t-buc",
    "e0-buton",
    "e0-sursa",
    "e0-banda"
   ],
   "text": "Banda G din bucătărie se comandă de pe perete, de la butonul G din întrerupătorul I2 din hol. Butonul e cu revenire: apăsarea scurtă aprinde sau stinge banda, apăsarea lungă reglează intensitatea, iar sursa ține minte ultimul nivel. Sursa Push-DIM de 24 V stă în corpul suspendat de 40, lângă doza D2, și alimentează banda de sub corpuri.",
   "puncte": [
    "Banda G1: 145 cm, sub corpurile de 45, 60 și 40 din stânga hotei. G3: 55 cm, opțională, sub corpul din colț (BC17).",
    "Sursa nu e aleasă încă: 1-light de la LedHome (cod VEL89150VLL, 361 lei) sau LTECH LM-150-24-G1A2 de pe eMAG (320 lei). Bornele au alte nume, dar schema e aceeași.",
    "Clapa F din I2 rămâne întrerupător obișnuit, pentru spoturile F1–F3."
   ],
   "verifica": [
    "Ce sursă se cumpără: de ea depind numele bornelor (pașii 5 și 6).",
    "Sub ce corpuri e banda G și dacă se face G3 (BC17, L3).",
    "1-light scrie 45–150 W, iar o zonă consumă ~25–35 W: de întrebat la LedHome dacă sursa merge sub 45 W. LTECH: 0–150 W.",
    "Aparatajul din I2: o clapă obișnuită (F) și un buton cu revenire (G). Lista din proiect are aici un întrerupător dublu (specs/06 A, poziția 6)."
   ],
   "sursa": "specs/04 (29.10.2026: sursă Push-DIM, buton cu revenire, prețuri); bucătărie: D2, G1, G3; hol: I2; analiza/11 BC17, L3; manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf); fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf)"
  },
  {
   "titlu": "Tubul și dozele",
   "cine": "electricianul",
   "stare": "propunere",
   "apar": [
    "doza-i2",
    "tub",
    "d2",
    "t-d2",
    "e1-i2",
    "e1-tub",
    "e1-d2"
   ],
   "text": "Doza I2 e pe peretele cu oglinda din hol, la 15 cm de golul ușii spre bucătărie. Doza D2 e pe peretele cu chiuveta, în spatele corpului suspendat de 40. Între ele se pune un tub, înainte de tencuială și înainte de mobilă.",
   "puncte": [
    "I2: x 289,8 de la colțul N-E al holului, h 110. Înălțimea e presupusă: A.06 nu o dă.",
    "D2: x 187, h 196, în corpul de 40 (x 167–207, h 143–203,2).",
    "Bucătăria nu are tavan fals, deci tubul trece prin pereți. Traseul îl stabilește electricianul.",
    "De la buton la sursă sunt ~5–8 m de fir (estimarea din analiza/13)."
   ],
   "verifica": [
    "Tubul e continuu de la I2 la D2, fără coturi strânse, și firele trec prin el.",
    "D2 rămâne în interiorul corpului de 40 după montajul mobilei."
   ],
   "atentie": "Dacă pereții sunt din panouri prefabricate, în ei nu se pot face șanțuri (specs/06 F). Dacă golul ușii U4 se mută cu 7 cm (BC2), se mută și I2.",
   "sursa": "hol: I2 (A.06: 15 cm de la golul ușii); bucătărie: D2, M01-S1, înălțimea fără tavan fals; specs/06 F; analiza/11 BC2, BC17; analiza/13, întrebarea 15"
  },
  {
   "titlu": "Cablul de 230 V până în D2",
   "cine": "electricianul",
   "stare": "propunere",
   "apar": [
    "w-l",
    "w-n",
    "w-pe",
    "t-230",
    "e2-230",
    "e2-capete"
   ],
   "text": "Sursa are nevoie de 230 V tot timpul: butonul nu taie alimentarea, doar trimite comanda. Cablul cu faza (L), nulul (N) și pământul (PE) vine din circuitul de iluminat, trece prin doza I2 și ajunge în D2.",
   "puncte": [
    "Propunerea noastră: cablul trece prin I2, ca faza butonului și alimentarea sursei să vină din același circuit. În schemele din fișe, butonul ia faza de pe aceeași linie L–N ca sursa.",
    "Circuitul și siguranța le alege electricianul (specs/06 E): de confirmat.",
    "Capetele rămân în D2 până după montajul mobilei."
   ],
   "verifica": [
    "Cu siguranța pornită, în D2 sunt 230 V între L și N, fără să se apese butonul.",
    "Pământul ajunge până în D2."
   ],
   "sursa": "specs/04 (pe perete e un buton cu revenire, nu un întrerupător); fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf), „Push DIM Connection”; manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf), „Push to Dim wiring diagram”; specs/06 E"
  },
  {
   "titlu": "Firul de comandă de la butonul G",
   "cine": "electricianul",
   "stare": "propunere",
   "apar": [
    "buton",
    "w-lb",
    "dot-l",
    "w-cmd",
    "e3-buton",
    "e3-cmd"
   ],
   "text": "Butonul G e cu revenire: contactul se închide doar cât e apăsat. Faza intră în buton, iar din buton pleacă firul de comandă (L′) până în D2, unde se leagă la borna Push a sursei.",
   "puncte": [
    "Firul de comandă e la 230 V: e faza trecută prin buton. Se trage și se izolează ca un fir de fază, nu ca un fir de semnal.",
    "Clapa F din aceeași doză rămâne întrerupător obișnuit, cu firul ei spre spoturile F1–F3.",
    "Propunerea noastră: buton simplu, fără lămpiță, până răspunde LedHome (întrebarea 14).",
    "Mecanismul se montează la finisaje. Până atunci, capetele stau în doza I2."
   ],
   "verifica": [
    "Firul de comandă e marcat la ambele capete, ca să nu se confunde cu faza.",
    "Lungimea maximă a firului de comandă nu e în fișe: de întrebat la LedHome (întrebarea 15)."
   ],
   "sursa": "fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf), „Push DIM Connection”; manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf), „Push to Dim wiring diagram”; hol: I2; analiza/13, întrebările 13–15"
  },
  {
   "titlu": "Sursa în corpul de 40",
   "cine": "firma de mobilă, cu electricianul",
   "stare": "propunere",
   "apar": [
    "sursa",
    "t-push",
    "t-l",
    "t-n",
    "t-n1",
    "t-minus",
    "t-plus",
    "e4-sursa",
    "e4-aer"
   ],
   "text": "După montajul mobilei, sursa se prinde în corpul suspendat de 40, lângă doza D2. Rămâne accesibilă: se vede și se scoate când se deschide frontul corpului. Nu se închide în spatele gips-cartonului sau al unui panou fix.",
   "puncte": [
    "Dimensiuni: LTECH 352 × 43 × 30 mm; 1-light 350 × 30 × 18 mm (LedHome scrie 362 × 30 × 21 mm).",
    "LTECH cere aer în jurul sursei, fără alte surse deasupra sau dedesubt, la cel puțin 15 cm una de alta. Temperatura aerului: −20…50 °C. 1-light: max. 45 °C.",
    "Ambele surse sunt pentru interior, fără protecție la apă (LTECH; 1-light: IP20)."
   ],
   "verifica": [
    "Sursa încape pe lățimea interioară a corpului de 40. Grosimea pereților corpului nu e în date: o dă firma de mobilă.",
    "Pe unde intră cablurile din D2 în corp: de stabilit cu firma de mobilă."
   ],
   "atentie": "Corpul de 40 e lângă corpul hotei. Aerul din corp trebuie să rămână sub temperatura maximă din fișa sursei.",
   "sursa": "fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf) (Dimensions, Installation Precautions, Attentions); manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf) și fișa produsului; pagina LedHome a sursei; specs/06 E și G4 (sursele rămân accesibile); bucătărie: M01-S1, E5"
  },
  {
   "titlu": "Legăturile la bornele sursei",
   "cine": "electricianul",
   "stare": "propunere",
   "vedere": {
    "x0": 78,
    "x1": 168,
    "y0": -5,
    "y1": 63
   },
   "apar": [
    "c-cmd",
    "c-l",
    "c-n",
    "c-n1",
    "dot-n",
    "wago",
    "tz-push",
    "tz-n1",
    "e5-pe",
    "e5-dim"
   ],
   "text": "Din D2, faza se leagă la L și nulul la N. Firul de comandă merge la borna Push, iar a doua bornă Push primește nulul. Pământul se oprește în D2, izolat: la intrare, ambele surse au doar L și N.",
   "puncte": [
    "LTECH LM-150-24-G1A2: butonul la L1, nulul la N1. Bornele DIM+ și DIM− rămân libere: după fișă, intrarea 0–10 V are prioritate față de Push.",
    "1-light 89150VLL: butonul la o bornă DA, nulul la cealaltă DA. Aceleași borne DA sunt pentru DALI; manualul le arată în două scheme separate.",
    "LTECH: bornele de intrare primesc fir de 0,75–1,5 mm², dezizolat 8–9 mm. 1-light nu dă secțiunea."
   ],
   "verifica": [
    "Firul de comandă e la borna Push (L1 sau DA), nu la L.",
    "Nicio porțiune dezizolată nu iese din borne."
   ],
   "sursa": "fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf), „Wiring Diagram: Push DIM Connection”; manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf), „Push to Dim wiring diagram”"
  },
  {
   "titlu": "Cablul de 24 V spre banda G1",
   "cine": "electricianul, cu firma de mobilă",
   "stare": "propunere",
   "apar": [
    "g1",
    "g3",
    "o-minus",
    "o-plus",
    "l3-plus",
    "l3-minus",
    "t-hota",
    "e6-g1",
    "e6-pol",
    "e6-g3"
   ],
   "text": "De la ieșirea sursei (− și +), un cablu de 24 V coboară prin corpul de 40 până la capătul benzii G1, în profilul de sub corpuri. Plusul se leagă la plusul benzii, minusul la minus.",
   "puncte": [
    "LTECH: o pereche de borne, LED− și LED+, pentru fir de 1,5–2,5 mm², dezizolat 6–7 mm. 1-light: două perechi, − și +.",
    "Consumul e de ~25–35 W pe zonă (specs/04), adică ~1–1,5 A la 24 V. Sursa de 150 W ajunge cu rezervă.",
    "Secțiunea cablului de 24 V: de calculat de electrician, după lungimea măsurată pe mobilă.",
    "G3, opțională: cablul ei de 24 V trece pe lângă corpul hotei, de la capătul lui G1 sau de la sursă. Traseul se stabilește cu firma de mobilă."
   ],
   "verifica": [
    "Polaritatea, înainte să se pună difuzorul profilului.",
    "Cablul nu e strivit de fronturi sau de rafturi."
   ],
   "sursa": "fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf) (LED−, LED+); manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf) (OUTPUT); specs/04 (consumul pe zonă); bucătărie: G1 și G3 (h 142, în profil în fundul corpurilor)"
  },
  {
   "titlu": "Proba",
   "cine": "electricianul, cu noi",
   "stare": "propunere",
   "apar": [
    "e7-buton",
    "e7-mem"
   ],
   "text": "Cu banda legată, se pornește siguranța și se încearcă butonul G. Apăsarea scurtă aprinde sau stinge banda. Apăsarea lungă reglează intensitatea.",
   "puncte": [
    "LTECH: la fiecare apăsare lungă, reglajul își schimbă sensul. După stingere și reaprindere, banda revine la ultimul nivel.",
    "1-light: apăsarea scurtă aprinde sau stinge, apăsarea lungă reglează în sus sau în jos. Memoria nivelului nu e scrisă în manual.",
    "Propunerea noastră: o probă înainte de tencuială, cu sursa legată provizoriu în D2, și proba finală după mobilă."
   ],
   "verifica": [
    "Banda nu pâlpâie la intensitate mică.",
    "Clapa F aprinde doar spoturile F1–F3."
   ],
   "sursa": "fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf) (Push DIM: on/off, stepless dimming, dimming memory); manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf) (NOTE); specs/04"
  },
  {
   "titlu": "Același circuit în baie și în GS",
   "cine": "electricianul",
   "stare": "propunere",
   "vedere": {
    "x0": -18,
    "x1": 168,
    "y0": 129,
    "y1": 237
   },
   "apar": [
    "t8-baie",
    "bh",
    "s9",
    "h1",
    "h2",
    "f9-cmd",
    "f9-230",
    "t9-230",
    "f9-24",
    "f9-24b",
    "dot-9",
    "t9-cmd",
    "t9-24",
    "t8-gs",
    "bde",
    "s8",
    "d1",
    "e1",
    "f8-cmd",
    "f8-230",
    "t8-230",
    "f8-24",
    "f8-24b",
    "dot-8",
    "t8-cmd",
    "t8-24",
    "e8-ih",
    "e8-h",
    "e8-de",
    "e8-tav",
    "e8-un"
   ],
   "text": "Baia și GS-ul au aceeași schemă ca bucătăria. Sursele stau în tavanul fals din hol, în afara zonelor umede. Aici fiecare linie e un cablu întreg; firele se leagă ca în pașii 2–6.",
   "puncte": [
    "Baie: butonul H din întrerupătorul IH (codul I1 de pe peretele holului spre baie, x 141,5) → sursa D9 → benzile H1 (nișa din duș, IP67) și H2 (oglinda, IP65).",
    "GS: butonul DE din I3 (peretele cu oglinda din hol, x 525,9) → sursa D8 → benzile D1 (pe tavan) și E1 (oglinda). Cu o singură sursă, un buton aprinde ambele benzi.",
    "Mai multe surse pe același buton: manualul 1-light cere sincronizarea, cu butonul ținut apăsat peste 10 s. Fișa LTECH nu spune nimic despre asta.",
    "1-light are două perechi de ieșire, deci H1 și H2 pot avea câte o pereche. LTECH are una singură."
   ],
   "verifica": [
    "Trapele de vizitare pentru D8 și D9: fără ele, sursele nu se pot ajunge (HL9).",
    "Arhitecta acceptă sursele în tavanul fals din hol (L7).",
    "Un buton pentru D și E sau două surse cu butoane separate (HL12).",
    "Pe unde trec cablurile spre benzile din baie (BA11) și spre banda D1 din GS (GS6). D1 e pe tavan sau deasupra oglinzii (L4)?"
   ],
   "sursa": "specs/04 (sursele GS și băii în tavanul fals din hol, D8 și D9); hol: I1 (IH), I3, D8, D9; baie: H1, H2; GS: D1, E1; manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf) (Synchronization); analiza/11 L4, L7, HL9, HL12, BA11, GS6"
  }
 ]
};
