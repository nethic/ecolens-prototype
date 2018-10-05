
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios";
// import './App.css';
import Authentication from './components/authentication.js';
import Sites from './components/Projects/Sites.js';
import SiteOverview from './components/Projects/SiteOverview';
import Inventory from './components/Inventory/Inventory.js';
import Navbar from './components/Navbar/Navbar.js';

class App extends Component {

  state = {
    isAuth: false,
    siteID: 1,
    studyYear: 2017,
    savedInventory: {}
  };

  checkAuth = (status) => {
    this.setState({ isAuth: status });
  }

  handleLogout = () => {
    localStorage.removeItem("tkkn");
    this.setState({ isAuth: false });
    this.forceUpdate();
  }

  handleSiteID = (event) => {
    this.setState({ siteID: event.target.id });
  }

  handleStudyYear = (event) => {
    this.setState({ studyYear: event.target.id });
  }

  loadInventory = async (event) => {
    await this.handleStudyYear(event);
    await axios.get('/site/year/load', {
      params: {
        siteID: this.state.siteID,
        studyYear: this.state.studyYear
      }
    }).then(res => {
      this.setState({ savedInventory: {} });
      res.data.forEach(record => {
        this.setState(prevState => ({
          savedInventory: {
            ...prevState.savedInventory,
            [record.speciesID]: true
          }
        }));
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.state.isAuth && <Navbar handleLogout={this.handleLogout} />}
          {!this.state.isAuth && <Route path="/home" render={(props) => <Authentication {...props} checkAuth={this.checkAuth} />} />}
          {
            this.state.isAuth &&
            <div>
              <Route exact path="/home" render={(props) => <Sites {...props} handleSiteID={this.handleSiteID} />} />
              <Route exact path="/site-overview" render={(props) => <SiteOverview {...props} siteID={this.state.siteID} handleStudyYear={this.handleStudyYear} loadInventory={this.loadInventory} />} />
              <Route path="/inventory" render={(props) => <Inventory {...props} siteID={this.state.siteID} studyYear={this.state.studyYear} savedInventory={this.state.savedInventory} />} />
            </div>
          }
          <footer className="footer fixed-bottom bg bg-dark text-center text-muted p-3 m-auto">Copyright © 2018 EcoLens | By Dirty Hippies</footer>
        </div>
      </Router>
    )
  }
}

export default App;
