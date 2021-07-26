import React from 'react';
import './From.css';
import {BrowserRouter,Link} from 'react-router-dom';
import Navbar_copy from './Navbar_copy';


class From_copy extends React.Component {
    render()
    {
    return(
        <React.Fragment>
        <Navbar_copy/>
<div className="app">
<center><h1><b>WHICH TYPE OF FOOD YOU WANT!!!</b></h1></center>
    <h5></h5>
    <center>
    <div className="row">
    
    <div className="col-md-7">
        <Link to='/Restaurants_copy'>
            
        <button id="ca">VEG</button>
        </Link>
        </div>
    <div className="col-md-3">
        {/* </div>
        <div className="ea"> */}
    {/* &emsp; */}
      <Link to='/Restro_copy'>
        <button id="da">NON-VEG</button>
        </Link>
    </div>
    </div>
    </center>
</div>
</React.Fragment>
    )
}
}

export default From_copy;
