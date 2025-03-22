import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCheck, FaPlus } from 'react-icons/fa'
import RadioFill from '../assets/icons/RadioFill'
import RadioOutline from '../assets/icons/RadioOutline'
import Sticky from '../assets/icons/Sticky'
import { Button } from '../components/button'
import Goback from '../components/Goback'
const Checkout = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='flex flex-col justify-between main'>
      <div className='fixed top-0 z-10 p-4 flex justify-center bg-white w-[430px]'>
        <div className='absolute left-4'>
          <Goback />
        </div>
        <p className='font-bold'>Checkout</p>
      </div>

      <div className='mt-10 body'>
        <div className='flex justify-between p-4 text-sm'>
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

        <div className='p-4 mt-6 text-left '>
          <h4 className='mb-2 text-xl font-bold'>Choose a payment method</h4>
          <p className='text-[#6f6f6f] text-sm'>You won't be charged until you review the order on the next page</p>
        </div>

        <div className='flex flex-col p-4 gap-y-4'>
          <div className='w-full max-w-md mx-auto border border-[#D4D6DD] rounded-2xl'>
            <button onClick={toggleCollapse} className='flex items-center p-4 gap-x-3'>
              <RadioFill />
              <p className='font-bold text-[#71727A] text-[14px]'>Credit Card</p>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='overflow-hidden'
            >
              <div className='m-4'>
                <div className='bg-[#eaf2ff] mb-4 p-4 rounded-xl flex items-center justify-between'>
                  <div className=''>
                    <p>Mastercard</p>
                    <p>xxxx xxxx xxxx 1234</p>
                  </div>
                  <FaCheck />
                </div>

                <div className='border p-4 mb-4 border-[#C5C6CC] rounded-xl flex items-center justify-between'>
                  <div className=''>
                    <p>Visa</p>
                    <p>xxxx xxxx xxxx 1234</p>
                  </div>
                </div>

                <button className='flex items-center mx-auto gap-x-2'>
                  <FaPlus color='#354f79' />
                  <p className='font-bold text-[#354f79] text-[14px]'>Add new card</p>
                </button>
              </div>
            </motion.div>
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

      <div className='p-4'>
        <Button name='Next' path='qr' />
      </div>
    </div>
  )
}

export default Checkout
