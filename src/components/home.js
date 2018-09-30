import React, { Component } from 'react';

class Home extends Component {
   constructor(){
      super();
      this.state = {
         orders:[
            {
               orderName: 'rsaik',
               customerName: 'coolguydinesh',
               Description: 'rasik',
               dueDate: '20/02/2019',
               orderDate: '05/21/2041',
               status: 'Pending'
            },
            {
               orderName: 'raj',
               customerName: 'coolguydinesh',
               Description: 'rasik',
               dueDate: '20/02/2019',
               orderDate: '05/21/2041',
               status: 'Pending'
            }
         ]
      }
   }
   componentDidMount(){
      console.log(this.state.orders);
   }
  render() {
    let orders ;
    return (
      <div>
         This is home.
         {this.state.orders.map((data, index) => (
            <li key={index}>
               Order : {data.orderName}<br/>
               Customer : {data.customerName}<br/>
               Details : {data.Description}<br/>
               Order Date : {data.orderDate} Due Date : {data.dueDate}
               Status : {data.status}
            </li>
         ))}
      </div>
    );
  }
}

export default Home;
