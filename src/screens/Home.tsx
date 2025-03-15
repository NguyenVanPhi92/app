import { Link } from 'react-router'
import Bag from '../assets/icons/home/Bag'
import Car from '../assets/icons/home/Car'
import DiningIcon from '../assets/icons/home/Dining'
import Hotel from '../assets/icons/home/Hotel'
import Map from '../assets/icons/home/Map'
import Ride from '../assets/icons/home/Ride'
import Travel from '../assets/icons/home/Travel'
import Dialog from '../components/Drawer'
import Image from '../constants/data'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <div className='relative'>
        <img src={Image} alt='img' className='w-full mb-6 rounded-es-3xl rounded-ee-3xl' />
        <div className='absolute bottom-10 left-4'>
          <h2 className='text-xl font-bold'>
            Welcome to <br /> Tan Son Nhat Airport!
          </h2>
          <Link to='/register'>Sign up </Link> or <Link to='/login'>Login</Link>
        </div>
      </div>

      <div className='h-[90vh] overflow-y-scroll scroll-smooth p-4'>
        {/* Icons */}
        <div className='grid grid-cols-4 gap-2 mb-6 text-center'>
          <Link to='/travel'>
            <div className='p-3 rounded-xl bg-[#eaf2ff] m-auto w-16'>
              <Travel />
            </div>
            <p className='text-[12px] text-[#2F3036] mt-1'>Smart Travel</p>
          </Link>
          <Link to='/dining'>
            <div className='p-3 rounded-xl bg-[#eaf2ff] m-auto w-16'>
              <DiningIcon />
            </div>
            <p className='text-[12px] text-[#2F3036] mt-1'>Dining</p>
          </Link>
          <div className='cursor-pointer'>
            <div className='p-3 rounded-xl bg-[#eaf2ff] m-auto w-16'>
              <Ride />
            </div>
            <p className='text-[12px] text-[#2F3036] mt-1'>Ride Hailing</p>
          </div>
          <div className='cursor-pointer'>
            <div className='p-3 rounded-xl bg-[#eaf2ff] m-auto w-16'>
              <Map />
            </div>
            <p className='text-[12px] text-[#2F3036] mt-1'>Maps</p>
          </div>
          <div className='cursor-pointer'>
            <div className='p-3 rounded-xl bg-[#eaf2ff] m-auto w-16'>
              <Bag />
            </div>
            <p className='text-[12px] text-[#2F3036] mt-1'>Baggage</p>
          </div>
          <div className='cursor-pointer'>
            <div className='p-3 rounded-xl bg-[#eaf2ff] m-auto w-16'>
              <Hotel />
            </div>
            <p className='text-[12px] text-[#2F3036] mt-1'>Hotel Booking</p>
          </div>
          <div className='cursor-pointer'>
            <div className='p-3 rounded-xl bg-[#eaf2ff] m-auto w-16'>
              <Car />
            </div>
            <p className='text-[12px] text-[#2F3036] mt-1'>Car Rental</p>
          </div>
          <div className='cursor-pointer'>
            <Dialog />
            <p className='text-[12px] text-[#2F3036] mt-1'>See More</p>
          </div>
        </div>

        {/* News */}
        <div className='mb-6'>
          <h2 className='mb-2 font-bold'>WHAT'S NEW?</h2>
          <div className='grid grid-cols-2 gap-4 '>
            <div className='relative'>
              <img src={Image} alt='' className='rounded-xl' />
              <div className='absolute bottom-4 left-4'>
                <p className='text-[12px]'>Subtitle</p>
                <p className='font-bold text-[12px]'>News</p>
              </div>
            </div>
            <div className='relative'>
              <img src={Image} alt='' className='rounded-xl' />
              <div className='absolute bottom-4 left-4'>
                <p className='text-[12px]'>Subtitle</p>
                <p className='font-bold text-[12px]'>News</p>
              </div>
            </div>
            <div className='relative'>
              <img src={Image} alt='' className='rounded-xl' />
              <div className='absolute bottom-4 left-4'>
                <p className='text-[12px]'>Subtitle</p>
                <p className='font-bold text-[12px]'>News</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expolore */}
        <div className=''>
          <h3 className='mb-2 font-bold'>EXPLORE HO CHI MINH CITY</h3>
          <div className='bg-[#f8f9fe] mb-4 rounded-xl'>
            <div className='relative'>
              <img src={Image} alt='' className='w-full rounded-tr-xl rounded-tl-xl' />
              <div className='py-[3px] px-3 bg-[#354f79] absolute top-2 text-[12px] right-2 rounded-xl text-white'>
                10/2
              </div>
            </div>

            <div className='p-4'>
              <p className='font-bold'>Event name</p>
              <p className='text-[#494A50] text-[12px] mb-2'>Detailed address</p>
              <p className='text-[#494A50] text-[12px]'>
                Description. Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>

          <div className='bg-[#f8f9fe] rounded-xl'>
            <div className='relative'>
              <img src={Image} alt='' className='w-full rounded-tr-xl rounded-tl-xl' />
              <div className='py-[3px] px-3 bg-[#354f79] absolute top-2 text-[12px] right-2 rounded-xl text-white'>
                10/2
              </div>
            </div>

            <div className='p-4'>
              <p className='font-bold'>Event name</p>
              <p className='text-[#494A50] text-[12px] mb-2'>Detailed address</p>
              <p className='text-[#494A50] text-[12px]'>
                Description. Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mb-2'>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
