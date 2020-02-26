import React from "react"
import { Link } from "gatsby"
import { Button, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousels from "../components/carousels"
import BottomRowContainer from "../components/bottomrowcontainer"
import content from "../content/content.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row>
      <Col
        md="12"
        style={{
          textAlign: "center",
        }}
      >
        <h3> {content.ui.index_main_content_top_text.copy}</h3>
        <p> {content.ui.index_main_content_top_text.description} </p>
        <Button
          size="lg"
          style={{
            background: "#2de187",
            width: "auto",
            borderRadius: "0px",
          }}
        >
          <a
            href="https://medium.com/@hackupstate/announcing-hack-upstates-careers-in-code-a8ff0bfeddbf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
            }}
          >
            {" "}
            {content.ui.index_main_content_top_text.button}{" "}
          </a>
        </Button>
      </Col>
    </Row>
    <Row>
      <Col
        md="12"
        style={{
          textAlign: "center",
        }}
      >
        <h3> {content.ui.index_main_content_bottom_text.copy} </h3>
        <p> {content.ui.index_main_content_bottom_text.description} </p>
        <Link to={content.ui.index_main_content_bottom_text.link}>
          <Button
            size="lg"
            style={{
              background: "#2de187",
              width: "auto",
              borderRadius: "0px",
            }}
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
