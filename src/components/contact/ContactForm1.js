import React, { Component } from 'react'
import SectionTitle from '../common/SectionTitle'
import { FiUser, FiBookOpen, FiEdit2 } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'

export default class ContactForm1 extends Component {
    render() {
        return (
            <>
                <div className="col-lg-5">
                    <div className="user-form remove-shape">
                        <SectionTitle subtitle="Get In Touch">
                            <h2 className="section__title font-size-20 font-weight-medium">Still Have Question? Contact with
                                us!</h2>
                        </SectionTitle>

                        <div className="contact-form-action mt-4">
                            <form>
                                <div className="input-box">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="name" placeholder="Your Name" />
                                        <FiUser className="input-icon" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <div className="form-group">
                                        <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                        <FaRegEnvelope className="input-icon" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="subject" placeholder="Subject" />
                                        <FiBookOpen className="input-icon" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <div className="form-group">
                                        <textarea className="message-control form-control" name="message" placeholder="Write Question Here"></textarea>
                                        <FiEdit2 className="input-icon" />
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <div className="form-group text-center mb-0">
                                        <button className="template-btn border-0 w-100" type="submit">Submit question?</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
