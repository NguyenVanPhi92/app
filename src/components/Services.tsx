import LeftArrow from '../assets/icons/LeftArrow'
import Search from '../assets/icons/Search'
import '../styles/services.scss'
import Navbar from './Navbar'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const Services = () => {
  return (
    <div className='main'>
      <header>
        <div className=''>
          <LeftArrow />
        </div>
        <p>Airport Services</p>
        <div className=''>
          <Search />
        </div>
      </header>

      <div className='concept'>
        <div className='select flex'>
          <div className='select-item'>
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
            <p>See more</p>
          </div>

          <div className='dining-shop'>
            {Array.from({ length: 4 }, (_, i) => (
              <div className='dining-shop__card' key={i}>
                <img
                  src='https://plus.unsplash.com/premium_photo-1740992237716-2bb9f560cc6b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
                  alt='img'
                />
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
            <p>RESTING</p>
            <p>See more</p>
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
                <img
                  src='https://plus.unsplash.com/premium_photo-1740992237716-2bb9f560cc6b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
                  alt='img'
                />
                <div className='resting-card__item--title'>
                  <p>Shop</p>
                  <p>Location - Operations Hour</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='shopping'>
          <div className='shopping-title flex'>
            <p>SHOPPING</p>
            <p>See more</p>
          </div>

          <div className='shopping-card'>
            {Array.from({ length: 4 }, (_, i) => (
              <div className='shopping-card__item' key={i}>
                <span className='tag'>TAG</span>
                <img
                  src='https://plus.unsplash.com/premium_photo-1740992237716-2bb9f560cc6b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
                  alt='img'
                />
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
