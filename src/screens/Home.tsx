import { Button } from '../components/button'

const Home = () => {
  return (
    <div className='flex flex-col justify-between main'>
      <div className='p-4 '>Home</div>

      <Button name='order' path='menu' />
    </div>
  )
}

export default Home
