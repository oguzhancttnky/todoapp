import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";

export default function Register() {
  const { register } = useAuthContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const onInput = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    register(
      formData.name,
      formData.email,
      formData.password1,
      formData.password2
    );
  }
  return (
    <Form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center">
      <Form.Group className="mb-3 w-50" controlId="name">
      <Form.Label>Name</Form.Label>
        <Form.Control
          value={formData.name}
          onChange={onInput}
          type="string"
          placeholder="Enter name"
        />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={formData.email}
          onChange={onInput}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="password1">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={formData.password1}
          onChange={onInput}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="password2">
        <Form.Label>Re-enter Password</Form.Label>
        <Form.Control
          value={formData.password2}
          onChange={onInput}
          type="password"
          placeholder="Re-enter Password"
        />
      </Form.Group>
      <div className="text-center">
        If you already have an account.{" "}
        <a href="/login" className="link-primary">
          Login
        </a>
      </div>
      <Button className="btn btn-primary btn-large centerButton mt-3" type="submit">
        Register
      </Button>
    </Form>
  );
}
