import React from 'react'
import './opinie.css'
import opinia from '../../assets/opinie/opinia1.png'
import opinia2 from '../../assets/opinie/opinia2.png'
import opinia3 from '../../assets/opinie/opinia3.png'

const Opinie = () => {
  return (
    <section className='opinie__container'>
        <h2>Opinie od naszych klientów</h2>
        <div className='opinie'>
            <img src={opinia} alt="" />
            <img src={opinia2} alt="" />
            <img src={opinia3} alt="" />
        </div>
    </section>
  )
}

export default Opinie