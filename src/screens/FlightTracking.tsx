import { useState } from 'react'
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'
import { FiCalendar } from 'react-icons/fi'
import { IoSearchSharp } from 'react-icons/io5'
import { Link } from 'react-router'
import Header from '../components/Header'
import { BsQrCodeScan } from 'react-icons/bs'
import Image from '../constants/data'
import Navbar from './Navbar'

const FlightTracking = () => {
  const [activeTab, setActiveTab] = useState('arrival')
  return (
    <div className='flex flex-col justify-between main'>
      <div className='p-2'>
        <Header title='Flight Tracking' />
      </div>
      <img src={Image} alt='img' className='w-full' />

      <div className='p-4'>
        <div className='flex items-center justify-between mb-6 cursor-pointer'>
          <p className='font-bold text-[#354f79]'>Find your flights</p>
          <p className='flex items-center bg-[#354f79] rounded-full px-2 py-1 text-[12px] text-white gap-x-1'>
            <IoSearchSharp />
            <span className='font-[500]'>Find</span>
          </p>
        </div>

        <div className='flex pb-8 space-x-4 border-b border-[#C5C6CC]'>
          <div className='flex items-center px-4 py-2 border border-gray-300 rounded-2xl'>
            <span className='mr-2 text-gray-500'>Today</span>
            <FiCalendar className='text-[#C5C6CC]' />
          </div>

          <input
            type='text'
            placeholder='Flight No'
            className='w-full px-4 py-2 text-[#C5C6CC] border border-gray-300 outline-none rounded-2xl'
          />
        </div>

        <div className='flex flex-col items-center p-4 '>
          <div className='flex p-1 rounded-lg bg-[#f8f9fe]'>
            <button
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg ${
                activeTab === 'arrival' ? 'bg-white' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('arrival')}
            >
              <FaPlaneArrival color='#354f79' />
              <span className='text-[#354f79] font-bold'>Arrival</span>
            </button>
            <button
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg ${
                activeTab === 'departure' ? 'bg-white' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('departure')}
            >
              <FaPlaneDeparture color='#354f79' />
              <span className='text-[#71727A] font-bold'>Departure</span>
            </button>
          </div>

          <div className='flex gap-x-4'>
            <div className='mt-6 text-center'>
              <div className='text-3xl font-bold text-blue-900'>20:00</div>
              <div className='text-gray-500'>123456</div>
            </div>

            <div className='flex items-center mt-6 space-x-6'>
              <FaPlaneArrival className='text-2xl text-blue-900' />
              <div className='flex flex-col items-center'>
                <span className='font-bold text-[12px]'>DAD</span>
                <span className='text-gray-500 text-[12px]'>Da Nang</span>
              </div>

              <div className='font-bold text-[10px] text-black'>--------</div>

              <div className='flex flex-col items-center'>
                <span className='font-bold text-[12px]'>SGN</span>
                <span className='text-gray-500 text-[12px]'>Ho Chi Minh</span>
              </div>
            </div>
          </div>
        </div>

        <Link
          to='/checkout'
          className='border-2 border-[#354f79] mt-10 flex items-center justify-center p-3 rounded-xl gap-x-2'
        >
          <BsQrCodeScan color='#354f79' />
          <span className='font-bold text-[14px] text-[#354f79]'> Download QR Code</span>
        </Link>
      </div>

      <div className='mb-2'>
        <Navbar />
      </div>
    </div>
  )
}

export default FlightTracking
