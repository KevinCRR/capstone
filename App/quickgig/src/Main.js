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
                </ul>
                <div>
                    <Sidebar items={items} />
                </div>
                <div className="content">
                    
                    <Route exact path="/" component={Home}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </div>
            
        </HashRouter>
        
    );

    
  }
}


 
export default Main;