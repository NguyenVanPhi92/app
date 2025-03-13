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
import Shopping from './screens/Shopping'
import ShoppingStore from './screens/ShoppingStore'
import Home from './screens/Home'
import Login from './screens/auth/Login'
import Register from './screens/auth/Register'
import OTP from './screens/auth/OTP'
import SelectPage from './screens/SelectPage'
import Flight from './screens/Flight'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SelectPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/flight' element={<Flight />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/code' element={<OTP />} />
        <Route path='/service' element={<Services />} />
        <Route path='/qr' element={<QrPage />} />
        <Route path='/resting' element={<Resting />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/shopping' element={<Shopping />} />
        <Route path='/sleepzone' element={<SleepZone />} />
        <Route path='/store' element={<Store />} />
        <Route path='/shoppingstore' element={<ShoppingStore />} />
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
