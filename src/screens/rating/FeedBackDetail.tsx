import { Button } from '../../components/button'
import Header from '../../components/Header'

const FeedbackDetail = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <div>
        <Header title='Feedback Detail' />
      </div>

      <Button name='Checkout' path='checkout' />
    </div>
  )
}

export default FeedbackDetail
