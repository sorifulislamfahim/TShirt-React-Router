import React from 'react';
import './Cart.css'

const Cart = ({cart, removeCartItem}) => {
    
    return (
        <div>
            <h2>Order Revew</h2>
            <div className='full-order'>
                <h4>Order Quantity {cart.length}</h4>
                <div className='tshirt-container'>
                {
                    cart.map(tshirt => 
                        <div className='tshirt'>
                            <li key={tshirt._id}>
                            {tshirt.name}
                        </li>
                        <button onClick={() => removeCartItem(tshirt)}>X</button>
                        </div>    
                    )
                }
                </div>
            </div>
         
        </div>
    );
};

export default Cart;