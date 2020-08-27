import React, { Component } from 'react'
import { FiPlay } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video'

export default class AboutOneBottom2 extends Component {
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
                <div className="row padding-top-90px align-items-center">
                    <div className="col-lg-6">
                        <div className="service-item pr-4">
                            <h3 className="widget-title padding-bottom-15px line-height-33">
                                How to project yourself when travelling during the coronavirus(COVID-19) outbreak
                        </h3>
                            <p className="font-weight-medium">
                                Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                                non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
                                qui in ea voluptate velit esse quam nihil molestiae,
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-item">
                            <img src="images/img2.jpg" alt="About" />
                            <div className="service-item-video">
                                <span> Video Guideline</span>
                                <Link className="mfp-iframe video-btn video-play-btn"
                                    to="#"
                                    onClick={this.openModal}
                                    title="Watch Video">
                                    <FiPlay />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
