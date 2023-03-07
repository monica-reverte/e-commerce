import React from 'react';
import { Header, SearchBar, NavBar, Banner } from "../../components/Header";
import { ProductsList } from "../../components/Products";
import { Footer } from "../../components/Footer/Footer";

export function Home() {
    return (
    
    <div>
        <Header />
        <SearchBar />
        <NavBar />
        <Banner />
        <ProductsList />
        <Footer />
    </div>
    
    )
}


