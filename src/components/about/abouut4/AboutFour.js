import React, { Component } from 'react'
import AboutOneTop from '../about1/AboutOneTop'
import AboutFourLeft from './AboutFourLeft'

export default class AboutFour extends Component {
    render() {
        return (
            <div className="container">
                <AboutOneTop />
                <AboutFourLeft />
            </div>
        )
    }
}
