import { useState, useEffect } from 'react';
import { Item } from "./Item"
import { useSearchParams } from "react-router-dom";


export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    const getData = async () =>{
    const res = await fetch("http://localhost:3001/data");
    const data = await res.json();
    setProducts(data);
  }
  getData();
  },[]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') ?? ""
  console.log(query)
  return (
    <>
      <div className="products">
        {products.length && products.filter(({name})=> {
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


