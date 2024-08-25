import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import "./signup.css"; // Import the custom CSS

function Signup() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Form
        className="p-4 border rounded shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h3 className="text-center mb-4">Welcome to <br/>Geniepro</h3>

        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            className="custom-input"
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Number"
            className="custom-input"
          />
        </Form.Group>

        <Form.Group controlId="formBasicGST" className="mb-3">
          <Form.Control
            type="text"
            placeholder="GST"
            className="custom-input"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            className="custom-input"
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword" className="mb-4">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            className="custom-input"
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100">
          Submit
        </Button>

        <div className="text-center mt-3" > 
          <a href="#" className="text-decoration-none black-text">Have an account? Sign up</a>
        </div>
      </Form>
    </Container>
  );
}

export default Signup;
