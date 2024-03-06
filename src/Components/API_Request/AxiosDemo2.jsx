import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const AxiosDemo2 = () => {
    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        try {
            const res = axios.get("https://fakestoreapi.com/products");
            const data = (await res).data;
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadProducts();
    }, [])
  return (
    <div>
        <ul>
            {
                products.map(item => {
                    return(
                        <li key={item.id}>{item.title}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
