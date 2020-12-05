import React from "react";
import contactimg from "../images/contactbcg.jpg";
import Design from "../context/design";
import {Contact} from "../components/contactpage/info";
export default function Contactpage(){
    return (
        <div>
            <Design img = {contactimg} max = "true"></Design>
            <Contact></Contact>
        </div>
    )
}