import React, { Component } from 'react'
import FunFactItems from './FunFactItems'

export default class FunFacts extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <FunFactItems />
                </div>
            </div>
        )
    }
}
