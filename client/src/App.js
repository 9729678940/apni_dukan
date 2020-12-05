import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/homepage";
import Cart from "./pages/cartpage";
import Contact from "./pages/contactpage";
import About from "./pages/aboutpage";
import Product from "./pages/productpage";
import SingleProduct from "./pages/singeproductpage";
import {HashRouter as Router, Route,Switch} from "react-router-dom";
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
        <Router>
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/cart" exact component = {Cart}/>
          <Route path = "/contact" exact component = {Contact}/>
          <Route path = "/about" exact component = {About}/>
          <Route path = "/products" exact component = {Product}/>
          <Route path = "/products/:id" exact  component = {SingleProduct}/>
        </Switch>
        </Router>
        <Footer/>
      </>
    );
    }
}

export default App;
