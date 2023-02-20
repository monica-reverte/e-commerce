import React from 'react';
import { useRef } from "react";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import './NavBar.css';

export const NavBar = () => {

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
    <header className='navBar'>
        <nav ref={navRef}>
                <a href="/#"><FaHome /></a>
                <a href="/#">Material Montessori</a>
                <a href="/#">Educativos</a>
                <a href="/#">Juguetes</a>
                <a href="/#">Libros</a>
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


