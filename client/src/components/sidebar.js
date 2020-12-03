import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context/context";
export default function Sidebar(){
    return (
        <ProductConsumer>
            {value =>{
                const{links,sidebaropen,handlesidebar} = value;
                return(
                    <SideWrapper show = {sidebaropen}>
                        <ul>
                            {links.map(link => {
                                return (
                                    <li key = {link.id}>
                                        <Link to = {link.path} onClick = {handlesidebar} className = "sidebar-link">{link.text}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </SideWrapper>

                );
            }}
        </ProductConsumer>
    )
}
const SideWrapper = styled.div`
    position:fixed;
    top:82px;
    left:0px;
    height:100%;
    width:100%;
    background:white;
    z-index:1;
    border-right:3px solid skyblue;
    transition:all 0.3s ease-in-out;
    transform:${props => (props.show?"translateX(0%)":"translateX(-100%)")};
    ul{
        list-style-type:none;
        padding:0px !important;
    }
    .sidebar-link{
        padding:5px;
        font-size:20px;
        display:block;
        text-transform:capitalize;
        color:black;
    }
    .sidebar-link:hover{
        text-decoration:none;
        padding:10px;
        background:skyblue;
        color:white;
        font-size:22px;
    }
    @media(min-width:576px){
        width:20rem;
    }
`