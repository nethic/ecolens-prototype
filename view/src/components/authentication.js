
import React from "react";

class Authentication extends React.Component {

    render() {
        return (
            <div>
                <button className="btn btn-lg btn-primary m-5" onClick={this.props.authClick}>Authenticate</button>
            </div>
        );
    }
}

export default Authentication;
