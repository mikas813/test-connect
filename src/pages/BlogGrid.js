import React, { Component } from 'react'
import Navbar2 from '../components/common/Navbar2'
import Breadcrumb from '../components/common/Breadcrumb'
import BlogGridAll from '../components/blog/bloggrid/BlogGridAll'
import Paginations from '../components/blog/Paginations'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'

export default class BlogGrid extends Component {
    render() {
        return (
            <main className="blog-grid">
                <Navbar2 />
                <Breadcrumb title="Blog Grid" />
                <section className="blog-area padding-top-140px padding-bottom-120px">
                    <div className="container">
                        <div className="row">
                            <BlogGridAll />
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
