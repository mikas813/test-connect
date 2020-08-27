import React, { Component } from 'react'
import { BlogConsumer } from '../../../context'
import { Link } from 'react-router-dom';
import { FiClock, FiUser, FiCalendar } from 'react-icons/fi';
import BlogDetailsRelatedNews from './BlogDetailsRelatedNews';
import BlogDetailsComment from './BlogDetailsComment';
import BlogDetailsFormField from './BlogDetailsFormField';
import BlogDetailsShare from './BlogDetailsShare';

export default class BlogDetailsContent extends Component {
    render() {
        return (
            <BlogConsumer>
                {(value) => {
                    const { name, img, blockquoteName, blockquoteSkills, blockquote, description3, description2, description, time, date, author, authorurl, tags } = value.detailBlog;
                    return (
                        <>
                            <div className="card-item blog-card-detail">
                                <div className="card-img-box">
                                    <img src={img} alt="Blog Details" />
                                </div>
                                <div className="card-content">
                                    <h4 className="card-meta">
                                        <FiClock className="clock" /> {time}
                                    </h4>
                                    <h3 className="card-title">
                                        <Link to="#">
                                            {name}
                                        </Link>
                                    </h3>
                                    <ul className="list-items">
                                        <li className="card-dot-active">
                                            <FiUser className="user" />By <a href={authorurl}>{author} </a></li>
                                        <li><FiCalendar className="calendar" /> {date}</li>
                                    </ul>
                                    {description ? (
                                        <p className="card-desc mb-3">{description}</p>
                                    ) : " "}
                                    {description2 ? (
                                        <p className="card-desc">{description2}</p>
                                    ) : " "}

                                    <div className="blockquote-item mt-4 mb-4">
                                        <blockquote className="mb-0">
                                            <i className="fa fa-quote-right blockquote__icon"></i>
                                            {blockquote ? (
                                                <p className="blockquote__text">{blockquote}</p>
                                            ) : " "}
                                            <h4 className="blockquote__meta">{blockquoteName} <span>{blockquoteSkills}</span></h4>
                                        </blockquote>
                                    </div>
                                    {description3 ? (
                                        <p className="card-desc">{description3}</p>
                                    ) : " "}
                                    <div className="tag-items mt-4">
                                        {/* <BlogDetailsTags /> */}
                                        <ul className="tag-list">
                                            <li className="font-weight-medium text-color mr-2">Tags:</li>
                                            {tags.map((item, index) => {
                                                return (
                                                    <li key={index}><Link to="#" className="rounded-radius">{item}</Link></li>
                                                )
                                            })}
                                        </ul>

                                        <BlogDetailsShare />
                                    </div>
                                </div>
                            </div>

                            {/* Related Post */}
                            <BlogDetailsRelatedNews />

                            {/* Comment */}
                            <BlogDetailsComment />

                            {/* Comment Form Fields */}
                            <BlogDetailsFormField />
                        </>
                    )

                }}
            </BlogConsumer>
        )
    }
}
