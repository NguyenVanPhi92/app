import LeftArrow from '../assets/icons/LeftArrow'
import Search from '../assets/icons/Search'
import '../styles/dining.scss'
import Navbar from './Navbar'

const Dining = () => {
  return (
    <div className='main'>
      <header>
        <div className=''>
          <LeftArrow />
        </div>
        <p>Dining</p>
        <div className=''>
          <Search />
        </div>
      </header>

      <div className='concept'>
        <img
          src='https://plus.unsplash.com/premium_photo-1740992237716-2bb9f560cc6b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
          alt='img'
          className='concept-img'
        />

        <div className='option flex'>
          <div className='option-item'>TERMINAL 1</div>
          <div className='option-item'>TERMINAL 2</div>
          <div className='option-item'>TERMINAL 3</div>
          <div className='option-item'>TERMINAL 4</div>
        </div>

        <div className='shop'>
          {Array.from({ length: 4 }, (_, i) => (
            <div className='shop-card' key={i}>
              <img
                src='https://plus.unsplash.com/premium_photo-1740992237716-2bb9f560cc6b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
                alt='img'
              />
              <div className='shop-card__content'>
                <div className='title'>
                  <p>Shop</p>
                  <p>Location - Operations Hour</p>
                </div>
                <p className='tag'>Tag</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Navbar />
    </div>
  )
}

export default Dining
