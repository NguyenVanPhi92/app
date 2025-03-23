import { Link } from 'react-router'
import Header from '../components/Header'
import TerminalSelected from '../components/TerminalSelected'
import { Image } from '../constants/data'
import Navbar from './Navbar'

const Dining = () => {
  return (
    <div className='flex flex-col justify-between pt-16 pb-20 main'>
      <Header title='Dining' icon />

      <div className='dining'>
        <img src={Image} alt='img' className='object-cover w-full h-70' />
        <div className='m-4'>
          <TerminalSelected />
        </div>

        {/* List products */}
        <div className='flex flex-col p-4'>
          {Array.from({ length: 4 }, (_, i) => (
            <Link to='/sleepzone' className='flex items-center py-4 gap-x-4 border-b-[1px] border-[#74747433]' key={i}>
              <img src={Image} alt='img' className='object-cover w-24 h-24 rounded-2xl' />

              <div className='flex flex-col gap-y-4'>
                <div className=''>
                  <p className='font-bold'>Shop</p>
                  <p className='text-[14px] text-[#737373]'>Location - Operations Hour</p>
                </div>
                <p className='p-1 flex items-center justify-center font-[600] text-[#354f79] bg-[#eaf2ff] w-[40px] rounded-full text-[10px]'>
                  TAG
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className='mb-2'>
        <Navbar />
      </div>
    </div>
  )
}

export default Dining
