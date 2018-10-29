import React, { Component } from 'react';
import '../css/header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="navbar">
         <ul>
            <Link to="/">Home</Link>
            <Link to="/inprogress">In Progress</Link>
            <Link to="/pending/">Pending Orders</Link>
            <Link to="/delivered/">Delivered Orders</Link>
            <Link to="/customers/">Customers</Link>
            <Link to="/analytics/">Analytics</Link>
         </ul>
      </div>
    );
  }
}

export default Header;
