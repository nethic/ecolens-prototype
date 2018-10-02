
import React from "react";
import axios from "axios";
import SpeciesFamily from "./Family.js";
// import "./Inventory.css";

class Inventory extends React.Component {

  state = {
    inventoryList: []
  }

  componentDidMount() {
    axios.get('/flora/inventory/list/retrieve').then(res => {
      this.setState({ inventoryList: res.data });
    });
  }

  render() {
    return (

      <div className="container-fluid mb-5 inventory">

        <div className="row">
          <div className="col d-flex flora-title">
            <h2 className="mx-auto my-5">Flora Inventory</h2>
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
          <div className="col m-3" id="accordion">
            {
              this.state.inventoryList.map(family => {
                return <SpeciesFamily family={family} key={family[0]} savedInventory={this.props.savedInventory} siteID={this.props.siteID} studyYear={this.props.studyYear} />
              })
            }
          </div>
        </div>

      </div >
    );
  }
}

export default Inventory;