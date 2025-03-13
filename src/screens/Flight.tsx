import { Link } from 'react-router'
import LeftArrow from '../assets/icons/LeftArrow'
import { Button } from '../components/button'
import Image from '../contans/data'

const Flight = () => {
  return (
    <div className='main'>
      <div>
        <header>
          <Link to='/services' className=''>
            <LeftArrow />
          </Link>
          <p>Flight Tracking</p>
          <div className=''></div>
        </header>
        <img src={Image} alt='img' className='w-full' />
      </div>

      <div>
        <Button name='order' path='menu' />
      </div>
    </div>
  )
}

export default Flight
