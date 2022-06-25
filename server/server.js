import express from 'express';
import products from './data/Products.js';

const app = express();

// Load products from server
app.get('/api/products', (reg, res) => {
  res.json(products);
})

// Single product from server
app.get('/api/products/:id', (reg, res) => {
  const product = products.find((p) => p._id == reg.params.id);
  res.json(product);
})

app.get('/', (reg, res) => {
  res.send('Api is running...');
})

app.listen(5000, console.log('Server running...'));