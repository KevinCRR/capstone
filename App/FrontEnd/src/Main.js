import React, { Component } from "react";

import "./css/bootstrap.min.css";
import "./css/templatemo-digital-trend.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import GigDetail from "./pages/Gig/Gig";
import Profile from "./pages/Profile";
import Review from "./pages/Review";
import Search from "./pages/Search";
import Register from "./pages/Register";
import CreateGig from "./pages/Gig/GigCreate";
import TabBar from "./pages/Layout/TabBar";
import Footer from "./pages/Layout/Footer";

export default function Main() {
  /*
    [] => On Page load do whatever the callback says
    
    useEffect(() => {

    }, [])

----------------------------------

    [counter] => Do whatever the callback says once the value of counter changes

    const [counter, setCounter] = useState(0)
    useEffect(() => {

    }, [counter])




    */

  return (
    <Router>
      <TabBar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contact" component={Contact} />
          <Route path="/gig" component={GigDetail} />
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
