import React from 'react'
import { Header, NavBar } from "../../components/Header";
import { Footer } from "../../components/Footer/Footer";
import { useState, useEffect } from 'react';
import { Item } from './Item'; 


export const Furniture = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=> {
    const getData = async () =>{
    const res = await fetch("http://localhost:3001/data");
    const data = await res.json();
    setProducts(data);
  }
  getData();
  },[]);
  


  return (
    <div>
      <div>
        <Header />
        <NavBar />
          <div className="products">
          {products.filter(product =>{
            return product.type === "furniture"
            
          })
          .map((product) => {
  
          return <Item key={product.id} product={product} />;
        })}
      </div>
        
        <Footer />
      
    </div>
    </div>
  )
}

