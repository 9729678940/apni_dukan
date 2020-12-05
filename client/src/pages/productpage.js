import React from "react";
import Products from "../components/productspage/products";
import Design from "../context/design";
import productbcg from "../images/productbcg.jpg";
export default function Productpage(){
    return (
        <>
        <Design img = {productbcg}/>
        <Products/>
        </>
   )
}