import React, { Component } from 'react';

import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            
          <nav className="navbar fixed-top style=transparent">
      
            
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Back</a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">LogOut</a>
                </li>
              </ul>
            
          </nav>      
        

        );
    }
}

export default Navbar;