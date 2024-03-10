import React, { useContext } from 'react'
import { AppContext } from '../Context';

const Meals = () => {
    const {meals, cart, addToCart} = useContext(AppContext);
  return (
    <div className='d-flex flex-wrap'>
      {
        meals.map(item => {
            return(
                <div key={item._id} className='d-flex flex-column p-4'>
                    <p>{item.title}</p>
                    <img src={item.image} alt="pic" style={{height:"300px", width: "200px"}} />
                    <button 
                    className='btn btn-success w-50'
                    onClick={() => addToCart(item._id)}>Add to Cart</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default Meals
