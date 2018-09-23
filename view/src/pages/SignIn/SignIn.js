import React, { Component } from 'react';
import "./SignIn.css";


class SignIn extends Component {
    render() {
        return (
            
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">

            <header/>
            
            <Login />
        
            <footer />
            
        </div>
        )
    }
}

export default SignIn;