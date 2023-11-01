import React from 'react'
import { Link } from "react-router-dom";
import './kontakt.css'

const Kontakt = () => {
  return (
    <section className='kontakt__container'>
        <header className='analizy__nav'>
            <p > <Link to="/" className='analizy__menu'>Strona główna</Link> / Kontakt </p>
            <h1 className='analizy__title'>Kontakt</h1>
        </header>
        <div className='kontakt'>
            <h1>Skontaktować się ze mną możesz poprzez instagram</h1>
            <h2>Pisz śmiało</h2>
            <a target='_blank' href="https://www.instagram.com/eztyp_/">eztyp_</a>
        </div>
    </section>
  )
}

export default Kontakt