import { Button } from '../components/button'
import Goback from '../components/Goback'
import { useStoreAction } from '../store/zustand'
import '../styles/menu.scss'

const Reservation = () => {
  // const dispathCart = useStoreAction((state) => state.dispathCart)
  const cart = useStoreAction((state) => state.cart)

  // handle
  // const addCart = (e: any) => {
  //   dispathCart(e)
  // }
  console.log('Cart: ', cart)

  return (
    <div className='flex flex-col justify-between main'>
      <div className='fixed top-0 z-10 p-4 flex justify-center bg-white w-[430px]'>
        <div className='absolute left-4'>
          <Goback />
        </div>
        <p className='font-bold'>Reservation</p>
      </div>

      <div className='mt-16 body'></div>

      <div className='p-4'>
        <Button name='Go to cart' path='cart' />
      </div>
    </div>
  )
}

export default Reservation
