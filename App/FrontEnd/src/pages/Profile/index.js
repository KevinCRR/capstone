import React, { useState, Component } from "react";
import {
  Form,
  Row,
  Col,
  Grid,
  Button,
  Image,
  Container,
} from "react-bootstrap";
import "./profile.css";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import UserReviews from "../../Components/user/UserReviews";

class Profile extends Component {
  state = {
    img: this.props.img,
    name: this.props.name,
    Dob: this.props.Dob,
    country: this.props.country,
    city: this.props.city,
    address: this.props.address,
  };

  render() {
    return (
      <div>
        <section className="project-detail section-padding-half bg-light">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-9 mx-auto col-md-9 col-12 bg-white border rounded p-5"
                data-aos="fade-up"
              >
                <Image
                  src="https://www.wrightlandscape.ca/wp-content/themes/wls/images/banner-grass-cutting.jpg"
                  fluid
                />
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VnUVPYd2yW8dEYfNqqkYEehqC0uJ-dGwjA&usqp=CAU"
                  roundedCircle
                />

                <div className="row">
                  <div className="col-8">
                    <div className="media align-items-center">
                      <div className="square-72 d-block mr-8"></div>

                      <div>
                        <h3 className="font-size-6 mb-0">Billy Bob</h3>

                        <span className="font-size-3 text-gray line-height-2">
                          Grass Cutter, call Today!.
                        </span>

                        <Box
                          component="fieldset"
                          mb={5}
                          borderColor="transparent"
                        >
                          <Rating
                            name="read-only"
                            precision={0.5}
                            value="3.5"
                            readOnly
                            size="large"
                          />
                        </Box>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="row mt-5"></div>

                <div>
                  <center>
                    <h3 className="font-size-6 mb-0">Reviews</h3>
                  </center>
                  <UserReviews />
                  <div className="row mt-5"></div>
                  <UserReviews />
                  <div className="row mt-5"></div>
                  <UserReviews />
                  <div className="row mt-5"></div>
                  <UserReviews />
                  <div className="row mt-5"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
