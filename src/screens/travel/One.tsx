import { zodResolver } from '@hookform/resolvers/zod'
import { Calendar, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import Select from 'react-select'
import { Button } from '../../components/button'
import InputField from '../../components/input/InputField'
import { TravelSelect } from '../../constants/data'
import { LoginBody, LoginBodyType } from '../../schema/auth.schema'

const One = () => {
  const [date, setDate] = useState<Date | null>(null)
  const [address, setAddress] = useState(TravelSelect[0])
  // useForm
  const {
    control
    // handleSubmit,
    // formState: { isValid }
  } = useForm<LoginBodyType>({ resolver: zodResolver(LoginBody), defaultValues: { email: '', password: '' } })

  // handle event
  // const handleLogin = (data: LoginBodyType) => console.log('data form: ', data)
  const handleChangeAddress = (e: any) => {
    console.log('address ', e.value)
    setAddress(e.value)
  }
  console.log('date ', date)

  return (
    <div className='flex flex-col justify-between p-4 main'>
      <div>
        <div className='relative bg-[#e8e9f1] mt-4 mb-8 h-2 w-[100%] mx-auto rounded-full'>
          <p className='absolute bg-[#354f79] h-2 transition duration-300 rounded-full w-[50%] top-0 left-0'></p>
        </div>

        <div className='flex flex-col gap-y-2'>
          <h3 className='text-xl font-bold'>Build your own travel plan</h3>
          <p className='text-[#71727A]'>Choose your interests.</p>
        </div>

        <form action='' className='mt-12'>
          <div className='mb-4'>
            <label className='block mb-1 text-sm font-semibold'>Your travel plan name</label>
            <InputField control={control} name='email' type='text' placeholder='Email Address' />
          </div>

          {/* Select Tỉnh Thành Phố */}
          <div className='mb-4'>
            <label className='block text-[14px] font-semibold '>Where to?</label>
            <Select
              options={TravelSelect}
              value={address}
              onChange={handleChangeAddress}
              className='mt-1 text-[12px] custom-select'
              components={{ DropdownIndicator: () => <ChevronDown className='text-gray-500' size={20} /> }}
            />
          </div>

          <div className='flex mb-4 gap-x-2'>
            <p className='px-2 py-1 text-[10px] gap-1 bg-[#354f79] w-max text-white rounded-xl flex items-center'>
              <span className='font-[500]'>HO CHI MINH</span> <AiOutlineClose size={16} />
            </p>
            <p className='px-2 py-1 text-[10px] gap-1 bg-[#354f79] w-max text-white rounded-xl flex items-center'>
              <span className='font-[500]'>HO CHI MINH</span> <AiOutlineClose size={16} />
            </p>
            <p className='px-2 py-1 text-[10px] gap-1 bg-[#354f79] w-max text-white rounded-xl flex items-center'>
              <span className='font-[500]'>HO CHI MINH</span> <AiOutlineClose size={16} />
            </p>
          </div>

          {/* Date Picker */}
          <div className='mb-4'>
            <label className='block text-sm font-semibold '>Dates</label>
            <div className='relative mt-1'>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                placeholderText='Date'
                className='w-[400px] text-[12px] p-[14px] border focus:outline-none focus:border-transparent border-gray-300 rounded-[16px] focus:ring-2 focus:ring-blue-400'
              />
              <Calendar className='absolute text-gray-500 right-2 top-2' size={16} />
            </div>
          </div>
        </form>
      </div>

      <Button name='Next' path='two' />
    </div>
  )
}

export default One
