import React, { Component } from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Bidwar from './pages/bidwar';
import axios from 'axios';
import './App.css';



class App extends Component {
  state = {
    user: '',
    items: [],

  }
 
 //addItem(){
 //   let item = {
 //     title: this.item.value,
 //     description: this.description.value,
 //     picture: this.picture.value,
 //     print: this.price.value,
 //   }
 //   axios.post('',item)
 //   .then(res => {
 //    this.setState({items: response.data.items }) 
 //   })
 // };


  render() {
    return (
      <Router>
        <Switch>
          
          <Route  path ='/home' component = {Home} />
          <Route  path ='/login' component = {Login} />
          <Route  path ='/register' component = {Register} />
          <Route  path ='/bidwar/:id' component = {Bidwar} />
        </Switch>
      </Router>
    );
  }
}

export default App;
