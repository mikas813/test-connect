import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb({ title }) {
    return (
        <>
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content text-center">
                                <div className="section-heading">
                                    <h2 className="section__title">{title}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-list">
                    <ul className="list-items">
                        <li className="active__list-item"><Link to="/">home</Link></li>
                        {title ? (
                            <li>{title}</li>
                        ) : " "}

                    </ul>
                </div>
            </section>
        </>
    )
}
