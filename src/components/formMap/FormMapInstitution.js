import React, {useState} from 'react'
import Maps from '../contact/ContactMap'
import {FormContext} from './context/FormContext'
import {InsFormWrapper} from './forms/formWraper/InsFormWrapper'

// A new component that contain ContactFormLeft component and Maps component
const FormMapInstitution = () => {
  const [institutionFormData, setInstitutionFormData] = useState( {
    institution_address: '',
    institution_district: '',
    institution_email: '',
    institution_name: '',
    institution_phone: '',
    registered_institution_password: '',
    registered_institution_password_confirm: '',
    responsible_email: '',
    responsible_name: '',
    responsible_phone: ''
  } )
  const [coords, setCoords] = useState( 'institution_coordinates' )

  return (
    <FormContext.Provider value={{institutionFormData, setInstitutionFormData, coords, setCoords}}>
      <section className='container d-md-flex justify-content-around margin-bottom-120px margin-top-120px'>
        <InsFormWrapper/>
        <Maps/>
      </section>
    </FormContext.Provider>
  )
}

export default FormMapInstitution