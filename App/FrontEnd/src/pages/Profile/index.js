import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./profile.css";

class Profile extends Component {

  state = {
    img: this.props.img,
    name: this.props.name,
    Dob: this.props.Dob,
    country: this.props.country,
    city: this.props.city,
    address: this.props.address
  }

  render() {
    return (
      <div>
        <section className="project-detail section-padding-half bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 mx-auto col-md-9 col-12 pb-4" data-aos="fade-up">
                <a className="d-flex align-items-center" href="./post-list.html">
                  <i className="icon icon-small-left bg-white circle-40 font-size-7 text-black font-weight-bold shadow-8"></i>
                  <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                    Back to Gigs
                  </span>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-9 mx-auto col-md-9 col-12 bg-white border rounded p-5" data-aos="fade-up">
                <div className="row">
                  <div className="col-8">
                    <div className="media align-items-center">
                      <div className="square-72 d-block mr-8">
                        <img src="#" alt="" />
                      </div>
                      <div>
                        <h3 className="font-size-6 mb-0">Profile</h3>
                        <span className="font-size-3 text-gray line-height-2">
                          Welcome, this is your profile page.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-top mt-5"></div>
                <div className="row mt-5">
                  <div className="col-4">
                    <div className="image">
                      <img src={this.state.img} alt="" />
                    </div>
                    <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                      Name: {this.state.name}
                    </p>
                  </div>
                  <div className="col-4">
                    <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                      Date of birth: {this.state.Dob}
                    </p>
                  </div>
                  <div className="col-4">
                    <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                      Country: {this.state.country}
                    </p>
                  </div>
                  <div className="col-4">
                    <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                      City: {this.state.city}
                    </p>
                  </div>
                  <div className="col-4">
                    <p className="font-size-5 text-gray mb-0">
                      Address: {this.state.address}
                    </p>
                  </div>
                </div>
                <div className="border-top mt-5"></div>
                <div>
                  <Button block size="lg">
                    Update Profile
                  </Button>
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
