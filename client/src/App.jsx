import React, { useState } from 'react';
import UrlForm from './Components/UrlForm';
import UrlResult from './Components/UrlResult';
import './App.css';

function App() {
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="app-container">
      <h1>🔗 URL Shortener</h1>

      {/* ✅ Make sure you actually use it like this */}
      <UrlForm setShortUrl={setShortUrl} setError={setError} />
      <UrlResult shortUrl={shortUrl} error={error} />
    </div>
  );
}

export default App;