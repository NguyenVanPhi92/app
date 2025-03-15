import { ChevronDown } from 'lucide-react'
import Select from 'react-select'
import { Button } from '../components/button'
import { hoursOptions, roomOptions, TravelSelect } from '../constants/data'

const SelectPage = () => {
  return (
    <div className='flex flex-col justify-between p-4 main '>
      <div className=''>
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
              options={TravelSelect}
              // value={checkInTime}
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

      <Button name='Start' path='home' />
    </div>
  )
}

export default SelectPage
