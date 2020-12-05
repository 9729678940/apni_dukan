import React from "react";
import Paypalbtn from "./paypalbtn";
import {ProductConsumer} from "../../context/context";
import {FaRupeeSign} from "react-icons/fa";
import styled from "styled-components";
export default function CartTotal({history}){
    return(
        <CartTotalWrapper>
        <div className ="container">
            <div className = "row">
                    <ProductConsumer>
                        {value => {
                            const{carttotal,clearcart} = value;
                            return (
                                <div className = "col text-title text-center my-4">
                                    <button className = "btn btn-outline-danger text-capitalize mb-4" onClick = {clearcart}>
                                        Clear Cart
                                    </button>
                                    <div className = "total">Cart-Total: <FaRupeeSign/>{carttotal}</div>
                                    <Paypalbtn history = {history}
                                    carttotal = {carttotal}
                                    clearcart = {clearcart}
                                    />
                                </div>

                            )
                        }}

                    </ProductConsumer>
                
            </div>
        </div>
        </CartTotalWrapper>
        
        
    )
}

const CartTotalWrapper = styled.div`
    .total{
        font-size:25px;
        font-weight:bold;
    }
`