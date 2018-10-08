
import React from "react";
import "./Species.css";
// import "./Inventory.css";

class Species extends React.Component {

  render() {
    return (
        <label className="checkbox-container">{this.props.species[1]}
          <input type="checkbox" checked={this.props.isChecked || false} id={this.props.species[0]} onChange={this.props.handleSpeciesCheck} />
          <span className="checkmark"></span>
        </label>
    );
  }
}

export default Species;