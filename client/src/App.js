import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/homepage";
import Cart from "./pages/cartpage";
import Contact from "./pages/contactpage";
import About from "./pages/aboutpage";
import Product from "./pages/productpage";
import SingleProduct from "./pages/singeproductpage";
import {Route,Switch} from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Sidecart from "./components/sidecart";

class App extends React.Component{
  render(){
    return (
      <>
        <Navbar/>
        <Sidebar/>
        <Sidecart/>
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/cart"  component = {Cart}/>
          <Route path = "/contact"  component = {Contact}/>
          <Route path = "/about"  component = {About}/>
          <Route path = "/products" exact component = {Product}/>
          <Route path = "/products/:id"   component = {SingleProduct}/>
        </Switch>
        <Footer/>
      </>
    );
    }
}

export default App;
