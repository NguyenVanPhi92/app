import { Link } from 'react-router'
import Bage from '../assets/icons/Bage'
import Plus from '../assets/icons/Plus'
import { Button } from '../components/button'
import Goback from '../components/Goback'
import Image from '../constants/data'
import '../styles/menu.scss'

const Menu = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <div className='h-[90vh] overflow-y-scroll scroll-smooth'>
        <header className='mb-6'>
          <Goback />
          <p>Burger King Menu</p>
          <Link to='/cart' className='relative'>
            <Bage />
            <span className='py-[2px] top-[10px] right-[-2px] absolute px-[5px] text-[8px] bg-[#354f79] rounded-full text-white'>
              9
            </span>
          </Link>
        </header>

        <div className='concept '>
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

      <div className='p-4'>
        <Button name='Go to card' path='cart' />
      </div>
    </div>
  )
}

export default Menu
