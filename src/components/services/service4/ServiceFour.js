import React, { Component } from 'react'
import ServiceFourItems from './ServiceFourItems'

export default class ServiceFour extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row mt-5 align-items-center">
                        <ServiceFourItems />
                    </div>
                </div>
            </>
        )
    }
}
