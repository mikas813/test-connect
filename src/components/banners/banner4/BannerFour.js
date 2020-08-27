import React, { Component } from 'react'
import BannerFourLeft from './BannerFourLeft'
import BannerFourRight from './BannerFourRight'

export default class BannerFour extends Component {
    render() {
        return (
            <>
                <div className="single-slide-item ripple-bg slide-bg1 banner-item-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <BannerFourLeft />
                            <BannerFourRight />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
