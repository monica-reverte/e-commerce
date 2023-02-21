import * as React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import './Header.css';

export const Header = () => {

  return (
    <div className='miniheader'>
      <div>
        <button className="header-btn">
            <FaFacebookF />
        </button>
        <button className="header-btn">
            <FaInstagram />
        </button>
        </div>
        <p><span>Free shipping</span> from 80€ in the Peninsula </p>        
</div>
  )
}



