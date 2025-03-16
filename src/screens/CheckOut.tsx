import RadioFill from '../assets/icons/RadioFill'
import RadioOutline from '../assets/icons/RadioOutline'
import Sticky from '../assets/icons/Sticky'
import { Button } from '../components/button'
import Header from '../components/Header'
// import '../styles/checkout.scss'
const Checkout = () => {
  return (
    <div className='flex flex-col justify-between p-4 main'>
      <div className=''>
        <Header title='Checkout' />

        <div className='flex justify-between my-6 text-sm'>
          <div className='flex flex-col items-center justify-center gap-y-2'>
            <div className='bg-[#b4dbff] rounded-full w-[36px] h-[36px] flex justify-center items-center font-bold p-2'>
              <Sticky />
            </div>
            <p className=''>Your Cart</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-y-2'>
            <div className='bg-[#b4dbff] rounded-full w-[36px] h-[36px] flex justify-center items-center font-bold p-2'>
              <Sticky />
            </div>
            <p className=''>Checkout</p>
          </div>

          <div className='flex flex-col items-center justify-center gap-y-2'>
            <div className='bg-[#354f79] rounded-full w-[36px] flex justify-center items-center font-bold py-2 text-white'>
              3
            </div>
            <p className=''>Payment</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-y-2'>
            <div className='bg-[#f8f9fe] rounded-full w-[36px] flex justify-center items-center font-bold py-2 text-[#a3a3a3]'>
              4
            </div>
            <p className='text-[#a3a3a3] font-bold'>Pick Up</p>
          </div>
        </div>

        <div className='mt-16 mb-10 text-left '>
          <h4 className='mb-2 text-xl font-bold'>Choose a payment method</h4>
          <p className='text-[#6f6f6f] text-sm'>You won't be charged until you review the order on the next page</p>
        </div>

        <div className='flex flex-col gap-y-4'>
          <div className='flex gap-x-3 items-center p-4 border border-[#D4D6DD] rounded-2xl'>
            <RadioFill />
            <p className='font-bold text-[#71727A] text-[14px]'>Credit Card</p>
          </div>
          <div className='flex gap-x-3 items-center p-4 border border-[#D4D6DD] rounded-2xl'>
            <RadioOutline />
            <p className='font-bold text-[#71727A] text-[14px]'>Debit Card</p>
          </div>
          <div className='flex gap-x-3 items-center p-4 border border-[#D4D6DD] rounded-2xl'>
            <RadioOutline />
            <p className='font-bold text-[#71727A] text-[14px]'>Cash Payment</p>
          </div>
        </div>
      </div>

      <Button name='Next' path='qr' />
    </div>
  )
}

export default Checkout
