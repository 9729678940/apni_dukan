import React from "react";
import styled from "styled-components";
export default function CartColumn(){
    return(
        <CartColumnWrapper>
            <div className = "container-fluid text-center d-none d-lg-block my-5">
                <div className = "row">
                    {/* Single Column */}
                    <div className = "col-lg-2 list-heading">
                        <p className = "text-uppercase">Product</p>
                    </div>
                    {/* end of single column */}

                    {/* Single Column */}
                    <div className = "col-lg-2 list-heading">
                        <p className = "text-uppercase">Name of Product</p>
                    </div>
                    {/* end of single column */}

                    {/* Single Column */}
                    <div className = "col-lg-2 list-heading">
                        <p className = "text-uppercase">Price</p>
                    </div>
                    {/* end of single column */}

                    {/* Single Column */}
                    <div className = "col-lg-2 list-heading">
                        <p className = "text-uppercase">Quantity</p>
                    </div>
                    {/* end of single column */}

                    {/* Single Column */}
                    <div className = "col-lg-2 list-heading">
                        <p className = "text-uppercase">Remove</p>
                    </div>
                    {/* end of single column */}

                    {/* Single Column */}
                    <div className = "col-lg-2 list-heading">
                        <p className = "text-uppercase">Total</p>
                    </div>
                    {/* end of single column */}
                </div>
            </div>
        </CartColumnWrapper>
    )
}

const CartColumnWrapper = styled.div`
.list-heading{
    font-weight:bold;
}
`