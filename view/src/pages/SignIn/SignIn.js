import React, { Component } from 'react';
import "./SignIn.css";
import Login from "../../components/Login/Login.js";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";

class SignIn extends Component {
  render() {
    return (
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default SignIn;