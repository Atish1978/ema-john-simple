import React from 'react';
import "./ReviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, img, price, name, quantity } = product;
  return (
    <div className='review-item'>
      <img src={img} alt="" />
      <div className='review-details'>
        <p className='product-title'>{name}</p>
        <p>price: <span className='text-color'>${price}</span></p>
        <p>Order Quantity: <span className='text-color'>{quantity}</span></p>
        <p></p>
      </div>
      <button onClick={() => handleRemoveFromCart(id)} className='button-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;