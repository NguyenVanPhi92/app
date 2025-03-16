import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/button'
import InputField from '../../components/fields/InputField'
import { PasswordField } from '../../components/fields/PasswordField'
import Image from '../../constants/data'
import { LoginBody, LoginBodyType } from '../../schema/auth.schema'

const Register = () => {
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
      {/* <img src={Image} al   t='img' className='w-full mb-6 rounded-es-3xl rounded-ee-3xl' /> */}
      <div className=''>
        <div className='mt-20'>
          <h1 className='text-xl font-bold'>Sign up!</h1>
          <p className='text-[14px]'>Create an account to get started </p>
        </div>

        <div className='my-4 text-[14px] flex gap-x-3 items-center'>
          <input type='checkbox' className='w-6 h-6' />
          <p className='text-[12px] text-[#71727A]'>
            I've read and agree with the <span className='text-[#354f79] font-[600]'>Terms and Conditions</span> and the
            <span className='text-[#354f79] font-[600]'> Privacy Policy</span>.
          </p>
        </div>

        <form action='' className='py-2'>
          <div className='mb-4'>
            <InputField control={control} name='name' label='Name' type='text' placeholder='enter name' />
          </div>
          <div className='mb-4 '>
            <InputField control={control} name='email' label='Email Address' type='text' placeholder='enter email' />
          </div>
          <div className='mb-4'>
            <PasswordField control={control} name='password' label='Password' placeholder='enter password' />
          </div>
          <div className='mb-4'>
            <PasswordField control={control} name='password' placeholder='re-enter password' />
          </div>
        </form>
      </div>
      <div className=''>
        <Button name='Submit' path='code' />
      </div>
    </div>
  )
}

export default Register
