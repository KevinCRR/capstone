import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import NavLink from "react-bootstrap/NavLink";
import { Formik } from 'formik';


 
class GigCreate extends Component {
  render() {
    return (
      <div>
        <section className="project-detail section-padding-half bg-light">
          <div className="container">
              <div className="row justify-content-center mt-14">
                <div className="col-xxl-6 col-xl-7 col-lg-8">
                  <h2 className="font-size-9 text-center mb-11">Create Gig</h2>
                  <div className="border p-5 bg-white shadow-8 rounded">

                  <Formik 
                    initialValues={{title: '', description: '', address: '', price: 0}} 
                    onSubmit={(values, actions) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                      }, 1000);
                    }}>
                    {/* Methods that formik gives you CTRL+ click on Formik */}
                    {({values, errors, handleChange, handleSubmit, isValid}) => (
                      // Return whatever is inside the '()'
                      <div>
                      <Form.Group size="lg" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          autoFocus
                          type="title"
                          id='title'
                          name='title'
                          //Set the value to one of the properties we initialized in initial values
                          value={values.title}
                          //Handle the change of the text, call handleChange + one of the initialValues
                          onChange={handleChange('title')}
                        />
                        {errors.title && (<div style={{color:'red'}}>{errors.title}</div>)}
                      </Form.Group>
                      <Form.Group size="lg" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          autoFocus
                          type="description"
                          id='description'
                          name='description'
                          //Set the value to one of the properties we initialized in initial values
                          value={values.description}
                          //Handle the change of the text, call handleChange + one of the initialValues
                          onChange={handleChange('description')}
                        />
                        {errors.description && (<div style={{color:'red'}}>{errors.description}</div>)}
                      </Form.Group>
                      <Form.Group size="lg" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          autoFocus
                          type="address"
                          id='address'
                          name='address'
                          //Set the value to one of the properties we initialized in initial values
                          value={values.address}
                          //Handle the change of the text, call handleChange + one of the initialValues
                          onChange={handleChange('address')}
                        />
                        {errors.address && (<div style={{color:'red'}}>{errors.address}</div>)}
                      </Form.Group>
                      <Form.Group size="lg" controlId="price">
                        <Form.Label>Price</Form.Label>
                        <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            autoFocus
                            type="price"
                            id='price'
                            name='price'
                            //Set the value to one of the properties we initialized in initial values
                            value={values.price}
                            //Handle the change of the text, call handleChange + one of the initialValues
                            onChange={handleChange('price')}
                          />
                          <InputGroup.Append>
                            <InputGroup.Text>/hour</InputGroup.Text>
                          </InputGroup.Append>
                        </InputGroup>
                        {errors.price && (<div style={{color:'red'}}>{errors.price}</div>)}
                      </Form.Group>
                      <Form.Group>
                        <Form.File id="gigImg" label="Upload Image" />
                      </Form.Group>
                      {/* Handle the submission of the form, call handleSubmit. We fetched that from the methods that formik provides */}
                      <Button block size="lg" onClick={handleSubmit} type="submit" disabled={!isValid}>
                        Create
                      </Button>
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
  }
}
 
export default GigCreate;