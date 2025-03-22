import { Link } from 'react-router'
import Account from '../assets/icons/navs/Account'
import Explore from '../assets/icons/navs/Explore'
import Flight from '../assets/icons/navs/Flight'
import Scan from '../assets/icons/navs/Scan'
import Services from '../assets/icons/navs/Services'

const Navbar = () => {
  return (
    <div className='fixed bottom-0 border-t-[1px] bg-white z-10 text-[14px] p-4 h-20 flex justify-between w-[430px]'>
      <Link to='/home' className='flex flex-col items-center gap-y-2'>
        <Explore />
        <p>Explore</p>
      </Link>
      <Link to='/flight' className='flex flex-col items-center gap-y-2'>
        <Flight />
        <p>Flight</p>
      </Link>
      <div className='flex flex-col items-center gap-y-2'>
        <Scan />
        <p>Scan QR</p>
      </div>
      <Link to='/services' className='flex flex-col items-center gap-y-2'>
        <Services />
        <p className=''>Services</p>
      </Link>
      <div className='flex flex-col items-center gap-y-2'>
        <Account />
        <p>Account</p>
      </div>
    </div>
  )
}

export default Navbar
