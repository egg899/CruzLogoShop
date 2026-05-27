import {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getProducts } from "../services/api";
import {ProductCarousel} from "../components/productCarousel.jsx";
import Cart from "../components/Cart.jsx";
const ProductDetail = ({ cart, setCart }) => {

    const navigate = useNavigate();

    const { id } = useParams();

    //const products = getProducts();

    // const product = products.find(
    //     product => product.id === id
    // );

    const [product, setProduct] = useState(null);
    //const [cart, setCart] = useState([]);
    

    useEffect(() => {

        const fetchProduct = async() => {

           try {
             const products = await getProducts();

            const foundProduct = products.find(
                product => product._id === id
            );

            setProduct(foundProduct);
           } catch(error) {
            console.log(error);
           }


        };//fetchProduct

        fetchProduct();

    }, [id]);//useEffect

        if (!product) {
                return <h2>Cargando...</h2>;
            }//if !product


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