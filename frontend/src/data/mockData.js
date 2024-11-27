import { tokens } from "../theme";

export const mockDataClients = [
  {
    id: 1,
    name: "Jon Snow",
    cpf: "123.456.789-00", 
    birthdate: "1989-01-01", 
    phone: "(665)121-5454",
    email: "jonsnow@gmail.com",
    address: "Rua Won, 912, Alabama, 10001-000, SY"
  },
  {
    id: 2,
    name: "Cersei Lannister",
    cpf: "987.654.321-00", 
    birthdate: "1982-01-01", 
    phone: "(421)314-2288",
    email: "cerseilannister@gmail.com",
    address: "Rua Main, 1234, Centro, 10001-000, NY"
  },
  {
    id: 3,
    name: "Jaime Lannister",
    cpf: "321.654.987-00", 
    birthdate: "1979-01-01", 
    phone: "(422)982-6739",
    email: "jaimelannister@gmail.com",
    address: "Avenida Want, 3333, Estanza, 42125-000, NAY"
  },
  {
    id: 4,
    name: "Anya Stark",
    cpf: "741.852.963-00", 
    birthdate: "2008-01-01", 
    phone: "(921)425-6742",
    email: "anyastark@gmail.com",
    address: "Rua Main, 1514, Centro, 22298-000, NY"
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    cpf: "963.741.852-00", 
    birthdate: "1993-01-01", 
    phone: "(421)445-1189",
    email: "daenerystargaryen@gmail.com",
    address: "Avenida Welping, 11122, Bairro Tenting, 21321-000, CD"
  },
  {
    id: 6,
    name: "Ever Melisandre",
    cpf: "159.753.486-00", 
    birthdate: "1874-01-01", 
    phone: "(232)545-6483",
    email: "evermelisandre@gmail.com",
    address: "Rua Canvile, 1234, Esvazark, 10001-000, NY"
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    cpf: "852.147.369-00", 
    birthdate: "1980-01-01", 
    phone: "(543)124-0123",
    email: "ferraraclifford@gmail.com",
    address: "Rua Super, 22215, Everting, 51523-000, ZO"
  },
  {
    id: 8,
    name: "Rossini Frances",
    cpf: "258.369.147-00", 
    birthdate: "1988-01-01", 
    phone: "(222)444-5555",
    email: "rossinifrances@gmail.com",
    address: "Avenida Ever, 4123, Wentington, 14221-000, AD"
  },
  {
    id: 9,
    name: "Harvey Roxie",
    cpf: "753.159.258-00", 
    birthdate: "1959-01-01", 
    phone: "(444)555-6239",
    email: "harveyroxie@gmail.com",
    address: "Rua Avery, 51234, Bairro Cantory, 212412-000, ND"
  },
  {
    id: 10,
    name: "Enteri Redack",
    cpf: "963.258.741-00", 
    birthdate: "1982-01-01", 
    phone: "(222)444-5555",
    email: "enteriredack@gmail.com",
    address: "Avenida Easer, 4123, Wentington, 14221-000, AD"
  },
  {
    id: 11,
    name: "Steve Goodman",
    cpf: "159.753.852-00", 
    birthdate: "2013-01-01", 
    phone: "(444)555-6239",
    email: "stevegoodmane@gmail.com",
    address: "Rua Fiveton, 51234, CunFory, 212412-000, ND"
  }
];

