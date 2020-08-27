import React, { Component } from 'react'
import LiveMap from '../LiveMap'

export default class MapOne extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="map-container">
                            <LiveMap />
                            <h3 className="widget-title pt-3">Note: If you want to see the data you hover on the red circle
                            bubble</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
