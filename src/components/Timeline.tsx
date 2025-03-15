import { useState } from 'react'

const TimelineItem = ({ step, time, title, address, isOpen, onClick }) => (
  <div className='flex items-start gap-6'>
    <p className='w-12 text-gray-500'>{time}</p>
    <div className='flex flex-col items-center'>
      <div className='flex items-center justify-center w-10 h-10 text-white bg-gray-300 rounded-full'>{step}</div>
      {step !== 4 && <div className='w-[2px] bg-gray-300 h-16 my-2'></div>}
    </div>
    <div className='w-full p-4 bg-blue-100 rounded-lg cursor-pointer' onClick={onClick}>
      <h3 className='font-bold'>{title}</h3>
      <p>{address}</p>
      {isOpen && <p className='mt-2 text-sm text-gray-600'>Chi tiết mở rộng...</p>}
    </div>
  </div>
)

const Timeline = () => {
  const [openStep, setOpenStep] = useState(null)

  const toggleStep = (step) => {
    setOpenStep(openStep === step ? null : step)
  }

  return (
    <div className='space-y-6'>
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
