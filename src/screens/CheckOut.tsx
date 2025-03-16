import Sticky from '../assets/icons/Sticky'
import { Button } from '../components/button'
import Goback from '../components/Goback'
import Header from '../components/Header'
import '../styles/checkout.scss'
const Checkout = () => {
  return (
    <div className='flex flex-col justify-between p-4 main'>
      <div className=''>
        <Header title='Checkout' />

        <div className='text-sm progress'>
          <div className='progress-item '>
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

        <div className='p-4 text-left'>
          <h4 className='mb-2 text-xl font-bold'>Choose a payment method</h4>
          <p className='text-[#6f6f6f] text-sm'>You won't be charged until you review the order on the next page</p>
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

      <Button name='Next' path='qr' />
    </div>
  )
}

export default Checkout
