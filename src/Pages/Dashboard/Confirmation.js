import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Confirmation = ({ show, handleClose, handleDelete }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Are you sure</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Once you cancel, order can never be restored.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Go back</Button>
                <Button variant="danger" onClick={handleDelete}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Confirmation;