import React, { Component } from 'react'
import Header from '../components/common/Header'
import SectionTitle from '../components/common/SectionTitle'
import HowItWork from '../components/hiw/HowItWork'
import ServiceOne from '../components/services/service1/ServiceOne'
import Border from '../components/common/Border'
import CTA2 from '../components/others/cta/cta2/CTA2'
import AboutFour from '../components/about/abouut4/AboutFour'
import AboutThree from '../components/about/about3/AboutThree'
import ServiceTwo from '../components/services/service2/ServiceTwo'
import MapOne from '../components/contact/map1/MapOne'
import Doctor from '../components/doctors/Doctor'
import Accordions from '../components/others/accordion/Accordions'
import FunFacts from '../components/others/funfact/FunFacts'
import BestFeatured from '../components/blog/best/BestFeatured'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'
import BannerHome2 from '../components/banners/BannerHome2'

export default class MainPage extends Component {
    render() {
        return (
            <main className="home-2">
                <Header />
                <BannerHome2 />
                <section className="hiw-area section--padding text-center">
                    <SectionTitle title="Encontre laboratórios e instituições" subtitle="Registados" />
                    <HowItWork />
                </section>
                <Border />
                <section className="service-area section--padding text-center">
                    <SectionTitle title="Lista das instituições registadas" subtitle="Busca" />
                  <ServiceOne />
                </section>
                <section className="subscriber-area cta-2 padding-top-80px padding-bottom-80px">
                    <CTA2 />
                </section>
                <section className="about-area extra-z-index about-heading-width section-padding">
                    <SectionTitle title="Coronavirus Disease (COVIDE-19) Advice for the People" subtitle="Advice For People" />
                    <AboutFour />
                </section>
                <Border />
                <section className="about-area about-three before-after-none section-padding">
                    <AboutThree />
                </section>
                <section className="service-area service-two section-bg section--padding">
                    <SectionTitle title="Important Precautions Follow on by one" subtitle="How To Be Safe" />
                    <ServiceTwo />
                </section>
                <section className="map-area overflow-hidden section-padding">
                    <SectionTitle title="Coronavirus (COVID-19) Live Reports" subtitle="Coronavirus: Trucker" />
                    <MapOne />
                </section>
                <Border />
                <section className="team-area section--padding">
                    <SectionTitle title="Meet Our Doctors" subtitle="Our Doctors" />
                    <Doctor />
                </section>
                <section className="accordion-area section-bg section-padding">
                    <SectionTitle title="Looking For An Answer" subtitle="Frequently Ask Questions" />
                    <Accordions />
                </section>
                <section className="funfact-area section--padding text-center">
                    <SectionTitle title="People are Infected by Coronavirus Worldwide Counting" subtitle="FunFact" />
                    <FunFacts />
                </section>
                <Border />
                <section className="blog-area section--padding">
                    <SectionTitle title="Check out Our Latest News & Articles" subtitle="Our Blog Posts" />
                    <BestFeatured />
                </section>
                <ScrollTop />
                <Footer />

            </main>
        )
    }
}
