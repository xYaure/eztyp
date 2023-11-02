import React from 'react'
import { Link } from 'react-router-dom'
import './omnie.css'
import IMG from '../../assets/omnie.png'
import koszykowka from '../../assets/oferty_img/koszykowka.jpg'
import pilka from '../../assets/oferty_img/pilka.jpg'


const Omnie = () => {
  
  return (
    <div className='omnie__container'>
        <header className='analizy__nav'>
            <p > <Link to="/" className='analizy__menu'>Strona główna</Link> / O Mnie </p>
            <h1 className='analizy__title'>O Mnie</h1>
        </header>
        <section className='anim'>
          <section className='omnie'>
            <div className='omnie__img'>
              <img src={IMG} alt="" />
            </div>
            <div className="omnie__text">
              <h1>Cześć!</h1>
              <p>Nazywam się Łukasz. Od 3 lat zajmuję się profesjonalną analizą sportową. Długo szukałem swojego sposobu na życie, ale nie chciałem rezygnować ze swojej pasji, którą jest sport. Od najmłodszych lat oglądałem dużo meczy. Z czasem nauczyłem się wiązać fakty, 
              a to przynosiło rezultaty w postaci dobrze wytypowanych wyników. Dlatego w wieku 18 lat zająłem się tym na poważnie.</p>
            </div>
          </section>
          <section className='omnie__analiza'>
            <h1>Co analizuję?</h1>
            <div className='omnie__analiza_container'>
              <div className="omnie__analiza-left">
                <img src={koszykowka} alt="" />
                <h2>Koszykówka</h2>
              </div>
              <div className="omnie__analiza-right">
                <img src={pilka} alt="" />
                <h2>Piłka nożna</h2>
              </div>
            </div>
          </section>
        </section>
    </div>
  )
}

export default Omnie