import { Link } from 'react-router'
import '../styles/cart.scss'
import { Button } from './button'

const Store = () => {
  return (
    <div className='main'>
      <Link to='/menu'>
        <Button name='order' />
      </Link>
    </div>
  )
}

export default Store
