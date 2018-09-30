import React, { Component } from 'react';

class IndividualCustomer extends Component {
  render() {
    return (
      <li>
         {this.props.name}
      </li>
    );
  }
}

export default IndividualCustomer;
