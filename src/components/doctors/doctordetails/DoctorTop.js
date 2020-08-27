import React, { Component } from 'react'
import { FiCircle } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class DoctorTop extends Component {
    educations = {
        items: [
            {
                title: "MBBS, MS, DORL University of California, San Francisco"
            },
            {
                title: "FCPS, Sheikh Mujib Medical Univeristy"
            }
        ]
    }
    expertise = {
        items: [
            {
                title: "ENT - Ear"
            },
            {
                title: "Nose & Throat"
            },
            {
                title: "Head & Neck Surgeon"
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-single-img">
                            <img src="images/team7.jpg" alt="Doctor Details" className="team__img" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="team-single-content">
                            <div className="team-title-box">
                                <h3 className="widget-title font-size-26">Dr. Alex Smith</h3>
                                <span className="team-single__meta">Throat Specialist</span>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-6">
                                    <div className="author-content">
                                        <h3 className="widget-title font-size-16 pb-3">Areas of Expertise</h3>
                                        <ul className="list-items">
                                            {this.expertise.items.map((item, index) => {
                                                return (
                                                    <li key={index}><FiCircle className="text-color-2" /> {item.title}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="author-content">
                                        <h3 className="widget-title font-size-16 pb-3">Education</h3>
                                        <ul className="list-items">
                                            {this.educations.items.map((item, index) => {
                                                return (
                                                    <li key={index}><FiCircle className="text-color-2" /> {item.title}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="author-content author-box-social padding-top-20px">
                                        <h3 className="widget-title font-size-16 pb-3">Address</h3>
                                        <ul className="list-items">
                                            <li><Link to="#">hello@example.com</Link></li>
                                            <li><Link to="#">+44 587 154756</Link></li>
                                            <li><Link to="#">www.techydevs.com</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="author-content author-box-social padding-top-20px">
                                        <h3 className="widget-title font-size-16 pb-3">Social Profile</h3>
                                        <ul className="social-links">
                                            <li><a href="https://facebook.com"><FaFacebookF /></a></li>
                                            <li><a href="https://twitter.com"><FaTwitter /></a></li>
                                            <li><a href="https://instagram.com"><FaInstagram /></a></li>
                                            <li><a href="https://linkedin.com"><FaLinkedinIn /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
