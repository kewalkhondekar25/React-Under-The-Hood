import axios from 'axios';
import { error } from 'jquery';
import React, { useEffect, useState } from 'react'

export const AxiosDemo3 = () => {
    const [products, setProducts] = useState([]);
    const loadProducts = () => {
        axios.get("https://fakestoreapi.com/products")
        .then(res => {setProducts(res.data), console.log(res.data)})
        .catch(error => console.log(error))
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
