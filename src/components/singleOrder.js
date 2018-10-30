import React, { Component } from 'react';
import EditOrder from './editOrder';
import '../css/singleOrder.css';

class SingleOrder extends Component {
   constructor(){
      super();
      this.state = {
         editMode : false
      }

      this.handleOrderDelete = this.handleOrderDelete.bind(this);
   }

   handleToggleEdit = () => {
      console.log('edit on');
      this.setState({editMode : true});
   }
   onFormSubmit = (data) => {
      this.props.handleOrderEdit(data);
      this.setState({editMode: false});
   }

   handleOrderDelete = () => {
      this.props.handleOrderDelete(this.props._id);
   }
   
  render() {
    return (
      <div className="singleOrder">
         {(
         this.state.editMode &&
         <EditOrder
            _id= {this.props._id}
            orderName={this.props.orderName}
            Description={this.props.Description}
            customerName={this.props.customerName}
            orderDate={this.props.orderDate}
            dueDate={this.props.dueDate}
            status={this.props.status}
            onFormSubmit = {this.onFormSubmit}
         />
         ) ||
         <li>
            <h2><span>Order Name : </span>{this.props.orderName}</h2>
            <h2><span>Customer Name : </span>{this.props.customerName}</h2>
            <h3>Description : {this.props.Description}</h3>
            <h4>Due Date : {this.props.dueDate} </h4>
            <h4>Order Date :  {this.props.orderDate}</h4>
            <h4>Status : {this.props.status} </h4>
            <button onClick={this.handleToggleEdit}>Edit</button>
            <button onClick={this.handleOrderDelete}>Delete</button>
         </li>
      }

      </div>
    );
  }
}

export default SingleOrder;
