
import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class Sites extends React.Component {

    state = {
        siteList: [],
        siteToAdd: ''
    }

    componentDidMount() {
        axios.get('/sites/view').then(res => {
            this.setState({ siteList: res.data });
        });
    }

    handleSiteInput = (event) => {
        this.setState({ siteToAdd: event.target.value });
    }

    handleAddSite = () => {
        axios.post('/site/add', {
            siteName: this.state.siteToAdd
        });
    }

    render() {
        return (
            <div className="container-fluid mb-5">

                <div className="row">
                    <div className="col">
                        <form className="d-flex flex-column">
                            <h2 className="mx-auto my-4">Study Sites</h2>
                            <div className="form-group d-flex flex-row">
                                <input type="text" className="form-control mx-1" id="newSite" aria-describedby="newSite" placeholder="New site name" value={this.state.value} onChange={this.handleSiteInput} />
                                <button className="btn btn-success" onClick={this.handleAddSite}>Add Site</button>
                            </div>
                            <div className="d-flex flex-column m-3">
                                {Array.isArray(this.state.siteList) &&
                                    this.state.siteList.map(site => {
                                        return <Link to="/site" key={site.siteID} className="mx-auto my-2 w-75">
                                            <button className="btn btn-success w-100" id={site.siteID} key={site.siteID} onClick={this.props.handleSiteID}>{site.siteName}</button>
                                        </Link>
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

export default Sites;