import React from "react";
import Info from "../components/aboutpage/info";
import aboutbcg from "../images/aboutbcg.jpg";
import Design from "../context/design";
export default function Aboutpage(){
    return (
        <>
            <Design img = {aboutbcg} max = "true"></Design>
            <Info/>
        </>
    )
}