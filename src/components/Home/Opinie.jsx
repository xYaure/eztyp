import React from 'react'
import './opinie.css'
import CarouselOpinie from './CarouselOpinie'

const Opinie = () => {
  return (
    <section className='opinie__container'>
        <h2>Opinie od naszych klientów</h2>
        <CarouselOpinie />
    </section>
  )
}

export default Opinie