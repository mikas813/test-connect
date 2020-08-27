import React, { Component } from 'react'
import About3Left from './About3Left'
import About3Right from './About3Right'

export default class AboutThree extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <About3Left />
                    <About3Right />
                </div>
            </div>
        )
    }
}
