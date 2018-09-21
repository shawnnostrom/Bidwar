import React, { Component } from 'react';
import './login.css'
import {authenticateUser} from '../data/api'

class Login extends Component{
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key] : value })
  }

  handleClick = () =>{
    authenticateUser(this.state.email, this.state.password)
    .then((userId) => {
      return this.props.history.push(`./bidwar/${userId}`);
    })
    .catch(error => {
      alert(`not authenticated: ${error}`)
    })


    
  }

  render(){
    return (
      <div className="login-page" >
        <div className = "login-logo">Logo</div>
        <input name='email' value={this.state.email} onChange={this.handleChange} placeholder='Email' />
        <input name='password' value={this.state.password} onChange={this.handleChange} type='password' placeholder='Password'  />
        <button className = "login-button" onClick = {this.handleClick} >Login</button>
      </div>
    )
  }
}

export default Login;