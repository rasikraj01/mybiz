import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/addOrder.css';


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
    var currentdate= new Date();

    return (
      <div className="addOrderFormContainer">
         <form onSubmit={this.handleFormSubmit}>
            < div className = "field orderName" >
              < input type = "text"
              placeholder = "Name"
              name = "orderName"
              onChange = {
                this.handleInputChange
              }
              />
            </div>
            <div className="field description">
              <input type = "text"
              placeholder = "Description"
              maxlength="5"
              name = "Description"
              onChange = {
                this.handleInputChange
              }
              />
            </div>
            <div className="field duedate">
              Due Date:
                  <DatePicker
                  style={{width:"70px"}}

                  onChange = {
                    this.handleInputChange
                  }
                  minDate={moment()}
                  maxDate={moment().add(30, "days")}
                  placeholderText="max 30days from today"
                />
            </div>
            <div className="field customername">
                < select name = "customerName"
                onChange = {
                    this.handleInputChange
                  } > {
                    this.props.customers && this.props.customers.map((customer, key) => ( <
                      option key = {
                        key
                      } > {
                        customer.customerName
                      } < /option>
                    ))
                  } <
                  /select>
            </div>
            <div className="action-container" >
              <input type="submit" className="action primary" />
            </div>
         </form>
      </div>
    );
  }
}

export default addOrders;
