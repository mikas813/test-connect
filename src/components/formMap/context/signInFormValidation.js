import {validateEmail}  from './utils.js'

export default function signInFormValidation(values) {
  let errors = {}



  if (!values.email) {
    errors.email = 'Introduza o email!'
  } else
    if (!validateEmail( values.laboratory_email )) {
      errors.email = 'Introduza o email valido!'
    }



  if (!values.password) {
    errors.password = 'Introduza password!'
  } else
    if (values.registered_laboratory_password.length < 6) {
      errors.registered_laboratory_password = 'A password deve ter entre 6 e 20 caracteres'
    }


  return errors
}

