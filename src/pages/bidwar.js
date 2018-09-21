import React, { Component } from 'react';
import './bidwar.css';
import axios from 'axios';




class Bidwar extends Component{
  state = {
    items:[
      // {id:1,title:"Test",description:"test",price:1,picture:"https://cdn.vox-cdn.com/thumbor/_4-v-hkd4L9hIVSrJSp2seMTeKo=/0x0:950x623/920x613/filters:focal(399x236:551x388):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60988327/Xbox_One_X_Screenshot_05.0.jpg"},
      // {id:2, title:"test2", description:"test2",price:2},
      // {id:3, title:"test3", description:"test3",price:3}
      
    ],
  }

 showItems = () => {
   axios.get('./items.json')
   .then(r => r.json())
   .then(data => this.setState({items:data}))
   .catch(error => console.error(error))
 }

  bid = () => {

  }



  addItem = () => {
    let newItem = {
      title: this.title.value,
      description: this.description.value,
      price: this.price.value
    };
  }

  logout = () => {
    return this.props.history.push('../home');
  }


  render() {
    const items = this.state.items.map(i => {
      return (
        <div key={i.id} className="item-box" >
          <p>title: {i.title}</p> 
          <img src = {i.picture} className="item-picture" ></img>
          <p>description: {i.description}</p>
          <p>price: {i.price} </p>

          <button className = "item-button" onClick = {this.bid}>Bid</button>
          <button className = "item-button">Buy Now</button>
        </div>
      )
    })
    return(
      <div className="bid-page" >
        <div className="nav">
        <h1 className="logout" onClick= {this.logout} >Logout</h1>
        </div>
        <div>
          <h1>Bid Wars</h1>
          <p> Here you can place your items for sale. Users will bid on the item until the time is up. Current top when time expires wins!</p>
        </div>
        <button onClick= {this.showItems}>show items</button>
        <div className ="items"> 
          {items}

        </div>
      </div>
    )
  }
}

export default Bidwar;