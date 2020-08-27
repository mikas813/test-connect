import React, { Component } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import $ from 'jquery'

export default class ScrollTop extends Component {
    componentDidMount() {
        $(window).on('scroll', function () {
            //back to top button control
            if ($(window).scrollTop() > 300) {
                $('#scroll-top').addClass('back-btn-shown');
            } else {
                $('#scroll-top').removeClass('back-btn-shown');
            }
        });

        /* ======= Back to Top Button and Navbar Scrolling control ======= */
        $(document).on('click', '#scroll-top', function () {
            $('html, body').animate({ scrollTop: 0 }, 1000);
        });

    }
    render() {
        return (
            <>
                <div id="scroll-top">
                    <FiChevronUp />
                </div>
            </>
        )
    }
}
