import React from "react";
import { Modal } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const UploadProgressModal = ({ show, onHide, progress }) => {
  return (
    <Modal show={show} onHide={onHide} centered dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">Processing</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <div style={{ width: "120px", height: "120px", margin: "0 auto" }}>
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              pathColor: `#2087fe`,
              textColor: '#000',
              trailColor: '#eee',
              strokeLinecap: 'butt',
              strokeWidth: 20, // Increase the thickness of the progress bar here
              textSize: '20px',
            })}
            strokeWidth={15} // Ensure the strokeWidth is passed directly to the CircularProgressbar
          />
        </div>
        <p className="mt-3" style={{ fontSize: "0.9rem", color: "#6c757d" }}>
          This may take a while. Please Wait
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default UploadProgressModal;
