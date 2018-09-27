
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import logo from './Ecolens-logo-07.png';
import './App.css';
import Authentication from './components/authentication.js';
import Inventory from './components/Inventory/Inventory.js';
import Navbar from './components/Navbar/Navbar.js';

class App extends Component {

  state = {
    isAuth: false
  };

  checkAuth = (status) => {
    this.setState({ isAuth: status });
  }

  handleLogout = () =>{
    localStorage.removeItem("tkkn");
    this.setState({isAuth:false});
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
      <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">EcoLens</h1>
          <h2 className="App-subtitle">an ecological field data collection</h2>
          {this.state.isAuth && <input type='submit' value='logout' onClick={this.handleLogout}/>}
        </header>
        <Router>
          <div>
            {!this.state.isAuth && <Route exact path="/" render={(props) => <Authentication {...props} checkAuth={this.checkAuth} />} />}
            {this.state.isAuth && <Route exact path="/" render={(props) => <Inventory {...props} />} />}
          </div>
        </Router>
        <footer className="footer">
                <div className="container">
                    <span>Copyright ©Ecolens 2018  Created by Ryan,Nodar,Leslie,Matthew </span>
                </div>
            </footer>
      </div>
    )
  }
}

export default App;
