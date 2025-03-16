import { Button } from '../components/button'
import Header from '../components/Header'
import Image from '../constants/data'
import '../styles/cart.scss'

const Cart = () => {
  return (
    <div className='flex flex-col justify-between p-4 main'>
      <div>
        <Header title='Your Cart' icon />

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
        <div className='flex justify-between mx-2'>
          <p className=''>Total</p>
          <p className='font-bold'>$20.00</p>
        </div>
      </div>

      <Button name='Checkout' path='checkout' />
    </div>
  )
}

export default Cart
