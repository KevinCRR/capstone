import { React, Component } from "react";
import Card from "react-bootstrap/Card";
import { Avatar } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

class UserReviews extends Component {
    state = {};
    render() {
        return (
            <Card>
                <div className="row ">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3">
                                <a className="btn" href="/#">
                                    <center>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://ak.picdn.net/shutterstock/videos/7523731/thumb/1.jpg"
                                        />
                                    </center>
                                    Carlton J.
                                    <Rating
                                        name="read-only"
                                        precision={0.5}
                                        value="3.5"
                                        readOnly
                                        size="large"
                                    />
                                </a>
                            </div>

                            <div className="col-5">
                                <center>
                                    <h3>Excellent job</h3>

                                    <Card.Body>
                                        <p className="font-size-5 text-gray mb-0">
                                            With it installed in the code editor
                                            you are using, you can type “lorem”
                                            and then tab and it will expand into
                                            a paragraph of Lorem Ipsum
                                            placeholder text. But it can do
                                            more! You can control how much you
                                            get, place it within HTML structure
                                            as it expands, and get different
                                            bits of it in repeated elements.
                                        </p>
                                    </Card.Body>
                                </center>
                            </div>

                            <div className="col-4">
                                <p class="text-right">August 4, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default UserReviews;
