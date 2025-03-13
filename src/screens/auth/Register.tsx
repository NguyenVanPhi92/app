import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/button'
import InputField from '../../components/input/InputField'
import { PasswordField } from '../../components/input/PasswordField'
import Image from '../../contans/data'
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
    <div className='main'>
      <img src={Image} alt='img' className='w-full mb-6 rounded-es-3xl rounded-ee-3xl' />
      <div className='p-4'>
        <div>
          <h1 className='text-xl font-bold'>Sign up!</h1>
          <p className='text-[14px]'>Create an account to get started </p>
        </div>

        <div className='my-4 text-[14px]'>
          <p>I've read and agree with the Terms and Conditions and the Privacy Policy.</p>
        </div>

        <form action='' className='py-2'>
          <div className='mb-4'>
            <InputField control={control} name='name' label='Name' type='text' placeholder='enter name' />
          </div>
          <div className='mb-4 '>
            <InputField control={control} name='email' label='Email Address' type='text' placeholder='enter email' />
          </div>
          <div className='relative mb-4'>
            <PasswordField control={control} name='password' label='Password' placeholder='enter password' />
          </div>
          <div className='relative mb-4'>
            <PasswordField control={control} name='password' placeholder='re-enter password' />
          </div>
          <div className=''>
            <Button name='Register' path='otp' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
