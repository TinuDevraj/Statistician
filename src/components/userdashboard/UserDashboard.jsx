import React, { useState } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import './UserDashboard.css'; // Optional: Create a separate CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCog, faCloudArrowUp, faExpand, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function UserDashboard() {
  const [files, setFiles] = useState([
    'Name.xlsx',
    'Name.xlsx',
    'Name.xlsx'
  ]);

  const handleFileUpload = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setFiles([...files, newFile.name]);
    }
  };

  return (
    <div className="user-dashboard">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
        <FontAwesomeIcon icon={faCog} size="2x" />
      </div>

      <div className="user-info mb-3 p-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5>Username</h5>
          <span className="badge bg-secondary">Plan: Gold</span>
        </div>
        <ProgressBar now={50} label="Pages left: 4" className="mb-2" />
        <Button variant="dark" className="w-100">Upgrade Plan</Button>
      </div>

      <div className="files-section mb-3">
        <h6>Files</h6>
        {files.map((file, index) => (
            <div className="custom-file-item">
          {file}
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-around mt-4">
        <input type="file" onChange={handleFileUpload} className="d-none" id="file-upload" />
        <label htmlFor="file-upload" className="upload-btn">
        <FontAwesomeIcon icon={faCloudArrowUp}  size="2x"/>
        </label>
        <FontAwesomeIcon icon={faExpand} size="2x" />
      </div>

      <div className="text-center mt-4">
        <FontAwesomeIcon icon={faTimesCircle} size="2x" />
      </div>
    </div>
  );
}

export default UserDashboard;
