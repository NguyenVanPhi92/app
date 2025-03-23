import { useState } from 'react'
import RadioFill from '../../assets/icons/RadioFill'
import RadioOutline from '../../assets/icons/RadioOutline'
import { Button } from '../../components/button'
import Goback from '../../components/Goback'

const feedbackLits = [
  {
    name: 'Journey at Ho Chi Minh City',
    id: 1
  },
  {
    name: 'Tan Son Nhat Airport',
    id: 2
  },
  {
    name: 'WITH Platform',
    id: 3
  }
]

const Feedback = () => {
  const [activeSelect, setActiveSelect] = useState<number | undefined>(1)
  return (
    <div className='flex flex-col justify-between main'>
      <div className='fixed top-0 z-10 p-4 flex justify-center bg-white w-[430px]'>
        <div className='absolute left-4'>
          <Goback />
        </div>
        <p className='font-bold'>Feedback</p>
      </div>

      <div className='p-4 mt-32'>
        <div className='text-center '>
          <h3 className='text-xl font-bold'>Thank you for being here!</h3>
          <p className='text-[14px] text-[#71727A]'>Your feedback is highly appreciated.</p>
        </div>

        <h3 className='mt-6 mb-10 text-xl font-bold text-center'>You want to share your thoughts about:</h3>
        <div className='flex flex-col gap-y-4'>
          {feedbackLits.map((e, i) => (
            <div
              key={i}
              onClick={() => setActiveSelect(e.id)}
              className='flex gap-x-3 cursor-pointer items-center p-4 border border-[#D4D6DD] rounded-2xl'
            >
              {activeSelect === e.id ? <RadioFill /> : <RadioOutline />}
              <p className='font-bold text-[#71727A] text-[14px]'>{e.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='p-4'>
        <Button name='Next' path='feedbackdetail' />
      </div>
    </div>
  )
}

export default Feedback
