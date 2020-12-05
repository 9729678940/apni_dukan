import React from "react";
import styled from "styled-components";
import {ProductConsumer} from "../context/context";
export default function footer(){
    return (
        <ProductConsumer>
            {
                value =>{
                    return <FotterWrapper>
                        <div className = "container py-3">
                            <div className = "row">
                                <div className = "col-md-6">
                                    <p className = "text-capitalize">copyright &copy; Apni Dukaan {new Date().getFullYear}. all rights reserved</p>
                                </div>
                            <div className = "col-md-6 d-flex justify-content-around">
                                {value.socialicons.map(item => <a href = {item.path}>{item.icon}</a>)}
                                </div>
                            </div>
                        </div>
                    </FotterWrapper>
                }
            }
        </ProductConsumer>
    );
}
const FotterWrapper = styled.div`
    background-color:gray;
    color:white;
    .icon{
        font-size:1.5rem;
        color:white;
        transition:all 0.3s ease-in-out;  
    }
    .icon:hover{
        color:skyblue;
        cursor: pointer;
    }
`