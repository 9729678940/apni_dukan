import React from "react";
import CartItem from "./cartitem";
import styled from "styled-components";
import {ProductConsumer} from "../../context/context";
export default function CartList(){
    return(
        <CartListWrapper>
            <div className = "container-fluid">
                {/* row */}
                <div className = "row">
                    <div className = "col">
                        <ProductConsumer>
                            {value => {
                                const{cart,increment,decrement,remove} = value;
                                if(cart.length === 0){
                                    return (
                                        <h1 className = "text-title text-center my-4">Your Cart is Currently Empty</h1>
                                    )
                                }
                                return (
                                    <>
                                        {cart.map(item => (<CartItem key = {item.id}  increment = {increment}
                                        decrement = {decrement} remove = {remove} image = {item.image} price = {item.newprice}
                                        title = {item.title} company = {item.company} count = {item.count} id = {item.id} total = {item.total}></CartItem>))}

                                    </>
                                )
                            }}

                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </CartListWrapper>
    )
}

const CartListWrapper = styled.div`

`