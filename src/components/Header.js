import React, { Component } from 'react'
import header_image from './assets/header_image.png'
import header_title from './assets/app_title.png'

export default class Header extends Component {
    render() {
        return (
            <div class="container app_header">
                <div class="row">
                    <img className="header_image" src={header_image} />
                    <img className="header_title" src={header_title} />
                </div>
            </div>
        )
    }
}
