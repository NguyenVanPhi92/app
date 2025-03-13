import Clock from '../assets/icons/Clock'
import Date from '../assets/icons/Date'
import Location from '../assets/icons/Location'
import Menu from '../assets/icons/Menu'
import Image, { hoursOptions, roomOptions, timeOptions } from '../contans/data'
import '../styles/cart.scss'
import { Button } from '../components/button'
import Select from 'react-select'
import { ChevronDown } from 'lucide-react'

const Home = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <div className='p-4 '>
        <div>
          <h1 className='text-[22px] mb-2 font-bold'>
            Personalize your <span>WITH</span> <p>experience</p>
          </h1>
          <p className='text-[16px]'>WITH accompany you at Tan Son Nhat Airport!</p>
        </div>

        <div className='mt-16'>
          {/* Check-in Time */}
          <div className='mb-4'>
            <label className='block text-[14px] font-semibold '>You are in</label>
            <Select
              options={timeOptions}
              //   value={checkInTime}
              //   onChange={setCheckInTime}
              className='mt-1 text-[12px] custom-select '
              components={{ DropdownIndicator: () => <ChevronDown className='text-gray-500' size={20} /> }}
            />
          </div>

          {/* Hours of Use */}
          <div className='mb-4'>
            <label className='block text-[14px] font-semibold '>Prefer Language</label>
            <Select
              options={hoursOptions}
              //   value={hours}
              //   onChange={setHours}
              className='mt-1 text-[12px] custom-select '
              components={{ DropdownIndicator: () => <ChevronDown className='text-gray-500' size={20} /> }}
            />
          </div>

          {/* Room Quantity */}
          <div className='mb-4'>
            <label className='block text-[14px] font-semibold'>Currency</label>
            <Select
              options={roomOptions}
              //   value={rooms}
              //   onChange={setRooms}
              className='mt-1 text-[12px] custom-select '
              components={{ DropdownIndicator: () => <ChevronDown className='text-gray-500' size={20} /> }}
            />
          </div>
        </div>
      </div>

      <Button name='order' path='menu' />
    </div>
  )
}

export default Home
