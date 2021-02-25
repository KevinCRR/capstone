import React, { Component } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import PostContainer from "./PostContainer";

class PostsContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <center>
          <h3> Popular Posts </h3>
          <CardColumns>
            <PostContainer />
            <PostContainer />
            <PostContainer />
            <PostContainer />
            <PostContainer />
            <PostContainer />
          </CardColumns>
        </center>
      </div>
    );
  }
}

export default PostsContainer;
