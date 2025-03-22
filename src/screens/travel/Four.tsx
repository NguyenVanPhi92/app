import { useState } from 'react'
import { Button } from '../../components/button'
import Favorite from '../../components/Favorite'
import Header from '../../components/Header'
import { Image } from '../../constants/data'
import { useStoreAction } from '../../store/zustand'

const Four = () => {
  const [activeTab, setActiveTab] = useState('all')
  const travelCategories = useStoreAction((state) => state.travel)
  return (
    <div className='flex flex-col justify-between main'>
      {/* Nav Head */}
      <Header title='Smart Travel' icon />

      <div className='p-4 mt-20 body'>
        {/* Filter */}
        <div className='grid grid-cols-3 p-1 text-[14px] rounded-full mb-4 bg-[#eaf2ff]'>
          <button
            className={`px-6 py-2 rounded-3xl ${activeTab === 'all' ? 'bg-white' : 'text-gray-500'}`}
            onClick={() => setActiveTab('all')}
          >
            <span className={`font-bold ${activeTab === 'all' ? 'text-[#354f79]' : 'text-[#71727A]'}`}>All</span>
          </button>
          <button
            className={`px-6 py-2 rounded-3xl ${activeTab === 'festival' ? 'bg-white' : 'text-gray-500'}`}
            onClick={() => setActiveTab('festival')}
          >
            <span className={`font-bold ${activeTab === 'festival' ? 'text-[#354f79]' : 'text-[#71727A]'}`}>
              Festival
            </span>
          </button>
          <button
            className={`px-6 py-2 rounded-3xl ${activeTab === 'destination' ? 'bg-white' : 'text-gray-500'}`}
            onClick={() => setActiveTab('destination')}
          >
            <span className={`font-bold ${activeTab === 'destination' ? 'text-[#354f79]' : 'text-[#71727A]'}`}>
              Destination
            </span>
          </button>
        </div>

        <div className='flex gap-1 pb-2 mb-6 overflow-x-scroll' style={{ scrollbarWidth: 'thin' }}>
          <div className='px-2 py-1 min-w-max text-[10px] text-white bg-[#354f79] rounded-3xl font-[500]'>
            Recommend
          </div>
          {travelCategories.categories.map((e: any, i) => (
            <div
              key={i}
              // onClick={() => setIdfilter(e.id)}
              className={`px-2 py-1 min-w-max text-[10px] text-[#354f79] bg-[#eaf2ff] rounded-3xl font-[500]`}
            >
              {e?.name}
            </div>
          ))}
        </div>

        {/* CARD */}
        <div className='mb-6'>
          <div className='bg-[#f8f9fe] rounded-2xl mb-6'>
            <div className='relative'>
              <img src={Image} alt='' className='object-cover w-full h-36 rounded-tl-2xl rounded-tr-2xl' />
              <p className='px-3 py-1 absolute right-2 text-[12px] top-2 rounded-full bg-[#354f79] text-white'>10/2</p>
            </div>

            <div className='p-4'>
              <div className='mb-4'>
                <p className='font-bold text-[16px]'>Event name</p>
                <p className='text-[12px] text-[#71727A] mb-2'>Detailed address</p>
                <p className='text-[12px] text-[#71727A]'>
                  Description. Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                </p>
              </div>
              <Favorite />
            </div>
          </div>

          <div className='bg-[#f8f9fe] rounded-2xl'>
            <div className='relative'>
              <img src={Image} alt='' className='object-cover w-full h-36 rounded-tl-2xl rounded-tr-2xl' />
              <p className='px-3 py-1 absolute right-2 text-[12px] top-2 rounded-full bg-[#354f79] text-white'>10/2</p>
            </div>

            <div className='p-4'>
              <div className='mb-4'>
                <p className='font-bold text-[16px]'>Places</p>
                <p className='text-[12px] text-[#71727A] mb-2'>Detailed address</p>
                <p className='text-[12px] text-[#71727A]'>
                  Description. Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                </p>
              </div>
              <Favorite />
            </div>
          </div>
        </div>
      </div>

      <div className='p-4'>
        <Button name='Next' path='five' />
      </div>
    </div>
  )
}

export default Four
