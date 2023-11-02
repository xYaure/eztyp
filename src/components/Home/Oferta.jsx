import React from 'react'
import './oferta.css'
import tenis from '../../assets/oferty_img/tenis.jpg'
import szkola from '../../assets/oferty_img/szkola.jpeg'
import kalendarz from '../../assets/oferty_img/kalendarz.jpg'
import koszykowka from '../../assets/oferty_img/koszykowka.jpg'
import pingpong from '../../assets/oferty_img/pingpong.jpg'
import pilka from '../../assets/oferty_img/pilka.jpg'
import { Link } from "react-router-dom";


const Oferta = () => {
  return (
    <section className='oferta__container'>
      <div className="oferta__title">
        <h1>Nasza oferta</h1>
      </div>
      <div className="oferty">
        <div className="oferta">
          <div className="oferta__zdj">
            <img className='oferta__zdjecie' src={tenis} alt="" />
            <div className="oferta__napis">
              <h2>Analiza Podstawowa</h2>
            </div>
          </div>
          <div className="oferta__nazwa">
            <h3>Kurs około 2 <span>19.99 zł</span></h3>
          </div>
          <Link to="/kontakt"  className='btn'>Zamów</Link>
        </div>
        <div className="oferta">
          <div className="oferta__zdj">
            <img className='oferta__zdjecie' src={pilka} alt="" />
            <div className="oferta__napis">
              <h2>Analiza Premium</h2>
            </div>
          </div>
          <div className="oferta__nazwa">
            <h3>Kurs około 3.5 <span>29.99 zł</span></h3>
          </div>
          <Link to="/kontakt"  className='btn'>Zamów</Link>
        </div>
        <div className="oferta">
          <div className="oferta__zdj">
            <img className='oferta__zdjecie' src={pingpong} alt="" />
            <div className="oferta__napis">
              <h2>Analiza VIP</h2>
            </div>
          </div>
          <div className="oferta__nazwa">
            <h3>Kurs około 4.5 <span>39.99 zł</span></h3>
          </div>
          <Link to="/kontakt"  className='btn'>Zamów</Link>
        </div>
        <div className="oferta">
          <div className="oferta__zdj">
            <img className='oferta__zdjecie' src={koszykowka} alt="" />
            <div className="oferta__napis">
              <h2>Analiza KING</h2>
            </div>
          </div>
          <div className="oferta__nazwa">
            <h3>Kurs około 6.5 <span>54.99 zł</span></h3>
          </div>
          <Link to="/kontakt"  className='btn'>Zamów</Link>
        </div>
        <div className="oferta">
          <div className="oferta__zdj">
            <img className='oferta__zdjecie' src={szkola} alt="" />
            <div className="oferta__napis">
              <h2>Nauka</h2>
            </div>
          </div>
          <div className="oferta__nazwa">
            <h3>Kurs Typowania od 0 <span>799 zł</span></h3>
          </div>
          <Link to="/kontakt"  className='btn'>Zamów</Link>
        </div>
      </div>
    </section>
  )
}

export default Oferta