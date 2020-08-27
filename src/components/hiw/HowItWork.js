import React, { Component } from 'react'
import InfoBoxes from './InfoBoxes'

export default class HowItWork extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5 d-flex justify-content-around">
                    <InfoBoxes />
                </div>
            </div>
        )
    }
}
