import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Authentication from './components/authentication.js';
import Inventory from './components/Inventory/Inventory.js';

class App extends Component {
  state = {
    response: '',
    authenticated: false,
    siteID: 1,
    studyYear: 2017,
    inventoryList: []
  };

  async componentDidMount() {
    await this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));

      axios.get('/flora/inventory/list/retrieve').then(res => {
        this.setState({ inventoryList: res.data });
      });
  }

  callApi = async () => {
    const response = await fetch('/test');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  authClick = () => {
    this.setState({ authenticated: true });
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
            { !this.state.authenticated && <Route exact path="/" render={(props) => <Authentication {...props} authClick={this.authClick} />} />}
            { this.state.authenticated && <Route exact path="/" render={(props) => <Inventory {...props} inventoryList={this.state.inventoryList} siteID={this.state.siteID} studyYear={this.state.studyYear} />} />}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
