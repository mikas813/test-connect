import React, { Component } from 'react'
import { BlogConsumer } from '../../../../context'
import DoctorBlogItem from './DoctorBlogItem'

export default class DoctorBlogs extends Component {
    render() {
        return (
            <>
                <BlogConsumer>
                    {value => {
                        return value.doctordetailsBlogs.map(blog => {
                            return <DoctorBlogItem key={blog.id} blog={blog} />
                        })
                    }}
                </BlogConsumer>
            </>
        )
    }
}
