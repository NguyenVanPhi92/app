import { Link, useLocation } from 'react-router'
import Account from '../assets/icons/navs/Account'
import Explore from '../assets/icons/navs/Explore'
import Flight from '../assets/icons/navs/Flight'
import Scan from '../assets/icons/navs/Scan'
import Services from '../assets/icons/navs/Services'
import React, { useState } from 'react'

const navbar = [
  {
    name: 'Explore',
    icon: <Explore color='#D4D6DD' />,
    path: '/home'
  },
  {
    name: 'Flight',
    icon: <Flight color='#D4D6DD' />,
    path: '/flight'
  },
  {
    name: 'Scan QR',
    icon: <Scan color='#D4D6DD' />,
    path: '/qr'
  },
  {
    name: 'Services',
    icon: <Services color='#D4D6DD' />,
    path: '/services'
  },
  {
    name: 'Account',
    icon: <Account color='#D4D6DD' />,
    path: '/'
  }
]

const Navbar = () => {
  const location = useLocation()
  const [active, setActive] = useState(location.pathname)

  //handle
  const handleActive = (value: any) => setActive(value)
  return (
    <div className='fixed bottom-0 border-t-[1px] bg-white z-10 text-[14px] p-4 h-20 flex justify-between w-[430px]'>
      {navbar.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className='flex flex-col items-center gap-y-2'
          onClick={() => handleActive(item.path)}
        >
          {item.icon && React.cloneElement(item.icon, { color: item.path === active ? '#354f79' : '#D4D6DD' })}
          <p className={`${item.path === active ? 'text-[#354f79] font-bold' : 'text-[#333] font-[500]'}`}>
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default Navbar
