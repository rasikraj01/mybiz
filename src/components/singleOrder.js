import React, { Component } from 'react';
// import OrderEdit from './orderEdit';


class SingleOrder extends Component {
   constructor(){
      super();
      this.state = {
         editMode : false,
         updatedOrder : {
         }
      }
   }
   componentWillMount(){
      // this.setState({
      //    updatedOrder : {
      //       orderName: '',
      //       customerName: '',
      //       Description: '',
      //       dueDate: '',
      //       orderDate: '',
      //       status: ''
      //    }
      // });
      // console.log(this.props.orderName);
   }
   handleInputChange = (e) => {
      console.log(e.target.value);
      this.setState({
         updatedOrder :
         {[e.target.name]: e.target.value }
      });
   }
   handleToggleEdit = () => {
      console.log('edit on');
      this.setState({editMode : true});
   }
   handleEdit = (e) => {
      e.preventDefault();
      this.setState({
         editMode: false
         // updatedOrder : {data : 'one'}
      });
   }
  render() {
    return (
      <div>
         {(
         this.state.editMode &&
         <form onSubmit={this.handleEdit}>
            <input type="text" placeholder="Name" name="orderName" onChange={this.handleInputChange} value={this.porps.OrderName}/>
            <input type="text" placeholder="Description" name="Description" onChange={this.handleInputChange} value={this.porps.Description}/>
            <input type="date" placeholder="DueDate" name="dueDate" onChange={this.handleInputChange} value={this.porps.dueDate}/>
            <select name="customerName" onChange={this.handleInputChange}>
               {this.props.customers && this.props.customers.map((customer, key) => (
                  <option key={key}>{customer.customerName}</option>
               ))}
            </select>
            <input type="submit"/>
         </form>
         ) ||
         <li>
            Order Name : {this.props.OrderName}<br/>
            Customer Name : {this.props.customerName}<br/>
            Description : {this.props.Description}<br/>
            Order Date :  {this.props.orderDate}<br/>
            Due Date : {this.props.dueDate} <br/>
            Status : {this.props.status} <br/>
            <button onClick={this.handleToggleEdit}>Edit</button>
         </li>
      }

      </div>
    );
  }
}

export default SingleOrder;
