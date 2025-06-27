import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket},dispatch]= useStateValue();
  return (
    <div className='header'>
            {/* Instead of anchor tag here you can use Link tag which does the same thing.. But u need to import it from ract router dom*/}
            {/* <a href='http://localhost:3000/'> */}
            <Link to="http://localhost:3000/">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="hh" className='header_logo'/>
            {/* </a> */}
            </Link>
            <div className='header_search'>
                <input 
                className="header_searchInput" 
                placeholder="Search for Products" type="text"/>
                <SearchIcon className='header_searchIcon'/>
            </div>

            <div className="header_nav">
              {/* /login will also work without writing the full address. */}
              <Link to="/login"> 
                <div className='header_option'>
                  <span className='header_lineOne'>
                    Hello Guest
                  </span>
                  <span className='header_lineTwo'>
                    Sign In
                  </span>
                </div>
              </Link>
                <div className='header_option'>
                  <span className='header_lineOne'>
                    Returns
                  </span>
                  <span className='header_lineTwo'>
                    & Orders
                  </span>
                </div>
                <div className='header_option'>
                  <span className='header_lineOne'>
                   Your
                  </span>
                  <span className='header_lineTwo'>
                    Prime
                  </span>
                </div>
                {/* Instead of anchor tag here you can use Link tag which does the same thing.. But u need to import it from ract router dom*/}
                {/* <a href='http://localhost:3000/checkout'> */}
                <Link to="http://localhost:3000/checkout">
                  <div className='header_option basket'>
                  <ShoppingBasketIcon/>
                  <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
                </div>
                </Link>
                {/* </a> */}
                
            </div>

    </div>
  )
}

export default Header