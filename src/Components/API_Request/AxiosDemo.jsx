import axios from 'axios';
import { error } from 'jquery';
import React, { useState } from 'react'

const AxiosDemo = () => {

    const [products, setProducts] = useState([]);
    
    useState(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => setProducts(res.data))
        .catch(error => console.log(error));
    }, [])
    return (
        <div className='bg-dark text-white d-flex flex-wrap'>
            {
                products.map((item) => {
                    return(
                        <div className="card w-25 m-5" key={item.id}>
                                <img className="card-img-top" src={item.image}
                                    alt="Card image cap" style={{ height: "200px", width: "200px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <a href="#" className="btn btn-primary">Add to Cart</a>
                                </div>
                            </div>
                    )
                })
            }
        </div>
    )
}

export default AxiosDemo