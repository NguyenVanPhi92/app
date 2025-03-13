import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import { Calendar, ChevronDown } from 'lucide-react'
import { hoursOptions, roomOptions, timeOptions } from '../contans/data'

const BookingForm = () => {
  const [date, setDate] = useState<Date | null>(null)
  const [checkInTime, setCheckInTime] = useState(timeOptions[0])
  const [hours, setHours] = useState(hoursOptions[0])
  const [rooms, setRooms] = useState(roomOptions[0])

  return (
    <div className='px-4'>
      {/* Date Picker */}
      <div className='mb-4'>
        <label className='block text-sm font-semibold '>Dates</label>
        <div className='relative mt-1'>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            placeholderText='Date'
            className='w-[390px] text-[12px] p-2 border focus:outline-none focus:border-transparent border-gray-300 rounded-[12px] focus:ring-2 focus:ring-blue-400'
          />
          <Calendar className='absolute text-gray-500 right-2 top-2' size={16} />
        </div>
      </div>

      {/* Check-in Time */}
      <div className='mb-4'>
        <label className='block text-sm font-semibold '>Check-in Time</label>
        <Select
          options={timeOptions}
          value={checkInTime}
          onChange={setCheckInTime}
          className='mt-1 text-[12px] custom-select '
          components={{ DropdownIndicator: () => <ChevronDown className='text-gray-500' size={20} /> }}
        />
      </div>

      {/* Hours of Use */}
      <div className='mb-4'>
        <label className='block text-sm font-semibold '>Hours of use</label>
        <Select
          options={hoursOptions}
          value={hours}
          onChange={setHours}
          className='mt-1 text-[12px] custom-select '
          components={{ DropdownIndicator: () => <ChevronDown className='text-gray-500' size={20} /> }}
        />
      </div>

      {/* Room Quantity */}
      <div className='mb-4'>
        <label className='block text-sm font-semibold'>Room Quantity</label>
        <Select
          options={roomOptions}
          value={rooms}
          onChange={setRooms}
          className='mt-1 text-[12px] custom-select '
          components={{ DropdownIndicator: () => <ChevronDown className='text-gray-500' size={20} /> }}
        />
      </div>
    </div>
  )
}

export default BookingForm
