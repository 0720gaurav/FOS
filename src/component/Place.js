import React, { Component } from "react";
import { Button, FormGroup, FormControl} from "react-bootstrap";
import "./Place.css";
import { BrowserRouter, Route, Switch, Redirect,Link } from 'react-router-dom';
import axios from 'axios';
import Navbar_copy from '../Navbar_copy';
import CartTotals from './Cart/CartTotals';
import Cart from './Cart/Cart';


class Place extends Component {
  constructor(props){
    super(props)
    this.state={
      username:"",
      phonenumber:"",
      address:""
    }
  }
  valid(item,type)
  { 
    let itemValue=item.target.value;
    switch(type)
    {
      case "username":{
        this.setState({username:itemValue})
      }
      case "phonenumber":{
        this.setState({phonenumber:itemValue})
      }
      case "address":{
        this.setState({address:itemValue})
      }
    }
  }
place()
{
let obj={}
obj.username=this.state.username;
obj.phonenumber=this.state.phonenumber;
obj.address=this.state.address;

console.log(obj);
const { history } = this.props;
const{ username,phonenumber,address}=this.state;

axios.post('http://localhost:3001/api/useraddress/create',{username,phonenumber,address})
.then(result => 
  {
    // history.push('/')
    alert("Created")
    console.log(result.data);

   
  }
  );
}
// place(){

//   axios.post('http://localhost:3001/api/usercart/create', { cartTotal, price,title,count })
//   .then(result => {
//     alert("Created")
//     console.log(result.data)

//   }
//   );
// }
  render() {
    return (
      <React.Fragment>
      <Navbar_copy />
      <div class="bgimg">
      
      {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/> */}
      
      
      <div className="Login">
      
                    {/* <input type="id" placeholder="ENROLLMENT NO : " onChange={(item)=>this.valid(item,"username")}/><br/>
                    <input type="id" placeholder="ENROLLMENT NO : " onChange={(item)=>this.valid(item,"password")}/><br/>
                    <button onClick={()=>this.submit()}>Submit</button> */}
        <form onSubmit={this.handleSubmit}>

        <h1><b><center>USER DETAILS</center></b></h1><br/>
          <FormGroup 
          // controlId="username" 
          bsSize="large">
          
            <p>EMAIL ID</p>
            <h2><FormControl
              autoFocus
              type="username" id="area"
              // value={this.state.username}
              onChange={(item)=>this.valid(item,"username")}
            /></h2>
          </FormGroup>
          <FormGroup 
          // controlId="password" 
          bsSize="large">
            <p>CONTACT NO.</p>
            <FormControl
              // value={this.state.password}
              onChange={(item)=>this.valid(item,"phonenumber")}
              type="number" id="area"
            />
          </FormGroup>
          <FormGroup 
          // controlId="add" 
          bsSize="large">
            <p>ADDRESS</p>
            <FormControl
              // value={this.state.add}
              onChange={(item)=>this.valid(item,"address")}
              type="address" id="area"
            />
          </FormGroup>
          <div><br/>
         <Link to="/Placeorder"> 
          <Button
            block
            bsSize="large"
            onClick={()=>this.place()}
            // disabled={!this.validateForm()}
            type="submit"><h2>Submit</h2></Button>
        </Link>
        
            
            </div>
    
            </form>
            


            
        
      </div>
      </div>
      </React.Fragment>
                        
    );
  }
}

export default Place;