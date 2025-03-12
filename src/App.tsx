import { Route, Routes } from 'react-router'
import Products from './screens/Products'
import Cart from './screens/Cart'
import Checkout from './screens/CheckOut'
import Services from './screens/Services'
import Dining from './screens/Dining'
import Menu from './screens/Menu'
import QrPage from './screens/QrPage'
import Store from './screens/Store'
import Resting from './screens/Resting'
import SleepZone from './screens/SleepZone'
import Booking from './screens/Booking'

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
