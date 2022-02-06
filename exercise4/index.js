const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;

let products = [
    {
        id: 'a3b70433-b2c9-428d-8a03-061a780566c9',
        name: "product 1",
        manufacturer: "man1",
        category: "cat1",
        description: "desc1",
        price: "1",
        imageUrl: "http://image.jpg"
    },
    {
        id: 'a3b70433-h4c9-428d-8a03-061a780566c9',
        name: "product 2",
        manufacturer: "man2",
        category: "cat2",
        description: "desc2",
        price: "2",
        imageUrl: "http://image2.jpg"
    }
]

app.use(express.json()); // replaces body parser in express 4.16 and later

const info = `
<div>
    API operations: <br/>
    <br/>
    /products:<br/>
    -/ POST: create new product (name, manufacturer, category, description, price, image) -DONE-<br/>
    -/ GET: get all products -DONE-<br/>
    -/:id GET: get single product<br/>
    -/:id PUT: modify product<br/>
    -/ GET: search product with name, manufacturer and/or category
</div>
`
app.get('/', (req, res) => {
    res.send(info);
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
    res.json(products.find(p => p.id === newProduct.id));
})

app.get('/products/:id', (req, res) => {
    const searchedProduct = products.find(p => p.id === req.params.id);
    if (searchedProduct) {
        res.json(searchedProduct);
    }
    else {
        res.status(400).send({ error: 'Product not found'});
    }
})

app.get('/products', (req, res) => {
    res.json(products);
})

app.put('/products/:id', (req, res) => {
    const updateProduct = products.find(p => p.id === req.params.id);
    if (updateProduct) {
        console.log()
        const updatedProduct = {...req.body, id: updateProduct.id}
        products = products.map(p => p.id === updatedProduct.id ? updatedProduct : p);
        res.json(updatedProduct);
    }
    else {
        res.status(400).send({ error: 'Product not found'});
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})