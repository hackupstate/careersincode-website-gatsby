import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import content from "../content/content.json"
import { Button, Container, Row, Col } from "reactstrap"
import Doug from '../images/team/dougcrescenzi.png'
import Jesse from '../images/team/jesse.png'
import Will from '../images/team/will.png'
import Jason from '../images/team/jason.png'
import pageStyles from './pages.module.css'

const TeamPage = () => (
  <Layout>
    <SEO title="Team" />
    <Container>
      <Row className={pageStyles.pageHeadings}>
        <Col>
          <p> {content.ui.team_main_content.text} </p>
          <a href={content.ui.team_main_content.email} target="_blank" rel="noopener noreferrer"> team@hackupstate.com </a>
        </Col>
      </Row>
      <Row className={pageStyles.pageTeamImageContainer}>
        <Col>
        <img className={pageStyles.imgCircle} src={Jesse} alt="Jesse Peplinski"/>
          <h4 className={pageStyles.pageHeadings}> {content.ui.team_main_content.members.jesse} </h4>
          <p className={pageStyles.pageHeadings}> {content.ui.team_main_content.members.partner} </p>
        <img className={pageStyles.imgCircle} src={Will} alt="Will Guisbond"/>
        <h4 className={pageStyles.pageHeadings}> {content.ui.team_main_content.members.will} </h4>
          <p className={pageStyles.pageHeadings}> {content.ui.team_main_content.members.intern} </p>
        </Col>
        <Col>
        <img className={pageStyles.imgCircle} src={Doug} alt="Doug Crescenzi"/>
        <h4 className={pageStyles.pageHeadings}> {content.ui.team_main_content.members.doug} </h4>
          <p className={pageStyles.pageHeadings}> {content.ui.team_main_content.members.partner} </p>
        <img className={pageStyles.imgCircle} src={Jason} alt="Jason Scharf"/>
        <h4 className={pageStyles.pageHeadings}> {content.ui.team_main_content.members.jason} </h4>
          <p className={pageStyles.pageHeadings}> {content.ui.team_main_content.members.ssr} </p>
        </Col>
      </Row>
      <Row className={pageStyles.pageButtonContainer}>
      <Button className={pageStyles.pageButtons} color="info">
              <a
                href={content.ui.team_main_content.link}
                target="_blank"
                rel="noopener noreferrer"
                className={pageStyles.btnLink}
              >
                {content.ui.team_main_content.button}
              </a>
            </Button>
      </Row>
      <Row className={pageStyles.pageHeadings}>
      <Link to="/">Go Home</Link>
      </Row>
    </Container>
  </Layout>
)

export default TeamPage
