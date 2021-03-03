import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class PostContainer extends Component {
  state = {
    title: this.props.title,
    description: this.props.description,
    img: this.props.img,
  };

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        {this.FormatTitle()}
        <Card.Img variant="top" src={this.state.img} />
        <Card.Body>
          <Card.Title>{this.state.title}</Card.Title>
          <Card.Text>{this.state.description}</Card.Text>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary">Bid</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }

  FormatTitle() {
    const { title } = this.state;
    const { description } = this.state;
    const { img } = this.state;
  }

  // FormatDescription() {
  //   const { title } = this.state;
  //   return title;
  // }
}

export default PostContainer;
