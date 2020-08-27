import React, { Component } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import AboutFive from '../components/about/about5/AboutFive'
import AboutOneTop from '../components/about/about1/AboutOneTop'
import ServiceOne from '../components/services/service1/ServiceOne'
import SectionTitle from '../components/common/SectionTitle'
import Doctor from '../components/doctors/Doctor'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'
import Header from '../components/common/Header'

export default class About extends Component {
    render() {
        return (
            <main className="about">
              <Header />
              <Breadcrumb title="About Us" />
                <section className="about-area about5 before-after-none padding-top-140px padding-bottom-120px">
                    <AboutFive />
                    <div className="container mt-50">
                        <AboutOneTop />
                    </div>
                </section>
                <section className="service-area section-bg section--padding text-center">
                    <SectionTitle title="Coronavirus Symptoms" subtitle="Virus Symptoms" />
                    <ServiceOne />
                </section>
                <section className="team-area section--padding">
                    <SectionTitle title="Meet Our Doctors" subtitle="Our Doctors" />
                    <Doctor />
                </section>
                <ScrollTop />
                <Footer />
            </main>
        )
    }
}
