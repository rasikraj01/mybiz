import React, { Component } from 'react';
import AddCustomer from './addCustomer';
import IndividualCustomer from './individualCustomer';

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
   handleNewCustomer = (data) =>{
      let new_state = this.state.customers;
      new_state.push(data);

      console.log(new_state);
      this.setState({
         addCustomer : false,
         customers : new_state
      })
   }
  render() {
     let customerArrayBool = (this.state.customers === []) ? false : true;
    return (
      <div>
         {(this.state.addCustomer && <AddCustomer updateCustomerList={this.handleNewCustomer}/>) ||
            <button onClick={this.handleAddCustomerForm}>Add Customer</button>}

         {customerArrayBool && this.state.customers.map((customerData, key) =>
          (<IndividualCustomer name={customerData.customer_name} phone={customerData.phone_number} adderss={customerData.aderss} key={key}/>))}
      </div>
    );
  }
}

export default Customers;
