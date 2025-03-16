import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import { Button } from '../../components/button'
import InputField from '../../components/input/InputField'
import { PasswordField } from '../../components/input/PasswordField'
import Image from '../../constants/data'
import { LoginBody, LoginBodyType } from '../../schema/auth.schema'
import Google from '../../assets/icons/Google'
import Apple from '../../assets/icons/Apple'
import Facebook from '../../assets/icons/Facebook'

const Login = () => {
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
      <div className='p-4 '>
        <h1 className='text-xl font-bold'>Welcome!</h1>

        <form action='' className='py-8 border-b-[1px] border-[#74747433]'>
          <div className='mb-4'>
            <InputField control={control} name='email' type='text' placeholder='Email Address' />
          </div>
          <div className='mb-4'>
            <PasswordField control={control} name='password' placeholder='Password' />
          </div>
          <Link to={'/'} className='font-bold text-[14px] text-[#354F79]'>
            Forgot password?
          </Link>
          <div className='mt-4'>
            <Button name='Login' path='/' />
          </div>

          <p className='text-[14px] text-center mt-4'>
            Not a member?{' '}
            <Link to={'/register'} className='font-bold  text-[#354F79]'>
              Register now
            </Link>
          </p>
        </form>

        <div className='flex justify-center mt-8'>
          <div className='text-center '>
            <p className='mb-6'>Or continue with</p>

            <div className='flex gap-x-6'>
              <Google />
              <Apple />
              <Facebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
