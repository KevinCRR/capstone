import React, { Component } from "react";

import "../css/bootstrap.min.css";
import "../css/templatemo-digital-trend.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg position-relative">
        <div className="container">
          <NavLink exact to="/">
            <a className="navbar-brand" href="#">
              <i className="fa fa-line-chart"></i>
              <strong>QUICK</strong>GIG
            </a>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/search">
                  <a href="#" className="nav-link">
                    Search
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/gig-detail">
                  <a href="#" className="nav-link">
                    Gig Example
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/gig-create">
                  <a href="#" className="nav-link">
                    Create Gig
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/profile">
                  <a href="#" className="nav-link">
                    Profile
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/review">
                  <a href="#" className="nav-link">
                    Reviews
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact">
                  <a href="#" className="nav-link">
                    Contact
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/login">
                  <a href="#" className="nav-link contact">
                    Sign In
                  </a>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
