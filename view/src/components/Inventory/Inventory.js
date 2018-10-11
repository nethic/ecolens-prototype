
import React from "react";
import axios from "axios";
import SpeciesFamily from "./Family.js";
import Species from "./Species.js";
// import "./Inventory.css";

class Inventory extends React.Component {

  state = {
    inventoryList: [],
    inventoryStats: {},
    isCheckedObj: {},
    speciesList: [],
    found: []
  }

  async componentDidMount() {
    await axios.get('/flora/inventory/list/retrieve').then(res => {
      let arr = res.data
      let arrSorted = [];
      for (var i = 0; i < arr.length; i++) {
        for (var x = 0; x < arr[i][2].length; x++) {
          arrSorted.push(arr[i][2][x])
        }
      };
      this.setState({ inventoryList: res.data, speciesList: arrSorted });
    });
    await this.handleIsChecked();
    this.handleInventoryStats();
  }

  handleIsChecked = () => {
    let isCheckedObj = {};
    this.state.inventoryList.forEach(family => {
      family[2].forEach(species => {
        if (this.props.savedInventory[species[0]]) {
          isCheckedObj[species[0]] = true;
        }
        else {
          isCheckedObj[species[0]] = false;
        }
      });
    });
    this.setState({ isCheckedObj: isCheckedObj });
  }

  handleSearch = event => {
    let val = event.target.value
    let arr = this.state.speciesList
    let found = [];
    if (val.length > 3) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][1].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
          found.push(arr[i])
        }
      }
      this.setState({ found: found })
      event.preventDefault();
    }
    event.preventDefault();
  }

  resetSearch = event => {
    this.setState({ found: [] });
    event.preventDefault();
  }

  handleSpeciesCheck = async event => {
    let checkedSpeciesID = event.target.id;
    await this.setState(prevState => ({
      isCheckedObj: {
        ...prevState.isCheckedObj,
        [checkedSpeciesID]: !this.state.isCheckedObj[checkedSpeciesID]
      }
    }));
    let isChecked = this.state.isCheckedObj[checkedSpeciesID];
    switch (isChecked) {
      case true:
        await axios.post('/flora/inventory/observation', {
          siteID: this.props.siteID,
          studyYear: this.props.studyYear,
          speciesID: checkedSpeciesID
        });
        break;
      case false:
        await axios.delete('/flora/inventory/correction', {
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
    this.handleInventoryStats();
  }

  handleInventoryStats = () => {
    axios.get('/site/year/stats', {
      params: {
        siteID: this.props.siteID,
        studyYear: this.props.studyYear
      }
    }).then(res => {
      this.setState({ inventoryStats: res.data })
    });
  }

  render() {
    return (

      <div className="container-fluid mb-5 inventory">

        <div className="row">
          <div className="col d-flex flora-title">
            <h2 className="mx-auto my-4">Flora Inventory</h2>
          </div>
        </div>

        <div className="row">
          <div className="col mb-4" id="accordion1">
            <div className="card m-1">
              <div className="card-header bg bg-light rounded" id="inventory-stats-header">
                <button className="btn w-100 bg bg-dark text-light" data-toggle="collapse" aria-expanded="true" data-target="#inventory-stats" aria-controls="inventory-stats">
                  Species Richness
                </button>
              </div>
              <div id="inventory-stats" className="collapse hide" aria-labelledby="inventory-stats-header" data-parent="#accordion1">
                <div className="card-body d-flex flex-column">
                  <div className="mx-auto">L+: {this.state.inventoryStats['L+']}</div>
                  <div className="mx-auto">L5: {this.state.inventoryStats['L5']}</div>
                  <div className="mx-auto">L4: {this.state.inventoryStats['L4']}</div>
                  <div className="mx-auto">L3: {this.state.inventoryStats['L3']}</div>
                  <div className="mx-auto">L2: {this.state.inventoryStats['L2']}</div>
                  <div className="mx-auto">L1: {this.state.inventoryStats['L1']}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group d-flex flex-row">
              <input type="text" className="form-control mx-1" id="myInput" value={this.state.value} aria-describedby="" placeholder="Search flora by scientific name" onChange={this.handleSearch} />
              <button className="btn btn-success" onClick={this.resetSearch}>Clear</button>
            </div>
            <div className="mx-3">
              {
                this.state.found.map(species => {
                  return <Species species={species} key={species[0]} handleSpeciesCheck={this.handleSpeciesCheck} isChecked={this.state.isCheckedObj[species[0]]} />
                })
              }
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col m-3" id="accordion2">
            {
              this.state.inventoryList.map(family => {
                return <SpeciesFamily family={family} key={family[0]} siteID={this.props.siteID} studyYear={this.props.studyYear} handleInventoryStats={this.handleInventoryStats} isChecked={this.state.isCheckedObj} handleSpeciesCheck={this.handleSpeciesCheck} />
              })
            }
          </div>
        </div>

      </div >
    );
  }
}

export default Inventory;