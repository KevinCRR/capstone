import React, { Component } from "react";
import PostsContainer from "./gig-components/PostsContainer";

class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <h2>
            Welcome to <strong>QUICK</strong>GIG
          </h2>
          <hr />
        </center>
        <PostsContainer />
      </div>
    );
  }
}

export default Home;
