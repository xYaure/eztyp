import React from 'react'
import { Link } from 'react-router-dom'
import './omnie.css'

const Omnie = () => {
  return (
    <section className='omnie__container'>
        <header className='analizy__nav'>
            <p > <Link to="/" className='analizy__menu'>Strona główna</Link> / O Mnie </p>
            <h1 className='analizy__title'>O Mnie</h1>
        </header>
        
    </section>
  )
}

export default Omnie