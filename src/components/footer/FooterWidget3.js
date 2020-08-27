import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class FooterWidget3 extends Component {
    usefullinks = {
        items: [
            {
                title: "Situation Reports",
                url: "#"
            },
            {
                title: "Advice For Public",
                url: "#"
            },
            {
                title: "Prevention",
                url: "#"
            },
            {
                title: "Coronavirus Symptoms",
                url: "#"
            },
            {
                title: "Donor & Partners",
                url: "#"
            }
        ]
    }
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="footer-widget">
                        <h3 className="widget-title">Useful links</h3>
                        <div className="section-divider"></div>
                        <ul className="list-items">
                            {this.usefullinks.items.map((item, index) => {
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
