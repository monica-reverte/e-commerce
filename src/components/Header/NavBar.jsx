import React from 'react';
import { useRef } from "react";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import './NavBar.css';
import { Link } from 'react-router-dom';
import { HOME, EDUCATIONAL, FURNITURE, TOYS, BOOKS } from '../../config/routes/paths';


export const NavBar = () => {

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
    <header className='navBar'>
            <nav ref={navRef}>
                <Link to={HOME}><FaHome /></Link>
                <Link to={FURNITURE}>Montessori Furniture</Link>
                <Link to={EDUCATIONAL}>Educational</Link>
                <Link to={TOYS}>Toys</Link>
                <Link to={BOOKS}>Books</Link>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav> 
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
    </header>
    )
}


