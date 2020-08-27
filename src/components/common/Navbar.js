import React, { useState } from 'react'
import { Link } from "react-router-dom";
import $ from 'jquery'
import { FiMenu } from 'react-icons/fi';

export default function Navbar({ children }) {
    const [navOpen, setNavOpen] = useState(false)

    /*====  side-widget-menu  =====*/
    $(document).on('click', '.side-menu-wrap .side-menu-ul .sidenav__item', function () {
        $(".side-menu-wrap .side-menu-ul .sidenav__item").removeClass('active');
        $(this).toggleClass("active")
    })
    $(document).on('click', '.side-menu-wrap .side-menu-ul .sidenav__item.active', function () {
        $(".side-menu-wrap .side-menu-ul .sidenav__item.active").removeClass('active');
    })



    $(window).on('scroll', function () {
        //header fixed animation and control
        if ($(window).scrollTop() > 0) {
            $('.header-menu-area').addClass('d-none header-fixed');
            $('.scroll-d-block').addClass('d-block');
        } else {
            $('.header-menu-area').removeClass('header-fixed d-none');
            $('.scroll-d-block').removeClass('d-block').addClass('d-none');
        }

        //back to top button control
        if ($(window).scrollTop() > 300) {
            $('#scroll-top').addClass('back-btn-shown');
        } else {
            $('#scroll-top').removeClass('back-btn-shown');
        }
    });
    return (
        <>
            <section className="header-menu-area">
                {children}
                <div className="header-menu-fluid">
                    <div className="container ">
                        <div className="row align-items-center main-menu-content">
                            <div className="col-lg-3">
                                <div className="logo-box">
                                    <Link to="/" className="logo"><img src="images/logo.png" alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="menu-wrapper">
                                    <nav className="main-menu">
                                        <ul>
                                            <li>
                                                <Link to="/home">Home</Link>
                                                <ul className="dropdown-menu-item">
                                                    <li><Link to="/home">Home 01</Link></li>
                                                    <li><Link to="/home-2">Home 02</Link></li>
                                                    <li><Link to="/home-3">Home 03</Link></li>
                                                    <li><Link to="/home-4">Home 04</Link> <span className="new-page-badge">New</span></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/about">about</Link></li>
                                            <li>
                                                <Link to="/doctors">pages</Link>
                                                <ul className="dropdown-menu-item">
                                                    <li><Link to="/doctors">Our doctors</Link></li>
                                                    <li><Link to="/doctor-details">Doctor detail</Link></li>
                                                    <li><Link to="/contact">Contact us</Link></li>
                                                    <li><Link to="/faq">Faqs</Link></li>
                                                    <li><Link to="/error">Error page</Link></li>
                                                    <li><Link to="/recover-pass">Recover pass</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/prevention">Prevention</Link></li>
                                            <li>
                                                <Link to="/blog-grid">blog</Link>
                                                <ul className="dropdown-menu-item">
                                                    <li><Link to="/blo-grid">blog grid</Link></li>
                                                    <li><Link to="/blog-sidebar">blog sidebar</Link></li>
                                                    <li><Link to="/blog-details">blog detail</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/login">log in</Link>
                                                <span className="ml-1 mr-1">/</span>
                                                <Link to="/signin">Sign Up</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="logo-right-button">
                                        <ul>
                                            <li><Link to="/prevention" className="template-btn">Prevention</Link></li>
                                        </ul>
                                        <div className="side-menu-open" onClick={() => setNavOpen(!navOpen)}>
                                            <FiMenu />
                                        </div>
                                    </div>
                                    <div className={navOpen ? 'side-nav-container active' : 'side-nav-container'}>
                                        <div className="humburger-menu">
                                            <div className="humburger-menu-lines side-menu-close" onClick={() => setNavOpen(!navOpen)}></div>
                                        </div>
                                        <div className="side-menu-wrap">
                                            <ul className="side-menu-ul">
                                                <li className="sidenav__item">
                                                    <Link to="/">home</Link>
                                                    <span className="menu-plus-icon"></span>
                                                    <ul className="side-sub-menu">
                                                        <li><Link to="/">Home 01</Link></li>
                                                        <li><Link to="/home-2">Home 02</Link></li>
                                                        <li><Link to="/home-3">Home 03</Link></li>
                                                        <li><Link to="/home-4">Home 04 <span className="new-page-badge">New</span></Link></li>
                                                    </ul>
                                                </li>
                                                <li className="sidenav__item"><Link to="/about">about</Link></li>
                                                <li className="sidenav__item">
                                                    <Link to="/doctors">pages</Link>
                                                    <span className="menu-plus-icon"></span>
                                                    <ul className="side-sub-menu">
                                                        <li><Link to="/doctors">Our doctors</Link></li>
                                                        <li><Link to="/doctor-details">Doctor detail</Link></li>
                                                        <li><Link to="/contact">Contact us</Link></li>
                                                        <li><Link to="/faq">Faqs</Link></li>
                                                        <li><Link to="/error">Error page</Link></li>
                                                        <li><Link to="/recover-pass">Recover pass</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="sidenav__item"><Link to="/prevention">Prevention</Link></li>
                                                <li className="sidenav__item">
                                                    <Link to="/blo-grid">blog</Link>
                                                    <span className="menu-plus-icon"></span>
                                                    <ul className="side-sub-menu">
                                                        <li><Link to="/blo-grid">blog grid</Link></li>
                                                        <li><Link to="/blog-sidebar">blog sidebar</Link></li>
                                                        <li><Link to="/blog-details">blog detail</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="sidenav__item">
                                                    <Link to="/contact">contact</Link>
                                                </li>
                                            </ul>
                                            <div className="side-btn-box">
                                                <Link to="/login">log in</Link>
                                                <span className="ml-1 mr-1">/</span>
                                                <Link to="/signin">Sign Up</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="header-menu-area d-none scroll-d-block">
                {children}
                <div className="header-menu-fluid">
                    <div className="container ">
                        <div className="row align-items-center main-menu-content">
                            <div className="col-lg-3">
                                <div className="logo-box">
                                    <a href="/" className="logo"><img src="images/logo.png" alt="logo" /></a>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="menu-wrapper">
                                    <nav className="main-menu">
                                        <ul>
                                            <li>
                                                <a href="/">Home</a>
                                                <ul className="dropdown-menu-item">
                                                    <li><a href="/">Home 01</a></li>
                                                    <li><a href="/home-2">Home 02</a></li>
                                                    <li><a href="/home-3">Home 03</a></li>
                                                    <li><a href="/home-4">Home 04</a> <span className="new-page-badge">New</span></li>
                                                </ul>
                                            </li>
                                            <li><a href="/about">about</a></li>
                                            <li>
                                                <a href="/doctors">pages</a>
                                                <ul className="dropdown-menu-item">
                                                    <li><a href="/doctors">Our doctors</a></li>
                                                    <li><a href="/doctor-details">Doctor detail</a></li>
                                                    <li><a href="/contact">Contact us</a></li>
                                                    <li><a href="/faq">Faqs</a></li>
                                                    <li><a href="/error">Error page</a></li>
                                                    <li><a href="/recover-pass">Recover pass</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/prevention">Prevention</a></li>
                                            <li>
                                                <a href="/blog-grid">blog</a>
                                                <ul className="dropdown-menu-item">
                                                    <li><a href="/blo-grid">blog grid</a></li>
                                                    <li><a href="/blog-sidebar">blog sidebar</a></li>
                                                    <li><a href="/blog-details">blog detail</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/login">log in</a>
                                                <span className="ml-1 mr-1">/</span>
                                                <a href="/signin">Sign Up</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="logo-right-button">
                                        <ul>
                                            <li><a href="/prevention" className="template-btn">Prevention</a></li>
                                        </ul>
                                        <div className="side-menu-open" onClick={() => setNavOpen(!navOpen)}>
                                            <FiMenu />
                                        </div>
                                    </div>
                                    <div className={navOpen ? 'side-nav-container active' : 'side-nav-container'}>
                                        <div className="humburger-menu">
                                            <div className="humburger-menu-lines side-menu-close" onClick={() => setNavOpen(!navOpen)}></div>
                                        </div>
                                        <div className="side-menu-wrap">
                                            <ul className="side-menu-ul">
                                                <li className="sidenav__item">
                                                    <a href="/">home</a>
                                                    <span className="menu-plus-icon"></span>
                                                    <ul className="side-sub-menu">
                                                        <li><a href="/">Home 01</a></li>
                                                        <li><a href="/home-2">Home 02</a></li>
                                                        <li><a href="/home-3">Home 03</a></li>
                                                        <li><a href="/home-4">Home 04 <span className="new-page-badge">New</span></a></li>
                                                    </ul>
                                                </li>
                                                <li className="sidenav__item"><a href="/about">about</a></li>
                                                <li className="sidenav__item">
                                                    <a href="/doctors">pages</a>
                                                    <span className="menu-plus-icon"></span>
                                                    <ul className="side-sub-menu">
                                                        <li><a href="/doctors">Our doctors</a></li>
                                                        <li><a href="/doctor-details">Doctor detail</a></li>
                                                        <li><a href="/contact">Contact us</a></li>
                                                        <li><a href="/faq">Faqs</a></li>
                                                        <li><a href="/error">Error page</a></li>
                                                        <li><a href="/recover-pass">Recover pass</a></li>
                                                    </ul>
                                                </li>
                                                <li className="sidenav__item"><a href="/prevention">Prevention</a></li>
                                                <li className="sidenav__item">
                                                    <a href="/blo-grid">blog</a>
                                                    <span className="menu-plus-icon"></span>
                                                    <ul className="side-sub-menu">
                                                        <li><a href="/blo-grid">blog grid</a></li>
                                                        <li><a href="/blog-sidebar">blog sidebar</a></li>
                                                        <li><a href="/blog-details">blog detail</a></li>
                                                    </ul>
                                                </li>
                                                <li className="sidenav__item">
                                                    <a href="/contact">contact</a>
                                                </li>
                                            </ul>
                                            <div className="side-btn-box">
                                                <a href="/login">log in</a>
                                                <span className="ml-1 mr-1">/</span>
                                                <a href="/signin">Sign Up</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
