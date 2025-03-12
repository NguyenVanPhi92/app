import { Link } from 'react-router'
import LeftArrow from '../assets/icons/LeftArrow'
import { Button } from './button'
import '../styles/cart.scss'
import Image from '../contans/data'

const Cart = () => {
  return (
    <div className='main flex justify-between flex-col'>
      <div>
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
                  <h3 className='font-[600] text-[12px]'>Dish Name</h3>
                  <p className='text-[10px]'>Dish Description</p>
                </div>
                <div className='flex justify-between'>
                  <div className='flex gap-x-4 items-center'>
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

      <Button name='Checkout' path='checkout' />
    </div>
  )
}

export default Cart
