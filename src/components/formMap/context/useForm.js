import React, {useState, useEffect, useContext} from 'react'
import labFormValidation from './labFormValidation'
import instFormValidation from './instFormValidation'
import {FormContext} from './FormContext'

export const useForm = (callback) => {

  const {laboratoryFormData, setLaboratoryFormData, coords, setCoords} = useContext( FormContext )
  const {institutionFormData, setInstitutionFormData} = useContext( FormContext )
  const [errorMessages, setErrorMessages] = useState( {} )
  const [isSubmitting, setIsSubmitting] = useState( false )


  const getDataFromInput = (e) => {
    if (document.location.pathname === '/register-institution') {
      const {name, value} = e.target
      setInstitutionFormData( {
        ...institutionFormData,
        [name]: value
      } )
    }
    if (document.location.pathname === '/register-laboratory') {
      const {name, value} = e.target
      setLaboratoryFormData( {
        ...laboratoryFormData,
        [name]: value
      } )
    }
  }

  // Validates object's values and sets isSubmitting to true
  function submitHandler(e, object) {
    
    e.preventDefault()
    
    if (laboratoryFormData) {
      setErrorMessages( labFormValidation( object ) )
    }
    if (institutionFormData) {
      setErrorMessages( instFormValidation( object ) )
    }

    setIsSubmitting( true )
  }

  useEffect( () => {
    // Checks for error messages and if isSubmitting is true submit form
    if (Object.keys( errorMessages ).length === 0 && isSubmitting) {
      callback()

      // Clear all laboratory inputs after submission
      if (laboratoryFormData) {
        setLaboratoryFormData( {
          ...laboratoryFormData,
          laboratory_address: '',
          laboratory_district: '',
          laboratory_email: '',
          laboratory_name: '',
          laboratory_phone: '',
          registered_laboratory_password: '',
          registered_laboratory_password_confirm: '',
          laboratory_coordinates: '',
          responsible_email: '',
          responsible_name: '',
          responsible_phone: ''
        } )
      }
      setCoords( 'laboratory_coordinates' )

      // Clear all institution inputs after submission
      if (institutionFormData) {
        setInstitutionFormData( {
          ...institutionFormData,
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
      }
      setCoords( 'institution_coordinates' )
    }
    setIsSubmitting( false )
  }, [errorMessages] )

  // Onclick gets coordinates from map and sets to coors variable for map icon and for laboratoryFormData object value
  function getCoords(event) {
    setCoords( {
      latitude: event.latLng.lat(),
      longitude: event.latLng.lng()
    } )
    // Laboratory Coordinates
    if (laboratoryFormData) {
      laboratoryFormData[coords] = {
        latitude: event.latLng.lat(),
        longitude: event.latLng.lng()
      }
    }
    // Institution Coordinates
    if (institutionFormData) {
      institutionFormData[coords] = {
        latitude: event.latLng.lat(),
        longitude: event.latLng.lng()
      }
    }
    return laboratoryFormData
  }

  return {
    getCoords,
    getDataFromInput,
    submitHandler,
    coords,
    setCoords,
    setLaboratoryFormData,
    laboratoryFormData,
    isSubmitting,
    setInstitutionFormData,
    institutionFormData,
    errorMessages
  }
}
