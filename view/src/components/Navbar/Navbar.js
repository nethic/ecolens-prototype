
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">EcoLens</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/home">Home</Link>
            <Link className="nav-item nav-link" to="/home" onClick={this.props.handleLogout}>Logout</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;