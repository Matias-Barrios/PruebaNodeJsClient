import React, { Component } from 'react'
import { connect } from "react-redux";

export default class ResponseArea extends Component {
    constructor(props) {
        super(props);
        
    }

    mapStateToProps = state => {
        return { response: state.articles };
    };

    render() {
        return (
            <div className="container">
                <div className="row app_responsearea">
                    <p>{this.props}</p>
                </div>
            </div>
        )
    }
}


