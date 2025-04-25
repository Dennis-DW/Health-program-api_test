import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import clientRoutes from './routes/clients.js';
import programRoutes from './routes/programs.js';
import connectToDb from './database/mongodb.js';

const app = express();

dotenv.config();

app.use(express.json());
app.use('/api/clients', clientRoutes);
app.use('/api/programs', programRoutes);

mongoose.connect(process.env.MONGO_URI)
//   , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
.then(() => {
  app.get('/', (req, res) => {
    res.send('Hello Welcome @Dennis_Wambua Health Program API');
  });

  const PORT = process.env.PORT || 5000;
  
  app.listen(PORT, async () => {
    console.log(`Server running on port http://localhost:${PORT}`);

    await connectToDb();
  });
}).catch((err) => {
  console.error('Database connection error:', err);
});