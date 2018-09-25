import React, { Component } from 'react';
import "./HeaderB.css";

class HeaderB extends Component {
    render() {
        return (
            
              
        <main role="main" className="inner cover">
          <div className="logo"></div>
            <nav className="nav nav-masthead justify-content-left">
                <a className="nav-link" href="#">browse</a>
                
                <a className="nav-link" href="#">logout</a>
            </nav>
          <h1 className="title"><strong>ecolens</strong></h1>
          <p className="subtitle">the best ecological database ever</p>
          
        </main>

        );
    }
}

export default HeaderB;