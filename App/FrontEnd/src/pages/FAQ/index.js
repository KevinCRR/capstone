import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import video from "../../videos/quickgig.mp4";

class FAQ extends Component {
    render() {
        return (
            <div>
                <section className="project-detail section-padding-half bg-light">
                    <div className="container">
                        <div className="row justify-content-center mt-14">
                            <div className="col-9">
                                <h2 className="font-size-9 text-center mb-2">
                                    FAQ
                                </h2>
                            </div>
                            <div
                                className="col-lg-9 mx-auto col-md-9 col-12 bg-white border rounded p-5"
                                data-aos="fade-up"
                            >
                                <div className="row">
                                    {" "}
                                    <video
                                        src={video}
                                        width="100%"
                                        height="100%"
                                        controls
                                    ></video>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <Accordion>
                                            <Card>
                                                <Accordion.Toggle
                                                    as={Card.Header}
                                                    eventKey="0"
                                                    className="p-4"
                                                >
                                                    Why did your group choose to
                                                    do this website?
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        Most people, including
                                                        us, have tried making
                                                        money through side gigs.
                                                        Before coming into the
                                                        Computer Programmer
                                                        Analyst course, Kevin
                                                        Romero thought of the
                                                        idea of creating a
                                                        website based on getting
                                                        hired for small jobs
                                                        without needing to
                                                        commit to one employer.
                                                        Although this idea was
                                                        adopted by Kijiji, we
                                                        decided that we still
                                                        wanted to go through
                                                        with the creation of
                                                        QuickGig.
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle
                                                    as={Card.Header}
                                                    eventKey="1"
                                                    className="p-4"
                                                >
                                                    What is your biggest
                                                    achievement while doing this
                                                    project?
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="1">
                                                    <Card.Body>
                                                        One of our biggest
                                                        accomplishments is how
                                                        well we did with the
                                                        planning and report
                                                        aspects of our capstone.
                                                        This same report
                                                        previously would have
                                                        been its own assignment
                                                        and taken months to
                                                        complete, but now we
                                                        understand that it is a
                                                        large and necessary step
                                                        for any project the
                                                        future will bring us. We
                                                        planned this project
                                                        akin to what it would
                                                        have been like in the
                                                        workforce, and we are
                                                        proud to show how much
                                                        specific detail there is
                                                        in our report.
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle
                                                    as={Card.Header}
                                                    eventKey="2"
                                                    className="p-4"
                                                >
                                                    What would you like to
                                                    change or make better? What
                                                    did not go as planned?
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2">
                                                    <Card.Body>
                                                        Time is a large factor.
                                                        If we had more time, we
                                                        would have been able
                                                        implement more features
                                                        with the project.
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle
                                                    as={Card.Header}
                                                    eventKey="3"
                                                    className="p-4"
                                                >
                                                    What were your biggest
                                                    struggles while completing
                                                    this project?
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="3">
                                                    <Card.Body>
                                                        Time management was a
                                                        large struggle while
                                                        completing this project.
                                                        Having other courses and
                                                        not being able to focus
                                                        on this project 100%.
                                                        Other struggles were
                                                        learning new
                                                        technologies such as
                                                        React and Express.
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle
                                                    as={Card.Header}
                                                    eventKey="4"
                                                    className="p-4"
                                                >
                                                    What would you have
                                                    implemented if you had more
                                                    time?
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="4">
                                                    <Card.Body>
                                                        Implement the
                                                        technologies that we
                                                        wrote in the report. We
                                                        would have had natural
                                                        language processing,
                                                        customer tracking,
                                                        information analysis,
                                                        and advertising.
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle
                                                    as={Card.Header}
                                                    eventKey="5"
                                                    className="p-4"
                                                >
                                                    What was your best learning
                                                    experience while doing this
                                                    project?
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="5">
                                                    <Card.Body>
                                                        Getting to work with new
                                                        technologies and going
                                                        through the learning
                                                        curve again. This has
                                                        been the most freedom
                                                        and least guidance we
                                                        have had so far in this
                                                        program and it feels
                                                        good that we can go out
                                                        on our own and handle
                                                        the whole project
                                                        ourselves. This builds
                                                        confidence for working
                                                        in the industry.
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default FAQ;
