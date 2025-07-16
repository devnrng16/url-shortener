import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { nanoid } from 'nanoid';
import Url from './models/Url.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ Mongo error:', err));

// POST /api/url/shorten → Create short URL
app.post('/api/url/shorten', async (req, res) => {
  const { longUrl } = req.body;

  // Validate
  if (!longUrl) return res.status(400).json({ error: 'longUrl is required' });

  const shortId = nanoid(6);
  const shortUrl = '${process.env.BASE_URL}/${shortId}';

  try {
    const newUrl = new Url({ longUrl, shortUrl, shortId });
    await newUrl.save();
    res.json({ shortUrl });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// GET /:shortId → Redirect to long URL
app.get('/:shortId', async (req, res) => {
  const { shortId } = req.params;
  const record = await Url.findOne({ shortId });

  if (record) return res.redirect(record.longUrl);
  res.status(404).json({ error: 'Short URL not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on http://localhost:${PORT}'));