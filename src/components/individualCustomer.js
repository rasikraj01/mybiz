import React, { Component } from 'react';

class IndividualCustomer extends Component {
  render() {
    return (
      <li key={this.props.index}>
         {this.props.name}
      </li>
    );
  }
}

export default IndividualCustomer;
