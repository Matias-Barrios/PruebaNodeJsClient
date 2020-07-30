import React, { Component } from 'react'
import header_image from './assets/header_image.png'
import header_title from './assets/app_title.png'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container app_header">
                <div className="row">
                    <img className="header_image" src={header_image} />
                    <img className="header_title" src={header_title} />
                </div>
            </div>
        )
    }
}
