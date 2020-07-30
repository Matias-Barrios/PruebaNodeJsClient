import React, { Component } from 'react'
import { connect } from "react-redux";
import { updateResponse } from "../actions/index";


class Input extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
       console.log("caca");
       this.props.updateResponse("papas")
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="form-group app_input">
                        <label className="app_label">Please input a text and be ready to be amazed by the power of receiving it back!!</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <button 
                type="button" 
                className="btn btn-success app_btn"
                onClick={this.onSubmit}>Submit 'em cowboy!</button>
            </div>
        )
    }
}


export default connect(null,{ updateResponse })(Input)




