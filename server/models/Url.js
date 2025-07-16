import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  shortId: { type: String, required: true, unique: true },
}, { timestamps: true });

export default mongoose.model('Url', UrlSchema);