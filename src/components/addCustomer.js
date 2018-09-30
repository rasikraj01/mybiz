import React, { Component } from 'react';

class AddCustomer extends Component {
   constructor(){
      super();
      this.state ={
         customer_name :'',
         phone_number: '',
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
      <div>
         <form onSubmit={this.handleCustomerFormSubmit}>
            <label>Customer Name :</label>
            <input type="text" name="customer_name" onChange={this.handleInputChange}/>
            <label>Phone Number :</label>
            <input type="text" name="phone_number" onChange={this.handleInputChange}/>
            <label>Adderss :</label>
            <input type="text" name="adderss" onChange={this.handleInputChange}/>
            <input type="submit" name="submit_customer_Data"/>
         </form>
      </div>
    );
  }
}

export default AddCustomer;
