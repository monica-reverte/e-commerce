import * as React from 'react';
import storeItems from "../../data/products.json";
import { Item } from "./Item"
import { useSearchParams } from "react-router-dom";


export const ProductsList = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') ?? ""
  console.log(query)
  return (
    <>
      <div className="products">
        {storeItems.filter(({name})=> {
    if(!query) return true
    else{
    const nameLowerCase = name.toLowerCase()
    return nameLowerCase.includes(query.toLowerCase())
  }
}).map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};


