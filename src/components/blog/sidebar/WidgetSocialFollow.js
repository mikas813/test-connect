import React, { Component } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBehance } from 'react-icons/fa'

export default class WidgetSocialFollow extends Component {
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <h3 className="widget-title">Follow &amp; Connect</h3>
                    <div className="section-divider"></div>
                    <ul className="social-links mt-4">
                        <li><a href="https://facebook.com"><FaFacebookF /></a></li>
                        <li><a href="https://twitter.com"><FaTwitter /></a></li>
                        <li><a href="https://instagram.com"><FaInstagram /></a></li>
                        <li><a href="https://linkedin.com"><FaLinkedinIn /></a></li>
                        <li><a href="https://www.behance.net/"><FaBehance /></a></li>
                    </ul>
                </div>
            </>
        )
    }
}
