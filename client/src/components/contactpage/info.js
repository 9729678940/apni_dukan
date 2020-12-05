import Title from "../title"
import axios from "axios"
import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Contact extends Component {
    

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.handlechange=this.handlechange.bind(this)
        this.handlesubmit=this.handlesubmit.bind(this)
    }
    
    handlechange=(e)=>{
        this.setState({
            [e.target.getAttribute('name')]:e.target.value
        })
    }
    
    handlesubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:5000/sendfeedback/',this.state)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
        const forms=document.getElementsByClassName('form-control')
        toast("Thanks For Your FeedBack");
        for (let i = 0; i < forms.length; i++) {
            forms[i].value=""
        }
    }

    
    render() {
        
        return (
            <section className = "py-5">
                <div className = "row">
                <div className = "col-10 mx-auto col-md-6 my-3">
                    <Title title = "Contact Us" center = "true"></Title>
                    <form className = "mt-5">
                        <input type = "text" className = "form-control my-3"   name="name"  onChange={this.handlechange} placeholder = "Steve Smith"></input>
                        <input type = "email" className = "form-control my-3"  name="email"  onChange={this.handlechange}  placeholder = "example@email.com"></input>
                        <input type = "text" className = "form-control my-3"  name="subject" onChange={this.handlechange}  placeholder = "Subject"></input>
                        <textarea rows = "10" className = "form-control my-3"  name="message" onChange={this.handlechange}  placeholder = "Your Message Please!!!"></textarea>
                        <button className = "main-link" style = {{marginTop:"2rem"}} onClick={this.handlesubmit}>Send</button>
                    </form>
                </div>
                </div>
                <ToastContainer />
            </section>
        )
    }
}


