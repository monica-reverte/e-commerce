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
        <p><span>Envíos gratis</span> a partir de 80€ en Península </p>        
</div>
  )
}



