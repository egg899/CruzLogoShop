
import { useState } from 'react';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  // const [count, setCount] = useState(0)
  const [cart, setCart] = useState([]);

  console.log('App cart: ',cart);
  return (
    <>
      <NavBar />
      <AppRoutes cart={cart} setCart={setCart}/>
    </>
  )
}

export default App
