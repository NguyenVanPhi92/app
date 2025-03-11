import { Link } from 'react-router'
import LeftArrow from '../assets/icons/LeftArrow'
import Sticky from '../assets/icons/Sticky'
import '../styles/checkout.scss'
import { Button } from './button'
const Checkout = () => {
  return (
    <div className='main'>
      <div className=''>
        <header>
          <Link to='/cart' className=''>
            <LeftArrow />
          </Link>
          <p>Checkout</p>
          <div className=''></div>
        </header>

        <div className='progress'>
          <div className='progress-item'>
            <div className='progress-item__icon'>
              <Sticky />
            </div>
            <div className='progress-item__name'>Your Cart</div>
          </div>
          <div className='progress-item'>
            <div className='progress-item__icon'>
              <Sticky />
            </div>
            <div className='progress-item__name'>Checkout</div>
          </div>
          <div className='progress-item '>
            <div className='progress-item__icon active'>3</div>
            <div className='progress-item__name'>Payment</div>
          </div>
          <div className='progress-item'>
            <div className='progress-item__icon yet'>4</div>
            <div className='progress-item__name'>Pickup</div>
          </div>
        </div>

        <div className='title'>
          <h4>Choose a payment method</h4>
          <p>You won't be charged until you review the order on the next page</p>
        </div>

        <div className='credit'>
          <div className='credit-card'>
            <p className='credit-card__icon'></p>
            <p className='credit-card__name'>Credit card</p>
          </div>
          <div className='credit-card'>
            <p className='credit-card__icon'></p>
            <p className='credit-card__name'>Debit card</p>
          </div>
          <div className='credit-card'>
            <p className='credit-card__icon'></p>
            <p className='credit-card__name'>Cash Payment</p>
          </div>
        </div>
      </div>

      <Link to='/qr'>
        <Button name='Next' />
      </Link>
    </div>
  )
}

export default Checkout
