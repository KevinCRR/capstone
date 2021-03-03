import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [DoB, setDoB] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function validateForm() {
    return (
      email.length > 0 && password.length > 0 && passwordConfirm.length > 0
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="phoneNum">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="DoB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            autoFocus
            type="date"
            value={DoB}
            onChange={(e) => setDoB(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="passwordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
      </Form>
    </div>
  );
}
