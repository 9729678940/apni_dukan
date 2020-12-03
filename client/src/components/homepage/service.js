import React from "react";
import styled from "styled-components";
import {FaDolly,FaRedo,FaRupeeSign} from "react-icons/fa";

export default class Services extends React.Component{
    state = {
        services:[
            {
                id:1,
                icon:<FaDolly/>,
                title:"Free Shipping"
            },
            {
                id:2,
                icon:<FaRedo/>,
                title:"30 days replacement policy"
            },
            {
                id:1,
                icon:<FaRupeeSign/>,
                title:"Secure Payments"
            }
        ]
    };

    render(){
        return (
            <ServiceWrapper className = "py-5">
                <div className = "container">
                    <div className = "row">
                        {this.state.services.map(item => {
                            return (
                                <div className = "col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key = {item.id}>
                                    <div className = "service-icon">
                                        {item.icon}
                                    </div>
                                    <div className = "mt-3 text-capitalize service-text">
                                        {item.title}
                                    </div>
                                </div>
                             
                            )
                        })}
                    </div>
                </div>
            </ServiceWrapper>
        )
    }
}

const ServiceWrapper = styled.section`
 background:gray;
 border-bottom: 4px solid skyblue;
 .service-icon{
     font-size : 2.5rem;
     color:white
 }
 .service-text{
     font-weight:bold;
 };
`