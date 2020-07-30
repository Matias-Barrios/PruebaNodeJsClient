import React, { Component } from 'react'
import { connect } from "react-redux";

class ResponseArea extends Component {
    render() {
        console.log("rendering!!")
        return (
            <div className="container">
                <div className="row app_responsearea">
                    <p>{this.props.response}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    response : state.response
});

export default connect(mapStateToProps,null)(ResponseArea)
