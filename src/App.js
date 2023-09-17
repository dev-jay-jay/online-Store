import React from 'react';
 import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Card/Footer';
import Header from './component/HeaderCompo/Header';
import Home from './component/Card/Home';
import Jewellery from './component/Jewellery';
import Electronic from './component/Electronic';
import Cloths from './component/Cloths';
//taliwind imported you can use it now in all component

function App() {

  

  return (
      <>
        <Header />
        {/* Nav Links  */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cloths' element={<Cloths />} />
          <Route path='/Electronic' element={<Electronic />} />
          <Route path='/Jewellery' element={<Jewellery />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;
