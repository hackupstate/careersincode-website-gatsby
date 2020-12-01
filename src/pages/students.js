import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import JumboButton from "../components/jumbobutton";
import SEO from "../components/seo";
import { Button, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const ProspectivePage = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.classroom.prospective_jumbotron.heading}
        subheading={content.ui.students.alumni.alumni_jumbotron.subheading}
      >
        <JumboButton
          btnLink={content.ui.classroom.prospective_jumbotron.button.link}
          btnText={content.ui.classroom.prospective_jumbotron.button.text}
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
