import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './css/app.css';

import Header from './components/header.js';
import Home from './components/home.js';
import InProgressOrders from './components/inProgressOrders.js';
import PendingOrders from './components/pendingOrders.js';
import DeliveredOrders from './components/deliveredOrders.js';
import Customers from './components/customers.js';
import Analytics from './components/analytics.js';

/*
TODO:
add orders fields: {customer_name, delivery date , order date , description / price} /
PENDING ENUM
*/

class App extends Component {
   constructor(){
      super();
      this.state ={
      orders:[
            {
               _id : 20,
               orderName: 'rsaik',
               customerName: 'coolguydinesh',
               Description: 'rasik',
               dueDate: '20/02/2019',
               orderDate: '05/21/2041',
               status: 'Pending'
            },
            {
               _id : 201,
               orderName: 'rajinproger',
               customerName: 'coolguydinesh',
               Description: 'rasik',
               dueDate: '20/02/2019',
               orderDate: '05/21/2041',
               status: 'InProgress'
            },
            {
               _id : 202,
               orderName: 'raj',
               customerName: 'coolguydinesh',
               Description: 'rasik',
               dueDate: '20/02/2019',
               orderDate: '05/21/2041',
               status: 'Delivered'
            }
         ],
      customers:[
         {
            customerName :'rasik',
            phoneNumber: '999999999',
            adderss: 'this is my address'
         },
         {
            customerName :'rasikraj',
            phoneNumber: '999999999',
            adderss: 'this is my address'
         }
      ]
      }
   }
   handleOrderUpdate = (data) =>{
         let new_order_state = this.state.orders;
         new_order_state.push(data);
         this.setState({
            orders : new_order_state
         })
         console.log(this.state.orders);
   }
   handleCustomerUpdate = (data) => {
      let new_customer_state = this.state.customers;
      new_customer_state.push(data);
      this.setState({
         customers: new_customer_state
      })

   }
   handleOrderEdit = (data) => {
      let on = this.state.orders.findIndex((element) =>  (element._id === data._id));
      let old = this.state.orders;
      console.log(this.state.orders[on]);
      old[on] = data;
      this.setState({
         orders : old
      });
   }
   handleOrderDelete = (id) => {
      let index = this.state.orders.findIndex((element) => (element._id === id));
      let old = this.state.orders;
      this.setState({
         orders: old.filter(() => (old._id !== index))
      });
   }
  render() {
    return (
      <BrowserRouter>
           <div className="App">
              <Header/>
              <Route exact path='/' render={(props) => <Home orders={this.state.orders} customers={this.state.customers} handleOrderUpdate={this.handleOrderUpdate} handleOrderEdit={this.handleOrderEdit}/>}/>
              <Route exact path='/inprogress/' render={(props) => <InProgressOrders orders={this.state.orders} handleOrderUpdate={this.handleOrderUpdate}/>}/>
              <Route exact path='/pending/' render={(props) => <PendingOrders orders={this.state.orders} handleOrderUpdate={this.handleOrderUpdate}/>}/>
              <Route exact path='/delivered/' render={(props) => <DeliveredOrders orders={this.state.orders} handleOrderUpdate={this.handleOrderUpdate}/>}/>
              <Route exact path='/customers/' render={(props) => <Customers customers={this.state.customers} handleCustomerUpdate={this.handleCustomerUpdate}/>}/>
              <Route exact path='/analytics/' component={Analytics}/>
           </div>
      </BrowserRouter>
    );
  }
}

export default App;
