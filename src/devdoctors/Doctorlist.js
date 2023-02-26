import React from 'react'
import Doctor from './Doctor'
import database from './database';
import "./Doctorlist.css"

export default function Doctorlist() {
  return (
    <div className='list'>
        {database.map((ele)=>{
            return <Doctor
            name={ele.nom}
            image={ele.imageurl}
            specialite={ele.specialite}
            adresse={ele.adresse}
            rate={ele.rate}
            />
        })}
    </div>

  )
}
