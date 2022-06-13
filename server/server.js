import express from 'express';
import fs from 'fs';

const app = express();

// Load products from server
app.get('/products', (reg, res) => {
  const products = fs.readFileSync('data/Products.js', {encoding:'utf8'});
  res.send(products);
})

app.get('/', (reg, res) => {
  res.send('Api is running...');
})

app.listen(5000, console.log('Server running...'));