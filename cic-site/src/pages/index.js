import React from "react"
import { Link } from "gatsby"
import { Button, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousels from "../components/carousels"
import BottomRowContainer from "../components/bottomrowcontainer"
import content from "../content/content.json"
import pageStyles from "./pages.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row className={pageStyles.pageHeadings}>
      <Col
        md="12"
      >
        <h3> {content.ui.index_main_content_top_text.copy}</h3>
        <p> {content.ui.index_main_content_top_text.description} </p>
        <Button
          size="lg"
          className={pageStyles.pageButtons}
          color="info"
        >
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
      <Col
        md="12"
      >
        <h3> {content.ui.index_main_content_bottom_text.copy} </h3>
        <p> {content.ui.index_main_content_bottom_text.description} </p>
        <Link to={content.ui.index_main_content_bottom_text.link}>
          <Button
            size="lg"
            color="info"
            className={pageStyles.pageButtons}
          >
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
