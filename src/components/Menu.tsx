import { Link } from 'react-router'
import Bage from '../assets/icons/Bage'
import LeftArrow from '../assets/icons/LeftArrow'
import '../styles/menu.scss'
import { Button } from './button'
import Image from '../contans/data'
import Plus from '../assets/icons/Plus'

const Menu = () => {
  return (
    <div className='main flex flex-col justify-between'>
      <div>
        <header>
          <Link to='/store' className=''>
            <LeftArrow />
          </Link>
          <p>Burger King Menu</p>
          <div className='relative'>
            <Bage />
            <span className='py-[2px] top-[10px] right-[-2px] absolute px-[5px] text-[8px] bg-[#354f79] rounded-full text-white'>
              9
            </span>
          </div>
        </header>

        <div className='concept'>
          <div className='menu'>
            {Array.from({ length: 6 }, (_, i) => (
              <div className='menu-card' key={i}>
                <img src={Image} alt='img' />
                <div className='menu-card__content'>
                  <div className='menu-card__content-title'>
                    <p className='text-[12px]'>Dish Name</p>
                    <p className='text-[12px]'>$ 5.00</p>
                  </div>
                  <p className='menu-card__content-plus'>
                    <Plus />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button name='Go to card' path='cart' />
    </div>
  )
}

export default Menu
