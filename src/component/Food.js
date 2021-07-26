import React,{Component} from "react";
import Product from './Product';
import Title from './Title';
import './Food.css';
import {ProductConsumer} from '../Context';
import Navbar_copy from '../Navbar_copy';



export default class Food extends Component{
    
    render(){
        return(
            
            <React.Fragment>
                 
                <Navbar_copy />
                <div className="py-5">
                   <div className="container">
                    <Title name="our" title="menu" />
                       <div className="row" >
                        <ProductConsumer>
                            {value=>{
                                return value.products.map(product=>{
                                    return <Product key ={product.id}
                                    product={product} />;
                                });
                            }}
                        </ProductConsumer>
                       </div>
                    </div> 
                </div>
            </React.Fragment>
        );
    }
}