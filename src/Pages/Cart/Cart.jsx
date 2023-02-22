import React from 'react';
import './Cart.css';
import { Header, NavBar } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ShoppingCart } from '../../components/ShoppingCart/ShoppingCart';

export const Cart = () => {
    return (
    <div>
        <Header />
        <NavBar />
        <ShoppingCart />
        <Footer />
    </div>
    )
}




