
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg'
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

  handleLogout = () =>{
    localStorage.removeItem("tkkn");
    this.setState({isAuth:false});
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">EcoLens</h1>
          {this.state.isAuth && <input type='submit' value='logout' onClick={this.handleLogout}/>}
        </header>
        <Router>
          <div>
            {!this.state.isAuth && <Route path="/" render={(props) => <Authentication {...props} checkAuth={this.checkAuth} />} />}
            {this.state.isAuth && <Route path="/" render={(props) => <Projects {...props} />} /> && <Route path="/inventory" render={(props) => <Inventory {...props} />} />}
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
