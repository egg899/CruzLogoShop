
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';
import CartModal from './components/CartModal';
import LoginModal from './components/LoginModal';
import { getProfile } from './services/api';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import RegisterModal from './components/RegisterModal';

function App() {
  // const [count, setCount] = useState(0)
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  }

  useEffect(() => {
    const loadUser = async () => {

      try {
        const user = await getProfile();

        if(user) {
          setUser(user);
        }

      }
      catch(error) {
        console.log("No session");
      }



      };//loadUser

      loadUser();
  }, []); //useEffect

  // console.log('App cart: ',cart);
  return (
    <>
      <NavBar cart={cart}  setShowCart={setShowCart} setShowLogin={setShowLogin} 
      user={user} setUser={setUser} showLogin={showLogin} logout={logout} setShowRegister= {setShowRegister}
/>
      <AppRoutes cart={cart} setCart={setCart}/>
      <CartModal
        showCart={showCart}
        setShowCart={setShowCart}
        cart={cart}
        setCart={setCart}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
      />

      <LoginModal 
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
        setUser={setUser}
      />

    <RegisterModal 
      showRegister={showRegister}
      setShowRegister={setShowRegister}
      setShowLogin={setShowLogin}
    />

    </>
  )
}

export default App
