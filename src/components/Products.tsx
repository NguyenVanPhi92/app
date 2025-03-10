import { Link } from 'react-router'
import Bage from '../assets/icons/Bage'
import Plus from '../assets/icons/Plus'
import Search from '../assets/icons/Search'
import { Button } from './button'
import Navbar from './Navbar'

const Products = () => {
  return (
    <div className='main'>
      <div>
        <header>
          <div className='search'>
            <Search />
          </div>
          <div className='bage'>
            <Bage />
            <span>9</span>
          </div>
        </header>
        <main className='card-list'>
          {Array.from({ length: 6 }, (_, i) => (
            <div className='card' key={i}>
              <div className='card-head'>
                <img
                  src='https://plus.unsplash.com/premium_photo-1740992237716-2bb9f560cc6b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
                  alt='img'
                />
              </div>
              <div className='card-content'>
                <div>
                  <p>Dish Name</p>
                  <p>$ 5.00</p>
                </div>

                <div className='plus'>
                  <Plus />
                </div>
              </div>
            </div>
          ))}
        </main>

        <Link to='/cart'>
          <Button name='Go to cart' />
        </Link>
      </div>

      <Navbar />
    </div>
  )
}

export default Products
