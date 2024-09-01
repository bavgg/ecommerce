import express from 'express';
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import connectDB from './config/db.js';

const app = express();

app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); 

app.use('/api/products', productRoutes)
app.use('/api/categories', categoryRoutes)

app.listen(3000, () => {
  console.log('Serevr running on port 3000');
});