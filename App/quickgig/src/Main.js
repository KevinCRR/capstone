import React, { Component } from "react";

import "./css/bootstrap.min.css";
import "./css/templatemo-digital-trend.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./containers/Login";
import Contact from "./Contact";
import Sidebar from "./Sidebar";
import GigDetail from "./gig-components/GigDetail";
import Profile from "./Profile";
import Review from "./Review";
import Search from "./gig-components/Search";
import Register from "./containers/Register";
import CreateGig from "./gig-components/CreateGig";
import TabBar from "./gig-components/TabBar";
import Footer from "./gig-components/Footer";

// const items = [
//     { name: 'home', label: 'Home' },
//     { name: 'billing', label: 'Billing' },
//     { name: 'settings', label: 'Settings' },
//   ]

class Main extends Component {
  render() {
    return (
      <Router>
        <TabBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route path="/gig-detail" component={GigDetail} />
            <Route path="/profile" component={Profile} />
            <Route path="/review" component={Review} />
            <Route path="/search" component={Search} />
            <Route path="/gig-create" component={CreateGig} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default Main;
