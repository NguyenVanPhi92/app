import { useForm } from 'react-hook-form'
import { Button } from '../components/button'
import InputField from '../components/fields/InputField'
import Goback from '../components/Goback'
import { LoginBody, LoginBodyType } from '../schema/auth.schema'
import { useStoreAction } from '../store/zustand'
import '../styles/menu.scss'
import { zodResolver } from '@hookform/resolvers/zod'

const ReservationBooking = () => {
  // useForm
  const {
    control
    // handleSubmit,
    // formState: { isValid }
  } = useForm<LoginBodyType>({ resolver: zodResolver(LoginBody), defaultValues: { email: '', password: '' } })

  return (
    <div className='flex flex-col justify-between main'>
      <div className='fixed top-0 z-10 p-4 flex justify-center bg-white w-[430px]'>
        <div className='absolute left-4'>
          <Goback />
        </div>
        <p className='font-bold'>ReservationBooking</p>
      </div>

      <div className='mt-16 body'>
        <div className='mb-4'>
          <h4 className='font-bold text-[16px] mb-2'>Input your info to complete booking</h4>
          <p className='text-[#71727A] text-[12px]'>Booking details will be sent via phone and email.</p>
        </div>
        <form action='' className='py-2'>
          <div className='mb-4'>
            <InputField control={control} name='name' label='Name' type='text' placeholder='enter name' />
          </div>
          <div className='mb-4 '>
            <InputField control={control} name='email' label='Email Address' type='text' placeholder='enter email' />
          </div>
          <div className='mb-4 '>
            <InputField control={control} name='email' label='Email Address' type='text' placeholder='enter email' />
          </div>
        </form>

        <div className='mt-16 pt-2 border-t-[1px] border-[#74747433]'>
          <h4 className='font-bold text-[16px]'>Review Booking</h4>
          <div className='px-10 text-[#71727A]'>
            <div className='flex items-center justify-between'>
              <p className='font-bold text-[14px]'>Date</p>
              <p className='text-[14px]'>10 April 2025</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='font-bold text-[14px]'>Check-in Time</p>
              <p className='text-[14px]'>9.00 AM</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='font-bold text-[14px]'>Hours of use</p>
              <p className='text-[14px]'>3 hours</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='font-bold text-[14px]'>Room Quantity</p>
              <p className='text-[14px]'>2 rooms</p>
            </div>
          </div>
        </div>
      </div>

      <div className='p-4'>
        <Button name='Booking' path='store' />
      </div>
    </div>
  )
}

export default ReservationBooking
