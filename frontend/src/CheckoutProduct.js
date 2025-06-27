import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({title,price,rating,image}) {
        const [{basket}, dispatch]= useStateValue();
        console.log("this is the basket>>>", basket);
        const removeBasket = () => {
            dispatch({
                type:"REMOVE_FROM_BASKET",
                title:title,
            });
        };
  return (
    <div className='CheckoutProduct'>
        <div className='checkout_left'>
            <img src={image} alt="skip" className="image"/>
        </div>
        <div className='checkout_right'>
            <p className='title'>
                {title}
            </p>
            <p className='price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='rating'>
            {Array(rating)
                .fill()
                .map(() => (
                <p>⭐</p>
                ))}
            </div>
            <div className='remove_from_basket'>
            <button onClick={removeBasket} className="button">Remove from Basket</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct