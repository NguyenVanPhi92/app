import { useState } from 'react'
import Bage from '../assets/icons/Bage'
import Plus from '../assets/icons/Plus'
import { Button } from '../components/button'
import Goback from '../components/Goback'
import { HighlandsCoffee } from '../constants/data'
import { useStoreAction } from '../store/zustand'
import '../styles/menu.scss'

const Menu = () => {
  const dispathCart = useStoreAction((state) => state.dispathCart)
  const cart = useStoreAction((state) => state.cart)
  const [total, setTotal] = useState(0)

  // handle
  const addCart = (e: any) => {
    setTotal((value) => value + 1)
    dispathCart(e)
  }
  console.log('Cart: ', cart)

  return (
    <div className='flex flex-col justify-between main'>
      <div className='fixed top-0 z-10 p-4 flex justify-between items-center bg-white w-[430px]'>
        <Goback />
        <p className='font-bold'>Highland Menu</p>

        <div className='relative'>
          <Bage />
          <p className='absolute right-[-4px] text-white flex items-center text-[10px] p-1 w-4 h-4 text-center rounded-full bg-[#354F79] top-[10px]'>
            {total}
          </p>
        </div>
      </div>

      <div className='mt-16 body'>
        <div className='menu'>
          {HighlandsCoffee.map((e, i) => (
            <div className='menu-card' key={i}>
              <img src={e.img} alt='img' />
              <div className='menu-card__content'>
                <div className='menu-card__content-title'>
                  <p className='text-[12px]'>{e.name}</p>
                  <p className='text-[12px]'>$ {e.price}</p>
                </div>
                <p className='menu-card__content-plus ' onClick={() => addCart(e)}>
                  <Plus />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='p-4'>
        <Button name='Go to cart' path='cart' />
      </div>
    </div>
  )
}

export default Menu
