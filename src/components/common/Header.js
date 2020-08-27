import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import { FiMenu } from 'react-icons/fi';

export default function Header({ children }) {
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

        //Removed header fixed animation and control and css property 'position: absolute;

        // if ($(window).scrollTop() > 0) {
        //     $('.header-menu-area').addClass('d-none header-fixed');
        //     $('.scroll-d-block').addClass('d-block');
        // } else {
        //     $('.header-menu-area').removeClass('header-fixed d-none');
        //     $('.scroll-d-block').removeClass('d-block').addClass('d-none');
        // }

        //back to top button control
        if ($(window).scrollTop() > 300) {
            $('#scroll-top').addClass('back-btn-shown');
        } else {
            $('#scroll-top').removeClass('back-btn-shown');
        }
    });
    return (
        <>
            <section className="header-menu-area header-menu-area-3">
                {children}
                <div className="header-menu-fluid header-menu-fluid-3">
                    <div className="container-fluid">
                        <div className="main-menu-content main-menu-content-3">
                            <div className="row align-items-center h-100">
                                <div className="col-lg-3">
                                    <div className="logo-box">
                                        <Link to="/" className="logo"><img src="./images/testconnect-logo.png" alt="logo" />TESTCONNECT</Link>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="menu-wrapper">

                                        <nav className="main-menu">
                                            <ul>

                                                <li>
                                                    <Link to="/" >Home</Link>
                                                </li>

                                                <li><Link to="/laboratories">Laboratórios</Link></li>

                                                <li><Link to="/about">About</Link></li>


                                                <li>
                                                    <Link to="institutions">Instituições</Link>
                                                </li>

                                                <li><Link to="/contact">Contactos</Link></li>

                                                <li><Link to="/">Equipa</Link></li>

                                            </ul>
                                        </nav>
                                        <div className="logo-right-button">
                                            <ul>
                                                <li><Link to="/login" className="template-btn">Entrar</Link></li>
                                            </ul>
                                            <div className="side-menu-open" onClick={() => setNavOpen(!navOpen)}>
                                                <FiMenu />
                                            </div>
                                        </div>
                                        <div className={navOpen ? 'side-nav-container active' : 'side-nav-container'}>
                                            <div className="humburger-menu">
                                                <div className="humburger-menu-lines side-menu-close" onClick={() => setNavOpen(!navOpen)}></div>
                                            </div>
                                            <Link to="/" className="logo side-menu-logo"><img src="./images/testconnect-logo.png" alt="logo" />TESTCONNECT</Link>
                                            <div className="side-menu-wrap">
                                                <ul className="side-menu-ul">

                                                    <li className="sidenav__item">
                                                        <Link to="/">home</Link>
                                                    </li>

                                                    <li className="sidenav__item"><Link to="/laboratories">Laboratórios</Link></li>

                                                    <li className="sidenav__item">
                                                        <Link to="institutions">Instituiçõs</Link>
                                                    </li>

                                                    <li className="sidenav__item">
                                                        <Link to="/contact">Contactos</Link>
                                                    </li>

                                                    <li className="sidenav__item">
                                                        <Link to="/">Equipa</Link>
                                                    </li>

                                                </ul>
                                                
                                                <div className="side-btn-box">

                                                    <Link to="/login">log in</Link>
                                                    <span className="ml-1 mr-1">/</span>
                                                    <Link to="/signin">Sign up</Link>

                                                </div>
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
