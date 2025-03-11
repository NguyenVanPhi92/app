import { Link } from 'react-router'
import '../styles/cart.scss'
import { Button } from './button'

const Booking = () => {
  return (
    <div className='main'>
      <Link to='/checkout'>
        <Button name='Checkout' />
      </Link>
    </div>
  )
}

export default Booking
