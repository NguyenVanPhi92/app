import { Button } from '../components/button'
import Header from '../components/Header'
import Image from '../constants/data'

const Flight = () => {
  return (
    <div className='main'>
      <div>
        <Header title='Flight Tracking' />
        <img src={Image} alt='img' className='w-full' />
      </div>

      <div>
        <Button name='order' path='menu' />
      </div>
    </div>
  )
}

export default Flight
