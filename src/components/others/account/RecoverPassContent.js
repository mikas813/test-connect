import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaRegEnvelope } from 'react-icons/fa'

export default class RecoverPassContent extends Component {
    render() {
        return (
            <>
                <div className="user-form">
                    <h2 className="widget-title font-size-30">Reset Password!</h2>
                    <div className="section-description pt-3">
                        <p className="section__desc font-size-16">
                            Enter the email of your account to reset password.
                            Then you will receive a link to email to reset the
                            password.If you have any issue about reset password <Link to="/contact" className="text-color-2">contact us</Link>
                        </p>
                    </div>
                    <div className="contact-form-action">
                        <form method="post">
                            <div className="input-box">
                                <div className="form-group">
                                    <input className="form-control" type="email" name="email" placeholder="Enter email address" />
                                    <FaRegEnvelope className="input-icon" />
                                </div>
                            </div>
                            <div className="input-box">
                                <div className="form-group">
                                    <button className="template-btn border-0" type="submit">reset password</button>
                                </div>
                            </div>
                            <div className="account-action d-flex align-items-center justify-content-between">
                                <p className="font-size-16"><Link to="/login">login</Link></p>
                                <p className="font-size-16">Not a member?
                                    <Link to="/signin"> Register</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
