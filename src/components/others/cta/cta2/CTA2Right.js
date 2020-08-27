import React, { Component } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default class CTA2Right extends Component {
    render() {
        return (
            <>
                <div className="col-lg-5">
                    <div className="emergency-wrap">
                        <div className="btn-box text-right">
                            <h3 className="widget-title font-size-16 padding-bottom-15px text-white">Emergency Contact</h3>
                            <Link to="#" className="template-btn contact-btn">
                                <span className="icon-element"><FiPhoneCall /></span>
                            (91) 8547 632521
                        </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
