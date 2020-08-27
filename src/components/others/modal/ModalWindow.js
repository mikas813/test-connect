import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'

export const ModalWindow = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.title}</h4>
        <p>
          {props.text}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="template-btn m-auto border-0 w-25 py-1 px-2"
          onClick={props.onHide}
        >
          Fechar
        </button>
      </Modal.Footer>
    </Modal>
  );
}