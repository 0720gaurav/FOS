import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
import './Login.css';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './component/Button';
import { Button, FormGroup, FormControl} from "react-bootstrap";

import axios from 'axios';

// import {Button} from 'react-router-dom';
//  import axios from 'axios';


class Login extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      _id: "",
      password: "",
      fetchData:[]
    }
  }
  

   valid(item,type)
    {
      let itemValue=item.target.value
   
        switch(type)
        {
            case "_id":
                {
                  this.setState({_id:itemValue});
                 }
            case "password":
                {
                   this.setState({password:itemValue});
                 }
                                   
        }
    
    
     }
     componentDidMount()
     {
      axios.get('http://localhost:3001/api/user/retrieve')
      .then((res) => 
        {
          this.setState({fetchData:res.data.result});

        });
     }
submit()
{

  const { history } = this.props;
  let breakCondition = false;
  
                              // this.state.fetchData.map((dbdata,index)=>{
                              //   console.log("**************");
                              //   console.log(dbdata._id);
                              //   console.log(this.state._id);
                              //   return (dbdata._id === this.state._id && dbdata.password === this.state.password) ?
                              //  history.push('/Home_copy')
                              //  :
                              //  history.push('/Login')
                              // })
                              this.state.fetchData.map((dbdata,index)=>{
                                console.log("**************");
                                console.log(dbdata._id);
                                console.log(this.state._id);
                                if (dbdata._id === this.state._id && dbdata.password === this.state.password
                                  && !breakCondition)
                                { 
                                  // alert("Successfully Submitted!!!")
                                 history.push('/Home_copy')
                                  breakCondition  = true
                                }
                                else if(!breakCondition)
                                { 
                                  
                                  // history.push('/Login');
                                  // axios.post('http://localhost:3001/api/user/create',{name,dateofbirth,_id,password,confirmPassword})
                                  // .then(result => 
                                  // {
                                  //   // alert("Created")
                                  //   console.log(result.data)
                                    
                                  // }
                                  // );
                                  history.push('/Login')
                                  // alert("WRONG CREDENTIALS !!!");
                                }})
                             
                            

                            
}  
  
  render() {
    return (
      <div class="bgimg">
      
      {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/> */}
      
      
      <div className="Login">
      
                    {/* <input type="id" placeholder="ENROLLMENT NO : " onChange={(item)=>this.valid(item,"username")}/><br/>
                    <input type="id" placeholder="ENROLLMENT NO : " onChange={(item)=>this.valid(item,"password")}/><br/>
                    <button onClick={()=>this.submit()}>Submit</button> */}
        <form onSubmit={this.handleSubmit}>

        <h1><center><b>MEMBER LOGIN</b></center></h1><br/>
          <FormGroup controlId="username" bsSize="large">
          
            <p>Username</p>
            <FormControl
              autoFocus
              type="username" id="area"
              // value={this.state.username}
              onChange={(item)=>this.valid(item,"_id")}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <p>Password</p>
            <FormControl
              // value={this.state.password}
              onChange={(item)=>this.valid(item,"password")}
              type="password" id="area"
            />
          </FormGroup>
          <div>
         {/* <Link to="/Home_copy">  */}<br/>
       <center>   <Button
            // block
            // bsSize="small"
            onClick={()=>this.submit()}
            // disabled={!this.validateForm()}
            
            type="submit" id="sub"><h2>Submit</h2></Button>
        {/* </Link> */} </center> 
            
            </div>
    
            </form>
            


            
        
      </div>
      </div>
    );
  }
}
export default Login;
