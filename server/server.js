import express from 'express';
import products from './data/Products.js';

const app = express();

// Load products from server
app.get('/api/products', (reg, res) => {
  res.json(products);
})

app.get('/', (reg, res) => {
  res.send('Api is running...');
})

app.listen(5000, console.log('Server running...'));