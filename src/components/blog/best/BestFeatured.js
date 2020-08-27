import React, { Component } from 'react'
import BestFeaturedItem from './BestFeaturedItem'
import { BlogConsumer } from '../../../context'
import BestNewsItem from './BestNewsItem'
import { Link } from 'react-router-dom'

export default class BestFeatured extends Component {
    render() {
        return (
            <div className="container">
                <div className="row padding-top-35px">
                    <div className="col-lg-6">
                        <BlogConsumer>
                            {value => {
                                return value.bestFeaturedBlogs.map(blog => {
                                    return <BestFeaturedItem key={blog.id} blog={blog} />
                                })
                            }}
                        </BlogConsumer>
                    </div>
                    <div className="col-lg-6">
                        <BlogConsumer>
                            {value => {
                                return value.bestNewsBlogs.map(blog => {
                                    return <BestNewsItem key={blog.id} blog={blog} />
                                })
                            }}
                        </BlogConsumer>

                        <div className="btn-box">
                            <Link to="/blog-grid" className="template-btn">read more articles</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
