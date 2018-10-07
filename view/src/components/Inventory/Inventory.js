
import React from "react";
import axios from "axios";
import SpeciesFamily from "./Family.js";
// import "./Inventory.css";

class Inventory extends React.Component {

  state = {
    inventoryList: [],
    inventoryStats: {}
  }

  async componentDidMount() {
    await axios.get('/flora/inventory/list/retrieve').then(res => {
      this.setState({ inventoryList: res.data });
    });
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
                  <div className="mx-auto">All: {this.state.inventoryStats['L+']}</div>
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
              <input type="text" className="form-control mx-1" id="" aria-describedby="" placeholder="Scientific name" />
              <button className="btn btn-success">Search Flora</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col m-3" id="accordion2">
            {
              this.state.inventoryList.map(family => {
                return <SpeciesFamily family={family} key={family[0]} savedInventory={this.props.savedInventory} siteID={this.props.siteID} studyYear={this.props.studyYear} handleInventoryStats={this.handleInventoryStats} />
              })
            }
          </div>
        </div>

      </div >
    );
  }
}

export default Inventory;