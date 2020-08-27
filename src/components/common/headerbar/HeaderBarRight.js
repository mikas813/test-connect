import React, { Component } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default class HeaderBarRight extends Component {
    render() {
        return (
            <>
                <div className="col-lg-6 col-sm-6">
                    <div className="header-top-content text-right">
                        <ul className="social-links">
                            <li><a href="https://facebook.com"><FaFacebookF /></a></li>
                            <li><a href="https://twitter.com"><FaTwitter /></a></li>
                            <li><a href="https://instagram.com"><FaInstagram /></a></li>
                            <li><a href="https://linkedin.com"><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
