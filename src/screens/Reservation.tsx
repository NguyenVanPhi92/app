import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../components/button'
import CustomDatePicker from '../components/fields/DateField'
import InputField from '../components/fields/InputField'
import SelectField from '../components/fields/SelectField'
import Goback from '../components/Goback'
import { GuestSelect, reservationGust, reservationTime, TimeSelect } from '../constants/data'
import { LoginBody, LoginBodyType } from '../schema/auth.schema'
import '../styles/menu.scss'

const Reservation = () => {
  const [time, setTime] = useState(reservationTime[0])
  const [guest, setGuest] = useState(reservationGust[0])
  // useForm
  const {
    control
    // handleSubmit,
    // formState: { isValid }
  } = useForm<LoginBodyType>({ resolver: zodResolver(LoginBody), defaultValues: { email: '', password: '' } })

  // handle event
  //

  return (
    <div className='flex flex-col justify-between main'>
      <div className='fixed top-0 z-10 p-4 flex justify-center bg-white w-[430px]'>
        <div className='absolute left-4'>
          <Goback />
        </div>
        <p className='font-bold'>Reservation</p>
      </div>

      <div className='mt-16 body'>
        <form action='' className='py-4'>
          <CustomDatePicker label='Date' placeholderText='Date' />

          <div className='grid grid-cols-2 gap-x-4'>
            <SelectField label='Time' data={reservationTime} onChange={(e: any) => setTime(e)} value={time} />
            <SelectField
              label='Number of Guest'
              data={reservationGust}
              onChange={(e: any) => setGuest(e)}
              value={guest}
            />
          </div>
          <div className='mb-4'>
            <InputField
              control={control}
              label='Special Request'
              name='email'
              type='text'
              placeholder='Special Request'
            />
          </div>
        </form>
      </div>

      <div className='p-4'>
        <Button name='Next' path='reservationBooking' />
      </div>
    </div>
  )
}

export default Reservation
