import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WidgetTags extends Component {
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <h3 className="widget-title">Tags</h3>
                    <div className="section-divider"></div>
                    <ul className="tag-list mt-4">
                        <li><Link to="#">Corona</Link></li>
                        <li><Link to="#">Coronavirus</Link></li>
                        <li><Link to="#">Medical</Link></li>
                        <li><Link to="#">Hospital</Link></li>
                        <li><Link to="#">Covid-19</Link></li>
                        <li><Link to="#">Clinic</Link></li>
                        <li><Link to="#">Covid</Link></li>
                        <li><Link to="#">Pharmacy</Link></li>
                        <li><Link to="#">Covid-19 Advises</Link></li>
                        <li><Link to="#">Prevention</Link></li>
                        <li><Link to="#">Medicine</Link></li>
                        <li><Link to="#">Virus</Link></li>
                    </ul>
                </div>
            </>
        )
    }
}
