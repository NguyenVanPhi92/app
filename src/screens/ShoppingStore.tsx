import Clock from '../assets/icons/Clock'
import Date from '../assets/icons/Date'
import Location from '../assets/icons/Location'
import Menu from '../assets/icons/Menu'
import Image from '../constants/data'

const ShoppingStore = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <div>
        <img src={Image} alt='img' className='w-full' />

        <div className='p-4 border-b-[1px] border-red-50'>
          <div className='flex items-center mb-4 gap-x-4'>
            <p className='font-bold'>ShoppingStore Name</p>
            <p className='text-green-600'>Open</p>
          </div>

          <div className='flex flex-col items-start text-sm gap-y-1'>
            <div className='flex items-center -ml-[2px] gap-x-4'>
              <Location />
              <p>Location</p>
            </div>

            <div className='flex items-center gap-x-4'>
              <Clock />
              <p>Operations Hours</p>
            </div>
          </div>

          <div className='flex justify-end text-sm gap-x-4'>
            <div className='flex items-center cursor-pointer gap-x-1'>
              <Date />
              <p>Reserve</p>
            </div>

            <div className='flex items-center cursor-pointer gap-x-1'>
              <Menu />
              <p>View Menu</p>
            </div>
          </div>
        </div>

        <div className='p-4'>
          <h3 className='font-bold'>About</h3>
          <p className='mt-5 text-[12px]'>
            Description Description Description Description Description Description Description Description Description
            Description Description Description
          </p>
        </div>
      </div>

      <div></div>
    </div>
  )
}

export default ShoppingStore
