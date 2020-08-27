import {validateEmail}  from './utils.js'

// The laboratory object validation function
export default function labFormValidation(values) {
  let errors = {}

  if (!values.laboratory_name) {
    errors.laboratory_name = 'Introduza o nome de laboratorio!'
  }

  if (!values.laboratory_email) {
    errors.laboratory_email = 'Introduza o email de laboratorio!'
    // Validate email from input using regular expression from validateEmail function
  } else
    if (!validateEmail( values.laboratory_email )) {
      errors.laboratory_email = 'Introduza o email valido!'
    }

  if (!values.laboratory_phone) {
    errors.laboratory_phone = 'Introduza o numero de contacto de laboratorio!'
    // Validates if number is greater than 9 digits
  } else
    if (values.laboratory_phone.length < 9) {
      errors.laboratory_phone = 'O numero deve ter 9 caracteres'
    }

  if (!values.laboratory_district) {
    errors.laboratory_district = 'Esclolha o distrito de laboratorio!'
  }

  if (!values.laboratory_coordinates) {
    errors.laboratory_coordinates = 'Escolha na mapa localidade de laboratorio!'
  }

  if (!values.laboratory_address) {
    errors.laboratory_address = 'Introduza a morada de laboratorio!'
  }

  if (!values.responsible_name) {
    errors.responsible_name = 'Introduza o nome de responsavel de laboratorio!'
  }

  if (!values.responsible_email) {
    errors.responsible_email = 'Introduza o email de responsavel de laboratorio!'
    // Validate email from input using regular expression from validateEmail function
  } else
    if (!validateEmail( values.responsible_email )) {
      errors.responsible_email = 'Introduza o email valido!'
    }

  if (!values.responsible_phone) {
    errors.responsible_phone = 'Introduza o numero de contacto de responsavel de laboratorio!'
    // Validates if number is greater than 9 digits
  } else
    if (values.responsible_phone.length < 9) {
      errors.responsible_phone = 'O numero deve ter 9 caracteres'
    }

  if (!values.registered_laboratory_password) {
    errors.registered_laboratory_password = 'Defina uma password!'
    // Validates password length
  } else
    if (values.registered_laboratory_password.length < 6) {
      errors.registered_laboratory_password = 'A password deve ter entre 6 e 20 caracteres'
    }

  if (!values.registered_laboratory_password_confirm) {
    errors.registered_laboratory_password_confirm = 'Confirme a password!'
    // Validates password length
  } else
    if (values.registered_laboratory_password_confirm.length < 6) {
      errors.registered_laboratory_password_confirm = 'A password deve ter entre 6 e 20 caracteres'
      // Checks if password confirmation is equal to current password
    } else
      if (values.registered_laboratory_password_confirm !== values.registered_laboratory_password) {
        errors.registered_laboratory_password_confirm = 'A password e a confirmação não correspondem.'
      }
  return errors
}

