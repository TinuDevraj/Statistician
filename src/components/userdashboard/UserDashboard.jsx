import React, { useEffect, useState, useCallback } from "react";
import "./UserDashboard.css";
import { SemiCircleProgress } from "react-semicircle-progressbar";
import { Button, Modal, Alert } from "react-bootstrap";
import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import SettingsBtn from "../../SVG/Settings.svg";
import StarIcon from "../../SVG/Star.svg";
import UploadIcon from "../../SVG/Upload.svg";
import AlertIcon from "../../SVG/Alert.svg";
import PlanSummaryModal from "../helpers/PlanSummaryModal";
import UploadProgressModal from "../helpers/UploadProgressModal";

const SemiCircleProgressBar = ({ percentage }) => (
  <div className="semi-circle-container">
    <SemiCircleProgress
      percentage={percentage}
      size={{ width: 300, height: 200 }}
      strokeLinecap="butt"
      strokeWidth={18}
      strokeColor="#2087fe"
      hasBackground
      bgStrokeColor="#eee"
    />
    <p className="storage-used">Storage Used</p>
  </div>
);

const UserDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showProgressModal, setshowProgressModal] = useState(false);
  const [type, setType] = useState(false);
  const [showPlanSummaryModal, setshowPlanSummaryModal] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  // const [progress, setProgress] = useState(70);
  const [convertedData, setConvertedData] = useState(null);
  const [fileResponse, setFileResponse] = useState(null);
  const percentage = 70;

  const toggleAlert = () => setShowAlert((prev) => !prev);

  const handleFileUpload = useCallback(async (formData) => {
    setshowProgressModal(true);
    setType("Uploading");
    try {
      const response = await axios.post(
        "https://docgeniee.org/DOC/upload",
        formData
      );
      setFileResponse(response.data.filenames);
    } catch (error) {
      setshowProgressModal(false);
      console.error("Error uploading file:", error);
    }
  }, []);

  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (files.length === 0) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("file", file));

    await handleFileUpload(formData);
  };

  const processFile = useCallback(async (fileData) => {
    setshowProgressModal(true);
    setType("Processing");
    try {
      const response = await axios.post(
        "https://docgeniee.org/DOC/process",
        fileData
      );
      if (response.data.status === "success") {
        setConvertedData(response.data.results);
        setType(false);
      }
    } catch (error) {
      setshowProgressModal(false);
      console.error("Error processing file:", error);
    }
  }, []);

  const exportToExcel = useCallback(() => {
    if (!convertedData || convertedData.length === 0) {
      console.error("No data available to export");
      return;
    }

    const workbook = XLSX.utils.book_new();

    convertedData.forEach((data) => {
      const { invoice_header, item_details } = data;

      if (invoice_header) {
        const invoiceHeaderSheet = XLSX.utils.json_to_sheet(invoice_header);
        XLSX.utils.book_append_sheet(
          workbook,
          invoiceHeaderSheet,
          "Invoice Header"
        );
      }

      if (item_details) {
        const itemDetailsSheet = XLSX.utils.json_to_sheet(item_details);
        XLSX.utils.book_append_sheet(
          workbook,
          itemDetailsSheet,
          "Item Details"
        );
      }
    });

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "invoice_data.xlsx");
  }, [convertedData]);

  useEffect(() => {
    if (fileResponse) {
      processFile({ filenames: fileResponse });
    }
  }, [fileResponse, processFile]);

  useEffect(() => {
    if (convertedData) {
      exportToExcel();
    }
  }, [convertedData, exportToExcel]);

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
            <Alert variant="danger" className="Alert ">
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
          <button
            className="btn upload-btn w-50"
            onClick={() => setShowModal(true)}
          >
            <img src={UploadIcon} alt="Upload Icon" />
            Upload
          </button>
        </div>

        {/* Upload Modal */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
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
                onChange={handleFileChange}
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
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("file-upload").click();
                }}
                className="text-decoration-none"
              >
                Click here
              </a>
            </p>
          </Modal.Body>
        </Modal>
      </div>
      <UploadProgressModal
        show={showProgressModal}
        onHide={setshowProgressModal}
        type={type}
      />
      {/* <PlanSummaryModal show={showPlanSummaryModal} onHide={handleClosePlanSummaryModal} percentage={percentage}/> */}
    </div>
  );
};

export default UserDashboard;
