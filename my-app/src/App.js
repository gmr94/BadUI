import './App.css';

//function change

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Catinfo from './components/Catinfo';
import Catpics from './components/Catpics';
import React, { useEffect } from "react";

function App() {
  

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Catinfo" element={<Catinfo/>}/>
        <Route path="/Catpics" element={<Catpics/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;