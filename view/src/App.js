
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import logo from './Ecolens-logo-07.png';
import './App.css';
import Authentication from './components/authentication.js';
import Inventory from './components/Inventory/Inventory.js';

class App extends Component {

  state = {
    isAuth: false
  };

  checkAuth = (status) => {
    this.setState({ isAuth: status });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">EcoLens</h1>
          <h2 className="App-subtitle">an ecological field data collection</h2>
        </header>
        <Router>
          <div>
            {!this.state.isAuth && <Route exact path="/" render={(props) => <Authentication {...props} checkAuth={this.checkAuth} />} />}
            {this.state.isAuth && <Route exact path="/" render={(props) => <Inventory {...props} />} />}
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
