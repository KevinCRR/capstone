import React, { Component } from "react";
import {
  Button,
  Image,
} from "react-bootstrap";
 

class GigDetail extends Component {
  state = {
    id: this.props.id,
    status: this.props.status,
    address: this.props.address,
    title: this.props.title,
    description: this.props.description,
    price: this.props.img,
    budget: this.props.budget,
    date: this.props.date,
    visible: this.props.visible,
    userImg: this.props.userImg,
    userName: this.props.userName,
  };

  // const sample = {
  //   id: 1,
  //   status: "open",
  //   address: "2000 Simcoe Street N, Oshawa, ON",
  //   title: "Fence Repairman",
  //   description: "Need someone who knows how to fix a metal fence.",
  //   budget: "$21/h",
  //   date: "February 22, 2021",
  //   visible: true,
  //   userName: "Durham College"
  // }

  render() {
    return (
      <div>
        <section className="project-detail section-padding-half bg-light">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-9 mx-auto col-md-9 col-12 pb-4"
                data-aos="fade-up"
              >
                <a
                  className="d-flex align-items-center"
                  href="./post-list.html"
                >
                  <i className="icon icon-small-left bg-white circle-40 font-size-7 text-black font-weight-bold shadow-8"></i>
                  <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                    Back to Gigs
                  </span>
                </a>
              </div>

              <div className="row">
                <div className="col-lg-9 mx-auto col-md-9 col-12 bg-white border rounded p-5" data-aos="fade-up">
                  <div className="row">
                    <div className="col-8">
                      <div className="media align-items-center">
                        <div className="square-72 d-block mr-8">
                          <Image
                            src={this.state.userImg}
                            fluid
                          />
                        </div>
                        <div>
                          <h3 className="font-size-6 mb-0">{this.state.title}</h3>
                          <span className="font-size-3 text-gray line-height-2">{this.state.userName}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 text-right">
                      <div className="media justify-content-md-end">
                        <p className="font-size-4 text-gray mb-0">{this.state.date}</p>

                      </div>
                    </div>
                  </div>
                  <div className="col-4 text-right">
                    <div className="media justify-content-md-end">
                      <p className="font-size-4 text-gray mb-0">19 June 2020</p>
                    </div>

                  </div>                   
                  <div className="border-top mt-5"></div>
                  <div className="row mt-5">
                    <div className="col-4">
                      <div className="image">
                        <img src="#" alt="" />
                      </div>
                      <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                        {this.state.budget}
                      </p>

                    </div>
                  </div>
                </div>

                <div className="border-top mt-5"></div>
                <div className="row mt-5">
                  <div className="col-4">
                    <div className="image">
                      <img src="#" alt="" />
                    </div>

                    <div className="col-4">
                      <div className="image">
                        <img src="#" alt="" />
                      </div>
                      <p className="font-size-5 text-gray mb-0">
                        {this.state.address}
                      </p>

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
                        <li className="d-block font-size-4 text-black-2 mt-2">
                          <span className="d-inline-block mr-2">•</span>Slack
                        </li>
                        <li className="d-block font-size-4 text-black-2 mt-2">
                          <span className="d-inline-block mr-2">•</span>Basic
                          English
                        </li>
                        <li className="d-block font-size-4 text-black-2 mt-2">
                          <span className="d-inline-block mr-2">•</span>Well
                          Organized
                        </li>
                      </ul>
                    </div>
                  </div>
      
                  <div className="border-top mt-5"></div>
                  <div className="row mt-5">
                    <div className="col">
                      <div>
                        <p className="mb-4 font-size-4 text-gray">Job Description</p>
                        <p className="font-size-4 text-black-2 mb-7">
                          {this.state.description}
                        </p>
                      </div>
                      <div>
                        <a className="btn btn-primary text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-5" href="/#">Apply to this job</a>
                      </div>
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
