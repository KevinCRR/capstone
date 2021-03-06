import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import PostContainer from "../Gig/PostContainer";
import "./review.css";

class Review extends Component {

  state = {
    post: this.props.post,
    posts: this.props.posts,
    comment: this.props.comment,
    rating: this.props.rating,
    date: this.props.date
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
                        <h3 className="font-size-6 mb-0">
                          Review replies and offers
                        </h3>
                        <span className="font-size-3 text-gray line-height-2">
                          This is where you will see replies and offers of your
                          bids.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-top mt-5"></div>
                <div className="row mt-5">
                  <div className="col-4">
                    <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                      Your offers:
                    </p>
                    {/* <CardColumns>
                      {this.state.posts.map((post) =>(
                        <PostContainer
                          title={post.title}
                          description={post.description}
                          img={post.img}>
                        </PostContainer>
                      ))}
                    </CardColumns> */}
                  </div>
                </div>
                <div className="border-top mt-5"></div>
                <div className="row mt-5">
                  <div className="col">
                    <div>
                      <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                        Your replies:
                      </p>
                      {/* <CardColumns>
                        {this.state.posts.map((post) =>(
                          <PostContainer
                            title={post.title}
                            description={post.description}
                            img={post.img}>
                          </PostContainer>
                        ))}
                        {this.state.comment} {this.state.rating} {this.state.date}
                      </CardColumns> */}
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

export default Review;
