import { Link } from 'react-router'
import LeftArrow from '../assets/icons/LeftArrow'
import Search from '../assets/icons/Search'
import Image from '../contans/data'
import '../styles/dining.scss'
import Navbar from './Navbar'

const Dining = () => {
  return (
    <div className='main'>
      <header>
        <Link to='/services' className=''>
          <LeftArrow />
        </Link>
        <p>Dining</p>
        <div className=''>
          <Search />
        </div>
      </header>

      <div className='concept'>
        <img src={Image} alt='img' className='concept-img' />

        <div className='option flex'>
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
                <p className='shop-card__content-tag'>TAG</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Navbar />
    </div>
  )
}

export default Dining
