import { useState } from 'react'
import Image from '../constants/data'

const TimelineItem = ({ step, time, onClick }: any) => (
  <div className='flex items-start gap-4'>
    <p className='w-12 text-[14px] text-gray-500 mt-4'>{time}</p>
    <div className='flex flex-col items-center'>
      <div className='flex items-center justify-center w-5 h-5 mt-4 mb-2 text-white bg-gray-300 rounded-full'>
        {step}
      </div>
      {step !== 4 && <div className='w-[2px] bg-gray-300 h-10'></div>}
    </div>
    <div className='flex rounded-lg cursor-pointer bg-[#f8f9fe] w-full' onClick={onClick}>
      <img src={Image} alt='' className='w-20 h-16 rounded-tl-xl rounded-es-xl' />

      <div className='px-4 py-2'>
        <p className='font-bold text-[14px]'>Destinations</p>
        <p className='text-[12px]'>Destinations</p>
      </div>
    </div>
  </div>
)

const Timeline = () => {
  const [openStep, setOpenStep] = useState(null)

  const toggleStep = (step: any) => {
    setOpenStep(openStep === step ? null : step)
  }

  return (
    <div className=''>
      {[1, 2, 3, 4].map((step) => (
        <TimelineItem
          key={step}
          step={step}
          time='9 AM'
          title='Place'
          address='Address'
          isOpen={openStep === step}
          onClick={() => toggleStep(step)}
        />
      ))}
    </div>
  )
}

export default Timeline
