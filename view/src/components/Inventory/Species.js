
import React from "react";
import axios from "axios";
import "./Species.css";
// import "./Inventory.css";

class Species extends React.Component {
  state = {
    isChecked: false
  }

  componentDidMount() {
    if (this.props.savedInventory[this.props.species[0]]) {
      this.setState({ isChecked: true });
    }
  }

  handleSpeciesCheck = event => {
    this.setState({ isChecked: !this.state.isChecked });
    let isChecked = event.target.checked;
    let checkedSpeciesID = event.target.id;
    switch (isChecked) {
      case true:
        axios.post('/flora/inventory/observation', {
          siteID: this.props.siteID,
          studyYear: this.props.studyYear,
          speciesID: checkedSpeciesID
        });
        break;
      case false:
        axios.delete('/flora/inventory/correction', {
          data: {
            siteID: this.props.siteID,
            studyYear: this.props.studyYear,
            speciesID: checkedSpeciesID
          }
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
        <label className="checkbox-container">{this.props.species[1]}
          <input type="checkbox" checked={this.state.isChecked} id={this.props.species[0]} onChange={this.handleSpeciesCheck} />
          <span className="checkmark"></span>
        </label>
    );
  }
}

export default Species;