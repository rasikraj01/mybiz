import React, { Component } from 'react';
import AddOrder from './addOrder';
import SingleOrder from './singleOrder';

class Home extends Component {
   constructor(){
      super();
      this.state = {
         addOrder: false
      }
   }
   handleAddOrderFormTrigger = () => {
      this.setState({
         addOrder : true
      })
   }
   handleHideorderForm = () => {
      this.setState({
         addOrder : false
      })
   }
  render() {
    let { addOrder} = this.state;
    let {orders} = this.props;
    return (
      <div className="ordersWrapper">
         {(addOrder && <AddOrder customers={this.props.customers} handleOrderUpdate={this.props.handleOrderUpdate} handleHideForm={this.handleHideorderForm}/>) || <div className="add-order-btn"><button onClick={this.handleAddOrderFormTrigger}>Add Order</button></div>}
         {orders && orders.map((order, index) => (
            <SingleOrder
               key={index}
               _id= {order._id}
               orderName={order.orderName}
               Description={order.Description}
               customerName={order.customerName}
               dueDate={order.dueDate}
               orderDate={order.orderDate}
               status={order.status}
               customers = {this.props.customers}
               handleOrderEdit = {this.props.handleOrderEdit}
               handleOrderDelete = {this.props.handleOrderDelete}
            />
         ))}
      </div>
    );
  }
}

export default Home;
