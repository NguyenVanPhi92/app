import { Route, Routes } from 'react-router'
import Products from './components/Products'
import Cart from './components/Cart'
import Checkout from './components/CheckOut'
import Services from './components/Services'
import Dining from './components/Dining'
import Menu from './components/Menu'
import QrPage from './components/QrPage'
import Store from './components/Store'
import Resting from './components/Resting'
import SleepZone from './components/SleepZone'
import Booking from './components/Booking'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Services />} />
        <Route path='/qr' element={<QrPage />} />
        <Route path='/resting' element={<Resting />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/sleepzone' element={<SleepZone />} />
        <Route path='/store' element={<Store />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/dining' element={<Dining />} />
        <Route path='/product' element={<Products />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
