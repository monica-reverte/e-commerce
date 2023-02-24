import React from 'react';
import { Header, SearchBar, NavBar, Banner } from "../../components/Header";
import { Products } from "../../data/Products";
import { Footer } from "../../components/Footer/Footer";

export function Home() {
    return (
    
    <div>
        <Header />
        <SearchBar />
        <NavBar />
        <Banner />
        <Products />
        <Footer />
    </div>
    
    )
}


