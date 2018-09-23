import React from "react";

class Species extends React.Component {
  render() {
    const speciesSet = this.props.speciesSet;

    const cardBody = speciesSet.map((species, index) =>
      <div className="card-body" key={index}>
        <div className="input-group input-group-lg mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id={species}>{species}</span>
          </div>
          <div className="input-group-text">
            <input type="checkbox" aria-label="Checkbox for following text input"></input>
          </div>
        </div>
      </div>
    );

    return (
      <div className="card-body">
        {cardBody};
      </div>
    );
  }
}

export default Species;