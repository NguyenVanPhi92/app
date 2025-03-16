import RadioFill from '../../assets/icons/RadioFill'
import RadioOutline from '../../assets/icons/RadioOutline'
import { Button } from '../../components/button'
import Header from '../../components/Header'

const Feedback = () => {
  return (
    <div className='flex flex-col justify-between p-4 main'>
      <div>
        <Header title='Feedback' />

        <div className='mt-10 text-center'>
          <h3 className='text-xl font-bold'>Thank you for being here!</h3>
          <p className='text-[14px] text-[#71727A]'>Your feedback is highly appreciated.</p>
        </div>

        <h3 className='mt-24 mb-10 text-xl font-bold text-center'>You want to share your thoughts about:</h3>
        <div className='flex flex-col gap-y-4'>
          <div className='flex gap-x-3 items-center p-4 border border-[#D4D6DD] rounded-2xl'>
            <RadioFill />
            <p className='font-bold text-[#71727A] text-[14px]'>Journey at Ho Chi Minh City</p>
          </div>
          <div className='flex gap-x-3 items-center p-4 border border-[#D4D6DD] rounded-2xl'>
            <RadioOutline />
            <p className='font-bold text-[#71727A] text-[14px]'>Tan Son Nhat Airport</p>
          </div>
          <div className='flex gap-x-3 items-center p-4 border border-[#D4D6DD] rounded-2xl'>
            <RadioOutline />
            <p className='font-bold text-[#71727A] text-[14px]'>WITH Platform</p>
          </div>
        </div>
      </div>

      <Button name='Next' path='feedbackdetail' />
    </div>
  )
}

export default Feedback
