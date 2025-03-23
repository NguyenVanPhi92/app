import { useState } from 'react'
import { Button } from '../../components/button'
import Favorite from '../../components/Favorite'
import Header from '../../components/Header'
import { DESTINATION_HCM, Event_HCM } from '../../constants/data'

const listNav = ['All', 'Festival', 'Destination']

const Four = () => {
  const [activeTab, setActiveTab] = useState('All')

  return (
    <div className='flex flex-col justify-between main'>
      {/* Nav Head */}
      <Header title='Smart Travel' icon />

      <div className='p-4 mt-20 body'>
        {/* Filter */}
        <div className='grid grid-cols-3 p-1 text-[14px] rounded-xl mb-4 bg-[#eaf2ff]'>
          {listNav.map((e, i) => (
            <button
              key={i}
              className={`px-6 py-2 rounded-xl ${activeTab === e ? 'bg-white' : 'text-gray-500'}`}
              onClick={() => setActiveTab(e)}
            >
              <span className={`font-bold ${activeTab === e ? 'text-[#354f79]' : 'text-[#71727A]'}`}>{e}</span>
            </button>
          ))}
        </div>

        {/* CARD */}
        <div className='mb-6'>
          {activeTab === 'Festival' &&
            Event_HCM.map((e, i) =>
              e.event.map((event, j) => (
                <div className='bg-[#f8f9fe] rounded-2xl mb-6' key={j}>
                  <div className='relative'>
                    <img src={event.img} alt='' className='object-cover w-full h-36 rounded-tl-2xl rounded-tr-2xl' />
                    <p className='px-3 py-1 absolute right-2 text-[12px] top-2 rounded-full bg-[#354f79] text-white'>
                      {event.date}
                    </p>
                  </div>

                  <div className='p-4'>
                    <div className='mb-4'>
                      <p className='font-bold text-[16px]'>{event.name}</p>
                      <p className='text-[12px] text-[#71727A] mb-2'>{event.address}</p>
                      <p className='text-[12px] text-[#71727A] line-clamp-3'>{event.desc}</p>
                    </div>
                    <Favorite />
                  </div>
                </div>
              ))
            )}

          {activeTab === 'Destination' &&
            DESTINATION_HCM.map((e, i) =>
              e.event.map((event, j) => (
                <div className='bg-[#f8f9fe] rounded-2xl mb-6' key={j}>
                  <div className='relative'>
                    <img src={event.img} alt='' className='object-cover w-full h-36 rounded-tl-2xl rounded-tr-2xl' />
                    <p className='px-3 py-1 absolute right-2 text-[12px] top-2 rounded-full bg-[#354f79] text-white'>
                      {event.time}
                    </p>
                  </div>

                  <div className='p-4'>
                    <div className='mb-4'>
                      <p className='font-bold text-[16px]'>{event.name}</p>
                      <p className='text-[12px] text-[#71727A] mb-2'>{event.address}</p>
                      <p className='text-[12px] text-[#71727A] line-clamp-3'>{event.desc}</p>
                    </div>
                    <Favorite />
                  </div>
                </div>
              ))
            )}

          {activeTab === 'All' &&
            Event_HCM.map((e, i) =>
              e.event.map((event, j) => (
                <div className='bg-[#f8f9fe] rounded-2xl mb-6' key={j}>
                  <div className='relative'>
                    <img src={event.img} alt='' className='object-cover w-full h-36 rounded-tl-2xl rounded-tr-2xl' />
                    <p className='px-3 py-1 absolute right-2 text-[12px] top-2 rounded-full bg-[#354f79] text-white'>
                      {event.date}
                    </p>
                  </div>

                  <div className='p-4'>
                    <div className='mb-4'>
                      <p className='font-bold text-[16px]'>{event.name}</p>
                      <p className='text-[12px] text-[#71727A] mb-2'>{event.address}</p>
                      <p className='text-[12px] text-[#71727A] line-clamp-3'>{event.desc}</p>
                    </div>
                    <Favorite />
                  </div>
                </div>
              ))
            )}

          {activeTab === 'All' &&
            DESTINATION_HCM.map((e, i) =>
              e.event.map((event, j) => (
                <div className='bg-[#f8f9fe] rounded-2xl mb-6' key={j}>
                  <div className='relative'>
                    <img src={event.img} alt='' className='object-cover w-full h-36 rounded-tl-2xl rounded-tr-2xl' />
                    <p className='px-3 py-1 absolute right-2 text-[12px] top-2 rounded-full bg-[#354f79] text-white'>
                      {event.time}
                    </p>
                  </div>

                  <div className='p-4'>
                    <div className='mb-4'>
                      <p className='font-bold text-[16px]'>{event.name}</p>
                      <p className='text-[12px] text-[#71727A] mb-2'>{event.address}</p>
                      <p className='text-[12px] text-[#71727A] line-clamp-3'>{event.desc}</p>
                    </div>
                    <Favorite />
                  </div>
                </div>
              ))
            )}
        </div>
      </div>

      <div className='p-4'>
        <Button name='Next' path='five' />
      </div>
    </div>
  )
}

export default Four
