import React, { Component } from "react";
import {
  Button,
  Image,
  Accordion,
  Card,
} from "react-bootstrap";
import kevinpic from "../../images/kevinpic.jpg";
import mathewpic from "../../images/mathewpic.jpg";
import peterpic from "../../images/peterpic.jfif";
import tylerpic from "../../images/tylerpic.jpg";

class About extends Component {

  render() {
    return (
      <div>
        <section className="project-detail section-padding-half bg-light">
          <div className="container">
            <div className="row justify-content-center mt-14">
              <div className="col-9">
                <h2 className="font-size-9 text-center mb-2">About US</h2>
              </div>
              <div className="col-lg-9 mx-auto col-md-9 col-12 bg-white border rounded p-5" data-aos="fade-up">
                
                <div className="row">
                  <div className="col ml-5">

                    Wouldn’t you agree that Covid-19 has taken a huge financial toll on everyone, with unemployment at an all-time high?
                    <br /><br />
                    Our goal is to help those who are struggling to provide for themselves and their families. 
                    We formed a team of enthusiastic and skilled website developers to search for a solution.
                    <br /><br />
                    QuickGig is a platform dedicated to matching eager workers to available work. Anyone can post a gig or apply for a gig.
                    <br /><br />
                    The journey of developing this project has been such a valuable experience. In the process, we have learned a new 
                    programming library and framework that is very widely used by many applications and is a great addition to our toolbelt. 
                    We have also refined our teamwork, time-management, and communication skills.

                  </div>
                </div>

                <div className="mt-5"></div>
                <h3 className="font-size-9 text-center mb-4">Meet the Team</h3>
                <div className="border-top"></div>

                <div className="row">
                  <div className="col-4 p-4 text-center">
                    <div className="align-items-center">
                      <div className="about-image-container">
                        <Image
                          src={kevinpic}
                          fluid
                          className="rounded-circle about-image"
                        />
                      </div>
                      <div>
                        <h3 className="font-size-6 mb-0">Kevin Romero</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-8 p-4">
                    We built this website using libraries and frameworks such as React.js and Express which we have not used in the past. We know that 
                    these languages are widely used in the industry, and also know that any type of website could benefit from these. We learned about 
                    creating databases and their tables through express.js, and how to properly make a dynamic webpage. 
                  </div>
                </div>    
                <div className="border-top"></div>

                <div className="row">
                  <div className="col-4 p-4 text-center">
                    <div className="align-items-center">
                      <div className="about-image-container">
                        <Image
                          src={mathewpic}
                          fluid
                          className="rounded-circle about-image"
                        />
                      </div>
                      <div>
                        <h3 className="font-size-6 mb-0">Mathew Migliore</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-8 p-4">
                    We built this website using libraries and frameworks such as React.js and Express which we have not used in the past. We know that 
                    these languages are widely used in the industry, and also know that any type of website could benefit from these. We learned about 
                    creating databases and their tables through express.js, and how to properly make a dynamic webpage. 
                  </div>
                </div>    
                <div className="border-top"></div>

                <div className="row">
                  <div className="col-4 p-4 text-center">
                    <div className="align-items-center">
                      <div className="about-image-container">
                        <Image
                          src={peterpic}
                          fluid
                          className="rounded-circle about-image"
                        />
                      </div>
                      <div>
                        <h3 className="font-size-6 mb-0">Peter Rudolf</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-8 p-4">
                    We built this website using libraries and frameworks such as React.js and Express which we have not used in the past. We know that 
                    these languages are widely used in the industry, and also know that any type of website could benefit from these. We learned about 
                    creating databases and their tables through express.js, and how to properly make a dynamic webpage. 
                  </div>
                </div>    
                <div className="border-top"></div>

                <div className="row">
                  <div className="col-4 p-4 text-center">
                    <div className="align-items-center">
                      <div className="about-image-container">
                        <Image
                          src={tylerpic}
                          fluid
                          className="rounded-circle about-image"
                        />
                      </div>
                      <div>
                        <h3 className="font-size-6 mb-0">Tyler Segovia</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-8 p-4">
                    "Hi I’m Tyler, a full-stack developer with a passion for web development. I’m what you’d call a good kind of 
                    perfectionist, and I always take pride in the work that I do, no matter how small. I am set to graduate in 
                    just over a month from Durham College with an advanced diploma in Computer Programming and Analysis. I am 
                    super excited to find my dream job and contribute to future projects."
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default About;
