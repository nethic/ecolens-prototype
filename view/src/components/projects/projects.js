
import React from "react";
import axios from "axios";

class Projects extends React.Component {

  state = {
    siteList: [],
    siteID: 1,
    studyYear: 2017
  }

  async componentDidMount() {
    await axios.get('/sites/view').then(res => {
        this.setState({ siteList: res.data });
    });
  }

    handleNewSite(event) {
        this.setState({ siteID: event.target.id });
    }

    loadSite = () => {
        axios.get('/flora/inventory/')
    }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <div className="col">
                <form className="m-5">
                    <div className="form-group d-flex flex-row">
                        <input type="" className="form-control" id="newSite" aria-describedby="newSite" placeholder="Enter a new site name" />
                        <button className="btn btn-success">Add Site</button>
                    </div>
                    <div className="m-5">
                    <h2 className="m-5">Existing Sites</h2>
                        {
                            this.state.siteList.map(site => {
                                return <button className="btn btn-success my-2" id={site.siteID} key={site.siteID} onClick={this.loadSite}>{site.siteName}</button>
                            })
                        }
                    </div>
                </form>
            </div>
        </div>
      </div>
    );
  }
}

export default Projects;