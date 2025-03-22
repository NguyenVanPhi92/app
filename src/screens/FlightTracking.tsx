import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { BsQrCodeScan } from 'react-icons/bs'
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'
import { IoSearchSharp } from 'react-icons/io5'
import { Link } from 'react-router'
import { CustomInput } from '../components/fields/DateField'
import Goback from '../components/Goback'
import { LightTracking } from '../constants/data'
import Navbar from './Navbar'

const FlightTracking = () => {
  const [activeTab, setActiveTab] = useState('arrival')
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div className=' main'>
      <div className='fixed top-0 z-10 p-4 flex justify-center bg-white w-[430px]'>
        <div className='absolute left-4'>
          <Goback />
        </div>
        <p className='font-bold'>Flight Tracking</p>
      </div>

      <img src={LightTracking} alt='img' className='w-full h-72' />
      <div className='p-4 '>
        <div className='flex items-center justify-between mb-6 cursor-pointer'>
          <p className='font-bold text-[#354f79]'>Find your flights</p>
          <p className='flex items-center bg-[#354f79] rounded-full px-3 py-1 text-[12px] text-white gap-x-1'>
            <IoSearchSharp />
            <span className='font-[500]'>Find</span>
          </p>
        </div>

        <div className='flex items-center pb-8 space-x-4 border-b border-[#C5C6CC]'>
          <div className='FlightTracking'>
            <div className=''>
              <DatePicker
                selected={selectedDate}
                onChange={(date: any) => setSelectedDate(date)}
                customInput={<CustomInput placeholderText='Today' />}
                dateFormat='dd/MM/yyyy'
              />
            </div>
          </div>

          <input
            type='text'
            placeholder='Flight No'
            className='w-full px-4 h-10 py-2 text-[#C5C6CC] border border-gray-300 outline-none rounded-2xl'
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
          <span className='font-bold text-[14px] text-[#354f79]'>Scan Boarding Pass</span>
        </Link>
      </div>

      <Navbar />
    </div>
  )
}

export default FlightTracking
