import React, { Component } from 'react'

export default class TimelineContent extends Component {
    timelinestate = {
        timeline: [
            {
                date: "Dec 31",
                description: "China alerts who to several pneumonia cases"
            },
            {
                date: "Jan 7",
                description: "France confirms europe's first case"
            },
            {
                date: "Jan 11",
                description: "China announces first death"
            },
            {
                date: "Jan 13",
                description: "Who reports care in thailand the first outside china"
            },
            {
                date: "Jan 30",
                description: "Who declares outbreak a global health emergency"
            },
            {
                date: "Feb 2",
                description: "First death outside china recorded in the philippines"
            },
            {
                date: "Feb 7",
                description: "Chinese doctor & whistleblower li wenliang dies"
            },
            {
                date: "Feb 11",
                description: "Who names virus COVID-19"
            },
            {
                date: "Feb 14",
                description: "Egypt confirms africa's first case"
            }
        ]
    }
    render() {
        return (
            <>
                <div className="timeline-wrap">
                    <ul className="road-map">
                        {this.timelinestate.timeline.map((item, index) => {
                            return (
                                <li className="happening" key={index}>
                                    <div className="happening-period">
                                        <p className="happening__desc">{item.date}</p>
                                    </div>
                                    <div className="happening-detail">
                                        <p className="happening__desc">
                                            {item.description}
                                        </p>
                                    </div>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </>
        )
    }
}
