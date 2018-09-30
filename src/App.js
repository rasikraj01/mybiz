import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header.js';
import Home from './components/home.js';
import AddOrder from './components/addOrder.js';
import InProgressOrders from './components/inProgressOrders.js';
import PendingOrders from './components/pendingOrders.js';
import DeliveredOrders from './components/deliveredOrders.js';
import Customers from './components/customers.js';
import Analytics from './components/analytics.js';


/*
TODO:
add custoners /
add orders fields: {customer_name, delivery date , order date , description / price} /
inprogress order /
pending orders /
delivered orders /
analytics
*/

class App extends Component {
   constructor(){
      super();
      this.state ={
      orders:[
            {
               orderName: 'rsaik',
               customerName: 'coolguydinesh',
               Description: 'rasik',
               dueDate: '20/02/2019',
               orderDate: '05/21/2041',
               status: 'Pending'
            },
            {
               orderName: 'raj',
               customerName: 'coolguydinesh',
               Description: 'rasik',
               dueDate: '20/02/2019',
               orderDate: '05/21/2041',
               status: 'Pending'
            }
         ],
      customers:[
         {
            customer_name :'rasik',
            phone_number: '999999999',
            adderss: 'this is my address'
         }
      ]
      }
   }
  render() {
    return (
      <BrowserRouter>
           <div className="App">
              <Header/>
              <Route exact path='/' render={(props) => <Home something="oonr" customers={this.state.customers} orders={this.state.orders}/>}/>
              <Route exact path='/addorders/' render={(props) => <AddOrder something="oonr"/>}/>
              <Route exact path='/inprogress/' component={InProgressOrders}/>
              <Route exact path='/pending/' component={PendingOrders}/>
              <Route exact path='/delivered/' component={DeliveredOrders}/>
              <Route exact path='/customers/' component={Customers}/>
              <Route exact path='/analytics/' component={Analytics}/>
           </div>
      </BrowserRouter>
    );
  }
}

export default App;
