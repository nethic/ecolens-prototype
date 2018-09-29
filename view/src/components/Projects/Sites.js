
import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class Sites extends React.Component {

    state = {
        siteList: [],
        siteToAdd: ''
    }

    async componentDidMount() {
        await axios.get('/sites/view').then(res => {
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <form className="">
                            <div className="form-group d-flex flex-row m-5">
                                <input type="" className="form-control" id="newSite" aria-describedby="newSite" placeholder="Enter a new site name" value={this.state.value} onChange={this.handleSiteInput} />
                                <button className="btn btn-success" onClick={this.handleAddSite}>Add Site</button>
                            </div>
                            <div className="d-flex flex-column m-5">
                                <h2 className="">Study Sites</h2>
                                {
                                    this.state.siteList.map(site => {
                                        return <Link to="/site" key={site.siteID} className="w-50">
                                            <button className="btn btn-success my-2 w-100" id={site.siteID} key={site.siteID} onClick={this.props.handleSiteID}>{site.siteName}</button>
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