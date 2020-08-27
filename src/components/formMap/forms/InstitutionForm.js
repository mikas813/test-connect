import React, {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import {useForm} from '../context/useForm'
import {ModalWindow} from '../../others/modal/ModalWindow'
import {FiUser, FiEdit2} from 'react-icons/fi'
import {
  FaRegEnvelope,
  FaSearchLocation,
  FaPhone,
  FaCity,
  FaLock,
  FaPlus,
  FaTimes
} from 'react-icons/fa'

export const InstitutionForm = () => {

  const {
    getDataFromInput,
    institutionFormData,
    errorMessages,
    submitHandler,
    coords
  } = useForm( submit )

  const [modalShow, setModalShow] = React.useState( false )
  const [closeIcon, setCloseIcon] = useState( false )
  const {latitude, longitude} = coords
  let coordsValue = `${latitude}, ${longitude}`


  //function that shows in console data from form
  function submit() {
    setModalShow( true )
    console.log( 'Instituiçāo esta registado', institutionFormData )
  }

  return (
    <Accordion defaultActiveKey="0">

      <ModalWindow
        heading='Registado com sucesso!'
        title="Obrigado por registar o Instituiçāo."
        text='O Instituiçāo esta registado com sucesso brevemente vai receber o e-mail de confirmacao com dados de acesso.'
        onHide={() => setModalShow( false )}
        show={modalShow}
      />

      <div className="team-form padding-top-45px">
        <div className="user-form">
          <div className="contact-form-action">
            <form onSubmit={(e) => {
              submitHandler( e, institutionFormData )
            }}>

              <Accordion.Toggle
                className='accordion-toggle-btn border-bottom'
                eventKey="0"
                onClick={() => {
                  setCloseIcon( !closeIcon )
                }}>Dados de Instituicao.

                {closeIcon ? <FaPlus className="input-icon ml-3"/> : <FaTimes className="input-icon ml-3"/>}

              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0">
                <div>

                  {/*Institution data*/}
                  <div className="input-box">
                    {errorMessages.institution_name &&
                    <p className="text-danger">{errorMessages.institution_name}</p>}
                    <div className="form-group">
                      <input className="form-control"
                             onChange={(e) => getDataFromInput( e )}
                             value={institutionFormData.institution_name}
                             type="text"
                             id="name"
                             name="institution_name"
                             placeholder="Nome de instituiçao"/>
                      <FiUser className="input-icon"/>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.institution_email &&
                    <p className="text-danger">{errorMessages.institution_email}</p>}
                    <div className="form-group">
                      <input className="form-control"
                             onChange={(e) => getDataFromInput( e )}
                             value={institutionFormData.institution_email}
                             type="text" // If type text prevents safari bug
                             id="email"
                             name="institution_email"
                             placeholder="Email de instituicao"/>
                      <FaRegEnvelope className="input-icon"/>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.institution_phone &&
                    <p className="text-danger">{errorMessages.institution_phone}</p>}
                    <div className="form-group">
                      <input className="form-control"
                             onChange={(e) => getDataFromInput( e )}
                             value={institutionFormData.institution_phone}
                             type="number"
                             id="phone"
                             name="institution_phone"
                             placeholder="Telefone de instituicao"/>
                      <FaPhone className="input-icon"/>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.institution_district &&
                    <p className="text-danger">{errorMessages.institution_district}</p>}
                    <div className="form-group">
                      <FaCity className="input-icon position-absolute"/>
                      <select className="custom-select form-control"
                              name="institution_district"
                              onChange={(e) => getDataFromInput( e )}
                              value={institutionFormData.institution_district}
                      >
                        <option defaultValue>Escolha Distrito</option>
                        <option value="Aveiro">Aveiro</option>
                        <option value="Beja">Beja</option>
                        <option value="Braga">Braga</option>
                        <option value="Bragança">Bragança</option>
                        <option value="Castelo Branco">Castelo Branco</option>
                        <option value="Coimbra">Coimbra</option>
                        <option value="Évora">Évora</option>
                        <option value="Faro">Faro</option>
                        <option value="Guarda">Guarda</option>
                        <option value="Leiria">Leiria</option>
                        <option value="Lisboa">Lisboa</option>
                        <option value="Portalegre">Portalegre</option>
                        <option value="Porto">Porto</option>
                        <option value="Região Autónoma da Madeira">Região Autónoma da Madeira</option>
                        <option value="Região Autónoma dos Açores">Região Autónoma dos Açores</option>
                        <option value="Santarém">Santarém</option>
                        <option value="Setúbal">Setúbal</option>
                        <option value="Viana do Castelo">Viana do Casteloto</option>
                        <option value="Vila Real">Vila Real</option>
                        <option value="Viseu">Viseu</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.institution_coordinates &&
                    <p className="text-danger">{errorMessages.institution_coordinates}</p>}
                    <div className="form-group">
                      <input
                        value={latitude && longitude ? coordsValue : 'Escolha localizacao na mapa'}
                        className="form-control"
                        readOnly={true}
                        onChange={(e) => getDataFromInput( e )}
                        type="text"
                        id="institution_coords"
                        name="geolocation"
                        placeholder="Geolocalizacao"/>
                      <FaSearchLocation className="input-icon"/>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.institution_address &&
                    <p className="text-danger">{errorMessages.institution_address}</p>}
                    <div className="form-group mb-3">
                  <textarea
                    onChange={(e) => getDataFromInput( e )}
                    value={institutionFormData.institution_address}
                    className="message-control form-control"
                    name="institution_address"
                    placeholder="Morada de instituicao">
                  </textarea>
                      <FiEdit2 className="input-icon"/>
                    </div>
                  </div>
                  {/*Institution data*/}

                </div>
              </Accordion.Collapse>

              <Accordion.Toggle
                className='accordion-toggle-btn border-bottom'
                eventKey="1"
                onClick={() => {
                  setCloseIcon( !closeIcon )
                }}
              >Dados de responsavel de instituicao.
                {closeIcon ? <FaTimes className="input-icon ml-3"/> : <FaPlus className="input-icon ml-3"/>}
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="1">
                <div>

                  {/*Responsible data*/}
                  <div className="input-box">
                    {errorMessages.responsible_name &&
                    <p className="text-danger">{errorMessages.responsible_name}</p>}
                    <div className="form-group">
                      <input className="form-control"
                             onChange={(e) => getDataFromInput( e )}
                             value={institutionFormData.responsible_name}
                             type="text"
                             id="userName"
                             name="responsible_name"
                             placeholder="Nome de Responsavel"/>
                      <FiUser className="input-icon"/>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.responsible_email &&
                    <p className="text-danger">{errorMessages.responsible_email}</p>}
                    <div className="form-group">
                      <input className="form-control"
                             onChange={(e) => getDataFromInput( e )}
                             value={institutionFormData.responsible_email}
                             type="text" // If type text prevents safari bug
                             id="userEmail"
                             name="responsible_email"
                             placeholder="Email de Responsavel"/>
                      <FaRegEnvelope className="input-icon"/>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.responsible_phone &&
                    <p className="text-danger">{errorMessages.responsible_phone}</p>}
                    <div className="form-group">
                      <input className="form-control"
                             onChange={(e) => getDataFromInput( e )}
                             value={institutionFormData.responsible_phone}
                             type="number"
                             id="userPhone"
                             name="responsible_phone"
                             placeholder="Telefone de Responsavel"/>
                      <FaPhone className="input-icon"/>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.registered_institution_password &&
                    <p className="absolute text-danger">{errorMessages.registered_institution_password}</p>}
                    <div className="form-group">
                      <input className="form-control"
                             onChange={(e) => getDataFromInput( e )}
                             value={institutionFormData.registered_institution_password}
                             type="password"
                             id="userPassword"
                             name="registered_institution_password"
                             placeholder="Password"/>
                      <FaLock className="input-icon"/>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.registered_institution_password_confirm &&
                    <p className="text-danger">{errorMessages.registered_institution_password_confirm}</p>}
                    <div className="form-group">
                      <input className="form-control"
                             onChange={(e) => getDataFromInput( e )}
                             value={institutionFormData.registered_institution_password_confirm}
                             type="password"
                             id="repeteUserPassword"
                             name="registered_institution_password_confirm"
                             placeholder="Repita password"/>
                      <FaLock className="input-icon"/>
                    </div>
                  </div>
                  {/*Responsible data*/}

                  {/*//Submit button*/}
                  <div className="btn-box mt-5 mb-5">
                    <div className="form-group text-center mb-0">
                      <button className="template-btn border-0 w-100"
                              type="submit">Registar Instituiçāo
                      </button>
                    </div>
                  </div>
                  {/*//Submit button*/}

                </div>
              </Accordion.Collapse>

            </form>
          </div>
        </div>
      </div>
    </Accordion>
  )
}
