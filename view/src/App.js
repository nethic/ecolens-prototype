import React, { Component } from 'react';

import './App.css';
 import Header from './components/Header/Header.js';
//  import Login from './components/Login/Login.js';
// import Site from './components/Site/Site.js';
// import Family from './components/Family/Family.js';
 import Footer from './components/Footer/Footer.js';
// import SignIn from './pages/SignIn/SignIn.js';
// import Home from './components/Home/Home.js';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/test');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  
  render() {
    return (
      <div className="App">
      <Header />
      {/* <Login /> */}
      {/* <Site /> */}
      {/* <Family /> */}
       <Footer />
      {/* <SignIn /> */}
      {/* <Home /> */}
      </div>
    );
  }
}

export default App;
