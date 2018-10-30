import React, { Component } from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar">

        <input type="checkbox" id="nav-menu-checkbox" className="nav-menu" />
        <label htmlFor="nav-menu-checkbox" className="nav-menu-label">
          <div className="burger-menu">
            <div className="burger-menu-line"></div>
            <div className="burger-menu-line"></div>
            <div className="burger-menu-line"></div>
          </div>
        </label>

        <ul className="nav-list">
          <li className="nav-list-li">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-li">
            <Link to="/inprogress">In Progress</Link>
          </li>
          <li className="nav-list-li">
            <Link to="/pending/">Pending Orders</Link>
          </li>
          <li className="nav-list-li">
            <Link to="/delivered/">Delivered Orders</Link>
          </li>
          <li className="nav-list-li">
            <Link to="/customers/">Customers</Link>
          </li>
          <li className="nav-list-li">
            <Link to="/analytics/">Analytics</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
