import React, { Component } from 'react';
import './register.css';
import {addUser} from '../data/api';


class Register extends Component{
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key] : value })
  }

  handleClick = () => {
    addUser(this.state.email,this.state.password)
    return this.props.history.push('./login');
  }

  render(){
    return (
      <div className= "register-page" >
        <div>Logo</div>
        <input name='email' value={this.state.email} onChange={this.handleChange} placeholder='User' />
        <input name='password' value={this.state.password} onChange={this.handleChange} type='password' placeholder='Password'  />
        <button onClick = {this.handleClick}>Sign up</button>
      </div>
    )
  }
}

export default Register;