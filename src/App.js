import './App.css';
import React from 'react';
import GlobalStyles from './globalStyles';
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
