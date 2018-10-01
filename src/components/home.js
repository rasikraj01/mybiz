import React, { Component } from 'react';
import AddOrder from './addOrder';

class Home extends Component {
   constructor(){
      super();
      this.state = {
         customers :[],
         orders: [],
         addOrder: false
      }
   }
   componentDidMount(){
      this.setState({
         customers : this.props.customers,
         orders : this.props.orders,
      })
   }
   handleAddOrderFormTrigger = () => {
      this.setState({
         addOrder : true
      })
   }
  render() {
    return (
      <div>
         This is home.
         {(this.state.addOrder && <AddOrder customers={this.props.customers} handleOrderUpdate={this.props.handleOrderUpdate}/>) || <button onClick={this.handleAddOrderFormTrigger}>Add Order</button>}
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
