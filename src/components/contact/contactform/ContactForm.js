import React, { Component } from 'react'
import ContactFormLeft from './ContactFormLeft'
import ContactInfo from './ContactInfo'

export default class ContactForm extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ContactFormLeft />
                    <ContactInfo />
                </div>
            </div>
        )
    }
}
