import React, { Component } from 'react'
import Navbar2 from '../components/common/Navbar2'
import Breadcrumb from '../components/common/Breadcrumb'
import Accordions from '../components/others/accordion/Accordions'
import SectionTitle from '../components/common/SectionTitle'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'

export default class FAQ extends Component {
    render() {
        return (
            <main className="faq">
                <Navbar2 />
                <Breadcrumb title="FAQ" />

                <section className="accordion-area faq2 padding-top-140px padding-bottom-120px">
                    <SectionTitle title="Looking For An Answer?" subtitle="Frequently Ask Questions" />
                    <Accordions />
                </section>
                <ScrollTop />
                <Footer />
            </main>
        )
    }
}
