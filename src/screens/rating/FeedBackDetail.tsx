import { Button } from '../../components/button'
import Goback from '../../components/Goback'

const FeedbackDetail = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <div>
        <header>
          <Goback />
          <p>Feedback Detail </p>
          <div className=''></div>
        </header>
      </div>

      <Button name='Checkout' path='checkout' />
    </div>
  )
}

export default FeedbackDetail
