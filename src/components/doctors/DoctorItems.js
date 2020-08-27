import React, { Component } from 'react'
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'

export default class DoctorItems extends Component {
    doctors = {
        items: [
            {
                image: "images/team.jpg",
                social: [
                    {
                        icon: <FiFacebook />,
                        url: "https://facebook.com"
                    },
                    {
                        icon: <FiTwitter />,
                        url: "https://twitter.com"
                    },
                    {
                        icon: <FiLinkedin />,
                        url: "https://linkedin.com"
                    },
                    {
                        icon: <FiInstagram />,
                        url: "https://instagram.com"
                    }
                ],
                name: "Dr. Alex smith",
                designation: "Throat Specialist",
                description: "Libero perspiciatis sequi delectus, maxime, voluptatum minima nam amet ultrices"
            },
            {
                image: "images/team2.jpg",
                social: [
                    {
                        icon: <FiFacebook />,
                        url: "https://facebook.com"
                    },
                    {
                        icon: <FiTwitter />,
                        url: "https://twitter.com"
                    },
                    {
                        icon: <FiLinkedin />,
                        url: "https://linkedin.com"
                    },
                    {
                        icon: <FiInstagram />,
                        url: "https://instagram.com"
                    }
                ],
                name: "Dr. Peter Thomas",
                designation: "Cardiologist",
                description: "Libero perspiciatis sequi delectus, maxime, voluptatum minima nam amet ultrices"
            },
            {
                image: "images/team3.jpg",
                social: [
                    {
                        icon: <FiFacebook />,
                        url: "https://facebook.com"
                    },
                    {
                        icon: <FiTwitter />,
                        url: "https://twitter.com"
                    },
                    {
                        icon: <FiLinkedin />,
                        url: "https://linkedin.com"
                    },
                    {
                        icon: <FiInstagram />,
                        url: "https://instagram.com"
                    }
                ],
                name: "Dr. Alex Smith",
                designation: "Rehabilitation Therapy",
                description: "Libero perspiciatis sequi delectus, maxime, voluptatum minima nam amet ultrices"
            },
            {
                image: "images/team4.jpg",
                social: [
                    {
                        icon: <FiFacebook />,
                        url: "https://facebook.com"
                    },
                    {
                        icon: <FiTwitter />,
                        url: "https://twitter.com"
                    },
                    {
                        icon: <FiLinkedin />,
                        url: "https://linkedin.com"
                    },
                    {
                        icon: <FiInstagram />,
                        url: "https://instagram.com"
                    }
                ],
                name: "Dr. Richard Smith",
                designation: "Throat Specialist",
                description: "Libero perspiciatis sequi delectus, maxime, voluptatum minima nam amet ultrices"
            }
        ]
    }
    render() {
        return (
            <>
                {this.doctors.items.map((item, index) => {
                    return (
                        <div className="col-lg-6" key={index}>
                            <div className="team-item">
                                <div className="team-avatar">
                                    <img src={item.image} alt="Doctor" />
                                    <div className="team-social">
                                        <ul className="social-links">
                                            {item.social.map((link, index) => {
                                                return (
                                                    <li key={index}>
                                                        <a href={link.url}>{link.icon}</a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-detail">
                                    <h3 className="team__title">
                                        <a href="/doctor-details">{item.name}</a>
                                    </h3>
                                    <p className="team__meta">{item.designation}</p>
                                    <div lass="section-block"></div>
                                    <p className="team__meta pt-3">
                                        {item.description}
                                    </p>
                                    <div className="btn-box pt-2">
                                        <a href="/doctor-details" className="template-btn">view profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}
