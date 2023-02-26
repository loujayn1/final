import React from 'react'
import Doctorlist from '../devdoctors/Doctorlist'
import '../styles/Doctors.css'

export default function Doctors() {
  return (
    <div className='doctors'>
        <h1>OUR DOCTORS</h1>
        <Doctorlist/>
    </div>
  )
}
