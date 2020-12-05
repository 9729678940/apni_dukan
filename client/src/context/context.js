import React from "react";
import {linkdata} from "./linkdata";
import {socialData} from "./socialdata";
import {items} from "./productdata";
const ProductContext = React.createContext();
class ProductProvider extends React.Component{
    state ={
        cartitems:0,
        sidebaropen:false,
        cartopen:false,
        links:linkdata,
        socialicons:socialData,
        cart:[],
        cartsubtotal:0,
        carttotal:0,
        storeproducts:[],
        filterproducts:[],
        featuredproducts:[],
        singleproduct:{},
        loading:true,
    }
    componentDidMount(){
        this.setproducts(items);
    }
    setproducts = (product) =>{
        let storeproducts = product.map(item => {
            const{id} = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = {id,...item.fields,image};
            return product;
        });

        {/* featured products*/}
        let featuredproducts = storeproducts.filter(item => item.featured === true);

        this.setState({
            storeproducts,
            filterproducts:storeproducts,
            featuredproducts,
            cart:this.getstoragecart(),
            singleproduct:this.getstorageproduct(),
            loading:false,
        },
        () => {
            this.addtotal(); 
        });
    };
    //items in cart

    getstoragecart = () =>{
        let cart;
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        else{
            cart = [];
        }
        return cart;
    };
    //store items

    getstorageproduct = () =>{
        return localStorage.getItem('singleproduct')?JSON.parse(localStorage.getItem('singleproduct')):{};
    }
    //total value

    gettotal = () => {
        let subtotal = 0;
        let cartitems = 0;
        this.state.cart.forEach(item => {
            subtotal+=item.total;
            cartitems+=item.count;
        });
        let total = subtotal;
        total = parseFloat(total.toFixed(2));
        return {
            cartitems,
            subtotal,
            total
        };
    }
    
    addtotal = () =>{
        const total = this.gettotal();
        this.setState({
            cartitems:total.cartitems,
            cartsubtotal:total.subtotal,
            carttotal:total.total
        });
    }

    //sync total

    syncstorage = () =>{
        localStorage.setItem('cart',JSON.stringify(this.state.cart));
    }

    //add to cart

    addtocart = (id) =>{
        let tempcart = [...this.state.cart];
        let tempproducts = [...this.state.storeproducts];
        let tempitem = tempcart.find(item => item.id === id);
        if(!tempitem){
            tempitem = tempproducts.find(item => item.id === id);
            let total = tempitem.newprice;
            let cartitem = {...tempitem,count:1,total};
            tempcart = [...tempcart,cartitem];
        }
        else{
            tempitem.count++;
            tempitem.total = tempitem.newprice * tempitem.count;
        }
        this.setState(() =>{
            return {cart:tempcart};
        },
        () => {
            this.addtotal();
            this.syncstorage();
        })
    }

    //set single product

    setsingleproduct = (id) =>{
        let product = this.state.storeproducts.find(item => item.id === id);
        localStorage.setItem('singleproduct',JSON.stringify(product));
        this.setState({
            singleproduct:{...product},
            loading:false
        })
    }
    handlesidebar = () =>{
        this.setState({sidebaropen:!this.state.sidebaropen})
    }
    handlecart = () =>{
        this.setState({cartopen:!this.state.cartopen})
    }
    closecart = () =>{
        this.setState({cartopen:false})
    }
    opencart = () =>{
        this.setState({cartopen:true})
    }

    // cart functionality

    //increment
    increment = (id) =>{
        const tempcart = [...this.state.cart];
        const tempitem = tempcart.find(item => item.id === id);
        tempitem.count++;
        tempitem.total = tempitem.price * tempitem.count;
        this.setState(() =>{
            return {
            cart:[...tempcart]
            };
        },
        () => {
            this.addtotal();
            this.syncstorage();
        }) 
    } 
    
    //remove 
    remove = (id) =>{
        let tempcart = [...this.state.cart];
        let newtempcart = tempcart.filter(item => item.id!==id);
        this.setState({
            cart:[...newtempcart]
        },
        () => {
            this.addtotal();
            this.syncstorage();
        })
    }

    //decrement
    decrement = (id) =>{
        const tempcart = [...this.state.cart];
        const tempitem = tempcart.find(item => item.id === id);
        if(tempitem.count === 1){
            this.remove(id);
        }
        else{
            tempitem.count--;
            tempitem.total = tempitem.price * tempitem.count;  
            this.setState({
                cart:[...tempcart]
            },
            () => {
                this.addtotal();
                this.syncstorage();
            })
        }
    }
    
    
    //clearcart
    clearcart = (id) =>{
        this.setState({
            cart:[]
        },
        () => {
            this.addtotal();
            this.syncstorage();
        })
    }

    render(){

        return(
            <ProductContext.Provider value = {{
                ...this.state,
                handlesidebar:this.handlesidebar,
                handlecart:this.handlecart,
                closecart:this.closecart,
                opencart:this.opencart,
                addToCart:this.addtocart,
                openCart:this.opencart,
                increment:this.increment,
                decrement:this.decrement,
                remove:this.remove,
                clearcart:this.clearcart,
                setsingleproduct:this.setsingleproduct,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;
export{ProductProvider,ProductConsumer}