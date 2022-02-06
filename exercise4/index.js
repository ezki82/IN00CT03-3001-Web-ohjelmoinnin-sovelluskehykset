const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;

const products = [
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

/*
API operations:
    /products:
        -POST: create new product (name, manufacturer, category, description, price, image)
        -GET: get all products
        -/:id GET: get single product
        -/:id PUT: modify product
        -GET: search product with name, manufacturer and/or category
*/
app.get('/', (req, res) => {
    res.send('API root');
})

app.post('/products', (req, res) => {
    res.send('create new product');
})

app.get('/products', (req, res) => {
    res.json(products);
})

app.get('/products/:id', (req, res) => {
    const foundIndex = -1;
    res.send('get single product');
})

app.put('/products/:id', (req, res) => {
    res.send('modify product');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})