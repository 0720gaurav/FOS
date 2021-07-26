import React from 'react'

export default function CartColumns(){
    return(
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">

                <div className="col-10 mx-auto col-lg-2">
                    <h3><p  className="text-uppercase">food</p></h3>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h3><p  className="text-uppercase">name of food</p></h3>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h3><p  className="text-uppercase">price</p></h3>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h3><p  className="text-uppercase">quatity</p></h3>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h3><p  className="text-uppercase">remove</p></h3>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h3><p  className="text-uppercase">total</p></h3>
                </div>
            </div>
        </div>
    );
    
}