import React from "react";
import Species from "./Species.js";

class SpeciesFamily extends React.Component {
  render() {
    const families = this.props.families;
    const speciesSet = this.props.speciesSet;

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
          <Species speciesSet={speciesSet} />
        </div>
      </div>
    );

    return (
      <div className="accordion" id="familyAccordion">
        {cards};
      </div>
    )
  }
}

export default SpeciesFamily;