import {useState} from 'react';
import { useParams } from "react-router-dom";
import { getProducts } from "../services/api";
import { useNavigate } from "react-router-dom";
import {ProductCarousel} from "../components/productCarousel.jsx";
import Cart from "../components/Cart.jsx";
const ProductDetail = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const products = getProducts();

    const product = products.find(
        product => product.id === Number(id)
    );

    const [cart, setCart] = useState([]);

    return (

        <div className="container py-5">

            <button
                className="btn btn-outline-dark mb-4 px-4"
                onClick={() => navigate(-1)}
            >
                ← Volver
            </button>

            <div className="card border-0 shadow-lg p-4 rounded-4">

                <div className="row g-5 align-items-start">

                    <div className="col-lg-6">

                        {/* <img
                            src={product.images[0]}
                            alt={product.name}
                            className="img-fluid rounded-4 shadow"
                        /> */}
                        <ProductCarousel images={product.images}/>
                    </div>

                    <div className="col-lg-6">

                        

                        <h1 className="fw-bold display-5 mb-3">
                            {product.name}
                        </h1>

                        <p className="text-secondary fs-5 lh-lg">
                            {product.description}
                        </p>

                        <h2 className="fw-bold text-dark mb-4">
                            ${product.price}
                        </h2>

                        

                            {/* <button className="btn btn-warning btn-lg  fw-semibold">
                                Agregar al carrito
                            </button> */}
                            <Cart text={"Agregar al Carrito +"} textb={"Remover del Carrito -"}
                             classes={"btn btn-warning btn-lg fw-semibold w-100"} classesb={"btn btn-danger btn-lg fw-semibold w-100"} product={product} 
                             cart={cart} setCart={setCart}/>

                            



                        


                       
                    </div>

                </div>
                        
            </div>
                        
        </div>

    );
};

export { ProductDetail };