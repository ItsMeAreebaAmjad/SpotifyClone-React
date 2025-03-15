import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage';
import Article1 from './Pages/Article1';
import Article2 from './Pages/Article2';
import Article3 from './Pages/Article3';
import Article4 from './Pages/Article4';
import Article5 from './Pages/Article5';
import Article6 from './Pages/Article6';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article1" element={<Article1 />} />
          <Route path="/article2" element={<Article2 />} />
          <Route path="/article3" element={<Article3 />} />
          <Route path="/article4" element={<Article4 />} />
          <Route path="/article5" element={<Article5 />} />
          <Route path="/article6" element={<Article6 />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
