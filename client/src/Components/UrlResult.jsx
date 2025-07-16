import React from 'react';

const UrlResult = ({ shortUrl, error }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    alert('Copied to clipboard!');
  };

  return (
    <div className="url-result">
      {error && <p className="error">{error}</p>}
      {shortUrl && (
        <>
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
          <button onClick={handleCopy}>Copy</button>
        </>
      )}
    </div>
  );
};

export default UrlResult;