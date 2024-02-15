import React, { useEffect, useState } from 'react'

const FakeStoreApi = () => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState(products);

    const loadCategories = () => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(data => {
                data.unshift("ALL")
                setCategories(data);
            })
    }
    

    const loadProducts = (value) => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => { 
                if(value == undefined){
                    setProducts(data);
                }else if(value == "ALL"){
                    setProducts(data);
                }else{
                    setProducts(data.filter((items) => {
                        return items.category == value;
                    }))
                }
                
            })
    }

    

    const handleCategoryChange = (e) => {
        alert(`${e.target.value} selected`)
        const value = e.target.value;
        loadProducts(value);
            
    }

    const handleClick = (e) => {
        alert(`${e.target.id} clicked`);
    }

    useEffect(() => {
        loadCategories();
        loadProducts();
    }, [])

    return (
        <div className='container-fluid bg-dark text-white'>
            <h1>FakeStoreApi</h1>
            <div className='row'>
                <div className='col-3'>
                    <label>Select Category</label>
                    <select className='form-select' onChange={handleCategoryChange}>
                        {
                            categories.map((items) => {
                                return (
                                    <option key={items} value={items}>{items.toUpperCase()}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='col-9'>
                    <div className='d-flex flex-wrap overflow-auto' style={{height:"700px"}}>
                    {
                        products.map((items) => {
                            return (
                                <div key={items.id} className="card w-25 p-2 me-1 mb-1" >
                                    <img className="card-img-top" src={items.image} alt="Card image cap"  />
                                    <div className="card-body">
                                        <h5 className="card-title">{items.title}</h5>
                                        <p className="card-text">&#8377;{items.price}</p>
                                    </div>
                                    <button className='btn btn-warning' id={items.id} onClick={handleClick}>Add to Cart</button>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FakeStoreApi