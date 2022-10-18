import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Order Review/Review';

const Order = () => {
    const {products, savedCart} = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveItem = (id) =>{
        const remaining = cart.filter(product => product.id !==id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="order-container">
                {
                    cart.map(product => <Review 
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></Review>)
                }
                {
                    cart.length === 0 && <h2>No items for review. Please <Link to="/">Shop More</Link> </h2>
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;