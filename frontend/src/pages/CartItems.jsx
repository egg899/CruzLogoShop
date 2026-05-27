import { createSale } from "../services/api";

const CartItems = ({ cart, setCart }) => {

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity, 0
    );// total

    const handleBuy = async () => {

        if(cart.length === 0) return;

        await createSale({
            items: cart,
            total
        });

        alert("Compra realizada con éxito");

        setCart([]);

    };//handleBuy


    return (
        <div className="container mt-5">
            <h1>Cart</h1>
        {cart.length > 0 ? (
        <>
                {cart.map(item =>(
                        <div key={item._id}>
                            <h4>{item.name}</h4>
                            <p>
                                {item.quantity} x ${item.price}
                            </p>
                        </div>
                    ))}

                    <h3>Total: ${total}</h3>

                    <button className="btn btn-success" onClick={handleBuy}>
                        Comprar
                    </button>
                    </>
        ) : (
            <h3>No hay productos en el carrito</h3>
        )}
            


            
        </div>
    )
}


export {CartItems};