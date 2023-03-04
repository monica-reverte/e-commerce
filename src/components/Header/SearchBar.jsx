import { useEffect } from 'react';
import { useCart } from '../../context/cartContext';
import logo from '../../assets/logo/logo.jpg';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import './SearchBar.css';
import { Link } from 'react-router-dom';


export const SearchBar = () => {

    const {cartContext, setCartContext} = useCart()

    useEffect(() => {
        const cart = JSON.parse(window.localStorage.getItem("cart"))
        // console.log(cart)
        const cartArr = (cart.map(item => {
            return item.quantity
        }))

    let total = 0;

    cartArr.forEach(item =>
        total += item)

    setCartContext(total);
        

},[cartContext]);


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
                <span className='item_total'>{cartContext}</span>    
            </Link>
            
        </div>     
    </div>
    )
}