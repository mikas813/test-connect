import React, { Component } from 'react'
import { FiPhone } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class HeaderBarLeft extends Component {
    render() {
        return (
            <>
                <div className="col-lg-6 col-sm-6">
                    <div className="header-top-content">
                        <ul className="list-items">
                            <li><Link to="#"><span className="la"><FiPhone /></span> (123) 123-456</Link></li>
                            <li><Link to="#"><span className="la"><FaRegEnvelope /></span> costar@example.com</Link></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
