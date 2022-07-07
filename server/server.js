import express from 'express';
import products from './data/Products.js';
import dotenv from 'dotenv';
import connectDataBase from './config/MongoDb.js';
import ImportData from './Dataimport.js';
import productRoute from './Routes/ProductRoutes.js'

dotenv.config();
connectDataBase();

const app = express();

// API
app.use('/api/import', ImportData);
app.use('/api/products', productRoute);

app.get('/', (reg, res) => {
  res.send('Api is running...');
})

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`Server run in port ${PORT}`));