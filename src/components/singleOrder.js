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
   componentDidMount(){
      this.setState({
         updatedOrder : {
            orderName: this.props.OrderName,
            customerName: this.props.customerName,
            Description: this.props.Description,
            dueDate: this.props.dueDate,
            orderDate: this.props.orderDate,
            status: this.props.status
         }
      });
      console.log(this.props.orderName);
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
            <input type="text" placeholder="Name" name="orderName" onChange={this.handleInputChange} defaultValue={this.props.OrderName}/>
            <input type="text" placeholder="Description" name="Description" onChange={this.handleInputChange} defaultValue={this.props.Description}/>
            <input type="date" placeholder="DueDate" name="dueDate" onChange={this.handleInputChange} defaultValue={this.props.dueDate}/>
            <input type="text" value={this.props.orderDate} name="orderDate" readOnly/>
            <input type="text" value={this.props.customerName} name="customerName" readOnly/>
            <select onChange={this.handleInputChange}>
               <option>Pending</option>
               <option>In Progress</option>
               <option>Delivered</option>
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
