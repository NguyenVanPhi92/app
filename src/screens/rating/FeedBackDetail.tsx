import Star from '../../assets/icons/Star'
import Upload from '../../assets/icons/Upload'
import { Button } from '../../components/button'
import Header from '../../components/Header'

const FeedbackDetail = () => {
  return (
    <div className='flex flex-col justify-between p-4 main'>
      <div className=''>
        <Header title='Journey at Ho Chi Minh City' />

        {/* Head */}
        <div className='mt-4 mb-6'>
          <h3 className='mb-1 text-xl font-bold'>Rate your journey</h3>
          <p className='text-[14px] text-[#71727A] mb-2'>How would you rate your journey at Ho Chi Minh City?</p>
          <Star />
        </div>
        {/* Rating */}
        <div className='mb-6'>
          <h5 className='font-bold text-[14px] mb-2'>What did you like about it?</h5>
          <div className='grid grid-cols-3 gap-2'>
            <p className='text-[12px] px-2 py-1 w-max bg-[#eaf2ff] rounded-full text-[#354f79] font-[500]'>
              Iconic Landmarks
            </p>
            <p className='text-[12px] px-2 py-1 w-max bg-[#354f79] rounded-full text-[#eaf2ff] font-[500]'>
              Iconic Landmarks
            </p>
            <p className='text-[12px] px-2 py-1 w-max bg-[#eaf2ff] rounded-full text-[#354f79] font-[500]'>
              Iconic Landmarks
            </p>
            <p className='text-[12px] px-2 py-1 w-max bg-[#354f79] rounded-full text-[#eaf2ff] font-[500]'>
              Iconic Landmarks
            </p>
            <p className='text-[12px] px-2 py-1 w-max bg-[#eaf2ff] rounded-full text-[#354f79] font-[500]'>
              Iconic Landmarks
            </p>
            <p className='text-[12px] px-2 py-1 w-max bg-[#354f79] rounded-full text-[#eaf2ff] font-[500]'>
              Iconic Landmarks
            </p>
            <p className='text-[12px] px-2 py-1 w-max bg-[#eaf2ff] rounded-full text-[#354f79] font-[500]'>
              Iconic Landmarks
            </p>
            <p className='text-[12px] px-2 py-1 w-max bg-[#354f79] rounded-full text-[#eaf2ff] font-[500]'>
              Iconic Landmarks
            </p>
          </div>
        </div>

        <div className='mb-6'>
          <h5 className='font-bold text-[14px] mb-2'>What could be improved?</h5>
          <div className='grid grid-cols-3 gap-2'>
            <p className='text-[12px] px-2 py-1 w-max bg-[#eaf2ff] rounded-full text-[#354f79] font-[500]'>
              Iconic Landmarks
            </p>
            <p className='text-[12px] px-2 py-1 w-max bg-[#354f79] rounded-full text-[#eaf2ff] font-[500]'>
              Iconic Landmarks
            </p>
            <p className='text-[12px] px-2 py-1 w-max bg-[#eaf2ff] rounded-full text-[#354f79] font-[500]'>
              Iconic Landmarks
            </p>
            <p className='text-[12px] px-2 py-1 w-max bg-[#354f79] rounded-full text-[#eaf2ff] font-[500]'>
              Iconic Landmarks
            </p>
            <p className='text-[12px] px-2 py-1 w-max bg-[#eaf2ff] rounded-full text-[#354f79] font-[500]'>
              Iconic Landmarks
            </p>
            <p className='text-[12px] px-2 py-1 w-max bg-[#354f79] rounded-full text-[#eaf2ff] font-[500]'>
              Iconic Landmarks
            </p>
            <p className='text-[12px] px-2 py-1 w-max bg-[#eaf2ff] rounded-full text-[#354f79] font-[500]'>
              Iconic Landmarks
            </p>
            <p className='text-[12px] px-2 py-1 w-max bg-[#354f79] rounded-full text-[#eaf2ff] font-[500]'>
              Iconic Landmarks
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          <h3 className='mb-1 text-[14px] font-bold'>Anything else?</h3>
          <textarea className='border border-[#C5C6CC] rounded-xl w-full focus:outline-[#bebebe] h-32' />
        </div>

        {/* Image */}
        <div className='text-center'>
          <h3 className='mb-1 text-[14px] font-bold mt-2'> Let share a memorable moment!</h3>
          <Upload />
        </div>
      </div>

      <Button name='Submit' path='home' />
    </div>
  )
}

export default FeedbackDetail
