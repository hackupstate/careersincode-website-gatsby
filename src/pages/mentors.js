import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
  CardFooter,
} from "reactstrap";
import {
  FaEnvelopeSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaGlobe,
} from "react-icons/fa";

import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import instructorStyles from "./mentors.module.css";

import Gus from "../images/instructors/gus.jpg";
import Max from "../images/instructors/max.jpg";
import Karin from "../images/students/karin.jpg"
import Kaitlyn from "../images/students/kaitlyn.jpg"


import Doug from "../images/team/dougcrescenzi.png";
import Jesse from "../images/team/jesse.png";
import Will from "../images/speakers/cohort-2/will.png";
import Jason from "../images/team/jason.png";
import Dana from "../images/team/dana.jpg";
import Laura from "../images/team/laura.jpg";

const MentorsPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading="Work with a mentor at Careers in Code"
        subheading="Our mentors have years of experience and will help support you througout your journey of becoming a software developer"
      >
        <JumboButton
          btnLink="https://forms.gle/GgV6NKtvZDQL9kwC8"
          btnText="Become a mentor"
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Mentors" />

    {/* INSTRUCTOR CARDS */}

    <Row className={pageStyles.pageHeadings}>
      <h2>Schedule 1-1 time with our mentors</h2>
    </Row>

    <Container
      fluid
      className={
        (pageStyles.marginBottom, instructorStyles.instructorCardContainer)
      }
    >
      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
          {/* jesse peplinski */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
              Jesse Peplinski
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Jesse}
                alt="Jesse Peplinski"
                className={instructorStyles.imgSize}
              />
              <CardText>
                <p className={instructorStyles.cardText}>
                  You can setup time to chat with me about anything at all. 
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href="https://calendly.com/jesse-peplinski/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}Schedule Office Hours{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
  
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">Doug Crescenzi</CardHeader>
              <CardImg
                top
                width="100%"
                src={Doug}
                alt="Doug"
                className={instructorStyles.imgSize}
              />
              <CardText>
                <p className={instructorStyles.cardText}>
                  Blockchain
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href="https://meetings.hubspot.com/doug208"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}Schedule Office Hours{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>

          {/* will guisbond */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3" className={instructorStyles.longNameStyles}>
                Laura Thorne
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Laura}
                alt="Laura"
                className={instructorStyles.imgSize}
              />
              <CardText>
                <p className={instructorStyles.cardText}>
                You can message me on Signal or Facebook or LinkedIn. Touches with me are require once every other week. This can be via one on one or popping into a group session or by email. 
Topics include anything around job searching, entrepreneur goals/freelancing, networking, adding skills to resume, etc. We'll be covering each part of the job search in our Modules every 3 weeks. 
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href="https://calendly.com/theenvironmentalcareercoach/hack-upstate-careers-in-code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}Schedule Office Hours{" "}
                  </Button>{" "}
                </a>
                <br />
                <a
                  href="https://us02web.zoom.us/j/81083028686"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}Join Group Hours{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>

        </CardDeck>
      </Row>

      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
          {/* will guisbond */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3" className={instructorStyles.longNameStyles}>
                Will Guisbond
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Will}
                alt="Will"
                className={instructorStyles.imgSize}
              />
              <CardText>
                <p className={instructorStyles.cardText}>
                   You can setup time to chat with me about anything at all.
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href="https://calendly.com/willguisbond"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}Schedule Office Hours{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* max matthews */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one
                    .instructor.cards.max.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Max}
                alt="Max Matthews"
                className={instructorStyles.imgSize}
              />
              <CardText>
                <p className={instructorStyles.cardText}>
                I’m available for 1:1 pair programming, input on your capstone, or additional tutoring for topics that you might need a little bit more help on from class. The top categories I mentor for (in no particular order) are In no particular order: Full Stack Dev, HTML, Bootstrap, Node, React, SQL, Entrepreneurship, Capstone, Wireframing. 
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href="https://calendly.com/maxmatthews"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}Schedule Office Hours{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* gus cost */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one
                    .instructor.cards.gus.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Gus}
                alt="Gus Cost"
                className={instructorStyles.imgSize}
              />
               <CardText>
                <p className={instructorStyles.cardText}>
                    Hi I'm Gus! I work at Density Inc and do a lot of frontend and full-stack programming. The top categories I mentor are JavaScript and TypeScript.
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href="https://calendly.com/guscost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}Schedule Office Hours{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
          {/* karin thorne */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3" className={instructorStyles.longNameStyles}>
                Karin Thorne
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Karin}
                alt="Karin"
                className={instructorStyles.imgSize}
              />
              <CardText>
                <p className={instructorStyles.cardText}>
                I am available to chat about anything. I am a graduate of the first cohort and can help with some of the struggles you may experience along the way. The top caterogires I mentor for are Capstone, HTML, CSS, Wireframing, Project Management, General Questions
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href="https://calendly.com/saltcitycode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}Schedule Office Hours{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* dana mcmullen */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                  Dana McMullen
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Dana}
                alt="Dana McMullen"
                className={instructorStyles.imgSize}
              />
              <CardText>
                <p className={instructorStyles.cardText}>
                I currently work at the Program for Careers in Code and am willing to help you plug in what you've learned in each module towards to the development of your capstone. I can also help you with your wireframes, figuring out code content, correct errors, and with answering your code accessibility questions. The top categories I mentor for are Front End Web Development (HTML, CSS, Bootstrap, W3CSS, Javascript)
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href="https://calendly.com/mcmullen-dana-cic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}Schedule Office Hours{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3" className={instructorStyles.longNameStyles}>
                Kaitlyn Warboy
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Kaitlyn}
                alt="Kaitlyn"
                className={instructorStyles.imgSize}
              />
              <CardText>
                <p className={instructorStyles.cardText}>
                I'm available to help with HTML, CSS, basic Javascript, React or any general questions regarding Capstones, organization etc. You can schedule 30 min or 60 minute sessions.
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href="https://calendly.com/kmwarboy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}Schedule Office Hours{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>


      {/* <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>

          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one
                    .instructor.cards.joey.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Joey}
                alt="Joey Buczek"
                className={instructorStyles.imgSize}
              />
              <CardText>
                <p className={instructorStyles.cardText}>
                   You can setup time to chat with me about anything at all.
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href="https://meetings.hubspot.com/doug208"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}Schedule Office Hours{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
           <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one
                    .instructor.cards.ryan.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Ryan}
                alt="Ryan Gaus"
                className={instructorStyles.imgSize}
              />
              <CardText>
                <p className={instructorStyles.cardText}>
                   You can setup time to chat with me about anything at all.
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href="https://meetings.hubspot.com/doug208"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}Schedule Office Hours{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one
                    .instructor.cards.christy.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Christy}
                alt="Christy Presler"
                className={instructorStyles.imgSize}
              />
              <CardText>
                <p className={instructorStyles.cardText}>
                  You can setup time to chat with me about anything at all. 
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}Schedule Office Hours{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row> */}
    </Container>
  </Layout>
);

export default MentorsPage;
