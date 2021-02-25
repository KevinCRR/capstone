import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class PostContainer extends Component {
  state = {};
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://i.ytimg.com/vi/ZMuJ9izVL_g/maxresdefault.jpg"
        />
        <Card.Body>
          <Card.Title>Cut Grass</Card.Title>
          <Card.Text>Cut Grass will pay good $$</Card.Text>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary">Bid</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default PostContainer;
