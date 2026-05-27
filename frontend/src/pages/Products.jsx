import { Link } from 'react-router-dom';
//import products from '../data/prodDetails.js';
import { getProducts} from '../services/api';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Cart from '../components/Cart';

const Products = ({cart, setCart}) => {


const [prod, setProd] = useState([]);
//const [cart, setCart] = useState([]);

 const fetchData = async() => {
            try{
                const response = await getProducts();
                setProd(response);
            }
            catch(error){
                console.error('Error fetching data: ', error);
            }
        };


    useEffect(() => {
       fetchData();

    }, []); //useEffect



    return (
        <div className="container mt-5">

            <h1 className="mb-4">Producto</h1>

<div className="row g-4 justify-content-center">

                {
                    prod.map(product => {

                        const {
                            _id,
                            name,
                            price,
                            images
                        } = product

                        return (
                            <div
                                className="col col-lg-5 col-md-4 col-lg-3"
                                key={_id}
                            >

                                <div className="card h-100">

                                    <img
                                        src={images[0]}
                                        alt={name}
                                        className="card-img-top p-5 "
                                    />

                                    <div className="card-body d-flex flex-column">

                                        <h2 className="card-title fs-5">
                                            {name}
                                        </h2>

                                        <p className="card-text fw-bold">
                                            ${price}
                                        </p>

                                        <div className="mt-auto d-flex flex-column gap-2">

                                            <Link
                                                to={`/producto/${_id}`}
                                                className="w-100"
                                            >
                                                <button
                                                    type="button"
                                                    className="btn btn-dark w-100"
                                                >
                                                    Ver Detalles
                                                </button>
                                            </Link>

                                            {/* <button
                                                type="button"
                                                className="btn btn-warning w-100"
                                            >
                                                Agregar
                                            </button> */}
                                        <Cart text={"Agregar +"}  textb={"Remover -"}
                                        classes={"btn btn-warning w-100"} classesb={"btn btn-danger w-100"}
                                        product={product} cart={cart} setCart={setCart}/>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export {Products};