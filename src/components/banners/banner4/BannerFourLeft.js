import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BannerFourLeft extends Component {
    render() {
        return (
            <>
                <div className="col-lg-6">
                    <div className="banner-content">
                        <div className="section-heading">
                            <h2 className="section__title mt-0">How to Protect Yourself From Coronavirus (COVID-19)</h2>
                        </div>
                        <div className="section-description">
                            <p className="section__desc">
                                Distinctiv enable adaptive niche markets without principle-centered sourcesn
                                Collaborati develop impactful
                                materials awesome
                                </p>
                        </div>
                        <div className="btn-box hero-btn-box hero-btn-box-2">
                            <Link to="/prevention" className="template-btn mr-2">check suggestions</Link>
                            <Link to="/about" className="template-btn">about COVID-19</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
