import React, { Component } from 'react'
import AccordionItems from './AccordionItems'
import ContactForm1 from '../../contact/ContactForm1'

export default class Accordions extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <AccordionItems />
                    <ContactForm1 />
                </div>
            </div>
        )
    }
}
