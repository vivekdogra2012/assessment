import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import List from './components/ListPage';

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/list" element={<List favorites={favorites} setFavorites={setFavorites} />} />
      </Routes>
    </Router>
  );
}

export default App;