import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import './bidwar.css';
import axios from 'axios';




class Bidwar extends Component{
  state = {
    items:[

    ]
  }

 componentDidMount = () => {
   axios.get('http://localhost:8080/items')
   .then(res => {
    
    this.setState({items:res.data.items}) })
   .catch(error => console.error(error))
 }

   bid = (id) => {
    axios.put('http://localhost:8080/items',id)
    .then(res => this.setState({items: res.data.items}))
    .catch(error => console.log(error))
   }



  addItem = () => {
    let newItem = {
      id: this.state.items[this.state.items.length - 1].id +1,
      title: this.title.value,
      description: this.description.value,
      price: 1,
      picture:` ${this.picture.value} `,
      time: 86400000
    };
    
    this.title.value = "" ;
    this.description.value = "";
    
    axios.post('http://localhost:8080/items',newItem)
    .then(res => {
      // console.log(res.data)
      this.setState({items:res.data.items})})
    .catch(error => console.error(error))
  }

  logout = () => {
    return this.props.history.push('../home');
  }


  render() {
    
    

    const item = this.state.items.map(i=> {
      const timer = i.time
      return (
        <div key={i.id} className="item-box" >
          <p>{i.title}</p> 
          <Countdown date ={Date.now() + timer} />
          <img src = {i.picture} className="item-picture" ></img>
          <p>{i.description}</p>
          <p>price: {i.price} </p>
          <div className = "button-parent">
          <button className = "item-button" onClick = {() => this.bid(i.id)}>Bid</button>
          {/* <button className = "item-button">Buy Now</button> */}
          </div>
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
        
        <input
            className="btn-sp"
            placeholder="title"
            ref={title => {
              this.title = title;
            }}
          />
          <input
          className="btn-sp"
          placeholder="description"
          ref={description => {
            this.description = description;
          }}
        />
        {/* <input
            className="btn-sp"
            placeholder="price"
            ref={price => {
              this.price = price;
            }}
          /> */}
          <input
            className="btn-sp"
            placeholder="picture url"
            ref={picture => {
              this.picture = picture;
            }}
          />
          <button onClick = {this.addItem}> Add item</button>
          
        <div className ="items"> 
          {item}
        </div>
        
      </div>
    )
  }
}

export default Bidwar;