import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FiPlay } from 'react-icons/fi'
import ModalVideo from 'react-modal-video'
import { Link } from 'react-router-dom'

export default class HeroSlider extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='5DGwOJXSxqg' onClose={() => this.setState({ isOpen: false })} />
                <section className="slider-area">
                    <OwlCarousel
                        className="homepage-slide1 owl-theme"
                        loop
                        margin={10}
                        autoplay={true}
                        nav={false}
                        dots={true}
                        items={1}
                        smartSpeed={1000}
                        animateOut={"slideOutDown"}
                        animateIn={"fadeIn"}
                        active={true}
                    >

                        <div className="single-slide-item slide-bg1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="banner-content">
                                            <div className="section-heading">
                                                <p className="section__meta">Stay home, stay safe</p>
                                                <h2 className="section__title">How to Protect Yourself From <br /> Coronavirus (COVID-19)</h2>
                                            </div>
                                            <div className="section-description">
                                                <p className="section__desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Odit quaerat
                                                est, a labore excepturi <br />
                                                            rem sed eius facere error! Dolore in perspiciatis porro dolor debitis
                                            </p>
                                            </div>
                                            <div className="btn-box hero-btn-box">
                                                <Link to="/doctors" className="template-btn mr-3">find a doctor</Link>
                                                <Link to="#"
                                                    className="video-text-btn mfp-iframe video-play-btn"
                                                    onClick={this.openModal}>
                                                    <span className="video-btn"><FiPlay /></span>
                                                    <span> watch video</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-slide-item slide-bg2 text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="banner-content">
                                            <div className="section-heading">
                                                <p className="section__meta">Coronavirus Realtime Reports</p>
                                                <h2 className="section__title">Basic Protective Measures <br /> Against the Coronavirus</h2>
                                            </div>
                                            <div className="section-description">
                                                <p className="section__desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Odit quaerat
                                    est, a labore excepturi <br />
                                                        rem sed eius facere error! Dolore in perspiciatis porro dolor debitis
                                </p>
                                            </div>
                                            <div className="btn-box hero-btn-box">
                                                <Link to="/doctors" className="template-btn mr-3">find a doctor</Link>
                                                <Link to="#"
                                                    className="video-text-btn mfp-iframe video-play-btn"
                                                    onClick={this.openModal}>
                                                    <span className="video-btn"><FiPlay /></span>
                                                    <span> watch video</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-slide-item slide-bg3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="banner-content">
                                            <div className="section-heading">
                                                <p className="section__meta">Make your life easier with personal hygiene</p>
                                                <h2 className="section__title">What You Need To Know <br /> About Coronavirus</h2>
                                            </div>
                                            <div className="section-description">
                                                <p className="section__desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Odit quaerat
                                                        est, a labore excepturi <br />
                                                        rem sed eius facere error! Dolore in perspiciatis porro dolor debitis
                                                    </p>
                                            </div>
                                            <div className="btn-box hero-btn-box">
                                                <Link to="/doctors" className="template-btn mr-3">find a doctor</Link>
                                                <Link to="#"
                                                    className="video-text-btn mfp-iframe video-play-btn"
                                                    onClick={this.openModal}>
                                                    <span className="video-btn"><FiPlay /></span>
                                                    <span> watch video</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </OwlCarousel>
                </section>


            </>
        )
    }
}
