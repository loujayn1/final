import React from 'react';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className='Navbar'>
        <div className='leftside'>
            <img src={logo} />
        </div>
        <div className='rightside'>
            <Link to="/Home">Home</Link>
            <Link to="/Doctors">Doctors</Link>
            <Link to="/About">About </Link>
        </div>
    </div>
  )
}
