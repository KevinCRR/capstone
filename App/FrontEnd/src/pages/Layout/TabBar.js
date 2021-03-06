import React, { Component } from "react";

import "../../css/bootstrap.min.css";
import "../../css/templatemo-digital-trend.css";
import { NavLink } from "react-router-dom";
import icon from "../../images/icon.png";
import { Dropdown, Button, Navbar, ButtonGroup } from "react-bootstrap";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <Button
      className="navbar-toggler ml-auto"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </Button>

    {children}
  </a>
));

class TabBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg position-relative">
        <div>
          <NavLink exact to="/">
            <div class="logo-container">
              <a class="logo-container" href="#">
                <img className="logo" src={icon} alt="" />
              </a>
            </div>
          </NavLink>
        </div>

        <Dropdown>
          <Dropdown.Toggle
            as={CustomToggle}
            id="dropdown-custom-components"
          ></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/search" style={{ zIndex: 2 }}>
              Search
            </Dropdown.Item>
            <Dropdown.Item href="/gig/1">Gig Example</Dropdown.Item>
            <Dropdown.Item href="/gig-create">Create Gig</Dropdown.Item>
            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
            <Dropdown.Item href="/contact">Reviews</Dropdown.Item>
            <Dropdown.Item href="/login">Contact</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/search">
                <a href="#" className="nav-link">
                  Search
                </a>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/gig/1">
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
      </nav>
    );
  }
}

export default TabBar;
