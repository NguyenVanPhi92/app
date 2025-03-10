import { Route, Routes } from 'react-router'
import Products from './components/Products'
import Cart from './components/Cart'
import Checkout from './components/CheckOut'
import Services from './components/Services'

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Services />} />
        <Route path='/product' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
