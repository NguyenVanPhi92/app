import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '../components/button'
import InputField from '../components/fields/InputField'
import Goback from '../components/Goback'
import { LoginBody, LoginBodyType } from '../schema/auth.schema'

const Booking = () => {
  // useForm
  const {
    control
    // handleSubmit,
    // formState: { isValid }
  } = useForm<LoginBodyType>({ resolver: zodResolver(LoginBody), defaultValues: { email: '', password: '' } })

  // handle event
  // const handleLogin = (data: LoginBodyType) => console.log('data form: ', data)

  return (
    <div className='flex flex-col justify-between main'>
      <div className='fixed top-0 z-10 p-4 flex justify-center bg-white w-[430px]'>
        <div className='absolute left-4'>
          <Goback />
        </div>
        <p className='font-bold'>Booking Sleep Zone</p>
      </div>

      <div className='p-4 mt-16'>
        <div className='flex flex-col justify-between'>
          <div>
            <div className='mb-4'>
              <h4 className='mb-1 font-bold text-[16px]'>Input your info to complete booking</h4>
              <p className='text-[12px] text-[#5a5a5a]'>Booking details will be sent via phone and email.</p>
            </div>

            {/* Form */}
            <form action='' className='py-4'>
              <div className='mb-4'>
                <InputField control={control} label='Name' name='name' type='text' placeholder='Name' />
              </div>
              <div className='mb-4'>
                <InputField
                  control={control}
                  label='Phone Number'
                  name='phone'
                  type='text'
                  placeholder='Phone Number'
                />
              </div>
              <div className='mb-4'>
                <InputField control={control} label='Email' name='email' type='text' placeholder='Email' />
              </div>
            </form>
          </div>

          {/* Review Booking */}
          <div className='mt-16 pt-2 border-t-[1px] border-[#74747433]'>
            <h4 className='font-bold text-[16px]'>Review Booking</h4>
            <div className='px-10 text-[#71727A]'>
              <div className='flex items-center justify-between'>
                <p className='font-bold text-[14px]'>Date</p>
                <p className='text-[14px]'>1 May 2025</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='font-bold text-[14px]'>Check-in Time</p>
                <p className='text-[14px]'>5.00 AM</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='font-bold text-[14px]'>Hours of use</p>
                <p className='text-[14px]'>2 hours</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='font-bold text-[14px]'>Room Quantity</p>
                <p className='text-[14px]'>1 rooms</p>
              </div>
            </div>

            <div className='flex justify-between px-6 mt-10'>
              <p>Total</p>
              <p className='font-bold'>$14.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className='p-4'>
        <Button name='Checkout' path='checkout' />
      </div>
    </div>
  )
}

export default Booking
