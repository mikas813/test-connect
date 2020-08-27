import React, { Component } from 'react'
import { FaReply } from 'react-icons/fa'
import { FiRefreshCcw } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default class BlogDetailsComment extends Component {
    render() {
        return (
            <>
                <div className="comments-wrap mt-5">
                    <h2 className="widget-title font-size-22">4 Comments</h2>
                    <div className="title-shape"></div>
                    <ul className="comments-list padding-top-40px">
                        <li>
                            <div className="comment">
                                <img className="avatar__img" alt="Blog Details" src="images/small-team1.jpg" />
                                <div className="comment-body">
                                    <div className="meta-data">
                                        <span className="comment__author">adam smith</span>
                                        <span className="comment__date">17 Dec, 2018 - 4:00 AM</span>
                                    </div>
                                    <p className="comment-content">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation.
                                        Curabitur non nulla sit amet nisl tempus
                                    </p>
                                    <div className="comment-reply d-flex justify-content-between align-items-center">
                                        <Link className="template-btn comment__btn" to="#">
                                            <FaReply className="reply" /> Reply
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <ul className="comments-reply">
                                <li>
                                    <div className="comment">
                                        <img className="avatar__img" alt="Blog Details" src="images/small-team2.jpg" />
                                        <div className="comment-body">
                                            <div className="meta-data">
                                                <span className="comment__author">Julian Smith</span>
                                                <span className="comment__date">17 Dec, 2018 - 4:00 PM</span>
                                            </div>
                                            <p className="comment-content">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam.
                                                Curabitur non nulla sit amet nisl tempus
                                            </p>
                                            <div className="comment-reply d-flex justify-content-between align-items-center">
                                                <Link className="template-btn comment__btn" to="#">
                                                    <FaReply className="reply" /> Reply
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="comment">
                                <img className="avatar__img" alt="Blog Details" src="images/small-team3.jpg" />
                                <div className="comment-body">
                                    <div className="meta-data">
                                        <span className="comment__author">Matt Derry</span>
                                        <span className="comment__date">17 Dec, 2018 - 4:00 PM</span>
                                    </div>
                                    <p className="comment-content">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation.
                                        Curabitur non nulla sit amet nisl tempus
                                    </p>
                                    <div className="comment-reply d-flex justify-content-between align-items-center">
                                        <Link className="template-btn comment__btn" to="#">
                                            <FaReply className="reply" /> Reply
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="btn-box padding-top-20px text-center">
                        <button type="button" className="template-btn border-0">
                            <FiRefreshCcw className="refresh" /> Load More
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
