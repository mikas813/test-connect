import React, { Component } from 'react'
import DoctorBlogs from '../../doctors/doctordetails/relatedblog/DoctorBlogs'

export default class BlogDetailsRelatedNews extends Component {
    render() {
        return (
            <>
                <div className="related-post padding-top-45px">
                    <h3 className="widget-title font-size-22">Related Posts</h3>
                    <div className="related-post-inner mt-4">
                        <div className="row">
                            <DoctorBlogs />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
