import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import Appointment from './pages/appointments/Appointment';
import Home from './pages/home/Home';
import Medicines from './pages/medicines/Medicines';
import MentalHealth from './pages/mentalHealth/MentalHealth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saude-mental" element={<MentalHealth />} />
      <Route path="/consultas" element={<Appointment />} />
      <Route path="/medicamentos" element={<Medicines />} />
    </Routes>
  );
}

export default App;
