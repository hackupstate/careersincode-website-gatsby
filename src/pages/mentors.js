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
import Jeff from "../images/instructors/jeff-passetti.jpg";
import Christy from "../images/instructors/christy_presler.jpg";
import Cash from "../images/tas/cash.jpg";
import Zoe from "../images/instructors/zoe.jpg";
import Jeremy from "../images/instructors/jeremyconn.jpg";
import Gus from "../images/instructors/gus.jpg";
import Max from "../images/instructors/max.jpg";
import Jake from "../images/instructors/jakebeard.jpg";
import Joey from "../images/instructors/joeybuczek.jpg";
import Ryan from "../images/instructors/ryangaus.png";
import Alice from "../images/tas/alicemiller.jpeg";
import Placeholder from "../images/tas/profile-placeholder.png";
import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import instructorStyles from "./mentors.module.css";

import Doug from "../images/team/dougcrescenzi.png";
import Jesse from "../images/team/jesse.png";
import Will from "../images/team/will.png";
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
          btnLink={content.ui.instructors.instructor_jumbotron.button.link}
          btnText={content.ui.instructors.instructor_jumbotron.button.text}
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
                    {" "}
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.gus.office_hours.text
                    }{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* christy presler */}
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
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.christy.position.text
                  }
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.christy.position.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.christy.position.link_text
                    }
                  </a>
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.christy.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.christy.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.christy.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.christy.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.christy.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* cashley saintilus */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one
                    .instructor.cards.cash.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Cash}
                alt="Cashley Saintilus"
                className={instructorStyles.imgSize}
              />
              <CardText>
                <p className={instructorStyles.cardText}>
                  {" "}
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.cash.position.text
                  }
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.position.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.position.link_text
                    }{" "}
                  </a>{" "}
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.cash.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.cash.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.cash.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.cash.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
          {/* zoe koulouris augustinos */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3" className={instructorStyles.longNameStyles}>
                {
                  content.ui.instructors.instructor_main_content.cohort_one
                    .instructor.cards.zoe.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Zoe}
                alt="Zoe Koulouris Augustinos"
                className={instructorStyles.imgSize}
              />
              <CardBody>

                <CardText>
                  <p className={instructorStyles.cardText}>
                    {" "}
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.zoe.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.zoe.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.zoe.position.link_text
                      }{" "}
                    </a>{" "}
                  </p>
                </CardText>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.zoe.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.zoe.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.zoe.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.zoe.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.zoe.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* jeremy conn */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one
                    .instructor.cards.jeremy.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Jeremy}
                alt="Jeremy Conn"
                className={instructorStyles.imgSize}
              />
              <CardBody>
                <CardText>
                  <p className={instructorStyles.cardText}>
                    {" "}
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeremy.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeremy.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeremy.position.link_text
                      }{" "}
                    </a>{" "}
                  </p>
                </CardText>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jeremy.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jeremy.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jeremy.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jeremy.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
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
              <CardBody>
                <CardText>
                  <p className={instructorStyles.cardText}>
                    {" "}
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.gus.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.position.link_text
                      }{" "}
                    </a>{" "}
                  </p>
                </CardText>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.gus.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.gus.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.gus.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.gus.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.gus.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
                <br />
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.gus.office_hours.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.gus.office_hours.text
                    }{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
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
              <CardBody>
                <CardText>
                  <p className={instructorStyles.cardText}>
                    {" "}
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.max.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.position.link_text
                      }{" "}
                    </a>{" "}
                  </p>
                </CardText>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.max.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.max.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.max.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.max.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.max.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
                <br />
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.max.office_hours.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.max.office_hours.text
                    }{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* jake beard */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one
                    .instructor.cards.jake.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Jake}
                alt="Jake Beard"
                className={instructorStyles.imgSize}
              />
              <CardBody>
                <CardText>
                  <p className={instructorStyles.cardText}>
                    {" "}
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jake.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jake.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jake.position.link_text
                      }{" "}
                    </a>{" "}
                  </p>
                </CardText>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jake.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jake.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jake.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jake.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* joey buczek */}
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
              <CardBody>
                <CardText>
                  <p className={instructorStyles.cardText}>
                    {" "}
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.joey.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.joey.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.joey.position.link_text
                      }{" "}
                    </a>{" "}
                  </p>
                </CardText>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.joey.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.joey.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.joey.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.joey.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
          {/* ryan gaus */}
          <Col sm="6">
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
              <CardBody>
                <CardText>
                  <p className={instructorStyles.cardText}>
                    {" "}
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.ryan.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.ryan.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.ryan.position.link_text
                      }{" "}
                    </a>
                  </p>
                </CardText>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.ryan.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.ryan.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.ryan.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.ryan.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.ryan.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* alice miller */}
          <Col sm="6">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one
                    .instructor.cards.alice.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Alice}
                alt="Alice Miller"
                className={instructorStyles.imgSize}
              />
              <CardBody>
                <CardText>
                  <p className={instructorStyles.cardText}>
                    {" "}
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.alice.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.alice.position.link_text
                      }{" "}
                    </a>{" "}
                  </p>
                </CardText>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.alice.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.alice.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.alice.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.alice.social.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubSquare />{" "}
                </a>
                <br />
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.alice.office_hours.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.office_hours.text
                    }{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>
    </Container>
  </Layout>
);

export default MentorsPage;
