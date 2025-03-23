import { useState } from 'react'
import { Link } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../../components/button'
import Favorite from '../../components/Favorite'
import Header from '../../components/Header'
import { DESTINATION_HCM, Event_HCM } from '../../constants/data'
import { useStoreAction } from '../../store/zustand'

const Three = () => {
  const travelCategories = useStoreAction((state) => state.travel)
  const [idFilter, setIdfilter] = useState(travelCategories.categories[0]?.id)
  const [activeFilter, setActiveFilter] = useState<string | undefined>(travelCategories.categories[0]?.id)
  const eventList = Event_HCM.filter((e) => e.id === idFilter)
  const destinationList = DESTINATION_HCM.filter((e) => e.id === idFilter)

  console.log('travelCategories.categories, ', travelCategories.categories)

  const handleFilter = (id: any) => {
    setIdfilter(id)
    setActiveFilter(id)
  }

  return (
    <div className='flex flex-col justify-between main'>
      <Header title='Smart Travel' icon />
      <div className='p-4 mt-16 body'>
        <div className='flex gap-1 pb-2 mb-6 overflow-x-scroll' style={{ scrollbarWidth: 'thin' }}>
          {travelCategories.categories.map((e: any, i) => (
            <div
              key={i}
              onClick={() => handleFilter(e.id)}
              className={`px-2 py-1 cursor-pointer min-w-max text-[10px] rounded-3xl font-[500] ${
                activeFilter === e.id ? 'bg-[#354f79] text-white' : 'text-[#354f79] bg-[#eaf2ff]'
              }`}
            >
              {e?.name}
            </div>
          ))}
        </div>

        {/* FESTIVAL */}
        <div className='mb-6'>
          <div className='flex justify-between mb-2'>
            <p className='font-[600]'>MUST-SEE FESTIVAL</p>
            <Link to='/four' className='text-sm text-[#354f79] font-[600]'>
              See more
            </Link>
          </div>

          <Swiper spaceBetween={10} slidesPerView={1.4}>
            {eventList.length !== 0 ? (
              eventList.map((e, _) =>
                e.event.map((e, _) => (
                  <SwiperSlide className='SwiperSlide' key={_}>
                    <div className='bg-[#f8f9fe] rounded-2xl h-[340px]'>
                      <div className='relative'>
                        <img src={e.img} alt='' className='w-full h-40 rounded-tl-2xl rounded-tr-2xl' />
                        <p className='px-3 py-1 absolute right-2 text-[12px] top-2 rounded-full bg-[#354f79] text-white'>
                          {e.date}
                        </p>
                      </div>

                      <div className='p-4'>
                        <div className='mb-4'>
                          <p className='font-bold text-[14px] line-clamp-2'>{e.name}</p>
                          <p className='text-[#71727A] line-clamp-2 text-[12px]'>{e.address}</p>
                        </div>
                        <Favorite />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              )
            ) : (
              <p className='text-[12px] text-[#666]'>Không có sự kiện nào</p>
            )}
          </Swiper>
        </div>

        {/* DESTINATION */}
        <div>
          <div className='flex justify-between mb-2'>
            <p className='font-[600]'>TOP DESTINATION</p>
            <Link to='/dining' className='text-sm text-[#354f79] font-[600]'>
              See more
            </Link>
          </div>

          <Swiper spaceBetween={10} slidesPerView={1.4}>
            {destinationList.length !== 0 ? (
              destinationList.map((e, _) =>
                e.event.map((event, j) => (
                  <SwiperSlide className='SwiperSlide' key={j}>
                    <div className='bg-[#f8f9fe] rounded-2xl'>
                      <div className='relative'>
                        <img src={event.img} alt='' className='w-full h-40 rounded-tl-2xl rounded-tr-2xl' />
                        <p className='px-3 py-1 absolute right-2 text-[12px] top-2 rounded-full bg-[#354f79] text-white'>
                          {event.time}
                        </p>
                      </div>

                      <div className='p-4'>
                        <div className='mb-4'>
                          <p className='font-bold text-[16px]'>{event.city}</p>
                          <p className='text-[16px] text-[#71727A]'>{event.address}</p>
                        </div>
                        <Favorite />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              )
            ) : (
              <p className='text-[12px] text-[#666]'>Không có sự kiện nào</p>
            )}
          </Swiper>
        </div>
      </div>

      <div className='p-4'>
        <Button name='Next' path='four' />
      </div>
    </div>
  )
}

export default Three
