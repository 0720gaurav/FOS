// import React from 'react';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './CartTotals.css';
import axios from 'axios';

export default function CartTotals({value}){
    const{cartSubTotal,cartTax,cartOffer,cartTotal,clearCart}=value;
        
    // const [SubTotal, setState] = useState("SubTotal : " + cartTotal);
    // const [SubTotal, setState] = useState("SubTotal : " + cartSubTotal);
    // const [SubTotal, setState] = useState("SubTotal : " + cartSubTotal);
    // const [SubTotal, setState] = useState("SubTotal : " + cartSubTotal);
    //     count:cartSubTotal
    //   });
    // //   setState({ count: state.cartSubTotal });   
    //   console.log(SubTotal);   
    // const [name, setName] = useState(cartSubTotal);
    // console.log(name);
    
    async function submit()
    {
        const{cartSubTotal,cartTax,cartOffer,cartTotal,clearCart,detailProduct}=value;
        const {id,company,img,info,price,title,inCart,count     
        } = value.detailProduct;
        const {increment,decrement,removeItem}=value;
        // const {count}=item;
        console.log(cartTotal);
        console.log(title);
        console.log(price);
        console.log(count);  
        
        axios.post('http://localhost:3001/api/usercart/create', { cartTotal, price,title,count })
        .then(result => {
          alert("Created")
          console.log(result.data)

        }
        );
  }

    return (
       <React.Fragment>                                                                                                                                 
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto 
                col-sm-8 text-capitalize text-right">
                    <Link to="/Cart">
                        <button className="btn btn-outline-danger text-uppercase 
                        mb-3 px-5" id="clearcartbtn" type="button" onClick={()=>clearCart()}>
                            clear cart
                        </button>
                    </Link>
                    <h5>
                       <span className="text-title">Subtotal :</span> 
                        <strong>Rs.{cartSubTotal}</strong>
                    </h5>
                    <h5>
                       <span className="text-title">Tax :</span> 
                        <strong>Rs.{cartTax}</strong>
                    </h5>
                    <h5>
                       <span className="text-title">Offer : -</span> 
                        <strong>Rs.{cartOffer}</strong>
                    </h5>
                    <h5>
                       <span className="text-title">Total :</span> 
                        <strong>Rs.{cartTotal}</strong>
                    </h5>
                    <Link to="/place">
                    <button className="btn btn-outline-success text-uppercase 
                        mb-3 px-5" id="clearcartbtn" type="button" onClick={()=>submit()}>
                            Place Order
                        </button></Link>
                </div>
            </div> 
        </div>
       </React.Fragment>
    )
    }