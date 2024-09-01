import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
// import DarkModeToggle from "./DarkModeToggle";
// import { useTheme } from "../ThemeContext";
// import axiosInstance from "../../services/AxiosInstance";
// import TermsAndConditionsModal from "../Terms&Conditions/TermsAndConditionsModal";

const SignUp = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gst: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gst: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { isDarkMode } = false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   setErrors({ ...errors, [name]: "" });
  // };

  // const togglePasswordVisibility = (e) => {
  //   e.preventDefault();
  //   setShowPassword(!showPassword);
  // };

  // const handleTermsCheckboxChange = () => {
  //   if (!isTermsAccepted) {
  //     setShowTermsModal(true);
  //   } else {
  //     setIsTermsAccepted(false);
  //   }
  // };

  // const handleCloseTermsModal = () => {
  //   setShowTermsModal(false);
  // };

  // const handleAgreeTerms = () => {
  //   setIsTermsAccepted(true);
  //   setShowTermsModal(false);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsError(false);

  //   const newErrors = {};
  //   const { firstName, lastName, email, password, confirmPassword, gst } =
  //     formData;

  //   if (!firstName) newErrors.firstName = "Please enter your first name.";
  //   if (!lastName) newErrors.lastName = "Please enter your last name.";
  //   if (!email) newErrors.email = "Please enter your email.";
  //   else if (!emailRegex.test(email))
  //     newErrors.email = "Please enter a valid email address.";
  //   if (!password) newErrors.password = "Please enter your password.";
  //   else if (!passwordRegex.test(password)) {
  //     newErrors.password =
  //       "Password must be at least 8 characters, including uppercase, lowercase, and numbers.";
  //   }
  //   if (!confirmPassword)
  //     newErrors.confirmPassword = "Please confirm your password.";
  //   else if (password !== confirmPassword)
  //     newErrors.confirmPassword = "Passwords do not match.";

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   if (!isTermsAccepted) {
  //     setErrorMessage("Please accept the terms and conditions.");
  //     setIsError(true);
  //     return;
  //   }

  //   try {
  //     const response = await axiosInstance.post("/doc-genie/signup", {
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //       gst,
  //     });

  //     if (response.data.msg === "success") {
  //       navigate("/confirm-mail", { state: { userMail: email } });
  //     }

  //     if (!response.data.success) {
  //       throw new Error(response.data.message);
  //     }
  //   } catch (error) {
  //     console.error("Error signing up:", error);
  //     setIsError(true);
  //     setErrorMessage(
  //       error?.response?.data?.msg || "An error occurred during signup"
  //     );
  //   }
  // };

  return (
    <Container
      fluid
      className={`signup-container ${isDarkMode ? "dark-mode" : ""}`}
    >
      <Row className="header">
        <Col>
          <div className="product-name">G GENIEEPRO</div>
        </Col>
        {/*<Col xs="auto">
          <DarkModeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </Col>*/}
      </Row>
      <Row className="main-content">
        <Col md={5} className="welcome-text">
          <h1 style={{color:"#2287ff"}}>Welcome To GenieePro</h1>
          <p>Let's Get You An Account First</p>
        </Col>
        <Col md={7} className="form-container">
          <Form className="signup-form" noValidate>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    // onChange={handleChange}
                    className={`input-box ${
                      errors.firstName && "error-border"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="err-msg">{errors.firstName}</p>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    // onChange={handleChange}
                    className={`input-box ${errors.lastName && "error-border"}`}
                  />
                  {errors.lastName && (
                    <p className="err-msg">{errors.lastName}</p>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                // onChange={handleChange}
                className={`input-box ${errors.email && "error-border"}`}
              />
              {errors.email && <p className="err-msg">{errors.email}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="GST Number"
                name="gst"
                value={formData.gst}
                // onChange={handleChange}
                className={`input-box ${errors.gst && "error-border"}`}
              />
              {errors.gst && <p className="err-msg">{errors.gst}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="password-input-container">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  // onChange={handleChange}
                  className={`input-box ${errors.password && "error-border"}`}
                />
              </div>
              {errors.password && <p className="err-msg">{errors.password}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                // onChange={handleChange}
                className={`input-box ${
                  errors.confirmPassword && "error-border"
                }`}
              />
              {errors.confirmPassword && (
                <p className="err-msg">{errors.confirmPassword}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                id="termsCheckbox"
                label="By clicking on Sign Up, I accept the terms and conditions"
                // checked={isTermsAccepted}
                // onChange={handleTermsCheckboxChange}
              />
              {isError && <p className="err-msg">{errorMessage}</p>}
            </Form.Group>
            <Button variant="primary" type="submit"  disabled={!isTermsAccepted} className="w-100">
              Create Account
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="footer">
        <Col>
          <p>
            Already Have An Account?{" "}
            
          </p>
        </Col>
      </Row>
      {/*<TermsAndConditionsModal
        show={showTermsModal}
        onHide={handleCloseTermsModal}
        onAgree={handleAgreeTerms}
      />*/}
    </Container>
  );
};

export default SignUp;
