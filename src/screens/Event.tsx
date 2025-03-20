import { GoHeart } from 'react-icons/go'
import Clock from '../assets/icons/Clock'
import Location from '../assets/icons/Location'
import { useStoreAction } from '../store/zustand'
import '../styles/cart.scss'

const Event = () => {
  const event = useStoreAction((state) => state.event)
  console.log('Event: ', event)

  return (
    <div className='flex flex-col justify-between main'>
      <div className=''>
        <img src={event.img} alt='img' className='w-full' />
        <div className='p-4'>
          <div className='pb-4 mb-4 '>
            <div className='flex items-center mb-1 gap-x-4'>
              <p className='font-bold'>{event.name}</p>
            </div>
            <p className='mb-4 text-[#354f79] py-1 px-2 bg-[#eaf8f9] w-max rounded-full text-[10px]'>{event.city}</p>

            <div className='flex flex-col items-start text-sm gap-y-1'>
              <div className='flex items-center -ml-[2px] gap-x-4'>
                <Location />
                <p className=''>{event.address}</p>
              </div>

              <div className='flex items-center gap-x-4'>
                <Clock />
                <p>{event.date}</p>
              </div>
            </div>
          </div>

          <div className=''>
            <h3 className='font-bold'>About</h3>
            <p className='mt-3 text-[12px]'>{event.des}</p>
          </div>
        </div>
      </div>

      <div className='p-4'>
        <div className='border-[1.4px] py-1 border-[#354f79] rounded-xl flex justify-center items-center gap-x-2 text-[#354f79] '>
          <GoHeart />
          <span className='font-bold'>Interest</span>
        </div>
      </div>
    </div>
  )
}

export default Event
