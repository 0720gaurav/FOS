import React from 'react';
import './Contactus.css';
// import axios from 'axios';
import {BrowserRouter,Link} from 'react-router-dom';
import Navbar_copy from './Navbar_copy';


class Feedback_copy extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //       fullname:"",
    //       email:"",
    //       phonenumber:"",
    //       message:""
    //     }
    //   }
    //   valid(item,type)
    //   { 
    //     let itemValue=item.target.value;
    //     switch(type)
    //     {
    //       case "fullname":{
    //         this.setState({fullname:itemValue})
    //       }
    //       case "email":{
    //         this.setState({email:itemValue})
    //       }
    //       case "phonenumber":{
    //         this.setState({phonenumber:itemValue})
    //       }
    //       case "message":{
    //         this.setState({message:itemValue})
    //       }
    //     }
    //   }
    // submit()
    // {
    // let obj={}
    // obj.fullname=this.state.fullname;
    // obj.email=this.state.email;
    // obj.phonenumber=this.state.phonenumber;
    // obj.message=this.state.message;
    // // const {password,confirmPassword}=this.state;
    // // if(password != confirmPassword)
    // // {
    // //   alert("password donot match");
    // // }
    // // else{
    
    // // }
    
    // // alert("wait"); 
    // console.log(obj);
    
    // const{ fullname,email,phonenumber,message}=this.state;
    
    // axios.post('http://localhost:3001/api/usercontact/create',{fullname,email,phonenumber,message})
    // .then(result => 
    //   {
    //     alert("Created")
    //     console.log(result.data);
    //   }
    //   );
    // }
    render()
    {
    return(
        <React.Fragment>
        <Navbar_copy />
<div className="contactstyle">
<center><h2><b>FEEDBACK FORM</b></h2>
    <h5>**please fill this form. your feedback is important to us.</h5></center><br/>
                    <div className="form12">
                    <label>Fullname:</label>
                    <input type="text" id="formcon" class="formcon" name="fullname"/><br/><br/>
                    
                    <label>E-mail:</label>
                    <input type="email" id="formcon" class="formcon"  name="email"/><br/><br/>
                    
                    <label>Phone Number:</label>
                    <input type="number"id="formcon" class="formcon"  name="phonenumber"/><br/><br/>

                    <label>Restaurant Name:</label>
                    <input type="number"id="formcon" class="formcon"  name="restaurant"/><br/><br/>
                    
                    <label>Restaurant Rating:</label><br/>
                    

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="a" name="g" value="1"/>
                    <label for="a">1</label>
                    <input type="radio" id="b" name="g" value="2"/>
                    <label for="b">2</label>
                    <input type="radio" id="c" name="g" value="3"/>
                    <label for="c">3</label>
                    <input type="radio" id="d" name="g" value="4"/>
                    <label for="d">4</label>
                    <input type="radio" id="e" name="g" value="5"/>
                    <label for="e">5</label><br/><br/>

                    <label>Favorite food:</label>
                    <input type="number"id="formcon" class="formcon"  name="food"/><br/><br/>

                    <label>Food Rating:</label><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="a" name="g" value="1"/>
                    <label for="a">1</label>
                    <input type="radio" id="b" name="g" value="2"/>
                    <label for="b">2</label>
                    <input type="radio" id="c" name="g" value="3"/>
                    <label for="c">3</label>
                    <input type="radio" id="d" name="g" value="4"/>
                    <label for="d">4</label>
                    <input type="radio" id="e" name="g" value="5"/>
                    <label for="e">5</label><br/><br/>

                    <label>Message:</label>
                    <textarea type="message" id="formcon" class="formcon"  name="message"/><br/><br/>
                    <Link to='/'>
                    <button id="conbtn" class="conbtn btn-primary" >Send</button></Link>
                    </div><br/>

    {/* <div class="contact text-center">
    <h1><b>Get in touch with us!!</b></h1>
     <i><h2>IM's:+91-9876543216</h2>
     <h2>Whatsapp:+91-9812345670</h2>
     <h2>E-mail:abc@xyz.com</h2>
     <h2>FAX:011-26643397</h2></i>
    </div> */}
</div>
</React.Fragment>
    )
}
}

export default Feedback_copy;
