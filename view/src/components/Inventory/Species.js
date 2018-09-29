
import React from "react";
import axios from "axios";
// import "./Inventory.css";

class Species extends React.Component {
  state = {
    isChecked: false,
    siteID: 1,
    studyYear: 2017
  }

  handleSpeciesCheck = event => {
    this.setState({ isChecked: !this.state.isChecked });
    let isChecked = event.target.checked;
    let checkedSpeciesID = event.target.id;
    switch (isChecked) {
      case true:
        axios.post('/flora/inventory/observation', {
          siteID: this.state.siteID,
          studyYear: this.state.studyYear,
          speciesID: checkedSpeciesID
        });
        break;
      case false:
        axios.delete('/flora/inventory/correction', {
          data: {
            siteID: this.state.siteID,
            studyYear: this.state.studyYear,
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
      <div className="form-check">
        <form>
          <div className="form-row">
            <div className="col"></div>
            <div className="col-4 py-3">
              <label className="form-check-label" htmlFor={this.props.species[1]}>{this.props.species[1]}</label>
            </div>
            <div className="col-1 py-3">
              <input className="form-check-input" type="checkbox" checked={this.state.isChecked} id={this.props.species[0]} onChange={this.handleSpeciesCheck} />
            </div>
            <div className="col"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default Species;