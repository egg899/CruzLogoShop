import { createSale } from "../services/api";

const CartItems = ({ cart, setCart }) => {

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const increaseQuantity = (productId) => {

        const updatedCart = cart.map(item =>
            item._id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );

        setCart(updatedCart);

    };

    const decreaseQuantity = (productId) => {

        const existingItem = cart.find(
            item => item._id === productId
        );

        if(existingItem.quantity === 1) {

            const updatedCart = cart.filter(
                item => item._id !== productId
            );

            setCart(updatedCart);

            return;
        }

        const updatedCart = cart.map(item =>
            item._id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );

        setCart(updatedCart);

    };

    const removeItem = (productId) => {

        const updatedCart = cart.filter(
            item => item._id !== productId
        );

        setCart(updatedCart);

    };

    const clearCart = () => {

        const confirmed = window.confirm(
            "¿Seguro que deseas vaciar el carrito?"
        );

        if(!confirmed) return;

        setCart([]);

    };

    const handleBuy = async () => {

        if(cart.length === 0) return;

        const confirmed = window.confirm(
            "¿Deseas finalizar la compra?"
        );

        if(!confirmed) return;

        await createSale({
            items: cart,
            total
        });

        alert("Compra realizada con éxito");

        setCart([]);

    };

    return (

        <div className="container mt-5">

            <h1 className="mb-4">
                Cart
            </h1>

            {cart.length > 0 ? (

                <>

                    {cart.map(item => (

                        <div
                            key={item._id}
                            className="border rounded p-3 mb-3 bg-white shadow-sm"
                        >

                            <h4>
                                {item.name}
                            </h4>

                            <p className="fw-bold">
                                ${item.price}
                            </p>

                            <div className="d-flex justify-content-center align-items-center gap-2 mb-3">

                                <button
                                    className="btn btn-secondary"
                                    onClick={() => decreaseQuantity(item._id)}
                                >
                                    -
                                </button>

                                <span className="fw-bold">
                                    {item.quantity}
                                </span>

                                <button
                                    className="btn btn-warning"
                                    onClick={() => increaseQuantity(item._id)}
                                >
                                    +
                                </button>

                            </div>

                            <p>
                                Subtotal:
                                <span className="fw-bold">
                                    {" "}
                                    ${item.price * item.quantity}
                                </span>
                            </p>

                            <button
                                className="btn btn-danger"
                                onClick={() => removeItem(item._id)}
                            >
                                Eliminar
                            </button>

                        </div>

                    ))}

                    <hr />

                    <h3 className="mb-4">
                        Total: ${total}
                    </h3>

                    <div className="d-flex justify-content-center gap-3">

                        <button
                            className="btn btn-outline-danger"
                            onClick={clearCart}
                        >
                            Vaciar carrito
                        </button>

                        <button
                            className="btn btn-success"
                            onClick={handleBuy}
                        >
                            Comprar
                        </button>

                    </div>

                </>

            ) : (

                <h3>
                    No hay productos en el carrito
                </h3>

            )}

        </div>

    );

};

export { CartItems };