import React from 'react';
import './Restaurants.css';
import { BrowserRouter, Link } from 'react-router-dom';


class Restaurants extends React.Component {
    render() {
        return (
            <div className="Restaurants">
                <h2><b></b></h2>
                <h5></h5>
                <center>
                    <div className="row">

                        <div className="col-md-6">
                            <Link to='/Food_copy'>
                                <button id="ma"></button>
                            </Link>

                        </div>
                        <div className="col-md-6">
                            <Link to='/Food_copy'>
                                <button id="wa" ></button>
                            </Link>
                        </div>
                    </div>
                </center>
            </div>
        )
    }
}

export default Restaurants;
