import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuthContext } from "../Hooks/useAuthContext";
import Alert from "react-bootstrap/Alert";


export default function Login() {
  const { login } = useAuthContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onInput = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try{
      login(formData.email, formData.password);
    } catch (error) {
      <Alert variant="danger" className="text-center">
        Yessir
      </Alert>
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center">
      <Form.Group className="my-3 w-50" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={onInput}
          value={formData.email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={onInput}
          value={formData.password}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <div className="text-center">
        Not registered yet?{" "}
        <a href="/register" className="link-primary">
          Sign Up
        </a>
      </div>
      <Button className="btn btn-primary btn-large centerButton mt-3" type="submit">
        Login
      </Button>
    </Form>
  );
}
