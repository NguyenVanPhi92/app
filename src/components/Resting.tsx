import { Link } from 'react-router'
import '../styles/cart.scss'
import { Button } from './button'

const Resting = () => {
  return (
    <div className='main'>
      <Link to='/sleepzone'>
        <Button name='SleepZone' />
      </Link>
    </div>
  )
}

export default Resting
