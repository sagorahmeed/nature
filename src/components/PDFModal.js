import React from 'react';
import Modal from 'react-modal';

const PDFModal = ({ isOpen, onRequestClose, pdfUrl }) => {
    console.log('pdfUrl',pdfUrl)
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="PDF Modal"
            className="modal"
            overlayClassName="overlay"
        >
            <button onClick={onRequestClose}>x</button>
            <embed src={pdfUrl} type="application/pdf" width="100%" height="100%" />
        </Modal>
    );
};

export default PDFModal;