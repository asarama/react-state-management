
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import A from './pages/A';
import B from './pages/B';

  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<A />} />
        <Route path='/a' element={<A />} />
        <Route path='/b' element={<B />} />
      </Routes>
    </Router>
  );
}
  
export default App;