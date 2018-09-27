
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Authentication from './components/authentication.js';
import Projects from './components/projects/projects.js';
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
        </header>
        <Router>
          <div>
            {!this.state.isAuth && <Route exact path="/" render={(props) => <Authentication {...props} checkAuth={this.checkAuth} />} />}
            {this.state.isAuth && <Route exact path="/" render={(props) => <Projects {...props} />} />}
            {this.state.isAuth && <Route exact path="/inventory" render={(props) => <Inventory {...props} />} />}
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
