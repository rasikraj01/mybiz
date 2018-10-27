import React, { Component } from 'react';
import SingleOrder from './singleOrder';

class DeliveredOrders extends Component {
   constructor(){
      super();
      this.state = {
         deliveredOrders : []
      }
   }
   componentWillMount(){
      this.setState({
         deliveredOrders: this.props.orders.filter((order) => (order.status === "Delivered"))
      })
   }
  render() {
    return (
      <div className="ordersWrapper">
            {
               this.state.deliveredOrders && this.state.deliveredOrders
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

export default DeliveredOrders;
