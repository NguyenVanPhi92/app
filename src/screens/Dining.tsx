import { Link } from 'react-router'
import Search from '../assets/icons/Search'
import Goback from '../components/Goback'
import Image from '../constants/data'
import '../styles/dining.scss'
import Navbar from './Navbar'

const Dining = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <header className='px-6'>
        <Goback />
        <p>Dining</p>
        <div className=''>
          <Search />
        </div>
      </header>

      <div className='concept'>
        <img src={Image} alt='img' className='concept-img' />

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
