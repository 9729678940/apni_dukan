import React from "react";
import bcg from "../images/default.jpg";
import styled from "styled-components";

export default function Design({children,max,img,title}){
    return (
        <DesignWrapper max = {max} img = {img}>
            <div className = "banner">
                <h1 className = "title">{title}</h1>
                {children}
            </div>
        </DesignWrapper>
    )
}

const DesignWrapper = styled.div`
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    height:${props => (props.max ? "100vh":"80vh")};
    color:white;
    text-transform:capitalize;
    background : url(${props => props.img});
    background-size:cover;
    background-repeat:no-repeat;
    .title{
        padding:1rem;
        font-size:5 rem;
        text-shadow:4px 4px 2px rgba(0,0,0,1);
        letter-spacing:2px;
    }
`

Design.defaultProps ={
    img:bcg,
}