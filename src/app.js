import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import clientRoutes from './routes/clients.js';
import programRoutes from './routes/programs.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/clients', clientRoutes);
app.use('/api/programs', programRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello Welcome @Dennis_Wambua Health Program API');
});

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

export default app; // Export the app for testing