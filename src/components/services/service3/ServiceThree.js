import React, { Component } from 'react'
import Service3Left from './Service3Left'
import Service3Midle from './Service3Midle'
import Service3Right from './Service3Right'

export default class ServiceThree extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5 align-items-center">
                    <Service3Left />
                    <Service3Midle />
                    <Service3Right />
                </div>
            </div>
        )
    }
}
