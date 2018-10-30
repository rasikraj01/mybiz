import React, { Component } from 'react';
import '../css/addCustomer.css';

class AddCustomer extends Component {
   constructor(){
      super();
      this.state ={
         customerName :'',
         phoneNumber: '',
         address: ''
      }
   }
   handleInputChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   }
   handleCustomerFormSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      this.props.handleSubmit(this.state);
   }
   render() {
    return (
      <div className="addCustomer">
         <form onSubmit={this.handleCustomerFormSubmit}>
            <label>Customer Name :</label>
            <input type="text" name="customerName" onChange={this.handleInputChange} required />
            <label>Phone Number :</label>
            <input type="text" name="phoneNumber" onChange={this.handleInputChange} required />
            <label>Adderss :</label>
            <input type="text" name="address" onChange={this.handleInputChange} required/>
            <input type="submit" value="Add" className="customer-submit-btn" name="submit_customer_Data"/>
         </form>
      </div>
    );
  }
}

export default AddCustomer;
