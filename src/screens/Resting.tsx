import { useState } from 'react'
import { Link } from 'react-router'
import Header from '../components/Header'
import { BannerResting, RestingData } from '../constants/data'
import { useStoreAction } from '../store/zustand'
import Navbar from './Navbar'

const option = [
  { id: 1, name: 'TERMINAL 1' },
  { id: 2, name: 'TERMINAL 2' },
  { id: 3, name: 'CAFÉ' },
  { id: 4, name: 'QUICK BITES' }
]

const Resting = () => {
  const [activeFilter, setActiveFilter] = useState<number | undefined>(1)
  const dispathResting = useStoreAction((state) => state.dispathResting)

  // const handleResting = (data: any) => {

  // }
  return (
    <div className='flex flex-col justify-between pb-20 pt-14 main'>
      <img src={BannerResting} alt='img' className='scroll-img' />

      <div>
        <Header title='Resting' icon />

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
            {RestingData.map((e, idx) => (
              <Link
                to='/sleepzone'
                className='flex items-center py-4 gap-x-4 border-b-[1px] border-[#74747433]'
                key={idx}
                onClick={() => dispathResting(e)}
              >
                <img src={e.img} alt='img' className='object-cover w-24 h-24 rounded-2xl' />

                <div className='flex flex-col gap-y-4'>
                  <div className=''>
                    <p className='font-[400] text-[12px] line-clamp-2'>{e.about}</p>
                    <p className='text-[14px] text-[#737373]'>
                      {e.location} - {e.time}
                    </p>
                  </div>
                  <p className='p-1 flex min-w-max items-center justify-center font-[600] text-[#354f79] bg-[#eaf2ff] w-[40px] rounded-full text-[10px]'>
                    {e.tag}
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

export default Resting
