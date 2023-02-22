import * as React from 'react';
import logo from '../../assets/logo/logo.jpg';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import './SearchBar.css';
import { Link } from 'react-router-dom';

export const SearchBar = () => {

return (
    <div className='searchbar_nav'>
        <div className='div_logo'>
            <img className='logo'src={logo} alt="logo"/> 
        </div>
        <div className='search'>
            <FaSearch />
            <input type="search" />
        </div>
        <div className='div_cart'>
            <Link to={'/cart'} className="cart-btn">
            <FaShoppingCart />
                <span className='item_total'>0</span>    
            </Link>
            
        </div>     
    </div>
    )
}