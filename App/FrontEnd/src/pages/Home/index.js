import React, { Component } from "react";

import PostsContainer from "../Gig/PostsContainer";
import PictureCarousel from "./PictureCarousel";

class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <PictureCarousel />
          <hr />
        </center>
        <PostsContainer />
        <hr />
      </div>
    );
  }
}

export default Home;
