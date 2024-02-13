import React, { useEffect, useState } from 'react'

const FakeStoreApi = () => {
    
    const [categories, setCategories] = useState();

    const loadCategories = () => {
        fetch("https://fakestoreapi.com/products/categories")
        .then( res => res.json())
        .then( data => {
            data.unshift("ALL")
            setCategories(data)})
    }

    useEffect(() => {
        loadCategories();
    }, [])

    return (
        <div className='bg-dark vh-100 text-white'>
            <h1>FakeStoreApi</h1>
            <div className='row'>
                <div className='col-3'>
                    <select className='form-select'>
                        {
                            categories?.map((items) => {
                                return(
                                    <option key={items} value={items}>{items.toUpperCase()}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FakeStoreApi