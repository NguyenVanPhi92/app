import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import Car from '../assets/icons/home/Car'
import More from '../assets/icons/home/More'
import { IconHome } from '../constants/data'
import { Link } from 'react-router'

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openDialog = () => setIsOpen(true)
  const closeDialog = () => setIsOpen(false)

  return (
    <div className='relative z-20 flex items-center justify-center'>
      <div className='p-3 rounded-xl bg-[#eaf2ff] m-auto w-16' onClick={openDialog}>
        <More />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='fixed inset-0 flex items-center justify-center'
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className='relative p-6 bg-white rounded-lg shadow-lg w-96'
            >
              <h3 className='font-bold text-center'>WITH Tan Son Nhat</h3>
              <IoIosClose className='absolute right-2 top-2 text-[30px]' onClick={closeDialog} />

              <div className='grid grid-cols-4 gap-4 mt-4'>
                {IconHome.map((e, i) => (
                  <Link to={e.path} className='' key={i}>
                    <div className='p-3 rounded-xl bg-[#eaf2ff] m-auto w-16'>{e.icon()}</div>
                    <p className='text-[12px] text-[#2F3036] mt-1'>{e.name}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Dialog
