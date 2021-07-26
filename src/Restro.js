import React from 'react';

import {BrowserRouter,Link} from 'react-router-dom';

class Restro extends React.Component {
    render()
    {
    return(
<div className="access">
    <h2><b></b></h2>
    <h5></h5>
    <center>
        <Link to='/Food_copy'>
        <button id="mac"></button>
        </Link>

        <Link to='/Food_copy'>
        <button id="wac" ></button>
        </Link>
    </center>
</div>
    )
}
}

export default Restro;
