import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {ProductConsumer} from "../context/context";
import {FaRupeeSign} from "react-icons/fa"
export default function Sidecart(){
    return (
        <ProductConsumer>
            {value => {
                const{cartopen,handlecart,cart,carttotal} = value;
                return (
                    <SidecartWrapper show = {cartopen} onClick = {handlecart}>
                        <ul>
                            {cart.map(item => {
                                return (
                                    <li key = {item.id} className ="cart-item mb-4">
                                        <img src = {item.image} alt = "product-image" width = "35px"/>
                                        <div className = "mt-3">
                                            <h6 className = "text-capitalize item-title">{item.title}</h6>
                                            <h6 className = "text-capitalize item-count-price">Quantity:  {item.count} <br></br>  Price: <FaRupeeSign/>{item.newprice}</h6>
                                        </div>
                                    </li>
                                )
                            })}
                            <h6 className ="cart-total">
                                Cart-Total <span className   ="including-gst">*(including GST)</span><span className = "equal-sign"> = </span><FaRupeeSign/>{carttotal}
                            </h6>
                            <div className = "text-center my-5">
                                <Link to = "/cart" className = "main-link">Cart Page</Link>
                            </div>
                        </ul>
                    </SidecartWrapper>
                );
            }}
        </ProductConsumer>
    )
}
const SidecartWrapper = styled.div`
    position:fixed;
    top:82px;
    right:0px;
    height:89%;
    width:100%;
    background:white;
    z-index:1;
    border-left:3px solid skyblue;
    transition:all 0.3s ease-in-out;
    transform:${props => (props.show?"translateX(0%)":"translateX(100%)")};
    
    @media(min-width:576px){
        width:20rem;
    }
    overflow:scroll;
    padding:2rem;
    ul{
        padding:0 !important;
        list-style:none;
    }
    .item-title{
        font-size:14px;
        color:gray;
    }
    .item-title-price{
        font-size:12px;
        font-weight:bold; 
    }
    .cart-total{
        font-size:16px;
        color:gray;
        font-weight:bold;
    }
    .including-gst{
        font-size:10px;
        color:black;
    }
    .equal-sign{
        color:black;
        font-size:15px;
    }
    
`