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
    <div>
        <section className="project-detail section-padding-half bg-light">
          <div className="container">
              <div className="row justify-content-center mt-14">
                <div className="col-xxl-6 col-xl-7 col-lg-8">
                  <h2 className="font-size-9 text-center mb-11">Sign In</h2>
                  <div className="border p-5 bg-white shadow-8 rounded">
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
                        Sign In
                      </Button>
                      <div className="mt-2">
                        <NavLink to="../Register">
                          <Button block size="lg" >    
                            Register Here
                          </Button>
                        </NavLink>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
          </div>
        </section>
    </div>
  );
}

