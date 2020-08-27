import React, { Component } from 'react'
import WidgetSearch from './WidgetSearch'
import WidgetCategory from './WidgetCategory'
import WidgetRecentPost from './WidgetRecentPost'
import WidgetTags from './WidgetTags'
import WidgetSocialFollow from './WidgetSocialFollow'

export default class SidebarOne extends Component {
    render() {
        return (
            <>
                <div className="sidebar">
                    <WidgetSearch />
                    <WidgetCategory />
                    <WidgetRecentPost />
                    <WidgetTags />
                    <WidgetSocialFollow />
                </div>
            </>
        )
    }
}
