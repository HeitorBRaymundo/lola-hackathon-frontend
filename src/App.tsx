import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/home/Home';
import MentalHealth from './pages/mentalHealth/MentalHealth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saude-mental" element={<MentalHealth />} />
    </Routes>
  );
}

export default App;
