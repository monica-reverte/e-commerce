import React from 'react'
import { useCounter } from "./Counter"
import "./Products.css";
import "./Counter.css";


export const Item = ({name, price, url, id}) => {

    const {counter, increase, decrement} = useCounter(0)

    return (
        <div className="products">
            <div className='product'>
                <div className='product_img'>
                    <img src={url} alt=""/>
                </div>
                <div className='product_info'>
                    <h1>{name}</h1>
                    <p>{price}€</p>
                </div>
                <div className='product-btn'>
                    <button className= 'btn-counter' onClick={decrement}>-</button>
                        <div>{counter}</div>
                    <button className='btn-counter' onClick={increase}>+</button>

                    <button className='add-cart'>Add to cart</button>
                    {/* <Counter id={id} name={name} price ={price} url={url} /> */}
                </div>
            </div>
        </div>
    )
}
