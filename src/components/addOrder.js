import React, { Component } from 'react';

class addOrders extends Component {
   constructor(){
      super();

      this.state = {
            _id : null,
            orderName: '',
            customerName: '',
            Description: '',
            dueDate: '',
            orderDate: '',
            status: ''
      }
   }
   handleInputChange = (e) => {
      console.log(e.target.value);
      this.setState({ [e.target.name]: e.target.value });
   }
   handleFormSubmit = (e) => {
      e.preventDefault();
      //let date =  new Date();
      this.setState({
         orderDate : '20-30-2019',
         status: 'Pending',
         _id : Math.floor(Math.random() * 10000000)
      },() => {
         console.log(this.state);
         this.props.handleOrderUpdate(this.state);
         this.props.handleHideForm();
      })
   }
  render() {
    return (
      <div>
         <form onSubmit={this.handleFormSubmit}>
            <input type="text" placeholder="Name" name="orderName" onChange={this.handleInputChange}/>
            <input type="text" placeholder="Description" name="Description" onChange={this.handleInputChange}/>
            <input type="date" placeholder="DueDate" name="dueDate" onChange={this.handleInputChange}/>
            <select name="customerName" onChange={this.handleInputChange}>
               {this.props.customers && this.props.customers.map((customer, key) => (
                  <option key={key}>{customer.customerName}</option>
               ))}
            </select>
            <input type="submit"/>
         </form>
      </div>
    );
  }
}

export default addOrders;
