import React, { Component } from 'react';
import "./Home.css";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";

class Home extends Component {
  render() {
    return (
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <Header />
        <button class="btn btn-lg btn-secondary" id="start">START</button>
        <Footer />
      </div>
    )
  }
}

export default Home;