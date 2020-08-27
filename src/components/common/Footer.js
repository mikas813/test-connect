import React, { Component } from 'react'
import FooterParticle from '../others/particle/FooterParticle'
import FooterWidget1 from '../footer/FooterWidget1'
import FooterWidget2 from '../footer/FooterWidget2'
import FooterWidget3 from '../footer/FooterWidget3'
import FooterWidget4 from '../footer/FooterWidget4'
import Copyright from '../footer/Copyright'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer-area padding-top-90px overflow-hidden">
                <FooterParticle />
                <div className="container">
                    <div className="row">
                        <FooterWidget1 />
                        <FooterWidget2 />
                        <FooterWidget3 />
                        <FooterWidget4 />
                    </div>
                    <div className="row">
                        <Copyright />
                    </div>
                </div>
            </footer>
        )
    }
}
