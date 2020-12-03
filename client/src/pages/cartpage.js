import React from "react";
import Design from "../context/design";
import CartBcg from "../images/storeBcg.jpeg"
import CartColumn from "../components/cartpage/cart";
export default function Cartpage(props){
    return ( 
        <>
            <Design img = {CartBcg}/>
            <CartColumn history = {props.history}/>
        </>
    )
}