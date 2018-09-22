import React from "react";

class Inventory extends React.Component {
  render() {
    return (
      <div>
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
        </div>
      </div>        
    );
  }
}

export default Inventory;