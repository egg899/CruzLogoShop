import {useState, useEffect} from 'react';


const Cart = ({ product, text, textb, classes, classesb, cart, setCart }) => {

    // const [cart, setCart] = useState([]);


    const itemInCart = cart.find(item => item.id === product.id);
    const addToCart = (product) => {

    


    const existingProduct = cart.find(item => item.id === product.id);

    if(existingProduct) {

        const updatedCart = cart.map(item => item.id === product.id ? 
            {...item, quantity:item.quantity+1}:item);

            setCart(updatedCart);


    }//if existingProduct
    else  {
        setCart([
            ...cart,
            {
                ...product,
                quantity: 1
            }
        ])
    }//else existingProduct



};//addToCart




const removeFromCart = (productId) => {

    const existingProduct = cart.find(
        item => item.id === productId
    );

    if(!existingProduct) return;

    if(existingProduct.quantity === 1) {
       const updatedCart = cart.filter( item => item.id !== productId );

        setCart(updatedCart);

        return;

    }//existingProduct.quantity === 1

    const updatedCart = cart.map(item => 
        item.id === productId
            ? {...item, quantity: item.quantity - 1}:item

    );

    setCart(updatedCart);
};//removeFromCart

useEffect(() => {
    console.log("Cart del useEffect de Cart.jsx: ", cart);
}, [cart]);

    return (
        <div className="d-flex gap-2">

            <button className={classes} onClick={() =>addToCart(product)}>
                {text}
            </button>
            {itemInCart?.quantity >= 0 && (
                <div className="d-flex align-items-center fw-bold text-dark  "> {itemInCart.quantity}</div>
            )}
          {cart.find(item=>item.id === product.id)?.quantity > 0 && (

             <button className={classesb} onClick={() => removeFromCart(product.id)}> 
            {textb} </button>
          )}

          
          
        </div>
        
            
       
    );

}//Cart


export default Cart;