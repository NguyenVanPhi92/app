import { Link } from 'react-router'
import Header from '../components/Header'
import Image from '../constants/data'
import Navbar from './Navbar'

const Resting = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <div>
        <Header title='Resting' icon />

        <div className='scroll'>
          <img src={Image} alt='img' className='scroll-img' />

          <div className='flex option'>
            <div className='option-item'>TERMINAL 1</div>
            <div className='option-item'>TERMINAL 2</div>
            <div className='option-item'>CAFÉ</div>
            <div className='option-item'>QUICK BITES</div>
          </div>

          <div className='shop'>
            {Array.from({ length: 4 }, (_, i) => (
              <Link to='/sleepzone' className='shop-card' key={i}>
                <img src={Image} alt='img' />

                <div className='shop-card__content'>
                  <div className='shop-card__content-title'>
                    <p>Sleep Zone</p>
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
      </div>

      <Navbar />
    </div>
  )
}

export default Resting
