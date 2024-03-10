import React, { useContext } from 'react'
import { AppContext } from '../Context'

const Cart = () => {
    const {cart, count, clearCart} = useContext(AppContext);
    if(cart.length < 1)
    {
        return(
            <h3>Your Cart is Empty</h3>
        )
    }
  return (
    <div>
        <h3>Qty: {count}</h3>
      {
        cart.map(item => {
            const {_id, category, title, description, price, image, quant} = item;
            return(
                <div key={_id}>
                    <div className='d-flex align-items-center'>
                        <img src={image} alt="pic" style={{height: "125px" , width: "100px"}} />
                        <div className='p-1'>
                            <button>-</button>
                            <span>{quant}</span>
                            <button>+</button>
                        </div>
                    </div>
                    <p>{item.title}</p>
                </div>
            )
        })
      }
      <button 
      className='btn btn-danger'
      onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart
