import React, { Component } from 'react';

class EditOrder extends Component {
  constructor() {
    super();
    this.state = ({

    });
  }
  componentDidMount() {
    this.setState({
      _id: this.props._id,
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
      [e.target.name]: e.target.value
    });
  }

  minDueDate = () => {
    const year = this.props.orderDate.split('/').reverse();
    let date = year.splice(1).reverse();
    
    date = year.concat(date).join('-');
    return date;
  }

  //orderDate in mm dd yy and dueDate in dd mm yy
  // it would be great if you change date to 1 format

  handleEditSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state); // toggles edit view -- off
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleEditSubmit}>
          <input type="text" placeholder="Name" name="orderName" maxLength="500" defaultValue={this.props.orderName} onChange={this.handleInputChange} required />
          <input type="text" placeholder="Description" name="Description" maxLength="500" defaultValue={this.props.Description} onChange={this.handleInputChange} required />
          <input type="date" placeholder="DueDate" name="dueDate" defaultValue={'this.props.dueDate'} min={this.minDueDate()} onChange={this.handleInputChange} required />
          <input type="text" value={this.props.orderDate} name="orderDate" maxLength="500" readOnly />
          <input type="text" value={this.props.customerName} name="customerName" maxLength="500" readOnly />
          <select onChange={this.handleInputChange} name="status">
            <option>Pending</option>
            <option>In Progress</option>
            <option>Delivered</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default EditOrder;
