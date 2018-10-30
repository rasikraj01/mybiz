import React, { Component } from 'react';
import '../css/editCustomer.css';

class EditCustomer extends Component {
   componentDidMount(){
      this.setState({
            _id : this.props.customer._id,
            customerName: this.props.customer.customerName,
            phoneNumber: this.props.customer.phoneNumber,
            address: this.props.customer.address
         });
   }
   handleInputChange = (e) => {
      this.setState({
         [e.target.name] : e.target.value
      });
   }

   handleEditSubmit = (e) => {
      e.preventDefault();
      this.props.onFormSubmit(this.state); // toggles edit view -- off
      console.log(this.state);
   }
  render() {
    return (
      <div>
         <form onSubmit={this.handleEditSubmit}>
            <input type="text" placeholder="Name" name="customerName" onChange={this.handleInputChange} defaultValue={this.props.customer.customerName}/>
            <input type="number" placeholder="Contact" name="phoneNumber" onChange={this.handleInputChange} defaultValue={this.props.customer.phoneNumber}/>
            <input type="text" placeholder="Address" onChange={this.handleInputChange} defaultValue={this.props.customer.address} name="address"/>
            <input className="edit-customer-btn" type="submit" value="Save" />
         </form>
      </div>
    );
  }
}

export default EditCustomer;
