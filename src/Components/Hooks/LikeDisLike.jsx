import React, { useEffect, useReducer, useState } from 'react'

//configure initialState
const initialState = {
    like: 0,
    disLike: 0
}

//configure Reducer Function
const Reducer = (state, action) => {
    if(action.type == "LIKE"){
        return {...state, like: state.like++}
    }else if(action.type == "DISLIKE"){
        return {...state, dislike: state.disLike++}
    }
    return state;
}

const LikeDisLike = () => {

    const [product, setProduct] = useState({});

    //configure useReducer hook
    const [state, dispatch] = useReducer(Reducer, initialState)

    const loadProduct = () => {
        fetch("https://fakestoreapi.com/products/1")
            .then(res => res.json())
            .then(data => setProduct(data))
    }

    useEffect(() => {
        loadProduct();
    }, [])
    return (
        <div className='bg-dark text-white vh-100'>
            <h3>LikeDisLike</h3>
            <div className="card w-25">
                <img className="card-img-top" src={product.image}
                    alt="Card image cap" style={{ height: "200px", width: "200px" }} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className='d-flex justify-content-around m-5'>
                        <button
                            className='bg-primary text-white'
                            onClick={() => { dispatch({ type: "LIKE" }) }}>
                            <span className='bi bi-hand-thumbs-up'>{state.like}</span>
                        </button>
                        <button
                            className='bg-danger text-white'
                            onClick={() => { dispatch({ type: "DISLIKE" }) }}>
                            <span className='bi bi-hand-thumbs-down'>{state.disLike}</span>
                        </button>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
    )
}

export default LikeDisLike