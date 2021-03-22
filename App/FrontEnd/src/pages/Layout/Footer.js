import React, { Component } from "react";

import "../../css/bootstrap.min.css";
import "../../css/templatemo-digital-trend.css";

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mx-lg-auto col-md-8 col-10">
              <h1
                className="text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Find work <strong>quickly</strong>.
              </h1>
            </div>

            <div
              className="col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className="my-4">Contact Info</h4>

              <p className="mb-1">
                <i className="fa fa-phone mr-2 footer-icon"></i>
                +99 080 070 4224
              </p>

              <p>
                <a href="#">
                  <i className="fa fa-envelope mr-2 footer-icon"></i>
                  support@quickgig.com
                </a>
              </p>
            </div>

            <div
              className="col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className="my-4">Our Studio</h4>

              <p className="mb-1">
                <i className="fa fa-home mr-2 footer-icon"></i>
                Av. Lúcio Costa - Barra da Tijuca, Rio de Janeiro - RJ, Brazil
              </p>
            </div>

            <div
              className="col-lg-4 mx-lg-auto text-center col-md-8 col-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="copyright-text">
                Copyright &copy; 2021 Quick Gig
                <br />
                <a rel="nofollow noopener" href="https://templatemo.com">
                  Design: TemplateMo
                </a>
              </p>
            </div>

            <div
              className="col-lg-4 mx-lg-auto col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <ul className="footer-link">
                <li>
                  <a href="#">Stories</a>
                </li>
                <li>
                  <a href="#">Work with us</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>

            <div
              className="col-lg-3 mx-lg-auto col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <ul className="social-icon">
                <li>
                  <a href="#" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="#" className="fa fa-twitter"></a>
                </li>
                <li>
                  <a href="#" className="fa fa-dribbble"></a>
                </li>
                <li>
                  <a href="#" className="fa fa-behance"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
