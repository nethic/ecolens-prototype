
import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class SiteOverview extends React.Component {

    state = {
        yearList: [],
        yearToAdd: 0
    }

    componentDidMount() {
        this.getYearList();
    }

    getYearList = () => {
        axios.get('/site/years/view', {
            params: {
                siteID: this.props.siteID
            }
        }).then(res => {
            let yearArr = res.data.map(year => {
                return year.DISTINCT;
            });
            this.setState({ yearList: yearArr });
        });
    }

    handleYearInput = (event) => {
        this.setState({ yearToAdd: event.target.value });
    }

    handleAddYear = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            yearList: [...prevState.yearList, this.state.yearToAdd]
        }));
    }

    render() {
        return (
            <div className="container-fluid mb-5">

                <div className="row">
                    <div className="col">
                        <form className="d-flex flex-column">
                            <h2 className="mx-auto my-5">Study Years</h2>
                            <div className="form-group d-flex flex-row">
                                <input type="text" className="form-control mx-1" id="newYear" aria-describedby="newYear" placeholder="New study year" value={this.state.value} onChange={this.handleYearInput} />
                                <button className="btn btn-success" onClick={this.handleAddYear}>Add Year</button>
                            </div>
                            <div className="d-flex flex-column m-3">
                                {
                                    this.state.yearList.map(year => {
                                        return <Link to="/inventory" key={this.props.siteID + "-" + year} className="mx-auto my-2 w-75">
                                            <button className="btn btn-success w-100" id={year} key={year} onClick={this.props.loadInventory}>{year}</button>
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