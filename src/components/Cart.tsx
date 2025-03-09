import { Link } from 'react-router'
import LeftArrow from '../assets/icons/LeftArrow'
import { Button } from './button'

const Cart = () => {
  return (
    <div className='main'>
      <header>
        <div className='search'>
          <LeftArrow />
        </div>
        <div className='bage'>Your Cart</div>
      </header>
      <main className='card-list'>
        {Array.from({ length: 6 }, (_, i) => (
          <div className='cart' key={i}>
            <img src='' alt='' />
            <div className='cart-content'>
              <div className='cart-content__title'>
                <h3>Dish Name</h3>
                <p>Dish Description</p>
              </div>
              <div className='cart-content__count'>
                <div className='counter'>
                  <span>-</span>1<span>+</span>
                </div>
                <p>$ 5.00</p>
              </div>
            </div>
          </div>
        ))}
      </main>

      <Link to='/checkout'>
        <Button name='checkout' />
      </Link>
    </div>
  )
}

export default Cart
