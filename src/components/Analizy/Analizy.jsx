import React from 'react'
import { Link } from "react-router-dom";
import './analizy.css'
import Oferta from '../Home/Oferta';

const Analizy = () => {
  return (
    <>
    <section className='analizy__container'>
        <header className='analizy__nav'>
            <p > <Link to="/" className='analizy__menu'>Strona główna</Link> / Oferty </p>
            <h1 className='analizy__title'>Oferty</h1>
        </header>
    </section>
    <Oferta />
    </>
  )
}

export default Analizy