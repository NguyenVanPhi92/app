import { Button } from '../components/button'
import Goback from '../components/Goback'
import Image from '../constants/data'

const Flight = () => {
  return (
    <div className='main'>
      <div>
        <header>
          <Goback />
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
