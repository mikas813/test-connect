import React, { Component } from 'react'
import NewsLetterLeft from './NewsLetterLeft'
import NewsLetterRight from './NewsLetterRight'

export default class NewsLetter extends Component {
    render() {
        return (
            <div className="container">
                <div className="row align-items-center">
                    <NewsLetterLeft />
                    <NewsLetterRight />
                </div>
            </div>
        )
    }
}
