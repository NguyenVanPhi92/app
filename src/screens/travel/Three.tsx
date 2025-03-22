import { useState } from 'react'
import { Link } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../../components/button'
import Favorite from '../../components/Favorite'
import Header from '../../components/Header'
import { Event_HCM, Image } from '../../constants/data'
import { useStoreAction } from '../../store/zustand'

const Three = () => {
  const travelCategories = useStoreAction((state) => state.travel)
  const [idFilter, setIdfilter] = useState(undefined)
  // const [active, setActive] = useState(false)
  console.log(idFilter)

  // hanlde
  // const handleFilter = (id: string) => {
  //   setEventsHCM(Event_HCM.filter((e) => e.id === id))
  //   console.log('id: ', id)
  //   // console.log('event_hcm: ', event_hcm)
  // }
  return (
    <div className='flex flex-col justify-between main'>
      <Header title='Smart Travel' icon />
      <div className='p-4 mt-16 body'>
        <div className='flex gap-1 pb-2 mb-6 overflow-x-scroll' style={{ scrollbarWidth: 'thin' }}>
          <div className='px-2 py-1 min-w-max text-[10px] text-white bg-[#354f79] rounded-3xl font-[500]'>
            Recommend
          </div>
          {travelCategories.categories.map((e: any, i) => (
            <div
              key={i}
              onClick={() => setIdfilter(e.id)}
              className={`px-2 py-1 min-w-max text-[10px] text-[#354f79] bg-[#eaf2ff] rounded-3xl font-[500]`}
            >
              {e?.name}
            </div>
          ))}
        </div>

        <div className='mb-6'>
          <div className='flex justify-between mb-2'>
            <p className='font-[600]'>MUST-SEE FESTIVAL</p>
            <Link to='/four' className='text-sm text-[#354f79] font-[600]'>
              See more
            </Link>
          </div>

          <Swiper spaceBetween={10} slidesPerView={1.4}>
            {Event_HCM.map((e, _) =>
              e.event.map((e, i) => (
                <SwiperSlide className='SwiperSlide' key={i}>
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
            )}
          </Swiper>
        </div>

        <div>
          <div className='flex justify-between mb-2'>
            <p className='font-[600]'>TOP DESTINATION</p>
            <Link to='/dining' className='text-sm text-[#354f79] font-[600]'>
              See more
            </Link>
          </div>

          <Swiper spaceBetween={10} slidesPerView={1.4}>
            {Array.from({ length: 8 }, (_, i) => (
              <SwiperSlide className='SwiperSlide' key={i}>
                <div className='bg-[#f8f9fe] rounded-2xl'>
                  <div className='relative'>
                    <img src={Image} alt='' className='w-full rounded-tl-2xl rounded-tr-2xl' />
                    <p className='px-3 py-1 absolute right-2 text-[12px] top-2 rounded-full bg-[#354f79] text-white'>
                      10/2
                    </p>
                  </div>

                  <div className='p-4'>
                    <div className='mb-4'>
                      <p className='font-bold text-[16px]'>Places</p>
                      <p className='text-[16px] text-[#71727A]'>Detailed address</p>
                    </div>
                    <Favorite />
                  </div>
                </div>
              </SwiperSlide>
            ))}
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
