//import products from '../data/prodDetails.js';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL
// console.log('API_URL: ',API_URL)

// export const getProducts = () => {
//     return products;
// };//getProducts

// const response = await axios.get(`${API_URL}/products`);
// console.log(response)
export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return [];
    }
};//getProducts


export const createSale = async (data) => {

    const response = await axios.post(
        `${API_URL}/sales`,
        data
    );

    return response.data;



};//createSale




