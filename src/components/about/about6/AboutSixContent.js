import React, { Component } from 'react'

export default class AboutSixContent extends Component {
    render() {
        return (
            <>
                <div className="service-item corona-detail-wrap">
                    <div className="corona-img">
                        <img src="images/corona-virus.jpg" alt="Coronavirus" />
                    </div>
                    <div className="corona-detail">
                        <ul className="list-items mb-3">
                            <li>'CO' Stands for corona</li>
                            <li>'VI' for Virus</li>
                            <li>'D' for Disease</li>
                            <li>'19' for 2019 - the year it was first identified</li>
                        </ul>
                        <div className="section-block"></div>
                        <p className="pt-3">Source: World Health Organization</p>
                    </div>
                </div>
            </>
        )
    }
}
