import React, { Component } from 'react';
import '../css/addOrder.css';


class addOrders extends Component {

   constructor(props){
      super(props);

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
      let date =  new Date();
      let dueDate = document.getElementById('dueDate').value;
      dueDate = new Date(dueDate);
      if( dueDate >= date) {
        this.setState({
          orderDate : date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),
          dueDate: dueDate.getDate() + '/' + (dueDate.getMonth() + 1) + '/' + dueDate.getFullYear(),
          status: 'Pending',
          _id : Math.floor(Math.random() * 10000000)
        },() => {
          console.log(this.state);
          this.props.handleOrderUpdate(this.state);
          this.props.handleHideForm();
        })
      }
      else {
        alert('Wrong due date!')
      }
    }
  render() {
    return (
      <div className="addOrderFormContainer">
         <form onSubmit={this.handleFormSubmit}>
            < div className = "field orderName" >
              < input type = "text"
              placeholder = "Name"
              name = "orderName"
              required
              onChange = {
                this.handleInputChange
              }
              />
            </div>
            <div className="field description">
              < input type = "text"
              placeholder = "Description"
              name = "Description"
              maxLength = {500}
              required
              onChange = {
                this.handleInputChange
              }
              />
            </div>
            <div className="field duedate">
                < input type = "date"
                id="dueDate"
                placeholder = "DueDate"
                name = "dueDate"
                required
                onChange = {
                  this.handleInputChange
                }
                />
            </div>
            <div className="field customername">
                < select name = "customerName"
                onChange = {
                    this.handleInputChange
                 } > <option>{
                    this.customer.customerName
                  } </option>
                ))
                  } </select>
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
