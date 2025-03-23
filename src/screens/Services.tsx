import { useState } from 'react'
import { Link } from 'react-router'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Header from '../components/Header'
import TerminalSelected from '../components/TerminalSelected'
import { Image } from '../constants/data'
import '../styles/services.scss'
import Navbar from './Navbar'

const optionTag = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Dining' },
  { id: 3, name: 'Lounge & Rest' },
  { id: 4, name: 'Shopping' }
]

const Services = () => {
  const [activeFilter, setActiveFilter] = useState<number | undefined>(1)
  return (
    <div className='flex flex-col justify-between main'>
      <Header title='Airport Service' icon />

      <div className='mt-12 mb-28 body'>
        <div className='flex select'>
          {optionTag.map((e, i) => (
            <>
              <div
                className={`select-item cursor-pointer ${activeFilter === e.id && 'active'}`}
                onClick={() => setActiveFilter(e.id)}
                key={i}
              >
                <span>{e.name}</span>
              </div>
              <span></span>
            </>
          ))}
        </div>

        <div className='my-4'>
          <TerminalSelected />
        </div>

        <div className='dining'>
          <div className='flex dining-title'>
            <p>DINING</p>
            <Link to='/dining'>See more</Link>
          </div>

          <div className='dining-shop'>
            {Array.from({ length: 4 }, (_, i) => (
              <Link to='/dining' className='dining-shop__card' key={i}>
                <img src={Image} alt='img' />
                <div className='dining-shop__card--title'>
                  <p>Shop</p>
                  <p>Location - Operations Hour</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className='resting'>
          <div className='flex resting-title'>
            <p>LOUNGE & REST</p>
            <Link to='/resting'>See more</Link>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={1.7}
            autoplay={{
              delay: 1500
            }}
            modules={[Autoplay]}
            className='resting-card'
          >
            {Array.from({ length: 8 }, (_, i) => (
              <SwiperSlide className='resting-card__item' key={i}>
                <Link to='/resting'>
                  <img src={Image} alt='img' className='object-cover' />
                  <div className='resting-card__item--title'>
                    <p>Lounge</p>
                    <p>$ 12.00</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='shopping'>
          <div className='flex shopping-title'>
            <p>SHOPPING</p>
            <Link to='/shopping'>See more</Link>
          </div>

          <div className='shopping-card'>
            {Array.from({ length: 4 }, (_, i) => (
              <Link to='/shopping' className='shopping-card__item' key={i}>
                <span className='tag'>TAG</span>
                <img src={Image} alt='img' />
                <div className='shopping-card__item--title'>
                  <p>Shop</p>
                  <p>Location - Operations Hour</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  )
}

export default Services
