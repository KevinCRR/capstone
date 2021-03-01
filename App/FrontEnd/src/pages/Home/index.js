import React, { Component } from "react";

import PostsContainer from "../../gig-components/PostsContainer";
import PictureCarousel from "../../gig-components/PictureCarousel";

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
