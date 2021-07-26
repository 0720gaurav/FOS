import React from 'react';
import './Restaurants.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Navbar_copy from './Navbar_copy';



class Restaurants_copy extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar_copy />
            <div className="Restaurants">
                <h2><b></b></h2>
                <h5></h5>
                <center>
                    <div className="row">

                        <div className="col-md-6">
                            <Link to='/Food'>
                                <button id="ma"></button>
                            </Link>

                        </div>
                        <div className="col-md-6">
                            <Link to='/Food'>
                                <button id="wa" ></button>
                            </Link>
                        </div>
                    </div>
                </center>
            </div>
            </React.Fragment>
        )
    }
}

export default Restaurants_copy;
