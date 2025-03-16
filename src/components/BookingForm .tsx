import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { hoursOptions, roomOptions, timeOptions } from '../constants/data'
import CustomDatePicker from './fields/DateField'
import SelectField from './fields/SelectField'

const BookingForm = () => {
  const [checkInTime, setCheckInTime] = useState(timeOptions[0])
  const [hours, setHours] = useState(hoursOptions[0])
  const [rooms, setRooms] = useState(roomOptions[0])

  const handleChangeTime = (e: any) => {
    setCheckInTime(e.value)
  }
  const handleChangeHr = (e: any) => {
    setHours(e.value)
  }
  const handleChangeRoom = (e: any) => {
    setRooms(e.value)
  }

  return (
    <div className='px-4'>
      {/* Date Picker */}
      <CustomDatePicker label='Dates' />

      {/* Check-in Time */}
      <SelectField
        label='Check-in Time'
        data={timeOptions}
        onChange={(e: any) => handleChangeTime(e)}
        value={checkInTime}
      />
      <SelectField label='Hours of use' data={hoursOptions} value={hours} onChange={(e: any) => handleChangeHr(e)} />
      <SelectField label='Room Quantity' data={roomOptions} value={rooms} onChange={(e: any) => handleChangeRoom(e)} />
    </div>
  )
}

export default BookingForm
