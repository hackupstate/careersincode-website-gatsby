import React from "react"
import { Link } from "gatsby"
import { Button, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousels from "../components/carousels"
import BottomRowContainer from "../components/bottomrowcontainer"
import content from "../content/content.json"
import pageStyles from "./pages.module.css"
import Header from "../components/header"
import NavComponent from "../components/nav"
import JumbotronComponent from "../components/jumbotron"
import JumboButton from "../components/jumboButton"

const IndexPage = props => (
  <Layout>
    <Header>
      <NavComponent />
      <JumbotronComponent
        heading={content.ui.index_jumbotron.heading}
        subheading={content.ui.index_jumbotron.subheading}
      >
        <JumboButton
          btnLink={content.ui.index_jumbotron.button1.link}
          btnText={content.ui.index_jumbotron.button1.text}
        />
        <JumboButton
          btnLink={content.ui.index_jumbotron.button2.link}
          btnText={content.ui.index_jumbotron.button2.text}
        />
      </JumbotronComponent>
    </Header>
    <SEO title="Home" />
    <Row className={pageStyles.pageHeadings}>
      <Col md="12">
        <h3> {content.ui.index_main_content_top_text.copy}</h3>
        <p> {content.ui.index_main_content_top_text.description} </p>
        <Button size="lg" className={pageStyles.pageButtons} color="info">
          <a
            href="https://medium.com/@hackupstate/announcing-hack-upstates-careers-in-code-a8ff0bfeddbf"
            target="_blank"
            rel="noopener noreferrer"
            className={pageStyles.btnLink}
          >
            {" "}
            {content.ui.index_main_content_top_text.button}{" "}
          </a>
        </Button>
      </Col>
    </Row>
    <Row className={pageStyles.pageHeadings}>
      <Col md="12">
        <h3> {content.ui.index_main_content_bottom_text.copy} </h3>
        <p> {content.ui.index_main_content_bottom_text.description} </p>
        <Link to={content.ui.index_main_content_bottom_text.link}>
          <Button size="lg" color="info" className={pageStyles.pageButtons}>
            {content.ui.index_main_content_bottom_text.button}
          </Button>
        </Link>
      </Col>
    </Row>
    <br />
    <Carousels />
    <br />
    <BottomRowContainer />
    <br />
  </Layout>
)

export default IndexPage
