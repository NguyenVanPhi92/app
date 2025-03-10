import Bage from '../assets/icons/Bage'
import LeftArrow from '../assets/icons/LeftArrow'
import '../styles/menu.scss'
import { Button } from './button'

const Menu = () => {
  return (
    <div className='main'>
      <header>
        <div className=''>
          <LeftArrow />
        </div>
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
              <img
                src='https://plus.unsplash.com/premium_photo-1740992237716-2bb9f560cc6b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
                alt='img'
              />
              <div className='menu-card__content'>
                <div className='title'>
                  <p>Dish Name</p>
                  <p>$ 5.00</p>
                </div>
                <p className='tag'>+</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button name='Go to card' />
    </div>
  )
}

export default Menu
