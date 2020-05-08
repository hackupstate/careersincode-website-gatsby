import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import content from "../content/content.json"
import {
  Button, Container, Row, Col, Card, CardHeader, CardImg, CardTitle, CardText, CardDeck, CardBody, CardFooter
} from "reactstrap"
import pageStyles from './pages.module.css'
import { FaEnvelopeSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare, FaGlobe, FaIdCard, FaColumns } from 'react-icons/fa'

const InstructorsPage = () => (
  <Layout>
    <SEO title="Instructors" />
    <Container>
      {/* overlay */}
      <div className={pageStyles.greyTechGarden}>
        <Row className={pageStyles.pageContentContainer}>
          <Col>
            <h3 className={pageStyles.instructorStats}> {content.ui.instructors.instructor_main_content.overlay.opportunity.header} </h3>
            <p className={pageStyles.blueParaStats}> {content.ui.instructors.instructor_main_content.overlay.opportunity.subheader} </p>
          </Col>
          <Col>
            <h3 className={pageStyles.instructorStats}> {content.ui.instructors.instructor_main_content.overlay.change.header} </h3>
            <p className={pageStyles.greenParaStats}> {content.ui.instructors.instructor_main_content.overlay.change.subheader} </p>
          </Col>
        </Row>
        <Row className={pageStyles.pageContentContainer}>
          <Col>
            <h3 className={pageStyles.instructorStats}> {content.ui.instructors.instructor_main_content.overlay.success.header} </h3>
            <p className={pageStyles.greenParaStats}> {content.ui.instructors.instructor_main_content.overlay.success.subheader} </p>
          </Col>
          <Col>
            <h3 className={pageStyles.instructorStats}> {content.ui.instructors.instructor_main_content.overlay.measure.header} </h3>
            <p className={pageStyles.blueParaStats}> {content.ui.instructors.instructor_main_content.overlay.measure.subheader} </p>
          </Col>
        </Row>
      </div>
      {/* instructor/ta info w/ buttons */}
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <h3> {content.ui.instructors.instructor_main_content.buttons.instructor.header} </h3>
          <p> {content.ui.instructors.instructor_main_content.buttons.instructor.text} </p>
          <Button className={pageStyles.blueButton}>
            <a href={content.ui.instructors.instructor_main_content.buttons.instructor.apply.link}
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}>
              {content.ui.instructors.instructor_main_content.buttons.instructor.apply.text}
            </a>
          </Button>
          <Col>
            <Button className={pageStyles.blueButton}>
              <a href={content.ui.instructors.instructor_main_content.buttons.instructor.responsibilities.link}
                target="_blank"
                rel="noopener noreferrer"
                className={pageStyles.btnLink}>
                {content.ui.instructors.instructor_main_content.buttons.instructor.responsibilities.text}
              </a>
            </Button>
          </Col>
          <Col>
            <Button className={pageStyles.blueButton}>
              <a href={content.ui.instructors.instructor_main_content.buttons.instructor.admissions.link}
                target="_blank"
                rel="noopener noreferrer"
                className={pageStyles.btnLink}>
                {content.ui.instructors.instructor_main_content.buttons.instructor.admissions.text}
              </a>
            </Button>
          </Col>
        </Col>
      </Row>
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <h3> {content.ui.instructors.instructor_main_content.buttons.ta.header} </h3>
          <p> {content.ui.instructors.instructor_main_content.buttons.ta.text} </p>
          <Button className={pageStyles.blueButton}>
            <a href={content.ui.instructors.instructor_main_content.buttons.ta.apply.link}
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}>
              {content.ui.instructors.instructor_main_content.buttons.ta.apply.text}
            </a>
          </Button>
        </Col>
      </Row>

      <Link to="/">Go Home</Link>

    </Container>

  </Layout>
)

export default InstructorsPage
