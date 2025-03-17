import { Button } from '../components/button'
import Header from '../components/Header'
import { useStoreAction } from '../store/zustand'
import '../styles/cart.scss'

const Event = () => {
  const event = useStoreAction((state) => state.event)
  console.log('Event: ', event)

  return (
    <div className='flex flex-col justify-between p-4 main'>
      <div>
        <Header title='Event' icon />
      </div>
      <p>{event.des}</p>

      <Button name='Checkout' path='checkout' />
    </div>
  )
}

export default Event
