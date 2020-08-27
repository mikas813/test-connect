import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class FooterWidget4 extends Component {
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="footer-widget">
                        <h3 className="widget-title">Contact Us</h3>
                        <div className="section-divider"></div>
                        <ul className="list-items">
                            <li>
                                <span className="mr-1 font-weight-medium text-color">Address:</span>
                                2750 Quadra Street Victoria, Canada.
                            </li>
                            <li>
                                <span className="mr-1 font-weight-medium text-color">Email:</span>
                                <Link to="#">hello@example.com</Link>
                            </li>
                            <li>
                                <span className="mr-1 font-weight-medium text-color">Phone:</span>
                                <Link to="#">+44 587 154756</Link>
                            </li>
                            <li>
                                <span className="mr-1 font-weight-medium text-color">Fax:</span>
                                <Link to="#">+55 785 4578964</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
