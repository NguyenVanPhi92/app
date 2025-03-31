import { Link } from 'react-router'
import Header from '../components/Header'
import Navbar from './Navbar'
import { Image } from '../constants/data'
import { useState } from 'react'

const option = [
  { id: 1, name: 'TERMINAL 1' },
  { id: 2, name: 'TERMINAL 2' },
  { id: 3, name: 'CAFÉ' },
  { id: 4, name: 'QUICK BITES' }
]

const Shopping = () => {
  const [activeFilter, setActiveFilter] = useState<number | undefined>(1)
  return (
    <div className='flex flex-col justify-between pb-20 pt-14 main'>
      <img src={Image} alt='img' className='scroll-img' />

      <div>
        <Header title='Shopping' icon />

        <div className='body'>
          <div className='flex text-[12px] gap-x-4 mt-4 justify-between'>
            {option.map((e, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(e.id)}
                className={` ${
                  activeFilter === e.id ? 'bg-[#354f79] text-white' : 'bg-[#eaf2ff] text-[#354f79]'
                } px-2 py-1 rounded-2xl font-[500] `}
              >
                {e.name}
              </button>
            ))}
          </div>

          {/* List products */}
          <div className='flex flex-col'>
            {Array.from({ length: 4 }, (_, i) => (
              <Link to='/store' className='flex items-center py-4 gap-x-4 border-b-[1px] border-[#74747433]' key={i}>
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
      </div>

      <div className='mb-2'>
        <Navbar />
      </div>
    </div>
  )
}

export default Shopping
