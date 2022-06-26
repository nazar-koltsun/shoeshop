import express from 'express';
import products from './data/Products.js';
import dotenv from 'dotenv';
import connectDataBase from './config/MongoDb.js';

dotenv.config();
connectDataBase();

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

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`Server run in port ${PORT}`));