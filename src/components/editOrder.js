import React, { Component } from 'react';

class EditOrder extends Component {
   constructor(){
      super();
      this.state = ({

      });
   }
   componentDidMount(){
      this.setState({
            _id : this.props._id,
            orderName: this.props.orderName,
            customerName: this.props.customerName,
            Description: this.props.Description,
            dueDate: this.props.dueDate,
            orderDate: this.props.orderDate,
            status: this.props.status
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
            <input type="text" placeholder="Name" name="orderName" onChange={this.handleInputChange} defaultValue={this.props.orderName}/>
            <input type="text" placeholder="Description" name="Description" onChange={this.handleInputChange} defaultValue={this.props.Description}/>
            <input type="date" placeholder="DueDate" name="dueDate" onChange={this.handleInputChange} defaultValue={this.props.dueDate}/>
            <input type="text" value={this.props.orderDate} name="orderDate" readOnly/>
            <input type="text" value={this.props.customerName} name="customerName" readOnly/>
            <select onChange={this.handleInputChange} name="status">
               <option>Pending</option>
               <option>In Progress</option>
               <option>Delivered</option>
            </select>
            <input type="submit"/>
         </form>
      </div>
    );
  }
}

export default EditOrder;
