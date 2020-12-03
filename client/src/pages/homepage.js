import React from "react";
import Design from "../context/design";
import {Link} from "react-router-dom";
import Services from "../components/homepage/service";
import Featured from "../components/homepage/featured";
import homebcg from "../images/homebcg.jpeg"
export default function Homepage(){
    return (
        <>
        <Design img = {homebcg} max = "true" title = "Welcome">
             <Link to = "/products" className = "main-link">My products</Link>
        </Design>
        <Services/>
        <Featured/>
    </>    )
}