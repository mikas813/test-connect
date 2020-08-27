import React, { Component } from 'react'
import Navbar2 from '../components/common/Navbar2'
import Breadcrumb from '../components/common/Breadcrumb'
import RecoverPassContent from '../components/others/account/RecoverPassContent'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'

export default class RecoverPass extends Component {
    render() {
        return (
            <main className="recoverpass">
                <Navbar2 />
                <Breadcrumb title="Recover Password" />
                <section className="recover-area padding-top-140px padding-bottom-120px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 mx-auto">
                                <RecoverPassContent />
                            </div>
                        </div>
                    </div>
                </section>
                <ScrollTop />
                <Footer />
            </main>
        )
    }
}
