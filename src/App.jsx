import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Timer from './Components/Timer/Timer';
import Homepage from './Components/HomePage/Homepage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Homepage />}  />
        <Route path='/timer' element={<Timer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
