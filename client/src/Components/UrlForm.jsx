import React, { useState } from 'react';
import { shortenUrl } from '../api/urlService';

const UrlForm = ({ setShortUrl, setError }) => {
  const [longUrl, setLongUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const result = await shortenUrl(longUrl);
      setShortUrl(result.shortUrl);
    } catch (err) {
      setError('Failed to shorten URL.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="url-form">
      <input
        type="text"
        placeholder="Enter a long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default UrlForm;