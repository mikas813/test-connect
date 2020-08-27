import React, { Component } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import ErrorContent from '../components/others/error/ErrorContent'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'
import Header from '../components/common/Header'

export default class Error extends Component {
    render() {
        return (
            <main className="error">
              <Header />
              <Breadcrumb title="404 Page" />

                <section className="error-area padding-top-40px padding-bottom-100px text-center">
                    <div className="container">
                        <div className="row">
                            <ErrorContent />
                        </div>
                    </div>
                </section>
                <ScrollTop />
                <Footer />
            </main>
        )
    }
}
