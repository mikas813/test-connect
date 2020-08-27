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

export const LaboratoryForm = () => {

  const {
    getDataFromInput,
    submitHandler,
    laboratoryFormData,
    coords,
    errorMessages
  } = useForm( submit )

  const [modalShow, setModalShow] = React.useState( false )
  const [closeIcon, setCloseIcon] = useState( false )
  const {latitude, longitude} = coords
  let coordsValue = `${latitude}, ${longitude}`

  //function that shows in console data from form
  function submit() {
    setModalShow( true )
    console.log( 'Laboratório esta registado', laboratoryFormData )
  }

  return (
    <Accordion defaultActiveKey="0">
      <ModalWindow
        heading='Registado com sucesso!'
        title="Obrigado por registar o Laboratório."
        text='O Laboratório esta registado com sucesso brevemente vai receber o e-mail de confirmacao com dados de acesso.'
        onHide={() => setModalShow( false )}
        show={modalShow}
      />
      <div className="team-form padding-top-45px">
        <div className="user-form">
          <div className="contact-form-action">
            <form
              autoComplete='off'
              onSubmit={(e) => {
                submitHandler( e, laboratoryFormData )
              }}
            >
              <Accordion.Toggle
                className='accordion-toggle-btn border-bottom'
                eventKey="0"
                onClick={() => {
                  setCloseIcon( !closeIcon )
                }}
              >Dados de Laboratorio.
                {closeIcon ? <FaPlus className="input-icon ml-3"/> : <FaTimes className="input-icon ml-3"/>}
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0">
                <div>

                  {/*Laboratory data*/}
                  <div className="input-box">
                    {errorMessages.laboratory_name && <p className="text-danger">{errorMessages.laboratory_name}</p>}
                    <div className="form-group">
                      <input className="form-control"
                             onChange={(e) => getDataFromInput( e )}
                             value={laboratoryFormData.laboratory_name}
                             type="text"
                             id="name"
                             name="laboratory_name"
                             placeholder="Nome de laboratório"/>
                      <FiUser className="input-icon"/>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.laboratory_email &&
                    <p className="text-danger">{errorMessages.laboratory_email}</p>}
                    <div className="form-group">
                      <input className="form-control"
                             onChange={(e) => getDataFromInput( e )}
                             value={laboratoryFormData.laboratory_email}
                             type="text" // If type text prevents safari bug
                             id="email"
                             name="laboratory_email"
                             placeholder="Email de laboratório"/>
                      <FaRegEnvelope className="input-icon"/>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.laboratory_phone &&
                    <p className="text-danger">{errorMessages.laboratory_phone}</p>}
                    <div className="form-group">
                      <input className="form-control"
                             onChange={(e) => getDataFromInput( e )}
                             value={laboratoryFormData.laboratory_phone}
                             type="number"
                             id="phone"
                             name="laboratory_phone"
                             placeholder="Telefone de laboratório"/>
                      <FaPhone className="input-icon"/>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.laboratory_district &&
                    <p className="text-danger">{errorMessages.laboratory_district}</p>}
                    <div className="form-group">
                      <FaCity className="input-icon position-absolute"/>
                      <select className="custom-select form-control"
                              name="laboratory_district"
                              onChange={(e) => getDataFromInput( e )}
                              value={laboratoryFormData.laboratory_district}
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
                    {errorMessages.laboratory_coordinates &&
                    <p className="text-danger">{errorMessages.laboratory_coordinates}</p>}
                    <div className="form-group">
                      <input
                        className="form-control"
                        value={latitude && longitude ? coordsValue : 'Escolha localizacao na mapa'}
                        onChange={(e) => getDataFromInput( e )}
                        type="text"
                        id="laboratory_coordinates"
                        name="laboratory_coordinates"
                        readOnly={true}
                      />
                      <FaSearchLocation className="input-icon"/>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.laboratory_address &&
                    <p className="text-danger">{errorMessages.laboratory_address}</p>}
                    <div className="form-group mb-3">
                  <textarea
                    onChange={(e) => getDataFromInput( e )}
                    value={laboratoryFormData.laboratory_address}
                    className="message-control form-control"
                    name="laboratory_address"
                    placeholder="Morada de laboratório">
                  </textarea>
                      <FiEdit2 className="input-icon"/>
                    </div>
                  </div>
                  {/*Laboratory data*/}

                </div>
              </Accordion.Collapse>

              <Accordion.Toggle
                className='accordion-toggle-btn border-bottom'
                eventKey="1"
                onClick={() => {
                  setCloseIcon( !closeIcon )
                }}
              >Dados de responsavel de laboratorio.
                {closeIcon ? <FaTimes className="input-icon ml-3"/> : <FaPlus className="input-icon ml-3"/>}
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="1">
                <div>

                  {/*Responsible data*/}
                  <div className="input-box">
                    {errorMessages.responsible_name && <p className="text-danger">{errorMessages.responsible_name}</p>}
                    <div className="form-group">
                      <input className="form-control"
                             onChange={(e) => getDataFromInput( e )}
                             value={laboratoryFormData.responsible_name}
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
                             value={laboratoryFormData.responsible_email}
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
                             value={laboratoryFormData.responsible_phone}
                             type="number"
                             id="userPhone"
                             name="responsible_phone"
                             placeholder="Telefone de Responsavel"/>
                      <FaPhone className="input-icon"/>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.registered_laboratory_password &&
                    <p className="absolute text-danger">{errorMessages.registered_laboratory_password}</p>}
                    <div className="form-group">
                      <input className="form-control"
                             onChange={(e) => getDataFromInput( e )}
                             value={laboratoryFormData.registered_laboratory_password}
                             type="password"
                             id="userPassword"
                             name="registered_laboratory_password"
                             placeholder="Password"/>
                      <FaLock className="input-icon"/>
                    </div>
                  </div>

                  <div className="input-box">
                    {errorMessages.registered_laboratory_password_confirm &&
                    <p className="text-danger">{errorMessages.registered_laboratory_password_confirm}</p>}
                    <div className="form-group">
                      <input className="form-control"
                             onChange={(e) => getDataFromInput( e )}
                             value={laboratoryFormData.registered_laboratory_password_confirm}
                             type="password"
                             id="repeteUserPassword"
                             name="registered_laboratory_password_confirm"
                             placeholder="Repita password"/>
                      <FaLock className="input-icon"/>
                    </div>
                  </div>
                  {/*Responsible data*/}

                  {/*//Submit button*/}
                  <div className="btn-box mt-5 mb-5">
                    <div className="form-group text-center mb-0">
                      <button className="template-btn border-0 w-100"
                              type="submit">Registar Laboratório
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
