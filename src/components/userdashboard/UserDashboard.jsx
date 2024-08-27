import React from 'react';
import './UserDashboard.css';
import { SemiCircleProgress } from 'react-semicircle-progressbar'; 
import { Button } from 'react-bootstrap';
import  SettingsBtn from "../../icons/Settings.svg"
import  StarIcon from "../../icons/Star.svg"
import  UploadIcon from "../../icons/Upload.svg"




const SemiCircleProgressBar = ({percentage}) => {
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
      <p className="storage-used ">Storage Used</p>
    </div>
  );
};

const UserDashboard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="dashboard-container" style={{ width: '500px' }}>
        
        {/* User Information Section */}
        <div className="card p-3 mb-3 user-info-section">
          <div className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="rounded-circle me-3"
              style={{ width: '40px', height: '40px' }}
            />
            <div>
              <div className="fw-bold">User Name</div>
              <div className="text-muted">user@gmail.com</div>
            </div>
            <Button className='settings-btn'><img src={SettingsBtn} alt="Settings Icon"/></Button>
          </div>
        </div>

        {/* Plan Details Section */}
        <div className="card p-4 plan-details-section">
          <h5 className="plan-details">Plan Details</h5>
          <div className="text-center mb-4 d-flex flex-row justify-content-between">
            <h5 className="fw-bold">Premium</h5>
            <button className="btn btn-warning"><img src={StarIcon} alt="Star Icon" /> Upgrade</button>
          </div>

          <div className="text-center">
            <SemiCircleProgressBar percentage={60} />
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
            <button className="btn upload-btn w-50"><img src={UploadIcon} alt="upload Icon" /> Upload</button>
          </div>
        
      </div>
    </div>
  );
};

export default UserDashboard;
