import { Link } from 'react-router'
import Clock from '../assets/icons/Clock'
import Date from '../assets/icons/Date'
import Location from '../assets/icons/Location'
import Menu from '../assets/icons/Menu'
import { Button } from '../components/button'
import CloseTab from '../components/Close'
import { Image } from '../constants/data'

const Store = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <div className='relative'>
        <img src={Image} alt='img' className='w-full' />
        <CloseTab />
        <div className='p-4'>
          <div className=' border-b-[1px] mb-4 pb-4 border-[#797979]'>
            <div className='flex items-center mb-4 gap-x-4'>
              <p className='font-bold'>Store Name</p>
              <p className='text-green-600'>Open</p>
            </div>

            <div className='flex flex-col items-start text-sm gap-y-1'>
              <div className='flex items-center -ml-[2px] gap-x-4'>
                <Location />
                <p className=''>Location</p>
              </div>

              <div className='flex items-center gap-x-4'>
                <Clock />
                <p>Operations Hours</p>
              </div>
            </div>

            <div className='flex justify-end text-sm gap-x-4'>
              <Link to={'/reservation'} className='flex items-center cursor-pointer gap-x-1'>
                <Date />
                <p className='text-[#354f79] font-[500]'>Reserve</p>
              </Link>

              <div className='flex items-center cursor-pointer gap-x-1'>
                <Menu />
                <p className='text-[#354f79] font-[500]'>View Menu</p>
              </div>
            </div>
          </div>

          <div className=''>
            <h3 className='font-bold'>About</h3>
            <p className='mt-5 text-[12px]'>
              Description Description Description Description Description Description Description Description
              Description Description Description Description
            </p>
          </div>
        </div>
      </div>

      <div className='p-4'>
        <Button name='Order' path='menu' />
      </div>
    </div>
  )
}

export default Store
