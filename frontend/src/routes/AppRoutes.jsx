import { Routes, Route } from 'react-router-dom';

// import Home from '../pages/Home';
// import Products from '../pages/Products';
// import Cart from '../pages/Cart';
// import ProductDetail from '../pages/ProductDetail';
import { Home, Products, CartItems, ProductDetail } from '../pages';

const AppRoutes = ({ cart, setCart }) => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}>

            </Route>

             <Route path="/producto" element={<Products cart={cart} setCart={setCart}/>}>

            </Route>

             <Route path="/carrito" element={<CartItems cart={cart} setCart={setCart}/>}>

            </Route>


             <Route path="/producto/:id" element={<ProductDetail cart={cart} setCart={setCart}/>}>

            </Route>
        </Routes>
    )
}

export default AppRoutes;