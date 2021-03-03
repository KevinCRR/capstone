import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./profile.css";

function Profile() {

  const profile = useState({
    img: '',
    name: '',
    Dob: '',
    country: '',
    city: '',
    address: ''})

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
                      <img src={profile.img} alt="" />
                    </div>
                    <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                      Name: {profile.name}
                    </p>
                  </div>
                  <div className="col-4">
                    <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                      Date of birth: {profile.Dob}
                    </p>
                  </div>
                  <div className="col-4">
                    <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                      Country: {profile.country}
                    </p>
                  </div>
                  <div className="col-4">
                    <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                      City: {profile.city}
                    </p>
                  </div>
                  <div className="col-4">
                    <p className="font-size-5 text-gray mb-0">
                      Address: {profile.address}
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

export default Profile;
