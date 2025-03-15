import { GoHeart } from 'react-icons/go'
import Search from '../../assets/icons/Search'
import { Button } from '../../components/button'
import Goback from '../../components/Goback'
import Image from '../../constants/data'

const Four = () => {
  return (
    <div className='flex flex-col justify-between p-4 main'>
      {/* Nav Head */}
      <div className='flex justify-between mb-3'>
        <Goback />
        <p className='font-[600]'>Smart Travel</p>
        <Search />
      </div>

      <div className='h-[90vh] overflow-y-scroll scroll-smooth'>
        {/* Filter */}
        <div className='grid text-[14px] grid-cols-3 text-center mb-4 gap-x-1 items-center justify-between p-1 bg-[#eaf2ff] rounded-2xl'>
          <p className='font-[700] text-[#71727A]'>All</p>
          <p className='w-full py-1 font-[700] text-[#354f79] bg-white rounded-xl'>Festival</p>
          <p className='font-[700] text-[#71727A]'>Destination</p>
        </div>
        <div className='flex mb-8 gap-x-1'>
          <p className='px-2 py-1 w-max text-[10px] text-white bg-[#354f79] rounded-3xl font-[500]'>RECOMMEND</p>
          <p className='px-2 py-1 w-max text-[10px] text-[#354f79] bg-[#eaf2ff] rounded-3xl font-[500]'>
            HISTORYCAL & CULTURAL
          </p>
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
              <div className='border-2 py-2 border-[#354f79] rounded-2xl flex justify-center items-center gap-x-2 text-[#354f79] '>
                <GoHeart />
                <span className='font-bold'>Interest</span>
              </div>
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
              <div className='flex items-center justify-center py-2 rounded-2xl gap-x-2'>
                <svg xmlns='http://www.w3.org/2000/svg' width='13' height='12' viewBox='0 0 13 12' fill='none'>
                  <mask
                    id='mask0_3471_1093'
                    style={{ maskType: 'alpha' }}
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='13'
                    height='12'
                  >
                    <path
                      d='M3.875 0.693604C2.08628 0.693604 0.625 2.13087 0.625 3.91735C0.625 4.58725 0.759877 5.67584 1.50343 6.96578C2.24493 8.25215 3.57209 9.70478 5.90388 11.1383L5.90633 11.1398C6.08522 11.2486 6.2906 11.3062 6.5 11.3062C6.7094 11.3062 6.91478 11.2486 7.09367 11.1398L7.09612 11.1383C9.42791 9.70478 10.7551 8.25215 11.4966 6.96578C12.2401 5.67584 12.375 4.58725 12.375 3.91735C12.375 2.13087 10.9137 0.693604 9.125 0.693604C8.18264 0.693604 7.38537 1.19782 6.87009 1.6249C6.73202 1.73934 6.60801 1.8534 6.5 1.95958C6.39199 1.8534 6.26798 1.73934 6.12991 1.6249C5.61463 1.19782 4.81736 0.693604 3.875 0.693604Z'
                      fill='#354F79'
                    />
                  </mask>
                  <g mask='url(#mask0_3471_1093)'>
                    <rect x='0.5' width='12' height='12' fill='#354F79' />
                  </g>
                </svg>
                <span className='font-bold text-[#354f79]'>Interest</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button name='Next' path='five' />
    </div>
  )
}

export default Four
