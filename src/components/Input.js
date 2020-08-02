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
                <div className="row app_input">
                        <label id="mainLabel" className="app_label">Please input a text and be ready to be amazed by the power of receiving it back!!</label>
                        <textarea value={this.state.data} className="form-control" onChange={this.updateData} />
                        <p><button id="submit_button" type="button" className="btn btn-success app_btn" onClick={this.onSubmit}>Let's Go</button></p>
                </div>
        )
    }
}


export default connect(null,{ updateResponse })(Input)




