import LeftArrow from '../assets/icons/LeftArrow'
import Search from '../assets/icons/Search'
import '../styles/services.scss'
import Navbar from './Navbar'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Link } from 'react-router'
import Image from '../contans/data'

const Services = () => {
  return (
    <div className='main'>
      <header>
        <div className=''>
          <LeftArrow />
        </div>
        <p>Airport Services</p>
        <div className='icon-search'>
          <Search />
        </div>
      </header>

      <div className='concept'>
        <div className='select flex'>
          <div className='select-item active'>
            <span>All</span>
          </div>
          <span></span>
          <div className='select-item'>
            <span>Dining</span>
          </div>
          <span></span>
          <div className='select-item'>
            <span>Lounge & Rest</span>
          </div>
          <span></span>
          <div className='select-item'>
            <span>Shopping</span>
          </div>
        </div>

        <div className='option flex'>
          <div className='option-item'>TERMINAL 1</div>
          <div className='option-item'>TERMINAL 2</div>
          <div className='option-item'>TERMINAL 3</div>
          <div className='option-item'>TERMINAL 4</div>
        </div>

        <div className='dining'>
          <div className='dining-title flex'>
            <p>DINING</p>
            <Link to='/dining'>See more</Link>
          </div>

          <div className='dining-shop'>
            {Array.from({ length: 4 }, (_, i) => (
              <div className='dining-shop__card' key={i}>
                <img src={Image} alt='img' />
                <div className='dining-shop__card--title'>
                  <p>Shop</p>
                  <p>Location - Operations Hour</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='resting'>
          <div className='resting-title flex'>
            <p>LOUNGE & REST</p>
            <Link to='/resting'>See more</Link>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            centeredSlides={true}
            autoplay={{
              delay: 1500
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='resting-card'
          >
            {Array.from({ length: 8 }, (_, i) => (
              <SwiperSlide className='resting-card__item' key={i}>
                <img src={Image} alt='img' />
                <div className='resting-card__item--title'>
                  <p>Lounge</p>
                  <p>$ 12.00</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='shopping'>
          <div className='shopping-title flex'>
            <p>SHOPPING</p>
            <Link to='/shopping'>See more</Link>
          </div>

          <div className='shopping-card'>
            {Array.from({ length: 4 }, (_, i) => (
              <div className='shopping-card__item' key={i}>
                <span className='tag'>TAG</span>
                <img src={Image} alt='img' />
                <div className='shopping-card__item--title'>
                  <p>Shop</p>
                  <p>Location - Operations Hour</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  )
}

export default Services
