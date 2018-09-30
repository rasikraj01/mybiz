import React, { Component } from 'react';

class Home extends Component {
   constructor(){
      super();
      this.state = {
         customers :[],
         orders: []
      }
   }
   componentDidMount(){
      this.setState({
         customers : this.props.customers,
         orders : this.props.orders,
      })
   }
  render() {
    return (
      <div>
         This is home.
         {this.state.orders && this.state.orders.map((data, index) => (
            <li key={index}>
               Order : {data.orderName}<br/>
               Customer : {data.customerName}<br/>
               Details : {data.Description}<br/>
               Order Date : {data.orderDate} Due Date : {data.dueDate}
               Status : {data.status}
            </li>
         ))}
      </div>
    );
  }
}

export default Home;
