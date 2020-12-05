import React from "react";
import {FaTrash,FaChevronCircleUp,FaChevronCircleDown,FaRupeeSign} from "react-icons/fa";
export default function CartItem(CartItem){
   const{id,title,price,count,total,image,increment,decrement,remove} = CartItem;
   return ( 
      <div className = "row mt-5 mt-lg-0 text-capitalize text-center align-item-center">
         {/* image */}
            <div className = "col-lg-2">
               <img src = {image} width = "60" alt = "product" className = "img-fluid"/>
            </div>
         {/* end image */}

         {/* title */}
         <div className = "col-lg-2">
            <span className = "d-lg-none">product: </span>
            {title}
         </div>
         {/* end title */}

         {/* price */}
         <div className = "col-lg-2">
            <span className = "d-lg-none">Price: </span>
            <FaRupeeSign/> {price}
         </div>
         {/* end price */}

         {/* count control */}
         <div className = "col-lg-2">
            <div className = "d-flex justify-content-center">
               <div>
                  <FaChevronCircleDown className = "text-primary cart-icon" onClick = {() => decrement(id)}/>
                  <span className = "text-title text-muted mx-3">{count}</span>
                  <FaChevronCircleUp className = "text-primary cart-icon" onClick = {() => increment(id)}/>
               
               </div>
               
            </div>
         </div>
         {/* end of count control */}

         {/* trash */}
         <div className = "col-lg-2">
            <FaTrash className = "trash cart-icon" onClick = {() => remove(id)}/>
         </div>
         {/* end trash*/}
         {/* item total */}
         <div className = "col-lg-2">
            <strong className = "text-muted">Item-Total: <FaRupeeSign/> {total}</strong>
         </div>
         {/* end of item total */}

      </div>
   )
} 