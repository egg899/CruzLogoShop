import './CartModal.css';

import { CartItems } from '../pages/CartItems';

const CartModal = ({
    showCart,
    setShowCart,
    cart,
    setCart
}) => {

    return (
        <>

            <div
                className={`cart-backdrop ${showCart ? 'active' : ''}`}
                onClick={() => setShowCart(false)}
            ></div>

            <div className={`cart-modal ${showCart ? 'open' : ''}`}>

                <div className="cart-header">

                    <h2 className="fw-bold mb-0">
                        Tu Carrito
                    </h2>

                    <button
                        className="btn-close"
                        onClick={() => setShowCart(false)}
                    />

                </div>

                <div className="cart-body">

                    <CartItems
                        cart={cart}
                        setCart={setCart}
                    />

                </div>

            </div>

        </>
    )
}

export default CartModal;