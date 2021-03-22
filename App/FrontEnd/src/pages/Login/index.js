import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LoginSchema } from "../../api/validation/authentication.validation";
import { AuthenticationAPI } from "../../api/authentication";
import "./login.css";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";

// https://formik.org/docs/examples/basic

export default function Login() {
  async function handleLogin(data) {
    console.log("A form was submitted: " + JSON.stringify(data));
    const response = await AuthenticationAPI.login(data);
    if (!response.success) {
      alert("Could not make the request", response.message);
      return;
    }
    //Successful request
    alert("Successful request", response.message);
  }

  return (
    <div>
      <section className="project-detail section-padding-half bg-light">
        <div className="container">
          <div className="row justify-content-center mt-14">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <h2 className="font-size-9 text-center mb-11">Sign In</h2>
              <div className="border p-5 bg-white shadow-8 rounded">
                {/* Initial values are whatever fields are in your form */}
                {/* onSubmit will pass the values of your initial value to the method you passed it
                        
                        onSubmit={(data) => {handleLogin(data)}}    data: {email: string, password: string}
                              THE SAME AS
                        onSubmit={handleLogin}
                    
                    */}
                <Formik
                  validationSchema={LoginSchema}
                  initialValues={{ email: "", password: "" }}
                  onSubmit={handleLogin}
                >
                  {/* Methods that formik gives you CTRL+ click on Formik */}
                  {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    isValid,
                  }) => (
                    // Return whatever is inside the '()'
                    <div>
                      <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          autoFocus
                          type="email"
                          id="email"
                          name="email"
                          //Set the value to one of the properties we initialized in initial values
                          value={values.email}
                          //Handle the change of the text, call handleChange + one of the initialValues
                          onChange={handleChange("email")}
                        />
                        {errors.email && (
                          <div style={{ color: "red" }}>{errors.email}</div>
                        )}
                      </Form.Group>
                      <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          id="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange("password")}
                        />
                        {errors.password && (
                          <div style={{ color: "red" }}>{errors.password}</div>
                        )}
                      </Form.Group>
                      {/* Handle the submission of the form, call handleSubmit. We fetched that from the methods that formik provides */}
                      <Button
                        block
                        size="lg"
                        onClick={handleSubmit}
                        type="submit"
                        disabled={!isValid}
                      >
                        Sign In
                      </Button>

                      <div className="mt-2">
                        <NavLink to="../Register">
                          <Button block size="lg">
                            Register Here
                          </Button>
                        </NavLink>
                      </div>
                    </div>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // return (
  //   <div>
  //       <section className="project-detail section-padding-half bg-light">
  //         <div className="container">
  //             <div className="row justify-content-center mt-14">
  //               <div className="col-xxl-6 col-xl-7 col-lg-8">
  //                 <h2 className="font-size-9 text-center mb-11">Sign In</h2>
  //                 <div className="border p-5 bg-white shadow-8 rounded">
  //                   <Form onSubmit={handleSubmit}>
  //                     <Form.Group size="lg" controlId="email">
  //                       <Form.Label>Email</Form.Label>
  //                       <Form.Control
  //                         autoFocus
  //                         type="email"
  //                         value={email}
  //                         onChange={(e) => setEmail(e.target.value)}
  //                       />
  //                     </Form.Group>
  //                     <Form.Group size="lg" controlId="password">
  //                       <Form.Label>Password</Form.Label>
  //                       <Form.Control
  //                         type="password"
  //                         value={password}
  //                         onChange={(e) => setPassword(e.target.value)}
  //                       />
  //                     </Form.Group>
  //                     <Button block size="lg" type="submit" disabled={!validateForm()} >
  //                       Sign In
  //                     </Button>
  //                     <div className="mt-2">
  //                       <NavLink to="../Register">
  //                         <Button block size="lg" >
  //                           Register Here
  //                         </Button>
  //                       </NavLink>
  //                     </div>
  //                   </Form>
  //                 </div>
  //               </div>
  //             </div>
  //         </div>
  //       </section>
  //   </div>
  // );
}
