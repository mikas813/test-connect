import React, { Component } from 'react'

export default class AboutRight extends Component {
    render() {
        return (
            <>
                <div className="col-lg-6 ml-auto">
                    <div className="about-img-box w-100 h-100 pt-5">
                        <div className="image-box-item w-100 h-100">
                            <img src="images/img1.jpg" alt="About" className="image-item" />
                            <img src="images/img2.jpg" alt="About" className="image-item" />
                            <img src="images/img3.jpg" alt="About" className="image-item" />
                            <img src="images/img4.jpg" alt="About" className="image-item" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
