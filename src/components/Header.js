import React, { Component } from 'react'
import header_image from './assets/header_image.png'
import header_title from './assets/app_title.png'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app_header">
                <div className="row">
                    <img id="logo" className="header_image" src={header_image} />
                    <img id="app_title" className="header_title" src={header_title} />
                </div>
            </div>
        )
    }
}
