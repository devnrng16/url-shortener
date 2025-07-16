import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/url'; // backend base URL

export const shortenUrl = async (longUrl) => {
  const response = await axios.post(API_BASE + '/shorten', { longUrl });
  return response.data;
};