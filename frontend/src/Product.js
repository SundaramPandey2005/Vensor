import React from 'react'
import "./Product.css"
function Product() {
  return (
    <div className='product'>
        <div className='product_info'>
            <p className='title'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptatum quam reprehenderit recusandae id tenetur dignissimos facilis velit provident inventore repellendus quae cumque voluptate, veritatis sapiente quia. Earum, ea quam.
            </p>
            <p className='price'>
                <small>$</small>
                <strong>11.99</strong>
            </p>
        </div>
        <span className='rating'></span>
        {/* Image */}
        <span className='add_to_basket'></span>
    </div>
  )
}

export default Product