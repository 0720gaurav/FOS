import React, { Component } from 'react';
import './Register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './component/Button';
import { Button} from "react-bootstrap";

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      dateofbirth: "",
      _id: "",
      password: "",
      confirmPassword: "",
      fetchData: []
      // input: {},
      // errors: {}
    }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  valid(item, type) {

    let itemValue = item.target.value;
    switch (type) {

      case "name": {
        this.setState({ name: itemValue })
      }
      case "dateofbirth": {
        this.setState({ dateofbirth: itemValue })
      }
      case "_id": {
        this.setState({ _id: itemValue })
      }
      case "password": {
        this.setState({ password: itemValue })
      }
      case "confirmPassword": {
        this.setState({ confirmPassword: itemValue })
      }
    }

  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/user/retrieve')
      .then((res) => {
        this.setState({ fetchData: res.data.result });

      });
  }

  // handleChange(event) {
  //   let input = this.state.input;
  //   input[event.target.name] = event.target.value;

  //   this.setState({
  //     input
  //   });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();

  //   if(this.validate()){
  //       console.log(this.state);

  //       let input = {};
  //       input["name"] = "";
  //       input["_id"] = "";
  //       input["password"] = "";
  //       input["confirmPassword"] = "";
  //       this.setState({input:input});


  //   }
  // }

  // validate(){
  //     let input = this.state.input;
  //     let errors = {};
  //     let isValid = true;

  //     if (!input["name"]) {
  //       isValid = false;
  //       errors["name"] = "Please enter your name.";
  //     }

  //     if (!input["_id"]) {
  //       isValid = false;
  //       errors["_id"] = "Please enter your email Address.";
  //     }

  //     if (typeof input["_id"] !== "undefined") {

  //       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  //       if (!pattern.test(input["_id"])) {
  //         isValid = false;
  //         errors["_id"] = "Please enter valid email address.";
  //       }
  //     }

  //     if (!input["password"]) {
  //       isValid = false;
  //       errors["password"] = "Please enter your password.";
  //     }

  //     if (!input["confirmPassword"]) {
  //       isValid = false;
  //       errors["confirmPassword"] = "Please enter your confirm password.";
  //     }

  //     // if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

  //       if (input["password"] != input["confirmPassword"]) {
  //         isValid = false;
  //         errors["password"] = "Passwords don't match.";
  //       }
  //     // } 

  //     this.setState({
  //       errors: errors
  //     });

  //     return isValid;
  // }



  submit() {
    let obj = {}
    obj.name = this.state.name;
    obj.dateofbirth = this.state.dateofbirth;
    obj._id = this.state._id;
    obj.password = this.state.password;
    obj.confirmPassword = this.state.confirmPassword;

    const { history } = this.props;
    const { name, dateofbirth, _id, password, confirmPassword } = this.state;

    // alert("wait"); 
    console.log(obj);
    let breakCondition = false;
    // if(this.state._id.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))


    // {
    // alert("email must have @");
    //   history.push('/Register')
    // }
    // else 
    if (this.state.password !== this.state.confirmPassword) {
      alert("password must be same");
      history.push('/Register')
    }
    else if (this.state.password === this.state.confirmPassword) {
      this.state.fetchData.map((dbdata, index) => {
        console.log("**************");
        console.log(dbdata._id);
        console.log(this.state._id);
        if (dbdata._id === this.state._id
          && !breakCondition) {
          alert("USERNAME ALREADY EXIST");
          history.push('/Register')
          breakCondition = true
        }
        else if (!breakCondition) {

          // history.push('/Login');
          axios.post('http://localhost:3001/api/user/create', { name, dateofbirth, _id, password, confirmPassword })
            .then(result => {
              // alert("Created")
              console.log(result.data)

            }
            );
          history.push('/Login')

        }
      })


    }

  }


  // submit()
  // {
  //   let obj={}
  // obj.name=this.state.name;
  // obj.dateofbirth=this.state.dateofbirth;
  // obj._id=this.state._id;
  // obj.password=this.state.password;
  // obj.confirmPassword=this.state.confirmPassword;
  // console.log(obj);

  // const{ name,dateofbirth,_id,password,confirmPassword}=this.state;
  // // const{history}=this.state;
  // //                            this.state.fetchData.map((dbdata,index)=>{
  // //                              console.log("**************");
  // //                              console.log(dbdata._id);
  // //                              console.log(this.state._id);
  // //                              if (dbdata._id === this.state._id) 
  // //                              {
  // //                               alert("already registered")
  // //                               history.push('/Register')
  // //                              }
  // //                             else
  // //                             {
  //                           // history.push('/Login')

  //                             axios.post('http://localhost:3001/api/user/create',{name,dateofbirth,_id,password,confirmPassword})
  //                                             .then(result => 
  //                                               {

  //                                                 console.log(result.data);
  //                                               }
  //                                             );
  //                                             // history.push('/Login')
  //                              }




  render() {
    return (

      <div class="register">
        <div class="container con">
          <center><h1><b>REGISTRATION FORM</b></h1></center><br /><br />
<center>
          <form onSubmit={this.handleSubmit} >
            <div class="reg">

              {/* <div class="form-group">
      <label id="reglabel" for="id">User-id</label>&nbsp;&nbsp;
      <input type="text" class="form-control" id="reg" name="_id" placeholder="Enter Id" 
      // onChange={(item)=>this.valid(item,"_id")}  
      required/>
    </div> */}

              <div class="form-group">
                <label id="reglabel" for="name">Name:</label>&nbsp;&nbsp;
      <input type="text" class="form-control" id="reg" name="name" 
      // placeholder="Enter name"
                  onChange={(item) => this.valid(item, "name")} name="name"
                  // value={this.state.input.name}
                  //         onChange={this.handleChange}
                  //         class="form-control" 
                  required />
                {/* <div class="valid-feedback">Valid.</div> */}
                {/* <div class="invalid-feedback">Please fill out this field.</div> */}
              </div>

              <div class="form-group">
                <label id="reglabel" for="dob">Date of Birth:</label>&nbsp;&nbsp;
      <input type="date" class="form-control" id="reg" name="dateofbirth" 
      // placeholder="Enter date of birth"
                  onChange={(item) => this.valid(item, "dateofbirth")} name="dateofbirth"

                  required />
                {/* <div class="valid-feedback">Valid.</div> */}
                {/* <div class="invalid-feedback">Please fill out this field.</div> */}
              </div>

              <div class="form-group">
                <label id="reglabel" for="username">Username:</label>&nbsp;&nbsp;
      <input type="text" class="form-control" id="reg" name="_id" 
      // placeholder="Enter username"
                  onChange={(item) => this.valid(item, "_id")} name="_id"
                  // value={this.state.input._id}
                  // onChange={this.handleChange}
                  // class="form-control"
                  required />
                {/* <div class="valid-feedback">Valid.</div> */}
                {/* <div class="invalid-feedback">Please fill out this field.</div> */}
              </div>
              {/* <div className="text-danger">{this.state.errors._id}</div> */}

              <div class="form-group">
                <label id="reglabel" for="pwd">Password:</label>&nbsp;&nbsp;
      <input type="password" class="form-control" id="reg" name="password" 
      // placeholder="Enter password"
                  onChange={(item) => this.valid(item, "password")}
                  // value={this.state.input.password}
                  //         onChange={this.handleChange}
                  //         class="form-control" 
                  required />
                {/* <div class="valid-feedback">Valid.</div> */}
                {/* <div class="invalid-feedback">Please fill out this field.</div> */}
              </div>
              {/* <div className="text-danger">{this.state.errors.password}</div> */}

              <div class="form-group">
                <label id="reglabel" for="cpwd"> Confirm Password:</label>&nbsp;&nbsp;
      <input type="password" class="form-control" id="reg" name="confirmPassword" 
      // placeholder="Re-enter password"
                  onChange={(item) => this.valid(item, "confirmPassword")}
                  //  value={this.state.input.confirmPassword}
                  //         onChange={this.handleChange}
                  //         class="form-control"
                  required />
                {/* <div class="valid-feedback">Valid.</div> */}
                {/* <div class="invalid-feedback">Please fill out this field.</div> */}
              </div>
              {/* <div className="text-danger">{this.state.errors.confirm_password}</div> */}


              <div class="form-group form-check">
                <p id="checkbox1"><input type="checkbox" name="remember" required /> I agree to all statements provided.</p>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Check this checkbox to continue.</div>
              </div>

              <div>
                {/* <Link to="/Login"> */}
                {/* <center><ButtonContainer
                  onClick={() => this.submit()}
                  class="btn btn-primary" id="regsub">Submit</ButtonContainer></center> */}
                {/* </Link> */}
                <br/>
                <center>   <Button
            // block
            // bsSize="small"
            onClick={()=>this.submit()}
            // disabled={!this.validateForm()}
            
            type="submit" id="sub"><h2>Submit</h2></Button>
        {/* </Link> */} </center> <br/><br/> <br/><br/>

              </div>
            </div>
          </form>
          </center>
        </div>
      </div>
    )
  }
}
export default Register;