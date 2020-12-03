import React from "react";
import {ProductConsumer} from "../../context/context";
import Title from "../title";
import Product from "../product"
export default function Products(){
    return(
        <ProductConsumer>
            {value => {
                const{filterproducts} = value;
                return (
                    <section className = "py-5">
                        <div className = "container">
                            {/* title */}
                            <Title title = "our products" center = "true"/>
                            {/* products */}
                            <div className = "row py-5">
                                {filterproducts.map(product => {
                                    return (
                                        <Product id = {product.id} product = {product}/>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                )
            }}
        </ProductConsumer>
    );
}