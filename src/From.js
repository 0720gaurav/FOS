import React from 'react';
import './From.css';
import {BrowserRouter,Link} from 'react-router-dom';


class From extends React.Component {
    render()
    {
    return(
<div className="app">
<center><h1><b>WHICH TYPE OF FOOD YOU WANT!!!</b></h1></center>
    <h5></h5>
    <center>
    <div className="row">
    
    <div className="col-md-7">
        <Link to='/Restaurants'>
            
        <button id="ca">VEG</button>
        </Link>
        </div>
    <div className="col-md-3">
        {/* </div>
        <div className="ea"> */}
    {/* &emsp; */}
      <Link to='/Restro'>
        <button id="da">NON-VEG</button>
        </Link>
    </div>
    </div>
    </center>
</div>
    )
}
}

export default From;
