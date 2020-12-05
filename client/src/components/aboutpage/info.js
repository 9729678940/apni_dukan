import React from "react";
import Title from "../title";
import {Link} from "react-router-dom";
import defaultBcg from "../../images/default.jpg";
export default function Info(){
    return (
        <section className ="py-5">
            <div className = "container">
                <div className = "row">
                    <div className = "col-10 mx-auto col-md-6 my-3">
                        <img src={defaultBcg} alt = "" className = "img-fluid img-thumb"></img>                        
                    </div>
                    
                    <div className = "col-10 mx-auto col-md-6 my-3">
                        <Title title = "about-us"></Title>
                        <p className = "text-lead text-muted my-3">
                        Spare more with ‘Apni Dukaan’ ! We give you the most minimal costs on the entirety of your grocery needs.‘Apni Dukaan’ is a low-cost online general store that gets items crosswise over classifications like grocery, natural products and vegetables, excellence and health, family unit care, infant care, pet consideration and meats and fish conveyed to your doorstep.Browse more than 5,000 items at costs lower than markets each day! Calendar conveyance according to your benefit
                        </p>
                        <Link to = "/home"><button className = "main-link" type = "button" style={{marginTop:"2rem"}}>Go Back to Home</button></Link>
                    </div>
                </div>
            </div>
        </section>
        
    )
} 