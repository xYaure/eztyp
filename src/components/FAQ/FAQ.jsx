import React, { useState } from 'react'
import './faq.css'
import { Link } from 'react-router-dom'
import { BiSolidRightArrow, BiSolidUpArrow } from 'react-icons/bi'
import data from "./data"

const FAQ = () => {

    const [activeId, setActiveId] = useState(null);
    const handleClick = (id)=> () => {
        const activeElement = data.find((item)=> item.id === id )
        activeElement && setActiveId(id)
    }

  return (
    <section className='faq__container'>
    <header className='analizy__nav'>
        <p > <Link to="/" className='analizy__menu'>Strona główna</Link> / FAQ </p>
        <h1 className='analizy__title'>Najczęściej zadawane pytania</h1>
    </header>
    <section className='faq'>
      {data.map(({id,question,answer}) => {
        return (
        <label >
          <p key={id} onClick={handleClick(id)} className='faq__question'> {id === activeId ? <BiSolidUpArrow /> : <BiSolidRightArrow />} {question} </p>
          <div className={id === activeId ? 'faq__answer' : ''}>
            <p> { answer }</p>
          </div>
        </label>
        )
      })}
    </section>
</section>
  )
}

export default FAQ