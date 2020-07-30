import React, { Component } from 'react'

export default class Input extends Component {

    onSubmit(e) {
        
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
                <button type="button" class="btn btn-success app_btn">Submit 'em cowboy!</button>
            </div>
        )
    }
}




