 import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SummaryModal = ({ show, onHide, data }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Application Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Name:</strong> {data.fullName}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>CNIC:</strong> {data.cnic}</p>
        <p><strong>Education:</strong> {data.education}</p>
        <p><strong>Preferred Role:</strong> {data.role}</p>
        <p><strong>Skills:</strong> {data.skills.join(', ')}</p>
        <p><strong>CV:</strong> {data.cv?.name}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SummaryModal;
