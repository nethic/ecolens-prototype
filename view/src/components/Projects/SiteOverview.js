
import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class SiteOverview extends React.Component {

    state = {
        yearList: []
    }

    async componentDidMount() {
        await axios.get('/site/years/view', {
            params: {
                siteID: this.props.siteID
            }
        }).then(res => {
            this.setState({ yearList: res.data });
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <form className="">
                            <div className="form-group d-flex flex-row m-5">
                                <button className="btn btn-success">Add Current Year</button>
                            </div>
                            <div className="d-flex flex-column m-5">
                                <h2 className="">Study Years</h2>
                                {
                                    this.state.yearList.map(year => {
                                        return <Link to="/inventory" key={this.props.siteID+"-"+year.DISTINCT}>
                                            <button className="btn btn-success my-2 w-50" id={year.DISTINCT} key={year.DISTINCT}>{year.DISTINCT}</button>
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

export default SiteOverview;