import { Route, Routes } from 'react-router'
import ScrollToTop from './components/ScrollToTop'
import Login from './screens/auth/Login'
import OTP from './screens/auth/OTP'
import Register from './screens/auth/Register'
import Booking from './screens/Booking'
import Cart from './screens/Cart'
import Checkout from './screens/CheckOut'
import Dining from './screens/Dining'
import Event from './screens/Event'
import FlightTracking from './screens/FlightTracking'
import Home from './screens/Home'
import Map from './screens/Map'
import Menu from './screens/Menu'
import Products from './screens/Products'
import QrPage from './screens/QrPage'
import Feedback from './screens/rating/FeedBack'
import FeedbackDetail from './screens/rating/FeedBackDetail'
import Resting from './screens/Resting'
import SelectPage from './screens/SelectPage'
import Services from './screens/Services'
import Shopping from './screens/Shopping'
import ShoppingStore from './screens/ShoppingStore'
import SleepZone from './screens/SleepZone'
import Store from './screens/Store'
import Five from './screens/travel/Five'
import Four from './screens/travel/Four'
import One from './screens/travel/One'
import Three from './screens/travel/Three'
import Two from './screens/travel/Two'
import Reservation from './screens/Reservation'
import ReservationBooking from './screens/ReservationBooking'
import ScanPage from './screens/Scan'
import Profile from './screens/Profile'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<SelectPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/event' element={<Event />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/code' element={<OTP />} />

        <Route path='/one' element={<One />} />
        <Route path='/two' element={<Two />} />
        <Route path='/three' element={<Three />} />
        <Route path='/four' element={<Four />} />
        <Route path='/five' element={<Five />} />

        <Route path='/services' element={<Services />} />
        <Route path='/flight' element={<FlightTracking />} />
        <Route path='/dining' element={<Dining />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/reservationBooking' element={<ReservationBooking />} />

        <Route path='/resting' element={<Resting />} />
        <Route path='/sleepzone' element={<SleepZone />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/scan' element={<ScanPage />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/product' element={<Products />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/shopping' element={<Shopping />} />
        <Route path='/shoppingstore' element={<ShoppingStore />} />

        <Route path='/store' element={<Store />} />
        <Route path='/qr' element={<QrPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />

        <Route path='/feedback' element={<Feedback />} />
        <Route path='/feedbackdetail' element={<FeedbackDetail />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </>
  )
}

export default App
