import React, { Component } from 'react';
import SingleOrder from './singleOrder';

class PendingOrders extends Component {
   constructor(){
      super();
      this.state = {
         PendingOrders : []
      }
   }
   componentWillMount(){
      this.setState({
         PendingOrders: this.props.orders.filter((order) => (order.status === "Pending"))
      })
   }
   render() {
   return (
      <div>
         {
            this.state.PendingOrders && this.state.PendingOrders
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

export default PendingOrders;
