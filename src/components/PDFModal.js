// import React from 'react';
// import Modal from 'react-modal';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import { pdfjs } from 'react-pdf';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import { IoMdClose } from "react-icons/io";


// // Ensure you have the correct version installed and use the correct URL
// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`;

// const PDFModal = ({ isOpen, onRequestClose, pdfUrl }) => {
//     console.log('pdfUrl====', pdfUrl);
//     return (
//         <Modal
//             isOpen={isOpen}
//             onRequestClose={onRequestClose}
//             contentLabel="PDF Modal"
//             className="modal"
//             overlayClassName="overlay"
//         >
//            <div>
//            <div className='bg-white h-[40px] top-0 pr-[10px] z-[22] sticky flex justify-end items-center'>
//             <IoMdClose className='text-black flex justify-end text-right cursor-pointer' onClick={onRequestClose}/>
//             </div>

//             <div>
//                 <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
//                     <Viewer fileUrl={pdfUrl} />
//                 </Worker>
//             </div>
//            </div>
//         </Modal>
//     );
// };

// export default PDFModal;
import React from 'react';
import Modal from 'react-modal';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { IoMdClose } from "react-icons/io";

// Ensure you have the correct version installed and use the correct URL
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`;

// Custom styles for Modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        background: 'white',
        width: '100%',
        height: '100%',
        maxWidth: '1000px',
        maxHeight: '800px',
        overflowY: 'auto',
        borderRadius: '8px',
        padding: 0,
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 99,
    },
};

const PDFModal = ({ isOpen, onRequestClose, pdfUrl }) => {
    console.log('pdfUrl====', pdfUrl);
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="PDF Modal"
            style={customStyles}
        >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className='bg-white h-[40px] pr-[10px] z-[22] flex justify-end items-center sticky top-0' style={{ padding: '10px' }}>
                    <IoMdClose className='text-black cursor-pointer' onClick={onRequestClose} />
                </div>
                <div style={{ flex: 1, padding: '10px' }}>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                        <Viewer fileUrl={pdfUrl} />
                    </Worker>
                </div>
            </div>
        </Modal>
    );
};

export default PDFModal;
