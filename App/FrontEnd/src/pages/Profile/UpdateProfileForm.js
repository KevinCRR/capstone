import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { values } from "sequelize/types/lib/operators";

export default function Update() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [DoB, setDoB] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
    }
  }

class UpdateProfileForm extends Component {
    render() {
        return(
            <div className="Update">
                <Form onsubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={values.firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={values.lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="phoneNum">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={values.phoneNum}
                            onChange={(e) => setPhoneNum(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="DoB">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                            autoFocus
                            type="date"
                            value={values.DoB}
                            onChange={(e) => setDoB(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={values.city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={values.country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="country">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={values.address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </Form.Group>

                    <Button block size="lg" type="submit">
                        Update Profile
                    </Button>
                </Form>
            </div>
        );
    }
}

export default UpdateProfileForm;