import React,{Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import Navbar_copy from './Navbar_copy';


class Home extends React.Component{
 render(){
    return(
      <React.Fragment>
        <Navbar_copy/>
<div>

<div class="container">
<meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/> */}
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
  {/* <!-- Indicators --> */}
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
    <li data-target="#myCarousel" data-slide-to="4"></li>
  </ol>

  {/* <!-- Wrapper for slides --> */}
  <div class="carousel-inner" role="listbox">
    <div class="item active">
    <img  src={require('./img/a.jpg')} alt="volvo"/>
      {/* <div class="carousel-caption"></div>*/}
    </div>
    <div class="item">
    <img  src={require('./img/b.jpg')} alt="trishul"/>
      {/* <div class="carousel-caption"> 
      </div> */}
    </div>
    <div class="item">
    <img  src={require('./img/d.jpg')} alt="sunset"/>
      {/* <div class="carousel-caption"> 
      </div>*/}
    </div>
    <div class="item">
    <img  src={require('./img/e.jpg')} alt="sunset"/>
      {/* <div class="carousel-caption"> 
      </div>*/}
    </div>
    <div class="item">
    <img  src={require('./img/f.jpg')} alt="sunset"/>
      {/* <div class="carousel-caption"> 
      </div>*/}
    </div>
    </div>
{/* <!-- Left and right controls --> */}
  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

</div>
<div>
{/* <button>ORDER NOW</button>   */}
</div>
</div>
</div>
</React.Fragment>
        
    )
}
}
export default Home;
