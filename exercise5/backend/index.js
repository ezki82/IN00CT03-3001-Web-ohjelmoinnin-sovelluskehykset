const express = require('express');
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3001;

let products = [
    {
    id: 1,
    name: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    manufacturer: "Apple",
    category: "smartphones",
    imageUrl: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    },
    {
    id: 2,
    name: "iPhone X",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    manufacturer: "Apple",
    category: "smartphones",
    imageUrl: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    },
    {
    id: 3,
    name: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    manufacturer: "Samsung",
    category: "smartphones",
    imageUrl: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
    },
    {
    id: 4,
    name: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    manufacturer: "OPPO",
    category: "smartphones",
    imageUrl: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
    },
    {
    id: 5,
    name: "Huawei P30",
    description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    manufacturer: "Huawei",
    category: "smartphones",
    imageUrl: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
    },
    {
    id: 6,
    name: "MacBook Pro",
    description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    manufacturer: "APPle",
    category: "laptops",
    imageUrl: "https://dummyjson.com/image/i/products/6/thumbnail.png",
    },
    {
    id: 7,
    name: "Samsung Galaxy Book",
    description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    manufacturer: "Samsung",
    category: "laptops",
    imageUrl: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
    },
    {
    id: 8,
    name: "Microsoft Surface Laptop 4",
    description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    manufacturer: "Microsoft Surface",
    category: "laptops",
    imageUrl: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
    },
    {
    id: 9,
    name: "Infinix INBOOK",
    description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    manufacturer: "Infinix",
    category: "laptops",
    imageUrl: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
    },
    {
    id: 10,
    name: "HP Pavilion 15-DK1056WM",
    description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    manufacturer: "HP Pavilion",
    category: "laptops",
    imageUrl: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
    },
    {
    id: 11,
    name: "perfume Oil",
    price: 13,
    manufacturer: "Impression of Acqua Di Gio",
    category: "fragrances",
    imageUrl: "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
    },
    {
    id: 12,
    name: "Brown Perfume",
    description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    price: 40,
    manufacturer: "Royal_Mirage",
    category: "fragrances",
    imageUrl: "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
    },
    {
    id: 13,
    name: "Fog Scent Xpressio Perfume",
    description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    price: 13,
    manufacturer: "Fog Scent Xpressio",
    category: "fragrances",
    imageUrl: "https://dummyjson.com/image/i/products/13/thumbnail.webp",
    },
    {
    id: 14,
    name: "Non-Alcoholic Concentrated Perfume Oil",
    description: "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    price: 120,
    manufacturer: "Al Munakh",
    category: "fragrances",
    imageUrl: "https://dummyjson.com/image/i/products/14/thumbnail.jpg",
    },
    {
    id: 15,
    name: "Eau De Perfume Spray",
    description: "Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    price: 30,
    manufacturer: "Lord - Al-Rehab",
    category: "fragrances",
    imageUrl: "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
    },
    {
    id: 16,
    name: "Hyaluronic Acid Serum",
    description: "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    price: 19,
    manufacturer: "L'Oreal Paris",
    category: "skincare",
    imageUrl: "https://dummyjson.com/image/i/products/16/thumbnail.jpg",
    },
    {
    id: 17,
    name: "Tree Oil 30ml",
    description: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    price: 12,
    manufacturer: "Hemani Tea",
    category: "skincare",
    imageUrl: "https://dummyjson.com/image/i/products/17/thumbnail.jpg",
    },
    {
    id: 18,
    name: "Oil Free Moisturizer 100ml",
    description: "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
    price: 40,
    manufacturer: "Dermive",
    category: "skincare",
    imageUrl: "https://dummyjson.com/image/i/products/18/thumbnail.jpg",
    },
    {
    id: 19,
    name: "Skin Beauty Serum.",
    description: "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
    price: 46,
    manufacturer: "ROREC White Rice",
    category: "skincare",
    imageUrl: "https://dummyjson.com/image/i/products/19/thumbnail.jpg",
    },
    {
    id: 20,
    name: "Freckle Treatment Cream- 15gm",
    description: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    price: 70,
    manufacturer: "Fair & Clear",
    category: "skincare",
    imageUrl: "https://dummyjson.com/image/i/products/20/thumbnail.jpg",
    },
    {
    id: 21,
    name: "- Daal Masoor 500 grams",
    description: "Fine quality Branded Product Keep in a cool and dry place",
    price: 20,
    manufacturer: "Saaf & Khaas",
    category: "groceries",
    imageUrl: "https://dummyjson.com/image/i/products/21/thumbnail.png",
    },
    {
    id: 22,
    name: "Elbow Macaroni - 400 gm",
    description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    price: 14,
    manufacturer: "Bake Parlor Big",
    category: "groceries",
    imageUrl: "https://dummyjson.com/image/i/products/22/thumbnail.jpg",
    },
    {
    id: 23,
    name: "Orange Essence Food Flavou",
    description: "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
    price: 14,
    manufacturer: "Baking Food Items",
    category: "groceries",
    imageUrl: "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
    },
    {
    id: 24,
    name: "cereals muesli fruit nuts",
    description: "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
    price: 46,
    manufacturer: "fauji",
    category: "groceries",
    imageUrl: "https://dummyjson.com/image/i/products/24/thumbnail.jpg",
    },
    {
    id: 25,
    name: "Gulab Powder 50 Gram",
    description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
    price: 70,
    manufacturer: "Dry Rose",
    category: "groceries",
    imageUrl: "https://dummyjson.com/image/i/products/25/thumbnail.jpg",
    },
    {
    id: 26,
    name: "Plant Hanger For Home",
    description: "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    price: 41,
    manufacturer: "Boho Decor",
    category: "home-decoration",
    imageUrl: "https://dummyjson.com/image/i/products/26/thumbnail.jpg",
    },
    {
    id: 27,
    name: "Flying Wooden Bird",
    description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    price: 51,
    manufacturer: "Flying Wooden",
    category: "home-decoration",
    imageUrl: "https://dummyjson.com/image/i/products/27/thumbnail.webp",
    },
    {
    id: 28,
    name: "3D Embellishment Art Lamp",
    description: "3D led lamp sticker Wall sticker 3d wall art light on/off button cell operated (included)",
    price: 20,
    manufacturer: "LED Lights",
    category: "home-decoration",
    imageUrl: "https://dummyjson.com/image/i/products/28/thumbnail.jpg",
    },
    {
    id: 29,
    name: "Handcraft Chinese style",
    description: "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
    price: 60,
    manufacturer: "luxury palace",
    category: "home-decoration",
    imageUrl: "https://dummyjson.com/image/i/products/29/thumbnail.webp",
    },
    {
    id: 30,
    name: "Key Holder",
    description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    price: 30,
    manufacturer: "Golden",
    category: "home-decoration",
    imageUrl: "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    }
    ]

let users = [
    {
        id: "4f6e5w45e",
        name: "John Smith",
        address: "Lakeside 12 949494 Los Angeles",
        phoneNumber: "1121-5565-565"
    },
    {
        id: "54fe64fefe",
        name: "Andrea Smith",
        address: "Lakeside 12 949494 Los Angeles",
        phoneNumber: "1121-5565-565"
    },
    {
        id: "46f46f64e46e46",
        name: "James Lake",
        address: "Mount Hill 22 949494 San Francisco",
        phoneNumber: "2214-8496-974"
    }
    
]

let invoices = [];

app.use(cors());
app.use(express.json()); // replaces body parser in express 4.16 and later
app.use(express.static('build'));

const info = `
<div>
    API operations: <br/>
    <br/>
    /products:<br/>
    -/ POST: create new product (name, manufacturer, category, description, price, image) -DONE-<br/>
    -/ GET: get all products -DONE-<br/>
    -/:id GET: get single product -DONE-<br/>
    -/:id PUT: modify product -DONE-<br/>
    -?name=xxx&manufacturer=xxx&category=xxx GET: search product with name, manufacturer and category -DONE-<br/>
    <br/>
    /user:<br/>
    -/ GET: get all users, <b>for testing only</b> -DONE- <br/>
    -/ POST: create new user (name, address, phoneNumber) -DONE-<br/>
    <br/>
    /invoice:<br/>
    -/ GET: get user invoices -DONE-<br/>
    -/:id GET: get single invoice -DONE-<br/>
    -/:id DELETE: delete single invoice -DONE-<br/>
    <br/>
    /purchase: <br/>
    -/ POST: purchase product(s) for user. Makes invoice for user -DONE-<br/>
</div>
`

app.get('/', (req, res) => {
    res.send(info);
})

app.get('/products/:id', (req, res) => {
    const searchedProduct = products.find(p => p.id.toString() === req.params.id);
    if (searchedProduct) {
        res.json(searchedProduct);
    }
    else {
        res.status(400).send({ error: 'Product not found'});
    }
})

app.get('/products', (req, res) => {
    let searchProducts = products;
    if (req.query.name) {
        searchProducts = searchProducts.filter(p => p.name.toLowerCase().includes(req.query.name.toLowerCase()));
    }
    if (req.query.manufacturer) {
        searchProducts = searchProducts.filter(p => p.manufacturer.toLowerCase().includes(req.query.manufacturer.toLowerCase()));
    }
    if (req.query.category) {
        searchProducts = searchProducts.filter(p => p.category.toLowerCase().includes(req.query.category.toLowerCase()));
    }
    res.json(searchProducts);
})

app.post('/products', (req, res) => {
    const newProduct = {
        id: uuidv4(),
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        imageUrl: req.body.imageUrl
    };
    products = products.concat(newProduct);
    res.json(products.find(p => p.id.toString() === newProduct.id));
})

app.put('/products/:id', (req, res) => {
    const updateProduct = products.find(p => p.id.toString() === req.params.id);
    if (updateProduct) {
        const updatedProduct = {...req.body, id: updateProduct.id}
        products = products.map(p => p.id.toString() === updatedProduct.id ? updatedProduct : p);
        res.json(updatedProduct);
    }
    else {
        res.status(400).send({ error: 'Product not found'});
    }
})

app.delete('/products/:id', (req, res) => {
    const deleteProduct = products.find(p => p.id.toString() === req.params.id);
    if (deleteProduct) {
        products = products.filter(p => p.id.toString() !== req.params.id)
        res.json(deleteProduct);
    }
    else {
        res.status(400).send({ error: 'Product not found'});
    }
});

app.get('/user', (req, res) => {
    res.json(users);
})

app.post('/user', (req, res) => {
    const newUser = {
        id: uuidv4(),
        name: req.body.name,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber
    };
    users = users.concat(newUser);
    res.json(users.find(p => p.id.toString() === newUser.id));
})

app.get('/invoice', (req, res) => {
    res.json(invoices);
})

app.get('/invoice/:id', (req, res) => {
    const searchedInvoice = invoices.find(i => i.id === req.params.id);
    if (searchedInvoice) {
        res.json(searchedInvoice);
    }
    else {
        res.status(400).send({ error: 'Invoice not found'});
    }
})

app.delete('/invoice/:id', (req, res) => {
    const deleteInvoice = invoices.find(i => i.id === req.params.id);
    if (deleteInvoice) {
        invoices = invoices.filter(i => i.id !== req.params.id)
        res.json(deleteInvoice);
    }
    else {
        res.status(400).send({ error: 'Invoice not found'});
    }
})

app.post('/purchase', (req, res) => {
    const purchaseUser = users.find(u => u.id === req.body.userid)
    if (!purchaseUser) {
        res.status(400).send({ error: 'User not found'});
    }
    let newInvoice = {
        id: uuidv4(),
        user: purchaseUser,
        products: []
    }
    req.body.products.forEach(p => {
        const newProduct = products.find(product => p.id.toString() === product.id.toString());
        if (newProduct) {
            newInvoice.products.push(newProduct);
        }
    });
    if (newInvoice.products.length <= 0) {
        res.status(400).send({ error: 'No products found for invoice'})
    }
    newInvoice.totalSum = newInvoice.products.reduce((sum, product) => sum + product.price, 0);
    invoices = invoices.concat(newInvoice);
    res.json(newInvoice);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})