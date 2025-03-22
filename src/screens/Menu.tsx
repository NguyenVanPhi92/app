import { Link } from 'react-router'
import Bage from '../assets/icons/Bage'
import Plus from '../assets/icons/Plus'
import { Button } from '../components/button'
import Header from '../components/Header'
import { Image, MenuStore } from '../constants/data'
import '../styles/menu.scss'
import { useStoreAction } from '../store/zustand'
import Goback from '../components/Goback'

const Menu = () => {
  const dispathCart = useStoreAction((state) => state.dispathCart)
  const cart = useStoreAction((state) => state.cart)

  // handle
  const addCart = (e: any) => {
    dispathCart(e)
  }
  console.log('Cart: ', cart)

  return (
    <div className='flex flex-col justify-between main'>
      <div className='fixed top-0 z-10 p-4 flex justify-center bg-white w-[430px]'>
        <div className='absolute left-4'>
          <Goback />
        </div>
        <p className='font-bold'>Burger King Menu</p>
      </div>

      <div className='mt-16 body'>
        <div className='menu'>
          {MenuStore.map((e, i) => (
            <div className='menu-card' key={i}>
              <img src={Image} alt='img' />
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
