import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {user: '', pass:'',response: '', authRes:''};

    this.handleUser = this.handleUser.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.callApi = this.callApi.bind(this);


  }


  componentDidMount() {
    this.callApi('/test')
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async (route, data) => {
    
    
    if (route === '/test') {
      const response = await fetch(route);
      const body = await response.json();

      if (response.status !== 200) throw Error(body.message);

      return body;

    }
    else if (route ==='/auth/login'){
      const response = await  fetch(route, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: data
      })
      const body = await response.json();

      if (response.status !== 200) throw Error(body.message);
  
      return body;
    }
    else if (route === '/auth/signup'){
      const response = await  fetch(route, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: data
      })
      const body = await response.json();

      if (response.status !== 200) throw Error(body.message);
  
      return body;
    

    }

   


  };

 

  

  handleUser(event) {
    this.setState({user: event.target.value});

  }

  handlePass(event) {
    this.setState({pass: event.target.value});
  }

  handleSubmit(event) {
    var data =JSON.stringify({
      user: this.state.user,
      pass: this.state.pass
    }) 

    alert('A name was submitted: ' + this.state.user +' also a password.. opsie: ' + this.state.pass);
    this.callApi('/auth/login', data).then(res => this.setState({authRes : res.message}))
    event.preventDefault();
  }

  handleSignup(event) {
    
    var data =JSON.stringify({
      user: this.state.user,
      pass: this.state.pass
    }) 

    alert('A name was submitted: ' + this.state.user +' also a password.. opsie: ' + this.state.pass);
    this.callApi('/auth/signup', data).then(res => this.setState({authRes : res.message}))
    event.preventDefault();

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <p className="App-intro">{this.state.authRes}</p>
        <form>
            <label>
          <input id="user" value={this.state.value} onChange={this.handleUser} placeholder="username" />
          <br/>
          <input id="pass" value={this.state.value} onChange={this.handlePass} placeholder="password" />
            </label>
            <br/>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
            <input type="submit" value="Signup" onClick={this.handleSignup} />

          </form>
      </div>
      
    );
  }
}

export default App;
