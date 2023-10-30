import React from 'react'
import { BsFillPeopleFill, BsFillShieldFill } from 'react-icons/bs'
import { FaPeopleGroup } from 'react-icons/fa6'
import { GrTechnology } from 'react-icons/gr'
import './elementy.css'

const Elementy = () => {
  return (
    <section className='elementy__container'>
        <div className="elementy__wrapper">
            <div className="element">
                <i><FaPeopleGroup/></i>
                <h3>Doświadczenie i eksertyza</h3>
                <p>Nasz zespół jest pełen doświadczonych analityków sportowych</p>
            </div>
            <div className="element">
                <i><BsFillPeopleFill/></i>
                <h3>Indywidualne podejście</h3>
                <p>Oferujemy indywidualne konsultacje i dostosowujemy się do każdego klienta</p>
            </div>
            <div className="element">
                <i><GrTechnology/></i>
                <h3>Zaawansowane analizy</h3>
                <p>Wykorzystujemy najnowsze technologie i zaawansowane narzędzia do analizy statystyk</p>
            </div>
            <div className="element">
                <i><BsFillShieldFill/></i>
                <h3>Rzetelność</h3>
                <p>Nasze typy są oparte na solidnych analizach i niezależności</p>
            </div>
        </div>
    </section>
  )
}

export default Elementy