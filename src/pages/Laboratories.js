import React, { Component } from 'react'
import Header from '../components/common/Header'
import Breadcrumb from '../components/common/Breadcrumb'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'

export default class Laboratories extends Component {
    render() {
        return (
            <main className="doctor-details">
                <Header />
                <Breadcrumb title="Laboratórios" />

                <ScrollTop />
                <Footer />
            </main>
        )
    }
}
