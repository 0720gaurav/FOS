import React from 'react';
import './Contactus.css';
import axios from 'axios';
import {BrowserRouter,Link} from 'react-router-dom';


class Contactus extends React.Component {
    constructor(props){
        super(props)
        this.state={
          fullname:"",
          email:"",
          phonenumber:"",
          message:""
        }
      }
      valid(item,type)
      { 
        let itemValue=item.target.value;
        switch(type)
        {
          case "fullname":{
            this.setState({fullname:itemValue})
          }
          case "email":{
            this.setState({email:itemValue})
          }
          case "phonenumber":{
            this.setState({phonenumber:itemValue})
          }
          case "message":{
            this.setState({message:itemValue})
          }
        }
      }
    submit()
    {
    let obj={}
    obj.fullname=this.state.fullname;
    obj.email=this.state.email;
    obj.phonenumber=this.state.phonenumber;
    obj.message=this.state.message;

    console.log(obj);
    const { history } = this.props;
    const{ fullname,email,phonenumber,message}=this.state;
    
    axios.post('http://localhost:3001/api/usercontact/create',{fullname,email,phonenumber,message})
    .then(result => 
      {
        // history.push('/')
        alert("Created")
        console.log(result.data);

       
      }
      );

 
}
    render()
    {
    return(
<div className="contactstyle">
    <h2><b>CONTACTUS FORM</b></h2>
    <h5>*valuable suggestions or queries related to site.
</h5>
                    <div className="form11">
                    <label>Fullname:</label>
                    <input type="text" id="formcon" class="formcon" name="fullname" 
                                    onChange={(item)=>this.valid(item,"fullname")} required
                                    /><br/>
                    
                    <label>E-mail:</label>
                    <input type="email" id="formcon" class="formcon"  name="email"
                    onChange={(item)=>this.valid(item,"email")} required/><br/>
                    
                    <label>Phone Number:</label>
                    <input type="number"id="formcon" class="formcon"  name="phonenumber"
                    onChange={(item)=>this.valid(item,"phonenumber")} required/><br/>
                    
                    <label>Message:</label>
                    <textarea type="message" id="formcon" class="formcon"  name="message"
                    onChange={(item)=>this.valid(item,"message")} required/><br/>
                    {/* <Link to='/Contactus'> */}
                    <button onClick={()=>this.submit()}  id="conbtnn" class="conbtn btn-primary" >Send</button>
                    {/* </Link> */}
                    </div><br/>

    <div class="contact text-center">
    <h1><b>Get in touch with us!!</b></h1>
     <i><h2>IM's:+91-9876543216</h2>
     <h2>Whatsapp:+91-9812345670</h2>
     <h2>E-mail:abc@xyz.com</h2>
     <h2>FAX:011-26643397</h2></i>
    </div>
</div>
    )
}
}

export default Contactus;
