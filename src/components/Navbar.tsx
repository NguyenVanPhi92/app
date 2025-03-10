import Account from '../assets/icons/navs/Account'
import Explore from '../assets/icons/navs/Explore'
import Flight from '../assets/icons/navs/Flight'
import Scan from '../assets/icons/navs/Scan'
import Services from '../assets/icons/navs/Services'
import '../styles/navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar flex'>
      <div className='flex navbar-item'>
        <Explore />
        <p>Explore</p>
      </div>
      <div className='flex navbar-item'>
        <Flight />
        <p>Flight</p>
      </div>
      <div className='flex navbar-item'>
        <Scan />
        <p>Scan QR</p>
      </div>
      <div className='flex navbar-item'>
        <Services />
        <p>Services</p>
      </div>
      <div className='flex navbar-item'>
        <Account />
        <p>Account</p>
      </div>
    </div>
  )
}

export default Navbar
