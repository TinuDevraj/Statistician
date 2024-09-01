import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import PricingModal from "../Pricing/PricingModal";
// import { useTheme } from "../ThemeContext";
// import { sendOTP } from "../../services/ForgotPassword";
// import { useLocation, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
 
  const { isDarkMode} = false;
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   navigate("/auth/otp-verification", { state: { userMail: email } });
  //   try {
  //     const response = await sendOTP(email, "PASSWORD");
  //     // Check response data if needed
  //     if (response === "success") {
        
  //       // setNotification("OTP sent successfully. Please check your email.");
  //       // setShowOtp(true);
  //       // setOtpSent(true);
  //     }
  //   } catch (error) {
  //     // setError("Failed to send OTP. Please try again.");
  //   }
  // };

  return (
    <Container
      fluid
      className={`vh-100 d-flex flex-column ${isDarkMode ? "white" : "black"}`}
    >
      <Row className="py-3 px-3 ">
        <Col className="d-flex justify-content-between align-items-center">
          <Col>
            <div className="product-name">G GENIEEPRO</div>
          </Col>
          <div>
            <Button
              variant={isDarkMode ? "outline-light" : "outline-secondary"}
              size="sm"
              className="me-2"
              // onClick={() => navigate("/")}
            >
              Back to Sign In
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="flex-grow-1 justify-content-center align-items-center">
        <Col xs={12} md={6} lg={6}>
          <h1 className="text-center mb-4 fw-bold " style={{color:"#2287ff"}}>
            Forgot Your Password?
          </h1>
          <h5 className="text-center mb-4">
            We'll send a code to your recovery email. Please enter below.
          </h5>
          <div className="d-flex justify-content-center">
            <div
              className="rounded-4 p-4 shadow"
              style={{
                width: "65%",
                backgroundColor: isDarkMode ? "rgb(30, 30, 30)" : "white",
              }}
            >
              <Form  noValidate>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`border-0 py-3 mb-4 ${
                      isDarkMode ? "bg-dark text-light" : "bg-light"
                    }`}
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button
                    variant="primary"
                    type="submit"
                    className="py-3 rounded-pill"
                    style={{
                      backgroundColor: "#2287ff",
                      borderColor: "#8A2BE2",
                    }}
                  >
                    Continue
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
