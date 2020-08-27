import React, { Component } from 'react'
import { BlogConsumer } from '../../../context'
import BlogFeaturedItem from './BlogFeaturedItem'

export default class BlogFeatured extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <BlogConsumer>
                        {value => {
                            return value.featuredBlogs.map(blog => {
                                return <BlogFeaturedItem key={blog.id} blog={blog} />
                            })
                        }}
                    </BlogConsumer>
                </div>
            </div>
        )
    }
}
