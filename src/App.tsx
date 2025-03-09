import { Route, Routes } from 'react-router'
import Products from './components/Products'
import Cart from './components/Cart'
import Checkout from './components/CheckOut'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
