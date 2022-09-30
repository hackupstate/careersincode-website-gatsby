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

import Kelley from "../images/students/kellycorey.jpg";
import Aneesa from "../images/instructors/aneesa.png";
import Nathan from "../images/instructors/nathan evans.jpg";
import Dana from "../images/team/dana.jpg";
import Kaitlyn from "../images/students/kaitlyn.jpg";
import Jeff from "../images/instructors/jeff-passetti.jpg";
import Karin from "../images/instructors/karin.jpg";
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
import Jennifer from "../images/tas/Jennifer-Tran.jpg";
import David from "../images/tas/davidbadillo.jpeg";
import Katie from "../images/tas/katiewatson.jpeg";
import Pankaj from "../images/tas/pankajc.jpeg";
import Drew from "../images/tas/drewknab.jpeg";
import Wesam from "../images/tas/wesamshanaa.png";
import Ariel from "../images/students/cohort-2/ariel.png";
import latonia from "../images/students/cohort-2/latonia.png";
import mel from "../images/students/cohort-2/mel.jpg";
import Placeholder from "../images/tas/profile-placeholder.png";
import content from "../content/content.json";
import * as pageStyles from "./pages.module.css";
import * as instructorStyles from "./instructors.module.css";

const InstructorsPage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.instructors.instructor_jumbotron.heading}
        subheading={content.ui.instructors.instructor_jumbotron.subheading}
      >
        {/* <JumboButton
          btnLink={content.ui.instructors.instructor_jumbotron.button.link}
          btnText={content.ui.instructors.instructor_jumbotron.button.text}
        /> */}
      </JumbotronComponent>
    </Header>
    <SEO title="Instructors" />

    {/* overlay */}
    <Container fluid className={instructorStyles.blueStatContainer}>
      <Row className={instructorStyles.statRows}>
        <Col className={instructorStyles.statColumns}>
          <h3 className={instructorStyles.instructorStats}>
            {" "}
            {
              content.ui.instructors.instructor_main_content.overlay.opportunity
                .header
            }{" "}
          </h3>
          <p className={instructorStyles.blueParaStats}>
            {" "}
            {
              content.ui.instructors.instructor_main_content.overlay.opportunity
                .subheader
            }{" "}
          </p>
        </Col>
        <Col className={instructorStyles.statColumns}>
          <h3 className={instructorStyles.instructorStats}>
            {" "}
            {
              content.ui.instructors.instructor_main_content.overlay.change
                .header
            }{" "}
          </h3>
          <p className={instructorStyles.greenParaStats}>
            {" "}
            {
              content.ui.instructors.instructor_main_content.overlay.change
                .subheader
            }{" "}
          </p>
        </Col>
      </Row>
      <Row className={instructorStyles.statRows}>
        <Col className={instructorStyles.statColumns}>
          <h3 className={instructorStyles.instructorStats}>
            {" "}
            {
              content.ui.instructors.instructor_main_content.overlay.success
                .header
            }{" "}
          </h3>
          <p className={instructorStyles.greenParaStats}>
            {" "}
            {
              content.ui.instructors.instructor_main_content.overlay.success
                .subheader
            }{" "}
          </p>
        </Col>
        <Col className={instructorStyles.statColumns}>
          <h3 className={instructorStyles.instructorStats}>
            {" "}
            {
              content.ui.instructors.instructor_main_content.overlay.measure
                .header
            }{" "}
          </h3>
          <p className={instructorStyles.blueParaStats}>
            {" "}
            {
              content.ui.instructors.instructor_main_content.overlay.measure
                .subheader
            }{" "}
          </p>
        </Col>
      </Row>
    </Container>
    {/* instructor/ta info w/ buttons */}
    <Container className={instructorStyles.whiteContainer}>
      <Row className={instructorStyles.actionRows}>
        <Col className={instructorStyles.actionColumns}>
          <h3>
            {
              content.ui.instructors.instructor_main_content.buttons.instructor
                .header
            }
          </h3>
          <p>
            {
              content.ui.instructors.instructor_main_content.buttons.instructor
                .text
            }
          </p>
          <a
              href="https://forms.gle/uN24Pd2dECgqvrad9"
              target="_blank"
              rel="noopener noreferrer"
              className={instructorStyles.greenBtnLink}
            >
          <Button className={instructorStyles.greenButton}>
              {
                content.ui.instructors.instructor_main_content.buttons
                  .instructor.apply.text
              }
          </Button>
          </a>
          <a
              href={
                content.ui.instructors.instructor_main_content.buttons
                  .instructor.responsibilities.link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={instructorStyles.greenBtnLink}
            >
          <Button className={instructorStyles.greenButton}>
              {
                content.ui.instructors.instructor_main_content.buttons
                  .instructor.responsibilities.text
              }
          </Button>
          </a>
          <a
              href={
                content.ui.instructors.instructor_main_content.buttons
                  .instructor.admissions.link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={instructorStyles.greenBtnLink}
            >
          <Button className={instructorStyles.greenButton}>
              {
                content.ui.instructors.instructor_main_content.buttons
                  .instructor.admissions.text
              }
          </Button>
          </a>
          <a
              href={content.ui.jobs_main_content.jobs_table.descriptions.description_instructor}
              target="_blank"
              rel="noopener noreferrer"
              className={instructorStyles.greenBtnLink}
            >
          <Button className={instructorStyles.greenButton}>
              View Job Description
          </Button>
          </a>
        </Col>

        <Col className={instructorStyles.actionColumns}>
          <h3>
            {" "}
            {
              content.ui.instructors.instructor_main_content.buttons.ta.header
            }{" "}
          </h3>
          <p>
            {" "}
            {
              content.ui.instructors.instructor_main_content.buttons.ta.text
            }{" "}
          </p>

          <a
              href="https://forms.gle/TFWNj9GgKabReUVp8"
              target="_blank"
              rel="noopener noreferrer"
              className={instructorStyles.greenBtnLink}
            >
          <Button className={instructorStyles.greenButton}>
              {
                content.ui.instructors.instructor_main_content.buttons.ta.apply
                  .text
              }
          </Button>
          </a>

          <a
              href={
                content.ui.instructors.instructor_main_content.buttons.ta
                  .responsibilities.link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={instructorStyles.greenBtnLink}
            >
          <Button className={instructorStyles.greenButton}>
              {
                content.ui.instructors.instructor_main_content.buttons.ta
                  .responsibilities.text
              }
          </Button>
          </a>

          <a
              href={
                content.ui.instructors.instructor_main_content.buttons.ta
                  .admissions.link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={instructorStyles.greenBtnLink}
            >
          <Button className={instructorStyles.greenButton}>
              {
                content.ui.instructors.instructor_main_content.buttons.ta
                  .admissions.text
              }
          </Button>
          </a>
        </Col>
      </Row>
    </Container>
       {/* INSTRUCTOR CARDS - COHORT 3 */}
       <Row className={pageStyles.pageHeadings}>
      <h2> Cohort 3 and Cohort 4 Instructors</h2>
    </Row>

    <Container
      className={
        (pageStyles.marginBottom, instructorStyles.instructorCardContainer)
      }
    >
      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
          {/* instructor */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Max Matthews
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Max}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Ryan Gaus
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Ryan}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Nathan Evans
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Nathan}
                alt="#"
                className={instructorStyles.imgSize}
              />
             </Card>
          </Col>
        </CardDeck>
      </Row>
      <Row className={pageStyles.centerItems}>
        <a
          href="https://hackupstate.medium.com/meet-our-careers-in-code-instructors-teaching-assistants-and-staff-ba39f542ad49"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className={pageStyles.blueButton}>
            {" "}
            {
              content.ui.instructors.instructor_main_content.cohort_one
                .instructor.button.text
            }{" "}
          </Button>{" "}
        </a>
      </Row>
    </Container>
    {/* TA CARDS - COHORT 3 AND 4 */}
    <Row className={pageStyles.pageHeadings}>
      <h2> Cohort 3 and 4 Teaching Assistants</h2>
    </Row>
    <Container
      className={
        (pageStyles.marginBottom, instructorStyles.instructorCardContainer)
      }
    >
      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
          {/* instructor */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                La'Tonia Mertica Sheppard Walker
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={latonia}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Karin Thorne
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Karin}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Melaquan Saffold
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={mel}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Ariel Murphy
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Ariel}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Kaitlyn Warboy
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Kaitlyn}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
            <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Shantina Perez
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={shantina}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
            <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Doug Roussin
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={dougroussin}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
            <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Christi Harlow
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={christie}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
            <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Stephanie Nunez
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={stephanienunez}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
            <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Zachary Hafner
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={zackhafner}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>
    </Container>
    {/* INSTRUCTOR CARDS - COHORT 2 */}
    <Row className={pageStyles.pageHeadings}>
      <h2> Cohort 2 Instructors</h2>
    </Row>

    <Container
      className={
        (pageStyles.marginBottom, instructorStyles.instructorCardContainer)
      }
    >
      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
          {/* instructor */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Max Matthews
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Max}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Karin Thorne
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Karin}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Christy Prensler
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Christy}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Kaitlyn Warboy
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Kaitlyn}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Dana McMullen
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Dana}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Gus Cost
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Gus}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Ryan Gaus
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Ryan}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Joey Buczek
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Joey}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Nathan Evans
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Nathan}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Aneesa Hussain
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Aneesa}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>
      <Row className={pageStyles.centerItems}>
        <a
          href="https://hackupstate.medium.com/meet-our-careers-in-code-instructors-teaching-assistants-and-staff-ba39f542ad49"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className={pageStyles.blueButton}>
            {" "}
            {
              content.ui.instructors.instructor_main_content.cohort_one
                .instructor.button.text
            }{" "}
          </Button>{" "}
        </a>
      </Row>
    </Container>
    {/* ta cards */}
    <Row className={pageStyles.pageHeadings}>
      <h2>Teaching Assistants</h2>
    </Row>

    <Container
      className={
        (pageStyles.marginBottom, instructorStyles.instructorCardContainer)
      }
    >
      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
          {/* instructor */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Dana McMullen
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Dana}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Karin Thorne
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Karin}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Kelley Corey
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Kelley}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Drew Knab
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Drew}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                Kaitlyn Warboy
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Kaitlyn}
                alt="#"
                className={instructorStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>
    </Container>
    {/* INSTRUCTOR CARDS - COHORT 1 */}
    <Row className={pageStyles.pageHeadings}>
      <h2>
        {
          content.ui.instructors.instructor_main_content.cohort_one.instructor
            .header
        }
      </h2>
    </Row>

    <Container
      className={
        (pageStyles.marginBottom, instructorStyles.instructorCardContainer)
      }
    >
      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
          {/* jeff passetti */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one
                    .instructor.cards.jeff.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Jeff}
                alt="Jeff Passetti"
                className={instructorStyles.imgSize}
              />
              <CardTitle>
                <p className={instructorStyles.cardTitle}>
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jeff.modules.text
                  }
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeff.modules.one.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeff.modules.one.text
                    }
                  </a>{" "}
                  |{" "}
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeff.modules.two.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeff.modules.two.text
                    }
                  </a>
                </p>
              </CardTitle>
              <CardText>
                <p className={instructorStyles.cardText}>
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jeff.position.text
                  }
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeff.position.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeff.position.link_text
                    }
                  </a>
                </p>
              </CardText>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.jeff.social.email
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
                      .instructor.cards.jeff.social.linkedin
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
                      .instructor.cards.jeff.social.twitter
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
                      .instructor.cards.jeff.social.website
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
                      .instructor.cards.jeff.social.github
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
              <CardTitle>
                <p className={instructorStyles.cardTitle}>
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.christy.modules.text
                  }
                </p>
              </CardTitle>
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
              <CardTitle>
                <p className={instructorStyles.cardTitle}>
                  {
                    content.ui.instructors.instructor_main_content.cohort_one
                      .instructor.cards.cash.modules.text
                  }
                  <a
                    href={
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.modules.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.modules.link_text
                    }{" "}
                  </a>
                </p>
              </CardTitle>
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
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.zoe.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.zoe.modules.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.zoe.modules.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
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
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jeremy.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeremy.modules.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeremy.modules.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
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
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.gus.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.four.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.four.text
                      }{" "}
                    </a>{" "}
                    |
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.six.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.six.text
                      }{" "}
                    </a>{" "}
                    |
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.seven.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.seven.text
                      }{" "}
                    </a>{" "}
                    |
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.eight.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.gus.modules.eight.text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
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
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.max.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.modules.four.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.modules.four.text
                      }{" "}
                    </a>{" "}
                    |
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.modules.six.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.modules.six.text
                      }{" "}
                    </a>{" "}
                    |
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.modules.seven.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.max.modules.seven.text
                      }{" "}
                    </a>{" "}
                    {/* | */}
                    {/* <a href={content.ui.instructors.instructor_main_content.cohort_one.instructor.cards.max.modules.ten.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      {content.ui.instructors.instructor_main_content.cohort_one.instructor.cards.gus.modules.ten.text} </a> */}
                  </p>
                </CardTitle>
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
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.jake.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jake.modules.four.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jake.modules.four.text
                      }{" "}
                    </a>{" "}
                    {/* | */}
                    {/* <a href={content.ui.instructors.instructor_main_content.cohort_one.instructor.cards.jake.modules.ten.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      {content.ui.instructors.instructor_main_content.cohort_one.instructor.cards.jake.modules.ten.text} </a> */}
                  </p>
                </CardTitle>
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
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.joey.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.joey.modules.four.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.joey.modules.four.text
                      }{" "}
                    </a>{" "}
                    |
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.joey.modules.eleven.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.joey.modules.eleven.text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
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
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.ryan.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.ryan.modules.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.ryan.modules.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
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
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.alice.modules.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.alice.modules.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.alice.modules.link_text
                      }{" "}
                    </a>
                  </p>
                </CardTitle>
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
      <Row className={pageStyles.centerItems}>
        <a
          href={
            content.ui.instructors.instructor_main_content.cohort_one.instructor
              .button.link
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className={pageStyles.blueButton}>
            {" "}
            {
              content.ui.instructors.instructor_main_content.cohort_one
                .instructor.button.text
            }{" "}
          </Button>{" "}
        </a>
      </Row>
    </Container>
    {/* ta cards */}

    <Row className={pageStyles.pageHeadings}>
      <h2>
        {" "}
        {
          content.ui.instructors.instructor_main_content.cohort_one.ta.header
        }{" "}
      </h2>
    </Row>

    <Container className={instructorStyles.instructorCardContainer}>
      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
          {/* jennifer tran */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one.ta
                    .cards.jennifer.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Jennifer}
                alt="Jennifer Tran"
                className={instructorStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.jennifer.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.jennifer.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.jennifer.position.link_text
                      }
                    </a>
                  </p>
                </CardTitle>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.jennifer.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.jennifer.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.jennifer.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.jennifer.social.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGlobe />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.jennifer.social.github
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
              <CardBody>
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .instructor.cards.cash.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.cash.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.cash.position.link_text
                      }
                    </a>
                  </p>
                </CardTitle>
              </CardBody>
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
          {/* david badillo */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one.ta
                    .cards.david.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={David}
                alt="David Badillo"
                className={instructorStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.david.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.david.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.david.position.link_text
                      }
                    </a>
                  </p>
                </CardTitle>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.david.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.david.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.david.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
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
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
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
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.jeremy.position.link_text
                      }
                    </a>
                  </p>
                </CardTitle>
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
          {/* katie watson */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one.ta
                    .cards.katie.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Katie}
                alt="Katie Watson"
                className={instructorStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.katie.position.text
                    }
                    <br />
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.katie.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.katie.position.link_text
                      }
                    </a>
                  </p>
                </CardTitle>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.katie.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* pankaj chandiramani  */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3" className={instructorStyles.longNameStyles}>
                {
                  content.ui.instructors.instructor_main_content.cohort_one.ta
                    .cards.pankaj.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Pankaj}
                alt="Pankaj Chandiramani"
                className={instructorStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.pankaj.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.pankaj.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.pankaj.position.link_text
                      }
                    </a>
                  </p>
                </CardTitle>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.pankaj.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.pankaj.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
          {/* drew knab */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one.ta
                    .cards.drew.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Drew}
                alt="Drew Knab"
                className={instructorStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.drew.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.drew.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.drew.position.link_text
                      }
                    </a>
                  </p>
                </CardTitle>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.drew.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.drew.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.drew.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.drew.social.github
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
          {/* wesam shanaa */}
          <Col sm="4">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one.ta
                    .cards.wesam.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Wesam}
                alt="Wesam Shanaa"
                className={instructorStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.wesam.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.wesam.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.wesam.position.link_text
                      }
                    </a>
                  </p>
                </CardTitle>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.wesam.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.wesam.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
          {/* alice miller */}
          <Col sm="4">
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
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
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
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.instructor.cards.alice.position.link_text
                      }
                    </a>
                  </p>
                </CardTitle>
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
                  <Button className={instructorStyles.cardButton}>
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

      <Row className={instructorStyles.instructorCardRow}>
        <CardDeck>
          {/* garnet grimm */}
          <Col sm="3">
            <Card body className={("shadow-sm", instructorStyles.cardSize)}>
              <CardHeader tag="h3">
                {
                  content.ui.instructors.instructor_main_content.cohort_one.ta
                    .cards.garnet.name
                }
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Placeholder}
                alt="Placeholder profile pic"
                className={instructorStyles.imgSize}
              />
              <CardBody>
                <CardTitle>
                  <p className={instructorStyles.cardTitle}>
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.garnet.position.text
                    }
                    <a
                      href={
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.garnet.position.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {
                        content.ui.instructors.instructor_main_content
                          .cohort_one.ta.cards.garnet.position.link_text
                      }
                    </a>
                  </p>
                </CardTitle>
              </CardBody>
              <CardFooter className={instructorStyles.cardFooter}>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.garnet.social.email
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaEnvelopeSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.garnet.social.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.garnet.social.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitterSquare />{" "}
                </a>
                <a
                  href={
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.garnet.social.github
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
                    content.ui.instructors.instructor_main_content.cohort_one.ta
                      .cards.garnet.office_hours.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <br />
                  <Button size="sm" className={instructorStyles.cardButton}>
                    {" "}
                    {
                      content.ui.instructors.instructor_main_content.cohort_one
                        .ta.cards.garnet.office_hours.text
                    }{" "}
                  </Button>{" "}
                </a>
              </CardFooter>
            </Card>
          </Col>
        </CardDeck>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <a
          href={
            content.ui.instructors.instructor_main_content.cohort_one.ta.button
              .link
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className={pageStyles.blueButton}>
            {" "}
            {
              content.ui.instructors.instructor_main_content.cohort_one.ta
                .button.text
            }{" "}
          </Button>{" "}
        </a>
      </Row>
    </Container>
  </Layout>
);

export default InstructorsPage;
