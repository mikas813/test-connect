import React, { Component } from 'react'
import Service2Left from './Service2Left'
import Service2Right from './Service2Right'

export default class ServiceTwo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row padding-top-100px">
                    <Service2Left />
                    <Service2Right />
                </div>
            </div>
        )
    }
}
