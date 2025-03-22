import { Link } from 'react-router'
import QR from '../assets/icons/QR'
import Sticky from '../assets/icons/Sticky'
import Goback from '../components/Goback'
const QrPage = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <div className='fixed top-0 z-10 p-4 flex justify-center bg-white w-[430px]'>
        <div className='absolute left-4'>
          <Goback />
        </div>
        <p className='font-bold'>Checkout</p>
      </div>

      <div className='mt-6 body'>
        <div className='flex justify-between p-4 my-4 text-sm'>
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
            <div className='bg-[#b4dbff] rounded-full w-[36px] h-[36px] flex justify-center items-center font-bold p-2'>
              <Sticky />
            </div>
            <p className=''>Payment</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-y-2'>
            <div className='bg-[#354f79] rounded-full w-[36px] flex justify-center items-center font-bold py-2 text-white'>
              4
            </div>
            <p className='font-bold'>Pick Up</p>
          </div>
        </div>

        <div className='my-10'>
          <h4 className='font-bold text-[18px] text-center w-[80%] m-auto'>
            Come to the court and scan QR code to pick up your order!
          </h4>
        </div>

        <div className='my-10'>
          <QR />
        </div>
      </div>
      <div className='p-4 m-4 mb-0'>
        <Link
          to='/checkout'
          className='border-2 border-[#354f79] flex items-center justify-center p-3 rounded-xl gap-x-2'
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='13' height='12' viewBox='0 0 13 12' fill='none'>
            <path
              d='M4.4996 8.33493L6.4996 10.3349M6.4996 10.3349L8.4996 8.33493M6.4996 10.3349V5.83493M10.9396 8.87993C11.3743 8.57425 11.7003 8.138 11.8702 7.6345C12.0402 7.131 12.0453 6.58644 11.8848 6.07984C11.7243 5.57324 11.4065 5.13097 10.9776 4.81721C10.5487 4.50344 10.031 4.33451 9.4996 4.33493H8.8696C8.71922 3.74886 8.43785 3.20455 8.04666 2.74297C7.65548 2.28138 7.16467 1.91456 6.6112 1.6701C6.05774 1.42565 5.45602 1.30994 4.85136 1.33169C4.2467 1.35343 3.65486 1.51206 3.12038 1.79564C2.5859 2.07922 2.12271 2.48035 1.76569 2.96884C1.40868 3.45733 1.16713 4.02045 1.05923 4.6158C0.951335 5.21115 0.979905 5.82322 1.14279 6.40594C1.30568 6.98865 1.59863 7.52682 1.9996 7.97993'
              stroke='#354F79'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <span className='font-bold text-[14px] text-[#354f79]'> Download QR Code</span>
        </Link>
      </div>
    </div>
  )
}

export default QrPage
