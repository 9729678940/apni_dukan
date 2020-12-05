import React from "react";
import {Link} from "react-router-dom";
import { ProductConsumer } from "../context/context";
import {FaRupeeSign} from "react-icons/fa";
import styled from "styled-components";
export default function SingleProductpage(){
    return (
        <ProductConsumer>
            {value => {
                const{singleproduct,addToCart,loading} = value;
                if(loading){
                    console.log("loding....");
                    return <h1>Product Loding....</h1>
                }
                const{company,title,description,price,newprice,image,id,featured} = singleproduct;
                return (
                    <SingleProduct  show = {featured}>
                    <section className = "py-5">
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-10 mx-auto col-sm-8 col-md-6 my-3">
                                    <div className = "deal">Limited Hours Deal</div>
                                    <img src = {image} alt = "single-product" className = "img-fluid"/>
                                </div>
                                <div className = "col-10 mx-auto col-sm-8 col-md-6 my-3">
                                    <h5 className = "text-title mb-4">{title}</h5>
                                    <h5 className = "text-capitalize mb-4 text-muted">Company: {company}</h5>
                                    <h5 className = "text-main text-capitalize mb-4">MRP :<FaRupeeSign/> {price}</h5>
                                    <h5 className = "new-price text-capitalize mb-4">New Price :<FaRupeeSign/> {newprice}</h5>
                                    <p className = "text-capitalize text-title mt-3">Description:<br/>{description}</p>
                                    <button type = "button" style = {{margin:'0.75rem'}} onClick = {() => addToCart(id)} className = "main-link">
                                        add to cart
                                    </button>
                                    <Link to = "/products" className = "main-link" style = {{margin:'0.75rem'}}>Back To Products</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    </SingleProduct>
                )
            }}
        </ProductConsumer>
    )
}
const SingleProduct = styled.div`
    .deal{
    background-color:red;
    color:yellow;
    padding:3px;
    text-align:center;
    font-weight:500;
    opacity:${props => (props.show?"1":"0")};
    }
`