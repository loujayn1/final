import React from 'react'
import { Link } from 'react-router-dom'
import background from '../assets/background.jpg'
import "../styles/Home.css";

export default function Home() {
  return (
    <div className='Home' style={{backgroundImage:`Url(${background})`}}>
        <div className='headercontainer' >
            <h1> MED TN </h1>
            <h3>SEARCH YOUR DOCTOR</h3>
            <Link to ="/Doctors">
            <button> See Doctors</button>
            </Link>
        </div>

    </div>
  )
}
