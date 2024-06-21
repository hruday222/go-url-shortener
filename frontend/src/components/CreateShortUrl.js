import React, { useState } from 'react';
import axios from 'axios';

function CreateShortUrl() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');

    try {
      const response = await axios.post('http://localhost:9808/create-short-url', {
        long_url: longUrl,
        user_id: 'your_user_id', // Replace with actual user ID
      });
      setShortUrl(response.data.short_url);
    } catch (err) {
      setError('Error creating short URL');
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter long URL"
          required
        />
        <button type="submit">Shorten URL</button>
      </form>
      {shortUrl && (
        <div>
          <p>Short URL: <a href={shortUrl}>{shortUrl}</a></p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default CreateShortUrl;
