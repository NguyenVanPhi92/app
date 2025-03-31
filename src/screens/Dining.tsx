import { useState } from 'react'
import { Link } from 'react-router'
import Header from '../components/Header'
import TerminalSelected from '../components/TerminalSelected'
import { BannerDining, DiningStore } from '../constants/data'
import { useStoreAction } from '../store/zustand'
import Navbar from './Navbar'

const Dining = () => {
  const dispathDiningStore = useStoreAction((state) => state.dispathDiningStore)
  const [tag, setTag] = useState()
  console.log('tag: ', tag)

  return (
    <div className='flex flex-col justify-between pt-16 pb-20 main'>
      <Header title='Dining' icon />

      <div className='dining'>
        <img src={BannerDining} alt='img' className='object-cover w-full h-70' />
        <div className='m-4'>
          <TerminalSelected onChang={setTag} />
        </div>

        {/* List products */}
        <div className='flex flex-col p-4'>
          {DiningStore.map((e, i) => (
            <Link
              onClick={() => dispathDiningStore(e)}
              to='/store'
              className='flex items-center py-4 gap-x-4 border-b-[1px] border-[#74747433]'
              key={i}
            >
              <img src={e.img} alt='img' className='object-cover w-24 h-24 rounded-2xl' />

              <div className='flex flex-col gap-y-4'>
                <div className=''>
                  <p className='font-bold'>{e.name}</p>
                  <p className='text-[14px] text-[#737373]'>
                    {e.location} - {e.time}
                  </p>
                </div>
                <p className='p-1 flex items-center justify-center font-[600] text-[#354f79] bg-[#eaf2ff] px-4 w-max rounded-full text-[10px]'>
                  {e.tag}
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
