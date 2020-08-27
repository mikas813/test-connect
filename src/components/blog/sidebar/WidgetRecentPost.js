import React, { Component } from 'react'
import RecentPost from '../recentpost/RecentPost'

export default class WidgetRecentPost extends Component {
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <h3 className="widget-title">Recent Posts</h3>
                    <div className="section-divider"></div>
                    <div className="sidebar-posts mt-4">
                        <RecentPost />


                    </div>
                </div>
            </>
        )
    }
}
