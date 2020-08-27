import React, { Component } from 'react'
import DoctorItems from './DoctorItems'

export default class Doctor extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <DoctorItems />
                </div>
            </div>
        )
    }
}
