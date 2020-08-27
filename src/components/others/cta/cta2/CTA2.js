import React, { Component } from 'react'
import CTA2Left from './CTA2Left'
import CTA2Right from './CTA2Right'

export default class CTA2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row align-items-center">
                    <CTA2Left />
                    <CTA2Right />
                </div>
            </div>
        )
    }
}
