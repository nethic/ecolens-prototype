import React, { Component } from 'react';
import "./Header.css";

class Footer extends Component {
    render() {
        return (
            
              
        <main role="main" className="inner cover">
          <div className="logo"></div>
            <nav className="nav nav-masthead justify-content-center">
                <a className="nav-link" href="#">browse</a>
                
                <a className="nav-link" href="#">logout</a>
            </nav>
          <h1 className="title"><strong>ecolens</strong></h1>
          <p className="subtitle">the best ecological database ever</p>
          
        </main>

        );
    }
}

export default Footer;