import React from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import About from './pages/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Doctors" element={<Doctors/>}/>
        <Route path="/About" element={<About/>}/>

        


      </Routes>
      </BrowserRouter>

    </div>
  )
}
