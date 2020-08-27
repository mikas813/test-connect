import React, { Component } from 'react'
import { FiUser, FiEdit2, FiBookOpen } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'

export default class BlogDetailsFormField extends Component {
    render() {
        return (
            <>
                <div className="comment-form padding-top-55px">
                    <div className="user-form">
                        <div className="section-heading">
                            <h2 className="section__title font-size-22">Leave a Comment</h2>
                        </div>
                        <div className="contact-form-action mt-4">
                            <form method="post">
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
                                        <button className="template-btn border-0 w-100" type="submit">Submit comment</button>
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
