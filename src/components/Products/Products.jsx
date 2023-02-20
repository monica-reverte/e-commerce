import * as React from 'react';
import IMG from "../../assets/products/abaco-vertical-con-numeros-en-madera.jpg";
import './Products.css';

export const ProductsList = () => {
  return (

    <>
    <h1 className='title'>PRODUCTS</h1>
    <div className='products'>
      <div className='product'>
        <div className='product_img'>
          <img src={ IMG } alt=""/>
        </div>
        <div className='product_info'>
          <h1>Title</h1>
          <p>00,00 €</p>
        </div>
        <div className='product-btn'>
          <p>0</p>
          <button className='btn-add'>
            Add to cart
          </button>
        </div>
      </div>
      
      <div className='product'>
        <div className='product_img'>
          <img src={ IMG } alt=""/>
        </div>
        <div className='product_info'>
          <h1>Title</h1>
          <p>00,00 €</p>
        </div>
        <div className='product-btn'>
          <p>0</p>
          <button className='btn-add'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
    </>
  )
}