export const mockDataSuppliers = [
  {
    id: 1,
    supplier: "Tech Solutions Ltda",
    cnpj: "12.345.678/0001-90",
    inCharge: "Carlos Silva",
    phone: "(11) 98765-4321",
    email: "contato@techsolutions.com.br",
    payment: ["Boleto", "Cartão de Crédito", "Transferência Bancária"],
    delivery: 5,
    address: "Rua dos Tecnólogos, 123, Tech Park, 01234-567, São Paulo, SP"
  },
  {
    id: 2,
    supplier: "EcoGoods Ltda",
    cnpj: "98.765.432/0001-12",
    inCharge: "Ana Costa",
    phone: "(21) 99876-5432",
    email: "suporte@ecogoods.com.br",
    payment: ["Boleto", "Pix", "Cartão de Crédito"],
    delivery: 7,
    address: "Avenida Verde, 456, EcoCentro, 23456-789, Rio de Janeiro, RJ"
  },
  {
    id: 3,
    supplier: "Fast Delivery Inc",
    cnpj: "23.456.789/0001-34",
    inCharge: "Rafael Lima",
    phone: "(41) 91234-5678",
    email: "contact@fastdelivery.com.br",
    payment: ["Cartão de Crédito", "Transferência Bancária"],
    delivery: 3,
    address: "Rua das Entregas, 789, Logística, 34567-890, Curitiba, PR"
  },
  {
    id: 4,
    supplier: "Fashion World Ltda",
    cnpj: "56.789.123/0001-56",
    inCharge: "Juliana Pereira",
    phone: "(51) 93322-4455",
    email: "atendimento@fashionworld.com.br",
    payment: ["Boleto", "Cartão de Crédito", "Pix"],
    delivery: 10,
    address: "Rua das Roupas, 101, Moda Fashion, 45678-123, Porto Alegre, RS"
  },
  {
    id: 5,
    supplier: "HomeTech Solutions",
    cnpj: "34.567.890/0001-78",
    inCharge: "Lucas Almeida",
    phone: "(61) 98888-9999",
    email: "info@hometechsolutions.com.br",
    payment: ["Boleto", "Cartão de Crédito", "Pix"],
    delivery: 6,
    address: "Quadra 2, Bloco B, 12, Tecnologia, 56789-234, Brasília, DF"
  },
  {
    id: 6,
    supplier: "Super Mercado S/A",
    cnpj: "45.678.901/0001-23",
    inCharge: "Fernanda Oliveira",
    phone: "(71) 99876-1122",
    email: "vendas@supermercado.com.br",
    payment: ["Boleto", "Pix", "Cartão de Débito"],
    delivery: 4,
    address: "Avenida Central, 200, Centro, 67890-345, Salvador, BA"
  },
  {
    id: 7,
    supplier: "Gourmet Foods Ltda",
    cnpj: "67.890.123/0001-45",
    inCharge: "Eduardo Souza",
    phone: "(11) 94567-1234",
    email: "contato@gourmetfoods.com.br",
    payment: ["Boleto", "Cartão de Crédito"],
    delivery: 12,
    address: "Rua do Sabor, 345, Gourmet, 78901-234, São Paulo, SP"
  },
  {
    id: 8,
    supplier: "Pet Shop Plus",
    cnpj: "12.345.678/0001-67",
    inCharge: "Patrícia Gomes",
    phone: "(85) 99865-4321",
    email: "atendimento@petshopplus.com.br",
    payment: ["Boleto", "Pix", "Cartão de Crédito"],
    delivery: 8,
    address: "Rua dos Animais, 567, Petópolis, 89012-345, Fortaleza, CE"
  },
  {
    id: 9,
    supplier: "Car Parts & Co",
    cnpj: "78.901.234/0001-89",
    inCharge: "Felipe Martins",
    phone: "(51) 99876-3344",
    email: "contato@carpartsco.com.br",
    payment: ["Boleto", "Transferência Bancária", "Cartão de Crédito"],
    delivery: 14,
    address: "Avenida dos Carros, 890, AutoPeças, 90123-456, Porto Alegre, RS"
  },
  {
    id: 10,
    supplier: "Books & More",
    cnpj: "23.456.789/0001-01",
    inCharge: "Mariana Alves",
    phone: "(61) 98123-4567",
    email: "suporte@booksandmore.com.br",
    payment: ["Boleto", "Cartão de Crédito", "Pix"],
    delivery: 5,
    address: "Rua dos Livros, 234, Livraria, 23456-789, Brasília, DF"
  }
];

