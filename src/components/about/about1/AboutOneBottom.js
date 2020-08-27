import React, { Component } from 'react'
import { FiPlay } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video'

export default class AboutOneBottom extends Component {
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
                list: "Sit amet faucibus elit blandit. Integer non elit a magna tincidunt tincidunt. Nullam eleifend finibus."
            },
            {
                list: "Fusce varius et sem sed sollicitudin. Duis viverra, urna in mattis congue, ipsum tortor"
            },
            {
                list: "Duis eget ligula convallis, feugiat sem quis, aliquam augue. Duis viverra aliquet erat. Pellentesque quis sapien"
            },
            {
                list: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque fringilla."
            },
            {
                list: "Suspendisse vel nunc ligula. Cras hendrerit sit amet risus ut malesuada. In rutrum, erat sed porta lobortis, nunc"
            }
        ]
    }
    render() {
        return (
            <>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='5DGwOJXSxqg' onClose={() => this.setState({ isOpen: false })} />
                <div className="row padding-top-90px align-items-center">
                    <div className="col-lg-6">
                        <div className="service-item">
                            <img src="images/img3.jpg" alt="About" />
                            <div className="service-item-video service-item-video-2">
                                <Link className="mfp-iframe video-btn video-play-btn"
                                    to="#"
                                    onClick={this.openModal}
                                    title="Watch Video">
                                    <FiPlay />
                                </Link>
                                <span> Video Guideline</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-item pl-4">
                            <h3 className="widget-title padding-bottom-15px line-height-33">
                                When and how to wear medical masks to protect against coronavirus
                            </h3>
                            <ul className="list-items">
                                {this.listitems.items.map((item, index) => {
                                    return (
                                        <li key={index}>{item.list}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
