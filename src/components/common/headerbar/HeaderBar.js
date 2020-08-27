import React, { Component } from 'react'
import HeaderBarLeft from './HeaderBarLeft'
import HeaderBarRight from './HeaderBarRight'

export default class HeaderBar extends Component {
    render() {
        return (
            <>
                <div className="header-top-action">
                    <div className="container">
                        <div className="row align-items-center">
                            <HeaderBarLeft />
                            <HeaderBarRight />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
