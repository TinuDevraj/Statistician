import React, { useState } from "react";
import "./UserDashboard.css";
import { SemiCircleProgress } from "react-semicircle-progressbar";
import UploadProgressModal from "../helpers/UploadProgressModal";
import PlanSummaryModal from "../helpers/PlanSummaryModal";
import { Button, Modal } from "react-bootstrap";
import SettingsBtn from "../../SVG/Settings.svg";
import StarIcon from "../../SVG/Star.svg";
import UploadIcon from "../../SVG/Upload.svg";
import AlertIcon from "../../SVG/Alert.svg";
import Alert from "react-bootstrap/Alert";

const SemiCircleProgressBar = ({ percentage }) => {
  return (
    <div className="semi-circle-container">
      <SemiCircleProgress
        percentage={percentage}
        size={{
          width: 300,
          height: 200,
        }}
        strokeLinecap={"butt"}
        strokeWidth={18}
        strokeColor="#2087fe"
        hasBackground={true}
        bgStrokeColor="#eee"
      />
      <p className="storage-used">Storage Used</p>
    </div>
  );
};

const UserDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showProgressModal, setshowProgressModal] = useState(true);
  const [showPlanSummaryModal, setshowPlanSummaryModal] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [progress, setProgress] = useState(70);
  const percentage = 70;

  const handleClose = () => setShowModal(false);
  const handleCloseProgress = () => setshowProgressModal(false);
  const handleClosePlanSummaryModal = () => setshowPlanSummaryModal(false);

  const handleShow = () => setShowModal(true);

  const handleFileClick = () => {
    document.getElementById("file-upload").click();
  };

  const toggleAlert = () => setShowAlert(!showAlert);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="dashboard-container" style={{ width: "500px" }}>
        {/* User Information Section */}
        <div className="card p-3 mb-3 user-info-section">
          <div className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="rounded-circle me-3"
              style={{ width: "40px", height: "40px" }}
            />
            <div>
              <div className="fw-bold">User Name</div>
              <div className="text-muted">user@gmail.com</div>
            </div>
            <Button className="settings-btn" onClick={toggleAlert}>
              <img src={SettingsBtn} alt="Settings Icon" />
            </Button>
          </div>
        </div>
        <div
          className={`Alert alert-transition ${
            !showAlert ? "alert-hidden" : ""
          }`}
        >
          {showAlert && (
            <Alert variant={"danger"} className="Alert">
              <img
                src={AlertIcon}
                alt="Alert Icon"
                style={{ paddingRight: "20px", paddingLeft: "10px" }}
              />
              Plan expiring in 3 days
            </Alert>
          )}
        </div>

        {/* Plan Details Section */}
        <div className="card p-4 plan-details-section">
          <h5 className="plan-details">Plan Details</h5>
          <div className="text-center mb-4 d-flex flex-row justify-content-between">
            <h5 className="fw-bold">Premium</h5>
            <button className="btn btn-warning">
              <img src={StarIcon} alt="Star Icon" /> Upgrade
            </button>
          </div>

          <div className="text-center">
            <SemiCircleProgressBar percentage={percentage} />
          </div>

          <div className="d-flex justify-content-around text-center mb-4">
            <div>
              <div className="fw-bold">10</div>
              <div className="text-muted">Pages Left</div>
            </div>
            <div>
              <div className="fw-bold">120</div>
              <div className="text-muted">Days Left</div>
            </div>
            <div>
              <div className="fw-bold">1GB</div>
              <div className="text-muted">Storage Left</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn upload-btn w-50" onClick={handleShow}>
            <img src={UploadIcon} alt="Upload Icon" /> Upload
          </button>
        </div>

        {/* Upload Modal */}
        <Modal
          show={showModal}
          onHide={handleClose}
          centered
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="w-100 text-center upload-title">
              Upload Files
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <div className="upload-icon-circle">
              <input
                type="file"
                id="file-upload"
                style={{
                  position: "absolute",
                  width: "35%",
                  height: "50%",
                  opacity: 0,
                  cursor: "pointer",
                }}
                onChange={(e) => console.log(e.target.files)}
              />
              <img
                src={UploadIcon}
                alt="Upload Icon"
                style={{ fontSize: "5rem", color: "#fff" }}
                width={"40px"}
              />
            </div>
            <p
              className="mt-3"
              style={{ fontSize: "0.8rem", color: "#6c757d" }}
            >
              Drag and drop files here or{" "}
              <a
                href="#"
                style={{ fontSize: "0.8rem", color: "#007bff" }}
                onClick={handleFileClick}
                className="text-decoration-none"
              >
                Click here
              </a>
            </p>
          </Modal.Body>
        </Modal>
      </div>
      {/*<UploadProgressModal show={showProgressModal} onHide={handleCloseProgress} progress={progress} />*/}
      {/*<PlanSummaryModal show={showPlanSummaryModal} onHide={handleClosePlanSummaryModal} percentage={percentage}/>*/}
    </div>
  );
};

export default UserDashboard;
