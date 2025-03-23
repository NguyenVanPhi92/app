import { Link } from 'react-router'
import Bag from '../assets/icons/home/Bag'
import Car from '../assets/icons/home/Car'
import DiningIcon from '../assets/icons/home/Dining'
import Flight from '../assets/icons/home/Flight'
import Hotel from '../assets/icons/home/Hotel'
import Map from '../assets/icons/home/Map'
import Ride from '../assets/icons/home/Ride'
import Travel from '../assets/icons/home/Travel'
import Dialog from '../components/Drawer'
import { ExpoloreHCM, News, Thumbnail } from '../constants/data'
import { useStoreAction } from '../store/zustand'
import Navbar from './Navbar'

const Home = () => {
  const home = useStoreAction((state) => state.home)
  const dispathEvent = useStoreAction((state) => state.dispathEvent)
  const login = useStoreAction((state) => state.login)

  const hanlde = (e: any) => dispathEvent(e)

  return (
    <div className='flex flex-col justify-between main'>
      <div className='relative'>
        <img src={Thumbnail} alt='img' className='w-full mb-6 rounded-es-3xl rounded-ee-3xl opacity-90' />
        <div className='absolute text-white bottom-10 left-4'>
          <h2 className='text-xl font-bold'>
            Welcome to <br /> Tan Son Nhat Airport!
          </h2>
          {!!login.password ? (
            <p>{login.email}</p>
          ) : (
            <>
              <Link to='/register'>Sign up </Link> or <Link to='/login'>Login</Link>
            </>
          )}
        </div>
      </div>

      <div className='p-4 mb-24 body'>
        {/* Menu Icons */}
        <div className='grid grid-cols-4 gap-2 mb-6 text-center'>
          {Number(home.country) === 1 || Number(home.country) === 3 ? (
            <Link to='/one'>
              <div className='p-3 rounded-xl bg-[#eaf2ff] m-auto w-16'>
                <Travel />
              </div>
              <p className='text-[12px] text-[#2F3036] mt-1'>Smart Travel</p>
            </Link>
          ) : (
            <Link to='/flight'>
              <div className='p-3 rounded-xl bg-[#eaf2ff] m-auto w-16'>
                <Flight />
              </div>
              <p className='text-[12px] text-[#2F3036] mt-1'>Flight Tracking</p>
            </Link>
          )}

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

          <div className='grid grid-cols-2 gap-2 text-white'>
            {News.map((e, i) => (
              <div key={i} className='relative flex flex-col justify-between bg-blue-100 rounded-xl min-h-[230px]'>
                <img src={e.img} alt='' className='inset-0 object-cover h-full opacity-70 rounded-xl' />
                <div className='absolute bottom-4 left-4'>
                  <p className=' text-[12px] text-white drop-shadow-2xl'>{e.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expolore */}
        <div className=''>
          <div className='flex items-center justify-between mb-2'>
            <h3 className='font-bold'>EXPLORE HO CHI MINH CITY</h3>
            <Link to={'/one'} className='text-[#354f79] font-bold text-[13px]'>
              Smart Travel
            </Link>
          </div>
          {ExpoloreHCM.map((e, i) => (
            <Link to={'/event'} className='bg-[#f8f9fe] mb-4 rounded-xl' key={i} onClick={() => hanlde(ExpoloreHCM[i])}>
              <div className='relative'>
                <img src={e.img} alt='' className='w-full rounded-tr-xl rounded-tl-xl' />
                <div className='py-[3px] px-3 bg-[#354f79] absolute top-2 text-[12px] right-2 rounded-xl text-white'>
                  {e.date}
                </div>
              </div>

              <div className='p-4'>
                <p className='font-bold'>{e.name}</p>
                <p className='text-[#494A50] text-[12px] mb-2'>{e.address}</p>
                <p className='text-[#494A50] text-[12px] line-clamp-2'>{e.des}</p>
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

export default Home
