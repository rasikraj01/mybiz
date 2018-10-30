import React, { Component } from 'react';
import AddCustomer from './addCustomer';
import IndividualCustomer from './individualCustomer';
import '../css/customers.css';

class Customers extends Component {
   constructor(){
      super();
      this.state = {
         addCustomer: false,
         customers : []
      }
   }
   handleAddCustomerForm = () =>{
      this.setState({
         addCustomer : true
      })
   }

   handleAddCustomer = (data) => {
    this.props.handleCustomerUpdate(data);
    this.setState({addCustomer: false});
   }

  render() {
    return (
      <div className="customer-page">
         {(this.state.addCustomer && <AddCustomer handleSubmit={this.handleAddCustomer}/>) ||
            <button className="add-customer-btn" onClick={this.handleAddCustomerForm}>Add Customer</button>}

         {this.props.customers.map((customerData, key) =>
          (<IndividualCustomer
            customer={customerData}
            key={key}
            handleDelete={this.props.removeCustomer}
            handleEdit={this.props.editCustomer}
            />))}
      </div>
    );
  }
}

export default Customers;
