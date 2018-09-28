import React from "react";
import axios from "axios";
import SpeciesFamily from "./SpeciesFamily.js";
import "./Inventory.css";

class Inventory extends React.Component {

  state = {
    siteID: 1,
    studyYear: 2017,
    inventoryList: []
  }

  async componentDidMount() {
    await axios.get('/flora/inventory/list/retrieve').then(res => {
      this.setState({ inventoryList: res.data });
    });
  }

  handleSpeciesCheck = event => {
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

        });
        break;
    }
  }

  render() {
    return (

      <div className="container-fluid inventory">

        <div className="alphabet">
          <button className="letters">A</button>
          <button className="letters">B</button>
          <button className="letters">C</button>
          <button className="letters">D</button>
          <button className="letters">E</button>
          <button className="letters">F</button>
          <button className="letters">G</button>
          <button className="letters">H</button>
          <button className="letters">I</button>
          <button className="letters">J</button>
          <button className="letters">K</button>
          <button className="letters">L</button>
          <button className="letters">M</button>
          <button className="letters">N</button>
          <button className="letters">O</button>
          <button className="letters">P</button>
          <button className="letters">Q</button>
          <button className="letters">R</button>
          <button className="letters">S</button>
          <button className="letters">T</button>
          <button className="letters">U</button>
          <button className="letters">V</button>
          <button className="letters">W</button>
          <button className="letters">X</button>
          <button className="letters">Y</button>
          <button className="letters">Z</button>

        </div>

        <div className="row m-5">
          <div className="col flora-title">
            <h3>Flora Inventory</h3>
          </div>
        </div>

        <div className="row m-5">
          <div className="col">
            <div className="input-group input-group-lg">
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
              <div className="input-group-prepend">
                <span className="input-group-text text-white" id="inputGroup-sizing-lg">Search Flora</span>
              </div>
              
            </div>
          </div>
        </div>

        <div className="row m-5">
          <div className="col">
            <div id="accordion">
              {
                this.state.inventoryList.map(family => {
                  return <SpeciesFamily family={family} key={family[0]} handleSpeciesCheck={this.handleSpeciesCheck} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inventory;