import React, { Component } from 'react'
import PropTypes from "prop-types";
import { BlogConsumer } from '../../../../context'
import { Link } from 'react-router-dom'
import { FiClock, FiUser, FiCalendar } from 'react-icons/fi'

export default class DoctorBlogItem extends Component {
    render() {
        const { id, name, img, time, author, authorurl, date } = this.props.blog;
        return (
            <BlogConsumer>
                {(value) => (
                    <div className="col-lg-6">
                        <div className="card-item">
                            <div className="card-img-box">
                                <img src={img} alt="Blog" />
                            </div>
                            <div className="card-content">
                                <h4 className="card-meta"> <FiClock className="clock" /> {time}</h4>
                                <h3 className="card-title">
                                    <Link
                                        to="/blog-details" onClick={() =>
                                            value.handleDetails(id)
                                        }>{name}</Link>
                                </h3>
                                <ul className="list-items">
                                    <li className="card-dot-active">
                                        <FiUser className="user" />By <a href={authorurl}>{author}
                                        </a></li>
                                    <li><FiCalendar className="calendar" /> {date}</li>
                                </ul>
                                <Link to="/blog-details"
                                    className="template-btn btn-layout-small" onClick={() =>
                                        value.handleDetails(id)
                                    }>read more</Link>
                            </div>
                        </div>
                    </div>
                )}
            </BlogConsumer>
        )
    }
}


DoctorBlogItem.propTypes = {
    blog: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        time: PropTypes.string,
        author: PropTypes.string,
        authorurl: PropTypes.string,
        date: PropTypes.string,
    }).isRequired
};