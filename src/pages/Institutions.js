import React, { Component } from 'react'
import Header from '../components/common/Header'
import Breadcrumb from '../components/common/Breadcrumb'
import Doctor from '../components/doctors/Doctor'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'

export default class Institutions extends Component {
    render() {
        return (
            <main className="doctors">
                <Header />
                <Breadcrumb title="Instituições" />
                <section className="team-area padding-top-140px padding-bottom-90px">
                    <Doctor />
                </section>
                <ScrollTop />
                <Footer />
            </main>
        )
    }
}
