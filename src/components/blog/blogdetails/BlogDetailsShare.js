import React, { Component } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default class BlogDetailsShare extends Component {
    render() {
        return (
            <>
                <ul className="social-links mt-4">
                    <li className="font-weight-medium text-color mr-2">Share post:</li>
                    <li><a href="https://facebook.com"><FaFacebookF /></a></li>
                    <li><a href="https://twitter.com"><FaTwitter /></a></li>
                    <li><a href="https://instagram.com"><FaInstagram /></a></li>
                    <li><a href="https://linkedin.com"><FaLinkedinIn /></a></li>
                </ul>
            </>
        )
    }
}
