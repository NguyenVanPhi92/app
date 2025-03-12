import { Link } from 'react-router'
import LeftArrow from '../assets/icons/LeftArrow'
import { Button } from './button'
import '../styles/cart.scss'
import Image from '../contans/data'

const Cart = () => {
  return (
    <div className='main'>
      <header>
        <Link to='/menu' className=''>
          <LeftArrow />
        </Link>
        <p>Your Cart</p>
        <div className=''></div>
      </header>
      <main className='card-list'>
        {Array.from({ length: 6 }, (_, i) => (
          <div className='cart' key={i}>
            <img src={Image} alt='img' />
            <div className='cart-content'>
              <div className='cart-content__title'>
                <h3>Dish Name</h3>
                <p>Dish Description</p>
              </div>
              <div className='cart-content__count'>
                <div className='counter'>
                  <p>-</p>
                  <span>1</span>
                  <p>+</p>
                </div>
                <p>$ 5.00</p>
              </div>
            </div>
          </div>
        ))}
      </main>
      <div className='total'>
        <p className='total-title'>Total</p>
        <p className='total-price'>$20.00</p>
      </div>
      <Button name='Checkout' path='checkout' />
    </div>
  )
}

export default Cart
