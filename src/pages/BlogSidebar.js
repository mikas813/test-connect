import React, { Component } from 'react'
import Navbar2 from '../components/common/Navbar2'
import Breadcrumb from '../components/common/Breadcrumb'
import SidebarOne from '../components/blog/sidebar/SidebarOne'
import BlogList from '../components/blog/bloglist/BlogList'
import Paginations from '../components/blog/Paginations'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'

export default class BlogSidebar extends Component {
    render() {
        return (
            <main className="blog-sidebar">
                <Navbar2 />
                <Breadcrumb title="Blog Sidebar" />
                <section className="blog-area padding-top-140px padding-bottom-120px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <SidebarOne />
                            </div>
                            <div className="col-lg-8">
                                <div className="blog-sidebar-wrap">
                                    <div className="row">
                                        <BlogList />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <Paginations />
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
