import { Link } from 'react-router'
import Header from '../components/Header'
import '../styles/dining.scss'
import Navbar from './Navbar'
import { Image } from '../constants/data'

const Dining = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <Header title='Dining' icon />

      <div className='scroll' style={{ height: 'calc(100vh - 7rem)' }}>
        <img src={Image} alt='img' className='scroll-img' />

        <div className='flex option'>
          <div className='option-item'>TERMINAL 1</div>
          <div className='option-item'>TERMINAL 2</div>
          <div className='option-item'>TERMINAL 3</div>
          <div className='option-item'>TERMINAL 4</div>
        </div>

        <div className='shop'>
          {Array.from({ length: 4 }, (_, i) => (
            <Link to='/store' className='shop-card' key={i}>
              <img src={Image} alt='img' />

              <div className='shop-card__content'>
                <div className='shop-card__content-title'>
                  <p>Shop</p>
                  <p>Location - Operations Hour</p>
                </div>
                <p className='p-1 flex items-center justify-center font-[600] text-[#354f79] bg-[#eaf2ff] w-[40px] rounded-full text-[10px]'>
                  TAG
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className='mb-2'>
        <Navbar />
      </div>
    </div>
  )
}

export default Dining
