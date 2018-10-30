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
            _id: 10,
            customerName :'rasik',
            phoneNumber: '999999999',
            address: 'this is my address'
         },
         {
            _id: 11,
            customerName :'rasikraj',
            phoneNumber: '999999999',
            address: 'this is my address'
         }
      ],
      lastCustomerId: 11,
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
      new_customer_state.push(Object.assign(data,{_id: this.state.lastCustomerId + 1}));
      this.setState((prevState) => ({
         customers: new_customer_state,
         lastCustomerId: prevState.lastCustomerId + 1,
      })
      );

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

 handleCustomerRemove = (data) => {
  let customers = this.state.customers.filter(customer => customer._id !== data._id);
  this.setState({
    customers
  });
}

   handleCustomerEdit = (data) => {
      let on = this.state.customers.findIndex((customer) =>  (customer._id === data._id));
      let old = this.state.customers;
      console.log(this.state.customers[on]);
      old[on] = data;
      this.setState({
         orders : old
      });
   }

   handleOrderDelete = (id) => {
    let orders = this.state.orders.filter(order => order._id !== id);
    this.setState({
      orders
    });
  }

  filterByStatus = (type) => {
    return this.state.orders.filter((order) => (order.status === type))
  }

  render() {
    return (
      <BrowserRouter>
           <div className="App">
              <Header/>
              <Route
                exact
                path='/'
                render={(props) => <Home
                  orders={this.state.orders}
                  customers={this.state.customers}
                  handleOrderUpdate={this.handleOrderUpdate}
                  handleOrderDelete = {this.handleOrderDelete}
                  handleOrderEdit={this.handleOrderEdit} />} />
              <Route
                exact
                path='/inprogress/'
                render={(props) => <InProgressOrders
                  orders={this.filterByStatus('InProgress')}
                  handleOrderDelete = {this.handleOrderDelete}
                  handleOrderUpdate={this.handleOrderUpdate} />} />
              <Route
                exact
                path='/pending/'
                render={(props) => <PendingOrders
                  orders={this.filterByStatus('Pending')}
                  handleOrderDelete = {this.handleOrderDelete}
                  handleOrderUpdate={this.handleOrderUpdate} />} />
              <Route
                exact
                path='/delivered/'
                render={(props) => <DeliveredOrders
                  orders={this.filterByStatus('Delivered')}
                  handleOrderDelete = {this.handleOrderDelete}
                  handleOrderUpdate={this.handleOrderUpdate} />} />
              <Route
                exact
                path='/customers/'
                render={(props) => <Customers
                  customers={this.state.customers}
                  handleCustomerUpdate={this.handleCustomerUpdate}
                  removeCustomer={this.handleCustomerRemove}
                  editCustomer={this.handleCustomerEdit}
                  />} />
              <Route exact path='/analytics/' component={Analytics}/>
           </div>
      </BrowserRouter>
    );
  }
}

export default App;
