import React, { Component } from 'react'
import AboutOneTop from './AboutOneTop'
import AboutOneBottom from './AboutOneBottom'
import AboutOneBottom2 from './AboutOneBottom2'

export default class AboutOne extends Component {
    render() {
        return (
            <div className="container">
                <AboutOneTop />
                <AboutOneBottom />
                <AboutOneBottom2 />
            </div>
        )
    }
}
