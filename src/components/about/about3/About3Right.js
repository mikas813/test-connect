import React, { Component } from 'react'
import SectionTitle from '../../common/SectionTitle'
import { Link } from 'react-router-dom'

export default class About3Right extends Component {
    render() {
        return (
            <>
                <div className="col-lg-6">
                    <div className="section-content-box pl-5">
                        <SectionTitle title="Find What You Need To Survive Coronavirus" subtitle="More Information About (COVID-2019)">
                            <h4 className="widget-title pt-4 pb-3">
                                Coronavirus disease is an infectious disease caused by a new virus
                            </h4>
                        </SectionTitle>
                        <div className="section-description">
                            <p className="section__desc mb-2">
                                Morbi tristique senectus et netus et malesuada fames ac
                                turpis egestas. Vestibulum tortor quam, feugiat vitae,
                                tristique senectus et netus et malesuada
                                fames ac turpis
                            </p>
                            <p className="section__desc">
                                Distinctiv enable adaptive niche markets without principle-centered sourcesn Collaborati
                                develop impactful expertise and enabled materials awesome and Efficiently engineer
                                alternative growth strategies.
                            </p>
                        </div>
                        <div className="btn-box">
                            <Link to="#" className="template-btn">Read more</Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
