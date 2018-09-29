
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light md-transparent justify-content-end navbar-fixed-top">
        <div id="navbarsExample03" >
          <ul className="navbar-nav">
            <li className="nav-item dropdown dropleft">
              <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="navbar-toggler-icon"></span></a>
              <div className="dropdown-menu text-light" aria-labelledby="dropdown03">
                <Link className="dropdown-item" to="/">Home</Link>
                <Link className="dropdown-item" to="/" onClick={this.props.handleLogout}>Logout</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;