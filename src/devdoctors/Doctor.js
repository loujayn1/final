import React from 'react'
import PropTypes from 'prop-types'
import "./doctor.css"

export default function Doctor(Props) {
  return (
    <div className='doctor'>
        <img src={Props.image} />
            <h2>{Props.name}</h2>
            <h3>{Props.specialite}</h3>
            <h3>{Props.adresse}</h3>
            <h3>{Props.rate}</h3>
    </div>
  )
}
