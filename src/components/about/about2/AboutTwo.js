import React, { Component } from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'

export default class AboutTwo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <AboutLeft />
                    <AboutRight />
                </div>
            </div>
        )
    }
}
