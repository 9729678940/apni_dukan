import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaCartPlus,FaSearch,FaRupeeSign} from "react-icons/fa";
import {ProductConsumer} from "../context/context";
export default function Product({product}){
    return(
        <ProductConsumer>
            {value => {
                const{addToCart,setsingleproduct} = value;
                return(
                    <ProductWrapper show = {product.featured} style = {{display:"inline-block"}} className = "col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
                        <div className = "card">
                            <span className = "deal">Limited Hours Deal</span>
                            <div className = "img-container">
                            <img src = {product.image} className = "card-img-top p-5" alt = "product" style = {{height:"300px",width:"300px"}}></img>
                                    <div className = "product-icon">
                                        <Link to = {`/products/${product.id}`}>
                                            <FaSearch className = "icon" onClick = {() => setsingleproduct(product.id)}></FaSearch>
                                        </Link>
                                        <FaCartPlus className = "icon" onClick = {() => addToCart(product.id)}></FaCartPlus>
                                    </div>
                                </div>
                                <div className = "card-body d-flex justify-content-between">
                                    <p className ="mb-0 title">{product.title}</p>
                                    <p className = "mb-0 text-main price-text">MRP:<span className ="price">{product.price}</span>
                                    <br></br><FaRupeeSign className = "rupee-symbol"/><span className = "new-price">{product.newprice}</span></p>
                                </div>
                            </div>
                    </ProductWrapper>
                )
            }}
        </ProductConsumer>
    )
}
const ProductWrapper = styled.div `
.card {
    box-shadow : 5px 5px 5px 0px rgba(0,0,0,0.3);
    transition:all 0.3 ease-in-out;
}
.deal{
    background-color:red;
    color:yellow;
    padding:3px;
    font-weight:500;
    opacity:${props => (props.show?"1":"0")};
}
.title{
    font-size:12px;
    font-weight:bold;
}
.price-text{
    font-size:12px;
    font-weight:bold;
}
.price{
    font-size:15px;
    color:red;
    text-decoration:line-through;

}
.rupee-symbol{
    font-size:15px;
}
.new-price{
    font-size:16px;
}
.card:hover{
    box-shadow : 7px 7px 7px 0px rgba(0,0,0,0.4);
    cursor:pointer;
}
.card-img-top{
    transition:all 0.3 ease-in-out;
}
.card:hover .card-img-top{
    transform:scale(1.15);
    opacity:0.2;

}
.img-container{
    position:relative;
}
.product-icon{
    transition:all 0.3 ease-in-out;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    opacity:0;
}
.icon{
    font-size:2rem;
    margin:1rem;
    padding:0.5rem;
    color:skyblue;
    background:black;
    border-radius:0.5rem;
}
.card:hover .product-icon{
    opacity:1;
}
`