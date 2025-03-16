import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '../components/button'
import Header from '../components/Header'
import InputField from '../components/input/InputField'
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
    <div className='flex flex-col justify-between p-4 main'>
      <Header title='Booking Sleep Zone' />

      <div>
        <div className='flex flex-col justify-between concept'>
          <div>
            <div className='mb-4'>
              <h4 className='mb-1 font-bold text-[16px]'>Input your info to complete booking</h4>
              <p className='text-[12px] text-[#5a5a5a]'>Booking details will be sent via phone and email.</p>
            </div>

            <form action='' className='py-4 border-b-[1px] border-[#74747433]'>
              <div className='mb-4'>
                <InputField control={control} label='Name' name='name' type='text' placeholder='nhập name' />
              </div>
              <div className='mb-4'>
                <InputField control={control} label='Phone' name='phone' type='text' placeholder='nhập phone' />
              </div>
              <div className='mb-4'>
                <InputField control={control} label='Email' name='email' type='text' placeholder='nhập email' />
              </div>
            </form>
          </div>

          <div className=''>
            <h4 className='font-bold text-[16px]'>Review Booking</h4>
            <div className='px-10 text-[#71727A]'>
              <div className='flex items-center justify-between'>
                <p className='font-bold text-[14px]'>Date</p>
                <p className='text-[12px]'>10 April 2025</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='font-bold text-[14px]'>Check-in Time</p>
                <p className='text-[12px]'>9.00 AM</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='font-bold text-[14px]'>Hours of use</p>
                <p className='text-[12px]'>3 hours</p>
              </div>
              <div className='flex items-center justify-between'>
                <p className='font-bold text-[14px]'>Room Quantity</p>
                <p className='text-[12px]'>2 rooms</p>
              </div>
            </div>

            <div className='flex justify-between mt-10'>
              <p>Total</p>
              <p className='font-bold'>$20.00</p>
            </div>
          </div>
        </div>
      </div>

      <Button name='Checkout' path='checkout' />
    </div>
  )
}

export default Booking
