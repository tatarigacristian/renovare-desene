// Bucătărie — sursa la zi pentru desenele din desene/bucatarie.html. Format: JSON strict după „= ”.
// Câmpurile sunt descrise în desene/README.md.
window.CAMERE = window.CAMERE || {};
window.CAMERE["bucatarie"] = {
 "id": "bucatarie",
 "nume": "Bucătărie",
 "referinte": {
  "orizontal": "x: de la fața zidăriei, în colțul din stânga (privind peretele din cameră). Cotele sunt cumulate de la acest colț: se măsoară cu ruleta de la colț, nu din aproape în aproape.",
  "vertical": "h: de la pardoseala finită. Dacă pardoseala nu e pusă încă, de la reperul de nivel trasat pe perete, cu diferența până la pardoseala finită."
 },
 "inaltime": {
  "valoare": 250,
  "stare": "proiect",
  "nota": "Fără tavan fals: A.05 nu hașurează bucătăria, iar A.22 din 02/2026 desenează placa la 250 (A.01: Hu 2,50). Sub grinzile GR1 și GR2 rămân 205 cm. Deasupra banchetei, cutia M01-SB (203,2–250) îmbracă grinda GR1."
 },
 "revizie": {
  "nr": 3,
  "data": "2026-11-02",
  "modificari": [
   "Revizia 3: banda LED verticală G2 de pe lateralul coloanei frigiderului scoasă. În zona de lucru rămâne doar lumina de sub corpurile suspendate, G1 și G3 (02.11.2026).",
   "Mobila, electrocasnicele, racordurile și prizele refăcute după A.21 și A.22 din 10/2026: chiuveta și plita pe peretele de nord, bancheta pe peretele de sud, centrala în dulapul de lângă peretele E2.",
   "Ușa spre hol în poziția din A.21 din 10/2026: golul 114,9–194,9, cu 7 cm spre sud față de A.01.",
   "Prizele: locul din simbolurile din A.21 din 10/2026, înălțimile propuse de noi; A.06 e pentru vechea așezare.",
   "Stâlpul ST1 de 25 cm (y 58–83), ca în A.21 din 10/2026.",
   "Înălțimile mobilei sunt din A.22 din 02/2026 (același tip de corp), de verificat: A.22 din 10/2026 nu are cote."
  ]
 },
 "plan": {
  "latime": 322,
  "adancime": 265,
  "nota": "x de la fața zidăriei peretelui cu ușa spre hol (vest), y de la fața zidăriei peretelui cu bancheta (sud). Lățimea e 322 între y = 131 și 265 (partea cu fereastra) și 278 între y = 0 și 131, unde peretele de est face o treaptă de 44 cm (vederea E2). Adâncimea 265 = 58 + 25 + 48 + 72 + 62 (A.21 din 10/2026). Ghena din colțul S-V ocupă x 0–33,5, y 0–30; stâlpul ST1 iese din peretele E2 la x 259–278, y 58–83 (A.01: y 55–83). A.01 scrie 324,2 pentru lățime, dar cota pornește de la un contur oblic; vectorii din A.01 și A.21 dau 322."
 },
 "pereti": [
  {
   "id": "N",
   "nume": "Peretele cu chiuveta și plita",
   "subtitlu": "coloana frigiderului, MSV, chiuveta, plita cu hota și cuptorul, corpurile suspendate, banda G · BU03 în A.10 (A.22 din 10/2026: vederea 3D din stânga sus)",
   "lungime": 322,
   "origine": "colțul N-V, cu peretele cu ușa spre hol (fața zidăriei, x = 0)",
   "etapa": 1,
   "plan": [
    [
     0,
     265
    ],
    [
     322,
     265
    ]
   ],
   "elemente": [
    {
     "id": "GR2",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda de deasupra ferestrei (văzută în secțiune)",
     "x": 278,
     "lat": 44,
     "h": 205,
     "inalt": 45,
     "stare": "proiect",
     "nota": "Grindă de 50 cm (x 278–328), din care 44 cm în bucătărie. Fața de jos la 205. Sub ea stă corpul suspendat din colț M01-SC (143–203,2); rândul de sus al corpurilor se oprește la x 278.",
     "sursa": "A.01 și A.05 (x 278–328); A.21 din 10/2026 (liniile întrerupte la x 278 și 328, axa la 303); A.22 din 02/2026 BU03 (205)"
    },
    {
     "id": "M01-PC",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Completarea dintre coloana frigiderului și peretele cu ușa",
     "x": 0,
     "lat": 2,
     "h": 0,
     "inalt": 250,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "nota": "Coloana stă la 2 cm de perete. Golul se închide în față cu o fâșie de completare; planșa nu o desenează.",
     "sursa": "A.21 din 10/2026 (coloana începe la x 2, din vectori și din cota de 60)"
    },
    {
     "id": "M01-SI",
     "strat": "mobila",
     "tip": "plinta",
     "nume": "Soclul coloanei frigiderului",
     "x": 2,
     "lat": 60,
     "h": 0,
     "inalt": 8,
     "stare": "de-verificat",
     "nota": "Soclu de 8 cm. În randarea nouă soclurile sunt maro închis; culoarea nu e dată.",
     "sursa": "A.22 din 02/2026, același tip de corp (BU03: 8)"
    },
    {
     "id": "M01-C1",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Coloana frigiderului — ușa de jos",
     "x": 2,
     "lat": 60,
     "h": 8,
     "inalt": 83.5,
     "stare": "de-verificat",
     "adanc": 61.8,
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 60
      }
     ],
     "nota": "Ușa de jos a coloanei, în fața frigiderului E1. Mâner tip pull-out (specs/09). H1775 ST12 Nuc Parona (legenda A.21).",
     "sursa": "A.21 din 10/2026 (60 × 62, cotat); A.22 din 10/2026 (rosturile la ~90 și ~202, măsurate); A.22 din 02/2026, același tip de corp (BU03: 8–91,5)"
    },
    {
     "id": "M01-C2",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Coloana frigiderului — ușa din mijloc",
     "x": 2,
     "lat": 60,
     "h": 91.5,
     "inalt": 111.7,
     "stare": "de-verificat",
     "adanc": 61.8,
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 60
      }
     ],
     "nota": "Ușa de sus a frigiderului. Mâner tip pull-out (specs/09).",
     "sursa": "A.22 din 10/2026 (măsurat); A.22 din 02/2026, același tip de corp (BU03: 91,5–203,2)"
    },
    {
     "id": "M01-C3",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Coloana frigiderului — ușa de sus",
     "x": 2,
     "lat": 60,
     "h": 203.2,
     "inalt": 40,
     "stare": "de-verificat",
     "adanc": 61.8,
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 60
      }
     ],
     "nota": "Dulap deasupra frigiderului.",
     "sursa": "A.22 din 10/2026 (măsurat); A.22 din 02/2026, același tip de corp (BU03: 203,2–243,2)"
    },
    {
     "id": "M01-PT1",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Plinta de sus a coloanei (până la placă)",
     "x": 2,
     "lat": 60,
     "h": 243.2,
     "inalt": 6.8,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "nota": "Se croiește la măsura de pe șantier: fără tavan fals, placa poate avea abateri.",
     "sursa": "A.22 din 02/2026, același tip de corp (BU03: 6,8)"
    },
    {
     "id": "E1",
     "strat": "mobila",
     "tip": "electrocasnic",
     "nume": "Frigider încastrat",
     "x": 4.5,
     "lat": 55,
     "h": 9.8,
     "inalt": 191.6,
     "stare": "de-verificat",
     "pozitie": "aprox",
     "aparat": "frigider",
     "finisaj": "incastrat",
     "nota": "Frigider încastrat de 55 × 55. Nișa din coloană are ~56,4 × 191,6; frigiderele încastrabile se fac pentru nișe de 178 sau 194 cm. Modelul se alege înainte de comanda mobilei (BC1).",
     "sursa": "A.21 din 10/2026 («frigider incastrat 55x55»); înălțimea din A.22 din 02/2026, același tip de corp (nișa 9,8–201,4)"
    },
    {
     "id": "M01-SJ",
     "strat": "mobila",
     "tip": "plinta",
     "nume": "Soclul corpurilor de jos",
     "x": 62,
     "lat": 235,
     "h": 0,
     "inalt": 8,
     "stare": "de-verificat",
     "nota": "De la coloană până la riflajul caloriferului. În dreptul MSV soclul se prinde pe mașină.",
     "sursa": "A.22 din 02/2026, același tip de corp (BU01: 8)"
    },
    {
     "id": "M01-J",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpurile de jos",
     "x": 62,
     "lat": 235,
     "h": 8,
     "inalt": 80,
     "stare": "de-verificat",
     "adanc": 59.8,
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 45
      },
      {
       "lat": 60
      },
      {
       "lat": 40
      },
      {
       "lat": 60
      },
      {
       "lat": 30
      }
     ],
     "inFata": [
      "P1",
      "P3",
      "D1",
      "R1",
      "R2",
      "R3"
     ],
     "nota": "De la stânga: frontul MSV (45, prins pe ușa mașinii), ușa chiuvetei (60), două sertare (40: ~8–47,6 și ~47,6–88), cuptorul cu un sertar sub el (60), ușa corpului de colț (30). MDF vopsit, culoare similară cu U156 Bej nisip (legenda A.21), mâner frezat tip J (specs/09).",
     "sursa": "A.21 din 10/2026 (45, 60, 40, 60, 30, cotat; fronturile la 59,8 cm de perete); A.22 din 10/2026 (fronturile); A.22 din 02/2026, același tip de corp (BU01: 8–88)"
    },
    {
     "id": "E2",
     "strat": "mobila",
     "tip": "electrocasnic",
     "nume": "Mașina de spălat vase încastrată (slim)",
     "x": 62,
     "lat": 45,
     "h": 0,
     "inalt": 88,
     "stare": "de-verificat",
     "aparat": "msv",
     "finisaj": "incastrat",
     "inFata": [
      "P1"
     ],
     "nota": "Gol de 45 × 88 sub blat, fără corp. Apa: robinet cu două ieșiri pe R1. Scurgerea: în sifonul chiuvetei (R3).",
     "sursa": "A.21 din 10/2026 («MSV slim», 45, cotat); înălțimea din A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "E4",
     "strat": "mobila",
     "tip": "electrocasnic",
     "nume": "Cuptor încastrat",
     "x": 207,
     "lat": 60,
     "h": 24.4,
     "inalt": 60,
     "stare": "de-verificat",
     "pozitie": "aprox",
     "aparat": "cuptor",
     "finisaj": "negru",
     "nota": "Sub plită. Randarea nouă arată o fâșie de ~3,7 cm între cuptor și blat și un sertar de ~16 cm dedesubt; în A.22 din 02/2026 nișa era 28–88. Nișa se face după cuptorul ales (BC3).",
     "sursa": "A.21 din 10/2026 («hota plita cuptor», modulul de 60, cotat); A.22 din 10/2026 (cuptorul la ~24–84, măsurat)"
    },
    {
     "id": "E3",
     "strat": "mobila",
     "tip": "electrocasnic",
     "nume": "Plită cu inducție",
     "x": 207,
     "lat": 58,
     "h": 86,
     "inalt": 5.5,
     "stare": "de-verificat",
     "pozitie": "aprox",
     "aparat": "plita",
     "finisaj": "incastrat",
     "in": "M01-BL",
     "nota": "Corpul plitei coboară ~5,5 cm sub fața blatului (~86). Se alimentează din doza D1, pe circuit dedicat de 32 A, cablu 3 × 6 mm² (specs/06).",
     "sursa": "A.21 din 10/2026 (conturul ~58 × 49 la x 207–265, din vectori); decizia din 12.08.2026: plită cu inducție (specs/08, specs/06)"
    },
    {
     "id": "M01-BL",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Blatul",
     "x": 62,
     "lat": 259,
     "h": 88,
     "inalt": 3.5,
     "stare": "de-verificat",
     "finisaj": "blat",
     "nota": "Blat de 62 cm, de la coloană până la 1 cm de peretele exterior (x 321). În colț se întoarce spre fereastră, peste nișa caloriferului (vezi peretele cu fereastra). Fața de sus la 91,5. Materialul nu e dat.",
     "sursa": "A.21 din 10/2026 (62 adâncime, cotat; capătul la x 321); A.22 din 02/2026, același tip de corp (BU01: 3,5, fața la 91,5)"
    },
    {
     "id": "S1",
     "strat": "sanitare",
     "tip": "sanitar",
     "nume": "Chiuveta (cuva)",
     "x": 128.2,
     "lat": 27.6,
     "h": 71.5,
     "inalt": 20,
     "stare": "de-verificat",
     "pozitie": "aprox",
     "obiect": "chiuveta",
     "in": "M01-J",
     "nota": "Desenată doar cuva; adâncimea (~20) nu e dată. Picurătorul e spre stânga, peste MSV: decupajul din blat are ~68 × 45, la x 92,6–160,8, la ~12 cm de perete. Nu e în lista de achiziții (specs/08 A).",
     "sursa": "A.21 din 10/2026 (chiuveta 68,2 × 45 la x 92,6–160,8; cuva 27,6 × 30 la x 128,2–155,8; scurgerea la x 138,2; din vectori); A.22 din 10/2026 (neagră)"
    },
    {
     "id": "S2",
     "strat": "sanitare",
     "tip": "sanitar",
     "nume": "Bateria chiuvetei",
     "x": 124.7,
     "lat": 4,
     "h": 91.5,
     "inalt": 23.1,
     "stare": "de-verificat",
     "obiect": "baterie",
     "nota": "Pe blat, între picurător și cuvă. Neagră în randare. Nu e în lista de achiziții.",
     "sursa": "A.21 din 10/2026 (x 124,7–128,7, la ~13–23 cm de perete); A.22 din 02/2026, același tip de corp (BU01: 91,5–114,6)"
    },
    {
     "id": "R2",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Apa caldă la chiuvetă",
     "x": 127,
     "h": 55,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "fluid": "calda",
     "nota": "În corpul chiuvetei, în stânga sifonului. Vine de la centrală (S3, pe peretele E2): traseul nu e desenat (BC4).",
     "sursa": "propunere (planșele nu arată racordurile)"
    },
    {
     "id": "R3",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Scurgerea chiuvetei și a MSV",
     "x": 138,
     "h": 45,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "fluid": "scurgere",
     "nota": "Sub scurgerea cuvei (x 138,2), Ø40–50. Planșele nu arată unde se leagă la coloană: chiuveta veche era pe peretele de sud, lângă grupul sanitar (BC4).",
     "diam": 5,
     "sursa": "propunere (planșele nu arată racordurile)"
    },
    {
     "id": "R1",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Apa rece la chiuvetă și la MSV",
     "x": 149,
     "h": 55,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "fluid": "rece",
     "nota": "În corpul chiuvetei, în dreapta sifonului, cu robinet cu două ieșiri (chiuvetă și MSV).",
     "sursa": "propunere (planșele nu arată racordurile)"
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză dublă joasă (frigider și MSV)",
     "x": 73.4,
     "h": 30,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "nota": "Simbolul din A.21 cade în dreptul MSV. Se verifică pe fișa MSV că ștecherul încape în spatele mașinii; altfel priza se mută în corpul chiuvetei, la aceeași înălțime.",
     "in": "M01-J",
     "sursa": "locul: simbolul «2» de la perete din A.21 din 10/2026; înălțimea: propunere"
    },
    {
     "id": "P2",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză dublă pe blat",
     "x": 73.4,
     "h": 110,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "nota": "Între blat (91,5) și corpurile suspendate (143).",
     "sursa": "locul: al doilea simbol «2» de la x 73,4 din A.21 din 10/2026; înălțimea: propunere"
    },
    {
     "id": "P3",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză dublă joasă (cuptor)",
     "x": 278,
     "h": 30,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "nota": "În corpul de colț de 30, lângă cuptor.",
     "in": "M01-J",
     "sursa": "locul: simbolul «2» de la perete din A.21 din 10/2026 (x 278); înălțimea: propunere"
    },
    {
     "id": "P4",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză dublă pe blat, în colț",
     "x": 278,
     "h": 110,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "nota": "Între blat și corpul suspendat din colț.",
     "sursa": "locul: al doilea simbol «2» de la x 278 din A.21 din 10/2026; înălțimea: propunere"
    },
    {
     "id": "P5",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză pentru hotă",
     "x": 250,
     "h": 190,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "nota": "În corpul hotei, deasupra ei.",
     "in": "M01-S1",
     "sursa": "propunere (A.21 nu are priză pentru hotă; A.06 din 02/2026 o punea la h 190)"
    },
    {
     "id": "D1",
     "strat": "electric",
     "tip": "doza",
     "nume": "Doza circuitului de 32 A pentru plită",
     "x": 237,
     "h": 15,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "in": "M01-J",
     "nota": "În spatele sertarului de sub cuptor, ca să ajungă cablul plitei. Se ajunge la ea scoțând sertarul.",
     "sursa": "specs/06 (circuit dedicat 3 × 6 mm², 32 A, pentru plita cu inducție); A.21 din 10/2026 are sub plită un simbol de priză acoperit de desenul plitei"
    },
    {
     "id": "M01-S1",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpurile suspendate — rândul de jos",
     "x": 62,
     "lat": 204,
     "h": 143,
     "inalt": 60.2,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 45
      },
      {
       "lat": 60
      },
      {
       "lat": 40
      },
      {
       "lat": 59
      }
     ],
     "inFata": [
      "P5",
      "D2"
     ],
     "nota": "Fără mâner: frontul cu 1 cm mai lung decât corpul (specs/09). Al patrulea (59) e corpul hotei E5. Adâncimea nu e cotată. H1775 ST12 Nuc Parona (legenda A.21).",
     "sursa": "A.22 din 10/2026 (două rânduri de uși, aliniate cu corpurile de jos, măsurate); A.22 din 02/2026, același tip de corp (BU01: 143–203)"
    },
    {
     "id": "E5",
     "strat": "mobila",
     "tip": "electrocasnic",
     "nume": "Hotă încastrată (telescopică)",
     "x": 208,
     "lat": 56,
     "h": 143,
     "inalt": 30,
     "stare": "de-verificat",
     "pozitie": "aprox",
     "aparat": "hota",
     "finisaj": "incastrat",
     "nota": "În corpul de 59 de deasupra plitei, la ~51,5 cm de blat. Viziera se vede sub corp ca o bandă de lemn mai închisă decât nucul (randarea). Evacuarea nu e desenată (BC6).",
     "sursa": "A.21 din 10/2026 («hota plita cuptor»); A.22 din 10/2026 (banda de lemn sub corpul de deasupra plitei); A.22 din 02/2026, același tip de corp (BU01: viziera 143–148,8)"
    },
    {
     "id": "M01-SC",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul suspendat din colț",
     "x": 266,
     "lat": 55,
     "h": 143,
     "inalt": 60.2,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 55
      }
     ],
     "nota": "Sub grinda GR2 (205), deci are doar rândul de jos. Ajunge la colțul cu peretele exterior, lângă fereastră.",
     "sursa": "A.21 din 10/2026 (55, cotat: x 266–321); A.22 din 10/2026; A.22 din 02/2026, același tip de corp (143–203,2)"
    },
    {
     "id": "M01-S2",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpurile suspendate — rândul de sus",
     "x": 62,
     "lat": 216,
     "h": 203.2,
     "inalt": 40,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 45
      },
      {
       "lat": 60
      },
      {
       "lat": 40
      },
      {
       "lat": 59
      },
      {
       "lat": 12
      }
     ],
     "nota": "Până la grinda GR2 (x 278). Ultima bucată (12) e o completare fixă lângă grindă.",
     "sursa": "A.22 din 10/2026 (măsurat); A.22 din 02/2026, același tip de corp (BU03: 203,2–243,2)"
    },
    {
     "id": "M01-PT2",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Plinta de sus a corpurilor suspendate",
     "x": 62,
     "lat": 216,
     "h": 243.2,
     "inalt": 6.8,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "nota": "Se croiește la măsura de pe șantier, ca M01-PT1.",
     "sursa": "A.22 din 02/2026, același tip de corp (BU03: 6,8); A.22 din 10/2026"
    },
    {
     "id": "D2",
     "strat": "electric",
     "tip": "doza",
     "nume": "Alimentarea sursei Push-DIM pentru benzile G",
     "x": 187,
     "h": 196,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "in": "M01-S1",
     "nota": "Sursa stă în corpul suspendat de 40. Are nevoie de 230 V și de firul de comandă de la butonul G din întrerupătorul I2 din hol (BC17).",
     "sursa": "specs/04 și specs/06 (bandă 24 V, sursă Push-DIM, 29.10.2026)"
    },
    {
     "id": "G1",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Banda LED G sub corpurile suspendate",
     "x": 62,
     "lat": 145,
     "h": 142,
     "inalt": 1,
     "stare": "propunere",
     "pozitie": "aprox",
     "nota": "Sub cele trei corpuri din stânga hotei (45 + 60 + 40 = 145 cm), în profil în fundul corpurilor (specs/06: la 2 cm de perete; BU01 din 02/2026: la 15 cm). Sub hotă nu se pune.",
     "sursa": "specs/06 G și specs/04 (bandă 24 V 3000K CRI90, sursă Push-DIM); așezarea din A.21 din 10/2026"
    },
    {
     "id": "G3",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Banda LED G sub corpul din colț",
     "x": 266,
     "lat": 55,
     "h": 142,
     "inalt": 1,
     "stare": "propunere",
     "pozitie": "aprox",
     "nota": "Opțională: lumină pe colțul de lângă fereastră, de la aceeași sursă (BC17).",
     "sursa": "propunere (continuarea benzii G1)"
    },
    {
     "id": "RF2",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Riflajul caloriferului (capătul)",
     "x": 297,
     "lat": 1.8,
     "h": 0,
     "inalt": 88,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "lamela": 1.8,
     "rost": 2.6,
     "nota": "Capătul riflajului de pe întoarcerea blatului, în secțiune. Vezi peretele cu fereastra.",
     "sursa": "A.21 din 10/2026 (1,8, cotat)"
    }
   ],
   "avertismente": [
    {
     "nivel": "info",
     "text": "A.06 (02/2026) e desenată pentru vechea așezare și nu se mai folosește pentru prizele de aici. A.21 din 10/2026 dă doar locul prizelor în plan, cu tipul (2 = dublă, 3 = triplă), fără înălțime și fără destinație. Înălțimile și destinațiile sunt propunerea noastră (BC5). P5, D1 și D2 nu au simbol în A.21.",
     "sursa": "A.06 (02/2026); A.21 din 10/2026",
     "ids": [
      "P1",
      "P2",
      "P3",
      "P4",
      "P5",
      "D1"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Chiuveta și MSV s-au mutat de pe peretele de sud pe acesta. Planșele nu arată de unde vin apa rece și caldă și unde se leagă scurgerea; coloanele nu sunt pe acest perete (în spate e un dormitor). Scurgerea cere pantă de ~2% pe tot traseul (BC4).",
     "sursa": "A.21 din 10/2026; A.08 (așezarea veche)",
     "ids": [
      "S1",
      "R1",
      "R2",
      "R3"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Nișa frigiderului are ~191,6 cm, iar frigiderele încastrabile se fac pentru 178 sau 194. Microundele și espressorul din varianta veche nu mai apar în plan, deși specs/06 le are prize dedicate (BC1).",
     "sursa": "A.21 din 10/2026; A.22 din 02/2026, același tip de corp; specs/06 B",
     "ids": [
      "E1",
      "M01-C1",
      "M01-C2"
     ]
    },
    {
     "nivel": "info",
     "text": "Între plită (până la ~86) și cuptor (de la ~84,4 în randare) rămân ~1,6 cm. Producătorii cer de obicei spațiu de aer: se fixează după aparatele alese (BC3).",
     "sursa": "A.22 din 10/2026; specs/06",
     "ids": [
      "E3",
      "E4"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Hota: evacuarea nu e desenată. Cel mai scurt drum spre exterior e prin corpul din colț M01-SC, în peretele exterior la nord de fereastră (gaură nouă în fațadă); altfel, recirculare cu filtru de cărbune (BC6).",
     "sursa": "A.21 din 10/2026",
     "ids": [
      "E5",
      "M01-SC"
     ]
    },
    {
     "nivel": "info",
     "text": "Banda G se mută pe acest perete: ~145 cm sub corpuri (G1), plus G3 (55, opțională). Banda verticală G2 de pe lateralul coloanei frigiderului nu se mai face (decizia din 02.11.2026): în zona de lucru rămâne doar lumina de sus, de sub corpurile suspendate. specs/06 avea ~215 cm sub corpurile vechi (L3).",
     "sursa": "specs/06 G; L3; decizia din 02.11.2026",
     "ids": [
      "G1",
      "G3",
      "D2"
     ]
    }
   ]
  },
  {
   "id": "E",
   "nume": "Peretele cu fereastra",
   "subtitlu": "întoarcerea blatului peste nișa caloriferului, riflajul, caloriferul, fereastra, grinda GR2 · partea de nord a BU02 în A.10",
   "lungime": 134,
   "origine": "colțul N-E, cu peretele cu chiuveta (fața peretelui exterior, x = 322)",
   "etapa": 1,
   "plan": [
    [
     322,
     265
    ],
    [
     322,
     131
    ]
   ],
   "elemente": [
    {
     "id": "GR2",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda de deasupra ferestrei (paralelă cu peretele)",
     "x": 0,
     "lat": 134,
     "h": 205,
     "inalt": 45,
     "stare": "proiect",
     "nota": "Merge de-a lungul peretelui (x 278–322), de la treaptă până la peretele cu chiuveta. Fața de jos la 205, la ~1 cm deasupra golului ferestrei. Pe fața ei dinspre cameră propunem detectorul de gaz (P2).",
     "sursa": "A.01 și A.05 (x 278–328); A.21 din 10/2026; A.22 din 02/2026 BU02 și BU03 (205)"
    },
    {
     "id": "FE1",
     "strat": "structura",
     "tip": "fereastra",
     "nume": "Fereastra",
     "x": 40.1,
     "lat": 85,
     "h": 87,
     "inalt": 117,
     "stare": "de-verificat",
     "pozitie": "aprox",
     "nota": "Parapetul la ~87 și tocul la ~89,5, sub fața blatului (91,5): vezi avertismentul. Înălțimile sunt măsurate pe desen; se măsoară pe șantier.",
     "sursa": "A.01, A.21 din 02/2026 și din 10/2026 (golul y 139,9–224,9, adică 40,1–125,1 de la colț); A.22 din 02/2026 BU02 (tocul 89,5–201,5) și BU03 (golul 87–204), măsurate"
    },
    {
     "id": "M01-SC",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul suspendat din colț (capătul)",
     "x": 0,
     "lat": 35,
     "h": 143,
     "inalt": 60.2,
     "stare": "de-verificat",
     "pozitie": "aprox",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 35
      }
     ],
     "nota": "Văzut din capăt. Adâncimea nu e cotată (desenată 35). Se oprește la ~5 cm de golul ferestrei (y 224,9).",
     "sursa": "A.21 din 10/2026; A.22 din 10/2026"
    },
    {
     "id": "M01-SJ",
     "strat": "mobila",
     "tip": "plinta",
     "nume": "Soclul corpurilor de jos (capătul)",
     "x": 0,
     "lat": 60.1,
     "h": 0,
     "inalt": 8,
     "stare": "de-verificat",
     "nota": "În secțiune.",
     "sursa": "A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "M01-J",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpurile de jos (capătul de est, în secțiune)",
     "x": 0,
     "lat": 60.1,
     "h": 8,
     "inalt": 80,
     "stare": "de-verificat",
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 60.1
      }
     ],
     "nota": "Corpul de colț de 30 și colțul închis de lângă peretele exterior (x 298,8–321), deschis spre nișa caloriferului.",
     "sursa": "A.21 din 10/2026; A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "M01-BL",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Blatul: colțul și întoarcerea peste nișa caloriferului",
     "x": 0,
     "lat": 134,
     "h": 88,
     "inalt": 3.5,
     "stare": "de-verificat",
     "finisaj": "blat",
     "nota": "Între y 203 și 265, colțul blatului de pe peretele cu chiuveta; între y 131 și 203 blatul se întoarce peste nișă, pe x 297–322. A.21 îl desenează până la x 327,2, adică 5,2 cm în golul ferestrei. Fața de sus la 91,5.",
     "sursa": "A.21 din 10/2026 (blatul x 297–327,2, y 130,9–202,9, din vectori; nișa 72 × 22,2, cotat); A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "CF1",
     "strat": "structura",
     "tip": "calorifer",
     "nume": "Calorifer Mexen CF33 600 × 600 în nișa de sub blat",
     "x": 68,
     "lat": 60,
     "h": 12,
     "inalt": 60,
     "stare": "propunere",
     "adanc": 16.4,
     "pozitie": "aprox",
     "nota": "Centrat în nișa de 72 cm (y 131–203), lipit de peretele exterior, cu marginea de jos la ~12. Nișa are 22,2 cm de la riflaj până la capătul blatului; CF33 are 16,4 + consolele. A.21 mai are două linii la x 299,4 și 301,2, în spatele riflajului: dacă acolo e un panou plin, aerul nu ajunge la calorifer (BC12).",
     "sursa": "specs/08 B (Mexen CF33 600 × 600, decizia din 28.10.2026); specs/08, tabelul caloriferelor, rândul 3 (nișa 72 × 22,2 din A.21 din 10/2026)"
    },
    {
     "id": "RF2",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Riflajul din fața nișei caloriferului",
     "x": 56,
     "lat": 78,
     "h": 0,
     "inalt": 88,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "lamela": 2.4,
     "rost": 2.6,
     "inFata": [
      "CF1",
      "R10",
      "R11"
     ],
     "nota": "Sub întoarcerea blatului. specs/08 cere ca șipcile să pornească de la 8–10 cm de pardoseală, ca să intre aer rece pe jos; randarea le duce până la pardoseală. Trebuie să se demonteze, pentru robinetele caloriferului.",
     "sursa": "A.21 din 10/2026 (1,8 la x 297–298,8, de la y 131 la ~209; lamele de ~2,4 la pas de 5, din vectori); A.22 din 10/2026 (de la pardoseală până sub blat); specs/08, tabelul caloriferelor, rândul 3 («mascat cu șipci verticale»)"
    },
    {
     "id": "R10",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Turul caloriferului",
     "x": 130,
     "h": 69.5,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "fluid": "calda",
     "nota": "Racord lateral, sus, pe latura dinspre sud. Țevile vin de la centrală prin soclul corpurilor de lângă peretele E2 și pe lângă latura treptei; traseul îl stabilește instalatorul.",
     "sursa": "propunere; specs/08 B (racord lateral 4 × G½″, 55 cm între racorduri)"
    },
    {
     "id": "R11",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Returul caloriferului",
     "x": 130,
     "h": 14.5,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "fluid": "calda",
     "nota": "Racord lateral, jos, la 55 cm sub tur.",
     "sursa": "propunere; specs/08 B"
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză dublă pe blat, în colț",
     "x": 21.8,
     "h": 110,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "nota": "Între blat și corpul suspendat din colț (143).",
     "sursa": "locul: simbolul «2» de pe peretele exterior din A.21 din 10/2026 (y 243,2); înălțimea: propunere"
    },
    {
     "id": "P2",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză și detector de gaz metan",
     "x": 125,
     "h": 222,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "nota": "Pe fața de vest a grinzii GR2 (în plan x 278, y ≈ 140), la ~28 cm sub placă, la ~1,1 m de centrală. Poziția o confirmă firma ANRE (BC7).",
     "sursa": "propunere; specs/08 C (senzorul de gaz rămâne necesar); A.06 din 02/2026 îl punea în corpul hotei"
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Blatul (fața la 91,5) trece pe sub fereastră, dar parapetul e la ~87 și tocul la ~89,5 (A.22 din 02/2026, măsurate). Foaia ferestrei se deschide spre interior, peste blat și pe lângă corpul din colț. Se măsoară parapetul acum și se alege: blat mai jos pe întoarcere, blat oprit înainte de fereastră sau fereastra ridicată (BC11).",
     "sursa": "A.21 din 10/2026; A.22 din 02/2026 BU02, BU03",
     "ids": [
      "FE1",
      "M01-BL",
      "M01-SC"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Caloriferul e închis între perete, blat și riflaj. specs/08 cere 5–8 cm liberi între blat și fereastră (sau grilă în blat) și șipci de la 8–10 cm de pardoseală; fără ele caloriferul dă mult sub cei ~620 W calculați. Robinetele trebuie să rămână accesibile (BC12).",
     "sursa": "specs/08, tabelul caloriferelor, rândul 3",
     "ids": [
      "CF1",
      "RF2",
      "M01-BL"
     ]
    },
    {
     "nivel": "info",
     "text": "A.06 (02/2026) e desenată pentru vechea așezare și nu se mai folosește pentru prizele de aici. A.21 din 10/2026 dă doar locul prizelor în plan, cu tipul (2 = dublă, 3 = triplă), fără înălțime și fără destinație. Înălțimile și destinațiile sunt propunerea noastră (BC5).",
     "sursa": "A.06 (02/2026); A.21 din 10/2026",
     "ids": [
      "P1",
      "P2"
     ]
    }
   ]
  },
  {
   "id": "E2",
   "nume": "Peretele cu centrala",
   "subtitlu": "corpurile înalte de lângă peretele E2: dulapul centralei, corpul din fața stâlpului ST1, corpul de nord, riflajul de sus; cu 44 cm mai spre vest decât peretele cu fereastra · partea de sud a BU02 în A.10",
   "lungime": 131,
   "origine": "muchia treptei, la 131 cm de peretele cu bancheta (x = 278)",
   "etapa": 1,
   "plan": [
    [
     278,
     131
    ],
    [
     278,
     0
    ]
   ],
   "elemente": [
    {
     "id": "ST1",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Stâlpul de beton de lângă peretele E2",
     "x": 48,
     "lat": 25,
     "h": 0,
     "inalt": 250,
     "stare": "proiect",
     "nota": "Iese 19 cm din perete. A.01 și A.21 din 02/2026 îl dau de 28 cm (y 55–83); planșa nouă, de 25, în dreptul grinzii. Spre perete are o fantă de ~5 cm (y 67,9–72,9), desenată în ambele planșe. În fața lui stă corpul M01-CM.",
     "sursa": "A.21 din 10/2026 (x 259–278, y 57,9–82,9, din vectori; cotele 58 și 25)"
    },
    {
     "id": "GR1",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda GR1 (văzută în secțiune)",
     "x": 48,
     "lat": 25,
     "h": 205,
     "inalt": 45,
     "stare": "proiect",
     "nota": "Capătul de est al grinzii, pe stâlpul ST1. Deasupra corpului M01-CM rămân 1,8 cm.",
     "sursa": "A.01 și A.05 (y 58–83); A.21 din 10/2026 (liniile întrerupte y 57,9–82,9); A.22 din 02/2026 BU02 (205)"
    },
    {
     "id": "M01-SE",
     "strat": "mobila",
     "tip": "plinta",
     "nume": "Soclul corpurilor înalte de lângă peretele E2",
     "x": 0,
     "lat": 131,
     "h": 0,
     "inalt": 8,
     "stare": "de-verificat",
     "nota": "Prin soclu pot trece țevile caloriferului spre nișa de sub blat (R10, R11).",
     "sursa": "A.22 din 02/2026, același tip de corp (8)"
    },
    {
     "id": "M01-CN1",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul de nord — ușa de jos",
     "x": 0,
     "lat": 48,
     "h": 8,
     "inalt": 83.5,
     "stare": "de-verificat",
     "adanc": 41.8,
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 48
      }
     ],
     "nota": "Dulap. Mâner push (specs/09: depozitările laterale). H1775 ST12 Nuc Parona (randarea).",
     "sursa": "A.21 din 10/2026 (41,8 × 48, cotat); A.22 din 10/2026 (uși pe două rânduri, măsurate); A.22 din 02/2026, același tip de corp (rostul la 91,5)"
    },
    {
     "id": "M01-CN2",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul de nord — ușa de sus",
     "x": 0,
     "lat": 48,
     "h": 91.5,
     "inalt": 111.7,
     "stare": "de-verificat",
     "adanc": 41.8,
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 48
      }
     ],
     "nota": "Sus la 203,2, ca dulapul centralei. Deasupra, riflajul RF3.",
     "sursa": "A.22 din 10/2026 (măsurat); A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "M01-CM1",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul din fața stâlpului ST1 — ușa de jos",
     "x": 48,
     "lat": 25,
     "h": 8,
     "inalt": 83.5,
     "stare": "de-verificat",
     "adanc": 22.8,
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 25
      }
     ],
     "inFata": [
      "ST1"
     ],
     "nota": "Corp de 22,8 cm adâncime, în fața stâlpului și sub grinda GR1. Mâner push.",
     "sursa": "A.21 din 10/2026 (x 236,2–259, y 57,9–82,9, din vectori; cota 25); A.22 din 10/2026 (frontul îngust, ~24)"
    },
    {
     "id": "M01-CM2",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul din fața stâlpului ST1 — ușa de sus",
     "x": 48,
     "lat": 25,
     "h": 91.5,
     "inalt": 111.7,
     "stare": "de-verificat",
     "adanc": 22.8,
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 25
      }
     ],
     "inFata": [
      "ST1"
     ],
     "nota": "Sus la 203,2, la 1,8 cm sub grinda GR1.",
     "sursa": "A.22 din 10/2026; A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "M01-CC1",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Dulapul centralei — ușa de jos",
     "x": 73,
     "lat": 58,
     "h": 8,
     "inalt": 83.5,
     "stare": "de-verificat",
     "adanc": 41.8,
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 58
      }
     ],
     "inFata": [
      "R9",
      "T1"
     ],
     "nota": "Sub centrală fără raft: aici sunt țevile, robinetul de gaz și sifonul de condens (specs/08 C).",
     "sursa": "A.21 din 10/2026 («Centrala termica», 41,8 × 58, cotat); A.22 din 10/2026; A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "M01-CC2",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Dulapul centralei — ușa de sus",
     "x": 73,
     "lat": 58,
     "h": 91.5,
     "inalt": 111.7,
     "stare": "de-verificat",
     "adanc": 41.8,
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 58
      }
     ],
     "inFata": [
      "P1",
      "R4",
      "R5",
      "R6",
      "R7",
      "R8",
      "T1",
      "EV1"
     ],
     "nota": "Ușa se deschide complet (panoul de comandă, service). Fante sau grile sus și jos, pentru căldura carcasei. Interiorul are ~40 cm adâncime (specs/08 C).",
     "sursa": "A.21 din 10/2026; A.22 din 10/2026; A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "RF3",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Riflajul de deasupra corpului de nord",
     "x": 0,
     "lat": 48,
     "h": 203.2,
     "inalt": 46.8,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "lamela": 2.4,
     "rost": 2.6,
     "nota": "Lamele verticale de la 203,2 la placă, pe fața dinspre cameră și pe latura de nord. Ce e în spatele lor și deasupra corpurilor M01-CM și M01-CC (203,2–250) nu se vede în randări (BC9).",
     "sursa": "A.22 din 10/2026 (vederile din dreapta sus și din dreapta jos, măsurat); nu apare în A.21 din 10/2026"
    },
    {
     "id": "S3",
     "strat": "sanitare",
     "tip": "sanitar",
     "nume": "Centrala termică Ariston Genus One+ WiFi 24",
     "x": 82,
     "lat": 40,
     "h": 112,
     "inalt": 74.5,
     "stare": "propunere",
     "adanc": 31.5,
     "pozitie": "aprox",
     "obiect": "centrala",
     "in": "M01-CC2",
     "nota": "Centrată în dulap: ~9 cm liberi pe fiecare parte și ~8,5 cm până la ușă. Sus la ~186,5, ca să încapă cotul evacuării sub capacul corpului (203,2). Poziția exactă o dă firma ANRE, după șablonul de montaj.",
     "sursa": "A.21 din 10/2026 («Centrala termica», corpul de 41,8 × 58); specs/08 C (745 × 400 × 315)"
    },
    {
     "id": "R7",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Turul încălzirii",
     "x": 88,
     "h": 105,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "fluid": "calda",
     "nota": "Sub centrală. Ordinea racordurilor (tur, apă caldă, gaz, apă rece, retur) e cea obișnuită la Ariston: se verifică pe șablonul centralei.",
     "sursa": "propunere; specs/08 C"
    },
    {
     "id": "R6",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Apa caldă menajeră de la centrală",
     "x": 95,
     "h": 105,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "fluid": "calda",
     "nota": "Spre chiuvetă (R2) și spre baie.",
     "sursa": "propunere; specs/08 C"
    },
    {
     "id": "R4",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Robinetul de gaz al centralei",
     "x": 102,
     "h": 105,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "fluid": "gaz",
     "nota": "Trebuie să se poată închide cu ușa deschisă (specs/08 C).",
     "sursa": "propunere; specs/08 C"
    },
    {
     "id": "R5",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Apa rece spre centrală",
     "x": 109,
     "h": 105,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "fluid": "rece",
     "nota": "De unde vine apa rece nu e desenat (BC4).",
     "sursa": "propunere; specs/08 C"
    },
    {
     "id": "R8",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Returul încălzirii",
     "x": 116,
     "h": 105,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "fluid": "calda",
     "nota": "Cu filtru magnetic (specs/08 C).",
     "sursa": "propunere; specs/08 C"
    },
    {
     "id": "R9",
     "strat": "sanitare",
     "tip": "racord",
     "nume": "Scurgerea condensului centralei",
     "x": 112,
     "h": 40,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "fluid": "scurgere",
     "nota": "Sifonul de condens sub centrală, legat la canalizare (specs/08 C). Planșele nu arată unde e cea mai apropiată coloană (BC14).",
     "diam": 3.2,
     "sursa": "propunere; specs/08 C"
    },
    {
     "id": "T1",
     "strat": "sanitare",
     "tip": "teava",
     "nume": "Țeava de gaz spre centrală (propunere de traseu)",
     "x": 124.5,
     "lat": 4,
     "h": 105,
     "inalt": 140,
     "stare": "propunere",
     "pozitie": "aprox",
     "fluid": "gaz",
     "ascuns": true,
     "nota": "Vine de sus, din cutia M01-SB de deasupra băncii, și coboară pe latura de sud a centralei până la robinetul R4. Traseul îl proiectează firma ANRE (BC13).",
     "sursa": "propunere; specs/08 D (traseu nou, firmă ANRE); HL4"
    },
    {
     "id": "EV1",
     "strat": "sanitare",
     "tip": "perforatii",
     "nume": "Gaura pentru evacuarea coaxială Ø60/100",
     "x": 96.5,
     "lat": 11,
     "h": 191.5,
     "inalt": 11,
     "stare": "propunere",
     "pozitie": "aprox",
     "n": 1,
     "diam": 11,
     "nota": "Cotul kitului iese din centrală în sus și trece orizontal prin peretele E2 (10 cm), prin spațiul închis Z1 (~34 cm) și prin peretele exterior (~21 cm): ~65 cm și un cot (BC8).",
     "sursa": "propunere; specs/08 C (evacuare coaxială, gaură nouă în perete)"
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză pentru centrală",
     "x": 81.4,
     "h": 195,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "nota": "Lângă centrală, deasupra ei, departe de racorduri. Circuit separat, cu împământare (specs/06). Din dulap pleacă și tubul gol pentru cablul termostatului Sensys HD, spre living (specs/06, specs/08 C).",
     "in": "M01-CC2",
     "sursa": "locul: simbolul «3» din A.21 din 10/2026 (y 49,6); înălțimea: propunere"
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Evacuarea centralei nu e desenată. Propunerea: orizontal prin peretele E2, prin spațiul închis Z1 și prin peretele exterior, la ~197. Trebuie aflat ce e Z1 (ghenă a blocului?) și dacă asociația acceptă gaura în fațadă (BC8).",
     "sursa": "specs/08 C; A.21 din 10/2026",
     "ids": [
      "EV1",
      "S3"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Condensul centralei are nevoie de scurgere la canalizare. Chiuveta e pe peretele opus, la ~3 m; coloanele nu sunt desenate (BC14).",
     "sursa": "specs/08 C",
     "ids": [
      "R9"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Traseul gazului până la centrală nu e desenat. T1 e propunerea noastră: din hol, prin cutia de deasupra băncii. Masca trebuie să fie ventilată și demontabilă (specs/08 D; HL4, HL5, BC13).",
     "sursa": "specs/08 D; analiza/01",
     "ids": [
      "T1",
      "R4"
     ]
    },
    {
     "nivel": "info",
     "text": "Deasupra dulapului centralei și a corpului din fața stâlpului (203,2–250) randările nu arată ce e: acolo poate trece evacuarea sau țeava de gaz (BC9).",
     "sursa": "A.22 din 10/2026",
     "ids": [
      "RF3",
      "M01-CC2",
      "M01-CM2"
     ]
    },
    {
     "nivel": "info",
     "text": "A.06 (02/2026) e desenată pentru vechea așezare și nu se mai folosește pentru prizele de aici. A.21 din 10/2026 dă doar locul prizelor în plan, cu tipul (2 = dublă, 3 = triplă), fără înălțime și fără destinație. Înălțimile și destinațiile sunt propunerea noastră (BC5).",
     "sursa": "A.06 (02/2026); A.21 din 10/2026",
     "ids": [
      "P1"
     ]
    }
   ]
  },
  {
   "id": "S",
   "nume": "Peretele cu bancheta",
   "subtitlu": "bancheta cu riflaj, banca de pe latura de vest, cutia de deasupra (peste grinda GR1), capetele corpurilor înalte · BU01 în A.10 (îi spune BI01)",
   "lungime": 278,
   "origine": "colțul S-E, cu peretele E2 (x = 278)",
   "etapa": 1,
   "plan": [
    [
     278,
     0
    ],
    [
     0,
     0
    ]
   ],
   "elemente": [
    {
     "id": "GH1",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Ghena din colțul S-V (33,5 × 30)",
     "x": 244.5,
     "lat": 33.5,
     "h": 0,
     "inalt": 250,
     "stare": "proiect",
     "nota": "Bloc din zidărie cu un gol de ~23,5 × 20 (ghenă de ventilație?). În fața lui stă corpul cu rafturi M01-R1…R3.",
     "sursa": "A.01 (33,5, cotat); A.21 din 02/2026 și din 10/2026 (y 0–30, pereți de 10 cm, gol de 23,5 × 20, din vectori)"
    },
    {
     "id": "GR1",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda GR1 (paralelă cu peretele, la 58–83 cm de el)",
     "x": 19,
     "lat": 259,
     "h": 205,
     "inalt": 45,
     "stare": "proiect",
     "nota": "Ascunsă în cutia M01-SB: fața cutiei e în dreptul feței de nord a grinzii. E aceeași grindă ca GR1 din hol.",
     "sursa": "A.01 și A.05 (y 58–83); A.21 din 10/2026 (liniile întrerupte y 57,9–82,9); A.22 din 02/2026 BU02 (205)"
    },
    {
     "id": "RF1",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Riflajul de pe peretele cu bancheta",
     "x": 42,
     "lat": 202.5,
     "h": 0,
     "inalt": 91.5,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "lamela": 2.4,
     "rost": 2.6,
     "nota": "De la ghenă până la dulapul centralei: în spatele banchetei și pe porțiunea liberă de 62,7. Sus la nivelul blatului (91,5), cu o șipcă orizontală. H1775 ST12 Nuc Parona (randarea).",
     "sursa": "A.21 din 10/2026 (x 33,5–236, adânc 2,9; lamele de 2,4 la pas de 5, din vectori); A.22 din 10/2026; A.22 din 02/2026, același tip de corp (BU03: sus la 91,5)"
    },
    {
     "id": "M01-BN",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Bancheta de pe peretele cu riflaj (depozitare)",
     "x": 104.5,
     "lat": 140,
     "h": 3,
     "inalt": 38,
     "stare": "de-verificat",
     "adanc": 38.8,
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 48.6
      },
      {
       "lat": 50
      },
      {
       "lat": 41.4
      }
     ],
     "inFata": [
      "RF1"
     ],
     "nota": "Pe picioare de 3 cm, în fața riflajului. Fronturile urmează pernele; cum se deschide nu e desenat (BC10). Partea din colț (ultimii 41,4) e închisă de banca de pe latura de vest. U156 Bej nisip (randarea).",
     "sursa": "A.21 din 10/2026 (140 × 38,8, cotat; pernele 48,6 + 50 + 41,4, din vectori); A.22 din 02/2026, același tip de corp (BU03: picioare de 3, corp 3–41)"
    },
    {
     "id": "M01-PE1",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Pernele banchetei",
     "x": 104.5,
     "lat": 140,
     "h": 41,
     "inalt": 4,
     "stare": "de-verificat",
     "inFata": [
      "RF1"
     ],
     "nota": "Trei perne (48,6, 50, 41,4); materialul nu e dat (albe în randare).",
     "sursa": "A.21 din 10/2026; A.22 din 02/2026, același tip de corp (BU03: 4)"
    },
    {
     "id": "M01-BV",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Banca de pe latura de vest (capătul de nord)",
     "x": 203.6,
     "lat": 41.3,
     "h": 3,
     "inalt": 38,
     "stare": "de-verificat",
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 41.3
      }
     ],
     "inFata": [
      "M01-BN",
      "M01-PE1",
      "RF1"
     ],
     "nota": "Bancă de 41,3 × 59,4, în fața corpului cu rafturi. Vezi peretele cu ușa.",
     "sursa": "A.21 din 10/2026 (x 33,1–74,4, y 40,6–100, din vectori); A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "M01-PE2",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Perna băncii de pe latura de vest",
     "x": 203.6,
     "lat": 41.3,
     "h": 41,
     "inalt": 4,
     "stare": "de-verificat",
     "inFata": [
      "M01-PE1",
      "RF1"
     ],
     "nota": "O pernă de ~40 × 57,5.",
     "sursa": "A.21 din 10/2026; A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "M01-SB",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Cutia de deasupra banchetei (peste grinda GR1)",
     "x": 42.1,
     "lat": 202.4,
     "h": 203.2,
     "inalt": 46.8,
     "stare": "de-verificat",
     "adanc": 82.9,
     "finisaj": "nuc",
     "inFata": [
      "GR1",
      "T1"
     ],
     "nota": "Cutie din PAL Nuc Parona de la 203,2 la placă, adâncă de 83 cm: de la perete până la fața de nord a grinzii, pe care o îmbracă. În randări fața e plină, fără uși. Loc de depozitare rămâne doar între perete și grindă (y 0–58, 205–250) (BC15). În A.22 din 02/2026 corpurile de aici aveau 203,2–243,2 și plinta până la placă.",
     "sursa": "A.21 din 10/2026 (conturul de sus: x 33,5–235,9, y 0–82,9); A.22 din 10/2026 (de la ~203 la placă, măsurat); A.22 din 02/2026, același tip de corp (203,2)"
    },
    {
     "id": "M01-PN",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Panoul de pe latura treptei",
     "x": 0,
     "lat": 40,
     "h": 0,
     "inalt": 203.2,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "inFata": [
      "GR1",
      "T1"
     ],
     "nota": "Văzut din nord. Acoperă latura corpului M01-CN și continuă încă 44 cm pe latura treptei (x 278–322), până la nișa caloriferului. A.21 îl hașurează ca perete: placare sau panou de mobilier (BC9)?",
     "sursa": "A.21 din 10/2026 (element de 1,2 cm la y 130,9–132,1, x 238–322, hașurat ca peretele); A.22 din 10/2026 (fața de nord a corpurilor înalte, nuc)"
    },
    {
     "id": "RF3",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Riflajul de deasupra corpului de nord (latura de nord)",
     "x": 0,
     "lat": 40,
     "h": 203.2,
     "inalt": 46.8,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "lamela": 2.4,
     "rost": 2.6,
     "inFata": [
      "GR1",
      "T1"
     ],
     "nota": "Continuarea riflajului de pe fața dinspre cameră (vezi peretele cu centrala).",
     "sursa": "A.22 din 10/2026 (măsurat)"
    },
    {
     "id": "M01-R1",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul cu rafturi deschise — partea de jos (latura de nord)",
     "x": 242.7,
     "lat": 35.3,
     "h": 0,
     "inalt": 91.5,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 35.3
      }
     ],
     "inFata": [
      "GH1",
      "M01-BN",
      "RF1"
     ],
     "nota": "Văzut din nord. Vezi peretele cu ușa.",
     "sursa": "A.21 din 10/2026 (x 0–35,3, y 29,9–100, din vectori); A.22 din 10/2026 (măsurat)"
    },
    {
     "id": "M01-R2",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul cu rafturi deschise — partea din mijloc (latura de nord)",
     "x": 242.7,
     "lat": 35.3,
     "h": 91.5,
     "inalt": 56.5,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 35.3
      }
     ],
     "inFata": [
      "GH1"
     ],
     "nota": "Văzut din nord.",
     "sursa": "A.21 din 10/2026; A.22 din 10/2026 (măsurat)"
    },
    {
     "id": "M01-R3",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul cu rafturi deschise — partea de sus (latura de nord)",
     "x": 242.7,
     "lat": 35.3,
     "h": 148,
     "inalt": 102,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 35.3
      }
     ],
     "inFata": [
      "GH1",
      "GR1",
      "T1"
     ],
     "nota": "Văzut din nord: în randare, sus, rafturile deschise.",
     "sursa": "A.21 din 10/2026; A.22 din 10/2026 (măsurat)"
    },
    {
     "id": "T1",
     "strat": "sanitare",
     "tip": "teava",
     "nume": "Țeava de gaz spre centrală (propunere de traseu)",
     "x": 21,
     "lat": 257,
     "h": 243,
     "inalt": 4,
     "stare": "propunere",
     "pozitie": "aprox",
     "fluid": "gaz",
     "ascuns": true,
     "nota": "Intră din hol prin peretele cu ușa la y ≈ 44 (între ghenă și grindă), la ~245, și merge spre est prin partea de sus a corpului M01-R3 și prin cutia M01-SB, până deasupra dulapului centralei. Planșele nu desenează traseul; îl proiectează firma ANRE (BC13).",
     "sursa": "propunere; specs/08 D; HL4"
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză dublă deasupra riflajului",
     "x": 76,
     "h": 105,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "nota": "Pe porțiunea liberă dintre banchetă și dulapul centralei. Deasupra riflajului (91,5), ca să se poată folosi.",
     "sursa": "locul: simbolul «2» din A.21 din 10/2026 (x 202 în plan); înălțimea: propunere"
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Cutia M01-SB îmbracă grinda GR1. Dacă prin ea trece țeava de gaz (T1), cutia trebuie să fie ventilată (grile sus și jos) și să se demonteze fără scule speciale (specs/08 D; HL5, BC13).",
     "sursa": "specs/08 D; analiza/01",
     "ids": [
      "M01-SB",
      "T1",
      "GR1"
     ]
    },
    {
     "nivel": "info",
     "text": "Bancheta și banca de pe latura de vest fac un L. Colțul banchetei (41,4) e închis de banca de pe latura de vest; planșele nu arată cum se deschid (BC10).",
     "sursa": "A.21 din 10/2026",
     "ids": [
      "M01-BN",
      "M01-BV"
     ]
    },
    {
     "nivel": "info",
     "text": "A.06 (02/2026) e desenată pentru vechea așezare și nu se mai folosește pentru prizele de aici. A.21 din 10/2026 dă doar locul prizelor în plan, cu tipul (2 = dublă, 3 = triplă), fără înălțime și fără destinație. Înălțimile și destinațiile sunt propunerea noastră (BC5).",
     "sursa": "A.06 (02/2026); A.21 din 10/2026",
     "ids": [
      "P1"
     ]
    }
   ]
  },
  {
   "id": "V",
   "nume": "Peretele cu ușa spre hol",
   "subtitlu": "ușa spre hol (U4 în hol), ghena, corpul cu rafturi deschise, banca de pe latura de vest, latura coloanei frigiderului · fără desfășurare",
   "lungime": 265,
   "origine": "colțul S-V, cu peretele cu bancheta (fața zidăriei, y = 0); primii 30 cm sunt latura ghenei",
   "etapa": 1,
   "plan": [
    [
     0,
     0
    ],
    [
     0,
     265
    ]
   ],
   "elemente": [
    {
     "id": "GH1",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Ghena din colțul S-V (latura ei)",
     "x": 0,
     "lat": 30,
     "h": 0,
     "inalt": 250,
     "stare": "proiect",
     "nota": "Blocul ghenei iese 33,5 cm din acest perete, pe primii 30 cm de la colț.",
     "sursa": "A.01; A.21 din 10/2026 (y 0–30)"
    },
    {
     "id": "RF1",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Riflajul de pe peretele cu bancheta (capătul)",
     "x": 0,
     "lat": 2.9,
     "h": 0,
     "inalt": 91.5,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "lamela": 2.4,
     "rost": 2.6,
     "inFata": [
      "GH1"
     ],
     "nota": "În secțiune.",
     "sursa": "A.21 din 10/2026 (2,9 adâncime)"
    },
    {
     "id": "M01-BN",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Bancheta (capătul de vest)",
     "x": 2.9,
     "lat": 38.8,
     "h": 3,
     "inalt": 38,
     "stare": "de-verificat",
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 38.8
      }
     ],
     "inFata": [
      "GH1"
     ],
     "nota": "Capătul banchetei, lipit de ghenă.",
     "sursa": "A.21 din 10/2026 (38,8, cotat); A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "M01-PE1",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Pernele banchetei (capătul)",
     "x": 2.9,
     "lat": 38.8,
     "h": 41,
     "inalt": 4,
     "stare": "de-verificat",
     "inFata": [
      "GH1"
     ],
     "nota": "În secțiune.",
     "sursa": "A.21 din 10/2026; A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "M01-R1",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul cu rafturi deschise — partea de jos",
     "x": 29.9,
     "lat": 70.1,
     "h": 0,
     "inalt": 91.5,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 70.1
      }
     ],
     "nota": "Corp de 33,5 + 1,8 cm adâncime, de la ghenă până la y 100, de la pardoseală la placă. Partea de jos stă în spatele băncii M01-BV; în randare are un front bej, cu ramă.",
     "sursa": "A.21 din 10/2026 (x 0–35,3, y 29,9–100, din vectori); A.22 din 10/2026 (vederile din dreapta sus și din stânga jos, măsurate)"
    },
    {
     "id": "M01-R2",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul cu rafturi deschise — partea din mijloc",
     "x": 29.9,
     "lat": 70.1,
     "h": 91.5,
     "inalt": 56.5,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 25.1
      },
      {
       "lat": 45
      }
     ],
     "inFata": [
      "P1"
     ],
     "nota": "Spre sud o nișă deschisă (~25), spre nord o ușă (~45), măsurate pe randare. În nișă cade priza P1.",
     "sursa": "A.22 din 10/2026 (măsurat)"
    },
    {
     "id": "M01-R3",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul cu rafturi deschise — partea de sus",
     "x": 29.9,
     "lat": 70.1,
     "h": 148,
     "inalt": 102,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 45.1
      },
      {
       "lat": 25
      }
     ],
     "inFata": [
      "GR1",
      "T1"
     ],
     "nota": "Spre sud un dulap cu două uși, spre nord rafturi deschise (două rafturi), până la placă. Grinda GR1 (y 58–83, 205–250) trece prin partea de sus: corpul se decupează în jurul ei (BC16).",
     "sursa": "A.22 din 10/2026 (măsurat)"
    },
    {
     "id": "M01-BV",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Banca de pe latura de vest",
     "x": 40.6,
     "lat": 59.4,
     "h": 3,
     "inalt": 38,
     "stare": "de-verificat",
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 59.4
      }
     ],
     "inFata": [
      "M01-R1"
     ],
     "nota": "Bancă de 41,3 × 59,4, cu fața spre masă. Face un L cu bancheta de pe peretele cu riflaj. Cum se deschide nu e desenat.",
     "sursa": "A.21 din 10/2026 (x 33,1–74,4, y 40,6–100, perna ~40 × 57,5, din vectori); A.22 din 10/2026; A.22 din 02/2026, același tip de corp (3–41 + perna 41–45)"
    },
    {
     "id": "M01-PE2",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Perna băncii de pe latura de vest",
     "x": 40.6,
     "lat": 59.4,
     "h": 41,
     "inalt": 4,
     "stare": "de-verificat",
     "inFata": [
      "M01-R1"
     ],
     "nota": "Materialul nu e dat.",
     "sursa": "A.21 din 10/2026; A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "M01-SB",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Cutia de deasupra banchetei (capătul de vest)",
     "x": 0,
     "lat": 83,
     "h": 203.2,
     "inalt": 46.8,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "inFata": [
      "GH1",
      "M01-R3",
      "GR1",
      "T1"
     ],
     "nota": "De la peretele cu riflaj până la fața de nord a grinzii GR1.",
     "sursa": "A.21 din 10/2026; A.22 din 10/2026"
    },
    {
     "id": "GR1",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda GR1 (văzută în secțiune)",
     "x": 58,
     "lat": 25,
     "h": 205,
     "inalt": 45,
     "stare": "proiect",
     "nota": "Trece prin perete în hol, unde e tot GR1 (y 59,8–84,8 aici, cu 1,8 cm decalaj în A.01).",
     "sursa": "A.01 și A.05 (y 58–83); A.21 din 10/2026; A.22 din 02/2026 BU02 (205)"
    },
    {
     "id": "T1",
     "strat": "sanitare",
     "tip": "teava",
     "nume": "Țeava de gaz: trecerea din hol (propunere)",
     "x": 42,
     "lat": 4,
     "h": 243,
     "inalt": 4,
     "stare": "propunere",
     "pozitie": "aprox",
     "fluid": "gaz",
     "ascuns": true,
     "nota": "Trecerea prin perete, la ~245, din masca MG2 din hol (y ≈ 338 în planul holului). Vezi peretele cu bancheta.",
     "sursa": "propunere; HL4"
    },
    {
     "id": "U1",
     "strat": "structura",
     "tip": "usa",
     "nume": "Ușa spre hol (U4 în hol), cu tocul și pervazul",
     "x": 111.2,
     "lat": 87.4,
     "h": 0,
     "inalt": 203.7,
     "stare": "de-verificat",
     "pozitie": "aprox",
     "nota": "Golul 114,9–194,9 (80 cm), cu 7 cm mai spre sud decât în A.01, A.06 și U4 din hol (122–202). Se deschide spre bucătărie, cu balamalele spre nord: deschisă, foaia stă la y ~191, la ~12 cm de coloana frigiderului. Releveul din 2021 dă 75 × 205 (HL20).",
     "sursa": "A.21 din 10/2026 (golul 114,9–194,9, pervazul spre bucătărie 111,2–198,6, foaia de 72 cu balamalele la y 190,9; din vectori); A.17 D04 (pervazul în hol, 203,7)"
    },
    {
     "id": "M01-SI",
     "strat": "mobila",
     "tip": "plinta",
     "nume": "Soclul coloanei frigiderului (latura)",
     "x": 203.3,
     "lat": 61.6,
     "h": 0,
     "inalt": 8,
     "stare": "de-verificat",
     "nota": "În secțiune.",
     "sursa": "A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "M01-C1",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Coloana frigiderului (latura) — jos",
     "x": 203.3,
     "lat": 61.6,
     "h": 8,
     "inalt": 83.5,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 61.8
      }
     ],
     "nota": "Lateralul coloanei, la 4,7 cm de pervazul ușii (198,6).",
     "sursa": "A.21 din 10/2026 (62, cotat); A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "M01-C2",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Coloana frigiderului (latura) — mijloc",
     "x": 203.3,
     "lat": 61.6,
     "h": 91.5,
     "inalt": 111.7,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 61.8
      }
     ],
     "nota": "Lateralul coloanei.",
     "sursa": "A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "M01-C3",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Coloana frigiderului (latura) — sus",
     "x": 203.3,
     "lat": 61.6,
     "h": 203.2,
     "inalt": 40,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 61.8
      }
     ],
     "nota": "Lateralul coloanei.",
     "sursa": "A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "M01-PT1",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Plinta de sus a coloanei (latura)",
     "x": 203.3,
     "lat": 61.6,
     "h": 243.2,
     "inalt": 6.8,
     "stare": "de-verificat",
     "finisaj": "nuc",
     "nota": "Până la placă.",
     "sursa": "A.22 din 02/2026, același tip de corp"
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză triplă în nișa corpului cu rafturi",
     "x": 48.6,
     "h": 100,
     "stare": "propunere",
     "punct": true,
     "pozitie": "aprox",
     "nota": "În nișa deschisă (91,5–148). A.21 nu spune ce se leagă aici: poate un aparat mic (BC1).",
     "in": "M01-R2",
     "sursa": "locul: simbolul «3» de pe acest perete din A.21 din 10/2026 (y 48,6); înălțimea: propunere"
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "A.21 din 10/2026 mută golul ușii cu 7 cm spre sud (114,9–194,9) față de A.01, A.06 și U4 din hol (122–202). Așa pervazul (până la 198,6) nu mai atinge coloana frigiderului (203,3). Cere lărgirea golului spre sud și completarea lui spre nord; în hol se mută pervazul, plinta G7 și întrerupătorul I2 (BC2).",
     "sursa": "A.21 din 10/2026; A.01; A.06; desene/data/hol.js (U4)",
     "ids": [
      "U1"
     ]
    },
    {
     "nivel": "info",
     "text": "Grinda GR1 trece prin partea de sus a corpului cu rafturi, iar țeava de gaz propusă (T1) trece pe lângă ea (BC13, BC16).",
     "sursa": "A.21 din 10/2026; A.22 din 10/2026",
     "ids": [
      "M01-R3",
      "GR1",
      "T1"
     ]
    },
    {
     "nivel": "info",
     "text": "A.06 (02/2026) e desenată pentru vechea așezare și nu se mai folosește pentru prizele de aici. A.21 din 10/2026 dă doar locul prizelor în plan, cu tipul (2 = dublă, 3 = triplă), fără înălțime și fără destinație. Înălțimile și destinațiile sunt propunerea noastră (BC5).",
     "sursa": "A.06 (02/2026); A.21 din 10/2026",
     "ids": [
      "P1"
     ]
    }
   ]
  }
 ],
 "tavan": {
  "id": "T",
  "tip": "tavan",
  "nume": "Tavanul",
  "subtitlu": "vedere de sus, ca în A.05 · fără tavan fals; grinzile GR1 și GR2, stâlpul ST1, ghena, mobila care ajunge la placă, spoturile F, traseul propus al gazului",
  "lungime": 322,
  "adancime": 265,
  "origine": "colțul dintre peretele cu ușa spre hol (x = 0) și peretele cu bancheta (y = 0)",
  "nota": "x de la fața peretelui cu ușa (vest), spre est, până la peretele exterior (322); h = y de la fața peretelui cu bancheta (sud), spre nord (265). Între y = 0 și 131 bucătăria are doar 278 cm: la est e zona Z1. Placa la 250 (A.01), fără tavan fals (A.05). Fața de jos a grinzilor GR1 și GR2 la 205.",
  "etapa": 1,
  "elemente": [
   {
    "id": "GH1",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Ghena din colțul S-V",
    "x": 0,
    "lat": 33.5,
    "h": 0,
    "inalt": 30,
    "stare": "proiect",
    "nota": "Bloc de zidărie de 33,5 × 30 până la placă, cu un gol de ~23,5 × 20.",
    "sursa": "A.01 (33,5); A.21 din 10/2026 (30)"
   },
   {
    "id": "M01-SB",
    "strat": "mobila",
    "tip": "tavan-fals",
    "nume": "Cutia de deasupra banchetei, 203,2–250 (PAL, nu e tavan fals din gips)",
    "x": 33.5,
    "lat": 202.4,
    "h": 0,
    "inalt": 82.9,
    "stare": "de-verificat",
    "finisaj": "nuc",
    "nota": "Cutie de mobilier din PAL Nuc Parona, desenată transparent ca să se vadă grinda GR1 pe care o îmbracă. Prin ea propunem țeava de gaz T1.",
    "sursa": "A.21 din 10/2026 (conturul de sus, linie plină)"
   },
   {
    "id": "GR1",
    "strat": "structura",
    "tip": "grinda",
    "nume": "Grinda GR1 (est–vest)",
    "x": 0,
    "lat": 259,
    "h": 57.9,
    "inalt": 25,
    "stare": "proiect",
    "nota": "Grindă de 25 cm, fața de jos la 205, de la peretele cu ușa până la stâlpul ST1. Continuă în hol.",
    "sursa": "A.01 și A.05 (y 58–83); A.21 din 10/2026 (y 57,9–82,9); A.22 din 02/2026 BU02 (205)"
   },
   {
    "id": "ST1",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Stâlpul ST1",
    "x": 259,
    "lat": 19,
    "h": 57.9,
    "inalt": 25,
    "stare": "proiect",
    "nota": "Iese 19 cm din peretele E2. A.01 îl dă de 28 cm (y 55–83). În fața lui, corpul M01-CM.",
    "sursa": "A.21 din 10/2026 (x 259–278, y 57,9–82,9)"
   },
   {
    "id": "GR2",
    "strat": "structura",
    "tip": "grinda",
    "nume": "Grinda GR2 (nord–sud, deasupra ferestrei)",
    "x": 278,
    "lat": 44,
    "h": 131,
    "inalt": 134,
    "stare": "proiect",
    "nota": "50 cm lățime (x 278–328), 44 în bucătărie. Fața de jos la 205.",
    "sursa": "A.01 și A.05 (x 278–328); A.21 din 10/2026 (axa la x 303); A.22 din 02/2026 BU03 (205)"
   },
   {
    "id": "Z1",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Zona de la est de peretele E2 (nu ține de bucătărie)",
    "x": 278,
    "lat": 44,
    "h": 0,
    "inalt": 131,
    "stare": "proiect",
    "nota": "Peretele E2 (10 cm), un spațiu închis de ~34 × 121 fără etichetă și peretele de 10 cm spre treaptă. specs/08 dă ~12 + ~39 cm. Prin el propunem evacuarea centralei (EV1). Ce e spațiul nu se știe (BC8).",
    "sursa": "A.01 și A.21 (pereți de 10 cm la x 278–288 și y 121–131; spațiu închis x 288–322, y 0–121)"
   },
   {
    "id": "M01-R3",
    "strat": "mobila",
    "tip": "mobilier",
    "nume": "Corpul cu rafturi deschise (până la placă)",
    "x": 0,
    "lat": 35.3,
    "h": 29.9,
    "inalt": 70.1,
    "stare": "de-verificat",
    "finisaj": "nuc",
    "inFata": [
     "T1",
     "GR1"
    ],
    "nota": "Grinda GR1 trece prin partea lui de sus.",
    "sursa": "A.21 din 10/2026 (x 0–35,3, y 29,9–100)"
   },
   {
    "id": "RF3",
    "strat": "mobila",
    "tip": "mobilier",
    "nume": "Riflajul de deasupra corpului de nord (203,2–250)",
    "x": 236.2,
    "lat": 41.8,
    "h": 82.9,
    "inalt": 48,
    "stare": "de-verificat",
    "finisaj": "nuc",
    "nota": "Lamele pe fața dinspre cameră și pe latura de nord.",
    "sursa": "A.22 din 10/2026"
   },
   {
    "id": "M01-PT1",
    "strat": "mobila",
    "tip": "mobilier",
    "nume": "Coloana frigiderului (până la placă)",
    "x": 2,
    "lat": 60,
    "h": 203.3,
    "inalt": 61.6,
    "stare": "de-verificat",
    "finisaj": "nuc",
    "nota": "Coloană de 60 × 61,8, la 2 cm de peretele cu ușa.",
    "sursa": "A.21 din 10/2026 (60 × 62)"
   },
   {
    "id": "M01-PT2",
    "strat": "mobila",
    "tip": "mobilier",
    "nume": "Corpurile suspendate de pe peretele cu chiuveta (până la placă)",
    "x": 62,
    "lat": 216,
    "h": 230,
    "inalt": 35,
    "stare": "de-verificat",
    "pozitie": "aprox",
    "finisaj": "nuc",
    "nota": "Adâncimea nu e cotată (desenată 35).",
    "sursa": "A.22 din 10/2026"
   },
   {
    "id": "T1",
    "strat": "sanitare",
    "tip": "teava",
    "nume": "Țeava de gaz spre centrală (propunere de traseu)",
    "x": 0,
    "lat": 257,
    "h": 42,
    "inalt": 4,
    "stare": "propunere",
    "pozitie": "aprox",
    "fluid": "gaz",
    "ascuns": true,
    "nota": "La ~245, între ghenă și grindă, în cutia M01-SB; deasupra dulapului centralei cotește spre sud și coboară.",
    "sursa": "propunere; HL4"
   },
   {
    "id": "F1",
    "strat": "led",
    "tip": "spot",
    "nume": "Spot aplicat F",
    "x": 74.9,
    "h": 133,
    "stare": "proiect",
    "punct": true,
    "nota": "Aplicat pe placă. Clapa F din întrerupătorul I2 din hol. Cablul: BC18.",
    "sursa": "A.06 (F, cotat); specs/04 (aplicat alb 12 W 3000K CRI90)"
   },
   {
    "id": "F2",
    "strat": "led",
    "tip": "spot",
    "nume": "Spot aplicat F",
    "x": 139.9,
    "h": 133,
    "stare": "proiect",
    "punct": true,
    "nota": "Ca F1, la 65 cm de el.",
    "sursa": "A.06 (F, cotat); specs/04"
   },
   {
    "id": "F3",
    "strat": "led",
    "tip": "spot",
    "nume": "Spot aplicat F",
    "x": 204.9,
    "h": 133,
    "stare": "proiect",
    "punct": true,
    "nota": "Ca F1, la 65 cm de F2.",
    "sursa": "A.06 (F, cotat); specs/04"
   }
  ],
  "avertismente": [
   {
    "nivel": "atentie",
    "text": "Spoturile F1–F3 sunt din A.06, făcută pentru vechea așezare. Masa din A.21 din 10/2026 (80 × 80, x 81,9–161,9, y 48,7–128,7; taburetul Ø40 la x 177,9, y 86) stă la sud de ele: spoturile cad la ~4 cm de marginea mesei, nu deasupra ei (axa mesei la y ~89). Fără tavan fals, cablurile lor n-au pe unde trece ascuns (BC18).",
    "sursa": "A.06; A.21 din 10/2026",
    "ids": [
     "F1",
     "F2",
     "F3"
    ]
   },
   {
    "nivel": "info",
    "text": "GR1 din bucătărie (y 57,9–82,9) și GR1 din hol (y 59,8–84,8 în acest plan) sunt aceeași grindă; A.01 le desenează cu 1,8 cm decalaj. ST1 are 25 cm în A.21 din 10/2026 și 28 cm în A.01.",
    "sursa": "A.01; A.21 din 10/2026",
    "ids": [
     "GR1",
     "ST1"
    ]
   }
  ]
 }
};
