import React from 'react'
import Navbar_copy from '../../Navbar_copy';

export default function EmptyCart(){
return(<div>
    <React.Fragment>
                     <Navbar_copy />
                     
    <div className="container mt-5">
    <div className="row">
        <div className="col-10 mx-auto text-center text-title">
            <h1>your cart is currently empty.</h1>
        </div>
    </div>
    </div>
    </React.Fragment>
    </div>
)
}