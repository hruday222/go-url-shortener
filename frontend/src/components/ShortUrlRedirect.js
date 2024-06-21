import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ShortUrlRedirect() {
  const { shortUrl } = useParams();

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await axios.get(`http://localhost:9808/${shortUrl}`);
        window.location.href = response.data.original_url;
      } catch (err) {
        console.error('Error fetching original URL', err);
      }
    };

    fetchOriginalUrl();
  }, [shortUrl]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

export default ShortUrlRedirect;
