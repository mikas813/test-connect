import {validateEmail}  from './utils.js'


// The institution object validation function
// Checks if inputs are empty and sets error message
export default function instFormValidation(values) {
  let errors = {}

  if (!values.institution_name) {
    errors.institution_name = 'Introduza o nome de instituicao!'
  }
  if (!values.institution_email) {
    errors.institution_email = 'Introduza o email de instituicao!'
    // Validate email from input using regular expression from validateEmail function
  } else
    if (!validateEmail( values.institution_email )) {
      errors.institution_email = 'Introduza o email valido!'
    }

  if (!values.institution_phone) {
    errors.institution_phone = 'Introduza o numero de contacto de instituicao!'
    // Validates if number is greater than 9 digits
  } else
    if (values.institution_phone.length < 9) {
      errors.institution_phone = 'O numero deve ter 9 caracteres'
    }

  if (!values.institution_district) {
    errors.institution_district = 'Introduza o distrito de instituicao!'
  }

  if (!values.institution_coordinates) {
    errors.institution_coordinates = 'Escolha na mapa localidade de instituicao!'
  }

  if (!values.institution_address) {
    errors.institution_address = 'Introduza a morada de instituicao!'
  }

  if (!values.responsible_name) {
    errors.responsible_name = 'Introduza o nome de responsavel de instituicao!'
  }

  // Checks if email input is empty
  if (!values.responsible_email) {
    errors.responsible_email = 'Introduza o email de responsavel de instituicao!'
    // Validate email from input using regular expression from validateEmail function
  } else
    if (!validateEmail( values.responsible_email )) {
      errors.responsible_email = 'Introduza o email valido!'
    }

  if (!values.responsible_phone) {
    errors.responsible_phone = 'Introduza o numero de contacto de responsavel de instituicao!'
    // Validates if number is greater than 9 digits
  } else
    if (values.responsible_phone.length < 9) {
      errors.responsible_phone = 'O numero deve ter 9 caracteres'
    }
  if (!values.registered_institution_password) {
    errors.registered_institution_password = 'Defina uma password!'
    // Validates password length
  } else
    if (values.registered_institution_password.length < 6) {
      errors.registered_institution_password = 'A password deve ter entre 6 e 20 caracteres'
    }

  if (!values.registered_institution_password_confirm) {
    errors.registered_institution_password_confirm = 'Confirme a password!'
    // Validates password length
  } else
    if (values.registered_institution_password_confirm.length < 6) {
      errors.registered_institution_password_confirm = 'A password deve ter entre 6 e 20 caracteres'
      // Checks if password confirmation is equal to current password
    } else
      if (values.registered_institution_password_confirm !== values.registered_institution_password) {
        errors.registered_institution_password_confirm = 'A password e a confirmação não correspondem.'
      }

  return errors
}

