import React,{Component} from 'react';
import {BrowserRouter, Route,Switch,Router} from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import Cart from './component/Cart';
import Details from './component/Details';
import Default from './component/Default';

import Register from './Register';
import Login from './Login';
import Home from './Home';
import Home_copy from './Home_copy';


import Navbar from './Navbar';
import Navbar_copy from './Navbar_copy';

// import Aboutus from './Aboutus';
import From from './From';
import From_copy from './From_copy';
import Contactus from './Contactus';
import Contactus_copy from './Contactus_copy';
import Feedback from './Feedback';
import Feedback_copy from './Feedback_copy';
import Restaurants from './Restaurants';
import Restaurants_copy from './Restaurants_copy';

import Restro from './Restro';
import Restro_copy from './Restro_copy';
// import Menapparels from './Menapparels';
// import Menapparels_copy from './Menapparels_copy';

// import Menaccessories from './Menaccessories';
// import Womenapparels from './Womenapparels';
// import Womenaccessories from './Womenaccessories';
import Food from './component/Food';
import Food_copy from './component/Food_copy';
import Login_copy from './component/Login_copy';
import Login_copy2 from './component/Login_copy2';
import Placeorder from './component/Placeorder';
import Place from './component/Place';

import Product from './component/Product';
import Modal from './component/Modal';
// import Main from './Main';
class App extends Component{
render() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
      <Route path ="/" component={Home} exact />
      <Route path ="/Register" component={Register} />
      <Route path ="/Login" component={Login} />
      <Route path ="/Login_copy" component={Login_copy} />
      {/* <Route path ="/Home" component={Home} exact /> */}
      <Route path ="/Home_copy" component={Home_copy} exact />
      {/* <Route path ="/Main" component={Main} exact /> */}
      <Route path ="/From" component={From}  />
      
      <Route path ="/From_copy" component={From_copy}  />    
      {/* <Route path ="/Aboutus" component={Aboutus}  /> */}
      <Route path ="/Contactus" component={Contactus}  />
      <Route path ="/Contactus_copy" component={Contactus_copy}  />
      <Route path ="/Feedback" component={Feedback}  />
      <Route path ="/Feedback_copy" component={Feedback_copy}  />
      <Route path ="/Restaurants" component={Restaurants}  />
      <Route path ="/Restaurants_copy" component={Restaurants_copy}  />

      <Route path ="/Restro" component={Restro} />
      
      <Route path ="/Restro_copy" component={Restro_copy} />
      {/* <Route path ="/Menapparels" component={Menapparels} />  */}
      {/* <Route path ="/Menapparels_copy" component={Menapparels_copy} />  */}

      {/* <Route path ="/Menaccessories" component={Menaccessories} /> */}
      {/* <Route path ="/Womenapparels" component={Womenapparels} /> */}
      {/* <Route path ="/Womenaccessories" component={Womenaccessories} /> */}
      <Route path ="/Food" component={Food} />
      <Route path ="/Food_copy" component={Food_copy} />
      <Route path ="/Login_copy2" component={Login_copy2} />

      <Route path ="/Details" component={Details} />
      <Route path ="/Cart" component={Cart} />
      <Route path ="/Place" component={Place} />
      <Route path ="/Placeorder" component={Placeorder} />

      
      <Route component={Default} />
      </Switch>
      <Modal />
      
   </React.Fragment>
);
   }
 }
export default App;
