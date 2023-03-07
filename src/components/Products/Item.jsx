import React from "react";
import { Counter } from "./Counter";
import "./Products.css";

export const Item = ({ product }) => {
    const { url, name, price } = product;
        return (
    <div className="products">
        <div className="product">
            <div className="product_img">
                <img src={url} alt="" />
            </div>
            <div className="product_info">
                <h1>{name}</h1>
                <p>{price}€</p>
            </div>
            <div className="product-btn">
                <Counter product={product} />
            </div>
        </div>
    </div>
    );
};