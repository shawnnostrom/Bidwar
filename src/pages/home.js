import React, { Component } from 'react';
import './home.css';

class Home extends Component{
 

  handleClick = () =>{
    return this.props.history.push('/login');
  }
  handleSignup = () => {
    return this.props.history.push('/register');
  }

  render() {
    return (
      <div className= "home-page">
        <div className= "home">BID WARS</div>
        <div className= "home-buttons">
        <button onClick = {this.handleClick} >Login </button>
        <button onClick = {this.handleSignup} >Sign up</button>
        </div>
      </div>  
    );
  }
  
}
export default Home;