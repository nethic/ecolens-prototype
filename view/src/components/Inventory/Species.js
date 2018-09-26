import React from "react";

class Species extends React.Component {

  render() {
    return (
      <div className="form-check p-0">
        <label className="form-check-label mx-1" htmlFor={this.props.species[1]}>{this.props.species[1]}</label>
        <input className="form-check-input mx-1" type="checkbox" value="" id={this.props.species[0]} onChange={this.props.handleSpeciesCheck} />
      </div>
    );
  }
}

export default Species;