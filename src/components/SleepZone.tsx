import { Link } from 'react-router'
import '../styles/cart.scss'
import { Button } from './button'

const SleepZone = () => {
  return (
    <div className='main'>
      <Link to='/booking'>
        <Button name='Booking' />
      </Link>
    </div>
  )
}

export default SleepZone
