import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';
import {BrowserRouter,Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './component/Button';
// import '../src/component/Logout.css';

class Navbar_copy extends React.Component {
     
    render() {
      return (
<div> 
    <title>Food Cravings</title>
    <link rel="stylesheet" type="text/css" href="../s/style.css"/>

    <nav class="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <a href="/Home_copy" id="OCS" class=" navbar1 navbar-brand text-warning font-weight-bold">Food Cravings &nbsp;
                    {/* <i id="ftree" class="fa fa-shopping-bag"></i>  */}
                    </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsenavbar">
                <span class="navbar-toggler-icon"></span>    
                </button> 
    
                <div class="collapse navbar-collapse text-center" id="collapsenavbar">
     
                <ul class="navbar-nav ml-auto text-black ">
                    {/* <ButtonContainer>
                    <li class="nav-item">
                        <Link to="/" class="nav-link text-black"><i class="fa fa-home"></i>Home</Link>
                    </li>
                    </ButtonContainer>&nbsp; */}
                    {/* <ButtonContainer>
                    <li class="nav-item">
                        <Link to="/Aboutus" class="nav-link text-black"><i class="fa fa-tag"></i>About Us</Link>
                    </li>
                    </ButtonContainer>&nbsp; */}
                    <ButtonContainer>
                    <li class="nav-item">
                        {/* <Link to="/Visitstore" class="nav-link text-black"><i class="fa fa-ticket"></i>Visit Store</Link> */}
                        {/* <div class="dropdown"> */}
                            {/* <button type="button" id="btn" class="btn-secondary dropdown-toggle" data-toggle="dropdown">
                                Visit store
                                </button> */}
                                <div class="dropdown">
                                <Link to="/From_copy">
                                    <button class="dropbtn"><i class="fa fa-sticky-note"></i> Menu </button>
                                    </Link>
                                    {/* <div class="dropdown-content">
                                    <Link to="/Apparels">Apparels</Link>
                                    <Link to="/Accessories">Accessories</Link>
                                    </div> */}
                                </div> 
                            {/* </div> */}
                    </li>
                    </ButtonContainer>
                    <ButtonContainer>
                    <li class="nav-item">
                        <Link to="/Cart" class="nav-link text-black"><i class="fa fa-shopping-bag" id="cartnav"></i> Cart</Link>
                    </li>
                    </ButtonContainer>
                   
                    {/* <ButtonContainer>
                    <li class="nav-item">
                        <Link to="/Register" class="nav-link text-black"><i class="fa fa-user-plus"></i>Sign up</Link>
                    </li>
                    </ButtonContainer>
                    <ButtonContainer>
                    <li class="nav-item">
                        <Link to="/Login" class="nav-link text-black"><i class="fa fa-tag"></i>Sign in</Link>
                    </li>
                    </ButtonContainer> */}
                    <ButtonContainer>
                    <li class="nav-item">
                        <Link to="/Contactus_copy" class="nav-link text-black"><i class="fa fa-phone"></i> Contact us</Link>
                    </li>
                    </ButtonContainer>
                    <ButtonContainer>
                    <li class="nav-item">
                        <Link to="/Feedback_copy" class="nav-link text-black"><i class="fa fa-comment"></i> Feedback</Link>
                    </li>
                    </ButtonContainer>
                    <ButtonContainer>
                    <li class="nav-item">
                    <Link to='/' class="nav-link text-black" ><i class="fa fa-sign-out"></i> Log out
                            </Link>
                    </li>
                    </ButtonContainer>

                    {/* <li class="nav-item">
                        <Link to="/Login" class="nav-link text-black"><i class="fa fa-window-close"></i>Check status</Link>
                    </li> &nbsp; */}
                    
                </ul>
                </div>
            </div>
        </nav>
    </div>

      )
    }
}
// const NavWrapper=styled.nav`
// background:darkgrey;
// .nav-link{
//     color:white!important;
//     font-size:1.3rem;
//     text-transform:Capitalize;
// }
// `

      export default Navbar_copy;