import React,{Component} from 'react';
import './Placeorder.css';
// import Food from './Food';
import { hashHistory } from 'react-router';
import {Link} from 'react-router-dom';

class Example extends React.Component {
    constructor() {
      super();
      this.state = { time: {}, seconds: 1200 };
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }
  
    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
    componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }
  
    startTimer() {
      if (this.timer == 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
  
    countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      // Check if we're at zero.
      if (seconds == 0) { 
        clearInterval(this.timer);
      }
    }
    final()
    {
      const { history } = this.props;
      if(this.state.time.m==0 && this.state.time.s==0)
      {
        alert("Your food is ready to deliver")
      }
    return (this.state.time.m==0 && this.state.time.s==0) 
      // {
         
      // return(history.push('/Food'))

      // }
      
      
      
    }
  
    render() {
      return(
        <div id="time"><center>
          <h1><center>YOUR FOOD WILL BE READY IN 20 MINUTES</center></h1><br/><br/>
          <button
          disabled={!this.final()}
           onClick={
              this.startTimer()
              }>
                <h1> {this.state.time.m} m : {this.state.time.s} s</h1>
          </button><br/><br/>
          {/* <Link to="/Food">
          <button id="he" disabled={!this.final()} >Proceed</button>
          </Link> */}
        </center>
        </div>
      );
    }
  }
  export default Example;