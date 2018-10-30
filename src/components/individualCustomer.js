import React, { Component } from 'react';
import EditCustomer from './customerEdit.js';
import '../css/individualCustomer.css'

class IndividualCustomer extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false
    }
  }

  handleToggleEdit = () => {
    this.setState({editMode : true});
  }
  onFormSubmit = (data) => {
    this.props.handleEdit(data);
    this.setState({editMode: false});
  }

  render() {
    return (
      <div>
        {(this.state.editMode && 
        <EditCustomer 
        customer={this.props.customer}
        onFormSubmit={this.onFormSubmit}
        />) ||
        <div className="grid-container">
          <div className="data">
            <div><lable className="caption">Name</lable></div>
            <div>{this.props.customer.customerName}</div>
          </div>
          <div className="data">
            <div><lable className="caption">Contact</lable></div>
            <div><lable>{this.props.customer.phoneNumber}</lable></div>
          </div>
          <div className="data">
            <div><lable className="caption">Address</lable></div>
            <div>{this.props.customer.address}</div>
          </div>
          <div className="data">
            <div><button className="row-btn" onClick={this.handleToggleEdit}>Edit</button></div>
          </div>
          <div className="data">
            <div><button className="row-btn" onClick={() => this.props.handleDelete(this.props.customer)}>Delete</button></div>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default IndividualCustomer;
