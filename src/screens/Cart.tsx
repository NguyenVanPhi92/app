import { Button } from '../components/button'
import Header from '../components/Header'
import { useStoreAction } from '../store/zustand'
import '../styles/cart.scss'

const Cart = () => {
  const listMenu = useStoreAction((state) => state.cart)
  const totalPrice = listMenu.reduce((sum, item) => sum + parseFloat(item.price), 0)
  // console.log('menu: ', cart)

  return (
    <div className='flex flex-col justify-between main'>
      <Header title='Your Cart' icon />
      <div className='body mb-44'>
        <main className='mt-16'>
          {listMenu.map((e, idx) => (
            <div className='mb-2 cart border-b border-[#ededed] pb-2' key={idx}>
              <img src={e.img} alt='img' />
              <div className='cart-content'>
                <div className='cart-content__title'>
                  <h3 className='font-[600] text-[12px]'>{e.name}</h3>
                  <p className='text-[10px]'>Dish Description</p>
                </div>
                <div className='flex justify-between'>
                  <div className='flex items-center gap-x-4'>
                    <p className='px-[6px] rounded-full text-white bg-[#354f79]'>-</p>
                    <span>1</span>
                    <p className='px-[6px] rounded-full text-white bg-[#354f79]'>+</p>
                  </div>
                  <p className='text-[12px]'>$ {e.price}</p>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className='fixed bottom-0 w-[430px] p-4 bg-white'>
        <div className='flex justify-between mx-2'>
          <p className=''>Total</p>
          <p className='font-bold'>$ {totalPrice},00</p>
        </div>
        <Button name='Checkout' path='checkout' />
      </div>
    </div>
  )
}

export default Cart
