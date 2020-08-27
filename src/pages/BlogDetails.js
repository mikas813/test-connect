import React, { Component } from 'react'
import Navbar2 from '../components/common/Navbar2'
import Breadcrumb from '../components/common/Breadcrumb'
import BlogDetailsContent from '../components/blog/blogdetails/BlogDetailsContent'
import SidebarOne from '../components/blog/sidebar/SidebarOne'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'

export default class BlogDetails extends Component {
    render() {
        return (
            <main className="blog-details">
                <Navbar2 />
                <Breadcrumb title="Blog Details" />
                <section className="blog-area padding-top-140px padding-bottom-120px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <BlogDetailsContent />
                            </div>
                            <div className="col-lg-4">
                                <SidebarOne />
                            </div>
                        </div>
                    </div>
                </section>
                <ScrollTop />
                <Footer />
            </main>
        )
    }
}
