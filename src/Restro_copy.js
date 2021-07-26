import React from 'react';
import {BrowserRouter,Link} from 'react-router-dom';
import Navbar_copy from './Navbar_copy';


class Restro_copy extends React.Component {
    render()
    {
    return(
        <React.Fragment>
        <Navbar_copy />
<div className="access">
    <h2><b></b></h2>
    <h5></h5>
    <center>
        <Link to='/Food'>
        <button id="mac"></button>
        </Link>
        <Link to='/Food'>
        <button id="wac" ></button>
        </Link>
    </center>
</div>
</React.Fragment>
            
    )
}
}

export default Restro_copy;
