import * as React from 'react';
// import './Products.css';
// import { Counter } from "./Counter";
// import { data } from "../../data/Products"
import storeItems from "../../data/products.json";
import { Item } from "./Item"


export const ProductsList = () => {

  return (

<>
    <div className="products">
      {storeItems.map((product, idx) => {
        return <Item key={product.id} {...product} />;
        })}
      </div>
    </>
    // <>
    // <div className="products">
    //   {data.map(product => (
    //   <div className='product' key={product.id}>
    //     <div className='product_img'>
    //       <img src={product.url} alt=""/>
    //     </div>
    //     <div className='product_info'>
    //       <h1>{product.name}</h1>
    //       <p>{product.price}</p>
    //     </div>
    //     <div className='product-btn'>
    //       <Counter id={product.id} url={product.url} name={product.name} price={product.price} />
          
    //     </div>
    //   </div>
    //   ))}
    //   </div>
    // </>
  )
}
