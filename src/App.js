import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header.js';
import Home from './components/home.js';
import AddOrders from './components/addOrders.js';
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
  render() {
    return (
      <BrowserRouter>
           <div className="App">
              <Header/>
              <Route exact path='/' component={Home}/>
              <Route exact path='/addorders/' component={AddOrders}/>
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
