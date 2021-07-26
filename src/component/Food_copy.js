import React,{Component} from "react";
import Product from './Product _copy';
import Title from './Title';
import './Food.css';
import {ProductConsumer} from '../Context';

export default class Food_copy extends Component{
    
    render(){
        return(
            <React.Fragment>
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