import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { BsQrCodeScan } from 'react-icons/bs'
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'
import { IoSearchSharp } from 'react-icons/io5'
import { Link } from 'react-router'
import { CustomInput } from '../components/fields/DateField'
import Goback from '../components/Goback'
import { FlightTrackingArrival, FlightTrackingDeparture, LightTracking } from '../constants/data'
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
      <div className='p-4'>
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

        <div className=''>
          <div className='flex justify-center p-1 rounded-lg my-4 bg-[#f8f9fe]'>
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

          {activeTab === 'arrival' &&
            FlightTrackingArrival.map((item, index) => (
              <div className='px-2 mb-4' key={index}>
                <div className='flex items-center justify-between w-full gap-x-4'>
                  <div className='text-2xl font-bold text-blue-900 min-w-28'>{item.flight_time}</div>

                  <div className='w-full'>
                    <div className='flex items-center justify-between gap-x-2'>
                      <FaPlaneArrival className='text-2xl text-blue-900' size={20} />
                      <div className='flex flex-col items-center'>
                        <div className='flex flex-col items-center gap-x-2'>
                          <span className='font-bold text-[12px]'>{item.from_code}</span>
                          <span className='text-gray-500 text-[12px]'>{item.from_name}</span>
                        </div>
                      </div>

                      <div className='font-bold text-[10px] text-black w-10'>--------</div>

                      <div className='flex flex-col items-center'>
                        <span className='font-bold text-[12px]'>{item.to_code}</span>
                        <span className='text-gray-500 text-[12px]'>{item.from_name}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex items-center gap-x-4'>
                  <div className='text-[14px] min-w-28'>
                    <p>{item.terminal}</p>
                    <p>{item.gate}</p>
                  </div>

                  <div className='flex items-center justify-between w-full gap-x-4'>
                    <div className='flex items-center gap-x-2'>
                      <img className='w-6 h-6 rounded-3xl' src={item.img} alt='' />
                      <p className='text-[14px]'>{item.airlines}</p>
                    </div>

                    <div className='flex items-center gap-x-2'>
                      <p className='text-[14px]'>{item.flight_code}</p>
                      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                        <rect width='24' height='24' rx='12' fill='#EAF2FF' />
                        <mask id='mask0_3710_2975' maskUnits='userSpaceOnUse' x='4' y='4' width='16' height='16'>
                          <path
                            d='M12.9997 5.33301C12.9997 4.78072 12.552 4.33301 11.9997 4.33301C11.4474 4.33301 10.9997 4.78072 10.9997 5.33301V10.9997H5.33301C4.78072 10.9997 4.33301 11.4474 4.33301 11.9997C4.33301 12.552 4.78072 12.9997 5.33301 12.9997H10.9997V18.6663C10.9997 19.2186 11.4474 19.6663 11.9997 19.6663C12.552 19.6663 12.9997 19.2186 12.9997 18.6663V12.9997H18.6663C19.2186 12.9997 19.6663 12.552 19.6663 11.9997C19.6663 11.4474 19.2186 10.9997 18.6663 10.9997H12.9997V5.33301Z'
                            fill='white'
                          />
                        </mask>
                        <g mask='url(#mask0_3710_2975)'>
                          <rect x='4' y='4' width='16' height='16' fill='#354F79' />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {activeTab === 'departure' &&
            FlightTrackingDeparture.map((item, index) => (
              <div className='px-2 mb-4' key={index}>
                <div className='flex items-center justify-between w-full gap-x-4'>
                  <div className='text-2xl font-bold text-blue-900 min-w-28'>{item.flight_time}</div>

                  <div className='w-full'>
                    <div className='flex items-center justify-between gap-x-2'>
                      <FaPlaneArrival className='text-2xl text-blue-900' size={20} />
                      <div className='flex flex-col items-center'>
                        <div className='flex flex-col items-center gap-x-2'>
                          <span className='font-bold text-[12px]'>{item.from_code}</span>
                          <span className='text-gray-500 text-[12px]'>{item.from_name}</span>
                        </div>
                      </div>

                      <div className='font-bold text-[10px] text-black w-10'>--------</div>

                      <div className='flex flex-col items-center'>
                        <span className='font-bold text-[12px]'>{item.to_code}</span>
                        <span className='text-gray-500 text-[12px]'>{item.from_name}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex items-center gap-x-4'>
                  <div className='text-[14px] min-w-28'>
                    <p>{item.terminal}</p>
                    <p>{item.gate}</p>
                  </div>

                  <div className='flex items-center justify-between w-full gap-x-4'>
                    <div className='flex items-center gap-x-2'>
                      <img className='w-6 h-6 rounded-3xl' src={item.img} alt='' />
                      <p className='text-[14px]'>{item.airlines}</p>
                    </div>

                    <div className='flex items-center gap-x-2'>
                      <p className='text-[14px]'>{item.flight_code}</p>
                      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                        <rect width='24' height='24' rx='12' fill='#EAF2FF' />
                        <mask id='mask0_3710_2975' maskUnits='userSpaceOnUse' x='4' y='4' width='16' height='16'>
                          <path
                            d='M12.9997 5.33301C12.9997 4.78072 12.552 4.33301 11.9997 4.33301C11.4474 4.33301 10.9997 4.78072 10.9997 5.33301V10.9997H5.33301C4.78072 10.9997 4.33301 11.4474 4.33301 11.9997C4.33301 12.552 4.78072 12.9997 5.33301 12.9997H10.9997V18.6663C10.9997 19.2186 11.4474 19.6663 11.9997 19.6663C12.552 19.6663 12.9997 19.2186 12.9997 18.6663V12.9997H18.6663C19.2186 12.9997 19.6663 12.552 19.6663 11.9997C19.6663 11.4474 19.2186 10.9997 18.6663 10.9997H12.9997V5.33301Z'
                            fill='white'
                          />
                        </mask>
                        <g mask='url(#mask0_3710_2975)'>
                          <rect x='4' y='4' width='16' height='16' fill='#354F79' />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
