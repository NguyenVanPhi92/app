import { Button } from '../../components/button'
import Header from '../../components/Header'

const Feedback = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <div>
        <Header title='Feedback' />
      </div>

      <Button name='Checkout' path='checkout' />
    </div>
  )
}

export default Feedback
