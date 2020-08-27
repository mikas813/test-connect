import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
import { FiPlay } from 'react-icons/fi'

export default class BannerFourRight extends Component {
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
                <div className="col-lg-6">
                    <div className="video-container">
                        <div className="service-item">
                            <img src="images/img7.jpg" alt="About" />
                            <div className="service-item-video">
                                <Link
                                    className="mfp-iframe video-btn video-play-btn"
                                    to="#"
                                    title="Watch Video"
                                    onClick={this.openModal}
                                >
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
