import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateShortUrl from './components/CreateShortUrl';
import ShortUrlRedirect from './components/ShortUrlRedirect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<CreateShortUrl/>} />
        <Route path="/:shortUrl" element={<ShortUrlRedirect/>} />
      </Routes>
    </Router>
  );
}

export default App;
