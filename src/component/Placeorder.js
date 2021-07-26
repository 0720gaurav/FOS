import React from 'react';
import Example from './Example';
import './Placeorder.css';
import Navbar_copy from '../Navbar_copy';


class Placeorder extends React.Component {
    render(){
        
        return(
            <React.Fragment>
            <Navbar_copy />
<div className="placeorder" id="photo">
<div className="order"><br/><br/><br/><br/><br/><br/>
   <center> <h2><b>ORDER PLACED</b></h2>
    <br/>
    <h1>**Thankyou for placing order!!!!!</h1></center>               
<div>
<Example/>    
</div>
</div>
</div>
</React.Fragment>
      
        )
}
}

export default Placeorder;