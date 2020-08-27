import React, { Component } from 'react'
import AboutSixContent from './AboutSixContent'

export default class AboutSix extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-8 mx-auto">
                            <AboutSixContent />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
