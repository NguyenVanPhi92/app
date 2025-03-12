import Image from '../contans/data'
import '../styles/cart.scss'
import { Button } from './button'

const Store = () => {
  return (
    <div className='main flex flex-col justify-between'>
      <div>
        <img src={Image} alt='img' className='w-full' />

        <div className='p-4 border-b-[1px] border-red-50'>
          <div className='flex gap-x-4'>
            <p className='font-bold'>Store Name</p>
            <p className='text-green-600'>Open</p>
          </div>

          <div className='text-sm'>
            <p className='flex gap-x-4'>
              <span>i</span>
              <span>Location</span>
            </p>

            <p className='flex gap-x-4'>
              <span>i</span>
              <span>Operations Hours</span>
            </p>
          </div>

          <div className='flex gap-x-4 justify-end text-sm'>
            <p className='flex gap-x-4'>
              <span>i</span>
              <span>Reserve</span>
            </p>

            <p className='flex gap-x-4'>
              <span>i</span>
              <span>View Menu</span>
            </p>
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

      <Button name='order' path='menu' />
    </div>
  )
}

export default Store
