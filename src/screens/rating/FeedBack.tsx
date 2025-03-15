import { Button } from '../../components/button'
import Goback from '../../components/Goback'

const Feedback = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <div>
        <header>
          <Goback />
          <p>Feedback</p>
          <div className=''></div>
        </header>
      </div>

      <Button name='Checkout' path='checkout' />
    </div>
  )
}

export default Feedback
