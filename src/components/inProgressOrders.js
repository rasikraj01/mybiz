import React, { Component } from 'react';
import SingleOrder from './singleOrder';

class InProgressOrders extends Component {
   constructor(){
      super();
      this.state = {
         inProgressOrders : []
      }
   }
   componentWillMount(){
      this.setState({
         inProgressOrders: this.props.orders.filter((order) => (order.status === "InProgress"))
      })
   }
  render() {
    return (
      <div>
         {
            this.state.inProgressOrders && this.state.inProgressOrders
            .map((order, key) =>
               (
               <SingleOrder
                  key={key}
                  OrderName={order.orderName}
                  Description={order.Description}
                  customerName={order.customerName}
                  orderDate={order.orderDate}
                  dueDate={order.dueDate}
                  status={order.status}
               />
               )
            )
         }
      </div>
    );
  }
}

export default InProgressOrders;
