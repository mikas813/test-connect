import React, { Component } from 'react'
import ServiceInfoBoxes from './ServiceInfoBoxes'

export default class ServiceOne extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <ServiceInfoBoxes />
                </div>
            </div>
        )
    }
}
