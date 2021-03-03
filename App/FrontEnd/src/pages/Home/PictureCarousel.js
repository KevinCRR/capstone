import { createRef } from "react";

import "../../css/templatemo-digital-trend.css";
import React, { Component } from "react";
import icon from "../../images/icon.png";
import { Carousel, Button } from "react-bootstrap";

class PictureCarousel extends Component {
  state = {};
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://goodhandymanservices.com.au/wp-content/uploads/2019/05/b1.jpg"
            alt="First slide"
          />
          <div className="centered">
            <h4 style={{ color: "white", fontSize: "70px" }}>
              <strong>QUICK</strong>GIG
            </h4>
            <Button href="/register" size="lg">
              <bold>
                <h4 style={{ color: "white" }}>Get Started!</h4>
              </bold>
            </Button>
          </div>
          <Carousel.Caption>
            <h2>
              Find{" "}
              <strong>
                <u>Help</u>
              </strong>{" "}
              that Suits your{" "}
              <strong>
                <u>Budget and Needs</u>
              </strong>
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://masterstart.com/wp-content/uploads/2019/01/1440x600-Januworry-blog-1.jpg"
            alt="Second slide"
          />
          <div className="centered">
            <h4 style={{ color: "white", fontSize: "70px" }}>
              <bold>
                <strong>QUICK</strong>GIG
              </bold>
            </h4>
            <Button href="/register" size="lg">
              <bold>
                <h4 style={{ color: "white" }}>Get Started!</h4>
              </bold>
            </Button>
          </div>
          <Carousel.Caption>
            <h2>
              Earn{" "}
              <strong>
                <u>Income</u>
              </strong>{" "}
              Independently
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.docsend.com/wp-content/uploads/2015/01/17-right-online-demo.jpg"
            alt="Third slide"
          />
          <div className="centered">
            <h4 style={{ color: "white", fontSize: "70px" }}>
              <bold>
                <strong>QUICK</strong>GIG
              </bold>
            </h4>
            <Button href="/register" size="lg">
              <bold>
                <h4 style={{ color: "white" }}>Get Started!</h4>
              </bold>
            </Button>
          </div>
          <Carousel.Caption>
            <h2>
              Any{" "}
              <strong>
                <u>Time</u>
              </strong>{" "}
              and{" "}
              <strong>
                <u>Place</u>
              </strong>
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default PictureCarousel;
