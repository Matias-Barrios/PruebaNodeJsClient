import React, { Component } from 'react'
import { connect } from "react-redux";

class ResponseArea extends Component {
    render() {
        return (
                <div className="row app_responsearea">
                    <textarea className="app_responsetextarea" disabled value={this.props.response}> </textarea>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    response : state.response
});

export default connect(mapStateToProps,null)(ResponseArea)
