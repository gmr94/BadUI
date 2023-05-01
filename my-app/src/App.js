import './App.css';

//function change
//to push a change

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Kittyinfo from './components/Kittyinfo';
import Kittypics from './components/Kittypics';
import React, { useEffect } from "react";

function App() {
  

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Kittyinfo" element={<Kittyinfo/>}/>
        <Route path="/Kittypics" element={<Kittypics/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;