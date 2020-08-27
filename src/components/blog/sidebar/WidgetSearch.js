import React, { Component } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default class WidgetSearch extends Component {
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <h3 className="widget-title">Search</h3>
                    <div className="section-divider"></div>
                    <div className="contact-form-action mt-4">
                        <form action="#">
                            <div className="form-group mb-0">
                                <input className="form-control pl-3" type="text" placeholder="Search here" />
                                <button className="search-btn"><span><AiOutlineSearch /></span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
