import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import {
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
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaEnvelopeSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaGlobe,
  FaIdCard,
  FaColumns,
} from "react-icons/fa";
import {
  faGraduationCap,
  faUserCheck,
  faPencilRuler,
  faMountain,
  faToolbox,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import prospectiveStyles from "./students.module.css";
import alumniStyles from "./alumni.module.css";

import Ariel from "../images/students/cohort-2/ariel.png";
import brandy from "../images/students/cohort-2/brandy.jpg";
import brielle from "../images/students/cohort-2/brielle.jpg";
import carolyn from "../images/students/cohort-2/carolyn.png";
import dominique from "../images/students/cohort-2/dominique.png";
import elina from "../images/students/cohort-2/elina.jpeg";
import Fobelia from "../images/students/cohort-2/Fobelia.png";
import jaheal from "../images/students/cohort-2/jaheal.jpg";
import karen from "../images/students/cohort-2/karen.jpg";
import kyle from "../images/students/cohort-2/kyle.jpg";
import latonia from "../images/students/cohort-2/latonia.png";
import mel from "../images/students/cohort-2/mel.jpg";
import sara from "../images/students/cohort-2/sara.png";
import shah from "../images/students/cohort-2/shah.jpg";
import shantina from "../images/students/cohort-2/shantina.png";
import susan from "../images/students/cohort-2/susan.jpg";



const ProspectivePage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.classroom.prospective_jumbotron.heading}
        subheading={content.ui.students.alumni.alumni_jumbotron.subheading}
      >
        {/* <JumboButton
          btnLink={content.ui.classroom.prospective_jumbotron.button.link}
          btnText={content.ui.classroom.prospective_jumbotron.button.text}
        /> */}

        <JumboButton
          btnLink={"https://forms.gle/w3vyujNdsAuLsUHR9"}
          btnText={"Join The Cohort 3 Waitlist"}
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Prospective" />
    <Container fluid className={prospectiveStyles.blueStatContainer}>
      <Row className={prospectiveStyles.statRows}>
        <Col className={prospectiveStyles.statColumns}>
          <h3 className={prospectiveStyles.prospectiveStats}>
            {content.ui.classroom.students_stats.stats_days}
          </h3>
          <p className={prospectiveStyles.blueParaStats}>
            {content.ui.classroom.students_stats.stats_days_text}
            <sup>{content.ui.classroom.students_stats.footnote_1_super}</sup>
          </p>
        </Col>
        <Col className={prospectiveStyles.statColumns}>
          <h3 className={prospectiveStyles.prospectiveStats}>
            {content.ui.classroom.students_stats.stats_salary}
          </h3>
          <p className={prospectiveStyles.greenParaStats}>
            {content.ui.classroom.students_stats.stats_salary_text}
            <sup>{content.ui.classroom.students_stats.footnote_2_super}</sup>
          </p>
        </Col>
      </Row>
      <Row className={prospectiveStyles.statRows}>
        <Col className={prospectiveStyles.statColumns}>
          <h3 className={prospectiveStyles.prospectiveStats}>
            {content.ui.classroom.students_stats.stats_jobs}
          </h3>
          <p className={prospectiveStyles.blueParaStats}>
            {content.ui.classroom.students_stats.stats_jobs_text}
            <sup>{content.ui.classroom.students_stats.footnote_2_super}</sup>
          </p>
        </Col>
        <Col className={prospectiveStyles.statColumns}>
          <h3 className={prospectiveStyles.prospectiveStats}>
            {content.ui.classroom.students_stats.stats_increase}
          </h3>
          <p className={prospectiveStyles.greenParaStats}>
            {content.ui.classroom.students_stats.stats_increase_text}
            <sup>{content.ui.classroom.students_stats.footnote_2_super}</sup>
          </p>
        </Col>
      </Row>
    </Container>
    <Container fluid className={pageStyles.whiteContainer}>
      <Row>
        <Col>
          <sup>{content.ui.classroom.students_stats.footnote_1_super}</sup>
          <a href={content.ui.classroom.students_stats.footnote_1_link}>
            {content.ui.classroom.students_stats.footnote_1_name}
          </a>
          <br />
          <br />
          <sup>{content.ui.classroom.students_stats.footnote_2_super}</sup>
          <a href={content.ui.classroom.students_stats.footnote_2_link}>
            {content.ui.classroom.students_stats.footnote_2_name}
          </a>
        </Col>
      </Row>
    </Container>

    <Container className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadings}>
        <h2> Cohort 2 Students </h2>
      </Row>
    </Container>
    <Container
      fluid
      className={(pageStyles.marginBottom, alumniStyles.alumniCardContainer)}
    >
      <Row className={alumniStyles.alumniCardRow}>
        {/* card deck begins */}
        <CardDeck>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Ariel Murphy
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Ariel}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Brandy Mack
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={brandy}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Brielle Dailey
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={brielle}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Carolyn Sprague
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={carolyn}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Dominique Wynn
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={dominique}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Elina Nguyen
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={elina}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>
      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Fobealia Barrett-Wynn
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={Fobelia}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Jaheal Smith
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={jaheal}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Karen Baxter
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={karen}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Kyle Gilbert
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={kyle}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                La'Tonia Mertica Sheppard Walker
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={latonia}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Melaquan Saffold
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={mel}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Sara Dow
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={sara}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Shah Mansoor
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={shah}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Shantina Perez
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={shantina}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          {/* student name */}
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Susan Baiter
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={susan}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>
      {/* card decks end */}
    </Container>
    <Container fluid className={pageStyles.marginBottom}>
      <Row>
        <Col className={pageStyles.centerText}>
          <h3>{content.ui.classroom.students_congrats}</h3>
        </Col>
      </Row>
      <Row>
        <Col className={pageStyles.centerItems}>
          <iframe
            title="Congrats"
            width="560"
            height="315"
            src={content.ui.classroom.students_congrats_video}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </Container>
    <Container fluid className={pageStyles.whiteContainer}>
      <Row className={(pageStyles.centerText, pageStyles.centerContentColumns)}>
        <h3 className={pageStyles.pageHeadings}>
          {
            content.ui.classroom.currStudents_main_content.classroom_info
              .classroom_heading
          }
        </h3>
      </Row>
      <Row className={prospectiveStyles.studentLinkRow}>
        <Col className={prospectiveStyles.studentLinkColumn}>
          <FontAwesomeIcon icon={faGraduationCap} size="3x" />
          <h3>{content.ui.classroom.student_resource_links.cohort1_text}</h3>
          <a
            href={
              content.ui.classroom.student_resource_links.cohort1_button_link
            }
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            <Button size="md" className={pageStyles.blueButton}>
              {content.ui.classroom.student_resource_links.cohort1_button_text}
            </Button>
          </a>
        </Col>
        <Col className={prospectiveStyles.studentLinkColumn}>
          <FontAwesomeIcon icon={faUserCheck} size="3x" />
          <h3>
            {" "}
            {content.ui.classroom.student_resource_links.admissions_text}
          </h3>
          <a
            href={
              content.ui.classroom.student_resource_links
                .admissions_button_link
            }
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            <Button size="md" className={pageStyles.blueButton}>
              {
                content.ui.classroom.student_resource_links
                  .admissions_button_text
              }
            </Button>
          </a>
        </Col>
        <Col className={prospectiveStyles.studentLinkColumn}>
          <FontAwesomeIcon icon={faListAlt} size="3x" />
          <h3>{content.ui.classroom.student_resource_links.syllabus_text}</h3>
          <a
            href={
              content.ui.classroom.student_resource_links
                .syllabus_button_link
            }
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            <Button size="md" className={pageStyles.blueButton}>
              {
                content.ui.classroom.student_resource_links
                  .syllabus_button_text
              }
            </Button>
          </a>
        </Col>
      </Row>
      <Row className={prospectiveStyles.studentLinkRow}>
        <Col className={prospectiveStyles.studentLinkColumn}>
          <FontAwesomeIcon icon={faPencilRuler} size="3x" />
          <h3>
            {" "}
            {
              content.ui.classroom.student_resource_links
                .responsibilities_text
            }
          </h3>
          <a
            href={
              content.ui.classroom.student_resource_links
                .responsibilities_button_link
            }
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            <Button size="md" className={pageStyles.blueButton}>
              {" "}
              {
                content.ui.classroom.student_resource_links
                  .admissions_button_text
              }
            </Button>
          </a>
        </Col>
        <Col className={prospectiveStyles.studentLinkColumn}>
          <FontAwesomeIcon icon={faMountain} size="3x" />
          <h3>
            {" "}
            {content.ui.classroom.student_resource_links.capstone_text}
          </h3>
          <a
            href={
              content.ui.classroom.student_resource_links
                .capstone_button_link
            }
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            <Button size="md" className={pageStyles.blueButton}>
              {" "}
              {
                content.ui.classroom.student_resource_links
                  .capstone_button_text
              }
            </Button>
          </a>
        </Col>
        <Col className={prospectiveStyles.studentLinkColumn}>
          <FontAwesomeIcon icon={faToolbox} size="3x" />
          <h3>
            {content.ui.classroom.student_resource_links.resources_text}
          </h3>
          <a
            href={
              content.ui.classroom.student_resource_links
                .resources_button_link
            }
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            <Button size="md" className={pageStyles.blueButton}>
              {
                content.ui.classroom.student_resource_links
                  .resources_button_text
              }
            </Button>
          </a>
        </Col>
      </Row>
    </Container>

  </Layout>
);

export default ProspectivePage;
