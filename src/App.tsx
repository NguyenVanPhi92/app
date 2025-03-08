import Bage from './assets/icons/Bage'
import Plus from './assets/icons/Plus'
import Search from './assets/icons/search'
import { Button } from './components/button'

function App() {
  return (
    <div className='main'>
      <header>
        <div className='search'>
          <Search />
        </div>
        <div className='bage'>
          <Bage />
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

      <Button />
    </div>
  )
}

export default App
