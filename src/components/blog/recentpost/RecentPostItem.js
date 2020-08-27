import React, { Component } from 'react'
import PropTypes from "prop-types";
import { BlogConsumer } from '../../../context'
import { Link } from 'react-router-dom'

export default class RecentPostItem extends Component {
    render() {
        const { id, name, img, author, authorurl, date } = this.props.blog;
        return (
            <BlogConsumer>
                {(value) => (
                    <div className="recent-item align-items-center">
                        <div className="recent-img">
                            <Link to="/blog-details" onClick={() =>
                                value.handleDetails(id)
                            }>
                                <img src={img} alt="blog Sidebar" />
                            </Link>
                        </div>
                        <div className="recent-post-body">
                            <h4 className="widget-title">
                                <Link to="/blog-details" onClick={() =>
                                    value.handleDetails(id)
                                }>
                                    {name}
                                </Link>
                            </h4>
                            <p className="recent__meta">By <a href={authorurl}>{author}</a> {date} </p>
                        </div>
                    </div>
                )}
            </BlogConsumer>
        )
    }
}


RecentPostItem.propTypes = {
    blog: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        time: PropTypes.string,
        author: PropTypes.string,
        authorurl: PropTypes.string,
        date: PropTypes.string,
    }).isRequired
};