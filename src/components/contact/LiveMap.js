import React, { Component } from 'react'

export default class LiveMap extends Component {
    render() {
        return (
            <>
                <iframe title="Live Map"
                        className="maps" src="https://coronavirus.app/map?embed=true"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </>
        )
    }
}
