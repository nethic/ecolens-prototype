import React from "react";
import axios from "axios";
import SpeciesFamily from "./SpeciesFamily.js";
import Species from "./Species.js";
import "./Inventory.css";

class Inventory extends React.Component {

  state = {
    siteID: 1,
    studyYear: 2017,
    inventoryList: [],
    speciesList:[],
    found:[],
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
  }


  handleSearch = event =>{
    
      let val = event.target.value
      let arr = this.state.speciesList
      let found = [];
      if(val.length>1){
          for (var i = 0; i < arr.length; i++) {
            if (arr[i][1].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
              found.push(arr[i])
        }
      }
      this.setState({found: found})
      event.preventDefault();
    }
      event.preventDefault();
      
  }

  resetSearch(e) {
    this.setState({found:[]});
    e.preventDefault();
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

     


        <div className="row m-5">
          <div className="col flora-title">
            <h3>Flora Inventory</h3>
          </div>
        </div>

        <div className="row m-5">
          <div className="col">
            <div className="input-group input-group-lg">
            <input type="text" id="myInput" value={this.state.value} className="form-control" onChange={this.handleSearch} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
                
              <div className="input-group-prepend">
                <span className="input-group-text text-white" id="inputGroup-sizing-lg" onClick={this.resetSearch}>Search Flora</span>
              </div>
            
            </div>
          </div>
        </div>

        <div className="row m-5">
          <div className="col">
            <div id="accordion">
            {
                  this.state.found.map(species => {
                    
                    return <Species species={species} key={species[0]} handleSpeciesCheck={this.handleSpeciesCheck} />
                  })
              }
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