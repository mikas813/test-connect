import React, { Component } from 'react'
import Navbar2 from '../components/common/Navbar2'
import Breadcrumb from '../components/common/Breadcrumb'
import ServiceOne from '../components/services/service1/ServiceOne'
import SectionTitle from '../components/common/SectionTitle'
import Border from '../components/common/Border'
import ServiceTwo from '../components/services/service2/ServiceTwo'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'

export default class Prevention extends Component {
    render() {
        return (
            <main className="prevention">
                <Navbar2 />
                <Breadcrumb title="Prevention" />
                <section className="service-area padding-top-140px padding-bottom-90px text-center">
                    <SectionTitle title="Coronavirus Symptoms" subtitle="Virus Symptoms" />
                    <ServiceOne />
                </section>
                <Border />
                <section className="service-area service-two section--padding">
                    <SectionTitle title="Important Precautions Follow one by one" subtitle="How To Be Safe" />
                    <ServiceTwo />
                </section>
                <ScrollTop />
                <Footer />
            </main>
        )
    }
}
