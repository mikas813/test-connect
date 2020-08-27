import React, { Component } from 'react'
import SectionTitle from '../../common/SectionTitle'
import { FaGoogle, FaFacebookF, FaTwitter, FaRegEnvelope } from 'react-icons/fa'
import { FiUser, FiLock } from 'react-icons/fi'

export default class SignUpForm extends Component {
    render() {
        return (
            <>
                <div className="login-form">
                    <div className="user-form">
                        <SectionTitle title="Create Your Account!" subtitle="Build Account">
                            <p className="font-size-16 mt-2">
                                with your social network, Note: Costar will never <br />
                                    post content to your social pages.
                            </p>
                        </SectionTitle>
                        <div className="contact-form-action mt-4">
                            <form method="post">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <button className="template-btn btn-bg-1 border-0 w-100" type="submit">
                                                <FaGoogle className="mr-2" />Google
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <button className="template-btn btn-bg-2 border-0 w-100" type="submit">
                                                <FaFacebookF className="mr-2" />Facebook
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <button className="template-btn btn-bg-3 border-0 w-100" type="submit">
                                                <FaTwitter className="mr-2" /> Twitter
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="account-assist mt-4 mb-4 text-center">
                                            <p className="account__desc">or</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="text" placeholder="First name" />
                                                <FaRegEnvelope className="input-icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="text" placeholder="Last name" />
                                                <FiUser className="input-icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <div className="form-group">
                                                <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                                <FaRegEnvelope className="input-icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="text" placeholder="Password" />
                                                <FiLock className="input-icon" />
                                                <span className="mt-1 font-size-14">Must use 8-15 characters and one number or symbol.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <div className="form-group">
                                                <input className="form-control" type="text" name="text" placeholder="Confirm password" />
                                                <FiLock className="input-icon" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="input-box">
                                            <div className="form-group">
                                                <div className="custom-checkbox d-block mr-0">
                                                    <input type="checkbox" id="chb3" />
                                                    <label htmlFor="chb3">I Agree to Costar's <a href="https://techydevs.com" className="color-text">Privacy Policy</a></label>
                                                </div>
                                                <div className="custom-checkbox d-block mr-0">
                                                    <input type="checkbox" id="chb4" />
                                                    <label htmlFor="chb4">I Agree to Costar's <a href="https://techydevs.com" className="color-text">Terms of Services</a>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="btn-box">
                                            <div className="form-group text-center mb-0">
                                                <button className="template-btn border-0 w-100" type="submit">Create my account</button>
                                            </div>
                                        </div>
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
