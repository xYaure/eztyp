import React from 'react'
import './home.css'
import LOGO from '../../assets/money.png'
import Elementy from './Elementy'
import Opinie from './Opinie'
import Oferta from './Oferta'

const Home = () => {
  return (
    <>
    <section className='container'>
      <header className='home__header'>
        <div className="home__header_left">
          <h1 className='home__header_left_title'>EzTYP</h1>
          <h2 className='home__header_left_aside'>Największa skuteczność ponad <span>86%</span> !</h2>
          <button className='btn'>Sprawdź teraz!</button>
        </div>
        <div className="home__header_right">
          <img className='logo' src={LOGO} alt="" />
        </div>
      </header>
    </section>
    <Elementy />
    <Opinie />
    <Oferta />
    </>
  )
}

export default Home