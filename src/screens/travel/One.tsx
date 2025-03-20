import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { Button } from '../../components/button'
import CustomDatePicker from '../../components/fields/DateField'
import InputField from '../../components/fields/InputField'
import SelectField from '../../components/fields/SelectField'
import { TravelSelect } from '../../constants/data'
import { LoginBody, LoginBodyType } from '../../schema/auth.schema'
import { useStoreAction } from '../../store/zustand'

const One = () => {
  const [address, setAddress] = useState(TravelSelect[0])
  const dispathTravel = useStoreAction((state) => state.dispathTravel)
  // useForm
  const {
    control
    // handleSubmit,
    // formState: { isValid }
  } = useForm<LoginBodyType>({ resolver: zodResolver(LoginBody), defaultValues: { email: '', password: '' } })

  // handle event
  const handleAddress = () => dispathTravel({ id: address.value, categories: [] })

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
          <SelectField data={TravelSelect} label='Where to?' onChange={(e: any) => setAddress(e)} value={address} />

          <div className='flex mb-4 gap-x-2'>
            <p className='px-2 py-1 text-[10px] gap-1 bg-[#354f79] w-max text-white rounded-xl flex items-center'>
              <span className='font-[500]'>HO CHI MINH</span> <AiOutlineClose size={14} />
            </p>
            <p className='px-2 py-1 text-[10px] gap-1 bg-[#eaf2ff] w-max text-[#354f79] rounded-xl flex items-center'>
              <span className='font-[500]'>CAN THO</span> <AiOutlineClose size={14} />
            </p>
            <p className='px-2 py-1 text-[10px] gap-1 bg-[#eaf2ff] w-max text-[#354f79] rounded-xl flex items-center'>
              <span className='font-[500]'>HA NOI</span> <AiOutlineClose size={14} />
            </p>
            <p className='px-2 py-1 text-[10px] gap-1 bg-[#eaf2ff] w-max text-[#354f79] rounded-xl flex items-center'>
              <span className='font-[500]'>DA NANG</span> <AiOutlineClose size={14} />
            </p>
          </div>

          {/* Date Picker */}
          <CustomDatePicker label='Dates' />
        </form>
      </div>

      <Button name='Next' path='two' onClick={handleAddress} />
    </div>
  )
}

export default One
