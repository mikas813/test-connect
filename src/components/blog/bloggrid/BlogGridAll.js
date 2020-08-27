import React from 'react'
import { BlogConsumer } from '../../../context'
import BlogFeaturedItem from '../featured/BlogFeaturedItem'

export default function BlogGridAll() {
    return (
        <>
            <BlogConsumer>
                {value => {
                    return value.blogs.map(blog => {
                        return <BlogFeaturedItem key={blog.id} blog={blog} />
                    })
                }}
            </BlogConsumer>
        </>
    )
}
