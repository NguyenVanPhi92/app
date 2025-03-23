import Clock from '../assets/icons/Clock'
import Location from '../assets/icons/Location'
import BookingForm from '../components/BookingForm '
import { Button } from '../components/button'
import CloseTab from '../components/Close'
import { Image } from '../constants/data'

const SleepZone = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <div className='relative'>
        <img src={Image} alt='img' className='w-full' />
        <CloseTab />

        <div className='p-4'>
          <p className='mb-2 font-bold'>SleepZone Name</p>
          <p className='text-[10px] bg-[#eaf2ff] text-[#354f79] rounded-full w-[48px] py-1 text-center mb-2 font-[500]'>
            TAG
          </p>

          <div className='flex flex-col items-start text-sm '>
            <div className='flex items-center -ml-[2px] gap-x-4'>
              <Location />
              <p className='text-[#71727A]'>Location</p>
            </div>

            <div className='flex items-center gap-x-4'>
              <Clock />
              <p className='text-[#71727A]'>Operations Hours</p>
            </div>
          </div>
        </div>

        <div className='p-4 mb-10'>
          <h3 className='font-bold'>About</h3>
          <p className='mt-2 text-[12px] text-[#71727A]'>
            Description Description Description Description Description Description Description Description Description
            Description Description Description
          </p>
        </div>

        <BookingForm />
      </div>

      <div className='p-4'>
        <Button name='Order' path='booking' />
      </div>
    </div>
  )
}

export default SleepZone
