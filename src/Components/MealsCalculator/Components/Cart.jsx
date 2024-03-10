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
            return(
                <div key={item._id}>
                    <p>{item.title}</p>
                    <div className='d-flex align-items-center'>
                        <img src={item.image} alt="pic" style={{height: "125px" , width: "100px"}} />
                        <div className='p-1'>
                            <button>-</button>
                            <span>0</span>
                            <button>+</button>
                        </div>
                    </div>
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
