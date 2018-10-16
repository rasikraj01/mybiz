import React, { Component } from 'react';
import EditOrder from './editOrder';


class SingleOrder extends Component {
   constructor(){
      super();
      this.state = {
         editMode : false
      }
   }

   handleToggleEdit = () => {
      console.log('edit on');
      this.setState({editMode : true});
   }
   onFormSubmit = (data) =>{
      this.props.handleOrderEdit(data);
      this.setState({editMode: false});
   }
  render() {
    return (
      <div>
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
            Order Name : {this.props.orderName}<br/>
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
