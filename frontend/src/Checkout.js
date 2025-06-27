import React from 'react'
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout({no,price}) {
  const[{basket},dispatch] = useStateValue();
  let netVal = 0;
  basket.forEach(el => {
    netVal = netVal+Number(el.price);
  });
  return (
    <div className='checkout'>
        <div className='left'>
         <img className="ad" src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044814._CB551384116_.jpg'/>
         <br/>
         <br/>
         <h2 className='checkout_title'>Your Shopping Basket</h2>
         <br/>
          {basket.map(item=>(
            <CheckoutProduct title={item.title} price={item.price} rating={item.rating} image={item.image} />
          ))}

         <hr/>
        </div>
        <hr className='vertical_line'/>
        <div className='right'>
          <div className='checkout_subtotal'>
            Subtotal ({basket.length} items): <strong>${netVal}</strong>
          </div>
          <div><input type="checkbox" id="gift"/> <label for="gift">This order contains a gift</label></div>
          <button className='payment_button'>Proceed to Pay</button> 
        </div>
    </div>
    
  )
}

export default Checkout