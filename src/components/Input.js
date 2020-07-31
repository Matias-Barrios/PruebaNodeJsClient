import React, { Component } from 'react'
import { connect } from "react-redux";
import { updateResponse } from "../actions/index";


class Input extends Component {

    payload = '';

    constructor(props) {
        super(props);
        this.state = {
            data: props.value
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    onSubmit(e) {
       this.props.updateResponse(this.state.data)
    }
    updateData(e) {
        this.setState({ data: e.target.value });
    }
    render() {
        return (
                <div className="row">
                    <div className="form-group app_input">
                        <label className="app_label">Please input a text and be ready to be amazed by the power of receiving it back!!</label>
                        <textarea className="form-control" onChange={this.updateData}></textarea>
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




