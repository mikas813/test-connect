import React, {useState} from 'react'
import Maps from '../contact/ContactMap'
import {FormContext} from './context/FormContext'
import {LabFormWrapper} from './forms/formWraper/LabFormWrapper'

// A new component that contains ContactFormLeft component and Maps component
const FormMapLaboratory = () => {
  const [laboratoryFormData, setLaboratoryFormData] = useState( {
    laboratory_address: '',
    laboratory_district: '',
    laboratory_email: '',
    laboratory_name: '',
    laboratory_phone: '',
    registered_laboratory_password: '',
    registered_laboratory_password_confirm: '',
    responsible_email: '',
    responsible_name: '',
    responsible_phone: ''
  } )
  const [coords, setCoords] = useState( 'laboratory_coordinates' )

  return (
    <FormContext.Provider value={{laboratoryFormData, setLaboratoryFormData, coords, setCoords}}>
      <section className='container d-md-flex justify-content-around margin-bottom-120px margin-top-120px'>
        <LabFormWrapper/>
        <Maps/>
      </section>
    </FormContext.Provider>
  )
}

export default FormMapLaboratory