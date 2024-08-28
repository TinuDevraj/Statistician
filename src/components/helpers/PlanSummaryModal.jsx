import React from "react";
import { Modal, Button } from "react-bootstrap";
import { SemiCircleProgress } from "react-semicircle-progressbar";
import StarIcon from "../../SVG/Star.svg";

const PlanSummaryModal = ({ show, onHide, percentage }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName="plan-summary-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center upload-title">Plan Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <div style={{ width: "100%", height: "150px", margin: "0 auto" }}>
          <SemiCircleProgress
            percentage={percentage}
            size={{
              width: 250,
              height: 200,
            }}
            strokeLinecap={"butt"}
            strokeWidth={18}
            strokeColor="#2087fe"
            hasBackground={true}
            bgStrokeColor="#eee"
          />

          <p className="storage-used-modal-text">Storage Used</p>
        </div>
        <hr  style={{marginTop:"50px"}}/>
        <p className="mt-3" style={{ fontSize: "1rem", color: "#6c757d" }}>
          You have only 4 pages left!
        </p>
        <Button variant="warning" style={{ color: "#000" }}>
          <img src={StarIcon} alt="Star Icon" /> Upgrade
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default PlanSummaryModal;
