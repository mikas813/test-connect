import React from 'react'
import {InstitutionForm} from '../InstitutionForm'

export const InsFormWrapper = () => {
  return (
    // Changed some css properties to make ContactFormLeft component responsive with Map component
    <div className="d-block mr-3 w-100 margin-bottom-90px">
      <div className="user-form-wrap">
        <InstitutionForm/>
      </div>
    </div>
  )
}
