import React from 'react'
import {LaboratoryForm} from '../LaboratoryForm'

export const LabFormWrapper = () => {
  return (
    // Changed some css properties to make ContactFormLeft component responsive with Map component
    <div className="d-block mr-3 w-100 margin-bottom-90px">
      <div className="user-form-wrap">
        <LaboratoryForm/>
      </div>
    </div>
  )
}
