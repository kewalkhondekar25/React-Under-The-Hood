import React, { useState } from 'react'

const HandleForm = () => {

    const [products, setProducts] = useState({
        name: "",
        price: 0,
        city: "",
        stock: false
    });

    const handleName = (e) => {
        setProducts({ 
            name: e.target.value,
            price: products.price,
            city: products.city,
            stock: products.stock
        })
    }
    const handlePrice = (e) => {
        setProducts({
            name: products.name,
            price: e.target.value,
            city: products.city,
            stock: products.stock
        })    
    }
    const handleCity = (e) => {
        setProducts({
            name: products.name,
            price: products.price,
            city: e.target.value,
            stock: false
        })
    }
    const handleStock = (e) => {
        setProducts({
            name: products.name,
            price: products.price,
            city: products.city,
            stock: e.target.checked
        })
    }

    return (
        <div className='container-fluid bg-dark text-white vh-100'>
            <h1>Register</h1>
            <div className='row'>
                <div className='col-3'>
                    <dl>
                        <dt>Product Name</dt>
                        <dd>
                            <input type="text" onChange={handleName} />
                        </dd>
                        <dt>Price</dt>
                        <dd>
                            <input type="number" onChange={handlePrice} />
                        </dd>
                        <dt>City</dt>
                        <dd>
                            <select onChange={handleCity}>
                                <option>Pune</option>
                                <option>Nagpur</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className='form-switch'>
                            <input type="checkbox" className='form-check-input' onChange={handleStock} />
                        </dd>
                    </dl>
                </div>
                <div className='col-9'>
                    <dl>
                        <dt>Product Name</dt>
                        <dd>{products.name}</dd>
                        <dt>Price</dt>
                        <dd>&#8377;{products.price}</dd>
                        <dt>City</dt>
                        <dd>{products.city}</dd>
                        <dt>Stock</dt>
                        <dd>{products.stock? "Available": "Out of Stock"}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default HandleForm