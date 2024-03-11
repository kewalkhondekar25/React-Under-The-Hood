import React, { useContext, useState } from 'react'
import { AppContext } from '../Context';

const Meals = () => {
    const {meals, cart, addToCart} = useContext(AppContext);
    const [quant, setQuant] = useState(1);
  return (
    <div className='d-flex flex-wrap'>
      {
        meals.map(item => {
            const {_id, category, title, description, price, image} = item;
            return(
                <div key={item._id} className='d-flex flex-column p-4'>
                    <img src={item.image} alt="pic" style={{height:"300px", width: "200px"}} />
                    <p>{item.title}</p>
                    <button 
                    className='btn btn-success w-50'
                    onClick={() => addToCart(_id, category, title, description, price, image, quant,)}>Add to Cart</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default Meals
