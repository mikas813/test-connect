import React, { Component } from 'react'
import { BlogConsumer } from '../../../context'
import RecentPostItem from './RecentPostItem'

export default class RecentPost extends Component {
    render() {
        return (
            <>
                <BlogConsumer>
                    {value => {
                        return value.recentPostBlogs.map(blog => {
                            return <RecentPostItem key={blog.id} blog={blog} />
                        })
                    }}
                </BlogConsumer>
            </>
        )
    }
}
