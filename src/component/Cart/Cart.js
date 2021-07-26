import React,{Component} from 'react';
import './Cart.css';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../Context';
import CartList from './CartList';
import CartTotals from './CartTotals';
import axios from 'axios';
import Navbar_copy from '../../Navbar_copy';

export default class Cart extends Component{

  
    render() {
          return (
            <section className="cart">
              <ProductConsumer>
                {value =>{
                  const {cart}=value;
                  if(cart.length > 0){
                    return(
                      <React.Fragment>
                        
                     <Navbar_copy />
                          <Title name="your" title="cart" /> 
                          <CartColumns />
                          <CartList value={value} />
                          <CartTotals value={value} />
                      
                      </React.Fragment>
                    );
                  }
                  else{
                    return <EmptyCart />;
                  }
                }}
              </ProductConsumer>
            </section>
        );
    }
}