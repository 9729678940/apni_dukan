import React from "react";
import Title from "../title";
import CartColumn from "./cartcolumn";
import CartList from "./cartlist";
import CartTotal from "./carttotal";
export default function Cart({history}){
    return(
        <section className = "py-5">
            {/* Title */}
            <div className = "container">
                <Title title = "your cart items" center = "true"/>
            </div>
            <CartColumn/>
            <CartList/>
            <CartTotal history = {history}/>
            
        </section>
    )
}