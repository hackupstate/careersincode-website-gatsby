import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import NavComponent from "../components/nav";
import JumbotronComponent from "../components/jumbotron";
import SEO from "../components/seo";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilRuler,
  faMountain,
  faToolbox,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import content from "../content/content.json";
import pageStyles from "./pages.module.css";
import studentStyles from "./students.module.css";

const Students = () => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={
          content.ui.classroom.currStudents_main_content.currStudents_jumbotron
            .heading
        }
      />
    </Header>
    <SEO title="Current Students" />
    <Container className={pageStyles.whiteContainer}>
      <Row className={(pageStyles.centerText, pageStyles.centerContentColumns)}>
        <h3 className={pageStyles.pageHeadings}>
          {
            content.ui.classroom.currStudents_main_content.classroom_info
              .classroom_heading
          }
        </h3>
        <p>
          {
            content.ui.classroom.currStudents_main_content.classroom_info
              .classroom_subheading
          }
        </p>

        <Button size="md" className={pageStyles.blueButton}>
          <a
            href={
              content.ui.classroom.currStudents_main_content.classroom_info
                .classroom_button_link
            }
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            {
              content.ui.classroom.currStudents_main_content.classroom_info
                .classroom_button_text
            }
          </a>
        </Button>
      </Row>
      <Container fluid className={pageStyles.whiteContainer}>
        <Row>
          <Col className={studentStyles.iconBtnColumn}>
            <h3 className={pageStyles.pageHeadings}>
              {
                content.ui.classroom.student_resource_links
                  .student_resource_title
              }
            </h3>
          </Col>
        </Row>
        <Row className={pageStyles.marginBottom}>
          <Col className={pageStyles.centerContentColumns}>
            <FontAwesomeIcon icon={faListAlt} size="3x" />
            <h3>{content.ui.classroom.student_resource_links.syllabus_text}</h3>
            <Button size="md" className={pageStyles.blueButton}>
              <a
                href={
                  content.ui.classroom.student_resource_links
                    .syllabus_button_link
                }
                target="_blank"
                rel="noopener noreferrer"
                className={pageStyles.btnLink}
              >
                {
                  content.ui.classroom.student_resource_links
                    .syllabus_button_text
                }
              </a>
            </Button>
          </Col>
          <Col className={pageStyles.centerContentColumns}>
            <FontAwesomeIcon icon={faPencilRuler} size="3x" />
            <h3>
              {" "}
              {
                content.ui.classroom.student_resource_links
                  .responsibilities_text
              }
            </h3>
            <Button size="md" className={pageStyles.blueButton}>
              <a
                href={
                  content.ui.classroom.student_resource_links
                    .responsibilities_button_link
                }
                target="_blank"
                rel="noopener noreferrer"
                className={pageStyles.btnLink}
              >
                {" "}
                {
                  content.ui.classroom.student_resource_links
                    .admissions_button_text
                }
              </a>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className={pageStyles.centerContentColumns}>
            <FontAwesomeIcon icon={faMountain} size="3x" />
            <h3>
              {" "}
              {content.ui.classroom.student_resource_links.capstone_text}
            </h3>
            <Button size="md" className={pageStyles.blueButton}>
              <a
                href={
                  content.ui.classroom.student_resource_links
                    .capstone_button_link
                }
                target="_blank"
                rel="noopener noreferrer"
                className={pageStyles.btnLink}
              >
                {" "}
                {
                  content.ui.classroom.student_resource_links
                    .capstone_button_text
                }
              </a>
            </Button>
          </Col>
          <Col className={pageStyles.centerContentColumns}>
            <FontAwesomeIcon icon={faToolbox} size="3x" />
            <h3>
              {content.ui.classroom.student_resource_links.resources_text}
            </h3>
            <Button size="md" className={pageStyles.blueButton}>
              <a
                href={
                  content.ui.classroom.student_resource_links
                    .resources_button_link
                }
                target="_blank"
                rel="noopener noreferrer"
                className={pageStyles.btnLink}
              >
                {
                  content.ui.classroom.student_resource_links
                    .resources_button_text
                }
              </a>
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  </Layout>
);

export default Students;
