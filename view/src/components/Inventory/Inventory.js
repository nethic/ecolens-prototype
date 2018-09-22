import React from "react";

class Inventory extends React.Component {
  render() {
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
          <div className="row align-items-start">
            <div className="col">
            </div>
            <div className="col-10">
              <div className="accordion" id="familyAccordion">
                <div className="card">
                  <div className="card-header" id="speciesOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Species Family #1
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="speciesOne" data-parent="#familyAccordion">
                    <div className="card-body">
                      <label for="basic-url">Species</label>
                      <div class="input-group input-group-lg mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="speciesText1">Species #1</span>
                        </div>
                        <div class="input-group-text">
                          <input type="checkbox" aria-label="Checkbox for following text input"></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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