import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import "./AuthForm.css";
import { Eye, EyeSlash } from "@phosphor-icons/react";

const AuthForm = ({ fields, buttonText, onSubmit, setFormData, formData, isInvalid }) => {
  const [errors, setErrors] = useState({});
  const { isDarkMode } = false;
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors({ ...errors, email: "Please enter a valid email address" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    }
  };

  const darkModeStyles = {
    backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
    color: isDarkMode ? "#ffffff" : "#000000",
  };

  const inputStyles = {
    backgroundColor: isDarkMode ? "#333" : "#f8f9fa",
    color: isDarkMode ? "#ffffff" : "#000000",
    // border: isDarkMode ? "1px solid #555" : "1px solid #ced4da",
  };

  const buttonStyles = {
    backgroundColor: isDarkMode ? "#007bff" : "#8A2BE2",
    borderColor: isDarkMode ? "#007bff" : "#8A2BE2",
    color: "#ffffff",
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form
      onSubmit={onSubmit}
      className={`auth-form ${isDarkMode ? "dark-mode" : ""}`}
      style={darkModeStyles}
      noValidate
    >
      {fields.map((field, index) => (
        <Form.Group key={index} className="mb-3">
          <Form.Label>{field.label}</Form.Label>
          {field.type === "password" ? (
            <div className="password-input-container">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder={field.placeholder}
                name={field.name}
                onChange={handleChange}
                isInvalid={!!errors[field.name]}
                style={inputStyles}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeSlash size={24} color="#bdbdbd" />
                ) : (
                  <Eye size={24} color="#bdbdbd" />
                )}
              </button>
              
              
              
              <Form.Control.Feedback type="invalid">
                {errors[field.name]}
              </Form.Control.Feedback>
              
              
            </div>
           
          ) : (
            <Form.Control
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              onChange={handleChange}
              isInvalid={!!errors[field.name]}
              style={inputStyles}
            />
          )}
        </Form.Group>
      ))}
      <a href="/auth/forgot-password" className="forgot-password">Forgot Password?</a>
      {isInvalid && (
        <p className="err-msg text-center">Invalid email or password. Please try again.</p>
      )}
      <Button
        variant="primary"
        type="submit"
        className="submit-btn"
        style={buttonStyles}
      >
        {buttonText}
      </Button>
      
    </Form>

  );
};

export default AuthForm;
