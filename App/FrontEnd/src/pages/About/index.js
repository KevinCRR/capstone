import React, { Component } from "react";
import { Badge, Image } from "react-bootstrap";
import kevinpic from "../../images/kevinpic.jpg";
import mathewpic from "../../images/mathewpic.jpg";
import peterpic from "../../images/peterpic.png";
import tylerpic from "../../images/tylerpic.jpg";
import { SocialIcon } from "react-social-icons";

class About extends Component {
    render() {
        return (
            <div>
                <section className="project-detail section-padding-half bg-light">
                    <div className="container">
                        <div className="row justify-content-center mt-14">
                            <div className="col-9">
                                <h2 className="font-size-9 text-center mb-2">
                                    About US
                                </h2>
                            </div>
                            <div
                                className="col-lg-9 mx-auto col-md-9 col-12 bg-white border rounded p-5"
                                data-aos="fade-up"
                            >
                                <div className="row">
                                    <div className="col ml-5">
                                        Wouldn’t you agree that Covid-19 has
                                        taken a huge financial toll on everyone,
                                        with unemployment at an all-time high?
                                        <br />
                                        <br />
                                        Our goal is to help those who are
                                        struggling to provide for themselves and
                                        their families. We formed a team of
                                        enthusiastic and skilled website
                                        developers to search for a solution.
                                        <br />
                                        <br />
                                        QuickGig is a platform dedicated to
                                        matching eager workers to available
                                        work. Anyone can post a gig or apply for
                                        a gig.
                                        <br />
                                        <br />
                                        The journey of developing this project
                                        has been such a valuable experience. In
                                        the process, we have learned a new
                                        programming library and framework that
                                        is very widely used by many applications
                                        and is a great addition to our toolbelt.
                                        We have also refined our teamwork,
                                        time-management, and communication
                                        skills.
                                    </div>
                                </div>

                                <div className="mt-5"></div>
                                <h3 className="font-size-9 text-center mb-4">
                                    Meet the Team
                                </h3>
                                <div className="border-top"></div>

                                <div className="row">
                                    <div className="col-4 p-4 text-center">
                                        <div className="align-items-center">
                                            <div className="about-image-container">
                                                <Image
                                                    src={kevinpic}
                                                    fluid
                                                    className="rounded-circle about-image"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-size-6 mb-0">
                                                    Kevin Romero
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 p-4">
                                        "Hey, my name is Kevin Romero, I’m in my
                                        third year of Computer Programmer and
                                        Analysis studies at Durham College and
                                        will be attending Ontario Tech
                                        University next year to pursue my
                                        Computer Science Bachelor Degree. I’m
                                        currently have 2 years working as a
                                        programmer and I’ve worked in 5 projects
                                        (ranging from NLP, Web Dev, Object
                                        Recognition, and ML). My personal and
                                        scholar projects have explored a
                                        different variety of Frameworks,
                                        Libraries and programs ranging for Web,
                                        App, Mobile, Game and Database
                                        Development. My experience in
                                        programming languages is: [confident:
                                        Python, C#, JS], [Capable: SQL, Cobol,
                                        PHP], [Beginner: Java, C++, Visual
                                        Basic] [Explored: Ruby, Basic,
                                        Assembler, TypeScript]. I’ve also
                                        competed in 2 hackathons, one at Niagara
                                        (placed 1st) and another in cobourg
                                        (placed 2nd). I would love to learn more
                                        about graphics, data analysis, Systems
                                        Development,And Design. For more
                                        information, feel free to contact me!"
                                        <br />
                                        <SocialIcon url="http://linkedin.com/in/kevin-romero13" />{" "}
                                        <SocialIcon
                                            url="https://github.com/KevinCRR"
                                            bgColor="#6a638a"
                                            fgColor="#ffffff"
                                        />{" "}
                                        <SocialIcon url="https://codepen.io/superh2o" />{" "}
                                        <SocialIcon
                                            url="http://kevinromero.ca/"
                                            bgColor="#4a964a"
                                            fgColor="#ffffff"
                                        />
                                    </div>
                                </div>
                                <div className="border-top"></div>

                                <div className="row">
                                    <div className="col-4 p-4 text-center">
                                        <div className="align-items-center">
                                            <div className="about-image-container">
                                                <Image
                                                    src={mathewpic}
                                                    fluid
                                                    className="rounded-circle about-image"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-size-6 mb-0">
                                                    Mathew Migliore
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 p-4">
                                        "Hello, my name is Mathew Migliore, and
                                        I am currently in the final semester in
                                        the Computer Programmer Analyst course
                                        at Durham College. I am bridging into
                                        the Computer Science course at Ontario
                                        Tech, and have already graduated from
                                        the Computer Hardware Technician course
                                        at Durham College. I am familiar with
                                        C#, C++, Java, JavaScript, Php, SQL,
                                        HTML/CSS, Visual Basic, Cobol, Python,
                                        and am able to learn new ones if needed.
                                        My goal is to become a Mainframe
                                        Developer because I enjoy working with
                                        Cobol and on z/OS!"
                                        <br />
                                        <SocialIcon url="https://www.linkedin.com/in/mathew-migliore-40538a14a" />{" "}
                                        <SocialIcon
                                            url="https://github.com/MathewMig"
                                            bgColor="#6a638a"
                                            fgColor="#ffffff"
                                        />{" "}
                                        <br />
                                        <br />
                                        <Image
                                            style={{ width: "10%" }}
                                            roundedCircle
                                            src="https://upload.wikimedia.org/wikipedia/commons/3/33/647403-email-128.png"
                                        />{" "}
                                        <Badge style={{ color: "blue" }}>
                                            <h6>mathewmigliore@hotmail.com</h6>
                                        </Badge>
                                    </div>
                                </div>
                                <div className="border-top"></div>

                                <div className="row">
                                    <div className="col-4 p-4 text-center">
                                        <div className="align-items-center">
                                            <div className="about-image-container">
                                                <Image
                                                    src={peterpic}
                                                    fluid
                                                    className="rounded-circle about-image"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-size-6 mb-0">
                                                    Peter Rudolf
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 p-4">
                                        "Hello, I'm Peter Rudolf, a Computer
                                        Programming and Analysis student. I
                                        currently live in Whitby. My favourite
                                        programming languages are Java and C#."
                                        <br />
                                        <SocialIcon url="https://www.linkedin.com/in/peter-milos-rudolf/" />{" "}
                                        <SocialIcon
                                            url="https://github.com/PeterRudolf"
                                            bgColor="#6a638a"
                                            fgColor="#ffffff"
                                        />
                                        <br />
                                        <br />
                                        <Image
                                            style={{ width: "10%" }}
                                            roundedCircle
                                            src="https://upload.wikimedia.org/wikipedia/commons/3/33/647403-email-128.png"
                                        />{" "}
                                        <Badge style={{ color: "blue" }}>
                                            <h6>peter.rudolf@dcmail.ca</h6>
                                        </Badge>
                                    </div>
                                </div>
                                <div className="border-top"></div>

                                <div className="row">
                                    <div className="col-4 p-4 text-center">
                                        <div className="align-items-center">
                                            <div className="about-image-container">
                                                <Image
                                                    src={tylerpic}
                                                    fluid
                                                    className="rounded-circle about-image"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-size-6 mb-0">
                                                    Tyler Segovia
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 p-4">
                                        "Hi I’m Tyler, a full-stack developer
                                        with a passion for web development. I’m
                                        diligent about completing tasks, and
                                        meticulous with details. I take pride in
                                        the work that I do, and always meet my
                                        deadlines. I am set to graduate in just
                                        over a month from Durham College with an
                                        advanced diploma in Computer Programming
                                        and Analysis. I am super excited to find
                                        my dream job and contribute to future
                                        projects."
                                        <br />
                                        <SocialIcon url="https://www.linkedin.com/in/tylersegovia/" />{" "}
                                        <SocialIcon
                                            url="https://github.com/Termina1Zer0"
                                            bgColor="#6a638a"
                                            fgColor="#ffffff"
                                        />
                                        <br />
                                        <br />
                                        <Image
                                            style={{ width: "10%" }}
                                            roundedCircle
                                            src="https://upload.wikimedia.org/wikipedia/commons/3/33/647403-email-128.png"
                                        />{" "}
                                        <Badge style={{ color: "blue" }}>
                                            <h6>tyler.segovia@dcmail.ca</h6>
                                        </Badge>
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

export default About;
