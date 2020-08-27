import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class FooterWidget2 extends Component {
    privacylinks = {
        items: [
            {
                title: "Advertiser Agreement",
                url: "#"

            },
            {
                title: "Developer Agreement",
                url: "#"
            },
            {
                title: "Privacy Policy",
                url: "#"
            },
            {
                title: "Technology Privacy",
                url: "#"
            },
            {
                title: "Acceptable User Policy",
                url: "#"
            }
        ]
    }
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="footer-widget">
                        <h3 className="widget-title">Privacy & Tos</h3>
                        <div className="section-divider"></div>
                        <ul className="list-items">
                            {this.privacylinks.items.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.url}>{item.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
