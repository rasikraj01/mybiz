import React, { Component } from 'react';
import '../css/customer.css';

class AddCustomer extends Component {
   constructor(){
      super();
      this.state ={
         customerName :'',
         phoneNumber: '',
         adderss: ''
      }
   }
   handleInputChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   }
   handleCustomerFormSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      this.props.updateCustomerList(this.state);
   }
   render() {
    return (
      <div className="addCustomer">
         <form onSubmit={this.handleCustomerFormSubmit}>
            <label>Customer Name :</label>
            <input type="text" name="customerName" onChange={this.handleInputChange}/>
            <label>Phone Number :</label>
            <input type="text" name="phoneNumber" onChange={this.handleInputChange}/>
            <label>Adderss :</label>
            <input type="text" name="adderss" onChange={this.handleInputChange}/>
            <input className="addCustomerBtn" type="submit" name="submit_customer_Data"/>
         </form>
      </div>
    );
  }
}

export default AddCustomer;
