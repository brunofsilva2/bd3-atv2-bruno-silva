const database = 'BD3-BRUNO-AULA';

const collection = 'BD3_ATV2_PRODUTOS';

use(database);

db[collection].insertMany(
    [
        {
            "codigo": 1,
            "nome": "Amoxicilina",
            "valor": 45.00,
            "quantidade_em_estoque": 50,
            "fabricante": "AstraZeneca",
            "categoria": "Antibiótico",
            "descricao": "Utilizado no tratamento de infecções bacterianas."
        },
        {
            "codigo": 2,
            "nome": "Ciprofloxacino",
            "valor": 55.00,
            "quantidade_em_estoque": 30,
            "fabricante": "Bayer",
            "categoria": "Antibiótico",
            "descricao": "Indicado para infecções do trato urinário."
        },
        {
            "codigo": 3,
            "nome": "Azitromicina",
            "valor": 60.00,
            "quantidade_em_estoque": 40,
            "fabricante": "Pfizer",
            "categoria": "Antibiótico",
            "descricao": "Usado no tratamento de infecções respiratórias."
        },
        {
            "codigo": 4,
            "nome": "Doxiciclina",
            "valor": 50.00,
            "quantidade_em_estoque": 25,
            "fabricante": "Mylan",
            "categoria": "Antibiótico",
            "descricao": "Eficaz contra várias infecções bacterianas."
        },
        {
            "codigo": 5,
            "nome": "Clindamicina",
            "valor": 70.00,
            "quantidade_em_estoque": 20,
            "fabricante": "Novartis",
            "categoria": "Antibiótico",
            "descricao": "Usado para tratar infecções graves."
        },
        {
            "codigo": 6,
            "nome": "Metronidazol",
            "valor": 40.00,
            "quantidade_em_estoque": 45,
            "fabricante": "Sanofi",
            "categoria": "Antibiótico",
            "descricao": "Tratamento de infecções parasitárias e bacterianas."
        },
        {
            "codigo": 7,
            "nome": "Cefalexina",
            "valor": 35.00,
            "quantidade_em_estoque": 60,
            "fabricante": "Teva",
            "categoria": "Antibiótico",
            "descricao": "Usado para infecções de pele e tecidos moles."
        },
        {
            "codigo": 8,
            "nome": "Ceftriaxona",
            "valor": 80.00,
            "quantidade_em_estoque": 15,
            "fabricante": "Roche",
            "categoria": "Antibiótico",
            "descricao": "Tratamento de infecções graves."
        },
        {
            "codigo": 9,
            "nome": "Nitrofurantoína",
            "valor": 30.00,
            "quantidade_em_estoque": 55,
            "fabricante": "Sandoz",
            "categoria": "Antibiótico",
            "descricao": "Usado no tratamento de infecções urinárias."
        },
        {
            "codigo": 10,
            "nome": "Vancomicina",
            "valor": 90.00,
            "quantidade_em_estoque": 10,
            "fabricante": "Aurobindo",
            "categoria": "Antibiótico",
            "descricao": "Eficaz contra infecções por estafilococos."
        },
        {
            "codigo": 11,
            "nome": "Ampicilina",
            "valor": 65.00,
            "quantidade_em_estoque": 35,
            "fabricante": "Bristol-Myers Squibb",
            "categoria": "Antibiótico",
            "descricao": "Tratamento de infecções respiratórias e urinárias."
        },
        {
            "codigo": 12,
            "nome": "Roxitromicina",
            "valor": 50.00,
            "quantidade_em_estoque": 25,
            "fabricante": "Searle",
            "categoria": "Antibiótico",
            "descricao": "Usado para infecções do trato respiratório."
        },
        {
            "codigo": 13,
            "nome": "Gentamicina",
            "valor": 55.00,
            "quantidade_em_estoque": 20,
            "fabricante": "Pfizer",
            "categoria": "Antibiótico",
            "descricao": "Tratamento de infecções graves."
        },
        {
            "codigo": 14,
            "nome": "Tetraciclina",
            "valor": 30.00,
            "quantidade_em_estoque": 40,
            "fabricante": "GSK",
            "categoria": "Antibiótico",
            "descricao": "Utilizado no tratamento de acne e infecções."
        },
        {
            "codigo": 15,
            "nome": "Fosfomicina",
            "valor": 25.00,
            "quantidade_em_estoque": 30,
            "fabricante": "Bayer",
            "categoria": "Antibiótico",
            "descricao": "Usado para infecções urinárias."
        },
        {
            "codigo": 16,
            "nome": "Alprazolam",
            "valor": 55.00,
            "quantidade_em_estoque": 40,
            "fabricante": "Roche",
            "categoria": "Controlado",
            "descricao": "Utilizado para o tratamento de ansiedade."
        },
        {
            "codigo": 17,
            "nome": "Fluoxetina",
            "valor": 70.00,
            "quantidade_em_estoque": 45,
            "fabricante": "Eli Lilly",
            "categoria": "Controlado",
            "descricao": "Medicamento antidepressivo."
        },
        {
            "codigo": 18,
            "nome": "Venlafaxina",
            "valor": 85.00,
            "quantidade_em_estoque": 28,
            "fabricante": "Wyeth",
            "categoria": "Controlado",
            "descricao": "Usado para depressão e ansiedade."
        },
        {
            "codigo": 19,
            "nome": "Buspirona",
            "valor": 60.00,
            "quantidade_em_estoque": 30,
            "fabricante": "Aché",
            "categoria": "Controlado",
            "descricao": "Indicado para transtornos de ansiedade."
        },
        {
            "codigo": 20,
            "nome": "Lisdexanfetamina",
            "valor": 210.00,
            "quantidade_em_estoque": 10,
            "fabricante": "Shire",
            "categoria": "Controlado",
            "descricao": "Usado para tratamento de TDAH."
        },
        {
            "codigo": 21,
            "nome": "Carbamazepina",
            "valor": 90.00,
            "quantidade_em_estoque": 20,
            "fabricante": "Medley",
            "categoria": "Controlado",
            "descricao": "Indicado para epilepsia e neuralgia."
        },
        {
            "codigo": 22,
            "nome": "Gabapentina",
            "valor": 100.00,
            "quantidade_em_estoque": 15,
            "fabricante": "Pfizer",
            "categoria": "Controlado",
            "descricao": "Utilizado para dor neuropática."
        },
        {
            "codigo": 23,
            "nome": "Pregabalina",
            "valor": 110.00,
            "quantidade_em_estoque": 18,
            "fabricante": "Pfizer",
            "categoria": "Controlado",
            "descricao": "Indicado para dor neuropática e transtornos de ansiedade."
        },
        {
            "codigo": 24,
            "nome": "Methylphenidate",
            "valor": 160.00,
            "quantidade_em_estoque": 12,
            "fabricante": "Novartis",
            "categoria": "Controlado",
            "descricao": "Usado no tratamento do TDAH."
        },
        {
            "codigo": 25,
            "nome": "Zolpidem",
            "valor": 95.00,
            "quantidade_em_estoque": 22,
            "fabricante": "Sanofi",
            "categoria": "Controlado",
            "descricao": "Indicado para insônia."
        },
        {
            "codigo": 26,
            "nome": "Esitalopram",
            "valor": 80.00,
            "quantidade_em_estoque": 25,
            "fabricante": "Lundbeck",
            "categoria": "Controlado",
            "descricao": "Antidepressivo usado para tratar depressão e ansiedade."
        },
        {
            "codigo": 27,
            "nome": "Sertralina",
            "valor": 70.00,
            "quantidade_em_estoque": 40,
            "fabricante": "Pfizer",
            "categoria": "Controlado",
            "descricao": "Indicado para tratamento de depressão e transtornos de ansiedade."
        },
        {
            "codigo": 28,
            "nome": "Sertralina",
            "valor": 70.00,
            "quantidade_em_estoque": 40,
            "fabricante": "Pfizer",
            "categoria": "Controlado",
            "descricao": "Indicado para tratamento de depressão e transtornos de ansiedade."
        },
        {
            "codigo": 29,
            "nome": "Bupropiona",
            "valor": 130.00,
            "quantidade_em_estoque": 14,
            "fabricante": "GlaxoSmithKline",
            "categoria": "Controlado",
            "descricao": "Usado no tratamento da depressão e para ajudar a parar de fumar."
        },
        {
            "codigo": 30,
            "nome": "Aripiprazol",
            "valor": 175.00,
            "quantidade_em_estoque": 16,
            "fabricante": "Otsuka",
            "categoria": "Controlado",
            "descricao": "Indicado para esquizofrenia e transtornos bipolares."
        },
        {
            "codigo": 31,
            "nome": "Clobazam",
            "valor": 85.00,
            "quantidade_em_estoque": 20,
            "fabricante": "Mylan",
            "categoria": "Controlado",
            "descricao": "Usado para tratamento de epilepsia."
        },
        {
            "codigo": 32,
            "nome": "Lithium Carbonate",
            "valor": 90.00,
            "quantidade_em_estoque": 18,
            "fabricante": "Sandoz",
            "categoria": "Controlado",
            "descricao": "Usado para tratamento de transtorno bipolar."
        },
        {
            "codigo": 33,
            "nome": "Vigabatrin",
            "valor": 150.00,
            "quantidade_em_estoque": 12,
            "fabricante": "Sanofi",
            "categoria": "Controlado",
            "descricao": "Indicado para epilepsia resistente a outros tratamentos."
        },
        {
            "codigo": 34,
            "nome": "Sodium Oxybate",
            "valor": 250.00,
            "quantidade_em_estoque": 8,
            "fabricante": "Jazz Pharmaceuticals",
            "categoria": "Controlado",
            "descricao": "Usado para tratar narcolepsia."
        },
        {
            "codigo": 35,
            "nome": "Naltrexone",
            "valor": 120.00,
            "quantidade_em_estoque": 20,
            "fabricante": "Alkermes",
            "categoria": "Controlado",
            "descricao": "Utilizado no tratamento de dependência de álcool e opioides."
        },
        {
            "codigo": 36,
            "nome": "Oxazepam",
            "valor": 65.00,
            "quantidade_em_estoque": 35,
            "fabricante": "Aché",
            "categoria": "Controlado",
            "descricao": "Indicado para o tratamento de ansiedade."
        },
        {
            "codigo": 37,
            "nome": "Chlordiazepoxide",
            "valor": 75.00,
            "quantidade_em_estoque": 27,
            "fabricante": "Aché",
            "categoria": "Controlado",
            "descricao": "Usado para tratar ansiedade e sintomas de abstinência."
        },
        {
            "codigo": 38,
            "nome": "Tramadol",
            "valor": 80.00,
            "quantidade_em_estoque": 30,
            "fabricante": "Ethiss",
            "categoria": "Controlado",
            "descricao": "Analgesia para dor moderada a grave."
        },
        {
            "codigo": 39,
            "nome": "Codeína",
            "valor": 60.00,
            "quantidade_em_estoque": 50,
            "fabricante": "Medley",
            "categoria": "Controlado",
            "descricao": "Usado como analgésico e antitussígeno."
        },
        {
            "codigo": 40,
            "nome": "Fentanil",
            "valor": 300.00,
            "quantidade_em_estoque": 10,
            "fabricante": "Janssen",
            "categoria": "Controlado",
            "descricao": "Analgesia potente para dor intensa."
        },
        {
            "codigo": 41,
            "nome": "Methadone",
            "valor": 90.00,
            "quantidade_em_estoque": 15,
            "fabricante": "Mylan",
            "categoria": "Controlado",
            "descricao": "Usado no tratamento de dependência de opioides."
        },
        {
            "codigo": 42,
            "nome": "Citalopram",
            "valor": 75.00,
            "quantidade_em_estoque": 35,
            "fabricante": "Lundbeck",
            "categoria": "Controlado",
            "descricao": "Usado para tratar depressão e transtornos de ansiedade."
        },
        {
            "codigo": 43,
            "nome": "Paracetamol",
            "valor": 20.00,
            "quantidade_em_estoque": 100,
            "fabricante": "Johnson & Johnson",
            "categoria": "Analgesico",
            "descricao": "Usado para aliviar dores e reduzir febre."
        },
        {
            "codigo": 44,
            "nome": "Ibuprofeno",
            "valor": 25.00,
            "quantidade_em_estoque": 80,
            "fabricante": "AbbVie",
            "categoria": "Analgesico",
            "descricao": "Utilizado para dor e inflamação."
        },
        {
            "codigo": 45,
            "nome": "Loratidina",
            "valor": 30.00,
            "quantidade_em_estoque": 75,
            "fabricante": "Boehringer Ingelheim",
            "categoria": "Antihistaminico",
            "descricao": "Usado para alívio de alergias."
        },
        {
            "codigo": 46,
            "nome": "Omeprazol",
            "valor": 40.00,
            "quantidade_em_estoque": 50,
            "fabricante": "AstraZeneca",
            "categoria": "Inibidor da bomba de prótons",
            "descricao": "Usado para tratar refluxo gastroesofágico."
        },
        {
            "codigo": 47,
            "nome": "Metformina",
            "valor": 35.00,
            "quantidade_em_estoque": 60,
            "fabricante": "Boehringer Ingelheim",
            "categoria": "Antidiabetico",
            "descricao": "Utilizado no tratamento do diabetes tipo 2."
        },
        {
            "codigo": 48,
            "nome": "Simvastatina",
            "valor": 50.00,
            "quantidade_em_estoque": 55,
            "fabricante": "Merck",
            "categoria": "Estatina",
            "descricao": "Usado para redução do colesterol."
        },
        {
            "codigo": 49,
            "nome": "Atenolol",
            "valor": 45.00,
            "quantidade_em_estoque": 40,
            "fabricante": "AstraZeneca",
            "categoria": "Betabloqueador",
            "descricao": "Usado no tratamento da hipertensão."
        },
        {
            "codigo": 50,
            "nome": "Losartana",
            "valor": 50.00,
            "quantidade_em_estoque": 30,
            "fabricante": "Merck",
            "categoria": "Antihipertensivo",
            "descricao": "Utilizado para tratar hipertensão."
        },
    ]
)