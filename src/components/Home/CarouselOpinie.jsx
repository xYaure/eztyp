import Carousel from 'react-bootstrap/Carousel'
import Zdj1 from '../../assets/opinie/opinia1.png'
import Zdj2 from '../../assets/opinie/opinia2.png'
import Zdj3 from '../../assets/opinie/opinia3.png'
import Zdj4 from '../../assets/opinie/opinia4.png'
import Zdj5 from '../../assets/opinie/opinia5.png'
import Zdj6 from '../../assets/opinie/opinia6.png'
import Zdj7 from '../../assets/opinie/opinia7.png'
import Zdj8 from '../../assets/opinie/opinia8.png'
import Zdj9 from '../../assets/opinie/opinia9.png'

const CarouselOpinie = () => {
    return (
        <div className='opinie'>
        <Carousel >
            <Carousel.Item interval={5000}>
                <img src={Zdj1} alt="" />
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img src={Zdj2} alt="" />
            </Carousel.Item >

            <Carousel.Item interval={5000}>
                <img src={Zdj3} alt="" />
            </Carousel.Item>
        </Carousel>
        <Carousel >
            <Carousel.Item interval={5000}>
                <img src={Zdj4} alt="" />
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img src={Zdj5} alt="" />
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img src={Zdj6} alt="" />
            </Carousel.Item>
        </Carousel>
        <Carousel >
            <Carousel.Item interval={5000}>
                <img src={Zdj7} alt="" />
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img src={Zdj8} alt="" />
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img src={Zdj9} alt="" />
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default CarouselOpinie