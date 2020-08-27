import React, { Component } from 'react'
import { FiPlay } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video'

export default class about1top extends Component {
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
    listitems = {
        items: [
            {
                list: "Praesent laoreet sit amet nunc sed porttitor. In felis est, interdum ac lorem ut, volutpat venenatis ante"
            },
            {
                list: "Etiam sodales tincidunt nibh, at vestibulum massa molestie nec."
            },
            {
                list: "Proin ullamcorper nunc sed finibus aliquam. Etiam semper velit quis tellus scelerisque, ut auctor nulla vestibulum."
            },
            {
                list: "Maecenas eget nibh sed odio commodo convallis. Sed rutrum arcu non tortor porttitor"
            },
            {
                list: "Nam nec libero nulla. Aenean euismod leo eu eros sollicitudin"
            }
        ]
    }
    render() {
        return (
            <>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='5DGwOJXSxqg' onClose={() => this.setState({ isOpen: false })} />
                <div className="row mt-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="service-item pr-4">
                            <h3 className="widget-title padding-bottom-15px">When and how to use masks</h3>
                            <ul className="list-items">
                                {this.listitems.items.map((item, index) => {
                                    return (
                                        <li key={index}>{item.list}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-item">
                            <img src="images/img1.jpg" alt=" About" />
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
