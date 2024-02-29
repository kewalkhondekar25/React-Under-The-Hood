import React, { useEffect, useState } from 'react'
import $ from 'jquery'

const JqueryAjax = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        $.ajax({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            success: res => setProducts(res)
        })
    }, []);

    return (
        <div className='bg-dark text-white vh-100 d-flex flex-wrap'>
            {
                products.filter((item) => {
                    return item.category == "men's clothing"
                })
                    .map((item) => {
                        return (
                            <div className="card w-25 d-flex bg-dark text-white" key={item.id}>
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

export default JqueryAjax