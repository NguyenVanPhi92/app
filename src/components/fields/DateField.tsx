import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import { FiCalendar } from 'react-icons/fi'

export const CustomInput = ({ value, onClick, placeholderText }: any) => (
  <div className='flex items-center w-full px-4 py-[10px] border border-[#c6c8cb] rounded-[10px]' onClick={onClick}>
    <span className='text-[#333] text-[14px]'>{value || placeholderText}</span>
    <FiCalendar className='ml-auto text-gray-400' />
  </div>
)

const CustomDatePicker = ({ label, placeholderText }: { label: string; placeholderText?: string }) => {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div className='mb-4'>
      <label className='block mb-1 text-sm font-semibold'>{label}</label>
      <div className=''>
        <DatePicker
          selected={selectedDate}
          onChange={(date: any) => setSelectedDate(date)}
          customInput={<CustomInput placeholderText={placeholderText} />}
          dateFormat='dd/MM/yyyy'
          className='w-[400px]'
        />
      </div>
    </div>
  )
}

export default CustomDatePicker