export const mockDataEmployees = [
  {
    id: 1,
    name: "Ana Souza",
    cpf: "123.456.789-00",
    phone: "(11) 91234-5678",
    email: "ana.souza@email.com",
    hiredate: "2020-05-12",
    salary: 4500.00,
    role: "admin"
  },
  {
    id: 2,
    name: "Carlos Pereira",
    cpf: "987.654.321-00",
    phone: "(21) 98765-4321",
    email: "carlos.pereira@email.com",
    hiredate: "2019-03-25",
    salary: 5500.00,
    role: "gerente"
  },
  {
    id: 3,
    name: "Mariana Lima",
    cpf: "135.246.753-00",
    phone: "(31) 99876-5432",
    email: "mariana.lima@email.com",
    hiredate: "2021-06-30",
    salary: 3500.00,
    role: "atendente"
  },
  {
    id: 4,
    name: "Juliana Santos",
    cpf: "159.753.486-00",
    phone: "(61) 95463-5287",
    email: "juliana.santos@email.com",
    hiredate: "2022-02-20",
    salary: 3200.00,
    role: "atendente"
  },
  {
    id: 5,
    name: "Felipe Rocha",
    cpf: "741.852.963-00",
    phone: "(11) 98653-4521",
    email: "felipe.rocha@email.com",
    hiredate: "2021-07-13",
    salary: 4000.00,
    role: "atendente"
  }
];

export const mockDataProducts = [
  {
    id: 1,
    barcode: "1234567890123",
    product: "Paracetamol",
    category: "Analgésico",
    purchaseprice: 5.99,
    salesprice: 10.99,
    quantity: 30,
    supplier: "Laboratório A",
    freeprogram: false,
    recipe: false
  },
  {
    id: 2,
    barcode: "2345678901234",
    product: "Ibuprofeno",
    category: "Analgésico",
    purchaseprice: 7.49,
    salesprice: 13.49,
    quantity: 50,
    supplier: "Laboratório B",
    freeprogram: true,
    recipe: true
  },
  {
    id: 3,
    barcode: "3456789012345",
    product: "Dipirona",
    category: "Analgésico",
    purchaseprice: 3.99,
    salesprice: 8.99,
    quantity: 40,
    supplier: "Laboratório C",
    freeprogram: false,
    recipe: false
  },
  {
    id: 4,
    barcode: "4567890123456",
    product: "Amoxicilina",
    category: "Antibiótico",
    purchaseprice: 15.99,
    salesprice: 22.99,
    quantity: 20,
    supplier: "Laboratório D",
    freeprogram: true,
    recipe: true
  },
  {
    id: 5,
    barcode: "5678901234567",
    product: "Omeprazol",
    category: "Antiacido",
    purchaseprice: 10.49,
    salesprice: 18.99,
    quantity: 60,
    supplier: "Laboratório E",
    freeprogram: false,
    recipe: false
  },
  {
    id: 6,
    barcode: "6789012345678",
    product: "Losartana",
    category: "Antihipertensivo",
    purchaseprice: 20.00,
    salesprice: 28.00,
    quantity: 25,
    supplier: "Laboratório A",
    freeprogram: false,
    recipe: true
  },
  {
    id: 7,
    barcode: "7890123456789",
    product: "Loratadina",
    category: "Antialérgico",
    purchaseprice: 4.50,
    salesprice: 9.99,
    quantity: 70,
    supplier: "Laboratório B",
    freeprogram: false,
    recipe: false
  },
  {
    id: 8,
    barcode: "8901234567890",
    product: "Cefalexina",
    category: "Antibiótico",
    purchaseprice: 12.00,
    salesprice: 18.00,
    quantity: 15,
    supplier: "Laboratório C",
    freeprogram: false,
    recipe: true
  },
  {
    id: 9,
    barcode: "9012345678901",
    product: "Metformina",
    category: "Antidiabético",
    purchaseprice: 10.00,
    salesprice: 16.00,
    quantity: 45,
    supplier: "Laboratório D",
    freeprogram: true,
    recipe: true
  },
  {
    id: 10,
    barcode: "0123456789012",
    product: "Atorvastatina",
    category: "Antilipêmico",
    purchaseprice: 8.99,
    salesprice: 15.99,
    quantity: 35,
    supplier: "Laboratório E",
    freeprogram: false,
    recipe: true
  }
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
      {
        x: "boat",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "horse",
        y: 1,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 107,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
];