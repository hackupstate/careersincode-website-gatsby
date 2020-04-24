import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import content from "../content/content.json"
import { Container, Row, Col, Button } from "reactstrap"
import pageStyles from './pages.module.css'

const PressPage = () => (
  <Layout>
    <SEO title="Press" />
    <Container>
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <h3> {content.ui.about.press_main_content.kickoff.header} </h3>
          <p> {content.ui.about.press_main_content.kickoff.text} </p>
          <Button className={pageStyles.pageButtons} color="info">
            <a
              href={content.ui.about.press_main_content.kickoff.link}
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {content.ui.about.press_main_content.kickoff.button}
            </a>
          </Button>
        </Col>
        <Col>
          <h3> {content.ui.about.press_main_content.graduation.header} </h3>
          <p> {content.ui.about.press_main_content.graduation.text} </p>
          <Button className={pageStyles.pageButtons} color="info">
            <a
              href={content.ui.about.press_main_content.graduation.link}
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {content.ui.about.press_main_content.graduation.button}
            </a>
          </Button>
        </Col>
      </Row>
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <h3> {content.ui.about.press_main_content.logos.header} </h3>
          <p> {content.ui.about.press_main_content.logos.text} </p>
          <Button className={pageStyles.pageButtons} color="info">
            <a
              href={content.ui.about.press_main_content.logos.action}
              className={pageStyles.btnLink}
              download
            >
              {content.ui.about.press_main_content.logos.button}
            </a>
          </Button>
        </Col>
        <Col>
          <h3> {content.ui.about.press_main_content.presentation.header} </h3>
          <p> Our intern Will Guisbond presented a talk at <a href={content.ui.about.press_main_content.presentation.text_link} target="_blank" rel="noopener noreferrer"> GDG CR DevFest2019 </a> called "Lessons Learned from Organizing a Coding Bootcamp". Listen to his experience and how Careers in Code plans to move forward! </p>
          <Button className={pageStyles.pageButtons} color="info">
            <a
              href={content.ui.about.press_main_content.presentation.link}
              target="_blank"
              rel="noopener noreferrer"
              className={pageStyles.btnLink}
            >
              {content.ui.about.press_main_content.presentation.button}
            </a>
          </Button>
        </Col>
      </Row>
      <hr />
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <h3> {content.ui.about.press_main_content.news.header} </h3>
        </Col>
      </Row>
      <Row className={pageStyles.pageContentContainer}>
        <Row className={pageStyles.pageHeadings}>
          <p> {content.ui.about.press_main_content.news.south_side.text} </p>
          <a href={content.ui.about.press_main_content.news.south_side.address} target="_blank" rel="noopener noreferrer"> {content.ui.about.press_main_content.news.south_side.link} </a>
        </Row>
        <Row className={pageStyles.pageHeadings}>
          <p> {content.ui.about.press_main_content.news.waer.text} </p>
          <a href={content.ui.about.press_main_content.news.waer.address_cic} target="_blank" rel="noopener noreferrer"> {content.ui.about.press_main_content.news.waer.link_cic} </a>
        </Row>
        <Row className={pageStyles.pageHeadings}>
          <p> {content.ui.about.press_main_content.news.waer.text} </p>
          <a href={content.ui.about.press_main_content.news.waer.address_bootcamp} target="_blank" rel="noopener noreferrer"> {content.ui.about.press_main_content.news.waer.link_bootcamp} </a>
        </Row>
        <Row className={pageStyles.pageHeadings}>
          <p> {content.ui.about.press_main_content.news.waer.text} </p>
          <a href={content.ui.about.press_main_content.news.waer.address_coding} target="_blank" rel="noopener noreferrer"> {content.ui.about.press_main_content.news.waer.link_coding} </a>
        </Row>
        <Row className={pageStyles.pageHeadings}>
          <p> {content.ui.about.press_main_content.news.spectrum.text} </p>
          <a href={content.ui.about.press_main_content.news.spectrum.address} target="_blank" rel="noopener noreferrer"> {content.ui.about.press_main_content.news.spectrum.link} </a>
        </Row>
        <Row className={pageStyles.pageHeadings}>
          <p> {content.ui.about.press_main_content.news.syracuse.text} </p>
          <a href={content.ui.about.press_main_content.news.syracuse.address} target="_blank" rel="noopener noreferrer"> {content.ui.about.press_main_content.news.syracuse.link} </a>
        </Row>
      </Row>
      <hr />
      <Row className={pageStyles.pageContentContainer}>
        <Col>
          <h3> {content.ui.about.press_main_content.medium.header} </h3>
        </Col>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <a href={content.ui.about.press_main_content.medium.testimonials.link} target="_blank" rel="noopener noreferrer"> {content.ui.about.press_main_content.medium.testimonials.text} </a>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <a href={content.ui.about.press_main_content.medium.capstone.link} target="_blank" rel="noopener noreferrer"> {content.ui.about.press_main_content.medium.capstone.text} </a>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <a href={content.ui.about.press_main_content.medium.classroom.link} target="_blank" rel="noopener noreferrer"> {content.ui.about.press_main_content.medium.classroom.text} </a>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <a href={content.ui.about.press_main_content.medium.team.link} target="_blank" rel="noopener noreferrer"> {content.ui.about.press_main_content.medium.team.text} </a>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <a href={content.ui.about.press_main_content.medium.tas.link} target="_blank" rel="noopener noreferrer"> {content.ui.about.press_main_content.medium.tas.text} </a>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <a href={content.ui.about.press_main_content.medium.instructors.link} target="_blank" rel="noopener noreferrer"> {content.ui.about.press_main_content.medium.instructors.text} </a>
      </Row>
      <Row className={pageStyles.pageHeadings}>
        <a href={content.ui.about.press_main_content.medium.students.link} target="_blank" rel="noopener noreferrer"> {content.ui.about.press_main_content.medium.students.text} </a>
      </Row>
      <Row className={pageStyles.pageContentContainer}>
        <Link to="/">Go Home</Link>
      </Row>
    </Container>
  </Layout>
)

export default PressPage
