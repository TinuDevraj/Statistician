import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import '../Signup/signup.css'; 

function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Form className="p-4 border rounded shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Welcome to Geniepro</h3>

        <Form.Group controlId="formBasicEmailOrNumber" className="mb-3">
          <Form.Control type="text" placeholder="Email / Number" className="custom-input" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Control type="password" placeholder="Password" className="custom-input" />
        </Form.Group>

        <Form.Group className="d-flex justify-content-between align-items-center mb-4">
          <Form.Check type="checkbox" label="Remember me" />
          <a href="#" className=" black-text">Forgot Password?</a>
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100">
          Submit
        </Button>

        <div className="text-center mt-3">
          <span>Don't have an account? </span>
          <a href="#" className=" black-text">Signup</a>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
