import React from 'react'
import "./Cards.css"
import { useStateValue } from './StateProvider';
function Cards({title,price,rating,image}) {
    const [{basket}, dispatch]= useStateValue();
    console.log("this is the basket>>>", basket);

    const addToBasket = () => {
        //It takes no arguments and dispatches some action
        dispatch({
            type: 'ADD_TO_BASKET',
            //And the item which we are gonna dispatch will be the id which we got before and the title, price, rating, image.
            item: {
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };

  return (
<div className='product'>
    <div className='product_info'>
            <p className='title'>
                {title}
            </p>
            <p className='price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
         {/*There is some problem in the Array👇 */}
         {/* Got it the bracket was wrong */}
         {/* But still the array thing is out of my head */}
        <div className='rating'>
            {Array(rating)
                .fill()
                .map((_, i) => (
                <p>⭐</p>
                ))}
        </div>
        </div>
        <img src={image} alt="skip" className="image"/>
        <div className='add_to_basket'>
            <button onClick={addToBasket} className="button">Add to Basket</button>
        </div>
</div>
)
}

export default Cards