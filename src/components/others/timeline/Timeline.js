import React, { Component } from 'react'
import TimelineContent from './TimelineContent'

export default class Timeline extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-8 mx-auto">
                            <TimelineContent />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
