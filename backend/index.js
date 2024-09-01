import express from 'express';
import cors from 'cors'

import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'

import connectDB from './config/db.js';

import errorMiddleware from './middleware/errorMiddleware.js';

const app = express();

app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); 

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/categories', categoryRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log('Serevr running on port 3000');
});