import React from 'react'
import {Link } from "react-router-dom";
import './analizy.css'

const Analizy = () => {
  return (
    <section className='analizy__container'>
        <header className='analizy__nav'>
            <p > <Link to="/" className='analizy__menu'>Strona główna</Link> / Analizy </p>
            <h1 className='analizy__title'>Analizy</h1>
        </header>
    </section>
  )
}

export default Analizy