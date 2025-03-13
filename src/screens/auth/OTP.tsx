import { useState } from 'react'
import OTPInput from 'react-otp-input'
import { Link } from 'react-router'
import { Button } from '../../components/button'

const OTP = () => {
  const [code, setCode] = useState('')

  // const handleChange = (code: any) => setCode(code)

  return (
    <div className='flex flex-col justify-center gap-10 main'>
      <div className='w-[260px] mx-auto'>
        <h1 className='mb-2 text-xl font-bold'>Enter confirmation code</h1>
        <p className='text-[14px] text-[#71727A] text-center'>A 4-digit code was sent to lucasscott3@email.com</p>
      </div>
      <div className=''>
        <div className='flex justify-center'>
          <OTPInput
            value={code}
            onChange={setCode}
            numInputs={4}
            renderSeparator={<span className='mr-4'> </span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              // border: '1px solid transp  arent',
              borderRadius: '8px',
              width: '44px',
              height: '44px',
              fontSize: '12px',
              color: '#000',
              fontWeight: '400',
              caretColor: 'blue',
              border: '1px solid #CFD3DB',
              outline: 'none'
            }}
          />
        </div>

        <div className='mt-40 text-center'>
          <p className='mb-2'>
            <Link to='/' className='text-[14px] text-[#354F79] font-bold'>
              Resend code
            </Link>
          </p>
          <Button name='Continue' path='service' />
        </div>
      </div>
    </div>
  )
}

export default OTP
