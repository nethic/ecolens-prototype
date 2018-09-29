import React from 'react';

class Authentication extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      response: '',
      authRes: '',
      token: '',
      isAuth: false,
    };
    this.handleUser = this.handleUser.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.callApi = this.callApi.bind(this);
    this.saveToken = this.saveToken.bind(this);
  }

  componentDidMount() {
    this.saveToken();
    if (localStorage.getItem('tkkn')) {
      let data = JSON.stringify({
        token: localStorage.getItem('tkkn')
      });
      this.callApi('/token', data)
        .then(res => {
          this.setState({ authRes: res.message, isAuth: res.ans });
          this.props.checkAuth(res.ans);
        })
        .catch(err => console.log(err));
    }
  }

  async callApi(route, data) {
    switch (route) {
      case '/auth/login':
        var responseLog = await fetch(route, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: data
        })
        var bodyLog = await responseLog.json();

        if (responseLog.status !== 200) throw Error(bodyLog.message);

        return bodyLog;

      case '/auth/signup':
        var responseSign = await fetch(route, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: data
        })
        var bodySign = await responseSign.json();

        if (responseSign.status !== 200) throw Error(bodySign.message);

        return bodySign;

      case '/token':
        var tokenRes = await fetch(route, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: data
        })
        var tkbody = await tokenRes.json();

        if (tokenRes.status !== 200) throw Error(tkbody.message);

        return tkbody;
    }
  };

  handleUser(event) {
    this.setState({ user: event.target.value });
  }

  handlePass(event) {
    this.setState({ pass: event.target.value });
  }

  handleSubmit(event) {
    var data = JSON.stringify({
      user: this.state.user,
      pass: this.state.pass
    })

    this.callApi('/auth/login', data).then(res => {
      let token = res.token
      localStorage.setItem('tkkn', token);
      this.setState({ token: token, authRes: res.message, isAuth: res.ans });
      this.props.checkAuth(res.ans);
    });
    event.preventDefault();
  }

  saveToken() {
    if (localStorage.hasOwnProperty('tkkn')) {
      this.setState({ token: localStorage.getItem('tkkn') });
    }
  }

  handleSignup(event) {
    var data = JSON.stringify({
      user: this.state.user,
      pass: this.state.pass
    });

    this.callApi('/auth/signup', data).then(res => this.setState({ authRes: res.message }));
    event.preventDefault();
  }

  render() {
    return (
      <form id="authenform">
        <p className="instructions">User Login</p>
        <p className="App-intro">{this.state.response}</p>
        <p className="App-intro">{this.state.authRes}</p>
        <label id="authenlogin">
          <input id="user" type='text' value={this.state.value} onChange={this.handleUser} placeholder="username" />
          <br />
          <input id="pass" type='password' value={this.state.value} onChange={this.handlePass} placeholder="password" />
        </label>
        <br />
        <input id="submit" type="submit" value="Submit" onClick={this.handleSubmit} />
        <input id="signup" type="submit" value="Signup" onClick={this.handleSignup} />
      </form>
    );
  }
}

export default Authentication;
