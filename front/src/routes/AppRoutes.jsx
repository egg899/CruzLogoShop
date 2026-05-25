import { Routes, Route } from 'react-router-dom';

// import Home from '../pages/Home';
// import Products from '../pages/Products';
// import Cart from '../pages/Cart';
// import ProductDetail from '../pages/ProductDetail';
import { Home, Products, CartItems, ProductDetail } from '../pages';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}>

            </Route>

             <Route path="/producto" element={<Products/>}>

            </Route>

             <Route path="/carrito" element={<CartItems/>}>

            </Route>


             <Route path="/producto/:id" element={<ProductDetail />}>

            </Route>
        </Routes>
    )
}

export default AppRoutes;