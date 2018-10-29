import React, { Component } from 'react';
import '../css/customer.css';

class IndividualCustomer extends Component {
  render() {
    return (
      <div className="individualCustomer">
      <li key={this.props.index}>
         <h4><span>Customer Name : </span>{this.props.name}</h4>
      </li>
      </div>
    );
  }
}

export default IndividualCustomer;
