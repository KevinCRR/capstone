import React, { Component } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import PostContainer from "./PostContainer";

class PostsContainer extends Component {
  state = {
    posts: [
      {
        title: "Grass Cutting",
        description: "Cut Grass will pay good $$",
        img: "https://i.ytimg.com/vi/ZMuJ9izVL_g/maxresdefault.jpg",
      },
      {
        title: "Grave Digging",
        description: "Dig Grave",
        img:
          "https://carolinamemorialsanctuary.org/wp-content/uploads/2018/05/finished-grave.jpg",
      },
      {
        title: "Fry Cook",
        description: "Fry burgers plzzz",
        img:
          "https://dfranks.com/wp-content/uploads/2009/10/istock_000001832941small1.jpg",
      },
      {
        title: "Good Cop",
        description: "Be a good cop",
        img:
          "https://theartsdesk.com/sites/default/files/styles/mast_image_landscape/public/mastimages/good-cop.JPG?itok=mD0egdmw",
      },
      {
        title: "Bad Cop",
        description: "Be a bad cop",
        img: "https://i.imgflip.com/2ebv46.jpg",
      },
      {
        title: "Interogee",
        description: "Be interogated",
        img:
          "https://dfranks.com/wp-content/uploads/2015/08/jack-bauer-interrogates-audrey-raines.jpg",
      },
    ],
  };

  render() {
    return (
      <div>
        <center>
          <h3> Popular Posts </h3>
          <CardColumns>
            {this.state.posts.map((post) => (
              <PostContainer
                title={post.title}
                description={post.description}
                img={post.img}
              ></PostContainer>
            ))}
          </CardColumns>
        </center>
      </div>
    );
  }
}

export default PostsContainer;
