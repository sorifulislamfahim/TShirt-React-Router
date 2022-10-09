import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            alert('This Products is Alrady Added')
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
            // alert('This Products Sucessfully Added')
        }
    }

    const removeCartItem = tshirt => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className='shop-container'>
                {
                    tshirts.map(tshirt => <Shop 
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleAddToCart={handleAddToCart}
                    ></Shop>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                removeCartItem={removeCartItem}
                
                ></Cart>
            </div>
        </div>
    );
};

export default Home;