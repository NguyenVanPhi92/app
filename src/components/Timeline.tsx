import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { TravelPlan } from '../constants/data'

const Timeline = () => {
  const [openDays, setOpenDays] = useState<Record<number, boolean>>({})

  const toggleDay = (index: number) => {
    setOpenDays((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  console.log('TravelPlan: ', TravelPlan)

  return (
    <div className='p-4'>
      {TravelPlan.map((day, index) => {
        const isOpen = openDays[index] || false

        return (
          <div key={index} className='mb-6'>
            {/* Header */}
            <div className='flex items-center justify-between cursor-pointer' onClick={() => toggleDay(index)}>
              <h2 className='text-[14px] font-bold'>
                {day.name} - {day.date}
              </h2>
              <FaChevronDown
                size={14}
                className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </div>

            <motion.div
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className='overflow-hidden'
            >
              <div className='mt-4'>
                {day.event
                  .sort(
                    (a, b) => new Date(`1970-01-01T${a.time}`).getTime() - new Date(`1970-01-01T${b.time}`).getTime()
                  )
                  .map((event, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className='flex items-center gap-4'
                    >
                      <p className='min-w-max text-[12px] text-gray-500 mt-4'>{event.time}</p>
                      <div className='flex flex-col items-center'>
                        <div className='flex items-center justify-center w-5 h-5 mt-2 mb-2 text-white bg-gray-300 rounded-full'>
                          {idx + 1}
                        </div>
                        {day.event.length - 1 > idx && <div className='w-[2px] bg-gray-300 h-12'></div>}
                      </div>

                      <div className='flex rounded-lg bg-[#f8f9ff] w-full'>
                        {event.img && (
                          <img src={event.img} alt={event.des} className='w-20 h-16 rounded-tl-xl rounded-es-xl' />
                        )}

                        <div className='px-4 py-2'>
                          <p className='font-bold text-[12px] line-clamp-2 mb-1' style={{ lineHeight: '16px' }}>
                            {event.des}
                          </p>
                          {event.address && <p className='text-[10px]'>{event.address}</p>}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}

export default Timeline
