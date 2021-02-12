import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Contact from "./Contact";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import Review from "./Review";
const items = [
    { name: 'home', label: 'Home' },
    { name: 'billing', label: 'Billing' },
    { name: 'settings', label: 'Settings' },
  ]
class Main extends Component {
  render() {
    return (
        <HashRouter>
            
            <div>
                <h1>Quick Gig</h1>
                <ul className="header" id="navBar">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Register</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/review">Review replies and offers</NavLink></li>
                </ul>
                <div>
                    <Sidebar items={items} />
                </div>
                <div className="content">
                    
                    <Route exact path="/" component={Home}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/review" component={Review}/>
                </div>
            </div>
            
        </HashRouter>
        
    );

    
  }
}


 
export default Main;