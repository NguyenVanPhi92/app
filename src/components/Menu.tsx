import { Link } from 'react-router'
import Bage from '../assets/icons/Bage'
import LeftArrow from '../assets/icons/LeftArrow'
import '../styles/menu.scss'
import { Button } from './button'
import Image from '../contans/data'
import Plus from '../assets/icons/Plus'

const Menu = () => {
  return (
    <div className='main'>
      <header>
        <Link to='/store' className=''>
          <LeftArrow />
        </Link>
        <p>Burger King Menu</p>
        <div className='bage'>
          <Bage />
          <span>9</span>
        </div>
      </header>

      <div className='concept'>
        <div className='menu'>
          {Array.from({ length: 6 }, (_, i) => (
            <div className='menu-card' key={i}>
              <img src={Image} alt='img' />
              <div className='menu-card__content'>
                <div className='menu-card__content-title'>
                  <p>Dish Name</p>
                  <p>$ 5.00</p>
                </div>
                <p className='menu-card__content-plus'>
                  <Plus />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button name='Go to card' path='cart' />
    </div>
  )
}

export default Menu
