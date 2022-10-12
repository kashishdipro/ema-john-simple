import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(() =>{
        const storedCart = getStoredCart();
        // console.log(storedCart);
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products]);

    const handleAddToCart = (selectedProduct) =>{
        // console.log(product);
        // let newCart = [...cart, selectedProduct];
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // console.log(newCart);
        setCart(newCart);
        addToDb(selectedProduct.id);
        
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =><Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;