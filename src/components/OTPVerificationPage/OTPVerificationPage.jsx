import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useTheme } from "../ThemeContext";
// import { resetPassword, verifyOTP } from "../../services/ForgotPassword";
// import { useLocation, useNavigate } from "react-router-dom";
import "./otpverificationpage.css";

const OTPVerificationPage = () => {
  // const navigate = useNavigate(); // Initialize navigate function

  const [email, setEmail] = useState('');
  const [isConfirmPassword, setConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  // const location = useLocation();
  // useEffect(() => {
  //   if (location.state && location.state.userMail) {
  //     setEmail(location.state.userMail);
  //   } else {
  //     console.log('NO mail');
  //     // navigate('/');
  //   }
  // }, [location]);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const { isDarkMode } = false;

  // const handleChange = (element, index) => {
  //   if (isNaN(element.value)) return false;

  //   const newOtp = [...otp];
  //   newOtp[index] = element.value;
  //   setOtp(newOtp);

  //   if (element.nextSibling && element.value) {
  //     element.nextSibling.focus();
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setConfirmPassword(true);
  //   console.log("Submitted OTP:", otp.join(""));
  //   try {
  //     const response = await verifyOTP(email, otp.join(""), "PASSWORD");
  //     if (response === "success") {
  //       // setShowOtp(false);
  //       // setShowPasswordFields(true);
  //     }
  //     if (response === "expired") {
  //     }
  //   } catch (error) {
  //     // setError("Incorrect OTP. Please en ter the correct OTP.");
  //   }
  //   // Add further OTP validation and submission logic here
  // };

  // const handleNewPasswordChange = (event) => {
  //   event.preventDefault();
  //   setNewPassword(event.target.value);
  // };

  // const handleConfirmNewPasswordChange = (event) => {
  //   event.preventDefault();
  //   setConfirmNewPassword(event.target.value);
  // };
  // const handlePasswordReset = async (event) => {
  //   event.preventDefault();
  //   if (newPassword !== confirmNewPassword) {
  //     // setError(
  //     //   "Passwords do not match. Please make sure both passwords are the same."
  //     // );
  //     return;
  //   }
  //   try {
  //     const response = await resetPassword(email, confirmNewPassword);
  //     // Handle response data if needed
  //     if (response === "success") {
  //       // setNotification("Password reset successfully.");
  //       // navigate("/"); // Navigate to main page
  //     }
  //   } catch (error) {
  //     // setError("Failed to reset password. Please try again.");
  //   }
  // };

  const darkModeStyles = {
    backgroundColor: isDarkMode ? "#121212" : "#f5f5f5",
    color: isDarkMode ? "white" : "black",
  };

  const inputStyles = {
    backgroundColor: isDarkMode ? "#333" : "#f5f5f5",
    color: isDarkMode ? "white" : "black",
    border: "none",
    boxShadow: "none",
  };

  return (
    <Container fluid className="vh-100 d-flex flex-column" style={darkModeStyles}>
      <Row className="py-3 px-3">
        <Col className="d-flex justify-content-between align-items-center">
          <Col>
            <div className="product-name">G GENIEEPRO</div>
          </Col>
          <div>
            <Button 
              variant={isDarkMode ? "outline-light" : "outline-secondary"} 
              size="sm"
              // onClick={() => navigate("/")}
              >
              Back to Sign In
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="flex-grow-1 justify-content-center align-items-center">
        {!isConfirmPassword && <Col xs={12} md={6} lg={4} className="text-center">
          <h1 className="mb-3 fw-bold" style={{ fontSize: "2.5rem" }}>
            We've Sent You A Code
          </h1>
          <h5 className="mb-5" style={{ color: isDarkMode ? "#aaa" : "#6c757d" }}>
            Please check your email and enter the code below.
          </h5>
          <Form >
            <div className="rounded-4 p-4 shadow" style={{ width: "100%", backgroundColor: isDarkMode ? "#1e1e1e" : "white" }}>
              <div className="d-flex justify-content-between mb-4">
                {otp.map((data, index) => (
                  <Form.Control
                    key={index}
                    type="text"
                    maxLength="1"
                    className="form-control text-center mx-1 mb-3 otp-input"
                    style={inputStyles}
                    value={data}
                    // onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                ))}
              </div>
              <Button variant="primary" type="submit" className="w-100 py-3 rounded-pill otp-submit-button" style={{ backgroundColor: "#8A2BE2", borderColor: "#8A2BE2" }}>
                Submit OTP
              </Button>
            </div>
          </Form>
        </Col>}
          {isConfirmPassword&& 
          <div className="d-flex justify-content-center mb-4">
            <div
              className="rounded-4 p-4 shadow"
              style={{
                width: "30%",
                backgroundColor: isDarkMode ? "rgb(30, 30, 30)" : "white",
              }}
            >
              <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="d-flex justify-content-center">Confirm Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the new password"
                    value={email}
                    // onChange={handleNewPasswordChange}
                    className={`border-0 py-2 my-3 ${
                      isDarkMode ? "bg-dark text-light" : "bg-light"
                    }`}
                  />
                   <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    value={email}
                    // onChange={handleConfirmNewPasswordChange}
                    className={`border-0 py-2 my-3 ${
                      isDarkMode ? "bg-dark text-light" : "bg-light"
                    }`}
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button
                    variant="primary"
                    type="submit"
                    className="py-2 rounded-pill"
                    style={{
                      backgroundColor: "#8A2BE2",
                      borderColor: "#8A2BE2",
                    }}
                  >
                    Continue
                  </Button>
                </div>
              </Form>
            </div>
          </div>
          }
      </Row>
    </Container>
  );
};

export default OTPVerificationPage;
