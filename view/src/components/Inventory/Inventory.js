import React from "react";
import SpeciesFamily from "./SpeciesFamily.js";

class Inventory extends React.Component {
  render() {
    const families = ["Family1", "Family2", "Family3", "Family4", "Family5"];
    const speciesSet = ["Species1", "Species2", "Species3", "Species4", "Species5"];

    return (
      <div className="Inventory">
        <h1>Inventory</h1>
        <div className="container">
          <div className="row">
            <div className="col">
            </div>
            <div className="col-10">
              <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
              </div>
            </div>
            <div className="col">
            </div>
          </div>
          <div className="row">
            <div className="col">
            </div>
            <div className="col-10">
              <SpeciesFamily families={families} speciesSet={speciesSet}/>
            </div>
            <div className="col">
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inventory;