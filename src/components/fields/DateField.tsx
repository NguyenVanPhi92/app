import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import { FiCalendar } from 'react-icons/fi'

const CustomInput = ({ value, onClick }: any) => (
  <div className='flex items-center w-full px-4 py-[10px] border border-[#c6c8cb] rounded-[10px]' onClick={onClick}>
    <span className='text-[#333] text-[14px]'>{value || 'Date'}</span>
    <FiCalendar className='ml-auto text-gray-400' />
  </div>
)

const CustomDatePicker = ({ label }: { label: string }) => {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div className='mb-4'>
      <label className='block mb-1 text-sm font-semibold'>{label}</label>
      <div className=''>
        <DatePicker
          selected={selectedDate}
          onChange={(date: any) => setSelectedDate(date)}
          customInput={<CustomInput />}
          dateFormat='dd/MM/yyyy'
          className='w-[400px]'
        />
      </div>
    </div>
  )
}

export default CustomDatePicker
