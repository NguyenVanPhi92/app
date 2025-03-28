import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import Apple from '../../assets/icons/Apple'
import Facebook from '../../assets/icons/Facebook'
import Google from '../../assets/icons/Google'
import InputField from '../../components/fields/InputField'
import { PasswordField } from '../../components/fields/PasswordField'
import { LoginI } from '../../constants/data'
import { LoginBody, LoginBodyType } from '../../schema/auth.schema'
import { useStoreAction } from '../../store/zustand'

const Login = () => {
  const dispathLogin = useStoreAction((state) => state.dispathLogin)
  let navigate = useNavigate()

  // useForm
  const { control, handleSubmit } = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: { email: '', password: '' }
  })

  // handle event
  const handleLogin = (data: { email: string; password: string }) => {
    dispathLogin(data)
    navigate('/home')
  }

  return (
    <div className='relative main'>
      <img src={LoginI} alt='img' className='w-full mb-6 rounded-es-3xl h-72 rounded-ee-3xl' />

      <div className='p-4 '>
        <h1 className='text-xl font-bold'>Welcome!</h1>
        <form action='' className='pb-8 pt-4 border-b-[1px] border-[#74747433]' onSubmit={handleSubmit(handleLogin)}>
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
            <button className='button text-sm bg-[#354f79] w-full py-3 font-[500] flex justify-center text-white text-md rounded-xl'>
              Login
            </button>
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
