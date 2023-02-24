import React, { useState } from "react";
import { ProductsList } from "../components/Products/ProductsList";


export const Products = () => {
    const [products] = useState([
        {
            name: "Vertical abacus with wooden numbers",
            price: "26,75 €",
            url: "https://montessoriparatodos.es/18044-large_default/abaco-vertical-con-numeros-en-madera.jpg",
            id: 1,
        },
        {
            name: "Base 10 Decimal System Re-wood",
            price: "21,00 €",
            url: "https://montessoriparatodos.es/15350-thickbox_default/base-10-sistema-decimal-re-wood.jpg",
            id: 2,
        },
        {
            name: "Box with cylinders of primary colors",
            price: "23,85 €",
            url: "https://montessoriparatodos.es/18564-thickbox_default/caja-con-cilindros-de-colores-primarios.jpg",
            id: 3,
        },
        {
            name: "Montessori Calendar",
            price: "27,00 €",
            url: "https://montessoriparatodos.es/18337-large_default/calendario-montessori.jpg",
            id: 4,
        },
        {
            name: "Basket of treasures",
            price: "50,50 €",
            url: "https://montessoriparatodos.es/14094-thickbox_default/cesta-de-tesoros.jpg",
            id: 5,
        },
        {
            name: "Montessori Ball",
            price: "17.49 €",
            url: "https://montessoriparatodos.es/11315-thickbox_default/pelota-montessori.jpg",
            id: 6,
        },
        {
            name: "Montessori botanical puzzle 18 sheets",
            price: "35,00 €",
            url: "https://montessoriparatodos.es/18340-thickbox_default/puzzle-18-hojas-botanica-montessori.jpg",       
            id: 7,
        },
        {
            name: "Montessori Grammar Solids Premium",
            price: "36,00 €",
            url: "https://montessoriparatodos.es/15901-thickbox_default/solidos-gramaticales-montessori-premium.jpg",
            id: 8,
        },
        {
            name: "Multifunctional rattle",
            price: "8,42 €",
            url: "https://montessoriparatodos.es/16233-thickbox_default/sonajero-cascabel-multifuncional.jpg",
            id: 9,
        },
        {
            name: "Colorful rolling drum",
            price: "28,50 €",
            url: "https://montessoriparatodos.es/18762-thickbox_default/tambor-rodante-de-colores.jpg",
            id: 10,
        },
        {
            name: "Permanence box with tray",
            price: "14,80 €",
            url: "https://montessoriparatodos.es/12107-thickbox_default/caja-de-permanencia-con-bandeja.jpg",
            id: 11,
        },
        {
            name: "Table of Symmetry and Cards",
            price: "14,00 €",
            url: "https://montessoriparatodos.es/6688-thickbox_default/tabla-de-simetrias-y-tarjetas.jpg",
            id: 12,
        },
    ]);


return (
    <div className="products">
        {products.map((product, index) => {
        return (
            <ProductsList
            key={index}
            id={product.id}
            name={product.name}
            url={product.url}
            price={product.price}
            />
        );
        })}
    </div>
    );
};