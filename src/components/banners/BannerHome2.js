import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class BannerHome2 extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind( this )
  }

  openModal() {
    this.setState( {isOpen: true} )
  }

  render() {
    return (
      <>
        <section className="slider-area banner-area text-center">
          <div className="single-slide-item slide-bg1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 d-flex">
                  <div className="banner-content">
                    <div className="section-heading">
                      <h2 className="section__title">Confiança no amanhã</h2>
                    </div>
                    <div className="section-description">
                      <p className="section__desc section--meta">
                        Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Odit quaerat est, a labore
                        excepturi<br/> rem sed eius facere error! Dolore in perspiciatis porro dolor debitis Odit
                        quaerat est
                      </p>
                    </div>
                      <h4 className="md-hero__title">Registar</h4>
                    <div className="d-flex justify-content-around padding-top-20px">
                      <div className="btn-box hero-btn-box">
                        <Link to="register-laboratory" className="template-btn mr-3">Laboratórios</Link>
                      </div>
                      <div className="btn-box hero-btn-box">
                        <Link to="register-institution" className="template-btn mr-3">Instituições</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
