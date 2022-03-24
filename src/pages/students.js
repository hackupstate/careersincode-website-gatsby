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

import Banner from "../components/banner";

import bannerStyles from "../components/banner.module.css";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import placeholderimage from "../images/students/placeholder.jpg";

import coreymitchell from "../images/students/cohort-3/coreymitchell.jpg";
import dougroussin from "../images/students/cohort-3/DougRoussin.jpg";
import scotyia from "../images/students/cohort-3/scotyia.jpg";
import stephanienunez from "../images/students/cohort-3/stephanienunez.jpg";
import tiffanywilliams from "../images/students/cohort-3/tiffany.jpg";
import wayneboyd from "../images/students/cohort-3/wayneboyd.jpg";
import zachhafner from "../images/students/cohort-3/zachhafner.jpeg";
import nicoleb from "../images/students/cohort-3/nicoleb.jpg";
import shantina from "../images/students/cohort-3/shantina.png";
// import daniellefloyd from "";
// import markell from "";
// import christi from "";
// import larry from "";
// import chaz from "";
// import strange from "";


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
          btnLink={"https://forms.gle/S4RDs8MEd2rmQGyy6"}
          btnText={"Join the Fall, 2022 waitlist"}
        />

        {/* <JumboButton
          btnLink={"/admissions/arpa/Careers in Code - Student Admissions Process - ARPA.pdf"}
          btnText={"View student admissions process"}
        /> */}

      </JumbotronComponent>
    </Header>
    <SEO title="Students" />
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


    {/* ADD STUDENT HEADSHOTS HERE */}
    <Container className={pageStyles.whiteContainer}>
      <Row className={pageStyles.pageHeadings}>
        <h2>Cohort 3 Students (Spring 2022)</h2>
      </Row>
    </Container>
    <Container
      fluid
      className={(pageStyles.marginBottom, alumniStyles.alumniCardContainer)}
    >
      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Danielle Floyd
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={placeholderimage}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Markell Osborne
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={placeholderimage}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Tiffany Williams
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={tiffanywilliams}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Wayne Boyd
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={wayneboyd}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Christi Harlow
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={placeholderimage}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Larry Goodman
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={placeholderimage}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>
      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Stephanie Nunez
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={stephanienunez}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Zachary Hafner
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={zachhafner}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Chaz Dickerson
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={placeholderimage}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
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
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Scotyia Bain
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={scotyia}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Corey Mitchell
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={coreymitchell}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row className={alumniStyles.alumniCardRow}>
        <CardDeck>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Strange Maeweather
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={placeholderimage}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
              Nicole Broadnax
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={nicoleb}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card body className={("shadow-sm", alumniStyles.cardSize)}>
              <CardHeader tag="h3">
                Doug Roussin
              </CardHeader>
              <CardImg
                top
                width="100%"
                src={dougroussin}
                alt="#"
                className={alumniStyles.imgSize}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>
    </Container>
    {/* END STUDENT HEADSHOTS */}

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

    {/* HELPFUL RESOURCES */}
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
          <FontAwesomeIcon icon={faUserCheck} size="3x" />
          <h3>
            {" "}
            Admissions
          </h3>
          <a
            href={"/admissions/arpa/Careers in Code - Student Admissions Process - ARPA.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            <Button size="md" className={pageStyles.blueButton}>
            View admissions process
            </Button>
          </a>
        </Col>

        <Col className={prospectiveStyles.studentLinkColumn}>
          <FontAwesomeIcon icon={faGraduationCap} size="3x" />
          <h3>Alumni</h3>
          <a
            href={
              content.ui.classroom.student_resource_links.cohort1_button_link
            }
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            <Button size="md" className={pageStyles.blueButton}>
              View our alumni
            </Button>
          </a>
        </Col>
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
            href={"/admissions/arpa/Careers in Code - Student Responsibilities and Expectations - Spring 2022 (ARPA) Cohort.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            <Button size="md" className={pageStyles.blueButton}>
              {" "}
              View responsibilites and expectations
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
            href={"/admissions/arpa/Careers in Code - Capstone Project - Students - Spring 2022 (ARPA) Cohort.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            <Button size="md" className={pageStyles.blueButton}>
              {" "}
             View capstone requirements
            </Button>
          </a>
        </Col>
      </Row>
    </Container>

    <Banner>
      <Row className={bannerStyles.bannerGreen}>
        <Col className={pageStyles.centerText}>
          <a
            href={"https://forms.gle/B2qnHM5TDsTGYVAa9"}
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.bannerLink}
          >
            APPLY FOR OUR SPRING 2022 (APRA) COHORT TODAY!{" "}
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </Col>
      </Row>
    </Banner>

  </Layout>
);

export default ProspectivePage;
