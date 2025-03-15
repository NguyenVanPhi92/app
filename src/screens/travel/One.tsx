import { Link } from 'react-router'
import { Button } from '../../components/button'
import InputField from '../../components/input/InputField'
import { LoginBody, LoginBodyType } from '../../schema/auth.schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Select from 'react-select'
import { timeOptions } from '../../constants/data'
import { Calendar, ChevronDown } from 'lucide-react'
import DatePicker from 'react-datepicker'
import { IoIosClose } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'

const One = () => {
  // useForm
  const {
    control
    // handleSubmit,
    // formState: { isValid }
  } = useForm<LoginBodyType>({ resolver: zodResolver(LoginBody), defaultValues: { email: '', password: '' } })

  // handle event
  // const handleLogin = (data: LoginBodyType) => console.log('data form: ', data)

  return (
    <div className='main'>
      <div className='relative bg-[#e8e9f1] h-2 w-[90%] mx-auto rounded-full'>
        <p className='absolute bg-[#354f79] h-2 transition duration-300 rounded-full w-[50%] top-0 left-0'></p>
      </div>

      <div className='p-4'>
        <div className='flex flex-col gap-y-2'>
          <h3 className='text-xl font-bold'>Build your own travel plan</h3>
          <p className='text-[#71727A]'>Choose your interests.</p>
        </div>

        <form action='' className='py-8'>
          <div className='mb-4'>
            <label className='block mb-1 text-sm font-semibold'>Your travel plan name</label>
            <InputField control={control} name='email' type='text' placeholder='Email Address' />
          </div>
          {/* Check-in Time */}
          <div className='mb-4'>
            <label className='block text-sm font-semibold '>Where to?</label>
            <Select
              options={timeOptions}
              //   value={checkInTime}
              //   onChange={(e) => handleChangeTime(e)}
              className='mt-1 text-[12px] custom-select '
              components={{ DropdownIndicator: () => <ChevronDown className='text-gray-500' size={20} /> }}
            />
          </div>

          <div className='flex mb-2 gap-x-2'>
            <p className='p-1 text-[10px] gap-1 bg-[#354f79] w-max text-white rounded-xl flex items-center'>
              <span>HO CHI MINH</span> <AiOutlineClose size={16} />
            </p>
            <p className='p-1 text-[10px] gap-1 bg-[#354f79] w-max text-white rounded-xl flex items-center'>
              <span>HO CHI MINH</span> <AiOutlineClose size={16} />
            </p>
            <p className='p-1 text-[10px] gap-1 bg-[#354f79] w-max text-white rounded-xl flex items-center'>
              <span>HO CHI MINH</span> <AiOutlineClose size={16} />
            </p>
            <p className='p-1 text-[10px] gap-1 bg-[#354f79] w-max text-white rounded-xl flex items-center'>
              <span>HO CHI MINH</span> <AiOutlineClose size={16} />
            </p>
          </div>

          <div className='relative'>
            <label className='block mb-1 text-sm font-semibold'>Dates</label>
            <DatePicker
              // selected={date}
              // onChange={(date) => setDate(date)}
              placeholderText='Date'
              className='w-[390px] text-[12px] p-2 border focus:outline-none focus:border-transparent border-gray-300 rounded-[12px] focus:ring-2 focus:ring-blue-400'
            />
            <Calendar className='absolute text-gray-500 right-2 top-2' size={16} />
          </div>
        </form>
      </div>
      <Button name='Next' path='two' />
    </div>
  )
}

export default One
