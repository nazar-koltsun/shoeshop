import express from 'express';
import products from './data/Products.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

// Load products from server
app.get('/api/products', (reg, res) => {
  res.json(products);
})

app.get('/', (reg, res) => {
  res.send('Api is running...');
})

app.listen(5000, console.log('Server running...'));