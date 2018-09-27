import React from "react";

class Species extends React.Component {

  render() {
    return (
      <div className="form-check">
        <form>
          <div className="form-row">
            <div className="col"></div>
            <div className="col-4 py-3">
              <label className="form-check-label" htmlFor={this.props.species[1]}>{this.props.species[1]}</label>
            </div>
            <div className="col-1 py-3">
              <input className="form-check-input" type="checkbox" value="" id={this.props.species[0]} onChange={this.props.handleSpeciesCheck} />
            </div>
            <div className="col"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default Species;