import React, { Component } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default class Paginations extends Component {
    render() {
        return (
            <>
                <div className="page-navigation-wrap mt-4">
                    <div className="page-navigation mx-auto">
                        <Link to="#" className="page-go page-prev">
                            <AiOutlineArrowLeft />
                        </Link>
                        <ul className="page-navigation-nav">
                            <li><Link to="#" className="page-go-link">1</Link></li>
                            <li className="active"><Link to="#" className="page-go-link">2</Link></li>
                            <li><Link to="#" className="page-go-link">3</Link></li>
                            <li><Link to="#" className="page-go-link">4</Link></li>
                            <li><Link to="#" className="page-go-link">5</Link></li>
                        </ul>
                        <Link to="#" className="page-go page-next">
                            <AiOutlineArrowRight />
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}
