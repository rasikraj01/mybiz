import React, { Component } from 'react';

class SingleOrder extends Component {
  render() {
    return (
      <div>
         <li>
            Order Name : {this.props.OrderName}<br/>
            Customer Name : {this.props.customerName}<br/>
            Description : {this.props.Description}<br/>
            Order Date :  {this.props.orderDate}<br/>
            Due Date : {this.props.dueDate} <br/>
            Status : {this.props.status} <br/>
         </li>
      </div>
    );
  }
}

export default SingleOrder;
