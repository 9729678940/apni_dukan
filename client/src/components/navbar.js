import React from "react";
import {ProductConsumer} from "../context/context";
import styled from "styled-components";
import {FaBars,FaCartPlus} from "react-icons/fa";
export default function Navbar(){
    return (
        <ProductConsumer>
            {value =>{
                const{cartitems,handlesidebar,handlecart} = value;
                return(
                    <NavWrapper>
                        <div className = "nav">
                            <FaBars className = "nav-icon" onClick = {handlesidebar}/>
                            <div className = "company-title">
                            <h2><span id = "first-name">Apni</span><span id = "last-name">Dukaan</span></h2>
                            </div>
                            <div className = "nav-cart">
                                <FaCartPlus className = "nav-icon" onClick = {handlecart}/>
                                <div className = "cart-items">{cartitems}</div>
                            </div>
                        </div>
                    </NavWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const NavWrapper = styled.nav`
    position:sticky;
    top:0;
    padding:0rem 0.5rem;
    background-color:white;
    border-bottom:4px solid skyblue;
    z-index:1;
    .nav{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    h2{
        text-transform:capitalize;
        padding:1rem;
        font-size:5 rem;
        letter-spacing:2px;
    }
    #first-name{
        font-weight:bold;
        color:skyblue;
    }
    #last-name{
        font-weight:bold;
        color:black;
    }
    .nav-icon{
        font-size:1.5rem;
        cursor: pointer;
    }
    .cart-items{
        background-color:skyblue;
        padding:0 8px;
        top:15px;
        right:1px;
        position:absolute;
        border-radius:50%;
        color:white;
        font-size:0.85rem;
    }
`