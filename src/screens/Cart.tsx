import { Button } from '../components/button'
import Goback from '../components/Goback'
import Image from '../constants/data'
import '../styles/cart.scss'

const Cart = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <div>
        <header>
          <Goback />
          <p>Your Cart</p>
          <div className=''></div>
        </header>
        <main className='card-list'>
          {Array.from({ length: 6 }, (_, i) => (
            <div className='cart' key={i}>
              <img src={Image} alt='img' />
              <div className='cart-content'>
                <div className='cart-content__title'>
                  <h3 className='font-[600] text-[12px]'>Dish Name</h3>
                  <p className='text-[10px]'>Dish Description</p>
                </div>
                <div className='flex justify-between'>
                  <div className='flex items-center gap-x-4'>
                    <p className='px-[6px] rounded-full text-white bg-[#354f79]'>-</p>
                    <span>1</span>
                    <p className='px-[6px] rounded-full text-white bg-[#354f79]'>+</p>
                  </div>
                  <p className='text-[12px]'>$ 5.00</p>
                </div>
              </div>
            </div>
          ))}
        </main>
        <div className='flex justify-between px-4'>
          <p className=''>Total</p>
          <p className='font-bold'>$20.00</p>
        </div>
      </div>

      <div className='p-4'>
        <Button name='Checkout' path='checkout' />
      </div>
    </div>
  )
}

export default Cart
