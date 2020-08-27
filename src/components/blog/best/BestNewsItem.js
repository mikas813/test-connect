import React, { Component } from 'react'
import PropTypes from "prop-types";
import { BlogConsumer } from '../../../context'
import { FiCalendar } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default class BestNewsItem extends Component {
    render() {
        const { id, name, img, time, date } = this.props.blog;
        return (
            <BlogConsumer>
                {(value) => (
                    <div className="card-item card-layout-2 align-items-center">
                        <div className="card-img-box">
                            <img src={img} alt="Blog" />
                        </div>
                        <div className="card-content">
                            <ul className="list-items">
                                <li className="card-dot-active"><span className="la close"></span>{time}</li>
                                <li><FiCalendar /> {date}</li>
                            </ul>
                            <h3 className="card-title">
                                <Link
                                    to="/blog-details" onClick={() =>
                                        value.handleDetails(id)
                                    }>{name}</Link>
                            </h3>
                        </div>
                    </div>
                )}
            </BlogConsumer>
        )
    }
}

BestNewsItem.propTypes = {
    blog: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        time: PropTypes.string,
        date: PropTypes.string,
    }).isRequired
};