import React from 'react'
import './faq.css'
import { Link } from 'react-router-dom'

const FAQ = () => {
  return (
    <section className='faq__container'>
    <header className='analizy__nav'>
        <p > <Link to="/" className='analizy__menu'>Strona główna</Link> / FAQ </p>
        <h1 className='analizy__title'>Najczęściej zadawane pytania</h1>
    </header>
    
</section>
  )
}

export default FAQ