import { Route, Routes } from 'react-router'
import Products from './components/Products'
import Cart from './components/Cart'
import Checkout from './components/CheckOut'
import Services from './components/Services'
import Dining from './components/Dining'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/dining' element={<Dining />} />
        <Route path='/services' element={<Services />} />
        <Route path='/product' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
