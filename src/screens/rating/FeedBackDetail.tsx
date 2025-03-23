import { useState } from 'react'
import Star from '../../assets/icons/Star'
import Upload from '../../assets/icons/Upload'
import { Button } from '../../components/button'
import Goback from '../../components/Goback'

const LikeIt = [
  {
    id: 1,
    name: 'Iconic Landmarks'
  },
  {
    id: 2,
    name: 'Friendly locals'
  },
  {
    id: 3,
    name: 'Convenient'
  },
  {
    id: 4,
    name: 'History & Heritage'
  },
  {
    id: 5,
    name: 'Food Paradise'
  },
  {
    id: 6,
    name: 'Local Life & Culture'
  }
]

const Improved = [
  {
    id: 1,
    name: 'Public transportation'
  },
  {
    id: 2,
    name: 'Tourist Information'
  },
  {
    id: 3,
    name: 'Safety & Healthcare Services'
  },
  {
    id: 4,
    name: 'only english'
  }
]

const FeedbackDetail = () => {
  const [activeLikeIt, setActiveLikeIt] = useState<number | undefined>(1)
  const [activeImproved, setActiveImpreced] = useState<number | undefined>(1)
  return (
    <div className='flex flex-col justify-between main'>
      <div className='fixed top-0 z-10 p-4 flex justify-center bg-white w-[430px]'>
        <div className='absolute left-4'>
          <Goback />
        </div>
        <p className='font-bold'>Feedback</p>
      </div>

      <div className='p-4 mt-8'>
        {/* Head */}
        <div className='mt-4 mb-6'>
          <h3 className='mb-1 text-xl font-bold'>Rate your journey</h3>
          <p className='text-[14px] text-[#71727A] mb-2'>How would you rate your journey at Ho Chi Minh City?</p>
          <Star />
        </div>
        {/* Rating */}
        <div className='mb-6'>
          <h5 className='font-bold text-[14px] mb-2'>What did you like about it?</h5>
          <div className='flex flex-wrap gap-2'>
            {LikeIt.map((e, i) => (
              <p
                key={i}
                onClick={() => setActiveLikeIt(e.id)}
                className={`text-[12px] px-2 py-1 w-max font-[500] rounded-full cursor-pointer ${
                  activeLikeIt === e.id ? 'bg-[#354f79] text-white' : 'bg-[#eaf2ff] text-[#354f79]'
                }`}
              >
                {e.name}
              </p>
            ))}
          </div>
        </div>

        <div className='mb-6'>
          <h5 className='font-bold text-[14px] mb-2'>What could be improved?</h5>
          <div className='flex flex-wrap gap-2 '>
            {Improved.map((e, i) => (
              <p
                key={i}
                onClick={() => setActiveImpreced(e.id)}
                className={`text-[12px] px-2 py-1 w-max font-[500] rounded-full cursor-pointer ${
                  activeImproved === e.id ? 'bg-[#354f79] text-white' : 'bg-[#eaf2ff] text-[#354f79]'
                }`}
              >
                {e.name}
              </p>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          <h3 className='mb-1 text-[14px] font-bold'>Anything else?</h3>
          <textarea className='border p-4 border-[#C5C6CC] rounded-xl w-full focus:outline-[#bebebe] h-32' />
        </div>

        {/* Image */}
        <div className='text-center'>
          <h3 className='mb-1 text-[14px] font-bold mt-2'> Let share a memorable moment!</h3>
          <Upload />
        </div>
      </div>

      <div className='p-4'>
        <Button name='Submit' path='home' />
      </div>
    </div>
  )
}

export default FeedbackDetail
