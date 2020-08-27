import React, { Component } from 'react'
import { BlogConsumer } from '../../../context'
import DoctorBlogItem from '../../doctors/doctordetails/relatedblog/DoctorBlogItem'

export default class BlogList extends Component {
    render() {
        return (
            <BlogConsumer>
                {value => {
                    return value.blogs.map(blog => {
                        return <DoctorBlogItem key={blog.id} blog={blog} />
                    })
                }}
            </BlogConsumer>
        )
    }
}
