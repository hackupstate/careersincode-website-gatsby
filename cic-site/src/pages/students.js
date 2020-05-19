import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import content from "../content/content.json"
import { Container, Row, Col, Button } from "reactstrap"
import pageStyles from "./pages.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  //   faGraduationCap,
  faPencilRuler,
  //   faUserCheck,
  faMountain,
  faToolbox,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons"

const Students = () => (
  <Layout>
    <SEO title="Current Students" />
    <Container fluid>
      <Row className={(pageStyles.centerText, pageStyles.centerContentColumns)}>
        <h3>
          {
            content.ui.currStudents_main_content.classroom_info
              .classroom_heading
          }
        </h3>
        <p>
          {
            content.ui.currStudents_main_content.classroom_info
              .classroom_subheading
          }
        </p>

        <Button color="primary" className={pageStyles.marginBottom}>
          <a
            href={
              content.ui.currStudents_main_content.classroom_info
                .classroom_button_link
            }
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            {
              content.ui.currStudents_main_content.classroom_info
                .classroom_button_text
            }
          </a>
        </Button>
      </Row>
      <Row className={(pageStyles.marginBottom, pageStyles.centerText)}>
        <Col>
          <h3>
            {
              content.ui.students_main_content.student_resource_links
                .student_resource_title
            }
          </h3>
        </Col>
      </Row>
      <Row className={pageStyles.marginBottom}>
        <Col className={pageStyles.centerContentColumns}>
          <FontAwesomeIcon icon={faListAlt} size="3x" />
          <h3>
            {
              content.ui.students_main_content.student_resource_links
                .syllabus_text
            }
          </h3>
          <Button color="info">
            <a
              href={
                content.ui.students_main_content.student_resource_links
                  .syllabus_button_link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {
                content.ui.students_main_content.student_resource_links
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
              content.ui.students_main_content.student_resource_links
                .responsibilities_text
            }
          </h3>
          <Button color="info">
            <a
              href={
                content.ui.students_main_content.student_resource_links
                  .responsibilities_button_link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {" "}
              {
                content.ui.students_main_content.student_resource_links
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
            {
              content.ui.students_main_content.student_resource_links
                .capstone_text
            }
          </h3>
          <Button color="info">
            <a
              href={
                content.ui.students_main_content.student_resource_links
                  .capstone_button_link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {" "}
              {
                content.ui.students_main_content.student_resource_links
                  .capstone_button_text
              }
            </a>
          </Button>
        </Col>
        <Col className={pageStyles.centerContentColumns}>
          <FontAwesomeIcon icon={faToolbox} size="3x" />
          <h3>
            {
              content.ui.students_main_content.student_resource_links
                .resources_text
            }
          </h3>
          <Button color="info">
            <a
              href={
                content.ui.students_main_content.student_resource_links
                  .resources_button_link
              }
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {
                content.ui.students_main_content.student_resource_links
                  .resources_button_text
              }
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Students
