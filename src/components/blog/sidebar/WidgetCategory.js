import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default class WidgetCategory extends Component {
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <h3 className="widget-title">Category</h3>
                    <div className="section-divider"></div>
                    <ul className="list-items mt-4">
                        <li><Link to="#"><FiChevronRight className="cat-icon mr-1" /> Coronavirus and COVID-19</Link></li>
                        <li><Link to="#"><FiChevronRight className="cat-icon mr-1" /> Coronavirus spread</Link></li>
                        <li><Link to="#"><FiChevronRight className="cat-icon mr-1" /> Coronavirus Prevention</Link></li>
                        <li><Link to="#"><FiChevronRight className="cat-icon mr-1" /> Virus Treated</Link></li>
                        <li><Link to="#"><FiChevronRight className="cat-icon mr-1" /> Wear a face mask</Link></li>
                        <li><Link to="#"><FiChevronRight className="cat-icon mr-1" /> Travel advice</Link></li>
                    </ul>
                </div>
            </>
        )
    }
}
