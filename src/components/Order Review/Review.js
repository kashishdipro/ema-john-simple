import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Review.css'

const Review = ({product, handleRemoveItem}) => {
    const {img, name, price, shipping, quantity, id} = product;
    console.log(product);
    return (
        <div className='review-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <h6>{name}</h6>
                    <p>Price: <span>$ {price}</span></p>
                    <p>Shipping: <span>$ {shipping}</span></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleRemoveItem(id)} className="delete-btn">
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Review;