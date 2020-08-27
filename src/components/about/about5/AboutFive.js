import React, { Component } from 'react'
import About5Left from './About5Left'
import About5Right from './About5Right'

export default class about5 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <About5Left />
                    <About5Right />
                </div>
            </div>
        )
    }
}
