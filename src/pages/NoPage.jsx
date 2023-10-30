import React from 'react'
import './nopage.css'
import {Link } from "react-router-dom";


const NoPage = () => {
  return (
    <div className='nopage'>
      <h1>Coś poszło nie tak</h1>
      <h3>Adres nieznaleziony</h3>
      <div className='dots'>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <Link to="/">Wróć</Link>
    </div>
  )
}

export default NoPage