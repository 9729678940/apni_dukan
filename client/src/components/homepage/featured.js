import React from "react";
import Title from "../title";
import {ProductConsumer} from "../../context/context";
import {Link} from "react-router-dom";
import Product from "../product";
export default function Featured(){
    return (
        <section className = "py-5">
            <div className = "container">
                {/*title*/}
                <Title title = "featured products" center = "true"/>
                {/*Products*/}
                <ProductConsumer>
                    {value => {
                        const{featuredproducts} = value;
                        return (
                            featuredproducts.map(product => (<Product key = {product.id} product = {product}></Product>))
                        );
                    }}
                </ProductConsumer>
            </div>
            <div className = "row mt-5">
                <div className = "col text-center">
                    <Link to = "/products" className = "main-link">Our Products</Link>
                </div>
            </div>
        </section>
    );
}