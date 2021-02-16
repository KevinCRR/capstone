import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import "./login.css";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = 'http://localhost:3000'
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
 
    alert('A form was submitted: ' + email + password)

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(
            email,
            password
        )
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
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
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()} >
          Login
        </Button>
        <div>
        <NavLink to="../Register">
            <Button block size="lg" >    
                    Register Here
            </Button>
        </NavLink>
        </div>
      </Form>
    </div>
  );
}

