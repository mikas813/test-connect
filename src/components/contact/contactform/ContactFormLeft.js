import React, { Component } from 'react'
import {InstituitionForm} from '../../formMap/forms/InstitutionForm'

export default class ContactFormLeft extends Component {
    render() {
        return (
          // Changed some css properties to make ContactFormLeft component responsive with Map component
            <div className="d-block mr-3 w-100 margin-bottom-90px">
                <div className="user-form-wrap">
                    <InstituitionForm />
                </div>
            </div>
        )
    }
}
