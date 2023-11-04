import React from 'react'
import { Link } from 'react-router-dom'
import './omnie.css'
import IMG from '../../assets/omnie.png'
import tenis from '../../assets/oferty_img/tenis.jpg'
import pilka from '../../assets/oferty_img/pilka.jpg'
import { BsCheckCircleFill } from 'react-icons/bs'


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
              <p>Nazywam się Adam. Od 3 lat zajmuję się profesjonalną analizą sportową. Długo szukałem swojego sposobu na życie, ale nie chciałem rezygnować ze swojej pasji, którą jest sport. Od najmłodszych lat oglądałem dużo meczy. Z czasem nauczyłem się wiązać fakty, 
              a to przynosiło rezultaty w postaci dobrze wytypowanych wyników. Dlatego w wieku 18 lat zająłem się tym na poważnie.</p>
            </div>
          </section>
          <section className='omnie__analiza'>
            <h1>Co analizuję?</h1>
            <div className='omnie__analiza_container'>
              <div className="omnie__analiza-left">
                <img src={tenis} alt="" />
                <h2>Tenis</h2>
              </div>
              <div className="omnie__analiza-right">
                <img src={pilka} alt="" />
                <h2>Piłka nożna</h2>
              </div>
            </div>
          </section>
          <section className='omnie__choose'>
            <h1>Dlaczego warto mnie wybrać?</h1>
            <h2><BsCheckCircleFill/> Oferuję profesjonalną analizę sportową.</h2>
            <h2><BsCheckCircleFill/> racuję z zaangażowaniem, aby dostarczyć Ci jak najlepsze prognozy.</h2>
            <h2><BsCheckCircleFill/> Nie jestem tylko analitykiem, ale też wielkim fanem sportu.</h2>
            <h2><BsCheckCircleFill/> Nie jestem tylko analitykiem, ale też wielkim fanem sportu.</h2>
            <h2><BsCheckCircleFill/> Jestem otwarty na kontakt i chętnie porozmawiam o Twoich potrzebach i oczekiwaniach.</h2>
          </section>
        </section>
    </div>
  )
}

export default Omnie