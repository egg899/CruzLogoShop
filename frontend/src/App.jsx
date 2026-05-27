
import { useState } from 'react';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CartModal from './components/CartModal';
function App() {
  // const [count, setCount] = useState(0)
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  console.log('App cart: ',cart);
  return (
    <>
      <NavBar setShowCart={setShowCart} cart={cart} showCart={showCart}/>
      <AppRoutes cart={cart} setCart={setCart}/>
      <CartModal
        showCart={showCart}
        setShowCart={setShowCart}
        cart={cart}
        setCart={setCart}
      />
    </>
  )
}

export default App
