import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import content from "../content/content.json"
import { Container, Row, Col } from "reactstrap"

const MissionPage = () => (
  <Layout>
    <SEO title="Mission" />
    <Container>
      <Row>
        <Col className="text-center">
          <h3> {content.ui.mission_main_content.header1.title} </h3>
          <p> {content.ui.mission_main_content.header1.text1} </p>
          <p> {content.ui.mission_main_content.header1.text2} </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="text-center">
          <h3> {content.ui.mission_main_content.header2.title} </h3>
          <p> {content.ui.mission_main_content.header2.text} </p>
          <h3> {content.ui.mission_main_content.header3} </h3>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="text-center">
          <h3> {content.ui.mission_main_content.header4.title} </h3>
          <h4> {content.ui.mission_main_content.header4.subheader1} </h4>
          <p> {content.ui.mission_main_content.header4.text} </p>
          <h4> {content.ui.mission_main_content.header4.subheader2.title} </h4>
          <p> {content.ui.mission_main_content.header4.subheader2.text} </p>
          <h4> {content.ui.mission_main_content.header4.subheader3.title} </h4>
          <p> {content.ui.mission_main_content.header4.subheader3.text} </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="text-center">
          <Link to="/">Go Home</Link>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default MissionPage
