import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import analyzeRoute from './routes/analyze.js';
dotenv.config();

const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://resume-skill-analyzer-1ydt.vercel.app'
  ]
}));

app.use(express.json());

app.get('/', (req, res) => res.send('Resume Analyzer API running ✅'));
app.use('/api/analyze', analyzeRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
