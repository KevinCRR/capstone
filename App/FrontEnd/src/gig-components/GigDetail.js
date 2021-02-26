import React, { Component } from "react";
 
class GigDetail extends Component {
  render() {
    return (
      <div>
        <section className="project-detail section-padding-half bg-light">
          <div className="container">
              <div className="row">
                <div className="col-lg-9 mx-auto col-md-9 col-12 pb-4" data-aos="fade-up">
                  <a className="d-flex align-items-center" href="./post-list.html">
                    <i className="icon icon-small-left bg-white circle-40 font-size-7 text-black font-weight-bold shadow-8"></i>
                    <span className="text-uppercase font-size-3 font-weight-bold text-gray">Back to Gigs</span>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 mx-auto col-md-9 col-12 bg-white border rounded p-5" data-aos="fade-up">
                  <div className="row">
                    <div className="col-8">
                      <div className="media align-items-center">
                        <div className="square-72 d-block mr-8"><img src="#" alt="" /></div>
                        <div>
                          <h3 className="font-size-6 mb-0">Position Title</h3>
                          <span className="font-size-3 text-gray line-height-2">Company</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 text-right">
                      <div className="media justify-content-md-end">
                        <p className="font-size-4 text-gray mb-0">19 June 2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-4">
                    <div className="col-12">
                      <div className="card-btn-group">
                        <a className="btn btn-primary text-uppercase btn-medium rounded-3 w-180 mr-4" href="/#">Apply to this job</a>
                        <a className="btn btn-outline-secondary text-black-2 text-uppercase h-px-48 rounded-3 px-5" href="/#">
                          Save job
                        </a>
                      </div>
                    </div>
                  </div>                   
                  <div className="border-top mt-5"></div>
                  <div className="row mt-5">
                    <div className="col-4">
                      <div className="image">
                        <img src="#" alt="" />
                      </div>
                      <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                        80-90K PLN
                      </p>
                    </div>
                    <div className="col-4">
                      <div className="image">
                        <img src="#" alt="" />
                      </div>
                      <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                        Full-Time
                      </p>
                    </div>
                    <div className="col-4">
                      <div className="image">
                        <img src="#" alt="" />
                      </div>
                      <p className="font-size-5 text-gray mb-0">
                        777 Brockton Avenue, 
                        <br className="d-md-none d-lg-block d-block" />
                        Abington MA 2351
                      </p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-4">
                      <div className="tags">
                        <p className="font-size-4 mb-0">Soft Skill</p>
                        <ul className="list-unstyled mr-n3 mb-0">
                          <li className="d-block font-size-4 text-black-2 mt-2"><span className="d-inline-block mr-2">•</span>Slack</li>
                          <li className="d-block font-size-4 text-black-2 mt-2"><span className="d-inline-block mr-2">•</span>Basic English</li>
                          <li className="d-block font-size-4 text-black-2 mt-2"><span className="d-inline-block mr-2">•</span>Well Organized</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="tags">
                        <p className="font-size-4 mb-0">Technical Skill</p>
                        <ul className="list-unstyled mr-n3 mb-0">
                          <li className="d-block font-size-4 text-black-2 mt-2"><span className="d-inline-block mr-2">•</span>HTML</li>
                          <li className="d-block font-size-4 text-black-2 mt-2"><span className="d-inline-block mr-2">•</span>CSS</li>
                          <li className="d-block font-size-4 text-black-2 mt-2"><span className="d-inline-block mr-2">•</span>PHP</li>
                          <li className="d-block font-size-4 text-black-2 mt-2"><span className="d-inline-block mr-2">•</span>JavaScript</li>
                          <li className="d-block font-size-4 text-black-2 mt-2"><span className="d-inline-block mr-2">•</span>React.js</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border-top mt-5"></div>
                  <div className="row mt-5">
                    <div className="col">
                      <div>
                        <p className="mb-4 font-size-4 text-gray">Job Description</p>
                        <p className="font-size-4 text-black-2 mb-7">
                          Gubagoo is a fast growing provider of messaging and commerce solutions for automotive dealers changing the future of how people find, 
                          buy and service their vehicles. 
                        </p>
                      </div>
                      <div>
                        <span className="font-size-4 font-weight-semibold text-black-2 mb-7">Your Role:</span>
                        <p className="font-size-4 text-black-2 mb-7">
                          We’re looking for a passionate individual to design beautiful and functional products for our customers at Gubagoo. 
                          We move very fast and you will be expected to contribute to a cross-functional product development squad, that 
                          includes product managers and developers, to deliver the UX and UI for the team to bring to life. 
                        </p>
                        <p className="font-size-4 text-black-2 mb-7">We are serious about remote work. You can work for from anywhere. </p>
                        <span className="font-size-4 font-weight-semibold text-black-2 mb-7">What you will be doing:</span>
                        <ul className="list-unstyled">
                          <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-2">
                            <span className="d-inline-block mr-7">•</span>Contribute new controls or design improvements to our
                          </li>
                          <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-1">
                            <span className="d-inline-block mr-7">•</span>Take ownership of the successful delivery of features
                          </li>
                          <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-1">
                            <span className="d-inline-block mr-7">•</span>Help set and achieve quarterly goals
                          </li>
                          <li className="d-block font-size-4 text-black-2 d-flex flex-row mt-1">
                            <span className="d-inline-block mr-7">•</span>Ship a TON of product improvements and features
                          </li>
                        </ul>
                        <a className="btn btn-primary text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-5" href="/#">Apply to this job</a>
                      </div>
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
 
export default GigDetail;