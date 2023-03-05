import * as React from 'react';
import './Products.css';
import { Counter } from "./Counter";


export const ProductsList = (props) => {
  
  return (

    <>
    
      <div className='product' key={props.id}>
        <div className='product_img'>
          <img src={props.url} alt=""/>
        </div>
        <div className='product_info'>
          <h1>{props.name}</h1>
          <p>{props.price}</p>
        </div>
        <div className='product-btn'>
          <Counter id={props.id} url={props.url} name={props.name} price={props.price} />
          
        </div>
      </div>
    
    </>
  )
}
