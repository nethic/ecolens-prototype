import React from "react";

class SpeciesFamily extends React.Component {
  render() {
    const families = this.props.families;

    const familyIDs = families.map((family) => 
      `#${family}`
    );

    const cards = families.map((family, index) =>
      <div className="card" key={index}>
        <div className="card-header" id="speciesOne">
          <h5 className="mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target={familyIDs[index]} aria-expanded="true" aria-controls="collapseOne">
              {family};
        </button>
          </h5>
        </div>
        <div id={family} className="collapse show" aria-labelledby="speciesOne" data-parent="#familyAccordion">
          <div className="card-body">
            <label htmlFor="basic-url">Species</label>
            <div className="input-group input-group-lg mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="speciesText1">Species #1</span>
              </div>
              <div className="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div className="accordion" id="familyAccordion">
        {cards};
      </div>
    );
  }
}

export default SpeciesFamily;