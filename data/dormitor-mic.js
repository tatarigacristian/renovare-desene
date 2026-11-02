// Dormitorul mic — sursa la zi pentru desenele din desene/dormitor-mic.html. Format: JSON strict după „= ”.
// Câmpurile sunt descrise în desene/README.md. Fișierul e scris de un script (gen.py, în afara repo-ului): după schimbări de mână, scriptul nu se mai folosește.
window.CAMERE = window.CAMERE || {};
window.CAMERE["dormitor-mic"] = {
 "id": "dormitor-mic",
 "nume": "Dormitorul mic",
 "referinte": {
  "orizontal": "x: de la fața zidăriei, în colțul din stânga (privind peretele din cameră). Cotele sunt cumulate de la acest colț: se măsoară cu ruleta de la colț, nu din aproape în aproape.",
  "vertical": "h: de la pardoseala finită. Dacă pardoseala nu e pusă încă, de la reperul de nivel trasat pe perete, cu diferența până la pardoseala finită."
 },
 "inaltime": {
  "valoare": 243,
  "stare": "de-verificat",
  "nota": "Sub tavanul fals de 7 cm, montat deja (03.11.2026): desenat la ~243 cm, ca în living; placa la ~250 cm. Arhitecta nu a proiectat camera: cotele sunt din releveul din 2021 și din analiza/06 v3. Înălțimea se măsoară în 4 puncte."
 },
 "revizie": {
  "nr": 3,
  "data": "2026-11-03",
  "modificari": [
   "Revizia 3: coloana M16 (60 × 40 cm, nuc), din care iese consola M14, acum de 210 cm; televizorul, P4 și TB1 se mută ~25 cm spre ușă, centrate pe consolă, iar P5 la 290. Compartimentul AC crește în jos (ușile lui M13 până la h 190): unitatea vine în față, cu capac fix perforat sus și cu clapa CL, care vara intră sub unitate; tubul TB2 coboară sub scurgerea unității. Tavanul fals e deja montat (03.11.2026).",
   "Revizia 2: dulapul M13 are 120 cm (avea 80), cu unitatea AC în compartimentul de sus, în spatele capacului perforat M13-C; consola M14 are 260 cm (avea 280), iar televizorul e centrat pe ea. Traseul AC spre unitatea exterioară de pe fațadă (02.11.2026).",
   "Prima versiune: cei 4 pereți și planul tavanului, din releveul din 2021 (495 × 256), din cele două randări din 02.11.2026 și din propunerea din analiza/06 v3, acceptată pe 02.11.2026 (D26).",
   "Camera nu are proiect de la arhitectă. Tot ce nu e în releveu e propunere: mobilierul M13–M16, riflajul RF1, scafa, șina SM, benzile L1–L3 și prizele. Tavanul fals e montat deja.",
   "Față de randări: consola începe la 105 cm de colțul ușii, ca ușa să se deschidă la 90°; tăblia patului se sprijină pe stâlpul din colț, care lipsește din randări."
  ]
 },
 "plan": {
  "latime": 495,
  "adancime": 256,
  "nota": "x de la fața zidăriei peretelui cu fereastra (vest), y de la fața peretelui TV (sud). Camera are 495 × 256 cm (releveu). În colțurile de nord sunt stâlpii ST-NV (27 × 50) și ST-NE (17 × 52). Ușa spre hol e în peretele de est, lângă colțul de sud."
 },
 "pereti": [
  {
   "id": "N",
   "nume": "Peretele cu patul și biroul",
   "subtitlu": "biroul, riflajul RF1 cu banda L2, patul cu panoul tapițat · spatele peretelui TV din living",
   "lungime": 495,
   "origine": "colțul N-V, cu peretele cu fereastra (fața zidăriei, x = 0 în planul camerei)",
   "etapa": 1,
   "plan": [
    [
     0,
     256
    ],
    [
     495,
     256
    ]
   ],
   "elemente": [
    {
     "id": "ST-NV",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Stâlpul din colțul N-V (spre living, lângă fereastră)",
     "x": 0,
     "lat": 27,
     "h": 0,
     "inalt": 250,
     "adanc": 50,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "releveu 2021 (citit pe imagine, ±5 cm)",
     "nota": "Iese 27 cm din peretele cu fereastra, pe 50 cm de la peretele N (releveu). Randările nu îl au. E în aceeași fațadă cu stâlpul ST-SV din living: probabil beton armat, fără șanțuri. Draperia trece prin fața lui."
    },
    {
     "id": "ST-NE",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Stâlpul din colțul N-E (spre living și hol)",
     "x": 478,
     "lat": 17,
     "h": 0,
     "inalt": 250,
     "adanc": 52,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "releveu 2021 (citit pe imagine, ±5 cm)",
     "nota": "Iese 17 cm din peretele cu ușa, pe 52 cm de la peretele N (releveu). E același stâlp cu ST2 din living (18,1 cm). Randările nu îl au. Tăblia patului M15-T se sprijină pe fața lui."
    },
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Tavan fals din gips-carton (7 cm)",
     "x": 42,
     "lat": 453,
     "h": 243,
     "inalt": 7,
     "adanc": 256,
     "stare": "de-verificat",
     "sursa": "montat deja (spus de beneficiar pe 03.11.2026); analiza/06 v3 și decizia D26 (02.11.2026); ca TF1 din living (A.16, D-09)",
     "nota": "Montat deja. Desenat cu fața la ~243 cm și placa la ~250 cm, ca în living: de măsurat. Deasupra plăcii de 12,5 mm rămân ~5,75 cm, iar oferta LedHome cere min. 6 cm pentru șina SM: aceeași întrebare ca la șinele J și K din living (detaliul J-K). Același cod pe toți pereții și pe planul tavanului."
    },
    {
     "id": "G1",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm",
     "x": 27,
     "lat": 451,
     "h": 0,
     "inalt": 8,
     "stare": "propunere",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026); analiza/06 (plinta din zona de zi)",
     "nota": "Între fețele stâlpilor. Se montează după mobilier, ca în restul casei."
    },
    {
     "id": "B1",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Biroul reglabil electric (se cumpără), blatul",
     "x": 45,
     "lat": 140,
     "h": 72,
     "inalt": 3,
     "adanc": 70,
     "adancAprox": true,
     "pozitie": "aprox",
     "finisaj": "bej",
     "stare": "propunere",
     "sursa": "randările din 02.11.2026 (design/dormitor_mic.jpeg, dormitor_mic2.jpeg); analiza/06 v3 și decizia D26 (02.11.2026)",
     "nota": "Blat ~140 × 70 cm, cu picioare negre reglabile și braț de monitor. Pe desen e doar blatul, la h ~72. Începe la ~45 cm de peretele cu fereastra: după stâlpul ST-NV (27) și scafa draperiei (27–42)."
    },
    {
     "id": "P3",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză triplă + priză de date RJ45, sub birou",
     "x": 135,
     "h": 30,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026)",
     "nota": "Pentru biroul electric, monitor și calculator. Cablul de date vine de la routerul din hol (P1 pe stâlpul ST1, în coloana M04-R). Între ~120 și ~150 cm de colț nu e nicio doză în peretele livingului."
    },
    {
     "id": "RF1",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Panoul riflaj, lamele verticale bej",
     "x": 205,
     "lat": 50,
     "h": 0,
     "inalt": 243,
     "adanc": 3,
     "lamela": 3,
     "rost": 2,
     "finisaj": "bej",
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "randările din 02.11.2026 (design/dormitor_mic.jpeg, dormitor_mic2.jpeg); analiza/06 v3 și decizia D26 (02.11.2026)",
     "nota": "Lamele bej ca riflajul RF din living (~3 cm, cu ~2 cm între ele), de la pardoseală la tavanul fals. Între birou și pat. Dacă grinda GR1 din living iese și spre dormitor, panoul se oprește sub ea."
    },
    {
     "id": "L2",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Banda LED verticală a riflajului",
     "x": 255,
     "lat": 1.5,
     "h": 0,
     "inalt": 243,
     "stare": "propunere",
     "sursa": "randările din 02.11.2026 (design/dormitor_mic.jpeg, dormitor_mic2.jpeg); analiza/06 v3 și decizia D26 (02.11.2026)",
     "nota": "COB 24 V 3000K CRI90 în profil, pe latura riflajului dinspre pat, ~240 cm. Cablul de 24 V vine prin tavanul fals de la sursa Push-DIM de lângă scafă (doza D1). Comanda: butonul „ambient” din I1 (peretele cu ușa) și din I2 (la pat)."
    },
    {
     "id": "PAT",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Patul tapițat 140 × 200 (se cumpără)",
     "x": 270,
     "lat": 200,
     "h": 0,
     "inalt": 45,
     "adanc": 140,
     "adancAprox": true,
     "pozitie": "aprox",
     "finisaj": "bej",
     "stare": "propunere",
     "sursa": "randările din 02.11.2026 (design/dormitor_mic.jpeg, dormitor_mic2.jpeg); analiza/06 v3 și decizia D26 (02.11.2026) (D-DM3)",
     "nota": "Cu latura lungă lângă perete și capul spre peretele cu ușa. Până la consola M14 rămâne un culoar de ~76 cm; cu un pat de 160 ar rămâne ~56 cm. Pe desen, salteaua sus la ~45."
    },
    {
     "id": "M15-P",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Panoul tapițat de pe perete, deasupra patului",
     "x": 270,
     "lat": 200,
     "h": 50,
     "inalt": 60,
     "adanc": 5,
     "adancAprox": true,
     "pozitie": "aprox",
     "finisaj": "bej",
     "stare": "propunere",
     "sursa": "randările din 02.11.2026 (design/dormitor_mic.jpeg, dormitor_mic2.jpeg); analiza/06 v3 și decizia D26 (02.11.2026)",
     "nota": "Panou tapițat bej (~200 × 60 cm), ca în randarea 2: te sprijini de el când stai în pat cu fața spre televizor. Un strat fonoabsorbant în spatele lui reduce sunetul televizorului din living, care e pe același perete."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "sursa": "living.js, peretele S (P1–P3, D1, D2, STV, TB4, PI1, PI2), măsurat în oglindă; analiza/06 v3, 3.5",
     "ids": [
      "PAT",
      "M15-P",
      "P3"
     ],
     "text": "Peretele e spatele peretelui TV din living. Pe partea livingului sunt zidite dozele televizorului, prizele P1–P3, cutia suportului STV și tubul TB4, între ~245 și ~380 cm de colțul N-V, de la h 15 la h 130. Pilaștrii PI1 (~427–477) și PI2 (~28–78) sunt probabil din beton. Acolo nu se fac doze și șanțuri pe partea dormitorului: prizele patului sunt pe peretele cu ușa (P2, I2)."
    },
    {
     "nivel": "atentie",
     "sursa": "releveu 2021 (citit pe imagine, ±5 cm)",
     "ids": [
      "ST-NV",
      "ST-NE"
     ],
     "text": "Stâlpii ST-NV și ST-NE nu apar în randări. Releveul dă 27 × 50 și 17 × 52 cm; se măsoară pe teren înainte de comanda mobilierului."
    },
    {
     "nivel": "info",
     "sursa": "living.js GR1 (h 205, 15 cm în living)",
     "ids": [
      "RF1",
      "L2"
     ],
     "text": "Grinda GR1 din living (de la h 205) poate ieși și spre dormitor. De verificat pe teren; dacă iese, riflajul RF1 și banda L2 se opresc sub ea, iar tavanul fals o ocolește."
    }
   ]
  },
  {
   "id": "E",
   "nume": "Peretele cu ușa",
   "subtitlu": "tăblia patului M15-T cu prizele de la pat, întrerupătorul I1, ușa spre hol (U1 și în hol)",
   "lungime": 256,
   "origine": "colțul N-E, cu peretele cu patul (fața zidăriei)",
   "etapa": 1,
   "plan": [
    [
     495,
     256
    ],
    [
     495,
     0
    ]
   ],
   "elemente": [
    {
     "id": "ST-NE",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Stâlpul din colțul N-E (spre living și hol)",
     "x": 0,
     "lat": 52,
     "h": 0,
     "inalt": 250,
     "adanc": 17,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "releveu 2021 (citit pe imagine, ±5 cm)",
     "nota": "Iese 17 cm din peretele cu ușa, pe 52 cm de la peretele N (releveu). E același stâlp cu ST2 din living (18,1 cm). Randările nu îl au. Tăblia patului M15-T se sprijină pe fața lui."
    },
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Tavan fals din gips-carton (7 cm)",
     "x": 0,
     "lat": 256,
     "h": 243,
     "inalt": 7,
     "adanc": 256,
     "stare": "de-verificat",
     "sursa": "montat deja (spus de beneficiar pe 03.11.2026); analiza/06 v3 și decizia D26 (02.11.2026); ca TF1 din living (A.16, D-09)",
     "nota": "Montat deja. Desenat cu fața la ~243 cm și placa la ~250 cm, ca în living: de măsurat. Deasupra plăcii de 12,5 mm rămân ~5,75 cm, iar oferta LedHome cere min. 6 cm pentru șina SM: aceeași întrebare ca la șinele J și K din living (detaliul J-K). Același cod pe toți pereții și pe planul tavanului."
    },
    {
     "id": "G2",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm",
     "x": 52,
     "lat": 110.3,
     "h": 0,
     "inalt": 8,
     "stare": "propunere",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026)",
     "nota": "Între stâlp și pervazul ușii; în spatele tăbliei se poate lăsa fără plintă."
    },
    {
     "id": "M15-T",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Tăblia patului, încastrată, cu poliță",
     "x": 0,
     "lat": 140,
     "h": 0,
     "inalt": 75,
     "adanc": 25,
     "inFata": [
      "ST-NE",
      "G2"
     ],
     "pozitie": "aprox",
     "finisaj": "bej",
     "stare": "propunere",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026) (D-DM3)",
     "nota": "Tapițată în față, cu poliță la h 75. Se sprijină pe fața stâlpului ST-NE (8 cm în fața lui) și stă la 25 cm de zidărie pe restul lungimii, până la ~140 cm de colț. Deasupra poliței, pe perete: P2 și I2."
    },
    {
     "id": "P2",
     "strat": "electric",
     "tip": "priza",
     "nume": "2 prize + încărcător USB, la pat",
     "x": 112,
     "h": 90,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026)",
     "nota": "Deasupra poliței tăbliei. La ≥ 20 cm de banda A2 din hol, care e pe partea holului în dreptul a ~52 cm de colț."
    },
    {
     "id": "I2",
     "strat": "electric",
     "tip": "intrerupator",
     "nume": "2 butoane cu revenire la pat: șina SM și lumina ambientală",
     "x": 128,
     "h": 90,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026)",
     "nota": "Legate în paralel cu butoanele din I1: apăsare scurtă aprinde și stinge, apăsare lungă reglează intensitatea (Push-DIM, ca în bucătărie și baie). Detaliul PUSH arată legăturile."
    },
    {
     "id": "I1",
     "strat": "electric",
     "tip": "intrerupator",
     "nume": "La intrare: 2 butoane cu revenire (șina SM, ambient) + clapa luminii de pe balcon",
     "x": 150,
     "h": 105,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026)",
     "nota": "Între tăblie și ușă, pe latura mânerului. Ambient = benzile L1, L2 și L3, pe aceeași sursă Push-DIM."
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză simplă la intrare (aspirator)",
     "x": 150,
     "h": 30,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026)"
    },
    {
     "id": "U1",
     "strat": "structura",
     "tip": "usa",
     "nume": "Ușa spre hol (cu tocul și pervazul)",
     "x": 162.3,
     "lat": 93.7,
     "h": 0,
     "inalt": 203.7,
     "foaie": {
      "lat": 82,
      "inalt": 196
     },
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "hol.js U1 (A.01, A.06, A.17 D05); releveu 2021 (citit pe imagine, ±5 cm)",
     "nota": "Golul din zidărie 90 cm, foaia 82 × 196 (ușa cumpărată). Se deschide spre dormitor, cu balamalele spre S (spre colțul S-E): deschisă, foaia stă lipită de peretele TV. Releveul arată golul lipit de colțul S, deci pe partea dormitorului e desenat doar pervazul de nord (3,7 cm)."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "sursa": "hol.js U1; releveu 2021",
     "ids": [
      "U1"
     ],
     "text": "Releveul arată golul ușii lipit de colțul S. Pervazul de sud are nevoie de ~4 cm de zidărie pe partea dormitorului. De măsurat distanța de la peretele S la gol înainte de montajul ușii."
    },
    {
     "nivel": "info",
     "sursa": "hol.js A2 și M04 (peretele V al holului, x ~200–295)",
     "ids": [
      "P2",
      "I2"
     ],
     "text": "Pe partea holului, în dreptul tăbliei, sunt banca M04, panoul cu butoni și riflajul cu banda A2. Dozele P2 și I2 stau la ≥ 20 cm de capătul benzii A2 (în dreptul a ~52 cm de colțul N-E)."
    }
   ]
  },
  {
   "id": "S",
   "nume": "Peretele TV",
   "subtitlu": "consola suspendată M14 care iese din coloana M16, televizorul, dulapul M13 cu aerul condiționat în capul lui · locul liber pentru foaia ușii",
   "lungime": 495,
   "origine": "colțul S-E, cu peretele cu ușa (fața zidăriei)",
   "etapa": 1,
   "plan": [
    [
     495,
     0
    ],
    [
     0,
     0
    ]
   ],
   "elemente": [
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Tavan fals din gips-carton (7 cm)",
     "x": 0,
     "lat": 495,
     "h": 243,
     "inalt": 7,
     "adanc": 256,
     "stare": "de-verificat",
     "sursa": "montat deja (spus de beneficiar pe 03.11.2026); analiza/06 v3 și decizia D26 (02.11.2026); ca TF1 din living (A.16, D-09)",
     "nota": "Montat deja. Desenat cu fața la ~243 cm și placa la ~250 cm, ca în living: de măsurat. Deasupra plăcii de 12,5 mm rămân ~5,75 cm, iar oferta LedHome cere min. 6 cm pentru șina SM: aceeași întrebare ca la șinele J și K din living (detaliul J-K). Același cod pe toți pereții și pe planul tavanului."
    },
    {
     "id": "G3",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm",
     "x": 0,
     "lat": 315,
     "h": 0,
     "inalt": 8,
     "stare": "propunere",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026)",
     "nota": "De la colțul S-E până la coloana M16, și în spatele consolei suspendate."
    },
    {
     "id": "M14",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Consola TV suspendată M14",
     "x": 105,
     "lat": 210,
     "h": 20,
     "inalt": 35,
     "adanc": 40,
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 52.5
      },
      {
       "lat": 52.5
      },
      {
       "lat": 52.5
      },
      {
       "lat": 52.5
      }
     ],
     "inFata": [
      "G3",
      "P5",
      "TB1"
     ],
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "randările din 02.11.2026 (design/dormitor_mic.jpeg, dormitor_mic2.jpeg); analiza/06 v3 și decizia D26 (02.11.2026) (D-DM2, D-DM8); iese din coloana M16 (03.11.2026)",
     "nota": "U156 Bej nisip mat, ca M10-C din living. Patru fronturi push de 52,5 cm, fără mâner. Suspendată la h ~20 (35 cm înălțime, 40 cm adâncime). Începe la 105 cm de colțul S-E (pe primii ~90 cm stă foaia ușii U1, deschisă) și iese din coloana M16, cu fața în același plan. Avea 260 cm."
    },
    {
     "id": "L3",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Banda LED de sub consolă",
     "x": 107,
     "lat": 206,
     "h": 18.5,
     "inalt": 1.5,
     "ascuns": true,
     "stare": "propunere",
     "sursa": "randările din 02.11.2026 (design/dormitor_mic.jpeg, dormitor_mic2.jpeg); analiza/06 v3 și decizia D26 (02.11.2026)",
     "nota": "COB 24 V 3000K CRI90 în profil, ~206 cm, sub consolă. Cablul de 24 V vine prin tavanul fals și printr-un tub pe perete, de la sursa Push-DIM de lângă scafă."
    },
    {
     "id": "P5",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză triplă în spatele consolei (aparate)",
     "x": 290,
     "h": 40,
     "punct": true,
     "pozitie": "aprox",
     "in": "M14",
     "stare": "propunere",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026)"
    },
    {
     "id": "TV",
     "strat": "mobila",
     "tip": "tv",
     "nume": "Televizorul (55\", dimensiunile propuse)",
     "x": 148.5,
     "lat": 123,
     "h": 80,
     "inalt": 71,
     "adanc": 5,
     "inFata": [
      "P4",
      "TB1"
     ],
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "randările din 02.11.2026 (design/dormitor_mic.jpeg, dormitor_mic2.jpeg); analiza/06 v3 și decizia D26 (02.11.2026) (D-DM6)",
     "nota": "123 × 71 cm, centrat pe consola de 210 cm. Din pat, sprijinit de panoul tapițat, se vede din față la ~2,1 m: 50–55\" se potrivesc. Lumina din spate, dacă se vrea, vine din televizor (USB), fără fire noi."
    },
    {
     "id": "P4",
     "strat": "electric",
     "tip": "priza",
     "nume": "2 prize + priză TV + priză de date, în spatele televizorului",
     "x": 210,
     "h": 115,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026)",
     "nota": "Ca P2 din living. Poziția finală după suportul televizorului cumpărat."
    },
    {
     "id": "TB1",
     "strat": "electric",
     "tip": "tub",
     "nume": "Tub pentru cablurile televizorului, până în spatele consolei",
     "x": 208,
     "lat": 4,
     "h": 45,
     "inalt": 65,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026)"
    },
    {
     "id": "M16",
     "strat": "mobila",
     "tip": "dulap",
     "nume": "Coloana M16, din care iese consola M14",
     "x": 315,
     "lat": 60,
     "h": 0,
     "inalt": 190,
     "adanc": 40,
     "fronturi": [
      {
       "lat": 1.8,
       "tip": "lateral"
      },
      {
       "lat": 56.4,
       "tip": "lemn"
      },
      {
       "lat": 1.8,
       "tip": "lateral"
      }
     ],
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "cererea din 03.11.2026 (varianta B, coloana în nuc)",
     "nota": "O ușă de ~56 cm, până la h 190, ca M13. Adâncime 40 cm, cât consola: fața consolei continuă în fața coloanei. Față de M13 (60 cm) rămâne o treaptă de 20 cm, ca între masca M11 (50) și corpul M10 (40) din living. PAL H1775 ST12 Nuc Parona, ca M13. În 40 cm nu încap umerașe pe o bară paralelă cu peretele: rafturi, pantofi, cutii sau o bară extensibilă scoasă spre față."
    },
    {
     "id": "M16-S",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Ușa de sus a coloanei M16",
     "x": 315,
     "lat": 60,
     "h": 190,
     "inalt": 53,
     "adanc": 40,
     "finisaj": "nuc",
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "cererea din 03.11.2026",
     "nota": "Între h 190 și 243, cu rostul de jos la aceeași înălțime ca pe M13. Fără găuri: în spatele ei nu e aerul condiționat."
    },
    {
     "id": "M13",
     "strat": "mobila",
     "tip": "dulap",
     "nume": "Dulapul înalt M13: corpul cu două uși",
     "x": 375,
     "lat": 120,
     "h": 0,
     "inalt": 190,
     "adanc": 60,
     "fronturi": [
      {
       "lat": 1.8,
       "tip": "lateral"
      },
      {
       "lat": 58.2,
       "tip": "lemn"
      },
      {
       "lat": 58.2,
       "tip": "lemn"
      },
      {
       "lat": 1.8,
       "tip": "lateral"
      }
     ],
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "randările din 02.11.2026 (design/dormitor_mic.jpeg, dormitor_mic2.jpeg); analiza/06 v3 și decizia D26 (02.11.2026) (D-DM2, D-DM4); lărgit la 120 cm (02.11.2026); uși până la h 190 (03.11.2026)",
     "nota": "Două uși de ~58 cm, până la h 190; deasupra e compartimentul aerului condiționat (h 190–243). PAL H1775 ST12 Nuc Parona, ca M10 din living. Adâncime 60 cm; 55 dacă ușa de balcon U2 are balamalele spre S (se verifică pe teren). Ușile merg până la 190, nu 198, ca deasupra unității AC să rămână ~15 cm sub tavanul fals montat; înălțimea finală se ia din manualul modelului ales. Cu două bare de umerașe, fiecare rând are ~90 cm."
    },
    {
     "id": "M13-C",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Capacul fix, perforat, al compartimentului AC",
     "x": 375,
     "lat": 120,
     "h": 208,
     "inalt": 35,
     "adanc": 60,
     "finisaj": "nuc",
     "inFata": [
      "AC",
      "D2",
      "BL"
     ],
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "cererea din 02.11.2026 (AC în capul dulapului, cu front perforat); 03.11.2026",
     "nota": "Partea de sus a frontului, între h 208 și 243, pe toată lățimea. Pe aici intră aerul cald spre grila de sus a unității. Se demontează (clipsuri) pentru filtre și racorduri. Același PAL ca M13."
    },
    {
     "id": "CL",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Clapa fantei AC: vara se rabatează și intră sub unitate",
     "x": 375,
     "lat": 120,
     "h": 190,
     "inalt": 18,
     "adanc": 60,
     "finisaj": "nuc",
     "inFata": [
      "AC",
      "TB2"
     ],
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "cererea din 03.11.2026",
     "nota": "Între h 190 și 208, pe toată lățimea, perforată ca M13-C: iarna, închisă, se vede o singură bandă perforată. Vara se rabatează în jos și se împinge ~18 cm sub unitate, pe două glisiere cu extragere totală, iar aerul rece iese liber prin fantă. Se deschide cu push, de la marginea de sus. Înainte de pornirea AC-ului clapa trebuie deschisă; opțional, un contact pe clapă taie alimentarea de pe D2 cât timp e închisă."
    },
    {
     "id": "PF",
     "strat": "mobila",
     "tip": "perforatii",
     "nume": "Perforațiile din capacul M13-C și din clapa CL: Ø 3 cm la ~4,4 cm",
     "x": 379,
     "lat": 112,
     "h": 193,
     "inalt": 47,
     "n": 28,
     "randuri": 11,
     "diam": 3,
     "inFata": [
      "AC",
      "D2",
      "TB2",
      "BL"
     ],
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "cererea din 02.11.2026; calculul suprafeței libere (03.11.2026)",
     "nota": "11 rânduri × 28 de găuri Ø 3 cm, pe 112 × 47 cm: ~41% din zona perforată e gol. Pentru aspirație contează capacul fix (h 208–243): ~0,15 m² gol, prin care aerul trece cu ~1,1–1,3 m/s la 600–700 m³/h, viteza maximă a unei unități de 2,5 kW. Golurile rămân la ≥ 40% din suprafață; o perforație fină (găuri sub 1 cm) nu ajunge. Suprafața minimă se verifică în manualul unității alese."
    },
    {
     "id": "AC",
     "strat": "electric",
     "tip": "ac",
     "nume": "Unitatea interioară AC, în compartimentul de sus al dulapului M13",
     "x": 385,
     "lat": 80,
     "h": 197,
     "inalt": 29,
     "adanc": 20,
     "ascuns": true,
     "pozitie": "aprox",
     "in": "M13-C",
     "stare": "propunere",
     "sursa": "cererea din 02.11.2026; dimensiuni de split tipic de 2,5 kW (9.000 BTU); spațiul de deasupra după manualele LG și Pioneer (15–20 cm)",
     "nota": "Modelul nu e ales: desenat ca un split tipic de 2,5 kW pentru 12,4 mp, ~80 × 29 × 20 cm. Prins pe un panou-suport la ~34 cm de perete, cu fața la ~6 cm în spatele frontului, ca să aibă loc clapeta lui. Deasupra rămân ~15 cm până sub capacul dulapului; manualele cer de obicei 15–20 cm. Aerul cald intră prin capacul fix M13-C, cel rece iese prin fanta de jos, cu clapa CL deschisă. E lăsat la ~30 cm de peretele cu fereastra, ca să nu cadă pe o eventuală grindă GR-V. Aerul iese spre birou, nu spre pat."
    },
    {
     "id": "D2",
     "strat": "electric",
     "tip": "doza",
     "nume": "Doza AC-ului, pe circuit separat",
     "x": 472,
     "h": 236,
     "punct": true,
     "pozitie": "aprox",
     "in": "M13-C",
     "stare": "propunere",
     "sursa": "A.07 din living („unitățile se vor conecta direct la doză”); cererea din 02.11.2026",
     "nota": "Doză cu capac în compartimentul de sus, lângă unitate, accesibilă prin capacul M13-C. Circuit separat din tabloul nou."
    },
    {
     "id": "TB2",
     "strat": "electric",
     "tip": "tub",
     "nume": "Traseul de freon, condens și cablu spre unitatea exterioară",
     "x": 465,
     "lat": 30,
     "h": 192,
     "inalt": 4,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "cererea din 02.11.2026; specs/08 E",
     "nota": "Din capătul unității spre colțul cu peretele cu fereastra și prin zidăria fațadei, spre unitatea exterioară UE. Gaura e la h ~192–196, sub scurgerea unității (~h 198): condensul curge singur, cu pantă spre exterior."
    },
    {
     "id": "BL",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Placa scurtă cu garnitură, la marginea de jos a capacului fix",
     "x": 379,
     "lat": 112,
     "h": 208,
     "inalt": 1.5,
     "adanc": 6,
     "ascuns": true,
     "pozitie": "aprox",
     "in": "M13-C",
     "stare": "propunere",
     "sursa": "practica pentru unitățile AC mascate; de confirmat cu firma de AC",
     "nota": "Între fața unității și capacul fix, la h 208, pe ~6 cm adâncime, cu garnitură: aerul rece care iese prin fantă nu se întoarce în spatele capacului, spre aspirație."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "sursa": "hol.js U1 (balamalele spre S, A.01, A.06); analiza/06 v3, 3.1",
     "ids": [
      "M14",
      "TV"
     ],
     "text": "Foaia ușii U1 (82 cm), deschisă la 90°, stă lipită de acest perete pe primii ~85–90 cm de la colțul S-E. Consola M14 și televizorul încep la ≥ 105 cm de colț. La ~85 cm se pune un opritor de pardoseală. În randarea 1 consola începe de la toc: ușa s-ar deschide doar ~20°."
    },
    {
     "nivel": "info",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026)",
     "ids": [
      "TV",
      "P4",
      "TB1"
     ],
     "text": "Televizorul e desenat de 55\" (123 × 71 cm), centrat pe consola de 210 cm. P4 și tubul TB1 se fixează după televizorul cumpărat și suportul lui, înainte de tencuială."
    },
    {
     "nivel": "atentie",
     "sursa": "cererea din 02.11.2026 și din 03.11.2026; specs/08 E; manualele LG și Pioneer",
     "ids": [
      "AC",
      "M13",
      "M13-C",
      "CL",
      "PF",
      "BL"
     ],
     "text": "Unitatea AC din capul dulapului: modelul se alege înainte de comanda lui M13. Din manualul ei se iau spațiul liber de deasupra (desenat ~15 cm, cu ușile lui M13 până la h 190), suprafața liberă a capacului fix (acum ~40%) și locul scurgerii. Tavanul fals e deja montat, deci compartimentul crește doar în jos: dacă manualul cere mai mult, ușile coboară; dacă cere mai puțin, urcă. Vara clapa CL se rabatează sub unitate; cu clapa închisă, aerul rece ar sufla în capac."
    },
    {
     "nivel": "info",
     "sursa": "cererea din 03.11.2026; living.js M10 și M11",
     "ids": [
      "M16",
      "M14",
      "M13"
     ],
     "text": "Consola M14 iese din coloana M16: amândouă au 40 cm adâncime, deci fețele lor sunt în același plan. Treapta de 20 cm până la fața lui M13 e voită, ca între masca M11 și corpul M10 din living. Coloana și M13 sunt din nuc, cu rostul la aceeași înălțime (h 190); consola rămâne bej."
    }
   ]
  },
  {
   "id": "V",
   "nume": "Peretele cu fereastra",
   "subtitlu": "ușa de balcon, fereastra, caloriferul, scafa draperiei cu banda L1 · spre balconul 9",
   "lungime": 256,
   "origine": "colțul S-V, cu peretele TV (fața zidăriei, x = 0, y = 0 în planul camerei)",
   "etapa": 1,
   "plan": [
    [
     0,
     0
    ],
    [
     0,
     256
    ]
   ],
   "elemente": [
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Tavan fals din gips-carton (7 cm)",
     "x": 0,
     "lat": 256,
     "h": 243,
     "inalt": 7,
     "adanc": 256,
     "stare": "de-verificat",
     "sursa": "montat deja (spus de beneficiar pe 03.11.2026); analiza/06 v3 și decizia D26 (02.11.2026); ca TF1 din living (A.16, D-09)",
     "nota": "Montat deja. Desenat cu fața la ~243 cm și placa la ~250 cm, ca în living: de măsurat. Deasupra plăcii de 12,5 mm rămân ~5,75 cm, iar oferta LedHome cere min. 6 cm pentru șina SM: aceeași întrebare ca la șinele J și K din living (detaliul J-K). Același cod pe toți pereții și pe planul tavanului."
    },
    {
     "id": "M13",
     "strat": "mobila",
     "tip": "dulap",
     "nume": "Dulapul înalt M13 (din lateral)",
     "x": 0,
     "lat": 60,
     "h": 0,
     "inalt": 243,
     "adanc": 120,
     "vedereaPrincipala": "S",
     "fronturi": [
      {
       "lat": 60,
       "tip": "lateral"
      }
     ],
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "randările din 02.11.2026 (design/dormitor_mic.jpeg, dormitor_mic2.jpeg); analiza/06 v3 și decizia D26 (02.11.2026)",
     "nota": "Latura dulapului (60 cm adâncime, 120 cm lățime), lipită de zidărie. În capul lui e unitatea AC; traseul de freon și condens trece prin zidăria de aici spre unitatea exterioară. Se vede din față pe peretele TV."
    },
    {
     "id": "U2",
     "strat": "structura",
     "tip": "usa",
     "nume": "Ușa de balcon cu sticlă (85 cm)",
     "x": 65,
     "lat": 85,
     "h": 0,
     "inalt": 205,
     "sticla": true,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "releveu 2021 (citit pe imagine, ±5 cm)",
     "nota": "Tâmplărie PVC existentă, se păstrează. Releveul dă 85 × 205. Se deschide spre cameră; latura balamalelor nu e cunoscută (randarea arată mânerul spre fereastră, deci balamalele spre S). Trece prin planul draperiei: draperia se trage înainte de deschidere."
    },
    {
     "id": "F1",
     "strat": "structura",
     "tip": "fereastra",
     "nume": "Fereastra (~56 cm, un canat)",
     "x": 150,
     "lat": 56,
     "h": 82,
     "inalt": 120,
     "canaturi": 1,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "releveu 2021 (citit pe imagine, ±5 cm); pervazul și capul ca F1 din living",
     "nota": "Tâmplărie PVC existentă, se păstrează. Lățimea din releveu; pervazul ~82 și capul ~202 sunt luate ca în living (aceeași fațadă), de măsurat."
    },
    {
     "id": "CF1",
     "strat": "structura",
     "tip": "calorifer",
     "nume": "Calorifer Mexen CF33 600 × 400 sub fereastră",
     "x": 158,
     "lat": 40,
     "h": 10,
     "inalt": 60,
     "adanc": 16.4,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "analiza/08 D8 (28.10.2026); analiza/12",
     "nota": "Centrat sub F1. ~610 W la temperatura reală, pentru ~500 W necesar. Adâncime 16,4 cm, ca CF1 din living. Draperia trece prin fața lui, la ~15 cm."
    },
    {
     "id": "G4",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm, sub fereastră",
     "x": 150,
     "lat": 56,
     "h": 0,
     "inalt": 8,
     "stare": "propunere",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026)"
    },
    {
     "id": "UE",
     "strat": "structura",
     "tip": "ac",
     "nume": "Unitatea exterioară AC, pe fațadă (în spatele acestui perete)",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "cererea din 02.11.2026; specs/08 E",
     "nota": "Nu se vede din cameră. Balconul 9 e închis cu tâmplărie, deci unitatea nu stă în balcon: pe fațadă, lângă colțul cu peretele TV, unde ajunge traseul TB2 din dulapul M13. Montajul pe fațadă poate cere acordul asociației (D24)."
    },
    {
     "id": "GR-V",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda de deasupra ferestrei și a ușii de balcon (dedusă din living)",
     "x": 65,
     "lat": 141,
     "h": 205,
     "inalt": 45,
     "adanc": 27,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "living.js GR-V și ST-SV (aceeași fațadă); releveul nu arată grinzile",
     "nota": "În living, zidăria cu fereastra e retrasă 27 cm în spatele stâlpilor și al grinzii GR-V (fața de jos la ~205). Aici e desenată doar deasupra golurilor, până la stâlpul ST-NV. De verificat dacă există și dacă merge până la peretele TV."
    },
    {
     "id": "ST-NV",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Stâlpul din colțul N-V (spre living, lângă fereastră)",
     "x": 206,
     "lat": 50,
     "h": 0,
     "inalt": 250,
     "adanc": 27,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "releveu 2021 (citit pe imagine, ±5 cm)",
     "nota": "Iese 27 cm din peretele cu fereastra, pe 50 cm de la peretele N (releveu). Randările nu îl au. E în aceeași fațadă cu stâlpul ST-SV din living: probabil beton armat, fără șanțuri. Draperia trece prin fața lui."
    },
    {
     "id": "SC1",
     "strat": "gips",
     "tip": "scafa",
     "nume": "Scafa draperiei (fanta de 15 cm din fața grinzii)",
     "x": 60,
     "lat": 196,
     "h": 243,
     "inalt": 7,
     "adanc": 15,
     "ascuns": true,
     "stare": "propunere",
     "sursa": "analiza/06 v3 și decizia D26 (02.11.2026); ca SC din living (D-09)",
     "nota": "Între fața grinzii și a stâlpului (27 cm de zidărie) și marginea tavanului fals (42 cm), de la fața dulapului M13 (60) până la peretele N. În ea: șina dublă de draperie (perdea + draperie), la 4–10 cm de grindă, și banda L1, lipită de marginea tavanului fals."
    },
    {
     "id": "L1",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Banda LED din scafa draperiei",
     "x": 62,
     "lat": 192,
     "h": 243,
     "inalt": 1.5,
     "ascuns": true,
     "stare": "propunere",
     "sursa": "randările din 02.11.2026 (design/dormitor_mic.jpeg, dormitor_mic2.jpeg); analiza/06 v3 și decizia D26 (02.11.2026)",
     "nota": "COB 24 V 3000K CRI90 în profil, ~192 cm, luminează draperia. Aceeași sursă Push-DIM ca L2 și L3 (~70 W cu toate trei)."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "sursa": "releveu 2021 (citit pe imagine, ±5 cm); analiza/06 v3, 3.3",
     "ids": [
      "M13",
      "U2"
     ],
     "text": "Dulapul M13 se termină la ~5 cm de golul ușii de balcon. Dacă U2 are balamalele spre S, foaia deschisă stă în fața dulapului: mânerul atinge frontul pe la ~80–85°, iar dulapul nu se deschide cât ușa de balcon e deschisă. Atunci M13 se face de 55 cm adâncime (D-DM4)."
    },
    {
     "nivel": "atentie",
     "sursa": "living.js GR-V; analiza/06 v3, secțiunea 10",
     "ids": [
      "GR-V",
      "M13"
     ],
     "text": "Grinda GR-V e dedusă din living. Dacă merge până la peretele TV, dulapul M13 are în spate o treaptă la h 205 (27 cm adâncime), ca masca din living. Se verifică pe teren înainte de comanda dulapului."
    },
    {
     "nivel": "atentie",
     "sursa": "cererea din 02.11.2026; analiza/08 D24; analiza/10",
     "ids": [
      "UE",
      "M13"
     ],
     "text": "Unitatea exterioară AC nu poate sta în balconul 9, care e închis: aerul cald nu are pe unde ieși. Locul ei pe fațadă și acordul asociației se stabilesc odată cu unitatea livingului (D24). Gaura prin zidărie se face înainte de glet; dacă traseul atinge grinda GR-V sau un stâlp, doar cu acordul unui inginer de structură."
    },
    {
     "nivel": "info",
     "sursa": "releveu 2021 (citit pe imagine, ±5 cm)",
     "ids": [
      "F1",
      "U2"
     ],
     "text": "Lățimile golurilor sunt din releveu (fereastra ~56, ușa 85 × 205). Pervazul ferestrei, capul ei și latura balamalelor ușii de balcon se măsoară pe teren."
    }
   ]
  }
 ],
 "tavan": {
  "id": "T",
  "tip": "tavan",
  "nume": "Tavanul",
  "subtitlu": "vedere de sus · tavan fals de 7 cm, scafa draperiei cu banda L1, șina magnetică SM",
  "lungime": 495,
  "adancime": 256,
  "origine": "colțul S-V: fața zidăriei peretelui cu fereastra (x = 0) și a peretelui TV (y = 0)",
  "etapa": 1,
  "nota": "x de la peretele cu fereastra spre est, h = y de la peretele TV spre nord. Camera are 495 × 256 cm (releveu). Scafa e între fața grinzii (27) și marginea tavanului fals (42).",
  "elemente": [
   {
    "id": "TF1",
    "strat": "gips",
    "tip": "tavan-fals",
    "nume": "Tavan fals din gips-carton (7 cm)",
    "x": 42,
    "lat": 453,
    "h": 0,
    "inalt": 256,
    "stare": "de-verificat",
    "sursa": "montat deja (03.11.2026); analiza/06 v3 și decizia D26 (02.11.2026); ca TF1 din living",
    "nota": "Montat deja. Desenat cu fața de jos la ~243 cm, placa la ~250. Se oprește la scafa SC1 (x = 42). Deasupra plăcii rămân ~5,75 cm; LedHome cere min. 6 cm pentru șina SM (vezi avertismentul)."
   },
   {
    "id": "TF1-D",
    "strat": "gips",
    "tip": "tavan-fals",
    "nume": "Tavanul fals de deasupra dulapului M13",
    "x": 0,
    "lat": 42,
    "h": 0,
    "inalt": 60,
    "stare": "de-verificat",
    "sursa": "montat deja (03.11.2026); analiza/06 v3 și decizia D26 (02.11.2026)",
    "nota": "Montat deja, deci dulapul M13 nu poate urca până la placă. Deasupra dulapului, tavanul fals merge până la peretele cu fereastra. Scafa se oprește la fața dulapului (y = 60)."
   },
   {
    "id": "SC1",
    "strat": "gips",
    "tip": "scafa",
    "nume": "Scafa draperiei (fanta de 15 cm)",
    "x": 27,
    "lat": 15,
    "h": 60,
    "inalt": 196,
    "stare": "propunere",
    "sursa": "analiza/06 v3 și decizia D26 (02.11.2026); ca SC din living (D-09)",
    "nota": "Fanta dintre fața grinzii și a stâlpului (x = 27) și marginea tavanului fals (x = 42), de la dulap (y = 60) până la peretele N."
   },
   {
    "id": "L1",
    "strat": "led",
    "tip": "banda-led",
    "nume": "Banda LED din scafa draperiei",
    "x": 40,
    "lat": 1.5,
    "h": 62,
    "inalt": 192,
    "stare": "propunere",
    "sursa": "analiza/06 v3 și decizia D26 (02.11.2026)",
    "nota": "Lipită de marginea tavanului fals, ~192 cm."
   },
   {
    "id": "GR-V",
    "strat": "structura",
    "tip": "grinda",
    "nume": "Grinda de deasupra ferestrei și a ușii de balcon (dedusă din living)",
    "x": 0,
    "lat": 27,
    "h": 65,
    "inalt": 141,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "living.js GR-V; releveul nu arată grinzile",
    "nota": "Fața de jos la ~205. De verificat dacă există și dacă merge până la peretele TV."
   },
   {
    "id": "ST-NV",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Stâlpul din colțul N-V (spre living, lângă fereastră)",
    "x": 0,
    "lat": 27,
    "h": 206,
    "inalt": 50,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "releveu 2021 (citit pe imagine, ±5 cm)",
    "nota": "Iese 27 cm din peretele cu fereastra, pe 50 cm de la peretele N (releveu). Randările nu îl au. E în aceeași fațadă cu stâlpul ST-SV din living: probabil beton armat, fără șanțuri. Draperia trece prin fața lui."
   },
   {
    "id": "ST-NE",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Stâlpul din colțul N-E (spre living și hol)",
    "x": 478,
    "lat": 17,
    "h": 204,
    "inalt": 52,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "releveu 2021 (citit pe imagine, ±5 cm)",
    "nota": "Iese 17 cm din peretele cu ușa, pe 52 cm de la peretele N (releveu). E același stâlp cu ST2 din living (18,1 cm). Randările nu îl au. Tăblia patului M15-T se sprijină pe fața lui."
   },
   {
    "id": "SM",
    "strat": "led",
    "tip": "sina",
    "nume": "Șina magnetică SM, 300 cm",
    "x": 100,
    "lat": 300,
    "h": 106,
    "inalt": 5,
    "pozitie": "aprox",
    "stare": "propunere",
    "sursa": "specs/04 A (oferta LedHome 6SVNKM3DY, „o șină de 3 m în dormitor”); analiza/06 v3",
    "nota": "Șină magnetică încastrată LedHome Pro Slim, neagră, trimless, 24 V: o bară de 2 m + una de 1 m, cu conector electric și mecanic pentru rigips. Pe lungimea camerei, cu axa la ~148 cm de peretele N, deasupra marginii patului și a culoarului. Sursă Push-DIM (de întrebat LedHome dacă modulele merg cu ea)."
   },
   {
    "id": "SM1",
    "strat": "led",
    "tip": "spot",
    "nume": "Spot magnetic SM1 (9 W, 36°)",
    "x": 160,
    "h": 108.5,
    "punct": true,
    "pozitie": "aprox",
    "stare": "propunere",
    "sursa": "specs/04 A; analiza/06 v3",
    "nota": "Modul magnetic: se mută pe șină. Spre birou."
   },
   {
    "id": "SM2",
    "strat": "led",
    "tip": "spot",
    "nume": "Modulul liniar SM2 (15 W)",
    "x": 250,
    "h": 108.5,
    "punct": true,
    "pozitie": "aprox",
    "stare": "propunere",
    "sursa": "specs/04 A; analiza/06 v3",
    "nota": "Deasupra culoarului dintre pat și consolă."
   },
   {
    "id": "SM3",
    "strat": "led",
    "tip": "spot",
    "nume": "Spot magnetic SM3 (9 W, 36°)",
    "x": 340,
    "h": 108.5,
    "punct": true,
    "pozitie": "aprox",
    "stare": "propunere",
    "sursa": "specs/04 A; analiza/06 v3",
    "nota": "Spre pat sau spre dulap."
   },
   {
    "id": "D1",
    "strat": "electric",
    "tip": "doza",
    "nume": "Doza de 230 V pentru cele 2 surse de 24 V",
    "x": 50,
    "h": 200,
    "punct": true,
    "pozitie": "aprox",
    "stare": "propunere",
    "sursa": "analiza/06 v3 și decizia D26 (02.11.2026)",
    "nota": "Deasupra tavanului fals, lângă scafă: sursa Push-DIM a șinei SM și sursa Push-DIM a benzilor L1, L2 și L3. Marginea verticală a tavanului fals închide golul spre scafă (ca în D-09 din living), deci la surse se ajunge printr-o trapă de vizitare lângă D1, sau marginea se lasă demontabilă. Cablurile de 24 V: spre L2 prin tavanul fals până la riflaj; spre L3 prin tavanul fals și un tub pe peretele TV."
   }
  ],
  "avertismente": [
   {
    "nivel": "atentie",
    "sursa": "spus de beneficiar pe 03.11.2026",
    "ids": [
     "TF1",
     "TF1-D",
     "SC1",
     "SM",
     "D1"
    ],
    "text": "Tavanul fals e deja montat. Desenul arată încă propunerea din analiza/06: fața la ~243, placa la ~250, scafa SC1 cu banda L1, șina SM încastrată și sursele de lângă D1. De măsurat înălțimile reale și de verificat ce s-a făcut din toate acestea. Ce nu s-a făcut încă (șina SM, trapa de lângă D1) se face prin decupaje în placa montată."
   },
   {
    "nivel": "atentie",
    "sursa": "specs/04 A; analiza/06 v3, 3.4",
    "ids": [
     "SM",
     "TF1"
    ],
    "text": "Șina SM e cea de 3 m din oferta LedHome: profil pentru placă de 12,5 mm, cu gol ≥ 6 cm deasupra. Tavanul fals de 7 cm lasă ~5,75 cm deasupra plăcii, ca în living (detaliul J-K). De hotărât cu LedHome: ajung 5,75 cm sau tavanul fals coboară cu ~0,5 cm. Lângă șină se pune un profil suplimentar al scheletului."
   },
   {
    "nivel": "info",
    "sursa": "detaliul PUSH; analiza/13",
    "ids": [
     "D1",
     "SM"
    ],
    "text": "Sursa 1-light cere minimum 45 W. Benzile L1–L3 au împreună ~70 W, deci merg pe o singură sursă. Șina are ~33 W: aceeași întrebare ca la bucătărie (analiza/13). Sursa LTECH LM-150-24-G1A2 dă 0–150 W."
   }
  ]
 }
};
