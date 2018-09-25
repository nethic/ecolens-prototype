import React, { Component } from 'react';

import "./Site.css";

const Sites = ["Site1", "Site2", "Site3", "Site4", "Site5"];

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: ""
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
    
  changeHandler(e) {
    this.props.parentFunction(e.target.value)
  }
  
  render() {
    return (
      <div>
        <label>{this.props.labelName}</label>
        <input type={this.props.inputType} id={this.props.id} onChange={this.changeHandler} />
      </div>
    )
  }
}

class Site extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newSite: "",
      existingSite: ""
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.setnewSite = this.setnewSite.bind(this)
    this.setexistingSite = this.setexistingSite.bind(this)
  }
  
  setnewSite(newSite) {
    this.setState({newSite: newSite})
  }
  
  setexistingSite(existingSite) {
    this.setState({existingSite: existingSite})
  }
  
  clickHandler() {
    // our code here
    alert(`newSite: ${this.state.newSite} existingSite: ${this.state.existingSite}`)
  }


  render() {
      return (
          
      <div>
          <label>Input New Site:</label>
            <Input id ="newSite" inputType="text" placeholder="Input New Site"
              parentFunction={this.setnewSite}  />
          <button onClick={this.clickHandler}>    {this.props.buttonName}Submit</button>
      </div>

      /*<div className="existingSite">
          <h1>Existing Sites</h1>
            <div className="container">
              <div className="row">
                <div className="col"></div>
                  <div className="col-10">
                    <existingSite Sites={Sites}/></div>
                <div className="col"></div>
              </div>
          </div>
      </div>*/
            
     

      );
    }
}

export default Site;